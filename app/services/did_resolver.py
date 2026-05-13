"""DID resolution service stub."""

from typing import Any, Dict


class DIDResolver:
    def resolve(self, did: str) -> Dict[str, Any]:
        if not did.startswith("did:"):
            raise ValueError("Invalid DID")
        return {"id": did, "verificationMethod": []}
