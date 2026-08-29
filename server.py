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
from datetime import datetime, date

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
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
# SUBSCRIPTION HELPERS
# ============================================

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
    return FREE_ERROR_LIMIT


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
    from datetime import timedelta
    sub.expires_at = datetime.utcnow() + timedelta(days=30)
    db.session.commit()

    logger.info(f'Pro activated: user={tg_id}')
    return jsonify({
        'plan': 'pro',
        'expires_at': sub.expires_at.isoformat(),
        'message': 'Pro subscription activated!'
    })


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

    # Run server
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_DEBUG', '0') == '1'

    logger.info(f'ZholRules server starting on port {port}')
    app.run(host='0.0.0.0', port=port, debug=debug)
