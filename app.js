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

function renderSubscriptionCard() {
  const sub = state.subscription;
  const container = document.getElementById('subscription-card');
  if (!container) return;

  if (!sub) {
    container.innerHTML = '<p>Загрузка...</p>';
    return;
  }

  if (sub.is_pro) {
    const expires = sub.expires_at ? new Date(sub.expires_at).toLocaleDateString('ru-RU') : '∞';
    container.innerHTML = `
      <div class="sub-card sub-pro">
        <div class="sub-header">💎 Pro активна</div>
        <p>Действует до: <strong>${expires}</strong></p>
        <p>Ошибок: <strong>без ограничений</strong></p>
      </div>
    `;
  } else {
    const remaining = sub.errors_remaining ?? '∞';
    const errorCount = sub.error_count || 0;
    const limit = sub.error_limit || 10;
    const pct = Math.min(100, Math.round((errorCount / limit) * 100));
    const warnClass = pct >= 80 ? 'sub-warn' : '';

    // Check for discount
    const proPrice = sub.pro_price || parseInt(appSettings.pro_stars_price, 10) || 1500;
    const discountActive = sub.discount_active;
    const discountPercent = sub.discount_percent || 0;
    const proAvailable = sub.pro_available !== false && String(appSettings.pro_plan_enabled) !== 'false';

    let priceText = `⭐ Купить Pro — ${proPrice} Stars / мес`;
    if (discountActive) {
      priceText = `⭐ Купить Pro — ${proPrice} Stars / мес (скидка ${discountPercent}%)`;
    }

    container.innerHTML = `
      <div class="sub-card sub-free ${warnClass}">
        <div class="sub-header">📋 Бесплатный план</div>
        <p>Ошибок: <strong>${errorCount}/${limit}</strong> (${remaining} осталось)</p>
        <div class="sub-progress-bar">
          <div class="sub-progress-fill" style="width: ${pct}%; background: ${pct >= 80 ? 'var(--red)' : 'var(--primary)'};"></div>
        </div>
        ${proAvailable ? `
          <button class="btn btn-primary" style="margin-top:12px;width:100%;" onclick="buyProWithStars()">
            ${priceText}
          </button>` : `
          <p class="sub-note" style="margin-top:12px;">Покупка Pro временно недоступна</p>`}
        <p class="sub-note">Без ограничений: тесты, ошибки, экзамен</p>
      </div>
    `;
  }
}

async function buyProWithStars() {
  // Telegram Stars payment
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      try {
        // Step 1: Create invoice link from backend
        const invoiceData = await apiPost('/api/payment/invoice', {});
        const { invoice_url } = invoiceData;
        const durationDays = invoiceData.duration_days || 30;

        // Step 2: Open Telegram payment UI
        tg.openInvoice(invoice_url, (status) => {
          if (status === 'paid') {
            // Step 3: Payment successful — webhook will activate subscription
            // Reload subscription data
            fetchUserProfile();
            renderSubscriptionCard();
            tg.showAlert(`Pro подписка активирована! 🎉\n\nДействует ${durationDays} дней.`);
          } else if (status === 'cancelled') {
            // User cancelled
          } else if (status === 'failed') {
            tg.showAlert('Ошибка оплаты. Попробуйте позже.');
          }
        });
      } catch(e) {
        console.error('Payment error:', e);
        tg.showAlert('Ошибка сети. Попробуйте позже.');
      }
      return;
    }
  }
  alert('Откройте приложение через Telegram для оплаты.');
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
// Local dev: same host as the page (works for both localhost and 127.0.0.1, same-origin)
const IS_LOCAL_DEV = ['localhost', '127.0.0.1'].includes(window.location.hostname);
const API_BASE = IS_LOCAL_DEV
  ? `${window.location.protocol}//${window.location.hostname}:5000`
  : 'https://zholrules.onrender.com';
const QUESTIONS_PER_MIX = 20;

// Gameplay settings — defaults; overridden from /api/settings/public (no-code)
let appSettings = {
  exam_questions: 40,
  exam_time_minutes: 40,
  mini_game_duration: 60,
  daily_questions_target: 10,
  max_daily_lives: 3,
  free_error_limit: 10,
  pro_stars_price: 1500,
  pro_duration_days: 30,
  lives_stars_price: 5,
  free_plan_enabled: 'true',
  pro_plan_enabled: 'true',
  free_bird_games: 3,
  bird_obstacles_min: 4,
  bird_obstacles_max: 11,
  bird_question_seconds: 15,
  bird_ad_reward_max: 5,
  bird_ad_duration: 5,
};

async function loadPublicSettings() {
  try {
    const s = await apiGet('/api/settings/public');
    if (s && typeof s === 'object') {
      Object.assign(appSettings, s);
    }
  } catch (e) {
    console.warn('Gameplay settings unavailable, using defaults:', e);
  }
}

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
    lives: appSettings.max_daily_lives,
    livesResetDate: '',
    gameHighScore: 0,
  },
  categoryStats: {},  // { categoryId: { total: n, correct: n } }
  errors: [],         // Array of question IDs answered incorrectly
  subscription: null,  // { plan, is_pro, error_limit, error_count, errors_remaining }
  settings: {
    darkMode: false,
    // sounds removed
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

  // Load gameplay settings (no-code: exam size, time, lives...)
  await loadPublicSettings();

  // Load questions (backend-first, static JSON fallback)
  await loadQuestions();

  // Check daily reset
  checkDailyReset();

  // Flippy Bird daily quota (owner / Pro are unlimited)
  refreshBirdStatus();

  // Show splash, then main app
  showSplash();
});

async function loadQuestions() {
  // Single source of truth: backend DB (questions + categories)
  try {
    const [questions, categories] = await Promise.all([
      apiGet('/api/questions'),
      apiGet('/api/categories'),
    ]);
    if (Array.isArray(questions) && Array.isArray(categories)) {
      questionsData = {
        categories: normalizeCategories(categories),
        questions: questions,
      };
      return;
    }
  } catch (e) {
    console.warn('Backend questions unavailable, falling back to static JSON:', e);
  }

  // Fallback: static JSON (e.g. local dev without server)
  try {
    const response = await fetch('data/questions.json');
    questionsData = await response.json();
  } catch (e) {
    console.error('Failed to load questions:', e);
    questionsData = { categories: [], questions: [] };
  }
}

// Normalize backend category (slug-based) to the shape the frontend expects
function normalizeCategories(categories) {
  return categories.map(c => ({
    id: c.slug,
    slug: c.slug,
    name: c.name,
    icon: c.icon,
    color: c.color,
    sort_order: c.sort_order,
    count: c.count || 0,
  }));
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
    if (res.status >= 500) throw new Error(`Server error (${res.status}). Try again later.`);
    throw apiError(msg, res.status, err);
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
  return handleApiResponse(res);
}

async function apiPut(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify(body),
  });
  return handleApiResponse(res);
}

async function apiPatch(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify(body),
  });
  return handleApiResponse(res);
}

async function apiDelete(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  return handleApiResponse(res);
}

async function apiUploadForm(path, formData) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: getAuthHeaders(), // no Content-Type — browser sets the boundary
    body: formData,
  });
  return handleApiResponse(res);
}

function apiError(msg, status, data) {
  const error = new Error(msg);
  error.status = status;
  error.data = data || {};
  return error;
}

async function handleApiResponse(res) {
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = err.error || `Server error (${res.status})`;
    if (res.status === 401) throw new Error('Authorization required. Open via Telegram bot.');
    if (res.status === 403) throw new Error('Access denied.');
    if (res.status >= 500) throw new Error(`Server error (${res.status}). Try again later.`);
    throw apiError(msg, res.status, err);
  }
  return res.json();
}

// ============================================
// TOASTS
// ============================================
function toast(message, type = 'success', ms = 2800) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = message;
  container.appendChild(el);
  requestAnimationFrame(() => el.classList.add('toast-show'));
  setTimeout(() => {
    el.classList.remove('toast-show');
    setTimeout(() => el.remove(), 220);
  }, ms);
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
      state.stats.lives = data.stats.lives ?? appSettings.max_daily_lives;
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
    if (data.subscription) {
      state.subscription = data.subscription;
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

// Streak day boundary is Kazakhstan time (UTC+5), same as the server.
function appTodayString() {
  const now = new Date();
  const kz = new Date(now.getTime() + 5 * 60 * 60 * 1000);
  return kz.toISOString().split('T')[0];
}

function checkDailyReset() {
  const today = appTodayString();

  if (state.stats.lastActiveDate !== today) {
    // Streak is computed by the server on every answer — no local increments.
    state.stats.dailyAnswered = 0;
    state.stats.dailyCorrect = 0;
    state.stats.lastActiveDate = today;

    // Reset lives
    if (state.stats.livesResetDate !== today) {
      state.stats.lives = appSettings.max_daily_lives;
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
  event.currentTarget.style.borderColor = 'var(--primary)';
  event.currentTarget.style.background = 'var(--primary-light)';

  setTimeout(() => nextOnboardingStep(), 300);
}

async function completeOnboarding() {
  const examDate = document.getElementById('exam-date').value;
  state.user.examDate = examDate;
  state.onboardingDone = true;
  saveState();

  // Sync with backend (PATCH — the endpoint that exists)
  try {
    await apiPatch('/api/user', {
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

  // Welcome
  const homeName = document.getElementById('home-user-name');
  if (homeName) homeName.textContent = state.user.name || 'друг';

  // Daily progress
  const target = parseInt(appSettings.daily_questions_target, 10) || 10;
  const progress = Math.min(100, (state.stats.dailyAnswered / target) * 100);
  document.getElementById('daily-progress').style.width = `${progress}%`;
  document.getElementById('daily-progress-text').textContent = `${state.stats.dailyAnswered} / ${target} вопросов сегодня`;
  document.getElementById('daily-streak').textContent = state.stats.streak;

  // Continue card
  const total = state.stats.totalAnswered;
  const correct = state.stats.totalCorrect;
  const overallPct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const continueProgress = document.getElementById('continue-progress');
  const continuePct = document.getElementById('continue-pct');
  if (continueProgress) continueProgress.style.width = `${overallPct}%`;
  if (continuePct) continuePct.textContent = `${overallPct}% пройдено`;

  // Progress overview
  const overallPctEl = document.getElementById('overall-pct');
  if (overallPctEl) overallPctEl.textContent = `${overallPct}%`;
  const accuracyBar = document.getElementById('accuracy-bar');
  if (accuracyBar) accuracyBar.style.width = `${overallPct}%`;
  const accuracyPct = document.getElementById('accuracy-pct');
  if (accuracyPct) accuracyPct.textContent = `${overallPct}%`;
  const questionsBar = document.getElementById('questions-bar');
  if (questionsBar) questionsBar.style.width = `${Math.min(100, (total / 500) * 100)}%`;
  const questionsCount = document.getElementById('questions-count');
  if (questionsCount) questionsCount.textContent = total;
  const streakBar = document.getElementById('streak-bar');
  if (streakBar) streakBar.style.width = `${Math.min(100, (state.stats.streak / 30) * 100)}%`;
  const streakCount = document.getElementById('streak-count');
  if (streakCount) streakCount.textContent = `🔥 ${state.stats.streak}`;
  const progressChange = document.getElementById('progress-change');
  if (progressChange) progressChange.textContent = state.stats.streak > 0 ? `+${state.stats.streak} дней подряд 🔥` : '';

  // Errors count
  document.getElementById('errors-count').textContent = `${state.errors.length} вопросов`;

  // Categories
  renderSignCategories();
  renderStudyCategories();

  // Profile
  updateProfile();
}

function renderSignCategories() {
  // Top categories, rendered from real data (no-code friendly)
  const container = document.getElementById('signs-categories-list');
  if (!container || !questionsData || !questionsData.categories) return;

  const cats = [...questionsData.categories]
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
    .slice(0, 6);

  container.innerHTML = cats.map(cat => `
    <div class="sign-category-card" style="border-color:${cat.color};" onclick="startQuiz('topic', '${cat.id}')">
      <div class="sign-category-icon" style="background:${cat.color}20;">${cat.icon}</div>
      <div class="sign-category-info">
        <div class="sign-category-name">${cat.name}</div>
        <div class="sign-category-count">${cat.count || 0} вопросов</div>
      </div>
      <span class="sign-category-arrow">›</span>
    </div>
  `).join('') || '<p style="color:var(--tg-theme-hint-color);">Добавьте категории в админке — появятся здесь</p>';
}

function renderStudyCategories() {
  const container = document.getElementById('study-categories-list');
  if (!container || !questionsData || !questionsData.categories) return;

  container.innerHTML = questionsData.categories.map(cat => {
    const count = questionsData.questions.filter(q => q.category === cat.id).length;
    const catStats = state.categoryStats[cat.id] || { total: 0, correct: 0 };
    const pct = catStats.total > 0 ? Math.round((catStats.correct / catStats.total) * 100) : 0;
    return `
      <div class="category-item" onclick="startQuiz('topic', '${cat.id}')">
        <div class="category-icon" style="background: ${cat.color}20; color: ${cat.color};">
          ${cat.icon}
        </div>
        <div class="category-info">
          <div class="category-name">${cat.name}</div>
          <div class="category-count">${count} вопросов · ${pct}% верно</div>
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

  // Level system
  const total = state.stats.totalAnswered;
  const correct = state.stats.totalCorrect;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const level = Math.floor(total / 50) + 1;
  const levelEmojis = ['🚗', '🛞', '🚦', '🏁'];
  const levelEmoji = levelEmojis[Math.min(level - 1, levelEmojis.length - 1)];
  const levelNames = ['Новичок', 'Уверенный водитель', 'Знаток ПДД', 'Эксперт'];
  const levelName = levelNames[Math.min(level - 1, levelNames.length - 1)];
  document.getElementById('level-badge').textContent = `${levelEmoji} Уровень ${level} · ${levelName}`;

  // Stats
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-correct').textContent = `${pct}%`;
  document.getElementById('stat-streak').textContent = state.stats.streak;

  // Achievements
  renderAchievements();

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
  document.getElementById('lang-select').value = currentLang;

  // Subscription card
  renderSubscriptionCard();

  applyTheme();
  applyTranslations();
}

function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  const total = state.stats.totalAnswered;
  const correct = state.stats.totalCorrect;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const achievements = [
    { icon: '📝', name: 'Первые шаги', desc: 'Ответить на 10 вопросов', unlocked: total >= 10 },
    { icon: '🔥', name: 'В ударе', desc: 'Серия 3 дня подряд', unlocked: state.stats.streak >= 3 },
    { icon: '💯', name: 'Сотня', desc: '100 правильных ответов', unlocked: correct >= 100 },
    { icon: '🏆', name: 'Знаток', desc: 'Точность 90%+', unlocked: pct >= 90 && total >= 20 },
    { icon: '📚', name: 'Энтузиаст', desc: '100 вопросов', unlocked: total >= 100 },
    { icon: '⚡', name: 'Молния', desc: '500 вопросов', unlocked: total >= 500 },
  ];

  container.innerHTML = achievements.map(a => `
    <div class="achievement-card ${a.unlocked ? 'unlocked' : 'locked'}">
      <span class="achievement-icon">${a.icon}</span>
      <div class="achievement-info">
        <div class="achievement-name">${a.name}</div>
        <div class="achievement-desc">${a.desc}</div>
      </div>
    </div>
  `).join('');
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

  // Load admin dashboard when opening the admin tab
  if (tabName === 'admin') {
    loadDashboard();
  }

  // Sprint must not keep counting down after leaving the game tab.
  if (tabName !== 'game' && typeof stopMiniGame === 'function') stopMiniGame();

  // Keep the bird game paused while its tab is not visible
  if (tabName === 'game') {
    if (typeof refreshBirdStatus === 'function') refreshBirdStatus();
    const birdVisible = document.getElementById('bird-mode')?.style.display !== 'none';
    if (birdVisible && typeof birdPause === 'function') birdPause(false);
    setTimeout(() => {
      resizeBirdCanvas();
      if (!BIRD.state?.running) drawBirdFrame();
    }, 60);
  } else if (typeof birdPause === 'function') {
    birdPause(true);
  }

  // Haptic feedback
  if (window.Telegram?.WebApp?.HapticFeedback) {
    Telegram.WebApp.HapticFeedback.impactOccurred('light');
  }
}

// ============================================
// ANSWER SYNC (server stats, analytics, error limits)
// ============================================
async function submitAnswerToServer(questionId, selectedOptions) {
  try {
    const data = await apiPost('/api/answer', {
      question_id: questionId,
      selected_options: selectedOptions,
    });

    // Server stats are authoritative for analytics
    if (data.stats) {
      state.stats.totalAnswered = data.stats.total_answered;
      state.stats.totalCorrect = data.stats.total_correct;
      state.stats.streak = data.stats.streak;
    }

    // Sync subscription / error limit info
    if (state.subscription) {
      state.subscription.error_count = data.error_count;
      state.subscription.error_limit = data.error_limit;
      state.subscription.errors_remaining = data.errors_remaining;
    }

    // Server blocked adding this error (free plan limit reached)
    if (data.error_blocked) {
      const idx = state.errors.indexOf(questionId);
      if (idx > -1) state.errors.splice(idx, 1);
    }

    saveState();
  } catch (e) {
    console.warn('Could not sync answer to server:', e);
    // Local state stays as fallback (offline / dev without server)
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
  // Check lives (owner has unlimited)
  if (state.stats.lives <= 0 && !state.user.isAdmin) {
    showPaymentModal();
    return;
  }

  const shuffled = shuffleArray([...questionsData.questions]);
  const examSize = parseInt(appSettings.exam_questions, 10) || 40;
  quizState = createQuizSession(shuffled.slice(0, examSize), 'exam');
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
    timeRemaining: mode === 'exam' ? (parseInt(appSettings.exam_time_minutes, 10) || 40) * 60 : null,
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

  // Question text (hidden for media-only questions)
  const questionTextEl = document.getElementById('quiz-question-text');
  questionTextEl.textContent = q.question || '';
  questionTextEl.style.display = q.question ? '' : 'none';

  // Media (image, video file or YouTube embed)
  const mediaEl = document.getElementById('quiz-media');
  if (q.media_url) {
    renderMediaInto(mediaEl, q.media_type, q.media_url);
  } else {
    mediaEl.innerHTML = '';
  }

  // Options
  const optionsEl = document.getElementById('quiz-options');
  const markers = ['A', 'B', 'C', 'D', 'E', 'F'];

  // Add animation class to options
  optionsEl.innerHTML = q.options.map((opt, idx) => {
    const mediaHtml = optionMediaHtml(q, idx, 'quiz');
    return `
    <div class="quiz-option${mediaHtml ? ' has-media' : ''}" data-index="${idx}" onclick="selectQuizOption(${idx})" style="animation: slideInUp 0.3s ease ${idx * 0.05}s both;">
      <span class="quiz-option-marker">${markers[idx]}</span>
      ${mediaHtml}
      <span class="quiz-option-text">${escapeHtml(opt)}</span>
    </div>
  `;
  }).join('');

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

  // Haptic feedback on selection
  if (window.Telegram?.WebApp?.HapticFeedback) {
    Telegram.WebApp.HapticFeedback.impactOccurred('light');
  }

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

  // Check error limit for free plan
  if (!isCorrect && !state.subscription?.is_pro) {
    const errorLimit = state.subscription?.error_limit || 10;
    const errorCount = state.subscription?.error_count || state.errors.length;
    if (errorCount >= errorLimit && !state.errors.includes(q.id)) {
      // Show limit reached message
      const quizArea = document.getElementById('quiz-area');
      if (quizArea) {
        const limitDiv = document.createElement('div');
        limitDiv.className = 'error-limit-message';
        limitDiv.innerHTML = `
          <div style="text-align:center;padding:24px;">
            <div style="font-size:48px;margin-bottom:16px;">🚫</div>
            <h3 style="margin-bottom:8px;">Лимит ошибок</h3>
            <p style="color:var(--tg-theme-hint-color);margin-bottom:16px;">Бесплатный план: ${errorLimit} ошибок. Купите Pro для безлимитного доступа!</p>
            <button class="btn btn-primary" onclick="buyProWithStars()">⭐ Купить Pro</button>
          </div>
        `;
        quizArea.appendChild(limitDiv);
      }
      quizState.answered = false; // allow retry
      return;
    }
  }

  // Sync answer to server (analytics + error limits), fire-and-forget
  submitAnswerToServer(q.id, quizState.selectedOptions);

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

    // Mastered an error — remove from local list and server
    if (state.errors.includes(q.id)) {
      state.errors = state.errors.filter(id => id !== q.id);
      apiDelete(`/api/errors/${q.id}`).catch(e =>
        console.warn('Could not remove error from server:', e)
      );
      if (state.subscription) {
        state.subscription.error_count = Math.max(0, (state.subscription.error_count || 0) - 1);
        if (state.subscription.error_limit) {
          state.subscription.errors_remaining = Math.max(
            0,
            state.subscription.error_limit - state.subscription.error_count
          );
        }
      }
    }
  } else {
    // Add to errors (if not already there)
    if (!state.errors.includes(q.id)) {
      state.errors.push(q.id);
      if (state.subscription) {
        state.subscription.error_count = (state.subscription.error_count || 0) + 1;
        if (state.subscription.error_limit) {
          state.subscription.errors_remaining = Math.max(0, state.subscription.error_limit - state.subscription.error_count);
        }
      }
    }

    // Deduct life in exam mode (Pro users have unlimited lives)
    if (quizState.mode === 'exam') {
      quizState.wrongCount++;

      // Only non-Pro users lose lives
      const isOwner = state.user.isAdmin;
      if (!state.subscription?.is_pro && !isOwner && state.stats.lives > 0) {
        state.stats.lives--;
        updateUI();

        // BLOCK: no more lives → stop exam
        if (state.stats.lives <= 0) {
          saveState();
          setTimeout(() => {
            alert('🚫 Жизни закончились!\n\nКупите Pro для безлимитных жизней или докупите жизни.');
            showPaymentModal();
          }, 500);
          return;
        }

        // Warn when low
        if (state.stats.lives === 1) {
          alert('⚠️ Осталась 1 жизнь! Купите Pro для безлимитных жизней.');
        }
      }

      if (quizState.wrongCount > 8) {
        endQuiz(false);
        return;
      }
    }
  }

  // Streak is updated by the server in /api/answer.
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
// ============================================
// MINI GAME: SIGN RUSH
// ============================================
function startMiniGame() {
  if (!questionsData?.questions?.length) {
    toast('В базе пока нет вопросов', 'error');
    return;
  }

  clearInterval(gameState?.timerInterval);
  gameState = {
    score: 0,
    combo: 0,
    maxCombo: 0,
    correctCount: 0,
    totalCount: 0,
    timeRemaining: parseInt(appSettings.mini_game_duration, 10) || 60,
    currentQuestion: null,
    answered: false,
    videoPaused: false,
  };

  // Shuffle questions
  const shuffled = shuffleArray([...questionsData.questions]);

  document.getElementById('game-placeholder').style.display = 'none';
  document.getElementById('game-question').style.display = 'block';
  document.getElementById('game-result').style.display = 'none';

  updateGameUI();
  loadGameQuestion(shuffled);

  // Start timer (paused while a question/answer video is playing)
  gameState.timerInterval = setInterval(() => {
    if (!gameState || gameState.videoPaused) return;
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
  if (!q) {
    endMiniGame();
    return;
  }
  gameState.currentQuestion = q;
  gameState.currentQuestionsPool = allQuestions;
  gameState.answered = false;
  gameState.videoPaused = false;

  // Display question (text may be empty for media-only questions)
  const signEl = document.getElementById('game-sign-text');
  signEl.textContent = q.question || '';
  signEl.style.display = q.question ? '' : 'none';

  const mediaEl = document.getElementById('game-media');
  if (q.media_url) {
    renderMediaInto(mediaEl, q.media_type, q.media_url);
  } else {
    mediaEl.innerHTML = '';
  }
  bindGameVideoPause(mediaEl);

  const optionsEl = document.getElementById('game-options');
  optionsEl.innerHTML = q.options.map((opt, idx) => {
    const mediaHtml = optionMediaHtml(q, idx, 'game');
    return `<div class="game-option-btn${mediaHtml ? ' has-media' : ''}" role="button" tabindex="0" onclick="if (event.target.closest('video,iframe,audio')) return; answerGameOption(${idx})">${mediaHtml}<span>${escapeHtml(opt)}</span></div>`;
  }).join('');
  bindGameVideoPause(optionsEl);
}

function answerGameOption(index) {
  if (gameState.answered) return;
  gameState.answered = true;

  const q = gameState.currentQuestion;
  const isCorrect = q.correct_options.includes(index);

  // Sync answer to server (analytics), fire-and-forget
  submitAnswerToServer(q.id, [index]);

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

  // Load next question after brief delay (unless the sprint just ended)
  setTimeout(() => {
    if (gameState) loadGameQuestion(gameState.currentQuestionsPool);
  }, 800);
}

function bindGameVideoPause(container) {
  if (!container) return;
  container.querySelectorAll('video').forEach(video => {
    const pause = () => { if (gameState) gameState.videoPaused = true; };
    const resume = () => { if (gameState) gameState.videoPaused = false; };
    video.addEventListener('play', pause);
    video.addEventListener('playing', pause);
    video.addEventListener('pause', resume);
    video.addEventListener('ended', resume);
    video.addEventListener('error', resume);
  });
}

function updateGameUI() {
  if (!gameState) return;
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
  if (!gameState) return;
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
  stopMiniGame();
}

function stopMiniGame() {
  clearInterval(gameState?.timerInterval);
  gameState = null;
  const result = document.getElementById('game-result');
  const question = document.getElementById('game-question');
  const placeholder = document.getElementById('game-placeholder');
  if (result) result.style.display = 'none';
  if (question) question.style.display = 'none';
  if (placeholder) placeholder.style.display = 'block';
  const timer = document.getElementById('game-timer');
  if (timer) timer.classList.remove('warning');
}

// ============================================
// ADMIN PANEL
// ============================================
function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));

  // Works from onclick AND from programmatic calls (e.g. after saving)
  const btn = (typeof event !== 'undefined' && event && event.currentTarget)
    || document.getElementById(`admin-tab-${tab}`);
  if (btn) btn.classList.add('active');
  document.getElementById(`admin-${tab}`).classList.add('active');

  if (tab === 'dashboard') {
    loadDashboard();
  } else if (tab === 'users') {
    loadUsersList();
  } else if (tab === 'settings') {
    loadAdminSettings();
  } else if (tab === 'list') {
    renderAdminQuestionsList();
  } else if (tab === 'create') {
    populateAdminCategories();
  } else if (tab === 'categories') {
    renderAdminCategoriesList();
  } else if (tab === 'export') {
    renderExportPreview();
  }
}

let editingQuestionId = null;

function openQuestionComposer() {
  switchAdminTab('create');
  setTimeout(() => {
    const field = document.getElementById('admin-question');
    if (!field) return;
    field.scrollIntoView({ block: 'start', behavior: 'smooth' });
    field.focus({ preventScroll: true });
  }, 80);
}

function populateAdminCategories(skipDraft = false) {
  // Reset edit state
  editingQuestionId = null;

  const select = document.getElementById('admin-category');
  select.innerHTML = questionsData.categories.map(cat =>
    `<option value="${cat.id}">${cat.icon} ${cat.name} (${cat.count || 0})</option>`
  ).join('');

  resetQuestionForm();
  renderAdminCategoryFilters();
  if (!skipDraft) restoreAdminDraft();
}

function onMediaTypeChange(select) {
  const group = document.getElementById('admin-media-group');
  group.style.display = select.value !== 'none' ? 'block' : 'none';
  if (select.value === 'none') {
    document.getElementById('admin-media-preview').innerHTML = '';
    document.getElementById('admin-media-upload-status').textContent = '';
    document.getElementById('admin-media-url').value = '';
  }
}

function resetQuestionForm() {
  editingQuestionId = null;

  // Reset media
  document.getElementById('admin-media-type').value = 'none';
  document.getElementById('admin-media-group').style.display = 'none';
  document.getElementById('admin-media-url').value = '';
  document.getElementById('admin-media-url-youtube').value = '';
  document.getElementById('admin-media-file').value = '';
  document.getElementById('admin-media-preview').innerHTML = '';
  document.getElementById('admin-media-upload-status').textContent = '';
  document.getElementById('admin-media-only').checked = false;

  // Reset text fields
  document.getElementById('admin-question').value = '';
  document.getElementById('admin-explanation').value = '';
  document.getElementById('admin-difficulty').value = 'easy';
  document.getElementById('admin-choice-type').value = 'single';

  // Reset save button label
  const saveBtn = document.getElementById('admin-save-btn');
  if (saveBtn) saveBtn.textContent = '💾 Сохранить';

  // Editor chrome
  const title = document.getElementById('admin-editor-title');
  if (title) title.textContent = 'Новый вопрос';
  const moreBtn = document.getElementById('admin-save-more-btn');
  if (moreBtn) moreBtn.style.display = '';
  const draftBadge = document.getElementById('admin-draft-badge');
  if (draftBadge) draftBadge.style.display = 'none';

  // Reset options
  document.getElementById('admin-options-list').innerHTML =
    adminOptionBlockHtml(1) + adminOptionBlockHtml(2);

  updateAdminValidation();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Old uploads stored absolute http:// URLs; Telegram's HTTPS WebView blocks
// them as mixed content. Serve them over https (or same-origin).
function normalizeMediaUrl(url) {
  if (!url) return '';
  let value = String(url).trim();
  if (value.startsWith('http://zholrules.onrender.com')) {
    value = `https://${value.slice('http://'.length)}`;
  }
  if (API_BASE && value.startsWith(`${API_BASE}/`)) {
    value = value.slice(API_BASE.length);
  }
  return value;
}

function fillQuestionForm(q) {
  document.getElementById('admin-category').value = q.category || '';
  document.getElementById('admin-question').value = q.question || '';
  document.getElementById('admin-media-type').value = q.media_type || 'none';
  onMediaTypeChange(document.getElementById('admin-media-type'));
  const isYt = !!parseYouTubeId(q.media_url || '');
  document.getElementById('admin-media-url').value = isYt ? '' : (q.media_url || '');
  document.getElementById('admin-media-url-youtube').value = isYt ? (q.media_url || '') : '';
  if (q.media_url) {
    previewMediaFromUrl(q.media_url);
  }
  document.getElementById('admin-media-only').checked = !!q.is_media_only;
  document.getElementById('admin-explanation').value = q.explanation || '';
  document.getElementById('admin-difficulty').value = q.difficulty || 'easy';
  document.getElementById('admin-choice-type').value = q.multiple_choice ? 'multiple' : 'single';

  // Options
  const container = document.getElementById('admin-options-list');
  container.innerHTML = '';
  (q.options || []).forEach((opt, idx) => {
    container.insertAdjacentHTML('beforeend', adminOptionBlockHtml(idx + 1));
    const block = container.lastElementChild;
    block.querySelector('.option-row input[type="text"]').value = opt;
    if ((q.correct_options || []).includes(idx)) {
      block.querySelector('.option-correct-btn').classList.add('checked');
    }
    const om = q.option_media && (q.option_media[String(idx)] || q.option_media[idx]);
    if (om && om.media_url) {
      const urlInput = block.querySelector('.option-media-url');
      urlInput.value = om.media_url;
      block.querySelector('.option-media').style.display = 'flex';
      previewOptionMedia(urlInput);
    }
  });
  if (!q.options || q.options.length === 0) {
    addAdminOption();
    addAdminOption();
  }
}

function editQuestion(id) {
  const q = questionsData.questions.find(x => x.id === id);
  if (!q) return;

  // Activate the create panel
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('admin-tab-create').classList.add('active');
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('admin-create').classList.add('active');

  populateAdminCategories(true); // resets form + editing state
  editingQuestionId = id;
  fillQuestionForm(q);
  const saveBtn = document.getElementById('admin-save-btn');
  if (saveBtn) saveBtn.textContent = '💾 Сохранить изменения';
  const title = document.getElementById('admin-editor-title');
  if (title) title.textContent = `Редактирование #${id}`;
  const moreBtn = document.getElementById('admin-save-more-btn');
  if (moreBtn) moreBtn.style.display = 'none';
  const draftBadge = document.getElementById('admin-draft-badge');
  if (draftBadge) draftBadge.style.display = 'none';
  updateAdminValidation();
}

function addAdminOption() {
  const container = document.getElementById('admin-options-list');
  container.insertAdjacentHTML('beforeend', adminOptionBlockHtml(container.children.length + 1));
  const inputs = container.querySelectorAll('.option-row input[type="text"]');
  inputs[inputs.length - 1]?.focus();
}

function removeAdminOption(btn) {
  const blocks = document.querySelectorAll('#admin-options-list .option-block');
  if (blocks.length <= 2) {
    toast('Нужно минимум 2 варианта', 'error');
    return;
  }
  btn.closest('.option-block').remove();
  updateAdminValidation();
  scheduleDraftSave();
}

async function saveQuestion(opts = {}) {
  const category = document.getElementById('admin-category').value;
  const questionText = document.getElementById('admin-question').value.trim();
  const mediaType = document.getElementById('admin-media-type').value;
  const mediaUrl = document.getElementById('admin-media-url').value.trim();
  const mediaUrlYoutube = document.getElementById('admin-media-url-youtube').value.trim();
  const finalMediaUrl = mediaUrlYoutube || mediaUrl;
  const isMediaOnly = document.getElementById('admin-media-only').checked;
  const explanation = document.getElementById('admin-explanation').value.trim();
  const difficulty = document.getElementById('admin-difficulty').value;
  const isMultiple = document.getElementById('admin-choice-type').value === 'multiple';

  if (!questionText && !isMediaOnly) {
    toast('Введите текст вопроса или отметьте «Только медиа»', 'error');
    return;
  }

  if (isMediaOnly && !questionText && !finalMediaUrl) {
    toast('Для вопроса «только медиа» добавьте медиафайл или YouTube-ссылку', 'error');
    return;
  }

  // Gather options
  const optionRows = document.querySelectorAll('#admin-options-list .option-row');
  const options = [];
  const correctOptions = [];

  optionRows.forEach((row, idx) => {
    const text = row.querySelector('input[type="text"]').value.trim();
    const isCorrect = row.querySelector('.option-correct-btn')?.classList.contains('checked');

    if (text) {
      options.push(text);
      if (isCorrect) correctOptions.push(options.length - 1);
    }
  });

  if (options.length < 2) {
    toast('Добавьте минимум 2 варианта ответа', 'error');
    return;
  }

  if (correctOptions.length === 0) {
    toast('Отметьте правильный ответ кнопкой ✓', 'error');
    return;
  }

  if (!isMultiple && correctOptions.length > 1) {
    toast('Несколько ✓ при типе «один ответ». Оставьте один или включите «Несколько правильных».', 'error', 4200);
    return;
  }

  const payload = {
    category: category,
    question: questionText,
    media_type: mediaType,
    media_url: finalMediaUrl,
    is_media_only: isMediaOnly,
    multiple_choice: isMultiple,
    option_media: collectOptionMedia(),
    options: options,
    correct_options: correctOptions,
    explanation: explanation,
    difficulty: difficulty,
  };

  const wasEditing = !!editingQuestionId;
  try {
    if (editingQuestionId) {
      await apiPut(`/api/questions/${editingQuestionId}`, payload);
    } else {
      await apiPost('/api/questions', payload);
    }
    await loadQuestions();
    renderAdminQuestionsList();
    clearAdminDraft();

    if (opts.keepOpen && !wasEditing) {
      // Fast batch entry: keep the category, clear only the content.
      resetQuestionForm();
      document.getElementById('admin-category').value = category;
      document.getElementById('admin-question').focus();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast('✅ Сохранено. Введите следующий вопрос');
    } else {
      resetQuestionForm();
      toast(wasEditing ? '✅ Изменения сохранены' : '✅ Вопрос сохранён в базу');
    }
  } catch (e) {
    console.warn('Could not save question to server, saving locally:', e);
    // Fallback: keep local-only (e.g. dev without server)
    if (editingQuestionId) {
      const idx = questionsData.questions.findIndex(q => q.id === editingQuestionId);
      if (idx > -1) questionsData.questions[idx] = { ...questionsData.questions[idx], ...payload };
    } else {
      const maxId = Math.max(...questionsData.questions.map(q => q.id), 0);
      questionsData.questions.push({ id: maxId + 1, ...payload });
    }
    saveQuestionsData();
    renderAdminQuestionsList();
    resetQuestionForm();
    toast('⚠️ Сервер недоступен — сохранено только локально', 'error', 4500);
  }
}

// ============================================
// ADMIN: QUICK ENTRY (draft, bulk options, validation)
// ============================================
const ADMIN_DRAFT_KEY = 'zholrules_admin_draft_v1';
let adminDraftTimer = null;

function autosizeTextarea(el) {
  el.style.height = 'auto';
  el.style.height = `${Math.min(el.scrollHeight, 220)}px`;
}

function collectAdminOptions() {
  const options = [];
  const correctOptions = [];
  document.querySelectorAll('#admin-options-list .option-row').forEach((row) => {
    const text = row.querySelector('input[type="text"]').value.trim();
    if (!text) return;
    if (row.querySelector('.option-correct-btn')?.classList.contains('checked')) {
      correctOptions.push(options.length);
    }
    options.push(text);
  });
  return { options, correctOptions };
}

function updateAdminValidation() {
  const el = document.getElementById('admin-validation');
  if (!el) return;
  const { options, correctOptions } = collectAdminOptions();
  const question = document.getElementById('admin-question')?.value.trim() || '';
  const isMediaOnly = document.getElementById('admin-media-only')?.checked;
  const parts = [];
  if (!question && !isMediaOnly) parts.push('нет текста вопроса');
  parts.push(`${options.length} вариант(ов)`);
  parts.push(correctOptions.length ? `✓ ${correctOptions.length}` : 'ответ не выбран');
  el.textContent = parts.join(' · ');
  el.classList.toggle('is-ok', !!question && options.length >= 2 && correctOptions.length > 0);
}

function collectAdminDraft() {
  const options = [...document.querySelectorAll('#admin-options-list .option-block')].map(block => ({
    text: block.querySelector('.option-row input[type="text"]').value,
    correct: block.querySelector('.option-correct-btn')?.classList.contains('checked') || false,
  }));
  return {
    category: document.getElementById('admin-category')?.value || '',
    question: document.getElementById('admin-question')?.value || '',
    explanation: document.getElementById('admin-explanation')?.value || '',
    difficulty: document.getElementById('admin-difficulty')?.value || 'easy',
    choice: document.getElementById('admin-choice-type')?.value || 'single',
    options,
  };
}

function scheduleDraftSave() {
  clearTimeout(adminDraftTimer);
  adminDraftTimer = setTimeout(saveAdminDraft, 500);
}

function saveAdminDraft() {
  if (editingQuestionId) return;
  const draft = collectAdminDraft();
  const hasContent = draft.question.trim() || draft.options.some(o => o.text.trim());
  if (!hasContent) { clearAdminDraft(); return; }
  try {
    localStorage.setItem(ADMIN_DRAFT_KEY, JSON.stringify(draft));
    const badge = document.getElementById('admin-draft-badge');
    if (badge) badge.style.display = '';
  } catch (e) { /* storage unavailable */ }
}

function clearAdminDraft() {
  try { localStorage.removeItem(ADMIN_DRAFT_KEY); } catch (e) { /* ignore */ }
  const badge = document.getElementById('admin-draft-badge');
  if (badge) badge.style.display = 'none';
}

function restoreAdminDraft() {
  let draft = null;
  try { draft = JSON.parse(localStorage.getItem(ADMIN_DRAFT_KEY) || 'null'); } catch (e) { return; }
  if (!draft || (!draft.question && !(draft.options || []).some(o => (o.text || '').trim()))) return;

  const qEl = document.getElementById('admin-question');
  if (qEl) { qEl.value = draft.question || ''; autosizeTextarea(qEl); }
  const catEl = document.getElementById('admin-category');
  if (catEl && draft.category) catEl.value = draft.category;
  const expEl = document.getElementById('admin-explanation');
  if (expEl) expEl.value = draft.explanation || '';
  const diffEl = document.getElementById('admin-difficulty');
  if (diffEl) diffEl.value = draft.difficulty || 'easy';
  const choiceEl = document.getElementById('admin-choice-type');
  if (choiceEl) choiceEl.value = draft.choice || 'single';

  const opts = draft.options || [];
  if (opts.length) {
    const container = document.getElementById('admin-options-list');
    container.innerHTML = '';
    opts.forEach((opt, idx) => {
      container.insertAdjacentHTML('beforeend', adminOptionBlockHtml(idx + 1));
      const block = container.lastElementChild;
      block.querySelector('.option-row input[type="text"]').value = opt.text || '';
      if (opt.correct) block.querySelector('.option-correct-btn').classList.add('checked');
    });
  }
  const badge = document.getElementById('admin-draft-badge');
  if (badge) badge.style.display = '';
  updateAdminValidation();
  toast('Черновик восстановлен', 'info', 2200);
}

function openBulkOptions() {
  const modal = document.getElementById('bulk-options-modal');
  modal.style.display = 'flex';
  setTimeout(() => document.getElementById('bulk-options-text').focus(), 50);
}

function closeBulkOptions() {
  document.getElementById('bulk-options-modal').style.display = 'none';
}

function applyBulkOptions() {
  const raw = document.getElementById('bulk-options-text').value;
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length < 2) { toast('Нужно минимум 2 строки', 'error'); return; }

  const container = document.getElementById('admin-options-list');
  container.innerHTML = '';
  let correctCount = 0;
  lines.forEach((line, idx) => {
    const isCorrect = /^[*+✓]/.test(line);
    if (isCorrect) correctCount++;
    const text = line.replace(/^[*+✓]\s*/, '').trim();
    container.insertAdjacentHTML('beforeend', adminOptionBlockHtml(idx + 1));
    const block = container.lastElementChild;
    block.querySelector('.option-row input[type="text"]').value = text;
    if (isCorrect) block.querySelector('.option-correct-btn').classList.add('checked');
  });
  document.getElementById('admin-choice-type').value = correctCount > 1 ? 'multiple' : 'single';
  closeBulkOptions();
  updateAdminValidation();
  scheduleDraftSave();
}

function duplicateQuestion(id) {
  const q = questionsData.questions.find(x => x.id === id);
  if (!q) return;
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('admin-tab-create').classList.add('active');
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('admin-create').classList.add('active');

  populateAdminCategories(true);
  editingQuestionId = null;
  fillQuestionForm({ ...q, id: undefined });
  document.getElementById('admin-editor-title').textContent = `Копия вопроса #${id}`;
  document.getElementById('admin-save-more-btn').style.display = '';
  updateAdminValidation();
  toast('Копия открыта — проверьте и сохраните', 'info', 2400);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// ADMIN: MEDIA UPLOAD
// ============================================
async function handleMediaFile(input) {
  const file = input.files[0];
  if (!file) return;

  const statusEl = document.getElementById('admin-media-upload-status');
  const mediaType = document.getElementById('admin-media-type').value;
  const isVideo = mediaType === 'video' || file.type.startsWith('video/');

  statusEl.textContent = '⏳ Загрузка...';

  try {
    const formData = new FormData();
    formData.append('file', file);
    const data = await apiUploadForm('/api/upload', formData);
    document.getElementById('admin-media-url').value = data.url;
    statusEl.textContent = '✅ Файл загружен и сохранён в базе!';
    showMediaPreview(data.url, isVideo);
  } catch (e) {
    console.error('Upload failed:', e);
    statusEl.textContent = '❌ ' + e.message;
  }
}

function showMediaPreview(url, isVideo) {
  const preview = document.getElementById('admin-media-preview');
  url = normalizeMediaUrl(url);
  preview.innerHTML = isVideo
    ? `<video src="${url}" controls muted playsinline style="max-width:100%;border-radius:12px;background:#000;"></video>`
    : `<img src="${url}" alt="Превью" style="max-width:100%;border-radius:12px;">`;
}

function previewMediaFromUrl(value) {
  value = normalizeMediaUrl(value);
  if (!value) {
    document.getElementById('admin-media-preview').innerHTML = '';
    return;
  }
  const ytId = parseYouTubeId(value);
  if (ytId) {
    document.getElementById('admin-media-preview').innerHTML =
      `<iframe src="https://www.youtube-nocookie.com/embed/${ytId}?rel=0" title="Превью YouTube" style="width:100%;aspect-ratio:16/9;border:none;border-radius:12px;" loading="lazy" allowfullscreen></iframe>`;
    return;
  }
  const mediaType = document.getElementById('admin-media-type').value;
  showMediaPreview(value, mediaType === 'video');
}

// ============================================
// YOUTUBE + MEDIA HELPERS
// ============================================
function parseYouTubeId(url) {
  if (!url) return '';
  const str = String(url).trim();
  let m = str.match(/(?:youtube\.com|youtube-nocookie\.com)\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/|v\/)([\w-]{11})/i);
  if (m) return m[1];
  m = str.match(/youtu\.be\/([\w-]{11})/i);
  if (m) return m[1];
  return '';
}

function renderMediaInto(el, mediaType, mediaUrl, optionText) {
  mediaUrl = normalizeMediaUrl(mediaUrl);
  const ytId = parseYouTubeId(mediaUrl);
  if (ytId) {
    el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${ytId}?rel=0&playsinline=1" title="Видео${optionText ? ' — ' + escapeHtml(optionText) : ''}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    return;
  }
  if (mediaType === 'video' && mediaUrl) {
    el.innerHTML = `<video src="${escapeHtml(mediaUrl)}" controls muted playsinline style="max-width:100%;border-radius:12px;background:#000;"></video>`;
  } else if (mediaUrl) {
    el.innerHTML = `<img src="${escapeHtml(mediaUrl)}" alt="Медиа" loading="lazy">`;
  } else {
    el.innerHTML = '';
  }
}

function optionMediaHtml(q, idx, context) {
  const om = q.option_media && (q.option_media[String(idx)] || q.option_media[idx]);
  if (!om || !om.media_url) return '';
  const mediaUrl = normalizeMediaUrl(om.media_url);
  const ytId = parseYouTubeId(mediaUrl);
  if (ytId) {
    return `<div class="${context}-option-media"><iframe src="https://www.youtube-nocookie.com/embed/${ytId}?rel=0&playsinline=1" title="Медиа ответа" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  }
  if (om.media_type === 'video') {
    return `<div class="${context}-option-media"><video src="${escapeHtml(mediaUrl)}" controls muted playsinline></video></div>`;
  }
  return `<div class="${context}-option-media"><img src="${escapeHtml(mediaUrl)}" alt="" loading="lazy"></div>`;
}

// ============================================
// ADMIN: PER-ANSWER MEDIA
// ============================================
function adminOptionBlockHtml(count) {
  return `
    <div class="option-block">
      <div class="option-row">
        <input type="text" class="input-field" placeholder="Вариант ${count}">
        <button type="button" class="option-media-btn" onclick="toggleOptionMedia(this)" title="Медиа для ответа">🖼</button>
        <button type="button" class="option-correct-btn" onclick="toggleCorrectOption(this)" title="Отметить как правильный">✓</button>
        <button type="button" class="option-remove-btn" onclick="removeAdminOption(this)" title="Удалить вариант">✕</button>
      </div>
      <div class="option-media" style="display:none;">
        <input type="text" class="input-field option-media-url" placeholder="URL картинки или YouTube-ссылка (необязательно)" oninput="previewOptionMedia(this)">
        <input type="file" class="option-media-file" accept="image/*,video/*" onchange="handleOptionMediaFile(this)">
        <div class="option-media-preview"></div>
      </div>
    </div>`;
}

function toggleCorrectOption(btn) {
  const isSingle = document.getElementById('admin-choice-type').value === 'single';

  if (isSingle) {
    // Single-choice mode: only one green button at a time
    document.querySelectorAll('#admin-options-list .option-correct-btn').forEach(b => {
      b.classList.toggle('checked', b === btn);
    });
  } else {
    // Multiple-choice mode: toggle independently
    btn.classList.toggle('checked');
  }

  if (window.Telegram?.WebApp?.HapticFeedback) {
    Telegram.WebApp.HapticFeedback.selectionChanged();
  }
}

function toggleOptionMedia(btn) {
  const panel = btn.closest('.option-block').querySelector('.option-media');
  const isOpen = panel.style.display !== 'none';
  panel.style.display = isOpen ? 'none' : 'flex';
  if (!isOpen) {
    panel.querySelector('.option-media-url').focus();
  }
}

function previewOptionMedia(input) {
  const panel = input.closest('.option-media');
  const url = normalizeMediaUrl(input.value.trim());
  const preview = panel.querySelector('.option-media-preview');
  const btn = panel.closest('.option-block').querySelector('.option-media-btn');
  btn.classList.toggle('has-media', !!url);
  if (!url) {
    preview.innerHTML = '';
    return;
  }
  const ytId = parseYouTubeId(url);
  if (ytId) {
    preview.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${ytId}?rel=0" title="Превью" loading="lazy" allowfullscreen></iframe>`;
  } else if (/\.(mp4|webm|mov|m4v)(\?|$)/i.test(url)) {
    preview.innerHTML = `<video src="${escapeHtml(url)}" controls muted playsinline></video>`;
  } else {
    preview.innerHTML = `<img src="${escapeHtml(url)}" alt="Превью">`;
  }
}

async function handleOptionMediaFile(input) {
  const file = input.files[0];
  if (!file) return;
  const panel = input.closest('.option-media');
  const urlInput = panel.querySelector('.option-media-url');
  const preview = panel.querySelector('.option-media-preview');
  const btn = panel.closest('.option-block').querySelector('.option-media-btn');
  preview.innerHTML = '<span style="font-size:13px;color:var(--tg-theme-hint-color);">⏳ Загрузка...</span>';
  try {
    const formData = new FormData();
    formData.append('file', file);
    const data = await apiUploadForm('/api/upload', formData);
    urlInput.value = data.url;
    btn.classList.add('has-media');
    previewOptionMedia(urlInput);
  } catch (e) {
    console.error('Option media upload failed:', e);
    preview.innerHTML = `<span style="font-size:13px;color:#e5484d;">❌ ${escapeHtml(e.message)}</span>`;
  }
}

function collectOptionMedia() {
  const media = {};
  document.querySelectorAll('#admin-options-list .option-block').forEach((block, idx) => {
    const url = block.querySelector('.option-media-url').value.trim();
    if (!url) return;
    const ytId = parseYouTubeId(url);
    media[idx] = {
      media_type: (ytId || /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url)) ? 'video' : 'image',
      media_url: url,
    };
  });
  return media;
}

let adminQuestionSearch = '';
let adminQuestionPage = 1;
let adminCategoryFilter = '';
const ADMIN_PAGE_SIZE = 20;

function adminCategoryById(slug) {
  return (questionsData?.categories || []).find(c => c.id === slug);
}

function renderAdminCategoryFilters() {
  const select = document.getElementById('admin-category-filter');
  const chips = document.getElementById('admin-category-chips');
  if (!questionsData) return;
  const categories = questionsData.categories || [];

  if (select) {
    select.innerHTML = '<option value="">Все категории</option>' + categories.map(c =>
      `<option value="${escapeHtml(c.id)}">${escapeHtml(c.icon || '')} ${escapeHtml(c.name)}</option>`
    ).join('');
    select.value = adminCategoryFilter;
  }

  if (chips) {
    chips.innerHTML = [
      `<button class="admin-chip ${adminCategoryFilter === '' ? 'active' : ''}" onclick="onAdminCategoryFilter('')">Все <span>${questionsData.questions.length}</span></button>`,
      ...categories.map(c =>
        `<button class="admin-chip ${adminCategoryFilter === c.id ? 'active' : ''}" onclick="onAdminCategoryFilter('${escapeHtml(c.id)}')">${escapeHtml(c.icon || '')} ${escapeHtml(c.name)} <span>${c.count || 0}</span></button>`
      ),
    ].join('');
  }
}

function renderAdminQuestionsList() {
  const container = document.getElementById('admin-questions-list');
  if (!container || !questionsData || !questionsData.questions) return;
  renderAdminCategoryFilters();

  const query = (adminQuestionSearch || '').toLowerCase().trim();
  let filtered = [...questionsData.questions];
  if (adminCategoryFilter) {
    filtered = filtered.filter(item => item.category === adminCategoryFilter);
  }
  if (query) {
    filtered = filtered.filter(item =>
      item.question.toLowerCase().includes(query) ||
      String(item.category).toLowerCase().includes(query)
    );
  }
  filtered.sort((a, b) => a.id - b.id);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ADMIN_PAGE_SIZE));
  if (adminQuestionPage > totalPages) adminQuestionPage = totalPages;
  const start = (adminQuestionPage - 1) * ADMIN_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + ADMIN_PAGE_SIZE);

  container.innerHTML = pageItems.map(item => {
    const cat = adminCategoryById(item.category);
    return `
    <div class="admin-question-card">
      <div class="admin-q-top">
        <span class="admin-q-id">#${item.id}</span>
        <span class="admin-q-cat">${cat ? `${escapeHtml(cat.icon || '')} ${escapeHtml(cat.name)}` : escapeHtml(item.category)}</span>
        ${item.media_type !== 'none' ? `<span class="admin-q-media">${item.media_type === 'image' ? '🖼️' : '🎬'}</span>` : ''}
      </div>
      <div class="admin-q-text">${item.question ? escapeHtml(item.question) : '<i>— только медиа —</i>'}</div>
      <div class="admin-q-actions">
        <button class="admin-q-edit" onclick="editQuestion(${item.id})" title="Редактировать">✏️</button>
        <button class="admin-q-copy" onclick="duplicateQuestion(${item.id})" title="Дублировать">⧉</button>
        <button class="admin-q-delete" onclick="deleteQuestion(${item.id})" title="Удалить">🗑️</button>
      </div>
    </div>`;
  }).join('') || '<p style="color:var(--tg-theme-hint-color);text-align:center;padding:20px 0;">Ничего не найдено</p>';

  // Pager
  const pager = document.getElementById('admin-questions-pager');
  if (pager) {
    const from = filtered.length === 0 ? 0 : start + 1;
    const to = Math.min(start + ADMIN_PAGE_SIZE, filtered.length);
    pager.innerHTML = `
      <button class="btn btn-secondary btn-small" onclick="adminQuestionPage--;renderAdminQuestionsList();" ${adminQuestionPage <= 1 ? 'disabled' : ''}>←</button>
      <span class="admin-pager-info">${from}–${to} из ${filtered.length}</span>
      <button class="btn btn-secondary btn-small" onclick="adminQuestionPage++;renderAdminQuestionsList();" ${adminQuestionPage >= totalPages ? 'disabled' : ''}>→</button>
    `;
  }
}

function onAdminQuestionSearch(value) {
  adminQuestionSearch = value;
  adminQuestionPage = 1;
  renderAdminQuestionsList();
}

function onAdminCategoryFilter(value) {
  adminCategoryFilter = value || '';
  adminQuestionPage = 1;
  renderAdminQuestionsList();
}

// Keyboard-first entry: Enter adds an option, Ctrl/Cmd+Enter saves.
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && e.target.closest('#admin-create')) {
    e.preventDefault();
    saveQuestion();
    return;
  }
  if (e.key === 'Enter' && !e.shiftKey &&
      e.target.matches('#admin-options-list .option-row input[type="text"]')) {
    e.preventDefault();
    addAdminOption();
  }
});

document.addEventListener('input', (e) => {
  if (!e.target.closest('#admin-create')) return;
  if (e.target.id === 'admin-question') autosizeTextarea(e.target);
  updateAdminValidation();
  scheduleDraftSave();
});

document.addEventListener('click', (e) => {
  if (e.target.closest('#admin-options-list .option-correct-btn')) {
    setTimeout(updateAdminValidation, 0);
  }
});

// ============================================
// ADMIN: DANGER CONFIRMATION
// ============================================
let dangerConfirmCallback = null;

function openDangerConfirm(detail, onConfirm) {
  dangerConfirmCallback = onConfirm;
  document.getElementById('danger-confirm-detail').textContent = detail || '';
  document.getElementById('danger-confirm-modal').style.display = 'flex';
}

function closeDangerConfirm() {
  dangerConfirmCallback = null;
  document.getElementById('danger-confirm-modal').style.display = 'none';
}

async function confirmDangerAction() {
  const callback = dangerConfirmCallback;
  closeDangerConfirm();
  if (callback) await callback();
}

function deleteQuestion(id) {
  const q = questionsData.questions.find(x => x.id === id);
  const title = q && q.question ? q.question.slice(0, 90) : '— только медиа —';

  openDangerConfirm(`Вопрос #${id} «${title}» будет удалён.`, async () => {
    try {
      await apiDelete(`/api/questions/${id}`);
      await loadQuestions();
      renderAdminQuestionsList();
      toast('✅ Вопрос удалён');
    } catch (e) {
      console.warn('Could not delete from server, removing locally:', e);
      questionsData.questions = questionsData.questions.filter(q => q.id !== id);
      saveQuestionsData();
      renderAdminQuestionsList();
    }
  });
}

function saveQuestionsData() {
  try {
    localStorage.setItem('zholrules_questions', JSON.stringify(questionsData));
  } catch (e) {
    console.warn('Could not save questions:', e);
  }
}

function renderExportPreview() {
  document.getElementById('export-preview').value = JSON.stringify(questionsData, null, 2);
}

// ============================================
// ADMIN: CATEGORIES MANAGEMENT
// ============================================
let adminCategoriesCache = [];
let editingCategoryId = null;

async function renderAdminCategoriesList() {
  try {
    const categories = await apiGet('/api/categories');
    adminCategoriesCache = categories;
    const countBadge = document.getElementById('categories-count-badge');
    if (countBadge) countBadge.textContent = categories.length;

    const container = document.getElementById('categories-admin-list');
    container.innerHTML = categories.map(cat => `
      <div class="admin-category-card">
        <span class="admin-category-icon" style="background:${cat.color || '#FFB300'}22;">${cat.icon || '📚'}</span>
        <div class="admin-category-info">
          <div class="admin-category-name">${escapeHtml(cat.name)}</div>
          <div class="admin-category-meta">
            <span class="admin-count-badge">${cat.count || 0} вопросов</span>
            <span class="admin-category-slug">${escapeHtml(cat.slug)}</span>
          </div>
        </div>
        <div class="admin-category-actions">
          <button class="admin-q-edit" onclick="editCategory(${cat.id})" title="Редактировать">✏️</button>
          <button class="admin-q-delete" onclick="deleteCategory(${cat.id})" title="Удалить">🗑️</button>
        </div>
      </div>
    `).join('') || '<p style="color:var(--tg-theme-hint-color);">Пока нет категорий</p>';
  } catch (e) {
    console.error('Failed to load categories:', e);
    document.getElementById('categories-admin-list').innerHTML = '<p style="color:var(--red);">Ошибка загрузки</p>';
  }
}

function resetCategoryForm() {
  editingCategoryId = null;
  document.getElementById('cat-name').value = '';
  document.getElementById('cat-slug').value = '';
  document.getElementById('cat-icon').value = '📚';
  document.getElementById('cat-color-hex').value = '#FFB300';
  document.getElementById('cat-color').value = '#FFB300';
  const saveBtn = document.getElementById('cat-save-btn');
  if (saveBtn) saveBtn.textContent = '➕ Добавить категорию';
  const cancelBtn = document.getElementById('cat-cancel-btn');
  if (cancelBtn) cancelBtn.style.display = 'none';
  const formTitle = document.getElementById('cat-form-title');
  if (formTitle) formTitle.textContent = 'Новая категория';
}

function editCategory(id) {
  const cat = adminCategoriesCache.find(c => c.id === id);
  if (!cat) return;

  editingCategoryId = id;
  document.getElementById('cat-name').value = cat.name;
  document.getElementById('cat-slug').value = cat.slug;
  document.getElementById('cat-icon').value = cat.icon || '📚';
  document.getElementById('cat-color-hex').value = cat.color || '#FFB300';
  document.getElementById('cat-color').value = cat.color || '#FFB300';
  document.getElementById('cat-save-btn').textContent = '💾 Сохранить изменения';
  document.getElementById('cat-cancel-btn').style.display = 'inline-block';
  const formTitle = document.getElementById('cat-form-title');
  if (formTitle) formTitle.textContent = `Редактирование: ${cat.name}`;
}

async function saveCategory() {
  const name = document.getElementById('cat-name').value.trim();
  const slug = document.getElementById('cat-slug').value.trim();
  const icon = document.getElementById('cat-icon').value.trim() || '📚';
  const color = document.getElementById('cat-color-hex').value.trim() || '#FFB300';

  if (!name) {
    alert('Введите название категории');
    return;
  }

  try {
    if (editingCategoryId) {
      const res = await apiPut(`/api/categories/${editingCategoryId}`, { name, slug, icon, color });
      // Questions are re-linked on the server when the slug changes —
      // reload them so local state matches the new category identifier.
      await loadQuestions();
      await refreshCategories();
      renderAdminQuestionsList();
      resetCategoryForm();
      toast(`✅ «${name}» обновлена. Вопросы сохранены: ${res.questions_kept ?? 0}.`, 'success', 3500);
    } else {
      await apiPost('/api/categories', { name, slug, icon, color });
      await refreshCategories();
      resetCategoryForm();
      toast('✅ Категория создана');
    }
  } catch (e) {
    toast(`Ошибка: ${e.message}`, 'error', 3500);
  }
}

async function deleteCategory(id) {
  const cat = adminCategoriesCache.find(c => c.id === id);
  if (!cat) return;

  // No questions → nothing else to preserve, confirm the irreversible delete
  if (!cat.count) {
    openDangerConfirm(`Категория «${cat.name}» будет удалена.`, async () => {
      try {
        await apiDelete(`/api/categories/${id}`);
        await loadQuestions();
        await refreshCategories();
        toast('✅ Категория удалена');
      } catch (e) {
        toast(`Ошибка: ${e.message}`, 'error');
      }
    });
    return;
  }

  // Category has questions → ask what to do with them
  const others = adminCategoriesCache.filter(c => c.id !== id);
  const textEl = document.getElementById('delete-cat-text');
  const targetSel = document.getElementById('delete-cat-target');
  const newNameInput = document.getElementById('delete-cat-new-name');
  const moveExistingBtn = document.getElementById('delete-cat-move-existing');

  textEl.textContent =
    `В категории «${cat.name}» — ${cat.count} вопрос(ов). ` +
    'Что с ними сделать?';
  targetSel.innerHTML = others.length
    ? others.map(c =>
        `<option value="${c.id}">${escapeHtml(c.icon || '')} ${escapeHtml(c.name)} (${c.count || 0})</option>`
      ).join('')
    : '<option value="">— нет других категорий —</option>';
  moveExistingBtn.style.display = others.length ? '' : 'none';
  newNameInput.value = '';

  window._deleteCategoryContext = { id, count: cat.count, name: cat.name };
  document.getElementById('delete-category-modal').style.display = 'flex';
}

function closeDeleteCategoryModal() {
  document.getElementById('delete-category-modal').style.display = 'none';
  window._deleteCategoryContext = null;
}

async function confirmDeleteCategory(mode) {
  const ctx = window._deleteCategoryContext;
  if (!ctx) return;

  try {
    if (mode === 'move') {
      const target = document.getElementById('delete-cat-target').value;
      if (!target) return;
      const res = await apiDelete(
        `/api/categories/${ctx.id}?mode=move&target=${encodeURIComponent(target)}`
      );
      await refreshCategories();
      closeDeleteCategoryModal();
      toast(`✅ Категория удалена. Перемещено вопросов: ${res.moved_questions}`);
    } else if (mode === 'move-new') {
      const name = document.getElementById('delete-cat-new-name').value.trim();
      if (!name) {
        alert('Введите название новой категории');
        return;
      }
      const created = await apiPost('/api/categories', { name });
      const res = await apiDelete(
        `/api/categories/${ctx.id}?mode=move&target=${created.id}`
      );
      await refreshCategories();
      closeDeleteCategoryModal();
      toast(`✅ Категория удалена. Перемещено в «${name}»: ${res.moved_questions}`);
    } else if (mode === 'delete') {
      closeDeleteCategoryModal();
      openDangerConfirm(
        `Категория «${ctx.name}» и все ${ctx.count} вопрос(ов) внутри неё будут удалены безвозвратно.`,
        async () => {
          try {
            const res = await apiDelete(`/api/categories/${ctx.id}?mode=delete`);
            await loadQuestions();
            await refreshCategories();
            renderAdminQuestionsList();
            toast(`✅ Категория удалена вместе с ${res.deleted_questions} вопрос(ами)`);
          } catch (e) {
            toast(`Ошибка: ${e.message}`, 'error');
          }
        }
      );
    }
  } catch (e) {
    toast(`Ошибка: ${e.message}`, 'error');
  }
}

// Sync categories from backend into quiz data + admin lists
async function refreshCategories() {
  const categories = await apiGet('/api/categories');
  questionsData.categories = normalizeCategories(categories);
  renderAdminCategoriesList();
  renderSignCategories();
  renderStudyCategories();
  if (typeof updateProfile === 'function') updateProfile();
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
}

function buyProExam() {
  buyProExamWithStars();
}

function buyLives() {
  if (window.Telegram?.WebApp?.openInvoice) {
    const tg = window.Telegram.WebApp;
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      // Create invoice for lives
      apiPost('/api/payment/invoice-lives', {}).then(data => {
        if (data.invoice_url) {
          tg.openInvoice(data.invoice_url, (status) => {
            if (status === 'paid') {
              state.stats.lives += 3;
              saveState();
              updateUI();
              closePaymentModal();
              tg.showAlert('❤️ +3 жизни добавлены!');
            }
          });
        } else {
          alert('Ошибка создания invoice');
        }
      }).catch(e => {
        // Dev mode: add lives without payment
        state.stats.lives += 3;
        saveState();
        updateUI();
        closePaymentModal();
        alert('❤️ +3 жизни добавлены!');
      });
    }
  } else {
    // Dev mode: add lives without payment
    state.stats.lives += 3;
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

// ============================================
// ADMIN: DASHBOARD & ANALYTICS
// ============================================
async function loadDashboard() {
  try {
    const data = await apiGet('/api/admin/analytics');
    renderDashboard(data);
  } catch (e) {
    console.error('Failed to load dashboard:', e);
    document.getElementById('dashboard-stats').innerHTML = '<p style="color:var(--red);">Ошибка загрузки</p>';
  }
}

function renderDashboard(data) {
  const statsEl = document.getElementById('dashboard-stats');
  statsEl.innerHTML = `
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.total_users}</div>
      <div class="dashboard-stat-label">Всего пользователей</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.active_today}</div>
      <div class="dashboard-stat-label">Активны сегодня</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.active_week}</div>
      <div class="dashboard-stat-label">Активны за неделю</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.pro_users}</div>
      <div class="dashboard-stat-label">Pro подписчиков</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.pro_conversion ?? 0}%</div>
      <div class="dashboard-stat-label">Конверсия в Pro</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.dau_wau ?? 0}%</div>
      <div class="dashboard-stat-label">Липкость DAU/WAU</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.new_users_week ?? 0}</div>
      <div class="dashboard-stat-label">Новых за неделю</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.retention_day1 ?? 0}%</div>
      <div class="dashboard-stat-label">Возврат на 1-й день</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.retention_day7 ?? 0}%</div>
      <div class="dashboard-stat-label">Возврат на 7-й день</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.retention_day30 ?? 0}%</div>
      <div class="dashboard-stat-label">Возврат на 30-й день</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.total_answered}</div>
      <div class="dashboard-stat-label">Всего ответов</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.avg_accuracy}%</div>
      <div class="dashboard-stat-label">Средняя точность</div>
    </div>
    <div class="dashboard-stat">
      <div class="dashboard-stat-value">${data.total_competitions}</div>
      <div class="dashboard-stat-label">Соревнований</div>
    </div>
  `;

  // Top users
  const topEl = document.getElementById('top-users-list');
  if (data.top_users && data.top_users.length > 0) {
    topEl.innerHTML = data.top_users.map((u, i) => `
      <div class="user-card">
        <span style="font-size:20px;font-weight:800;color:var(--amber);width:30px;">#${i+1}</span>
        <div class="user-card-info">
          <div class="user-card-name">${u.name}</div>
          <div class="user-card-meta">${u.total_answered} вопросов | ${u.accuracy}% точность | 🔥 ${u.streak}</div>
        </div>
      </div>
    `).join('');
  } else {
    topEl.innerHTML = '<p style="color:var(--tg-theme-hint-color);">Пока нет данных</p>';
  }
}

// ============================================
// ADMIN: USERS LIST
// ============================================
async function loadUsersList() {
  try {
    const users = await apiGet('/api/admin/users');
    renderUsersList(users);
  } catch (e) {
    console.error('Failed to load users:', e);
    document.getElementById('users-list').innerHTML = '<p style="color:var(--red);">Ошибка загрузки</p>';
  }
}

function renderUsersList(users) {
  const container = document.getElementById('users-list');
  if (!users || users.length === 0) {
    container.innerHTML = '<p>Нет пользователей</p>';
    return;
  }

  container.innerHTML = users.map(u => {
    const proBtn = u.is_pro
      ? `<button class="btn-free" onclick="setUserSubscription(${u.id}, 'free')">Снять Pro</button>`
      : `<button class="btn-pro" onclick="setUserSubscription(${u.id}, 'pro')">Дать Pro</button>`;

    return `
      <div class="user-card">
        <div class="user-card-info">
          <div class="user-card-name">${u.name || 'Аноним'} ${u.is_admin ? '👑' : ''}</div>
          <div class="user-card-meta">
            ID: ${u.tg_id} | ${u.total_answered} вопросов | ${u.subscription}
            ${u.last_active ? ' | Активен: ' + new Date(u.last_active).toLocaleDateString('ru-RU') : ''}
          </div>
        </div>
        <div class="user-card-actions">
          ${proBtn}
        </div>
      </div>
    `;
  }).join('');
}

async function setUserSubscription(userId, plan) {
  const duration = plan === 'pro' ? prompt('На сколько дней дать Pro? (по умолчанию 30)', '30') : 0;
  if (plan === 'pro' && !duration) return;

  try {
    await apiPost(`/api/admin/user/${userId}/subscription`, {
      plan: plan,
      duration_days: parseInt(duration) || 30,
    });
    alert(`✅ Подписка ${plan === 'pro' ? 'Pro' : 'Free'} назначена!`);
    loadUsersList();
  } catch (e) {
    alert('❌ Ошибка: ' + e.message);
  }
}

// ============================================
// ADMIN: SETTINGS
// ============================================
let adminSettings = [];

async function loadAdminSettings() {
  try {
    const data = await apiGet('/api/settings');
    adminSettings = data;
    renderSettingsForm(data);
  } catch (e) {
    console.error('Failed to load settings:', e);
    document.getElementById('admin-settings-list').innerHTML = '<p style="color:var(--red);">Ошибка загрузки настроек</p>';
  }
}

function renderSettingsForm(settings) {
  const container = document.getElementById('admin-settings-list');
  if (!settings || settings.length === 0) {
    container.innerHTML = '<p>Нет настроек</p>';
    return;
  }

  const settingLabels = {
    'pro_stars_price': '⭐ Цена Pro подписки (Stars)',
    'free_error_limit': '📝 Лимит ошибок (бесплатный план)',
    'max_daily_lives': '❤️ Жизни в день',
    'daily_questions_target': '🎯 Цель вопросов в день',
    'exam_questions': '📋 Вопросов в экзамене',
    'exam_time_minutes': '⏱️ Время экзамена (мин)',
    'mini_game_duration': '🎮 Длительность мини-игры (сек)',
    'pro_duration_days': '📅 Срок Pro подписки (дней)',
    'free_plan_enabled': '🆓 Бесплатный план',
    'pro_plan_enabled': '💎 Pro план доступен',
    'lives_stars_price': '❤️ Цена жизней (Stars)',
    'free_bird_games': '🐤 Flippy Bird: бесплатных игр в день',
    'bird_obstacles_min': '🐤 Flippy Bird: минимум препятствий',
    'bird_obstacles_max': '🐤 Flippy Bird: максимум препятствий',
    'bird_question_seconds': '🐤 Flippy Bird: секунд на ответ',
    'bird_ad_reward_max': '🐤 Flippy Bird: бонусных игр за рекламу (0 — без лимита)',
    'bird_ad_duration': '🐤 Flippy Bird: длительность рекламы (сек)',
    'discount_enabled': '🏷️ Скидка включена',
    'discount_percent': '📉 Размер скидки (%)',
    'discount_price': '💰 Цена со скидкой (Stars)',
    'discount_expires': '📅 Скидка до (YYYY-MM-DD)',
  };

  const boolKeys = ['free_plan_enabled', 'pro_plan_enabled', 'discount_enabled'];

  container.innerHTML = settings.map(s => {
    const label = settingLabels[s.key] || s.key;
    const isBool = boolKeys.includes(s.key);
    const isNumber = ['pro_stars_price', 'pro_duration_days', 'free_error_limit', 'max_daily_lives', 'daily_questions_target', 'exam_questions', 'exam_time_minutes', 'mini_game_duration', 'lives_stars_price', 'discount_percent', 'discount_price', 'free_bird_games', 'bird_obstacles_min', 'bird_obstacles_max', 'bird_question_seconds', 'bird_ad_reward_max', 'bird_ad_duration'].includes(s.key);

    if (isBool) {
      return `
        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-label">${label}</span>
            <span class="setting-desc">${s.description}</span>
          </div>
          <label class="switch">
            <input type="checkbox" data-key="${s.key}" ${s.value === 'true' ? 'checked' : ''} class="settings-toggle">
            <span class="slider"></span>
          </label>
        </div>
      `;
    } else {
      return `
        <div class="setting-row">
          <div class="setting-info">
            <span class="setting-label">${label}</span>
            <span class="setting-desc">${s.description}</span>
          </div>
          <input type="${isNumber ? 'number' : 'text'}" data-key="${s.key}" value="${s.value}" class="input-field settings-input">
        </div>
      `;
    }
  }).join('');
}

async function saveSettings() {
  const inputs = document.querySelectorAll('.settings-input, .settings-toggle');
  const settings = [];

  inputs.forEach(input => {
    const key = input.dataset.key;
    let value;

    if (input.classList.contains('settings-toggle')) {
      value = input.checked ? 'true' : 'false';
    } else {
      value = input.value;
    }

    settings.push({ key, value });
  });

  try {
    await apiPost('/api/settings', { settings });
    // Apply immediately, without waiting for a page reload.
    await loadPublicSettings();
    await fetchUserProfile();
    updateUI();
    renderSubscriptionCard();
    refreshBirdStatus();
    await loadAdminSettings();
    toast('✅ Настройки сохранены и применены');
  } catch (e) {
    console.error('Failed to save settings:', e);
    toast('❌ Ошибка сохранения настроек', 'error');
  }
}

// ============================================
// COMPETITION MODE (Online 1v1)
// ============================================
let compSocket = null;
let compState = null;
let compAnswered = false;

function initCompetitionSocket() {
  if (compSocket) return compSocket;

  const serverUrl = IS_LOCAL_DEV
    ? `${window.location.protocol}//${window.location.hostname}:5000`
    : 'https://zholrules.onrender.com';

  compSocket = io(serverUrl, {
    transports: ['websocket', 'polling'],
    reconnection: true,
    reconnectionDelay: 1000,
  });

  compSocket.on('connect', () => {
    console.log('Competition socket connected');
  });

  compSocket.on('disconnect', () => {
    console.log('Competition socket disconnected');
  });

  compSocket.on('queue_joined', (data) => {
    console.log('Joined queue:', data);
    document.getElementById('comp-waiting-status').textContent = data.message;
  });

  compSocket.on('competition_start', (data) => {
    console.log('Competition started:', data);
    startCompGame(data);
  });

  compSocket.on('competition_answer_result', (data) => {
    handleCompAnswerResult(data);
  });

  compSocket.on('competition_score_update', (data) => {
    document.getElementById('comp-opponent-score').textContent = data.opponent_score;
  });

  compSocket.on('competition_opponent_finished', (data) => {
    // Show notification that opponent finished
    const btn = document.getElementById('comp-next-btn');
    btn.textContent = '⚡ Закончить быстрее!';
  });

  compSocket.on('competition_result', (data) => {
    showCompResult(data);
  });

  compSocket.on('competition_opponent_left', (data) => {
    alert(`${data.opponent_name} покинул бой. Ты победил! 🏆`);
    exitCompetition();
  });

  compSocket.on('error', (data) => {
    console.error('Competition error:', data);
  });

  return compSocket;
}

function startCompetition() {
  // Check lives (owner has unlimited)
  if (state.stats.lives <= 0 && !state.user.isAdmin) {
    showPaymentModal();
    return;
  }

  // Show competition screen
  document.getElementById('competition-screen').classList.add('active');
  document.getElementById('comp-waiting').style.display = 'flex';
  document.getElementById('comp-game').style.display = 'none';
  document.getElementById('comp-result').style.display = 'none';

  // Connect socket
  const socket = initCompetitionSocket();

  // Join queue
  socket.emit('competition_join', {
    user_id: state.user.id,
    name: state.user.name || 'Аноним',
  });
}

function startCompGame(data) {
  compState = {
    competition_id: data.competition_id,
    questions: data.questions,
    opponent_name: data.opponent_name,
    currentIndex: 0,
    correctCount: 0,
    answered: false,
  };

  // Hide waiting, show game
  document.getElementById('comp-waiting').style.display = 'none';
  document.getElementById('comp-game').style.display = 'block';
  document.getElementById('comp-result').style.display = 'none';

  // Set names
  document.getElementById('comp-your-name').textContent = state.user.name || 'Ты';
  document.getElementById('comp-opponent-name').textContent = data.opponent_name;
  document.getElementById('comp-your-score').textContent = '0';
  document.getElementById('comp-opponent-score').textContent = '0';

  renderCompQuestion();
}

function renderCompQuestion() {
  const q = compState.questions[compState.currentIndex];
  if (!q) return;

  compAnswered = false;

  // Progress
  const total = compState.questions.length;
  const pct = (compState.currentIndex / total) * 100;
  document.getElementById('comp-progress').style.width = `${pct}%`;
  document.getElementById('comp-counter').textContent = `${compState.currentIndex + 1} / ${total}`;

  // Question
  const questionTextEl = document.getElementById('comp-question-text');
  questionTextEl.textContent = q.question || '';
  questionTextEl.style.display = q.question ? '' : 'none';

  // Media (image, video file or YouTube embed)
  const mediaEl = document.getElementById('comp-media');
  if (q.media_url) {
    renderMediaInto(mediaEl, q.media_type, q.media_url);
  } else {
    mediaEl.innerHTML = '';
  }

  // Options
  const optionsEl = document.getElementById('comp-options');
  const markers = ['A', 'B', 'C', 'D', 'E', 'F'];

  optionsEl.innerHTML = q.options.map((opt, idx) => {
    const mediaHtml = optionMediaHtml(q, idx, 'comp');
    return `
    <div class="comp-option${mediaHtml ? ' has-media' : ''}" onclick="selectCompOption(${idx})">
      <span class="comp-option-marker">${markers[idx]}</span>
      ${mediaHtml}
      <span>${escapeHtml(opt)}</span>
    </div>
  `;
  }).join('');

  // Hide explanation
  document.getElementById('comp-explanation').style.display = 'none';
  document.getElementById('comp-next-btn').disabled = true;
}

function selectCompOption(index) {
  if (compAnswered) return;
  compAnswered = true;

  const q = compState.questions[compState.currentIndex];
  compState.lastSelected = index;

  // Haptic feedback
  if (window.Telegram?.WebApp?.HapticFeedback) {
    Telegram.WebApp.HapticFeedback.impactOccurred('light');
  }

  // Send answer to server
  compSocket.emit('competition_answer', {
    competition_id: compState.competition_id,
    user_id: state.user.id,
    question_id: q.id,
    selected_options: [index],
  });

  // Disable options while waiting
  document.querySelectorAll('.comp-option').forEach(opt => opt.classList.add('disabled'));
}

function handleCompAnswerResult(data) {
  const q = compState.questions[compState.currentIndex];

  // Mark correct/wrong
  const options = document.querySelectorAll('.comp-option');
  options.forEach((opt, idx) => {
    opt.classList.remove('disabled');
    if (data.correct_options.includes(idx)) {
      opt.classList.add('correct');
    } else if (idx === compState.lastSelected && !data.is_correct) {
      opt.classList.add('wrong');
    }
  });

  // Update score
  document.getElementById('comp-your-score').textContent = data.your_score;
  compState.correctCount = data.is_correct ? compState.correctCount + 1 : compState.correctCount;

  // Show explanation
  if (data.explanation) {
    document.getElementById('comp-explanation-text').textContent = data.explanation;
    document.getElementById('comp-explanation').style.display = 'block';
  }

  // Enable next button
  document.getElementById('comp-next-btn').disabled = false;
}

function nextCompQuestion() {
  compState.currentIndex++;

  if (compState.currentIndex >= compState.questions.length) {
    // Finished - wait for opponent
    document.getElementById('comp-next-btn').textContent = 'Ожидание противника...';
    document.getElementById('comp-next-btn').disabled = true;
  } else {
    renderCompQuestion();
  }
}

function showCompResult(data) {
  // Hide game, show result
  document.getElementById('comp-game').style.display = 'none';
  document.getElementById('comp-result').style.display = 'block';

  // Set result
  document.getElementById('comp-result-your-name').textContent = state.user.name || 'Ты';
  document.getElementById('comp-result-opponent-name').textContent = data.opponent_name;
  document.getElementById('comp-result-your-score').textContent = data.your_score;
  document.getElementById('comp-result-opponent-score').textContent = data.opponent_score;

  if (data.is_draw) {
    document.getElementById('comp-result-emoji').textContent = '🤝';
    document.getElementById('comp-result-title').textContent = 'Ничья!';
  } else if (data.is_winner) {
    document.getElementById('comp-result-emoji').textContent = '🏆';
    document.getElementById('comp-result-title').textContent = 'Ты победил!';
  } else {
    document.getElementById('comp-result-emoji').textContent = '😤';
    document.getElementById('comp-result-title').textContent = 'Ты проиграл';
  }

  // Haptic feedback
  if (window.Telegram?.WebApp?.HapticFeedback) {
    Telegram.WebApp.HapticFeedback.impactOccurred(data.is_winner ? 'success' : 'error');
  }
}

function leaveCompetition() {
  if (compSocket) {
    compSocket.emit('competition_leave', {
      user_id: state.user.id,
    });
  }
  document.getElementById('competition-screen').classList.remove('active');
}

function exitCompetition() {
  document.getElementById('competition-screen').classList.remove('active');
  compState = null;
  updateUI();
}

// Close modals on backdrop click (bird modals have their own lifecycle)
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target !== modal) return;
    if (['bird-question-modal', 'bird-ad-modal'].includes(modal.id)) return;
    modal.style.display = 'none';
  });
});

// ============================================================
// FLIPPY BIRD — fly through 4–11 obstacles, then answer a DB question
// ============================================================
const BIRD = {
  canvas: null,
  ctx: null,
  W: 360,
  H: 520,
  ground: 64,
  raf: null,
  lastTs: 0,
  state: null,
  status: null,
  question: null,
  qTimer: null,
  qAnswered: true,
  qTotal: 15,
  qVideoPending: false,
  qResolveTimer: null,
  adTimer: null,
  adLeft: 0,
  starting: false,
  runId: 0,
  qRemainingMs: 0,
  qRunning: false,
  qLastTick: 0,
};

const BIRD_PIPE_W = 58;
const BIRD_BIRD_X = 0.3;
const BIRD_MAX_LIVES = 3;

function birdRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function birdStatusDefaults() {
  const limit = parseInt(appSettings.free_bird_games, 10) || 3;
  const adRaw = parseInt(appSettings.bird_ad_reward_max, 10);
  const adMax = Number.isFinite(adRaw) ? adRaw : 5;
  return {
    limit,
    games_left: limit,
    bonus_games: 0,
    total_games_left: limit,
    unlimited: !!state.user.isAdmin,
    is_pro: false,
    ad_rewards_left: adMax <= 0 ? null : adMax,
    ad_reward_max: adMax,
    ad_reward_unlimited: adMax <= 0,
    ad_duration: parseInt(appSettings.bird_ad_duration, 10) || 5,
    obstacles_min: parseInt(appSettings.bird_obstacles_min, 10) || 4,
    obstacles_max: parseInt(appSettings.bird_obstacles_max, 10) || 11,
    question_seconds: parseInt(appSettings.bird_question_seconds, 10) || 15,
  };
}

async function refreshBirdStatus() {
  try {
    BIRD.status = await apiGet('/api/bird/status');
  } catch (e) {
    if (!BIRD.status) BIRD.status = birdStatusDefaults();
  }
  renderBirdStatus();
}

function renderBirdStatus() {
  const s = BIRD.status || birdStatusDefaults();
  const quota = document.getElementById('bird-quota');
  if (quota) {
    if (s.unlimited) {
      quota.textContent = '👑 Без лимитов';
    } else {
      const left = Math.max(0, s.total_games_left ?? 0);
      quota.textContent = left > 0
        ? `Осталось игр сегодня: ${left}${s.bonus_games ? ` (в т.ч. ${s.bonus_games} за рекламу)` : ''}`
        : 'На сегодня игры закончились';
    }
  }

  const adUnlimited = s.ad_rewards_left == null;
  const adLeft = adUnlimited ? '∞' : s.ad_rewards_left;
  const showAd = !s.unlimited && (adUnlimited || adLeft > 0);
  const adBtn = document.getElementById('bird-ad-btn');
  if (adBtn) {
    adBtn.style.display = showAd ? '' : 'none';
    adBtn.textContent = `🎬 Смотреть рекламу +1 игра${adUnlimited ? '' : ` (${adLeft})`}`;
  }
  const overAd = document.getElementById('bird-over-ad-btn');
  if (overAd) {
    overAd.style.display = showAd ? '' : 'none';
    overAd.textContent = `🎬 Реклама +1 игра${adUnlimited ? '' : ` (${adLeft})`}`;
  }
}

function openGameMode(mode) {
  switchTab('game');
  setGameMode(mode === 'sprint' ? 'sprint' : 'bird');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setGameMode(mode) {
  const isBird = mode === 'bird';
  document.getElementById('bird-mode').style.display = isBird ? '' : 'none';
  document.getElementById('sprint-mode').style.display = isBird ? 'none' : '';
  document.getElementById('game-mode-bird-btn').classList.toggle('active', isBird);
  document.getElementById('game-mode-sprint-btn').classList.toggle('active', !isBird);

  if (isBird) {
    stopMiniGame();
    resizeBirdCanvas();
    if (!BIRD.state?.running) birdShowStart();
    else drawBirdFrame();
    refreshBirdStatus();
  } else {
    birdPause(true);
  }
}

function birdShowStart() {
  const start = document.getElementById('bird-start-overlay');
  if (start) start.style.display = 'flex';
  const over = document.getElementById('bird-over-overlay');
  if (over) over.style.display = 'none';
  resizeBirdCanvas();
  drawBirdFrame();
}

function resizeBirdCanvas() {
  const stage = document.getElementById('bird-stage');
  if (!stage) return;
  BIRD.canvas = BIRD.canvas || document.getElementById('bird-canvas');
  if (!BIRD.canvas) return;
  BIRD.ctx = BIRD.ctx || BIRD.canvas.getContext('2d');

  const rect = stage.getBoundingClientRect();
  const w = Math.max(280, Math.round(rect.width || 360));
  const h = Math.max(360, Math.round(rect.height || 520));
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  if (BIRD.canvas.width !== Math.round(w * dpr) || BIRD.canvas.height !== Math.round(h * dpr)) {
    BIRD.canvas.width = Math.round(w * dpr);
    BIRD.canvas.height = Math.round(h * dpr);
    BIRD.canvas.style.width = `${w}px`;
    BIRD.canvas.style.height = `${h}px`;
    BIRD.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  BIRD.W = w;
  BIRD.H = h;
}

function birdTarget() {
  const s = BIRD.status || birdStatusDefaults();
  const min = Math.max(1, parseInt(s.obstacles_min, 10) || 4);
  const max = Math.max(min, parseInt(s.obstacles_max, 10) || 11);
  return birdRand(min, max);
}

async function startBirdGame() {
  // Several taps used to send several /start requests and spawn several
  // requestAnimationFrame loops — the game sped up and the counter jumped.
  if (BIRD.starting || BIRD.state?.running) return;
  if (!questionsData?.questions?.length) {
    toast('В базе пока нет вопросов', 'error');
    return;
  }

  const btn = document.getElementById('bird-start-btn');
  BIRD.starting = true;
  if (btn) {
    btn.disabled = true;
    btn.textContent = '⏳ Загрузка…';
  }
  closeBirdLimitModal();

  try {
    BIRD.status = await apiPost('/api/bird/start', {});
    renderBirdStatus();
    birdBegin();
  } catch (e) {
    if (e.status === 402) {
      BIRD.status = { ...(BIRD.status || birdStatusDefaults()), ...(e.data || {}) };
      openBirdLimitModal();
    } else if (IS_LOCAL_DEV) {
      birdBegin();
    } else {
      toast(e.message || 'Не удалось начать игру', 'error');
    }
  } finally {
    BIRD.starting = false;
    if (btn) {
      btn.disabled = false;
      btn.textContent = '▶ Играть';
    }
  }
}

function birdBegin() {
  document.getElementById('bird-start-overlay').style.display = 'none';
  document.getElementById('bird-over-overlay').style.display = 'none';
  closeBirdQuestion();
  resizeBirdCanvas();

  // Every run gets its own id: stale loops exit instead of updating the bird.
  if (BIRD.state) BIRD.state.running = false;
  cancelAnimationFrame(BIRD.raf);
  BIRD.runId = (BIRD.runId || 0) + 1;
  const runId = BIRD.runId;

  BIRD.state = {
    y: BIRD.H * 0.45,
    vy: 0,
    lives: BIRD_MAX_LIVES,
    score: 0,
    roundPassed: 0,
    passedTotal: 0,
    correct: 0,
    target: birdTarget(),
    pipes: [],
    usedQuestions: new Set(),
    running: true,
    paused: false,
    tabPaused: false,
    answering: false,
    invulnUntil: 0,
    flashUntil: 0,
  };

  updateBirdHud();
  BIRD.lastTs = performance.now();
  BIRD.raf = requestAnimationFrame(ts => birdLoop(ts, runId));
  birdHaptic('light');
}

function birdLoop(ts, runId) {
  if (runId !== BIRD.runId) return;
  const st = BIRD.state;
  if (!st || !st.running) return;
  const dt = Math.min(0.034, Math.max(0.001, (ts - BIRD.lastTs) / 1000));
  BIRD.lastTs = ts;
  if (!st.paused && !st.tabPaused) birdUpdate(dt);
  birdDraw();
  BIRD.raf = requestAnimationFrame(t => birdLoop(t, runId));
}

function birdPause(paused) {
  if (!BIRD.state) return;
  BIRD.state.tabPaused = !!paused;
  if (!paused) BIRD.lastTs = performance.now();
}

function birdUpdate(dt) {
  const st = BIRD.state;
  const groundY = BIRD.H - BIRD.ground;
  const bx = BIRD.W * BIRD_BIRD_X;

  st.vy += 980 * dt;
  st.y += st.vy * dt;
  if (st.y < 16) {
    st.y = 16;
    st.vy = 0;
  }

  const spacing = Math.max(205, BIRD.W * 0.6);
  st.pipes.forEach(p => { p.x -= 130 * dt; });

  const last = st.pipes[st.pipes.length - 1];
  if (!last || last.x < BIRD.W - spacing) {
    const gap = Math.max(152, BIRD.H * 0.32);
    const gapY = birdRand(64, Math.max(76, Math.round(groundY - gap - 64)));
    st.pipes.push({ x: BIRD.W + 24, gapY, gapH: gap, passed: false });
  }

  st.pipes = st.pipes.filter(p => p.x + BIRD_PIPE_W > -10);

  for (const p of st.pipes) {
    if (!p.passed && p.x + BIRD_PIPE_W < bx) {
      p.passed = true;
      st.roundPassed += 1;
      st.passedTotal += 1;
      st.score += 10;
      updateBirdHud();
      birdHaptic('light');
      if (st.roundPassed >= st.target) birdTriggerQuestion();
    }
  }

  if (st.invulnUntil > performance.now()) return;

  for (const p of st.pipes) {
    const overlaps = bx + 14 > p.x && bx - 14 < p.x + BIRD_PIPE_W;
    if (!overlaps) continue;
    if (st.y - 14 < p.gapY || st.y + 14 > p.gapY + p.gapH) {
      birdHit();
      return;
    }
  }

  if (st.y + 14 >= groundY) birdHit();
}

function birdHit() {
  const st = BIRD.state;
  if (!st || !st.running) return;
  const now = performance.now();
  if (st.invulnUntil > now) return;

  st.lives -= 1;
  st.flashUntil = now + 420;
  birdHaptic('heavy');
  updateBirdHud();

  if (st.lives <= 0) {
    birdGameOver();
    return;
  }

  st.invulnUntil = now + 1500;
  st.y = BIRD.H * 0.42;
  st.vy = 0;
  st.pipes = [];
  st.roundPassed = 0;
  // Keep the target fixed until the next question; only the progress resets.
  st.paused = true;

  setTimeout(() => {
    if (BIRD.state?.running && !BIRD.state.answering) {
      BIRD.state.paused = false;
      BIRD.lastTs = performance.now();
    }
  }, 800);
}

function birdFlap() {
  const st = BIRD.state;
  if (!st || !st.running || st.paused || st.tabPaused) return;
  st.vy = -340;
  birdHaptic('light');
}

function birdTriggerQuestion() {
  const st = BIRD.state;
  if (!st || st.answering) return;
  st.answering = true;
  st.paused = true;
  setTimeout(showBirdQuestion, 320);
}

function pickBirdQuestion() {
  const pool = (questionsData?.questions || []).filter(q =>
    Array.isArray(q.options) && q.options.length >= 2 &&
    Array.isArray(q.correct_options) && q.correct_options.length > 0
  );
  if (!pool.length) return null;

  const st = BIRD.state;
  let list = pool.filter(q => !st.usedQuestions.has(q.id));
  if (!list.length) {
    st.usedQuestions.clear();
    list = pool;
  }
  const q = list[birdRand(0, list.length - 1)];
  st.usedQuestions.add(q.id);
  return q;
}

function showBirdQuestion() {
  const st = BIRD.state;
  if (!st || !st.running) return;
  const q = pickBirdQuestion();
  if (!q) {
    birdResumeRound();
    return;
  }

  BIRD.question = q;
  BIRD.qAnswered = false;
  BIRD.qTotal = Math.max(5, parseInt((BIRD.status || {}).question_seconds, 10) || 15);
  BIRD.qRemainingMs = BIRD.qTotal * 1000;
  BIRD.qLastTick = Date.now();

  const textEl = document.getElementById('bird-q-text');
  textEl.textContent = q.question || '';
  textEl.style.display = q.question ? '' : 'none';

  const mediaEl = document.getElementById('bird-q-media');
  if (q.media_url) {
    renderMediaInto(mediaEl, q.media_type, q.media_url);
  } else {
    mediaEl.innerHTML = '';
  }

  document.getElementById('bird-q-feedback').textContent = '';
  document.getElementById('bird-q-feedback').className = 'bird-q-feedback';
  document.getElementById('bird-q-lives').textContent = '❤️'.repeat(Math.max(0, st.lives));
  document.getElementById('bird-q-options').innerHTML = q.options.map((opt, idx) => {
    const mediaHtml = optionMediaHtml(q, idx, 'bird');
    return `<div class="bird-q-option${mediaHtml ? ' has-media' : ''}" role="button" tabindex="0" onclick="if (event.target.closest('video,iframe,audio')) return; birdAnswer(${idx})">${mediaHtml}<span>${escapeHtml(opt)}</span></div>`;
  }).join('');

  document.getElementById('bird-question-modal').style.display = 'flex';

  // A question video must be watched first: the countdown stays frozen until
  // it ends. Any other video (e.g. in an answer) also pauses the countdown.
  const questionVideo = mediaEl.querySelector('video');
  BIRD.qVideoPending = !!questionVideo;
  BIRD.qRunning = !BIRD.qVideoPending;
  document.querySelectorAll('#bird-question-modal video').forEach(video => {
    video.addEventListener('play', () => { BIRD.qRunning = false; });
    video.addEventListener('pause', () => {
      if (!BIRD.qVideoPending) BIRD.qRunning = true;
    });
    const startAfterVideo = () => {
      BIRD.qVideoPending = false;
      BIRD.qRunning = true;
      BIRD.qLastTick = Date.now();
      const feedback = document.getElementById('bird-q-feedback');
      if (feedback?.classList.contains('is-video-note')) {
        feedback.textContent = '';
        feedback.className = 'bird-q-feedback';
      }
    };
    video.addEventListener('ended', startAfterVideo);
    video.addEventListener('error', startAfterVideo);
  });

  if (BIRD.qVideoPending) {
    const note = document.getElementById('bird-q-feedback');
    note.textContent = '⏸ Таймер начнётся после просмотра видео';
    note.className = 'bird-q-feedback is-video-note';
  }

  clearInterval(BIRD.qTimer);
  birdTickQuestion();
  BIRD.qTimer = setInterval(birdTickQuestion, 100);
  birdHaptic('light');
}

function birdTickQuestion() {
  const now = Date.now();
  if (BIRD.qRunning) {
    BIRD.qRemainingMs -= now - BIRD.qLastTick;
  }
  BIRD.qLastTick = now;

  const leftMs = Math.max(0, BIRD.qRemainingMs);
  const left = Math.ceil(leftMs / 1000);
  const timerEl = document.getElementById('bird-q-timer');
  timerEl.textContent = String(left);
  timerEl.classList.toggle('warning', left <= 5 && BIRD.qRunning);
  document.getElementById('bird-q-progress-fill').style.width =
    `${Math.max(0, Math.min(100, (leftMs / (BIRD.qTotal * 1000)) * 100))}%`;
  if (leftMs <= 0) resolveBirdAnswer(-1);
}

function birdAnswer(index) {
  resolveBirdAnswer(index);
}

function resolveBirdAnswer(index) {
  if (BIRD.qAnswered) return;
  BIRD.qAnswered = true;
  clearInterval(BIRD.qTimer);

  const st = BIRD.state;
  const q = BIRD.question;
  if (!st || !q) return;
  const isCorrect = index >= 0 && q.correct_options.includes(index);

  document.querySelectorAll('#bird-q-options .bird-q-option').forEach((btn, i) => {
    btn.classList.add('disabled');
    btn.style.pointerEvents = 'none';
    if (q.correct_options.includes(i)) btn.classList.add('correct');
    else if (i === index) btn.classList.add('wrong');
  });

  try { submitAnswerToServer(q.id, index >= 0 ? [index] : []); } catch (e) { /* analytics */ }

  const feedback = document.getElementById('bird-q-feedback');
  const correctText = q.options[q.correct_options[0]] || '—';
  if (isCorrect) {
    st.correct += 1;
    st.score += 100;
    feedback.textContent = `✅ Верно! +100 очков${q.explanation ? ` — ${q.explanation}` : ''}`;
    feedback.className = 'bird-q-feedback is-correct';
    birdHaptic('success');
  } else {
    st.lives -= 1;
    feedback.textContent = index < 0
      ? `⏰ Время вышло. Правильный ответ: ${correctText}`
      : `❌ Неверно. Правильный ответ: ${correctText}`;
    feedback.className = 'bird-q-feedback is-wrong';
    birdHaptic('heavy');
  }

  document.getElementById('bird-q-lives').textContent = '❤️'.repeat(Math.max(0, st.lives));
  updateBirdHud();

  clearTimeout(BIRD.qResolveTimer);
  BIRD.qResolveTimer = setTimeout(() => {
    document.getElementById('bird-question-modal').style.display = 'none';
    if (!st.running) return;
    st.answering = false;

    if (isCorrect) {
      birdResumeRound();
    } else if (st.lives <= 0) {
      birdGameOver();
    } else {
      st.pipes = [];
      st.roundPassed = 0;
      st.target = birdTarget();
      st.paused = true;
      setTimeout(() => {
        if (BIRD.state?.running) {
          BIRD.state.paused = false;
          BIRD.lastTs = performance.now();
        }
      }, 700);
    }
  }, 1600);
}

function birdResumeRound() {
  const st = BIRD.state;
  if (!st || !st.running) return;
  st.answering = false;
  st.paused = false;
  st.roundPassed = 0;
  st.target = birdTarget();
  st.pipes = [];
  BIRD.lastTs = performance.now();
  updateBirdHud();
}

function closeBirdQuestion() {
  clearInterval(BIRD.qTimer);
  clearTimeout(BIRD.qResolveTimer);
  const modal = document.getElementById('bird-question-modal');
  if (modal) {
    modal.querySelectorAll('video').forEach(video => {
      try { video.pause(); } catch (e) { /* ignore */ }
    });
    modal.style.display = 'none';
  }
}

async function birdGameOver() {
  const st = BIRD.state;
  if (!st) return;
  st.running = false;
  st.paused = true;
  st.answering = false;
  cancelAnimationFrame(BIRD.raf);
  closeBirdQuestion();

  document.getElementById('bird-start-overlay').style.display = 'none';
  document.getElementById('bird-final-pipes').textContent = st.passedTotal;
  document.getElementById('bird-final-correct').textContent = st.correct;
  document.getElementById('bird-final-score').textContent = st.score;

  let best = Math.max(st.score, state.stats.gameHighScore || 0);
  document.getElementById('bird-final-best').textContent = best;
  document.getElementById('bird-over-overlay').style.display = 'flex';

  try {
    const res = await apiPost('/api/bird/finish', {
      score: st.score,
      pipes: st.passedTotal,
      correct: st.correct,
    });
    best = res.high_score ?? best;
    document.getElementById('bird-final-best').textContent = best;
    state.stats.gameHighScore = best;
  } catch (e) {
    state.stats.gameHighScore = best;
  }
  refreshBirdStatus();
}

function closeBirdGame() {
  if (BIRD.state) BIRD.state.running = false;
  cancelAnimationFrame(BIRD.raf);
  closeBirdQuestion();
  BIRD.state = null;
  birdShowStart();
  updateBirdHud();
  refreshBirdStatus();
}

function updateBirdHud() {
  const st = BIRD.state;
  const lives = st ? st.lives : BIRD_MAX_LIVES;
  const livesEl = document.getElementById('bird-lives');
  if (livesEl) {
    livesEl.textContent = '❤️'.repeat(Math.max(0, lives)) + '🖤'.repeat(Math.max(0, BIRD_MAX_LIVES - lives));
  }
  const target = st ? st.target : 0;
  const textEl = document.getElementById('bird-progress-text');
  if (textEl) textEl.textContent = st ? `${st.roundPassed} / ${target}` : '—';
  const fill = document.getElementById('bird-progress-fill');
  if (fill) fill.style.width = st && target ? `${Math.min(100, (st.roundPassed / target) * 100)}%` : '0%';
  const scoreEl = document.getElementById('bird-score');
  if (scoreEl) scoreEl.textContent = st ? st.score : 0;
}

function birdRoundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, Math.max(0, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
  ctx.fill();
}

function birdDraw() {
  if (!BIRD.ctx) return;
  const ctx = BIRD.ctx;
  const W = BIRD.W;
  const H = BIRD.H;
  const st = BIRD.state;
  const groundY = H - BIRD.ground;

  const sky = ctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, '#6ec9ff');
  sky.addColorStop(0.7, '#bdeaff');
  sky.addColorStop(1, '#e8f7ff');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  [[0.18, 0.16, 24], [0.62, 0.1, 18], [0.82, 0.28, 16]].forEach(([x, y, r]) => {
    ctx.beginPath();
    ctx.arc(W * x, H * y, r, 0, Math.PI * 2);
    ctx.arc(W * x + r, H * y + 4, r * 0.8, 0, Math.PI * 2);
    ctx.arc(W * x - r, H * y + 5, r * 0.7, 0, Math.PI * 2);
    ctx.fill();
  });

  if (st) {
    for (const p of st.pipes) {
      const grad = ctx.createLinearGradient(p.x, 0, p.x + BIRD_PIPE_W, 0);
      grad.addColorStop(0, '#2f9e44');
      grad.addColorStop(0.5, '#51cf66');
      grad.addColorStop(1, '#2b8a3e');
      ctx.fillStyle = grad;
      birdRoundRect(ctx, p.x, 0, BIRD_PIPE_W, p.gapY, 8);
      birdRoundRect(ctx, p.x, p.gapY + p.gapH, BIRD_PIPE_W, groundY - (p.gapY + p.gapH), 8);
      ctx.fillStyle = 'rgba(255,255,255,0.22)';
      ctx.fillRect(p.x + 8, 0, 6, p.gapY);
      ctx.fillRect(p.x + 8, p.gapY + p.gapH, 6, groundY - (p.gapY + p.gapH));
    }
  }

  ctx.fillStyle = '#d9c07a';
  ctx.fillRect(0, groundY, W, BIRD.ground);
  ctx.fillStyle = '#c4a95f';
  ctx.fillRect(0, groundY, W, 12);

  const bx = W * BIRD_BIRD_X;
  const by = st ? st.y : H * 0.46;
  const bob = st ? 0 : Math.sin(performance.now() / 450) * 6;
  const blink = st && st.invulnUntil > performance.now() && Math.floor(performance.now() / 120) % 2 === 0;

  if (!blink) {
    ctx.save();
    ctx.translate(bx, by + bob);
    ctx.rotate(st ? Math.max(-0.5, Math.min(1.0, st.vy / 900)) : 0);
    // 🐤 is drawn facing left in most emoji fonts; mirror it to fly right.
    ctx.scale(-1, 1);
    ctx.font = '30px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🐤', 0, 0);
    ctx.restore();
  }

  if (st && st.flashUntil > performance.now()) {
    ctx.fillStyle = 'rgba(255,60,60,0.25)';
    ctx.fillRect(0, 0, W, H);
  }
}

function drawBirdFrame() {
  if (!BIRD.ctx) resizeBirdCanvas();
  if (BIRD.ctx) birdDraw();
}

function birdHaptic(type) {
  const hf = window.Telegram?.WebApp?.HapticFeedback;
  if (!hf) return;
  try {
    if (type === 'heavy') hf.impactOccurred('heavy');
    else if (type === 'success') hf.notificationOccurred('success');
    else hf.impactOccurred('light');
  } catch (e) { /* ignore */ }
}

function openBirdLimitModal() {
  const s = BIRD.status || birdStatusDefaults();
  const text = document.getElementById('bird-limit-text');
  if (text) {
    text.textContent = s.unlimited
      ? 'Лимитов нет.'
      : `Бесплатный тариф: ${s.limit || 3} игры в день. Сегодня использовано: ${s.played_today || 0}. Бонусных игр: ${s.bonus_games || 0}.`;
  }
  const adBtn = document.getElementById('bird-limit-ad-btn');
  if (adBtn) {
    const adUnlimited = s.ad_rewards_left == null;
    const left = adUnlimited ? '∞' : s.ad_rewards_left;
    adBtn.style.display = (adUnlimited || left > 0) ? '' : 'none';
    adBtn.textContent = `🎬 Смотреть рекламу +1 игра${adUnlimited ? '' : ` (${left})`}`;
  }
  document.getElementById('bird-limit-modal').style.display = 'flex';
}

function closeBirdLimitModal() {
  document.getElementById('bird-limit-modal').style.display = 'none';
}

function watchBirdRewardAd() {
  const s = BIRD.status;
  if (s && !s.unlimited && s.ad_rewards_left != null && s.ad_rewards_left <= 0) {
    toast('Бонусные игры на сегодня закончились', 'error');
    return;
  }

  closeBirdLimitModal();
  BIRD.adLeft = Math.max(1, parseInt((BIRD.status || {}).ad_duration, 10) || 5);
  const modal = document.getElementById('bird-ad-modal');
  const btn = document.getElementById('bird-ad-claim-btn');
  modal.style.display = 'flex';
  btn.disabled = true;
  btn.textContent = `Подождите ${BIRD.adLeft}…`;

  clearInterval(BIRD.adTimer);
  BIRD.adTimer = setInterval(() => {
    BIRD.adLeft -= 1;
    if (BIRD.adLeft <= 0) {
      clearInterval(BIRD.adTimer);
      btn.disabled = false;
      btn.textContent = '✅ Получить +1 игру';
    } else {
      btn.textContent = `Подождите ${BIRD.adLeft}…`;
    }
  }, 1000);
}

async function claimBirdReward() {
  const btn = document.getElementById('bird-ad-claim-btn');
  btn.disabled = true;
  try {
    BIRD.status = await apiPost('/api/bird/reward', {});
    clearInterval(BIRD.adTimer);
    document.getElementById('bird-ad-modal').style.display = 'none';
    renderBirdStatus();
    toast('🎬 +1 игра за просмотр рекламы');
    startBirdGame();
  } catch (e) {
    btn.disabled = false;
    btn.textContent = 'Повторить';
    if (e.status === 429) {
      BIRD.status = { ...(BIRD.status || birdStatusDefaults()), ...(e.data || {}) };
      renderBirdStatus();
      document.getElementById('bird-ad-modal').style.display = 'none';
      toast('Лимит бонусных игр на сегодня', 'error');
    } else {
      toast(e.message || 'Не удалось получить награду', 'error');
    }
  }
}

// Flap on tap / space
 document.getElementById('bird-stage')?.addEventListener('pointerdown', (e) => {
  if (e.target.closest('.bird-overlay')) return;
  e.preventDefault();
  birdFlap();
});

document.addEventListener('keydown', (e) => {
  if (e.key !== ' ' && e.code !== 'Space') return;
  const gameTab = document.getElementById('tab-game');
  const birdVisible = document.getElementById('bird-mode')?.style.display !== 'none';
  const questionOpen = document.getElementById('bird-question-modal')?.style.display !== 'none';
  const tag = (e.target.tagName || '').toLowerCase();
  if (gameTab?.classList.contains('active') && birdVisible && !questionOpen &&
      !['input', 'textarea', 'select', 'button'].includes(tag)) {
    e.preventDefault();
    birdFlap();
  }
});

window.addEventListener('resize', () => {
  if (document.getElementById('bird-mode')?.style.display === 'none') return;
  resizeBirdCanvas();
  if (!BIRD.state?.running) drawBirdFrame();
});

// Idle scene before the first game
setTimeout(() => {
  resizeBirdCanvas();
  drawBirdFrame();
}, 600);
