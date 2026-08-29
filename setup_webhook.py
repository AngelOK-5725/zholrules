"""
Setup Telegram webhook for payment notifications.
Run once after deploying: python setup_webhook.py <webhook_url>
"""
import os
import sys
import requests
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN', '')
WEBHOOK_URL = sys.argv[1] if len(sys.argv) > 1 else ''

if not BOT_TOKEN:
    print('ERROR: TELEGRAM_BOT_TOKEN not set')
    sys.exit(1)

if not WEBHOOK_URL:
    print('Usage: python setup_webhook.py <webhook_url>')
    print('Example: python setup_webhook.py https://zholrules.onrender.com/webhook/telegram')
    sys.exit(1)

# Delete old webhook
print('Deleting old webhook...')
r = requests.post(f'https://api.telegram.org/bot{BOT_TOKEN}/deleteWebhook')
print(f'  deleteWebhook: {r.json().get("ok", False)}')

# Set new webhook
print(f'Setting webhook to: {WEBHOOK_URL}')
r = requests.post(f'https://api.telegram.org/bot{BOT_TOKEN}/setWebhook', json={
    'url': WEBHOOK_URL,
    'allowed_updates': ['message', 'pre_checkout_query'],
})
data = r.json()
if data.get('ok'):
    print(f'✅ Webhook set successfully!')
    print(f'   URL: {WEBHOOK_URL}')
    print(f'   Updates: message, pre_checkout_query')
else:
    print(f'❌ Failed: {data.get("description", "Unknown error")}')
    sys.exit(1)

# Verify
print('\nVerifying webhook...')
r = requests.get(f'https://api.telegram.org/bot{BOT_TOKEN}/getWebhookInfo')
info = r.json().get('result', {})
print(f'  URL: {info.get("url", "not set")}')
print(f'  Pending: {info.get("pending_update_count", 0)} updates')
if info.get('last_error_date'):
    print(f'  Last error: {info.get("last_error_message", "unknown")}')
else:
    print('  No errors')
