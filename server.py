"""
ZholRules — Flask Backend Server
Telegram Mini App для ПДД Казахстана
"""

import os
import json
import hashlib
import hmac
import time
from functools import wraps
from datetime import datetime, date, timedelta

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO, emit, join_room, leave_room
from dotenv import load_dotenv
from loguru import logger
from urllib.parse import unquote

# ============================================
# LOAD ENV
# ============================================
load_dotenv()

# ============================================
# APP INIT
# ============================================
app = Flask(__name__, static_folder='.', static_url_path='')
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///zholrules.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# CORS — only allow own domains
CORS_ORIGINS = os.getenv('CORS_ORIGINS', 'https://angelok-5725.github.io').split(',')
CORS(app, origins=CORS_ORIGINS)

# SocketIO for real-time competition
socketio = SocketIO(app, cors_allowed_origins='*', async_mode='threading')

# Database — Neon PostgreSQL or SQLite fallback
database_url = os.getenv('DATABASE_URL', '').strip()
if not database_url:
    database_url = 'sqlite:///zholrules.db'
    logger.warning('DATABASE_URL not set, using local SQLite')
else:
    logger.info(f'Using database: {database_url[:40]}...')

app.config['SQLALCHEMY_DATABASE_URI'] = database_url
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
    'pool_pre_ping': True,
    'pool_recycle': 300,
    'connect_args': {'sslmode': 'require'} if 'postgresql' in database_url else {},
}
db = SQLAlchemy(app)

# ============================================
# MODELS
# ============================================
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    tg_id = db.Column(db.BigInteger, unique=True, nullable=False)
    name = db.Column(db.String(100), default='')
    goal = db.Column(db.String(50), default='newbie')
    exam_date = db.Column(db.String(20), default='')
    is_admin = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_active = db.Column(db.DateTime, default=datetime.utcnow)

    stats = db.relationship('UserStats', backref='user', uselist=False, cascade='all, delete-orphan')
    category_stats = db.relationship('UserCategoryStats', backref='user', cascade='all, delete-orphan')
    errors = db.relationship('UserError', backref='user', cascade='all, delete-orphan')
    subscription = db.relationship('Subscription', backref='user', uselist=False, cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'tg_id': self.tg_id,
            'name': self.name,
            'goal': self.goal,
            'exam_date': self.exam_date,
            'is_admin': self.is_admin,
            'created_at': self.created_at.isoformat() if self.created_at else None,
        }


class UserStats(db.Model):
    __tablename__ = 'user_stats'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    total_answered = db.Column(db.Integer, default=0)
    total_correct = db.Column(db.Integer, default=0)
    streak = db.Column(db.Integer, default=0)
    last_active_date = db.Column(db.String(20), default='')
    stars = db.Column(db.Integer, default=0)
    lives = db.Column(db.Integer, default=3)
    game_high_score = db.Column(db.Integer, default=0)

    def to_dict(self):
        return {
            'total_answered': self.total_answered,
            'total_correct': self.total_correct,
            'accuracy': round((self.total_correct / self.total_answered * 100), 1) if self.total_answered > 0 else 0,
            'streak': self.streak,
            'stars': self.stars,
            'lives': self.lives,
            'game_high_score': self.game_high_score,
        }


class UserCategoryStats(db.Model):
    __tablename__ = 'user_category_stats'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category_id = db.Column(db.String(50), nullable=False)
    answered = db.Column(db.Integer, default=0)
    correct = db.Column(db.Integer, default=0)

    def to_dict(self):
        return {
            'category_id': self.category_id,
            'answered': self.answered,
            'correct': self.correct,
            'accuracy': round((self.correct / self.answered * 100), 1) if self.answered > 0 else 0,
        }


class UserError(db.Model):
    __tablename__ = 'user_errors'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    question_id = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class Subscription(db.Model):
    __tablename__ = 'subscriptions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    plan = db.Column(db.String(20), default='free')  # free, pro
    started_at = db.Column(db.DateTime, default=datetime.utcnow)
    expires_at = db.Column(db.DateTime, nullable=True)
    is_active = db.Column(db.Boolean, default=True)

    def to_dict(self):
        return {
            'plan': self.plan,
            'is_active': self.is_active,
            'expires_at': self.expires_at.isoformat() if self.expires_at else None,
        }


class Setting(db.Model):
    __tablename__ = 'settings'

    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(50), unique=True, nullable=False)
    value = db.Column(db.Text, nullable=False)
    description = db.Column(db.String(200), default='')
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'key': self.key,
            'value': self.value,
            'description': self.description,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
        }


class Competition(db.Model):
    __tablename__ = 'competitions'

    id = db.Column(db.Integer, primary_key=True)
    player1_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    player2_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    status = db.Column(db.String(20), default='waiting')  # waiting, active, finished
    questions = db.Column(db.Text, nullable=False)  # JSON array of question IDs
    player1_score = db.Column(db.Integer, default=0)
    player2_score = db.Column(db.Integer, default=0)
    player1_correct = db.Column(db.Integer, default=0)
    player2_correct = db.Column(db.Integer, default=0)
    winner_id = db.Column(db.Integer, nullable=True)  # user_id of winner, null = draw
    started_at = db.Column(db.DateTime, nullable=True)
    finished_at = db.Column(db.DateTime, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    player1 = db.relationship('User', foreign_keys=[player1_id])
    player2 = db.relationship('User', foreign_keys=[player2_id])

    def to_dict(self):
        return {
            'id': self.id,
            'player1_id': self.player1_id,
            'player2_id': self.player2_id,
            'player1_name': self.player1.name if self.player1 else '???',
            'player2_name': self.player2.name if self.player2 else '???',
            'status': self.status,
            'player1_score': self.player1_score,
            'player2_score': self.player2_score,
            'player1_correct': self.player1_correct,
            'player2_correct': self.player2_correct,
            'winner_id': self.winner_id,
            'started_at': self.started_at.isoformat() if self.started_at else None,
            'finished_at': self.finished_at.isoformat() if self.finished_at else None,
            'created_at': self.created_at.isoformat() if self.created_at else None,
        }


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(50), unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    icon = db.Column(db.String(10), default='📚')
    color = db.Column(db.String(7), default='#FFB300')
    sort_order = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'slug': self.slug,
            'name': self.name,
            'icon': self.icon,
            'color': self.color,
            'sort_order': self.sort_order,
        }


class Question(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50), nullable=False)
    question = db.Column(db.Text, nullable=False)
    media_type = db.Column(db.String(20), default='none')
    media_url = db.Column(db.String(500), default='')
    multiple_choice = db.Column(db.Boolean, default=False)
    options = db.Column(db.Text, nullable=False)  # JSON array
    correct_options = db.Column(db.Text, nullable=False)  # JSON array
    explanation = db.Column(db.Text, default='')
    difficulty = db.Column(db.String(20), default='easy')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category,
            'question': self.question,
            'media_type': self.media_type,
            'media_url': self.media_url,
            'multiple_choice': self.multiple_choice,
            'options': json.loads(self.options),
            'correct_options': json.loads(self.correct_options),
            'explanation': self.explanation,
            'difficulty': self.difficulty,
        }


# ============================================
# TELEGRAM WEBAPP VALIDATION
# ============================================

def validate_telegram_webapp(init_data: str, bot_token: str) -> dict:
    """Validate Telegram WebApp initData and return user data.
    
    Per Telegram spec (confirmed by debug tests):
    - secret_key = HMAC_SHA256(key=b'WebAppData', msg=bot_token)
    - data_check_string = sorted key=UNQUOTED_value with \n separator
    - ALL fields included (including signature), only hash is removed
    """
    try:
        raw_data = dict(param.split('=', 1) for param in init_data.split('&'))
        received_hash = raw_data.pop('hash', '')
        # Keep signature — it IS part of data_check_string

        # URL-decode ALL values (dec_lf_sig variant from debug tests)
        data = {k: unquote(v) for k, v in raw_data.items()}


        # Build data check string: sorted, \n separated, URL-decoded values
        data_check_string = '\n'.join(
            f'{k}={v}' for k, v in sorted(data.items())
        )

        # HMAC validation
        secret_key = hmac.new(
            b'WebAppData', bot_token.encode(), hashlib.sha256
        ).digest()

        computed_hash = hmac.new(
            secret_key, data_check_string.encode(), hashlib.sha256
        ).hexdigest()

        if computed_hash != received_hash:
            return None

        # Check auth_date (24 hour window)
        auth_date = int(data.get('auth_date', 0))
        age = time.time() - auth_date
        if age > 86400:
            return None

        user = json.loads(data.get('user', '{}'))
        return user
    except Exception as e:
        logger.error(f'Telegram validation error: {e}')
        return None


def require_auth(f):
    """Decorator to require valid Telegram WebApp auth."""
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get('Authorization', '')
        bot_token = os.getenv('TELEGRAM_BOT_TOKEN', '')
        owner_id = os.getenv('OWNER_TELEGRAM_ID', 'NOT_SET')


        if not bot_token:
            # Dev mode — skip auth
            request.tg_user = {'id': 12345678, 'first_name': 'Dev'}
            return f(*args, **kwargs)

        if not auth_header.startswith('tma '):
            return jsonify({'error': 'Unauthorized — open via Telegram bot'}), 401

        init_data = auth_header[4:]
        user_data = validate_telegram_webapp(init_data, bot_token)

        if not user_data:
            return jsonify({'error': 'Invalid signature'}), 401

        request.tg_user = user_data
        logger.info(f'Auth OK: user_id={user_data.get("id")}')
        return f(*args, **kwargs)
    return decorated


def require_admin(f):
    """Decorator to require admin privileges."""
    @wraps(f)
    def decorated(*args, **kwargs):
        owner_id = int(os.getenv('OWNER_TELEGRAM_ID', 0))
        tg_id = request.tg_user.get('id', 0)

        if tg_id != owner_id:
            return jsonify({'error': 'Admin access required'}), 403

        return f(*args, **kwargs)
    return decorated


# ============================================
# STATIC FILES
# ============================================
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')


@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)


# ============================================
# API: USER
# ============================================
@app.route('/api/user', methods=['GET'])
@require_auth
def get_user():
    """Get or create user profile."""
    tg_id = request.tg_user['id']
    owner_id = int(os.getenv('OWNER_TELEGRAM_ID', 0))
    is_admin = (tg_id == owner_id)

    logger.info(f'get_user: tg_id={tg_id}, owner_id={owner_id}, is_admin={is_admin}')

    user = User.query.filter_by(tg_id=tg_id).first()

    if not user:
        user = User(
            tg_id=tg_id,
            name=request.tg_user.get('first_name', ''),
            is_admin=is_admin,
        )
        stats = UserStats(user=user)
        db.session.add(user)
        db.session.add(stats)
        db.session.commit()
    else:
        # Always sync admin status from env
        if user.is_admin != is_admin:
            user.is_admin = is_admin
            db.session.commit()

    # Update last active
    user.last_active = datetime.utcnow()
    db.session.commit()

    return jsonify({
        'user': user.to_dict(),
        'stats': user.stats.to_dict() if user.stats else {},
        'category_stats': [cs.to_dict() for cs in user.category_stats],
        'errors': [e.question_id for e in user.errors],
        'subscription': {
            'plan': get_user_subscription(user).plan,
            'is_pro': is_pro(user),
            'error_limit': get_error_limit(user),
            'error_count': UserError.query.filter_by(user_id=user.id).count(),
        },
    })


@app.route('/api/user', methods=['PATCH'])
@require_auth
def update_user():
    """Update user profile (goal, exam_date, name)."""
    tg_id = request.tg_user['id']
    user = User.query.filter_by(tg_id=tg_id).first()

    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.get_json()
    if 'name' in data:
        user.name = data['name']
    if 'goal' in data:
        user.goal = data['goal']
    if 'exam_date' in data:
        user.exam_date = data['exam_date']

    db.session.commit()
    return jsonify(user.to_dict())


# ============================================
# API: QUESTIONS
# ============================================
@app.route('/api/questions', methods=['GET'])
def get_questions():
    """Get all questions, optionally filtered by category."""
    category = request.args.get('category')
    difficulty = request.args.get('difficulty')

    query = Question.query
    if category:
        query = query.filter_by(category=category)
    if difficulty:
        query = query.filter_by(difficulty=difficulty)

    questions = query.all()
    return jsonify([q.to_dict() for q in questions])


@app.route('/api/questions/<int:question_id>', methods=['GET'])
def get_question(question_id):
    """Get single question by ID."""
    q = Question.query.get_or_404(question_id)
    return jsonify(q.to_dict())


@app.route('/api/questions', methods=['POST'])
@require_auth
@require_admin
def create_question():
    """Create a new question (admin only)."""
    data = request.get_json()

    required = ['category', 'question', 'options', 'correct_options']
    for field in required:
        if field not in data:
            return jsonify({'error': f'Missing field: {field}'}), 400

    question = Question(
        category=data['category'],
        question=data['question'],
        media_type=data.get('media_type', 'none'),
        media_url=data.get('media_url', ''),
        multiple_choice=data.get('multiple_choice', False),
        options=json.dumps(data['options']),
        correct_options=json.dumps(data['correct_options']),
        explanation=data.get('explanation', ''),
        difficulty=data.get('difficulty', 'easy'),
    )

    db.session.add(question)
    db.session.commit()

    return jsonify(question.to_dict()), 201


@app.route('/api/questions/<int:question_id>', methods=['DELETE'])
@require_auth
@require_admin
def delete_question(question_id):
    """Delete a question (admin only)."""
    q = Question.query.get_or_404(question_id)
    db.session.delete(q)
    db.session.commit()
    return jsonify({'message': 'Deleted'}), 200


@app.route('/api/questions/export', methods=['GET'])
def export_questions():
    """Export all questions as JSON (for backup/transfer)."""
    questions = Question.query.all()
    categories = [
        {"id": "znaki", "name": "Дорожные знаки", "icon": "🚸", "color": "#FFD700"},
        {"id": "razmetka", "name": "Дорожная разметка", "icon": "⬜", "color": "#FFFFFF"},
        {"id": "prioritet", "name": "Приоритет и проезд", "icon": "🚦", "color": "#FF4444"},
        {"id": "skorost", "name": "Скорость и дистанция", "icon": "💨", "color": "#FF6B00"},
        {"id": "manevr", "name": "Маневрирование", "icon": "🔄", "color": "#4CAF50"},
        {"id": "ostanovka", "name": "Остановка и стоянка", "icon": "🅿️", "color": "#2196F3"},
        {"id": "svetofor", "name": "Светофоры и регулировщики", "icon": "🚦", "color": "#E91E63"},
        {"id": "pešhodcy", "name": "Пешеходы и пассажиры", "icon": "🚶", "color": "#9C27B0"},
        {"id": "dtp", "name": "ДТП и безопасность", "icon": "🚑", "color": "#F44336"},
        {"id": "osnovy", "name": "Основы ПДД", "icon": "📖", "color": "#00BCD4"},
    ]

    return jsonify({
        'categories': categories,
        'questions': [q.to_dict() for q in questions],
    })


@app.route('/api/questions/import', methods=['POST'])
@require_auth
@require_admin
def import_questions():
    """Import questions from JSON (admin only)."""
    data = request.get_json()
    questions = data.get('questions', [])

    imported = 0
    for q_data in questions:
        question = Question(
            category=q_data['category'],
            question=q_data['question'],
            media_type=q_data.get('media_type', 'none'),
            media_url=q_data.get('media_url', ''),
            multiple_choice=q_data.get('multiple_choice', False),
            options=json.dumps(q_data['options']),
            correct_options=json.dumps(q_data['correct_options']),
            explanation=q_data.get('explanation', ''),
            difficulty=q_data.get('difficulty', 'easy'),
        )
        db.session.add(question)
        imported += 1

    db.session.commit()
    return jsonify({'imported': imported}), 201


# ============================================
# API: ANSWER
# ============================================
@app.route('/api/answer', methods=['POST'])
@require_auth
def submit_answer():
    """Submit an answer and update stats."""
    tg_id = request.tg_user['id']
    data = request.get_json()

    question_id = data.get('question_id')
    selected_options = data.get('selected_options', [])

    user = User.query.filter_by(tg_id=tg_id).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404

    question = Question.query.get(question_id)
    if not question:
        return jsonify({'error': 'Question not found'}), 404

    correct = json.loads(question.correct_options)
    is_correct = sorted(selected_options) == sorted(correct)

    # Update user stats
    stats = user.stats
    if not stats:
        stats = UserStats(user=user)
        db.session.add(stats)

    stats.total_answered += 1
    if is_correct:
        stats.total_correct += 1

    # Update category stats
    cat_stats = UserCategoryStats.query.filter_by(
        user_id=user.id, category_id=question.category
    ).first()

    if not cat_stats:
        cat_stats = UserCategoryStats(user_id=user.id, category_id=question.category)
        db.session.add(cat_stats)

    cat_stats.answered += 1
    if is_correct:
        cat_stats.correct += 1

    # Track errors + enforce free plan limit
    error_blocked = False
    if not is_correct:
        existing_error = UserError.query.filter_by(
            user_id=user.id, question_id=question_id
        ).first()

        if not existing_error:
            error_limit = get_error_limit(user)
            current_errors = UserError.query.filter_by(user_id=user.id).count()

            if error_limit is not None and current_errors >= error_limit:
                error_blocked = True
            else:
                error = UserError(user_id=user.id, question_id=question_id)
                db.session.add(error)

    # Update streak
    today = date.today().isoformat()
    if stats.last_active_date != today:
        if stats.last_active_date:
            last_date = datetime.strptime(stats.last_active_date, '%Y-%m-%d').date()
            diff = (date.today() - last_date).days
            if diff == 1:
                stats.streak += 1
            elif diff > 1:
                stats.streak = 1
        else:
            stats.streak = 1
        stats.last_active_date = today

    db.session.commit()

    error_limit = get_error_limit(user)
    error_count = UserError.query.filter_by(user_id=user.id).count()

    return jsonify({
        'is_correct': is_correct,
        'correct_options': correct,
        'explanation': question.explanation,
        'stats': stats.to_dict(),
        'error_blocked': error_blocked,
        'error_limit': error_limit,
        'error_count': error_count,
        'errors_remaining': None if error_limit is None else max(0, error_limit - error_count),
    })


@app.route('/api/errors', methods=['GET'])
@require_auth
def get_errors():
    """Get user's error question IDs."""
    tg_id = request.tg_user['id']
    user = User.query.filter_by(tg_id=tg_id).first()

    if not user:
        return jsonify([])

    errors = UserError.query.filter_by(user_id=user.id).all()
    error_question_ids = [e.question_id for e in errors]

    # Optionally return full questions
    if request.args.get('full') == 'true':
        questions = Question.query.filter(Question.id.in_(error_question_ids)).all()
        return jsonify([q.to_dict() for q in questions])

    return jsonify(error_question_ids)


@app.route('/api/errors/<int:question_id>', methods=['DELETE'])
@require_auth
def delete_error(question_id):
    """Remove a question from user's errors (mastered)."""
    tg_id = request.tg_user['id']
    user = User.query.filter_by(tg_id=tg_id).first()

    if not user:
        return jsonify({'error': 'User not found'}), 404

    error = UserError.query.filter_by(user_id=user.id, question_id=question_id).first()
    if error:
        db.session.delete(error)
        db.session.commit()

    return jsonify({'message': 'Removed from errors'})


@app.route('/api/errors/bulk', methods=['POST'])
@require_auth
def add_errors_bulk():
    """Add multiple questions to user's errors (for cards review mode)."""
    tg_id = request.tg_user['id']
    user = User.query.filter_by(tg_id=tg_id).first()

    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.get_json()
    question_ids = data.get('question_ids', [])

    added = 0
    for qid in question_ids:
        existing = UserError.query.filter_by(user_id=user.id, question_id=qid).first()
        if not existing:
            error = UserError(user_id=user.id, question_id=qid)
            db.session.add(error)
            added += 1

    db.session.commit()
    return jsonify({'added': added}), 201


# ============================================
# API: LEADERBOARD
# ============================================
@app.route('/api/leaderboard', methods=['GET'])
def leaderboard():
    """Get top users by game high score."""
    top_users = (
        db.session.query(User, UserStats)
        .join(UserStats)
        .order_by(UserStats.game_high_score.desc())
        .limit(50)
        .all()
    )

    return jsonify([
        {
            'rank': idx + 1,
            'name': user.name or 'Аноним',
            'high_score': stats.game_high_score,
        }
        for idx, (user, stats) in enumerate(top_users)
    ])


@app.route('/api/game-score', methods=['POST'])
@require_auth
def update_game_score():
    """Update user's mini-game high score."""
    tg_id = request.tg_user['id']
    data = request.get_json()
    score = data.get('score', 0)

    user = User.query.filter_by(tg_id=tg_id).first()
    if not user or not user.stats:
        return jsonify({'error': 'User not found'}), 404

    if score > user.stats.game_high_score:
        user.stats.game_high_score = score
        db.session.commit()

    return jsonify({
        'high_score': user.stats.game_high_score,
        'is_new_record': score >= user.stats.game_high_score,
    })


# ============================================
# API: CATEGORIES
# ============================================
@app.route('/api/categories', methods=['GET'])
def get_categories():
    """Get available categories with question counts."""
    cats = Category.query.order_by(Category.sort_order, Category.name).all()
    result = []
    for cat in cats:
        d = cat.to_dict()
        d['count'] = Question.query.filter_by(category=cat.slug).count()
        result.append(d)
    return jsonify(result)


@app.route('/api/categories', methods=['POST'])
@require_auth
@require_admin
def create_category():
    """Create a new category (admin only)."""
    data = request.get_json()
    name = data.get('name', '').strip()
    if not name:
        return jsonify({'error': 'Name required'}), 400

    slug = data.get('slug', '').strip()
    if not slug:
        slug = name.lower().replace(' ', '-').replace('_', '-')

    if Category.query.filter_by(slug=slug).first():
        return jsonify({'error': f'Category "{slug}" already exists'}), 409

    cat = Category(
        slug=slug,
        name=name,
        icon=data.get('icon', '📚'),
        color=data.get('color', '#FFB300'),
        sort_order=data.get('sort_order', 0),
    )
    db.session.add(cat)
    db.session.commit()
    logger.info(f'Category created: {slug} ({name})')
    return jsonify(cat.to_dict()), 201


@app.route('/api/categories/<int:cat_id>', methods=['PUT'])
@require_auth
@require_admin
def update_category(cat_id):
    """Update a category (admin only)."""
    cat = Category.query.get_or_404(cat_id)
    data = request.get_json()

    if 'name' in data:
        cat.name = data['name']
    if 'slug' in data:
        cat.slug = data['slug']
    if 'icon' in data:
        cat.icon = data['icon']
    if 'color' in data:
        cat.color = data['color']
    if 'sort_order' in data:
        cat.sort_order = data['sort_order']

    db.session.commit()
    logger.info(f'Category updated: {cat.slug}')
    return jsonify(cat.to_dict())


@app.route('/api/categories/<int:cat_id>', methods=['DELETE'])
@require_auth
@require_admin
def delete_category(cat_id):
    """Delete a category (admin only)."""
    cat = Category.query.get_or_404(cat_id)
    slug = cat.slug
    db.session.delete(cat)
    db.session.commit()
    logger.info(f'Category deleted: {slug}')
    return jsonify({'message': f'Deleted {slug}'})


# ============================================
# SETTINGS HELPERS
# ============================================

DEFAULT_SETTINGS = {
    'pro_stars_price': {'value': '1500', 'description': 'Цена Pro подписки в Telegram Stars'},
    'free_error_limit': {'value': '10', 'description': 'Максимум ошибок для бесплатного плана'},
    'max_daily_lives': {'value': '3', 'description': 'Количество жизней в день'},
    'daily_questions_target': {'value': '10', 'description': 'Цель по вопросам в день'},
    'exam_questions': {'value': '40', 'description': 'Количество вопросов в экзамене'},
    'exam_time_minutes': {'value': '40', 'description': 'Время экзамена в минутах'},
    'mini_game_duration': {'value': '60', 'description': 'Длительность мини-игры в секундах'},
    'free_plan_enabled': {'value': 'true', 'description': 'Бесплатный план доступен'},
    'pro_plan_enabled': {'value': 'true', 'description': 'Pro план доступен для покупки'},
    'lives_stars_price': {'value': '5', 'description': 'Цена +3 жизней в Telegram Stars'},
}


def get_setting(key, default=None):
    """Get a setting value from the database."""
    setting = Setting.query.filter_by(key=key).first()
    if setting:
        return setting.value
    if key in DEFAULT_SETTINGS:
        return DEFAULT_SETTINGS[key]['value']
    return default


def set_setting(key, value, description=''):
    """Set a setting value in the database."""
    setting = Setting.query.filter_by(key=key).first()
    if setting:
        setting.value = str(value)
        if description:
            setting.description = description
    else:
        setting = Setting(
            key=key,
            value=str(value),
            description=description or DEFAULT_SETTINGS.get(key, {}).get('description', '')
        )
        db.session.add(setting)
    db.session.commit()
    return setting


def init_default_settings():
    """Initialize default settings if they don't exist."""
    for key, data in DEFAULT_SETTINGS.items():
        if not Setting.query.filter_by(key=key).first():
            setting = Setting(
                key=key,
                value=data['value'],
                description=data['description']
            )
            db.session.add(setting)
    db.session.commit()


# ============================================
# SUBSCRIPTION HELPERS
# ============================================

# These will now be read from settings
FREE_ERROR_LIMIT = 10
PRO_STARS_PRICE = 1500  # Telegram Stars per month


def get_user_subscription(user):
    """Get or create subscription for user."""
    sub = Subscription.query.filter_by(user_id=user.id).first()
    if not sub:
        sub = Subscription(user_id=user.id, plan='free', is_active=True)
        db.session.add(sub)
        db.session.commit()
    return sub


def is_pro(user):
    """Check if user has active Pro subscription."""
    sub = get_user_subscription(user)
    if sub.plan == 'pro' and sub.is_active:
        if sub.expires_at and sub.expires_at > datetime.utcnow():
            return True
        elif not sub.expires_at:
            return True
    return False


def get_error_limit(user):
    """Return error limit for user. None = unlimited."""
    if is_pro(user):
        return None  # unlimited
    # Read from settings DB
    limit_str = get_setting('free_error_limit', '10')
    try:
        return int(limit_str)
    except (ValueError, TypeError):
        return 10


# ============================================
# API: SETTINGS (Admin only)
# ============================================
@app.route('/api/settings', methods=['GET'])
@require_auth
@require_admin
def get_settings():
    """Get all settings."""
    settings = Setting.query.all()
    return jsonify([s.to_dict() for s in settings])


@app.route('/api/settings', methods=['POST'])
@require_auth
@require_admin
def update_settings():
    """Update multiple settings at once."""
    data = request.get_json()
    settings_data = data.get('settings', [])

    updated = 0
    for item in settings_data:
        key = item.get('key')
        value = item.get('value')
        description = item.get('description', '')
        if key and value is not None:
            set_setting(key, value, description)
            updated += 1

    return jsonify({'updated': updated}), 200


@app.route('/api/settings/<key>', methods=['PUT'])
@require_auth
@require_admin
def update_setting(key):
    """Update a single setting."""
    data = request.get_json()
    value = data.get('value')
    description = data.get('description', '')

    if value is None:
        return jsonify({'error': 'Value required'}), 400

    setting = set_setting(key, value, description)
    return jsonify(setting.to_dict()), 200


# ============================================
# API: SUBSCRIPTION
# ============================================
@app.route('/api/subscription', methods=['GET'])
@require_auth
def get_subscription():
    """Get current subscription info."""
    tg_id = request.tg_user['id']
    user = User.query.filter_by(tg_id=tg_id).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404

    sub = get_user_subscription(user)
    error_count = UserError.query.filter_by(user_id=user.id).count()
    error_limit = get_error_limit(user)

    return jsonify({
        'plan': sub.plan,
        'is_active': sub.is_active,
        'expires_at': sub.expires_at.isoformat() if sub.expires_at else None,
        'is_pro': is_pro(user),
        'error_count': error_count,
        'error_limit': error_limit,  # None = unlimited
        'errors_remaining': None if error_limit is None else max(0, error_limit - error_count),
    })


@app.route('/api/subscription/activate', methods=['POST'])
@require_auth
def activate_subscription():
    """Activate Pro subscription (called after Telegram Stars payment)."""
    tg_id = request.tg_user['id']
    user = User.query.filter_by(tg_id=tg_id).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404

    sub = get_user_subscription(user)
    sub.plan = 'pro'
    sub.is_active = True
    sub.started_at = datetime.utcnow()
    # 30 days from now
    sub.expires_at = datetime.utcnow() + timedelta(days=30)
    db.session.commit()

    logger.info(f'Pro activated: user={tg_id}')
    return jsonify({
        'plan': 'pro',
        'expires_at': sub.expires_at.isoformat(),
        'message': 'Pro subscription activated!'
    })


# ============================================
# API: PAYMENTS (Telegram Stars)
# ============================================
@app.route('/api/payment/invoice', methods=['POST'])
@require_auth
def create_invoice():
    """Create a Telegram Stars invoice link for Pro subscription."""
    import requests as http_requests

    tg_id = request.tg_user['id']
    bot_token = os.getenv('TELEGRAM_BOT_TOKEN', '')
    if not bot_token:
        return jsonify({'error': 'Bot token not configured'}), 500

    # Build payload
    payload = json.dumps({
        'user_id': tg_id,
        'product': 'pro_subscription',
        'duration_days': 30,
        'timestamp': int(time.time()),
    })

    # Create invoice link via Telegram Bot API
    resp = http_requests.post(
        f'https://api.telegram.org/bot{bot_token}/createInvoiceLink',
        json={
            'title': 'ZholRules Pro',
            'description': 'Pro подписка на 30 дней — безлимитные тесты и ошибки',
            'payload': payload,
            'provider_token': '',  # Empty for Telegram Stars
            'currency': 'XTR',  # Telegram Stars
            'prices': [{'label': 'Pro 30 дней', 'amount': PRO_STARS_PRICE}],
        },
        timeout=10,
    )

    data = resp.json()
    if not data.get('ok'):
        logger.error(f'Invoice creation failed: {data}')
        return jsonify({'error': 'Failed to create invoice', 'details': data}), 500

    logger.info(f'Invoice created: user={tg_id} amount={PRO_STARS_PRICE} Stars')
    return jsonify({
        'invoice_url': data['result'],
        'amount': PRO_STARS_PRICE,
    })


@app.route('/api/payment/invoice-lives', methods=['POST'])
@require_auth
def create_lives_invoice():
    """Create a Telegram Stars invoice link for extra lives."""
    import requests as http_requests

    tg_id = request.tg_user['id']
    bot_token = os.getenv('TELEGRAM_BOT_TOKEN', '')
    lives_price = int(get_setting('lives_stars_price', '5'))

    if not bot_token:
        # Dev mode: add lives directly
        user = User.query.filter_by(tg_id=tg_id).first()
        if user and user.stats:
            user.stats.lives += 3
            db.session.commit()
        return jsonify({'dev_mode': True, 'lives_added': 3})

    payload = json.dumps({
        'user_id': tg_id,
        'product': 'extra_lives',
        'amount': 3,
        'timestamp': int(time.time()),
    })

    resp = http_requests.post(
        f'https://api.telegram.org/bot{bot_token}/createInvoiceLink',
        json={
            'title': 'ZholRules +3 Жизни',
            'description': '+3 жизни для прохождения экзамена',
            'payload': payload,
            'provider_token': '',
            'currency': 'XTR',
            'prices': [{'label': '+3 Жизни', 'amount': lives_price}],
        },
        timeout=10,
    )

    data = resp.json()
    if not data.get('ok'):
        logger.error(f'Lives invoice failed: {data}')
        return jsonify({'error': 'Failed to create invoice'}), 500

    return jsonify({
        'invoice_url': data['result'],
        'amount': lives_price,
    })


@app.route('/webhook/telegram', methods=['POST'])
def telegram_webhook():
    """Telegram webhook for payments and other events."""
    import requests as http_requests

    bot_token = os.getenv('TELEGRAM_BOT_TOKEN', '')
    update = request.get_json(force=True)

    # Step 1: Handle pre-checkout (approve the payment)
    if 'pre_checkout_query' in update:
        query = update['pre_checkout_query']
        payload_str = query.get('invoice_payload', '{}')

        try:
            payload = json.loads(payload_str)
        except Exception:
            payload = {}

        user_id = payload.get('user_id', 0)
        product = payload.get('product', '')

        if product not in ('pro_subscription', 'extra_lives'):
            # Reject unknown products
            http_requests.post(
                f'https://api.telegram.org/bot{bot_token}/answerPreCheckoutQuery',
                json={'pre_checkout_query_id': query['id'], 'ok': False,
                      'error_message': 'Неизвестный товар'},
                timeout=5,
            )
            return jsonify({'ok': True})

        # Approve
        http_requests.post(
            f'https://api.telegram.org/bot{bot_token}/answerPreCheckoutQuery',
            json={'pre_checkout_query_id': query['id'], 'ok': True},
            timeout=5,
        )
        logger.info(f'Pre-checkout approved: user={user_id} product={product}')
        return jsonify({'ok': True})

    # Step 2: Handle successful payment
    if update.get('message', {}).get('successful_payment'):
        payment = update['message']['successful_payment']
        user_id = update['message']['from']['id']
        payload_str = payment.get('invoice_payload', '{}')

        try:
            payload = json.loads(payload_str)
        except Exception:
            payload = {}

        product = payload.get('product', '')
        duration = payload.get('duration_days', 30)
        telegram_charge_id = payment.get('telegram_payment_charge_id', '')

        if product == 'pro_subscription':
            # Find user and activate subscription
            user = User.query.filter_by(tg_id=user_id).first()
            if user:
                sub = get_user_subscription(user)
                sub.plan = 'pro'
                sub.is_active = True
                sub.started_at = datetime.utcnow()
                sub.expires_at = datetime.utcnow() + timedelta(days=duration)
                db.session.commit()

                logger.info(f'Pro activated via webhook: user={user_id} expires={sub.expires_at}')

                # Send confirmation message
                http_requests.post(
                    f'https://api.telegram.org/bot{bot_token}/sendMessage',
                    json={
                        'chat_id': user_id,
                        'text': f'✅ Pro подписка активирована!\n\n'
                                f'Действует 30 дней.\n'
                                f'Безлимитные тесты и ошибки.\n\n'
                                f'Чек: `{telegram_charge_id[:20]}...`',
                        'parse_mode': 'Markdown',
                    },
                    timeout=5,
                )
            else:
                logger.error(f'User not found for webhook payment: {user_id}')

        if product == 'extra_lives':
            lives_amount = payload.get('amount', 3)
            user = User.query.filter_by(tg_id=user_id).first()
            if user and user.stats:
                user.stats.lives += lives_amount
                db.session.commit()

                logger.info(f'Lives added via webhook: user={user_id} +{lives_amount}')

                http_requests.post(
                    f'https://api.telegram.org/bot{bot_token}/sendMessage',
                    json={
                        'chat_id': user_id,
                        'text': f'❤️ +{lives_amount} жизней добавлено!\n\n'
                                f'Теперь у тебя {user.stats.lives} жизней.',
                    },
                    timeout=5,
                )
            else:
                logger.error(f'User not found for lives payment: {user_id}')

        return jsonify({'ok': True})

    # Step 3: Handle refund (optional)
    if update.get('message', {}).get('successful_payment'):
        pass  # Already handled above

    # Handle /paysupport command
    if update.get('message', {}).get('text') == '/paysupport':
        chat_id = update['message']['from']['id']
        http_requests.post(
            f'https://api.telegram.org/bot{bot_token}/sendMessage',
            json={
                'chat_id': chat_id,
                'text': '🛟 По вопросам оплаты напишите @angelok_5725',
            },
            timeout=5,
        )
        return jsonify({'ok': True})

    return jsonify({'ok': True})


@app.route('/api/webhook/setup', methods=['POST'])
def setup_webhook():
    """Setup Telegram webhook URL (run once after deploy)."""
    import requests as http_requests

    bot_token = os.getenv('TELEGRAM_BOT_TOKEN', '')
    if not bot_token:
        return jsonify({'error': 'No bot token'}), 500

    # Determine webhook URL from request
    webhook_url = request.get_json().get('url', '')
    if not webhook_url:
        return jsonify({'error': 'Missing url in body'}), 400

    resp = http_requests.post(
        f'https://api.telegram.org/bot{bot_token}/setWebhook',
        json={
            'url': webhook_url,
            'allowed_updates': ['message', 'pre_checkout_query'],
        },
        timeout=10,
    )

    data = resp.json()
    if data.get('ok'):
        logger.info(f'Webhook set: {webhook_url}')
        return jsonify({'ok': True, 'url': webhook_url})
    else:
        return jsonify({'ok': False, 'error': data.get('description', 'Unknown')}), 500


# ============================================
# API: HEALTH CHECK
# ============================================
@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint."""
    return jsonify({
        'status': 'ok',
        'timestamp': datetime.utcnow().isoformat(),
        'version': '1.0.0',
    })


# ============================================
# DATABASE INIT
# ============================================
DEFAULT_CATEGORIES = [
    {'slug': 'znaki', 'name': 'Дорожные знаки', 'icon': '🚸', 'color': '#FFD700', 'sort_order': 1},
    {'slug': 'razmetka', 'name': 'Дорожная разметка', 'icon': '⬜', 'color': '#FFFFFF', 'sort_order': 2},
    {'slug': 'prioritet', 'name': 'Приоритет и проезд', 'icon': '🚦', 'color': '#FF4444', 'sort_order': 3},
    {'slug': 'skorost', 'name': 'Скорость и дистанция', 'icon': '💨', 'color': '#FF6B00', 'sort_order': 4},
    {'slug': 'manevr', 'name': 'Маневрирование', 'icon': '🔄', 'color': '#4CAF50', 'sort_order': 5},
    {'slug': 'ostanovka', 'name': 'Остановка и стоянка', 'icon': '🅿️', 'color': '#2196F3', 'sort_order': 6},
    {'slug': 'svetofor', 'name': 'Светофоры и регулировщики', 'icon': '🚦', 'color': '#E91E63', 'sort_order': 7},
    {'slug': 'peschodcy', 'name': 'Пешеходы и пассажиры', 'icon': '🚶', 'color': '#9C27B0', 'sort_order': 8},
    {'slug': 'dtp', 'name': 'ДТП и безопасность', 'icon': '🚑', 'color': '#F44336', 'sort_order': 9},
    {'slug': 'osnovy', 'name': 'Основы ПДД', 'icon': '📖', 'color': '#00BCD4', 'sort_order': 10},
]


def init_db():
    """Create tables and seed data from JSON."""
    with app.app_context():
        db.create_all()

        # Seed default categories if empty
        if Category.query.count() == 0:
            for cat_data in DEFAULT_CATEGORIES:
                cat = Category(**cat_data)
                db.session.add(cat)
            db.session.commit()
            logger.info(f'Seeded {len(DEFAULT_CATEGORIES)} default categories')

        # Seed default settings
        init_default_settings()
        logger.info('Default settings initialized')

        # Seed questions from JSON if empty
        if Question.query.count() == 0:
            questions_file = os.path.join(os.path.dirname(__file__), 'data', 'questions.json')
            if os.path.exists(questions_file):
                with open(questions_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)

                for q_data in data.get('questions', []):
                    question = Question(
                        id=q_data['id'],
                        category=q_data['category'],
                        question=q_data['question'],
                        media_type=q_data.get('media_type', 'none'),
                        media_url=q_data.get('media_url', ''),
                        multiple_choice=q_data.get('multiple_choice', False),
                        options=json.dumps(q_data['options']),
                        correct_options=json.dumps(q_data['correct_options']),
                        explanation=q_data.get('explanation', ''),
                        difficulty=q_data.get('difficulty', 'easy'),
                    )
                    db.session.add(question)

                db.session.commit()
                logger.info(f'Seeded {len(data.get("questions", []))} questions from JSON')


# ============================================
# SOCKETIO: COMPETITION MODE
# ============================================

# In-memory matchmaking queue
waiting_players = []  # list of {user_id, name, sid}
active_competitions = {}  # competition_id -> {player1, player2, questions, ...}


@socketio.on('connect')
def handle_connect():
    logger.info(f'Client connected: {request.sid}')


@socketio.on('disconnect')
def handle_disconnect():
    logger.info(f'Client disconnected: {request.sid}')
    # Remove from waiting queue
    global waiting_players
    waiting_players = [p for p in waiting_players if p.get('sid') != request.sid]


@socketio.on('competition_join')
def handle_competition_join(data):
    """Player joins the matchmaking queue."""
    user_id = data.get('user_id')
    name = data.get('name', 'Аноним')

    if not user_id:
        emit('error', {'message': 'user_id required'})
        return

    # Check if already in queue
    for p in waiting_players:
        if p['user_id'] == user_id:
            emit('error', {'message': 'Уже в очереди'})
            return

    player = {
        'user_id': user_id,
        'name': name,
        'sid': request.sid,
    }

    waiting_players.append(player)
    emit('queue_joined', {
        'position': len(waiting_players),
        'message': 'Ожидание противника...'
    })

    logger.info(f'Player joined queue: {name} (id={user_id}). Queue size: {len(waiting_players)}')

    # If 2+ players, start a match
    if len(waiting_players) >= 2:
        start_competition_match()


def start_competition_match():
    """Create a match from the first 2 waiting players."""
    global waiting_players

    p1 = waiting_players.pop(0)
    p2 = waiting_players.pop(0)

    # Pick 10 random questions
    all_questions = Question.query.all()
    if len(all_questions) < 10:
        question_ids = [q.id for q in all_questions]
    else:
        import random
        selected = random.sample(all_questions, 10)
        question_ids = [q.id for q in selected]

    # Create competition in DB
    comp = Competition(
        player1_id=p1['user_id'],
        player2_id=p2['user_id'],
        status='active',
        questions=json.dumps(question_ids),
        started_at=datetime.utcnow(),
    )
    db.session.add(comp)
    db.session.commit()

    # Store in memory
    competition_data = {
        'id': comp.id,
        'player1': p1,
        'player2': p2,
        'questions': question_ids,
        'scores': {p1['user_id']: 0, p2['user_id']: 0},
        'correct': {p1['user_id']: 0, p2['user_id']: 0},
        'current_q': {p1['user_id']: 0, p2['user_id']: 0},
    }
    active_competitions[comp.id] = competition_data

    # Load full question data
    questions_data = []
    for qid in question_ids:
        q = Question.query.get(qid)
        if q:
            questions_data.append(q.to_dict())

    # Send start event to both players
    for player in [p1, p2]:
        opponent = p2 if player == p1 else p1
        socketio.emit('competition_start', {
            'competition_id': comp.id,
            'opponent_name': opponent['name'],
            'questions': questions_data,
            'total_questions': len(questions_data),
        }, room=player['sid'])

    logger.info(f'Competition started: {p1["name"]} vs {p2["name"]} (id={comp.id})')


@socketio.on('competition_answer')
def handle_competition_answer(data):
    """Player submits an answer during competition."""
    competition_id = data.get('competition_id')
    user_id = data.get('user_id')
    question_id = data.get('question_id')
    selected_options = data.get('selected_options', [])

    comp_data = active_competitions.get(competition_id)
    if not comp_data:
        emit('error', {'message': 'Competition not found'})
        return

    # Check answer
    question = Question.query.get(question_id)
    if not question:
        return

    correct = json.loads(question.correct_options)
    is_correct = sorted(selected_options) == sorted(correct)

    # Update score
    if is_correct:
        comp_data['scores'][user_id] = comp_data['scores'].get(user_id, 0) + 1
        comp_data['correct'][user_id] = comp_data['correct'].get(user_id, 0) + 1

    comp_data['current_q'][user_id] = comp_data['current_q'].get(user_id, 0) + 1

    # Notify opponent about score update
    opponent_sid = None
    for player_key in ['player1', 'player2']:
        if comp_data[player_key]['user_id'] != user_id:
            opponent_sid = comp_data[player_key]['sid']
            break

    if opponent_sid:
        socketio.emit('competition_score_update', {
            'opponent_score': comp_data['scores'][user_id],
            'opponent_progress': comp_data['current_q'][user_id],
        }, room=opponent_sid)

    # Send answer result to player
    emit('competition_answer_result', {
        'is_correct': is_correct,
        'correct_options': correct,
        'explanation': question.explanation,
        'your_score': comp_data['scores'][user_id],
        'next_question_index': comp_data['current_q'][user_id],
    })

    # Check if player finished all questions
    if comp_data['current_q'][user_id] >= len(comp_data['questions']):
        finish_player(competition_id, user_id)


def finish_player(competition_id, user_id):
    """Handle a player finishing all questions."""
    comp_data = active_competitions.get(competition_id)
    if not comp_data:
        return

    # Mark player as finished
    if 'finished' not in comp_data:
        comp_data['finished'] = []
    comp_data['finished'].append(user_id)

    # Check if both finished
    if len(comp_data['finished']) >= 2:
        finish_competition(competition_id)
    else:
        # Notify opponent that this player finished
        for player_key in ['player1', 'player2']:
            if comp_data[player_key]['user_id'] != user_id:
                socketio.emit('competition_opponent_finished', {
                    'opponent_name': comp_data[player_key]['name'],
                }, room=comp_data[player_key]['sid'])


def finish_competition(competition_id):
    """Finalize the competition and determine winner."""
    comp_data = active_competitions.get(competition_id)
    if not comp_data:
        return

    p1_id = comp_data['player1']['user_id']
    p2_id = comp_data['player2']['user_id']

    p1_score = comp_data['scores'].get(p1_id, 0)
    p2_score = comp_data['scores'].get(p2_id, 0)

    # Determine winner
    if p1_score > p2_score:
        winner_id = p1_id
    elif p2_score > p1_score:
        winner_id = p2_id
    else:
        winner_id = None  # Draw

    # Update DB
    comp = Competition.query.get(competition_id)
    if comp:
        comp.player1_score = p1_score
        comp.player2_score = p2_score
        comp.player1_correct = comp_data['correct'].get(p1_id, 0)
        comp.player2_correct = comp_data['correct'].get(p2_id, 0)
        comp.winner_id = winner_id
        comp.status = 'finished'
        comp.finished_at = datetime.utcnow()
        db.session.commit()

    # Notify both players
    for player_key in ['player1', 'player2']:
        player = comp_data[player_key]
        opponent = comp_data['player2'] if player_key == 'player1' else comp_data['player1']
        player_score = comp_data['scores'].get(player['user_id'], 0)
        opponent_score = comp_data['scores'].get(opponent['user_id'], 0)

        socketio.emit('competition_result', {
            'competition_id': competition_id,
            'your_score': player_score,
            'opponent_score': opponent_score,
            'opponent_name': opponent['name'],
            'is_winner': winner_id == player['user_id'],
            'is_draw': winner_id is None,
        }, room=player['sid'])

    # Cleanup
    del active_competitions[competition_id]
    logger.info(f'Competition finished: id={competition_id} winner={winner_id}')


@socketio.on('competition_leave')
def handle_competition_leave(data):
    """Player leaves the queue or competition."""
    user_id = data.get('user_id')
    competition_id = data.get('competition_id')

    # Remove from waiting queue
    global waiting_players
    waiting_players = [p for p in waiting_players if p['user_id'] != user_id]

    # If in active competition, opponent wins
    if competition_id and competition_id in active_competitions:
        comp_data = active_competitions[competition_id]
        for player_key in ['player1', 'player2']:
            if comp_data[player_key]['user_id'] == user_id:
                opponent = comp_data['player2'] if player_key == 'player1' else comp_data['player1']
                socketio.emit('competition_opponent_left', {
                    'opponent_name': comp_data[player_key]['name'],
                }, room=opponent['sid'])
                break


# ============================================
# API: COMPETITIONS
# ============================================
@app.route('/api/competitions', methods=['GET'])
@require_auth
def get_competitions():
    """Get user's competition history."""
    tg_id = request.tg_user['id']
    user = User.query.filter_by(tg_id=tg_id).first()
    if not user:
        return jsonify([])

    comps = Competition.query.filter(
        (Competition.player1_id == user.id) | (Competition.player2_id == user.id)
    ).order_by(Competition.created_at.desc()).limit(20).all()

    return jsonify([c.to_dict() for c in comps])


@app.route('/api/competitions/stats', methods=['GET'])
@require_auth
def get_competition_stats():
    """Get user's competition statistics."""
    tg_id = request.tg_user['id']
    user = User.query.filter_by(tg_id=tg_id).first()
    if not user:
        return jsonify({})

    total = Competition.query.filter(
        (Competition.player1_id == user.id) | (Competition.player2_id == user.id)
    ).filter_by(status='finished').count()

    wins = Competition.query.filter_by(winner_id=user.id, status='finished').count()

    draws = Competition.query.filter(
        (Competition.player1_id == user.id) | (Competition.player2_id == user.id)
    ).filter_by(status='finished', winner_id=None).count()

    return jsonify({
        'total': total,
        'wins': wins,
        'losses': total - wins - draws,
        'draws': draws,
    })


# ============================================
# INIT DB ON STARTUP (works with gunicorn too)
# ============================================
with app.app_context():
    init_db()

# ============================================
# RUN
# ============================================
if __name__ == '__main__':
    # Setup logging
    os.makedirs('logs', exist_ok=True)
    logger.add('logs/zholrules.log', rotation='10 MB', level=os.getenv('LOG_LEVEL', 'INFO'))

    # Run server with SocketIO
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_DEBUG', '0') == '1'

    logger.info(f'ZholRules server starting on port {port}')
    socketio.run(app, host='0.0.0.0', port=port, debug=debug)
    app.run(host='0.0.0.0', port=port, debug=debug)
