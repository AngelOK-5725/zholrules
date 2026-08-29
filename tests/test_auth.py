"""
ZholRules — Auth & Admin Debug Tests
Запуск: python -m pytest tests/test_auth.py -v
"""
import os
import sys
import json
import time
import hmac
import hashlib

# Add parent dir to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from server import app, validate_telegram_webapp, db, User


def make_fake_init_data(user_id: int, bot_token: str) -> str:
    """Create a valid Telegram WebApp initData for testing."""
    auth_date = str(int(time.time()))
    user_data = json.dumps({
        "id": user_id,
        "first_name": "TestUser",
        "username": "testuser",
        "is_premium": True,
    })

    # Build data check string
    data = {
        "auth_date": auth_date,
        "user": user_data,
    }
    data_check_string = "\n".join(f"{k}={v}" for k, v in sorted(data.items()))

    # HMAC
    secret_key = hmac.new(b"WebAppData", bot_token.encode(), hashlib.sha256).digest()
    hash_val = hmac.new(secret_key, data_check_string.encode(), hashlib.sha256).hexdigest()

    data["hash"] = hash_val
    return "&".join(f"{k}={v}" for k, v in data.items())


class TestValidateInitData:
    """Test Telegram initData validation."""

    def test_valid_init_data(self):
        token = "test-bot-token-12345"
        user_id = 1323250813
        init_data = make_fake_init_data(user_id, token)

        result = validate_telegram_webapp(init_data, token)
        assert result is not None
        assert result["id"] == user_id
        assert result["first_name"] == "TestUser"
        print(f"  PASS: Valid initData -> user_id={result['id']}")

    def test_wrong_token(self):
        token = "test-bot-token-12345"
        wrong_token = "wrong-token-99999"
        init_data = make_fake_init_data(123, token)

        result = validate_telegram_webapp(init_data, wrong_token)
        assert result is None
        print("  PASS: Wrong token -> None")

    def test_tampered_user_id(self):
        token = "test-bot-token-12345"
        init_data = make_fake_init_data(123, token)

        # Tamper: change user id in the data
        parts = init_data.split("&")
        tampered = "&".join(parts[:-1]) + "&hash=" + parts[-1].split("=")[1]
        result = validate_telegram_webapp(tampered, token)
        assert result is None
        print("  PASS: Tampered data -> None")

    def test_empty_init_data(self):
        result = validate_telegram_webapp("", "token")
        assert result is None
        print("  PASS: Empty initData -> None")

    def test_expired_auth_date(self):
        token = "test-bot-token-12345"
        auth_date = str(int(time.time()) - 200000)  # 2+ days ago
        user_data = json.dumps({"id": 999, "first_name": "Old"})
        data = {"auth_date": auth_date, "user": user_data}
        data_check_string = "\n".join(f"{k}={v}" for k, v in sorted(data.items()))
        secret_key = hmac.new(b"WebAppData", token.encode(), hashlib.sha256).digest()
        hash_val = hmac.new(secret_key, data_check_string.encode(), hashlib.sha256).hexdigest()
        data["hash"] = hash_val
        init_data = "&".join(f"{k}={v}" for k, v in data.items())

        result = validate_telegram_webapp(init_data, token)
        assert result is None
        print("  PASS: Expired auth_date -> None")


class TestAdminCheck:
    """Test admin ID comparison logic."""

    def test_admin_comparison_types(self):
        """Check if tg_id and OWNER_TELEGRAM_ID types match."""
        owner_id_str = "1323250813"
        tg_id_from_telegram = 1323250813  # Telegram sends int

        owner_id_int = int(owner_id_str)
        assert tg_id_from_telegram == owner_id_int, \
            f"Type mismatch: {type(tg_id_from_telegram)} vs {type(owner_id_int)}"
        print(f"  PASS: int({tg_id_from_telegram}) == int({owner_id_str})")

    def test_admin_comparison_wrong_id(self):
        owner_id = int("1323250813")
        wrong_id = 999999999
        assert wrong_id != owner_id
        print(f"  PASS: wrong_id({wrong_id}) != owner_id({owner_id})")


class TestAPIFlask:
    """Test Flask API endpoints."""

    def setup_method(self):
        app.config["TESTING"] = True
        app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory:"
        self.client = app.test_client()
        with app.app_context():
            db.create_all()

    def test_health(self):
        resp = self.client.get("/api/health")
        assert resp.status_code == 200
        data = resp.get_json()
        assert data["status"] == "ok"
        print("  PASS: /api/health -> 200")

    def test_user_no_auth(self):
        resp = self.client.get("/api/user")
        assert resp.status_code == 401
        print("  PASS: /api/user without auth -> 401")

    def test_user_with_fake_auth(self):
        """Without bot token, dev mode should work."""
        # Temporarily remove bot token
        old_token = os.environ.pop("TELEGRAM_BOT_TOKEN", None)
        try:
            resp = self.client.get("/api/user")
            # Should work in dev mode (no bot token = dev mode)
            print(f"  INFO: /api/user without BOT_TOKEN -> {resp.status_code}")
            if resp.status_code == 200:
                data = resp.get_json()
                print(f"  INFO: user={data.get('user', {}).get('tg_id')}")
        finally:
            if old_token:
                os.environ["TELEGRAM_BOT_TOKEN"] = old_token

    def test_questions(self):
        resp = self.client.get("/api/questions")
        assert resp.status_code == 200
        data = resp.get_json()
        print(f"  PASS: /api/questions -> {len(data)} questions")


class TestFrontendAPIConfig:
    """Test that frontend correctly points to backend."""

    def test_api_base_in_app_js(self):
        app_js_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            "app.js"
        )
        with open(app_js_path, "r", encoding="utf-8") as f:
            content = f.read()

        assert "zholrules.onrender.com" in content, "API_BASE missing Render URL"
        print("  PASS: app.js has correct API_BASE")

        assert "getAuthHeaders" in content, "getAuthHeaders function missing"
        print("  PASS: app.js has getAuthHeaders()")

        assert "Authorization" in content, "Authorization header missing"
        print("  PASS: app.js sends Authorization header")

        assert "tma" in content, "tma prefix missing"
        print("  PASS: app.js uses 'tma' prefix")

    def test_owner_id_not_in_frontend(self):
        """OWNER_TELEGRAM_ID should NOT be hardcoded in frontend JS."""
        app_js_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            "app.js"
        )
        with open(app_js_path, "r", encoding="utf-8") as f:
            content = f.read()

        assert "1323250813" not in content, \
            "SECURITY: OWNER_TELEGRAM_ID hardcoded in app.js!"
        print("  PASS: No hardcoded OWNER_ID in frontend")


if __name__ == "__main__":
    import pytest
    pytest.main([__file__, "-v", "-s"])
