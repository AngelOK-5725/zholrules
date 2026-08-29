# ZholRules - TODO / Roadmap

> Telegram Mini App для подготовки к экзамену по ПДД Казахстана
> Статус: **Рабочий MVP с авторизацией и админкой**

---

## Выполнено

### Деплой и Инфраструктура
- [x] GitHub Pages - фронтенд на angelok-5725.github.io/zholrules/
- [x] Render.com - бэкенд API на zholrules.onrender.com
- [x] GitHub Actions - автодеплой фронта при пуше в main
- [x] Cross-platform - iOS Safari + Android Chrome совместимость

### Бэкенд (server.py)
- [x] Flask + SQLAlchemy + Gunicorn
- [x] Telegram WebApp HMAC валидация (dec_lf_sig)
- [x] SQLite база (User, Stats, Questions, Errors, Categories)
- [x] Admin-проверка через OWNER_TELEGRAM_ID
- [x] CORS настроен для GitHub Pages
- [x] Инициализация БД при старте (gunicorn-совместимо)

### API Эндпоинты
- [x] GET /api/health - healthcheck
- [x] GET /api/user - профиль + admin check
- [x] PATCH /api/user - обновление профиля
- [x] GET /api/questions - список вопросов
- [x] POST /api/questions - создание вопроса (admin)
- [x] DELETE /api/questions/:id - удаление вопроса (admin)
- [x] POST /api/answer - отправка ответа
- [x] GET /api/errors - ошибки пользователя
- [x] GET/POST/PUT/DELETE /api/categories - CRUD категорий (admin)
- [x] GET /api/leaderboard - лидерборд мини-игры
- [x] POST /api/game-score - обновление рекорда

### Фронтенд
- [x] Telegram WebApp SDK интеграция
- [x] Splash-экран с анимацией
- [x] Onboarding (выбор цели, дата экзамена)
- [x] 4 режима тестирования (случайный, темы, экзамен, ошибки)
- [x] Мини-игра "Дорожный Спринт" (60 сек, комбо)
- [x] Профиль со статистикой и прогрессом
- [x] Тёмная/светлая тема
- [x] Админ-панель: вопросы, категории, экспорт JSON
- [x] Монетизация (UI для Telegram Stars)
- [x] Авторизация через Telegram initData

### База вопросов
- [x] 80 вопросов ПДД РК, 10 категорий
- [x] Разная сложность (easy/medium/hard)
- [x] Поддержка медиа (image/video)

### Тестирование
- [x] tests/test_auth.py - 13 тестов

---

## Текущие проблемы

### Критичные
- [ ] SQLite не сохраняется - Render free tier перезапускает контейнер
- [ ] Render засыпает - cold start ~30 сек после простоя
- [ ] Нет CSRF protection

### Важные
- [ ] Нет пагинации, поиска, сортировки
- [ ] Нет валидации форм и обработки ошибок на фронте

---

## План улучшений

### Фаза 1: Стабильность
- [ ] Neon PostgreSQL
- [ ] Rate limiting
- [ ] Error handling + Form validation

### Фаза 2: UX
- [ ] Поиск, пагинация, анимации, звуки, haptic, PDF

### Фаза 3: Контент
- [ ] Медиа (Cloudinary/S3), 200+ вопросов, видео, мультиязычность

### Фаза 4: Монетизация
- [ ] Telegram Payments, реклама, реферальная система

### Фаза 5: Масштабирование
- [ ] Лидерборд, аналитика, push, Docker, CI/CD

---

## Метрики

| Метрика | Значение |
|---------|----------|
| Вопросов | 80 |
| Категорий | 10 |
| API эндпоинтов | 14 |
| Тестов | 13 |

---

*Обновлено: 29 Августа 2026*
