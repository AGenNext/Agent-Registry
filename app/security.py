from __future__ import annotations

import hashlib
import hmac
import secrets

from app.config import settings


def generate_api_key() -> str:
    return f"amk_{secrets.token_urlsafe(32)}"


def hash_api_key(raw_key: str) -> str:
    return hmac.new(settings.api_key_pepper.encode("utf-8"), raw_key.encode("utf-8"), hashlib.sha256).hexdigest()


def constant_time_equal(left: str, right: str) -> bool:
    return hmac.compare_digest(left, right)
