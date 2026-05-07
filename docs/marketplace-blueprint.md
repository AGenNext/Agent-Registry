# Agent Marketplace Blueprint

## 1. Product scope

The Agent Marketplace is a trusted marketplace for AI agents. It combines:

- agent registry
- agent identity
- publisher verification
- marketplace listings
- search and discovery
- subscription and entitlement management
- reviews and ratings
- security review
- lifecycle governance
- audit and compliance

The marketplace should support both public SaaS distribution and private enterprise marketplaces.

## 2. Core actors

### Marketplace operator

Runs the marketplace, defines categories, reviews listings, manages abuse reports, and enforces trust and safety rules.

### Publisher

Creates and owns agent listings. A publisher may be an individual developer, company, team, or verified organization.

### Buyer / subscriber

Discovers, tests, subscribes to, deploys, and reviews agents.

### Enterprise admin

Approves agent usage inside an organization, manages entitlements, applies policies, and reviews audit logs.

### Agent

The AI agent being listed, discovered, invoked, installed, or governed.

## 3. Main domains

### Organizations

Tenant boundary for users, publishers, subscriptions, entitlements, policies, and audit events.

### Users

Human users who act as admins, publishers, reviewers, buyers, or auditors.

### Publishers

Verified entities allowed to publish agents.

### Agents

Technical identity and runtime metadata for AI agents.

### Listings

Marketplace-facing product pages for agents.

### Plans

Pricing, billing, usage, limits, and commercial terms.

### Subscriptions

A buyer or tenant's active access to a listing or plan.

### Entitlements

Fine-grained rights generated from subscriptions.

### Reviews

User ratings and written reviews.

### Verification events

Evidence that an agent or publisher passed identity, security, or policy checks.

### Lifecycle events

State transitions for agents, listings, publishers, plans, and subscriptions.

### Audit events

Immutable activity records for security and compliance.

## 4. Marketplace feature map

### Identity and access

- tenant bootstrap
- API key authentication
- optional user login
- RBAC roles
- organization isolation
- publisher identity
- agent DID identity
- verification methods
- session expiration
- key revocation

### Publisher onboarding

- create publisher profile
- verify domain
- verify DID
- upload legal metadata
- configure support contacts
- accept marketplace terms
- publisher status lifecycle

### Agent onboarding

- register agent technical metadata
- attach DID
- attach endpoints
- attach protocol bindings
- declare capabilities
- declare permissions
- declare data access profile
- declare deployment model
- run verification checks

### Listing management

- create draft listing
- attach agent
- add categories and tags
- add documentation
- add screenshots/demo links
- add pricing plans
- submit for review
- publish
- suspend
- delist
- deprecate
- archive

### Discovery

- keyword search
- category search
- capability filter
- protocol filter
- trust level filter
- price filter
- publisher filter
- deployment model filter
- compliance filter
- sort by rating, installs, recency, trust score

### Trust and verification

- publisher verification
- DID validation
- endpoint validation
- capability declaration review
- security review evidence
- compliance profile review
- trust score
- revocation and expiry

### Purchase and entitlement

- free plan
- paid subscription plan
- trial plan
- enterprise approval-required plan
- usage limits
- plan features
- subscription lifecycle
- entitlement calculation
- entitlement check API

### Reviews and reputation

- rating
- written review
- verified subscriber badge
- abuse reporting
- publisher response
- moderation status
- aggregate rating

### Admin moderation

- review queue
- approve listing
- reject listing
- request changes
- suspend listing
- quarantine agent
- resolve abuse report
- audit moderation actions

### Analytics

- listing views
- installs/subscriptions
- active subscribers
- failed entitlement checks
- conversion funnel
- review score
- trust score trend

## 5. Required backend modules

```text
app/api/
  health.py
  bootstrap.py
  auth.py
  organizations.py
  publishers.py
  agents.py
  listings.py
  discovery.py
  subscriptions.py
  entitlements.py
  reviews.py
  moderation.py
  audit.py

app/core/
  config.py
  database.py
  security.py
  authz.py
  rate_limit.py
  logging.py

app/models/
  organization.py
  user.py
  api_key.py
  publisher.py
  agent.py
  listing.py
  plan.py
  subscription.py
  entitlement.py
  review.py
  verification.py
  lifecycle.py
  audit.py

app/schemas/
  publisher.py
  agent.py
  listing.py
  plan.py
  subscription.py
  review.py
  audit.py

app/services/
  publisher_service.py
  agent_service.py
  listing_service.py
  discovery_service.py
  verification_service.py
  subscription_service.py
  entitlement_service.py
  review_service.py
  moderation_service.py
  audit_service.py
```

## 6. Database tables

Minimum tables:

- organizations
- users
- api_keys
- publishers
- publisher_verifications
- agents
- agent_endpoints
- agent_capabilities
- agent_protocol_bindings
- agent_verification_events
- marketplace_listings
- listing_media
- listing_categories
- listing_versions
- pricing_plans
- subscriptions
- entitlements
- entitlement_checks
- reviews
- review_reports
- abuse_reports
- lifecycle_events
- audit_events

## 7. Listing lifecycle

Allowed listing states:

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

Required rules:

- Only publishers can edit their draft listings.
- Published listings require approval.
- Suspended listings cannot accept new subscriptions.
- Quarantined listings are hidden from public search.
- Delisted listings remain visible to existing subscribers only if policy allows.
- Deleted listings must retain audit history.

## 8. Agent lifecycle

Allowed agent states:

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

Required rules:

- Active agents must have a valid DID.
- Production agents must have owner and sponsor metadata.
- Production agents must have privacy, terms, and support URLs.
- Quarantined agents cannot be newly subscribed to.
- Deprovisioned agents cannot be invoked through marketplace entitlement flows.

## 9. Trust score inputs

Trust score should consider:

- publisher verification status
- DID verification status
- endpoint verification status
- security review status
- compliance metadata completeness
- lifecycle health
- incident history
- abuse reports
- review quality
- update recency

Trust scores should be explainable and auditable.

## 10. Production hardening checklist

- no default production secrets
- secret encryption at rest
- API key hashing
- database migrations
- tenant isolation tests
- structured logs
- request IDs
- distributed rate limiting
- background workers
- webhook retries
- audit immutability
- dependency scanning
- container non-root user
- health and readiness checks
- backup/restore documentation
- incident response documentation

## 11. First MVP milestone

MVP should include:

- organization bootstrap
- API key authentication
- publisher creation
- agent registration
- listing creation
- listing search
- listing detail
- submit listing for review
- approve/reject listing
- publish listing
- subscription creation
- entitlement check
- review creation
- audit events
- Docker Compose
- tests
- CI

## 12. Definition of done

The marketplace foundation is complete when:

- backend starts locally
- Docker Compose runs
- database migrations apply
- OpenAPI docs work
- tests pass
- schemas validate examples
- auth protects private routes
- tenant isolation is tested
- lifecycle transitions are enforced
- audit events are written
- README explains setup and usage
- production-readiness report exists
