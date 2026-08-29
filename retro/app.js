/**
 * AutoTest_KZ - Retro ASCII Mini App
 * Minimal JS for navigation + quiz
 */

const API_BASE = 'https://zholrules.onrender.com';
let currentScreen = 'home';
let questionsData = null;
let quizState = null;

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
  // Telegram WebApp
  if (window.Telegram?.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
    const user = Telegram.WebApp.initDataUnsafe?.user;
    if (user) {
      updateUserDisplay(user);
    }
  } else {
    updateUserDisplay({ id: 12345678, first_name: 'DevUser' });
  }

  // Update time
  updateHeaderTime();
  setInterval(updateHeaderTime, 60000);

  // Load questions
  await loadQuestions();
});

function updateUserDisplay(user) {
  const name = user.first_name || user.username || 'User';
  document.getElementById('user-name-display').textContent = name.toUpperCase();
  document.getElementById('profile-name-display').textContent = name;

  // Check admin
  fetch(`${API_BASE}/api/user`, { headers: getAuthHeaders() })
    .then(r => r.json())
    .then(data => {
      if (data.user?.is_admin) {
        document.getElementById('admin-badge').style.display = 'inline';
        document.getElementById('admin-nav-btn').style.display = 'flex';
      }
      if (data.stats) {
        updateStats(data.stats);
      }
    })
    .catch(() => {});
}

function updateHeaderTime() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('header-time').textContent = `${h}:${m}`;
}

function updateStats(stats) {
  document.getElementById('stat-total').textContent = stats.total_answered || 0;
  document.getElementById('stat-correct').textContent = stats.total_correct || 0;
  const acc = stats.accuracy || 0;
  document.getElementById('stat-accuracy').textContent = `${acc}%`;
  document.getElementById('stat-wrong').textContent = (stats.total_answered || 0) - (stats.total_correct || 0);
  document.getElementById('stat-streak').textContent = stats.streak || 0;
  document.getElementById('stat-stars').textContent = stats.stars || 0;
  document.getElementById('xp-pct').textContent = acc;
}

// ============================================
// NAVIGATION
// ============================================
function switchScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-ascii-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(`screen-${screen}`).classList.add('active');
  document.querySelector(`[data-screen="${screen}"]`).classList.add('active');
  currentScreen = screen;
}

// ============================================
// QUESTIONS
// ============================================
async function loadQuestions() {
  try {
    const res = await fetch(`${API_BASE}/api/questions`);
    questionsData = await res.json();
    document.getElementById('total-questions').textContent = questionsData.length;
  } catch (e) {
    // Fallback: load from local JSON
    try {
      const res = await fetch('data/questions.json');
      const data = await res.json();
      questionsData = data.questions;
      document.getElementById('total-questions').textContent = questionsData.length;
    } catch (e2) {
      questionsData = [];
    }
  }
}

// ============================================
// QUIZ
// ============================================
function startQuiz(mode, categoryId) {
  if (!questionsData || questionsData.length === 0) {
    alert('Voprosy ne zagruzheny!');
    return;
  }

  let pool;
  if (mode === 'topic' && categoryId) {
    pool = questionsData.filter(q => q.category === categoryId);
  } else {
    pool = shuffle([...questionsData]).slice(0, 20);
  }

  if (pool.length === 0) {
    alert('Net voprosov v etoy kategorii!');
    return;
  }

  quizState = {
    questions: pool,
    current: 0,
    correct: 0,
    answered: false,
  };

  showQuizScreen();
}

function startExam() {
  if (!questionsData || questionsData.length === 0) {
    alert('Voprosy ne zagruzheny!');
    return;
  }

  const pool = shuffle([...questionsData]).slice(0, 40);
  quizState = {
    questions: pool,
    current: 0,
    correct: 0,
    answered: false,
    isExam: true,
  };

  showQuizScreen();
}

function showQuizScreen() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-quiz').style.display = 'block';
  document.getElementById('screen-quiz').classList.add('active');

  document.getElementById('quiz-total').textContent = quizState.questions.length;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quizState.questions[quizState.current];
  quizState.answered = false;

  document.getElementById('quiz-current').textContent = quizState.current + 1;
  document.getElementById('quiz-question-text').textContent = q.question;

  // Progress bar
  const pct = Math.round((quizState.current / quizState.questions.length) * 20);
  const filled = '|'.repeat(pct);
  const empty = '.'.repeat(20 - pct);
  document.getElementById('quiz-progress-bar').textContent = `[${filled}${empty}]`;

  // Next button
  document.getElementById('quiz-next-btn').textContent =
    quizState.current >= quizState.questions.length - 1 ? 'R E Z U L T A T' : 'D A L E E ->';

  // Hide explanation
  document.getElementById('quiz-explanation').style.display = 'none';
}

function selectQuizOption(index) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = quizState.questions[quizState.current];
  const isCorrect = q.correct_options.includes(index);

  if (isCorrect) {
    quizState.correct++;
  }

  // Show explanation
  if (q.explanation) {
    document.getElementById('quiz-explanation').style.display = 'block';
    document.getElementById('quiz-explanation-text').textContent = q.explanation;
  }

  // Haptic feedback
  if (window.Telegram?.WebApp?.HapticFeedback) {
    Telegram.WebApp.HapticFeedback.impactOccurred(isCorrect ? 'success' : 'error');
  }
}

function nextQuizQuestion() {
  quizState.current++;

  if (quizState.current >= quizState.questions.length) {
    showQuizResult();
  } else {
    renderQuizQuestion();
  }
}

function showQuizResult() {
  const total = quizState.questions.length;
  const correct = quizState.correct;
  const pct = Math.round((correct / total) * 100);

  let emoji, msg;
  if (pct >= 90) { emoji = '***'; msg = 'OTLICHNO!'; }
  else if (pct >= 70) { emoji = '**'; msg = 'HOROSHO!'; }
  else if (pct >= 50) { emoji = '*'; msg = 'MOZHNO LUCHE'; }
  else { emoji = ''; msg = 'NUZHNO POVTOrit''; }

  document.getElementById('quiz-question-text').textContent =
    `${emoji} ${msg} ${emoji}\n\nPravilnyh: ${correct}/${total}\nTochnost: ${pct}%`;

  document.getElementById('quiz-next-btn').textContent = 'G L A V N A Y A';
  document.getElementById('quiz-next-btn').onclick = () => {
    exitQuiz();
  };
}

function exitQuiz() {
  document.getElementById('screen-quiz').style.display = 'none';
  document.getElementById('screen-quiz').classList.remove('active');
  quizState = null;
  switchScreen('home');
}

// ============================================
// MINI GAME
// ============================================
let gameInterval = null;
let gameScore = 0;
let gameCombo = 0;
let gameTimer = 60;
let gameQuestions = [];
let gameCurrentQ = null;

function startMiniGame() {
  if (!questionsData || questionsData.length === 0) return;

  gameScore = 0;
  gameCombo = 0;
  gameTimer = 60;
  gameQuestions = shuffle([...questionsData]);

  document.getElementById('game-score-display').textContent = '0';
  document.getElementById('game-combo-display').textContent = 'x1';
  document.getElementById('game-timer-display').textContent = '60';

  loadGameQuestion();

  gameInterval = setInterval(() => {
    gameTimer--;
    document.getElementById('game-timer-display').textContent = gameTimer;

    if (gameTimer <= 0) {
      clearInterval(gameInterval);
      document.getElementById('game-question-text').textContent =
        `IGRA OKONCHENA!\nSchyot: ${gameScore}`;
    }
  }, 1000);
}

function loadGameQuestion() {
  if (gameQuestions.length === 0) {
    gameQuestions = shuffle([...questionsData]);
  }
  gameCurrentQ = gameQuestions.pop();
  document.getElementById('game-question-text').textContent = gameCurrentQ.question;
}

function answerGame(index) {
  if (!gameCurrentQ) return;

  const isCorrect = gameCurrentQ.correct_options.includes(index);

  if (isCorrect) {
    gameCombo++;
    gameScore += 10 + (Math.min(gameCombo, 10) * 5);
  } else {
    gameCombo = 0;
  }

  document.getElementById('game-score-display').textContent = gameScore;
  document.getElementById('game-combo-display').textContent = `x${Math.max(1, gameCombo)}`;

  loadGameQuestion();
}

// ============================================
// ADMIN
// ============================================
function showAdminTab(tab) {
  if (tab === 'questions') {
    document.getElementById('admin-form').style.display = 'block';
    populateAdminCategories();
  }
}

function populateAdminCategories() {
  const select = document.getElementById('admin-category');
  const categories = [
    { id: 'znaki', name: 'Znaki' },
    { id: 'razmetka', name: 'Razmetka' },
    { id: 'prioritet', name: 'Prioritet' },
    { id: 'skorost', name: 'Skorost' },
    { id: 'manevr', name: 'Manevr' },
    { id: 'ostanovka', name: 'Ostanovka' },
    { id: 'svetofor', name: 'Svetofory' },
    { id: 'peschodcy', name: 'Peshehody' },
    { id: 'dtp', name: 'DTP' },
    { id: 'osnovy', name: 'Osnovy PDD' },
  ];
  select.innerHTML = categories.map(c =>
    `<option value="${c.id}">${c.name}</option>`
  ).join('');
}

async function saveQuestion() {
  const category = document.getElementById('admin-category').value;
  const question = document.getElementById('admin-question').value.trim();
  const optA = document.getElementById('opt-a').value.trim();
  const optB = document.getElementById('opt-b').value.trim();
  const optC = document.getElementById('opt-c').value.trim();
  const optD = document.getElementById('opt-d').value.trim();
  const explanation = document.getElementById('admin-explanation').value.trim();

  if (!question || !optA || !optB) {
    alert('Zapolnite vse polya!');
    return;
  }

  const options = [optA, optB, optC, optD].filter(o => o);
  const correct_options = [];
  if (document.getElementById('correct-a').checked) correct_options.push(0);
  if (document.getElementById('correct-b').checked) correct_options.push(1);
  if (document.getElementById('correct-c').checked) correct_options.push(2);
  if (document.getElementById('correct-d').checked) correct_options.push(3);

  if (correct_options.length === 0) {
    alert('Otmette hotya by odin pravilnyy otvet!');
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/api/questions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify({ category, question, options, correct_options, explanation }),
    });

    if (res.ok) {
      alert('Vopros sohranen!');
      // Clear form
      document.getElementById('admin-question').value = '';
      document.getElementById('opt-a').value = '';
      document.getElementById('opt-b').value = '';
      document.getElementById('opt-c').value = '';
      document.getElementById('opt-d').value = '';
      document.getElementById('admin-explanation').value = '';
      document.querySelectorAll('#admin-form input[type="checkbox"]').forEach(c => c.checked = false);
    } else {
      alert('Oshibka sohraneniya');
    }
  } catch (e) {
    alert('Net svyazi s serverom');
  }
}

// ============================================
// HELPERS
// ============================================
function getAuthHeaders() {
  const initData = window.Telegram?.WebApp?.initData || '';
  return initData ? { 'Authorization': `tma ${initData}` } : {};
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
