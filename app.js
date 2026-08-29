/**
 * ============================================
 * ZholRules — PDD Kazakhstan
 * Telegram Mini App
 * ============================================
 */

// ============================================
// i18n — TRANSLATIONS
// ============================================
const LANGUAGES = {
  ru: {
    app_title: 'ZholRules',
    greeting: 'Привет',
    friend: 'друг',
    welcome_msg: 'Добро пожаловать в ZholRules — ваш умный помощник для подготовки к экзамену по ПДД РК',
    start: 'Начать',
    goal_title: 'Какая ваша цель?',
    goal_newbie: 'Новичок',
    goal_newbie_desc: 'Начинаю учить ПДД с нуля',
    goal_refresh: 'Освежить',
    goal_refresh_desc: 'Хочу повторить правила',
    goal_exam: 'Сдаю экзамен',
    goal_exam_desc: 'Готовлюсь к сдаче в СпецЦОНе',
    exam_date: 'Дата экзамена (необязательно)',
    continue_btn: 'Продолжить',
    daily_progress: 'Дневной прогресс',
    streak: 'дней подряд',
    questions_today: 'вопросов сегодня',
    quick_start: '⚡ Быстрый старт — Экзамен',
    training_modes: 'Режимы обучения',
    random_mix: 'Случайный микс',
    by_topics: 'По темам',
    speccon: 'Как в СпецЦОНе',
    my_errors: 'Мои ошибки',
    categories: 'Категории',
    mini_game: 'Дорожный Спринт',
    mini_game_desc: '60 секунд быстрых вопросов. Зарабатывай комбо!',
    start_game: 'Старт!',
    game_over: 'Гонка завершена!',
    score: 'Очки',
    correct_of: 'Верных ответов',
    max_combo: 'Максимальное комбо',
    play_again: 'Играть снова',
    profile: 'Профиль',
    total_questions: 'Всего вопросов',
    accuracy: 'Точность',
    streak_label: 'Стрик дней',
    stars_label: 'Stars',
    category_progress: 'Прогресс по категориям',
    settings: 'Настройки',
    dark_mode: 'Тёмная тема',
    sounds: 'Звуки',
    admin_panel: 'Панель управления',
    create_question: 'Создать вопрос',
    question_list: 'Список вопросов',
    categories_admin: 'Категории',
    export_json: 'Экспорт JSON',
    category: 'Категория',
    question_text: 'Текст вопроса',
    content_type: 'Тип контента',
    no_media: 'Без медиа',
    photo: 'Фото',
    video: 'Видео',
    media_url: 'URL медиафайла',
    answer_options: 'Варианты ответов',
    add_option: '+ Добавить вариант',
    choice_type: 'Тип выбора',
    single_choice: 'Один правильный ответ',
    multiple_choice: 'Несколько правильных ответов',
    explanation: 'Пояснение',
    difficulty: 'Сложность',
    easy: 'Лёгкий',
    medium: 'Средний',
    hard: 'Сложный',
    save: '💾 Сохранить вопрос',
    next: 'Далее →',
    finish: '🏁 Завершить',
    result: 'Результат',
    explanation_title: '📖 Разбор',
    retry: '🔄 Пповторить',
    home: '🏠 На главную',
    payment_title: '⭐ Telegram Stars',
    pro_exam: 'СпецЦОН Симулятор PRO',
    pro_exam_price: '25 Stars',
    pro_exam_desc: 'Полная симуляция экзамена',
    extra_lives: '+3 Жизни',
    extra_lives_price: '5 Stars',
    extra_lives_desc: 'Восстановить жизни',
    no_ads: 'Без рекламы',
    no_ads_price: '15 Stars',
    no_ads_desc: 'Убрать рекламу навсегда',
    api_error: 'Ошибка сервера. Попробуйте позже.',
    auth_required: 'Откройте через Telegram бота.',
    access_denied: 'Доступ запрещён.',
    not_found: 'Не найдено.',
  },
  kk: {
    app_title: 'ZholRules',
    greeting: 'Salem',
    friend: 'dostym',
    welcome_msg: 'ZholRules-ge kosh keldiniz — Qazaqstan AV JQ dайыndaludyng akylly komekshisi',
    start: 'Bastau',
    goal_title: 'Sizdin maksatynyz kim?',
    goal_newbie: 'Jana bashtauyshy',
    goal_newbie_desc: 'AV JQdyn tura bastaymyn',
    goal_refresh: 'Jangertu',
    goal_refresh_desc: 'Erejelerdi qaytalaumyn',
    goal_exam: 'Imtihanga ttyramyn',
    goal_exam_desc: 'SpezCON-da imtihanga dayyndalyp jatyrmin',
    exam_date: 'Imtihan kunii (mynjett emes)',
    continue_btn: 'Jalqastyrw',
    daily_progress: 'Kundik ilgerilew',
    streak: 'kun qatar',
    questions_today: 'sawaldar bygin',
    quick_start: '⚡ Birinshi baspa — Imtihan',
    training_modes: 'Oqutu ruuderi',
    random_mix: 'Keditti aralas',
    by_topics: 'Taqyryp boyinsha',
    speccon: 'SpezCON sekin',
    my_errors: 'Meni qatelerim',
    categories: 'Sanattar',
    mini_game: 'Jol Sprinti',
    mini_game_desc: '60 sekindik tez sawaldar. Kombo jina!',
    start_game: 'Bastau!',
    game_over: 'Oyin ayaqtaldy!',
    score: 'Ulish',
    correct_of: 'Durys jawaptar',
    max_combo: 'Max kombo',
    play_again: 'Qayta oinaw',
    profile: 'Profil',
    total_questions: 'Barlyq sawaldar',
    accuracy: 'Dәldik',
    streak_label: 'Kun striki',
    stars_label: 'Stars',
    category_progress: 'Sanattar boyinsha ilgerilew',
    settings: 'Baptau',
    dark_mode: 'Qara tema',
    sounds: 'Dybystar',
    admin_panel: 'Basqarw paneli',
    create_question: 'Sawal qosw',
    question_list: 'Sawaldar tizmesi',
    categories_admin: 'Sanattar',
    export_json: 'JSON eksport',
    category: 'Sanat',
    question_text: 'Sawal mazmwny',
    content_type: 'Kontent turi',
    no_media: 'Mediasyz',
    photo: 'Surat',
    video: 'Video',
    media_url: 'Media URL',
    answer_options: 'Jawap varianttary',
    add_option: '+ Variant qosw',
    choice_type: 'Tandaw turi',
    single_choice: 'Bir durys jawap',
    multiple_choice: 'Birneshe durys jawap',
    explanation: 'Tusindirme',
    difficulty: 'Qyin',
    easy: 'Ongay',
    medium: 'Ortasha',
    hard: 'Qyin',
    save: '💾 Sawaldy saqtau',
    next: 'Keldi →',
    finish: '🏁 Ayaqtaw',
    result: 'Natije',
    explanation_title: '📖 Tüsindirme',
    retry: '🔄 Qaytalaw',
    home: '🏠 Basty betke',
    payment_title: '⭐ Telegram Stars',
    pro_exam: 'SpezCON Simulator PRO',
    pro_exam_price: '25 Stars',
    pro_exam_desc: 'Tolq imtihan simulyatsiyasy',
    extra_lives: '+3 Ömir',
    extra_lives_price: '5 Stars',
    extra_lives_desc: 'Ömirdi qalpyna keltiru',
    no_ads: 'Reklamasyz',
    no_ads_price: '15 Stars',
    no_ads_desc: 'Reklamany minesiz',
    api_error: 'Server qatesi. Kәjinі qaytalap körіñiz.',
    auth_required: 'Telegram boty arqyly ashynyzy.',
    access_denied: 'Kirw týsirilmeydi.',
    not_found: 'Tabylmady.',
  },
};

let currentLang = localStorage.getItem('zholrules_lang') || 'ru';

function t(key) {
  return LANGUAGES[currentLang]?.[key] || LANGUAGES.ru[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('zholrules_lang', lang);
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
}

// ============================================
// CONFIG
// ============================================
const API_BASE = window.location.hostname === 'localhost'
  ? 'http://localhost:5000'
  : 'https://zholrules.onrender.com';
const QUESTIONS_PER_MIX = 20;
const EXAM_QUESTIONS = 40;
const EXAM_TIME_MINUTES = 40;
const MAX_DAILY_LIVES = 3;
const DAILY_QUESTIONS_TARGET = 10;
const MINI_GAME_DURATION = 60; // seconds

// ============================================
// STATE
// ============================================
let state = {
  user: {
    id: null,
    name: '',
    goal: '',
    examDate: '',
    isAdmin: false,
  },
  stats: {
    totalAnswered: 0,
    totalCorrect: 0,
    dailyAnswered: 0,
    dailyCorrect: 0,
    streak: 0,
    lastActiveDate: '',
    stars: 0,
    lives: MAX_DAILY_LIVES,
    livesResetDate: '',
    gameHighScore: 0,
  },
  categoryStats: {},  // { categoryId: { total: n, correct: n } }
  errors: [],         // Array of question IDs answered incorrectly
  settings: {
    darkMode: false,
    sounds: true,
  },
  onboardingDone: false,
};

let questionsData = null; // Loaded from JSON
let quizState = null;    // Current quiz session
let gameState = null;    // Current mini-game session
let timerInterval = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize Telegram WebApp
  const tg = window.Telegram?.WebApp;

  if (tg) {
    tg.ready();
    tg.expand();

    const user = tg.initDataUnsafe?.user;
    if (user) {
      state.user.id = user.id;
      state.user.name = user.first_name || user.username || 'друг';
    }
  } else {
    // Dev mode
    state.user.name = 'Тестер';
    state.user.id = 12345678;
  }

  // Load saved state
  loadState();

  // Fetch user profile from backend (includes admin check)
  await fetchUserProfile();

  // Load questions
  await loadQuestions();

  // Load custom questions from localStorage
  loadCustomQuestions();

  // Check daily reset
  checkDailyReset();

  // Show splash, then main app
  showSplash();
});

async function loadQuestions() {
  try {
    const response = await fetch('data/questions.json');
    questionsData = await response.json();
  } catch (e) {
    console.error('Failed to load questions:', e);
    // Fallback: use embedded questions
    questionsData = { categories: [], questions: [] };
  }
}

// ============================================
// API HELPERS
// ============================================
function getAuthHeaders() {
  const initData = window.Telegram?.WebApp?.initData || '';
  const hasInitData = !!initData;
  return initData ? { 'Authorization': `tma ${initData}` } : {};
}

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = err.error || `Server error (${res.status})`;
    if (res.status === 401) throw new Error('Authorization required. Open via Telegram bot.');
    if (res.status === 403) throw new Error('Access denied.');
    if (res.status === 404) throw new Error('Not found.');
    if (res.status >= 500) throw new Error('Server error. Try again later.');
    throw new Error(msg);
  }
  return res.json();
}

async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = err.error || `Server error (${res.status})`;
    if (res.status >= 500) throw new Error('Server error. Try again later.');
    throw new Error(msg);
  }
  return res.json();
}

// ============================================
// USER PROFILE (from backend)
// ============================================
async function fetchUserProfile() {
  try {
    const data = await apiGet('/api/user');
    if (data.user) {
      state.user.isAdmin = data.user.is_admin || false;
      state.user.name = data.user.name || state.user.name;
      state.user.goal = data.user.goal || state.user.goal;
    }
    if (data.stats) {
      state.stats.totalAnswered = data.stats.total_answered || 0;
      state.stats.totalCorrect = data.stats.total_correct || 0;
      state.stats.streak = data.stats.streak || 0;
      state.stats.stars = data.stats.stars || 0;
      state.stats.lives = data.stats.lives ?? MAX_DAILY_LIVES;
      state.stats.gameHighScore = data.stats.game_high_score || 0;
    }
    if (data.category_stats) {
      state.categoryStats = {};
      data.category_stats.forEach(cs => {
        state.categoryStats[cs.category_id] = { total: cs.answered, correct: cs.correct };
      });
    }
    if (data.errors) {
      state.errors = data.errors;
    }
    // Show admin tab if user is admin
    if (state.user.isAdmin) {
      document.getElementById('admin-tab-btn').style.display = 'flex';
    }
  } catch (e) {
    console.warn('Could not fetch user profile from API:', e);
    // Fallback: use localStorage data
  }
}

function showSplash() {
  const splash = document.getElementById('splash-screen');
  splash.classList.add('active');

  setTimeout(() => {
    splash.classList.remove('active');

    if (state.onboardingDone) {
      showMainApp();
    } else {
      showOnboarding();
    }
  }, 2200);
}

// ============================================
// PERSISTENCE
// ============================================
function saveState() {
  try {
    localStorage.setItem('zholrules_state', JSON.stringify(state));
  } catch (e) {
    console.warn('Could not save state:', e);
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem('zholrules_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) {
    console.warn('Could not load state:', e);
  }
}

function checkDailyReset() {
  const today = new Date().toISOString().split('T')[0];

  if (state.stats.lastActiveDate !== today) {
    // Check streak
    const lastDate = state.stats.lastActiveDate ? new Date(state.stats.lastActiveDate) : null;
    const todayDate = new Date(today);

    if (lastDate) {
      const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        state.stats.streak++; // Consecutive day!
      } else if (diffDays > 1) {
        state.stats.streak = 1; // Reset streak, start fresh today
      }
    } else {
      state.stats.streak = 1; // First time user
    }

    // Reset daily stats
    state.stats.dailyAnswered = 0;
    state.stats.dailyCorrect = 0;
    state.stats.lastActiveDate = today;

    // Reset lives
    if (state.stats.livesResetDate !== today) {
      state.stats.lives = MAX_DAILY_LIVES;
      state.stats.livesResetDate = today;
    }

    saveState();
  }
}

// ============================================
// ONBOARDING
// ============================================
function showOnboarding() {
  document.getElementById('onboarding-screen').classList.add('active');
  document.getElementById('user-name').textContent = state.user.name;
}

let currentOnboardingStep = 1;

function nextOnboardingStep() {
  const steps = document.querySelectorAll('.onboarding-step');
  steps.forEach(s => s.classList.remove('active'));
  currentOnboardingStep++;
  const nextStep = document.querySelector(`.onboarding-step[data-step="${currentOnboardingStep}"]`);
  if (nextStep) nextStep.classList.add('active');
}

function selectGoal(goal) {
  state.user.goal = goal;

  // Highlight selected
  document.querySelectorAll('.goal-card').forEach(card => {
    card.style.borderColor = 'transparent';
    card.style.background = '';
  });
  event.currentTarget.style.borderColor = 'var(--amber)';
  event.currentTarget.style.background = 'var(--amber-light)';

  setTimeout(() => nextOnboardingStep(), 300);
}

async function completeOnboarding() {
  const examDate = document.getElementById('exam-date').value;
  state.user.examDate = examDate;
  state.onboardingDone = true;
  saveState();

  // Sync with backend
  try {
    await apiPost('/api/user', {
      name: state.user.name,
      goal: state.user.goal,
      exam_date: examDate,
    });
  } catch (e) {
    console.warn('Could not sync onboarding to backend:', e);
  }

  document.getElementById('onboarding-screen').classList.remove('active');
  showMainApp();
}

// ============================================
// MAIN APP
// ============================================
function showMainApp() {
  document.getElementById('app').classList.add('active');
  updateUI();
  applyTranslations();
}

function updateUI() {
  // Header
  document.getElementById('streak-badge').textContent = `🔥 ${state.stats.streak}`;
  document.getElementById('lives-badge').textContent = `❤️ ${state.stats.lives}`;

  // Daily progress
  const progress = Math.min(100, (state.stats.dailyAnswered / DAILY_QUESTIONS_TARGET) * 100);
  document.getElementById('daily-progress').style.width = `${progress}%`;
  document.getElementById('daily-progress-text').textContent = `${state.stats.dailyAnswered} / ${DAILY_QUESTIONS_TARGET} вопросов сегодня`;
  document.getElementById('daily-streak').textContent = state.stats.streak;

  // Errors count
  document.getElementById('errors-count').textContent = `${state.errors.length} вопросов`;

  // Categories
  renderCategories();

  // Profile
  updateProfile();
}

function renderCategories() {
  const container = document.getElementById('categories-list');
  if (!questionsData || !questionsData.categories) return;

  container.innerHTML = questionsData.categories.map(cat => {
    const count = questionsData.questions.filter(q => q.category === cat.id).length;
    return `
      <div class="category-item" onclick="startQuiz('topic', '${cat.id}')">
        <div class="category-icon" style="background: ${cat.color}20; color: ${cat.color};">
          ${cat.icon}
        </div>
        <div class="category-info">
          <div class="category-name">${cat.name}</div>
          <div class="category-count">${count} вопросов</div>
        </div>
        <span class="category-arrow">›</span>
      </div>
    `;
  }).join('');
}

function updateProfile() {
  document.getElementById('profile-name').textContent = state.user.name || 'Пользователь';

  const goalLabels = { newbie: '🌱 Новичок', refresh: '🔄 Освежаю знания', exam: '📋 Готовлюсь к экзамену' };
  document.getElementById('profile-status').textContent = goalLabels[state.user.goal] || '🌱 Новичок';

  // Stats
  const total = state.stats.totalAnswered;
  const correct = state.stats.totalCorrect;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-correct').textContent = `${pct}%`;
  document.getElementById('stat-streak').textContent = state.stats.streak;
  document.getElementById('stat-stars').textContent = state.stats.stars;

  // Category progress
  const catContainer = document.getElementById('category-progress');
  if (!questionsData || !questionsData.categories) return;

  catContainer.innerHTML = questionsData.categories.map(cat => {
    const catStats = state.categoryStats[cat.id] || { total: 0, correct: 0 };
    const catTotal = questionsData.questions.filter(q => q.category === cat.id).length;
    const pct = catTotal > 0 ? Math.round((catStats.total / catTotal) * 100) : 0;
    const fillColor = catStats.total > 0
      ? (catStats.correct / catStats.total > 0.7 ? 'var(--emerald)' : (catStats.correct / catStats.total > 0.4 ? 'var(--amber)' : 'var(--red)'))
      : 'var(--tg-theme-hint-color)';

    return `
      <div class="category-progress-item">
        <span class="cat-prog-label">${cat.icon} ${cat.name.split(' ')[0]}</span>
        <div class="cat-prog-bar">
          <div class="cat-prog-fill" style="width: ${pct}%; background: ${fillColor};"></div>
        </div>
        <span class="cat-prog-pct">${pct}%</span>
      </div>
    `;
  }).join('');

  // Settings
  document.getElementById('dark-mode-toggle').checked = state.settings.darkMode;
  document.getElementById('sounds-toggle').checked = state.settings.sounds;
  document.getElementById('lang-select').value = currentLang;

  applyTheme();
  applyTranslations();
}

// ============================================
// NAVIGATION
// ============================================
function switchTab(tabName) {
  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Update tab content
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(`tab-${tabName}`).classList.add('active');

  // Update profile when switching to it
  if (tabName === 'profile') {
    updateProfile();
  }

  // Haptic feedback
  if (window.Telegram?.WebApp?.HapticFeedback) {
    Telegram.WebApp.HapticFeedback.impactOccurred('light');
  }
}

// ============================================
// QUIZ ENGINE
// ============================================
function startQuiz(mode, categoryId) {
  if (mode === 'errors') {
    if (state.errors.length === 0) {
      alert('У вас пока нет ошибок! Сначала пройдите тест.');
      return;
    }
    quizState = createQuizSession(
      questionsData.questions.filter(q => state.errors.includes(q.id)),
      'errors'
    );
  } else if (mode === 'topic') {
    const topicQuestions = questionsData.questions.filter(q => q.category === categoryId);
    quizState = createQuizSession(topicQuestions, 'topic', categoryId);
  } else {
    // Random mix
    const shuffled = shuffleArray([...questionsData.questions]);
    quizState = createQuizSession(shuffled.slice(0, QUESTIONS_PER_MIX), 'random');
  }

  showQuizScreen();
}

function startExam() {
  // Check lives
  if (state.stats.lives <= 0) {
    showPaymentModal();
    return;
  }

  const shuffled = shuffleArray([...questionsData.questions]);
  quizState = createQuizSession(shuffled.slice(0, EXAM_QUESTIONS), 'exam');
  showQuizScreen();
}

function createQuizSession(questions, mode, categoryId) {
  return {
    questions: questions,
    currentIndex: 0,
    mode: mode,
    categoryId: categoryId || null,
    correctCount: 0,
    wrongCount: 0,
    answered: false,
    selectedOptions: [],
    timeRemaining: mode === 'exam' ? EXAM_TIME_MINUTES * 60 : null,
    startTime: Date.now(),
  };
}

function showQuizScreen() {
  const screen = document.getElementById('quiz-screen');
  screen.classList.add('active');

  // Show timer for exam mode
  const timerEl = document.getElementById('quiz-timer');
  if (quizState.mode === 'exam') {
    timerEl.style.display = 'flex';
    startExamTimer();
  } else {
    timerEl.style.display = 'none';
  }

  // Reset result
  document.getElementById('quiz-result').style.display = 'none';
  document.querySelector('.quiz-content').style.display = 'block';
  document.getElementById('quiz-footer').style.display = 'block';

  renderQuestion();
}

function renderQuestion() {
  const q = quizState.questions[quizState.currentIndex];
  if (!q) return;

  quizState.answered = false;
  quizState.selectedOptions = [];

  // Progress
  const total = quizState.questions.length;
  const pct = ((quizState.currentIndex) / total) * 100;
  document.getElementById('quiz-progress').style.width = `${pct}%`;
  document.getElementById('quiz-counter').textContent = `${quizState.currentIndex + 1} / ${total}`;

  // Question text
  document.getElementById('quiz-question-text').textContent = q.question;

  // Media
  const mediaEl = document.getElementById('quiz-media');
  if (q.media_type === 'image' && q.media_url) {
    mediaEl.innerHTML = `<img src="${q.media_url}" alt="Медиа" loading="lazy">`;
  } else if (q.media_type === 'video' && q.media_url) {
    mediaEl.innerHTML = `<video src="${q.media_url}" controls muted></video>`;
  } else {
    mediaEl.innerHTML = '';
  }

  // Options
  const optionsEl = document.getElementById('quiz-options');
  const markers = ['A', 'B', 'C', 'D', 'E', 'F'];

  optionsEl.innerHTML = q.options.map((opt, idx) => `
    <div class="quiz-option" data-index="${idx}" onclick="selectQuizOption(${idx})">
      <span class="quiz-option-marker">${markers[idx]}</span>
      <span class="quiz-option-text">${opt}</span>
    </div>
  `).join('');

  // Hide explanation
  document.getElementById('quiz-explanation').style.display = 'none';

  // Disable next button
  document.getElementById('next-btn').disabled = true;

  // Hide next button on last question initially
  if (quizState.currentIndex >= quizState.questions.length - 1) {
    document.getElementById('next-btn').textContent = '🏁 Завершить';
  } else {
    document.getElementById('next-btn').textContent = 'Далее →';
  }
}

function selectQuizOption(index) {
  if (quizState.answered) return;

  const q = quizState.questions[quizState.currentIndex];

  if (q.multiple_choice) {
    // Toggle selection for multiple choice
    const idx = quizState.selectedOptions.indexOf(index);
    if (idx > -1) {
      quizState.selectedOptions.splice(idx, 1);
    } else {
      quizState.selectedOptions.push(index);
    }

    // Update UI
    document.querySelectorAll('.quiz-option').forEach((opt, i) => {
      opt.classList.toggle('selected', quizState.selectedOptions.includes(i));
    });

    // Enable next if at least one selected
    if (quizState.selectedOptions.length > 0) {
      document.getElementById('next-btn').disabled = false;
    }
  } else {
    // Single choice - immediate answer
    quizState.selectedOptions = [index];
    checkAnswer();
  }
}

function checkAnswer() {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = quizState.questions[quizState.currentIndex];
  const selected = quizState.selectedOptions.sort();
  const correct = [...q.correct_options].sort();

  const isCorrect = JSON.stringify(selected) === JSON.stringify(correct);

  // Update stats
  state.stats.totalAnswered++;
  state.stats.dailyAnswered++;

  // Update category stats
  if (!state.categoryStats[q.category]) {
    state.categoryStats[q.category] = { total: 0, correct: 0 };
  }
  state.categoryStats[q.category].total++;

  if (isCorrect) {
    state.stats.totalCorrect++;
    state.stats.dailyCorrect++;
    state.categoryStats[q.category].correct++;
    quizState.correctCount++;
  } else {
    // Add to errors (if not already there)
    if (!state.errors.includes(q.id)) {
      state.errors.push(q.id);
    }

    // Deduct life in exam mode
    if (quizState.mode === 'exam') {
      quizState.wrongCount++;
      if (quizState.wrongCount > 8) {
        // Failed exam
        endQuiz(false);
        return;
      }
    }
  }

  // Update streak
  const today = new Date().toISOString().split('T')[0];
  if (state.stats.dailyAnswered === 1 && state.stats.dailyCorrect === 1) {
    if (state.stats.lastActiveDate !== today) {
      state.stats.streak++;
    }
  }

  saveState();

  // Update UI
  const options = document.querySelectorAll('.quiz-option');
  options.forEach((opt, idx) => {
    opt.classList.add('disabled');
    if (correct.includes(idx)) {
      opt.classList.add('correct');
    } else if (selected.includes(idx) && !isCorrect) {
      opt.classList.add('wrong');
    }
  });

  // Show explanation
  const explanationEl = document.getElementById('quiz-explanation');
  const explanationText = document.getElementById('explanation-text');
  if (q.explanation) {
    explanationText.textContent = q.explanation;
    explanationEl.style.display = 'block';
  }

  // Enable next button
  document.getElementById('next-btn').disabled = false;

  // Haptic feedback
  if (window.Telegram?.WebApp?.HapticFeedback) {
    Telegram.WebApp.HapticFeedback.impactOccurred(isCorrect ? 'success' : 'error');
  }
}

function nextQuestion() {
  if (!quizState.answered) {
    checkAnswer();
    return;
  }

  quizState.currentIndex++;

  if (quizState.currentIndex >= quizState.questions.length) {
    endQuiz(true);
  } else {
    renderQuestion();
  }
}

function endQuiz(completed) {
  // Clear timer
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // Hide quiz content
  document.querySelector('.quiz-content').style.display = 'none';
  document.getElementById('quiz-footer').style.display = 'none';
  document.getElementById('quiz-timer').style.display = 'none';

  // Calculate results
  const total = quizState.questions.length;
  const correct = quizState.correctCount;
  const wrong = total - correct;
  const pct = Math.round((correct / total) * 100);

  // Show result
  const resultEl = document.getElementById('quiz-result');
  resultEl.style.display = 'block';

  document.getElementById('result-correct').textContent = correct;
  document.getElementById('result-wrong').textContent = wrong;
  document.getElementById('result-percent').textContent = `${pct}%`;

  let emoji = '🎉';
  let message = '';
  let messageBg = '';

  if (quizState.mode === 'exam') {
    if (quizState.wrongCount <= 3) {
      emoji = '🏆';
      message = 'Превосходно! Вы готовы к экзамену!';
      messageBg = 'var(--emerald-light)';
    } else if (quizState.wrongCount <= 5) {
      emoji = '👏';
      message = 'Хороший результат! Ещё немного практики.';
      messageBg = 'var(--amber-light)';
    } else {
      emoji = '📚';
      message = 'Нужно повторить материал. Не сдавайтесь!';
      messageBg = 'var(--red-light)';
    }
  } else {
    if (pct >= 90) {
      emoji = '🏆';
      message = 'Отличный результат!';
      messageBg = 'var(--emerald-light)';
    } else if (pct >= 70) {
      emoji = '👍';
      message = 'Хорошо! Но есть над чем поработать.';
      messageBg = 'var(--amber-light)';
    } else {
      emoji = '📖';
      message = 'Стоит повторить материал.';
      messageBg = 'var(--red-light)';
    }
  }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = completed ? 'Результат' : 'Экзамен не пройден';
  const msgEl = document.getElementById('result-message');
  msgEl.textContent = message;
  msgEl.style.background = messageBg;
}

function exitQuiz() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  document.getElementById('quiz-screen').classList.remove('active');
  quizState = null;
  updateUI();
}

function retryQuiz() {
  if (quizState) {
    const mode = quizState.mode;
    const catId = quizState.categoryId;
    exitQuiz();
    setTimeout(() => {
      if (mode === 'exam') {
        startExam();
      } else if (mode === 'topic' && catId) {
        startQuiz('topic', catId);
      } else if (mode === 'errors') {
        startQuiz('errors');
      } else {
        startQuiz('random');
      }
    }, 100);
  }
}

// ============================================
// EXAM TIMER
// ============================================
function startExamTimer() {
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    quizState.timeRemaining--;

    if (quizState.timeRemaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      endQuiz(true);
      return;
    }

    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(quizState.timeRemaining / 60);
  const seconds = quizState.timeRemaining % 60;
  const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer-display').textContent = display;

  const timerEl = document.getElementById('quiz-timer');
  if (quizState.timeRemaining <= 300) {
    timerEl.classList.add('urgent');
  } else {
    timerEl.classList.remove('urgent');
  }
}

// ============================================
// TOPIC PICKER
// ============================================
function showTopicPicker() {
  const modal = document.getElementById('topic-modal');
  modal.style.display = 'flex';

  const list = document.getElementById('topic-list');
  list.innerHTML = questionsData.categories.map(cat => {
    const count = questionsData.questions.filter(q => q.category === cat.id).length;
    return `
      <div class="topic-item" onclick="startQuiz('topic', '${cat.id}'); closeTopicModal();">
        <span class="topic-item-icon">${cat.icon}</span>
        <span class="topic-item-name">${cat.name}</span>
        <span class="topic-item-count">${count}</span>
      </div>
    `;
  }).join('');
}

function closeTopicModal() {
  document.getElementById('topic-modal').style.display = 'none';
}

// ============================================
// MINI GAME: SIGN RUSH
// ============================================
function startMiniGame() {
  gameState = {
    score: 0,
    combo: 0,
    maxCombo: 0,
    correctCount: 0,
    totalCount: 0,
    timeRemaining: MINI_GAME_DURATION,
    currentQuestion: null,
    answered: false,
  };

  // Shuffle questions
  const shuffled = shuffleArray([...questionsData.questions]);

  document.getElementById('game-placeholder')?.style && (document.getElementById('game-placeholder').style.display = 'none');
  document.getElementById('game-question').style.display = 'block';
  document.getElementById('game-result').style.display = 'none';

  updateGameUI();
  loadGameQuestion(shuffled);

  // Start timer
  gameState.timerInterval = setInterval(() => {
    gameState.timeRemaining--;

    if (gameState.timeRemaining <= 0) {
      endMiniGame();
      return;
    }

    updateGameUI();
  }, 1000);
}

function loadGameQuestion(allQuestions) {
  if (!allQuestions || allQuestions.length === 0) {
    allQuestions = shuffleArray([...questionsData.questions]);
  }

  const q = allQuestions.shift();
  gameState.currentQuestion = q;
  gameState.currentQuestionsPool = allQuestions;
  gameState.answered = false;

  // Display question
  document.getElementById('game-sign-text').textContent = q.question;

  const optionsEl = document.getElementById('game-options');
  optionsEl.innerHTML = q.options.map((opt, idx) => `
    <button class="game-option-btn" onclick="answerGameOption(${idx})">${opt}</button>
  `).join('');
}

function answerGameOption(index) {
  if (gameState.answered) return;
  gameState.answered = true;

  const q = gameState.currentQuestion;
  const isCorrect = q.correct_options.includes(index);

  gameState.totalCount++;

  if (isCorrect) {
    gameState.correctCount++;
    gameState.combo++;
    if (gameState.combo > gameState.maxCombo) {
      gameState.maxCombo = gameState.combo;
    }

    // Score: base 10 + combo bonus
    const comboBonus = Math.min(gameState.combo, 10);
    gameState.score += 10 + (comboBonus * 5);

    // Haptic
    if (window.Telegram?.WebApp?.HapticFeedback) {
      Telegram.WebApp.HapticFeedback.impactOccurred('success');
    }
  } else {
    gameState.combo = 0;

    if (window.Telegram?.WebApp?.HapticFeedback) {
      Telegram.WebApp.HapticFeedback.impactOccurred('error');
    }
  }

  // Visual feedback
  const buttons = document.querySelectorAll('.game-option-btn');
  buttons.forEach((btn, idx) => {
    if (q.correct_options.includes(idx)) {
      btn.classList.add('correct');
    } else if (idx === index && !isCorrect) {
      btn.classList.add('wrong');
    }
    btn.style.pointerEvents = 'none';
  });

  updateGameUI();

  // Load next question after brief delay
  setTimeout(() => {
    loadGameQuestion(gameState.currentQuestionsPool);
  }, 800);
}

function updateGameUI() {
  document.getElementById('game-score').textContent = gameState.score;

  const timerEl = document.getElementById('game-timer');
  timerEl.textContent = `⏱️ ${gameState.timeRemaining}`;

  if (gameState.timeRemaining <= 10) {
    timerEl.classList.add('warning');
  }

  const comboEl = document.getElementById('game-combo');
  if (gameState.combo >= 2) {
    comboEl.style.display = 'block';
    comboEl.textContent = `x${gameState.combo}`;
  } else {
    comboEl.style.display = 'none';
  }
}

function endMiniGame() {
  clearInterval(gameState.timerInterval);

  document.getElementById('game-question').style.display = 'none';
  document.getElementById('game-result').style.display = 'block';
  document.getElementById('game-combo').style.display = 'none';

  document.getElementById('final-score').textContent = gameState.score;
  document.getElementById('correct-answers').textContent = gameState.correctCount;
  document.getElementById('total-answers').textContent = gameState.totalCount;
  document.getElementById('max-combo').textContent = gameState.maxCombo;

  // Save high score
  if (gameState.score > state.stats.gameHighScore) {
    state.stats.gameHighScore = gameState.score;
    saveState();
  }
}

function resetMiniGame() {
  document.getElementById('game-result').style.display = 'none';
  document.getElementById('game-question').style.display = 'none';
  document.getElementById('game-placeholder').style.display = 'block';
  document.getElementById('game-timer').classList.remove('warning');
  gameState = null;
}

// ============================================
// ADMIN PANEL
// ============================================
function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));

  event.currentTarget.classList.add('active');
  document.getElementById(`admin-${tab}`).classList.add('active');

  if (tab === 'list') {
    renderAdminQuestionsList();
  } else if (tab === 'create') {
    populateAdminCategories();
  } else if (tab === 'categories') {
    renderAdminCategoriesList();
  } else if (tab === 'export') {
    renderExportPreview();
  }
}

function populateAdminCategories() {
  const select = document.getElementById('admin-category');
  select.innerHTML = questionsData.categories.map(cat =>
    `<option value="${cat.id}">${cat.icon} ${cat.name}</option>`
  ).join('');

  // Reset media type
  document.getElementById('admin-media-type').value = 'none';
  document.getElementById('admin-media-group').style.display = 'none';

  // Reset options
  document.getElementById('admin-options-list').innerHTML = `
    <div class="option-row">
      <input type="text" class="input-field" placeholder="Вариант 1">
      <label class="checkbox-label"><input type="checkbox"> ✓</label>
    </div>
    <div class="option-row">
      <input type="text" class="input-field" placeholder="Вариант 2">
      <label class="checkbox-label"><input type="checkbox"> ✓</label>
    </div>
  `;

  // Media type change
  document.getElementById('admin-media-type').addEventListener('change', function() {
    document.getElementById('admin-media-group').style.display =
      this.value !== 'none' ? 'block' : 'none';
  });
}

function addAdminOption() {
  const container = document.getElementById('admin-options-list');
  const count = container.children.length + 1;
  const row = document.createElement('div');
  row.className = 'option-row';
  row.innerHTML = `
    <input type="text" class="input-field" placeholder="Вариант ${count}">
    <label class="checkbox-label"><input type="checkbox"> ✓</label>
  `;
  container.appendChild(row);
}

function saveQuestion() {
  const category = document.getElementById('admin-category').value;
  const questionText = document.getElementById('admin-question').value.trim();
  const mediaType = document.getElementById('admin-media-type').value;
  const mediaUrl = document.getElementById('admin-media-url').value.trim();
  const explanation = document.getElementById('admin-explanation').value.trim();
  const difficulty = document.getElementById('admin-difficulty').value;
  const isMultiple = document.getElementById('admin-choice-type').value === 'multiple';

  if (!questionText) {
    alert('Введите текст вопроса');
    return;
  }

  // Gather options
  const optionRows = document.querySelectorAll('#admin-options-list .option-row');
  const options = [];
  const correctOptions = [];

  optionRows.forEach((row, idx) => {
    const text = row.querySelector('input[type="text"]').value.trim();
    const isCorrect = row.querySelector('input[type="checkbox"]').checked;

    if (text) {
      options.push(text);
      if (isCorrect) correctOptions.push(options.length - 1);
    }
  });

  if (options.length < 2) {
    alert('Добавьте минимум 2 варианта ответа');
    return;
  }

  if (correctOptions.length === 0) {
    alert('Отметьте хотя бы один правильный ответ');
    return;
  }

  if (!isMultiple && correctOptions.length > 1) {
    alert('Выбран режим "один правильный ответ", но отмечено несколько. Либо смените тип, либо оставьте один.');
    return;
  }

  // Create new question
  const maxId = Math.max(...questionsData.questions.map(q => q.id), 0);
  const newQuestion = {
    id: maxId + 1,
    category: category,
    question: questionText,
    media_type: mediaType,
    media_url: mediaUrl || '',
    multiple_choice: isMultiple,
    options: options,
    correct_options: correctOptions,
    explanation: explanation,
    difficulty: difficulty,
  };

  questionsData.questions.push(newQuestion);
  saveQuestionsData();

  alert('✅ Вопрос сохранён!');

  // Reset form
  document.getElementById('admin-question').value = '';
  document.getElementById('admin-explanation').value = '';
  document.getElementById('admin-media-url').value = '';
  document.getElementById('admin-difficulty').value = 'easy';
  populateAdminCategories();
}

function renderAdminQuestionsList() {
  const container = document.getElementById('admin-questions-list');
  container.innerHTML = questionsData.questions.map(q => `
    <div class="admin-question-card">
      <span class="admin-q-id">#${q.id}</span>
      <span class="admin-q-text">${q.question}</span>
      <button class="admin-q-delete" onclick="deleteQuestion(${q.id})">🗑️</button>
    </div>
  `).join('');
}

function deleteQuestion(id) {
  if (!confirm('Удалить вопрос #' + id + '?')) return;

  questionsData.questions = questionsData.questions.filter(q => q.id !== id);
  saveQuestionsData();
  renderAdminQuestionsList();
}

function saveQuestionsData() {
  try {
    localStorage.setItem('zholrules_questions', JSON.stringify(questionsData));
  } catch (e) {
    console.warn('Could not save questions:', e);
  }
}

// Load custom questions from localStorage
function loadCustomQuestions() {
  try {
    const saved = localStorage.getItem('zholrules_questions');
    if (saved) {
      questionsData = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Could not load custom questions:', e);
  }
}

function renderExportPreview() {
  document.getElementById('export-preview').value = JSON.stringify(questionsData, null, 2);
}

// ============================================
// ADMIN: CATEGORIES MANAGEMENT
// ============================================
async function renderAdminCategoriesList() {
  try {
    const categories = await apiGet('/api/categories');
    const container = document.getElementById('categories-admin-list');
    container.innerHTML = categories.map(cat => `
      <div class="admin-question-card">
        <span style="font-size:24px;">${cat.icon}</span>
        <div style="flex:1;">
          <div style="font-weight:600;">${cat.name}</div>
          <div style="font-size:12px;color:var(--tg-theme-hint-color);">
            slug: ${cat.slug} | ${cat.count || 0} вопросов
          </div>
        </div>
        <span style="width:24px;height:24px;border-radius:50%;background:${cat.color};display:inline-block;"></span>
        <button class="admin-q-delete" onclick="deleteCategory(${cat.id})">🗑️</button>
      </div>
    `).join('');
  } catch (e) {
    console.error('Failed to load categories:', e);
  }
}

async function createCategory() {
  const name = document.getElementById('cat-name').value.trim();
  const slug = document.getElementById('cat-slug').value.trim();
  const icon = document.getElementById('cat-icon').value.trim() || '📚';
  const color = document.getElementById('cat-color-hex').value.trim() || '#FFB300';

  if (!name) {
    alert('Введите название категории');
    return;
  }

  try {
    const result = await apiPost('/api/categories', { name, slug, icon, color });
    alert(`Категория «${result.name}» создана!`);

    // Clear form
    document.getElementById('cat-name').value = '';
    document.getElementById('cat-slug').value = '';
    document.getElementById('cat-icon').value = '📚';
    document.getElementById('cat-color-hex').value = '#FFB300';
    document.getElementById('cat-color').value = '#FFB300';

    // Refresh list
    renderAdminCategoriesList();
  } catch (e) {
    alert(`Ошибка: ${e.message}`);
  }
}

async function deleteCategory(id) {
  if (!confirm('Удалить эту категорию?')) return;

  try {
    await apiGet(`/api/categories/${id}`);  // not really needed, just for consistency
    // Use fetch directly for DELETE since we have apiGet but not apiDelete
    const res = await fetch(`${API_BASE}/api/categories/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);

    renderAdminCategoriesList();
  } catch (e) {
    alert(`Ошибка: ${e.message}`);
  }
}

function exportJSON() {
  const data = JSON.stringify(questionsData, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'zholrules_questions.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================
// MONETIZATION
// ============================================
function showPaymentModal() {
  document.getElementById('payment-modal').style.display = 'flex';
}

function closePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
}

// Telegram Payments — requires TELEGRAM_PAYMENTS_PROVIDER_TOKEN on server
async function buyProExamWithStars() {
  try {
    const data = await apiPost('/api/create-invoice', {
      item: 'pro_exam',
      amount: 25,
    });
    if (data.invoice_url) {
      Telegram.WebApp.openInvoice(data.invoice_url, (status) => {
        if (status === 'paid') {
          alert('Payment successful!');
          closePaymentModal();
          startExam();
        }
      });
    } else {
      alert('Payments not configured yet. Coming soon!');
    }
  } catch (e) {
    alert('Payments not configured yet. Coming soon!');
  }
    closePaymentModal();
  }
}

function buyProExam() {
  buyProExamWithStars();
}

function buyLives() {
  if (window.Telegram?.WebApp?.openInvoice) {
    // Server-side invoice creation needed
    alert('⭐ Оплата Telegram Stars — интеграция с сервером необходима.');
  } else {
    state.stats.lives += 3;
    state.stats.stars += 5;
    saveState();
    updateUI();
    closePaymentModal();
    alert('❤️ +3 жизни добавлены!');
  }
}

function buyNoAds() {
  if (window.Telegram?.WebApp?.openInvoice) {
    alert('⭐ Оплата Telegram Stars — интеграция с сервером необходима.');
  } else {
    state.stats.stars += 15;
    saveState();
    closePaymentModal();
    alert('🚫 Реклама отключена!');
  }
}

// ============================================
// SETTINGS
// ============================================
function toggleDarkMode() {
  state.settings.darkMode = document.getElementById('dark-mode-toggle').checked;
  applyTheme();
  saveState();
}

function toggleSounds() {
  state.settings.sounds = document.getElementById('sounds-toggle').checked;
  saveState();
}

function applyTheme() {
  if (state.settings.darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// ============================================
// UTILITIES
// ============================================
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Close modals on backdrop click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
