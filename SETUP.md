# Полная настройка и синхронизация бота с приложением

## Шаг 1: Подготовка бота
1. Создай бота в **@BotFather**
2. Получи **BOT_TOKEN**
3. Получи свой **ADMIN_ID** у @userinfobot

## Шаг 2: Настрой bot.py
Открой `bot.py` и измени эти строки:
```python
BOT_TOKEN = 'ТВОЙ_ТОКЕН_ОТ_BOTFATHER'
ADMIN_ID = 123456789  # Твой ID
```

## Шаг 3: Установка и запуск бота
```bash
cd "c:\Users\xrash\Documents\trae_projects\esp"
pip install -r requirements.txt
python bot.py
```

## Шаг 4: Разверни приложение
Разверни `index.html`, `styles.css`, `app.js` на хостинге с HTTPS (например, Vercel/Netlify)

## Шаг 5: Подключи Web App к боту
1. Напиши @BotFather
2. `/mybots` → выбери бот
3. **Bot Settings** → **Menu Button** → **Configure menu button**
4. Введи URL твоего приложения
5. Готово!

## Как работает синхронизация:
- Балансы хранятся в `balances.json`
- При покупке звёзд через приложение бот создаёт Invoice (Telegram Stars)
- После успешной оплаты баланс автоматически обновляется
- Заявки на вывод подарков отправляются администартору
