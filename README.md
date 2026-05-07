# Agent Marketplace

A DID-first marketplace for discovering, publishing, verifying, purchasing, rating, and governing AI agents.

This repository is the foundation for an open, vendor-neutral Agent Marketplace that can interoperate with Agent DID, agent registries, A2A, ACP, ANP, MCP, OpenAPI, and enterprise identity providers.

> Repository note: the repository name is currently `agent-regitsry`. Consider renaming it to `agent-marketplace` or `agent-registry-marketplace` before public launch.

## Vision

The Agent Marketplace lets organizations and developers publish trusted AI agents with verifiable identity, clear capabilities, pricing, usage policies, lifecycle controls, reviews, and enterprise governance.

It is not only a listing directory. It is a trust, discovery, transaction, and lifecycle layer for agents.

## Core marketplace capabilities

### Publisher capabilities

- Create publisher profile
- Verify publisher identity
- Register agent listing
- Attach DID and verification methods
- Declare capabilities, protocols, APIs, tools, datasets, and supported models
- Publish versions and changelogs
- Submit listing for review
- Configure pricing plans
- Configure usage limits
- Configure legal, privacy, and support metadata
- Manage lifecycle: draft, review, active, suspended, deprecated, delisted
- View analytics and usage reports

### Buyer / user capabilities

- Search agents
- Filter by capability, category, protocol, price, trust level, publisher, region, compliance profile, and deployment model
- View agent detail pages
- Compare agents
- Test agent in sandbox
- Subscribe or purchase
- Manage installed agents
- Rate and review agents
- Report abuse or security issues

### Platform capabilities

- DID-backed agent identity
- Publisher verification
- Agent verification and attestation
- Marketplace approval workflow
- Security review workflow
- Trust score calculation
- Capability taxonomy
- Discovery API
- Subscription and entitlement model
- Audit logging
- Lifecycle governance
- Admin moderation
- Fraud and abuse reporting
- API key / bearer authentication
- Tenant isolation
- Production deployment foundation

## Product modules

1. Identity and trust
2. Agent registry
3. Marketplace listings
4. Search and discovery
5. Subscriptions and entitlements
6. Reviews and ratings
7. Publisher console
8. Buyer console
9. Admin moderation
10. Billing integration layer
11. Audit and compliance
12. Lifecycle management
13. Sandbox / test drive
14. Analytics

## Suggested technology stack

Backend:

- Python
- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- Redis for rate limiting, cache, background jobs
- Pydantic
- Pytest

Frontend:

- Next.js or React
- Tailwind CSS
- API-first admin and marketplace UI

Infrastructure:

- Docker
- Docker Compose
- GitHub Actions
- OpenTelemetry-compatible logs and traces

## Minimum API surface

Public:

- `GET /health`
- `GET /.well-known/agent-marketplace`
- `GET /v1/public/listings`
- `GET /v1/public/listings/{listing_id}`
- `GET /v1/public/agents/{agent_id}`
- `GET /v1/public/publishers/{publisher_id}`
- `GET /v1/discovery/search`
- `GET /v1/discovery/categories`
- `GET /v1/discovery/capabilities`

Authenticated:

- `POST /v1/bootstrap`
- `POST /v1/api-keys`
- `GET /v1/api-keys`
- `POST /v1/api-keys/{api_key_id}/revoke`
- `POST /v1/publishers`
- `GET /v1/publishers/me`
- `PATCH /v1/publishers/{publisher_id}`
- `POST /v1/agents`
- `GET /v1/agents`
- `GET /v1/agents/{agent_id}`
- `PATCH /v1/agents/{agent_id}`
- `POST /v1/listings`
- `GET /v1/listings`
- `GET /v1/listings/{listing_id}`
- `PATCH /v1/listings/{listing_id}`
- `POST /v1/listings/{listing_id}/submit-review`
- `POST /v1/listings/{listing_id}/publish`
- `POST /v1/listings/{listing_id}/suspend`
- `POST /v1/listings/{listing_id}/delist`
- `POST /v1/listings/{listing_id}/subscribe`
- `GET /v1/subscriptions`
- `POST /v1/reviews`
- `GET /v1/audit-events`

Admin:

- `GET /v1/admin/review-queue`
- `POST /v1/admin/listings/{listing_id}/approve`
- `POST /v1/admin/listings/{listing_id}/reject`
- `POST /v1/admin/listings/{listing_id}/quarantine`
- `GET /v1/admin/abuse-reports`
- `POST /v1/admin/abuse-reports/{report_id}/resolve`

## Marketplace listing model

A listing should include:

- listing_id
- agent_id
- publisher_id
- name
- short_description
- long_description
- categories
- tags
- capabilities
- screenshots
- demo_url
- documentation_url
- support_url
- privacy_url
- terms_url
- pricing_plans
- deployment_options
- protocols
- authentication_methods
- data_access_profile
- compliance_profile
- trust_score
- verification_status
- lifecycle_state
- published_at
- updated_at

## Agent model

Agents should include:

- agent_id
- DID
- DID document URL
- verification methods
- publisher
- owner
- sponsor
- version
- endpoints
- protocol bindings
- capabilities
- required permissions
- data access profile
- risk profile
- compliance profile
- lifecycle state
- verification status
- audit metadata

## Lifecycle states

Listings:

- draft
- pending_review
- changes_requested
- approved
- published
- suspended
- quarantined
- deprecated
- delisted
- archived
- deleted

Agents:

- draft
- pending_review
- approved
- active
- suspended
- quarantined
- deprecated
- pending_rotation
- pending_renewal
- deprovisioning
- deprovisioned
- archived
- deleted

Every lifecycle transition must be validated and audited.

## Security principles

- No default production secrets
- No raw secret storage
- API keys must be hashed
- Tenant isolation must be tested
- Publisher and listing changes must be audited
- Marketplace moderation actions must be audited
- Production OIDC/SAML must validate tokens and signed assertions
- Rate limiting must be distributed for production
- Agent verification must be repeatable and evidence-backed

## Repository structure

```text
app/                         Backend service
app/api/                     FastAPI routers
app/core/                    Config, security, auth, rate limiting
app/models/                  SQLAlchemy models
app/schemas/                 Pydantic schemas
app/services/                Business logic
app/workers/                 Background jobs
frontend/                    Marketplace UI, optional
schemas/json/                JSON Schemas
examples/                    Example agents, listings, subscriptions
docs/                        Architecture, API, marketplace, security docs
tests/                       Automated tests
alembic/                     Database migrations
.github/workflows/           CI/CD
```

## Current status

Initial marketplace foundation. Build backend, schemas, tests, CI/CD, and docs before production use.

## Production-readiness target

The project is production-ready only when:

- app starts cleanly
- tests pass
- Docker build passes
- Docker Compose runs locally
- migrations are versioned
- secrets are production-safe
- lifecycle transitions are enforced
- audit events are immutable
- tenant isolation is tested
- listing review workflow works
- publisher verification works
- discovery/search works
- entitlement/subscription checks work
- security docs and license are present
