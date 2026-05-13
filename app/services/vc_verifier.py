"""Verifiable Credential verification stub."""

from typing import Any, Dict


class VCVerifier:
    def verify(self, credential: Dict[str, Any]) -> bool:
        required = ["@context", "type", "issuer", "credentialSubject"]
        return all(field in credential for field in required)
