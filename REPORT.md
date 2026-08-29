# ZholRules - Отчёт о состоянии системы

**Дата:** 29 августа 2026
**Проект:** Telegram Mini App для подготовки к экзамену по ПДД Казахстана

---

## 1. Текущее состояние

### Общая оценка: 8.5/10 (Рабочий MVP с монетизацией)

Приложение полностью функционально: авторизация через Telegram работает, база данных Neon PostgreSQL подключена, подписка Pro с оплатой через Telegram Stars настроена, админ-панель с вопросами и категориями работает, двуязычный интерфейс (RU/KZ).

### Что работает

| Компонент | Статус | Примечание |
|-----------|--------|------------|
| Фронтенд (GitHub Pages) | Работает | Автодеплой при пуше |
| Бэкенд (Render.com) | Работает | API отвечает |
| Telegram Auth | Работает | HMAC валидация (dec_lf_sig) |
| Admin Panel | Работает | Вопросы + категории CRUD |
| Тестирование | Работает | 4 режима, 80 вопросов |
| Мини-игра | Работает | 60 сек, комбо-система |
| Профиль/Статистика | Работает | Стрик, прогресс по категориям |
| **Neon PostgreSQL** | Работает | Данные сохраняются |
| **Subscription** | Работает | Free (10 ошибок) / Pro (безлимит) |
| **Telegram Stars** | Работает | Invoice + webhook |
| **Keepalive** | Работает | GitHub Actions cron каждые 10 мин |
| **Двуязычность** | Работает | Русский + Қазақша |
| **Dark Mode** | Работает | Настоящий #121212 |
| **CORS** | Заблокирован | Только angelok-5725.github.io |
| **Обработка ошибок** | Работает | 401/403/404/500 сообщения |

### Что НЕ работает / Нужно доделать

| Проблема | Серьёзность | Описание |
|----------|-------------|----------|
| Webhook не настроен | ВАЖНО | Нужно выполнить setup_webhook.py |
| Render cold start | СРЕДНЕ | ~30 сек простоя (keepalive частично решает) |
| Нет rate limiting | НИЗКО | API не защищён от спама |
| Нет пагинации | НИЗКО | 80 вопросов грузятся все сразу |

---

## 2. Архитектура

```
[Telegram Mini App (Telegram-Android/IOS)]
       |
       | initData (HMAC-SHA256)
       v
[GitHub Pages]  ──CORS──>  [Render.com / Flask API]
  (фронтенд)                 (server.py + Gunicorn)
       |                         |
       |                         v
       |                   [Neon PostgreSQL]
       |                   (persistent!)
       |
       | Telegram Stars
       v
[Telegram Bot API]
       |
       | webhook /webhook/telegram
       v
[Render.com] ──> activates subscription
```

### Стек технологий

| Слой | Технология |
|------|-----------|
| Фронтенд | HTML5, CSS3 (Telegram WebApp vars), Vanilla JS |
| Бэкенд | Python 3.14, Flask, SQLAlchemy, Gunicorn |
| База данных | Neon PostgreSQL (free tier, 512 MB) |
| Деплой фронта | GitHub Pages + GitHub Actions |
| Деплой бэкенда | Render.com (Free tier) |
| Авторизация | Telegram WebApp HMAC-SHA256 |
| Оплаты | Telegram Stars (1500 Stars / мес) |
| Переводы | Встроенные (RU/KZ) |

### Структура файлов

```
zholrules/
  index.html              - Основной HTML (~500 строк)
  style.css               - Стили (~1700 строк)
  app.js                  - Фронтенд логика (~1700 строк)
  server.py               - Бэкенд API (~1100 строк)
  setup_webhook.py        - Скрипт настройки webhook
  data/questions.json      - 80 вопросов ПДД РК
  tests/test_auth.py       - 13 тестов
  requirements.txt         - Python зависимости
  .env                     - Секреты (gitignored)
  .github/workflows/
    deploy.yml             - Автодеплой фронта
    keepalive.yml          - Пинг Render каждые 10 мин
  retro/                   - Ретро ASCII-версия (эксперимент)
```

---

## 3. API Эндпоинты

| Метод | Путь | Описание | Auth |
|-------|------|----------|------|
| GET | /api/health | Healthcheck | Нет |
| GET | /api/user | Профиль + stats + subscription | Да |
| PATCH | /api/user | Обновление профиля | Да |
| GET | /api/questions | Список вопросов | Нет |
| POST | /api/questions | Создание вопроса | Admin |
| DELETE | /api/questions/:id | Удаление вопроса | Admin |
| GET | /api/questions/export | Экспорт JSON | Нет |
| POST | /api/questions/import | Импорт JSON | Admin |
| POST | /api/answer | Отправка ответа | Да |
| GET | /api/errors | Ошибки пользователя | Да |
| DELETE | /api/errors/:id | Удаление из ошибок | Да |
| GET | /api/categories | Список категорий | Нет |
| POST | /api/categories | Создание категории | Admin |
| PUT | /api/categories/:id | Обновление категории | Admin |
| DELETE | /api/categories/:id | Удаление категории | Admin |
| GET | /api/leaderboard | Лидерборд | Нет |
| POST | /api/game-score | Обновление рекорда | Да |
| GET | /api/subscription | Инфо о подписке | Да |
| POST | /api/subscription/activate | Активация Pro | Да |
| POST | /api/payment/invoice | Создание invoice для Stars | Да |
| POST | /webhook/telegram | Telegram webhook (оплата) | Нет |
| POST | /api/webhook/setup | Настройка webhook URL | Нет |

---

## 4. Подписка и монетизация

### Модель

| План | Стоимость | Ошибки | Тесты | Симулятор ЦОН |
|------|-----------|--------|-------|---------------|
| **Free** | 0 ₸ | 10 макс. | Без ограничений | Нет |
| **Pro** | 1500 Stars/мес (~13 860 ₸) | Безлимит | Без ограничений | Да |

### Flow оплаты

```
1. Пользователь нажимает "Купить Pro"
2. Фронтенд → POST /api/payment/invoice
3. Бэкенд → createInvoiceLink (Bot API)
4. Telegram открывает окно оплаты
5. Пользователь платит 1500 Stars
6. Telegram → POST /webhook/telegram (pre_checkout)
7. Бэкенд → answerPreCheckoutQuery(ok=True)
8. Telegram → POST /webhook/telegram (successful_payment)
9. Бэкенд → активирует подписку на 30 дней
10. Пользователь получает подтверждение в чат
```

### Настройка webhook

```bash
# Один раз после деплоя:
python setup_webhook.py https://zholrules.onrender.com/webhook/telegram
```

---

## 5. Безопасность

### Защищено

- Telegram WebApp HMAC валидация (dec_lf_sig, включая signature)
- Admin-проверка на сервере (OWNER_TELEGRAM_ID из .env)
- CORS заблокирован на angelok-5725.github.io
- Секреты в .env (gitignored)
- Подпись webhook от Telegram (HMAC)
- 24-часовое окно auth_date (не 5 мин)

### Нужно усилить

- Rate limiting на API эндпоинты
- CSRF token для форм
- Валидация длинны полей на сервере
- Логирование подозрительной активности

---

## 6. Рекомендации по улучшению

### Приоритет 1: Стабильность
1. **Настроить webhook** — выполнить setup_webhook.py
2. **Rate limiting** — flask-limiter для защиты API
3. **Мониторинг** — Sentry или аналог для ошибок

### Приоритет 2: UX
1. **Пагинация вопросов** — не грузить все 80+ сразу
2. **Поиск по вопросам** — фильтрация по тексту
3. **Push-уведомления** — напоминания о тренировках
4. **Оффлайн режим** — Service Worker для работы без интернета

### Приоритет 3: Контент
1. **Расширить базу вопросов** — до 200+ с медиа
2. **Видео-разборы** — встраивание YouTube
3. **Симулятор ЦОНа** — VIP-фича для Pro
4. **Геймификация** — достижения, уровни, награды

### Приоритет 4: Масштабирование
1. **Neon PostgreSQL** — уже подключена, масштабировать при росте
2. **CDN** — Cloudflare для статики
3. **Кэширование** — Redis для leaderboard
4. **Аналитика** — Telegram Mini Apps Analytics

---

## 7. Метрики проекта

| Метрика | Значение |
|---------|----------|
| Вопросов в базе | 80 |
| Категорий | 10 |
| API эндпоинтов | 22 |
| Тестов | 13 |
| Файлов в проекте | ~18 |
| Строк кода (approx) | ~5000 |
| Языки интерфейса | 2 (RU, KZ) |
| Стоимость подписки | 1500 Stars/мес |
| Деплой | GitHub Pages + Render.com |
| База данных | Neon PostgreSQL |

---

*Отчёт обновлён: 29 августа 2026*
