import os
os.environ['DATABASE_URL'] = 'sqlite:///zholrules_local.db'
os.environ['TELEGRAM_BOT_TOKEN'] = ''  # Dev mode: skip Telegram auth
os.environ['OWNER_TELEGRAM_ID'] = '12345678'  # Dev user = admin

from server import app, socketio

if __name__ == '__main__':
    print('ZholRules running on http://localhost:5000')
    socketio.run(app, host='0.0.0.0', port=5000, debug=True, allow_unsafe_werkzeug=True)
