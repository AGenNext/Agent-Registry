from __future__ import annotations

from datetime import datetime
from typing import Any

from pydantic import BaseModel, Field


class BootstrapRequest(BaseModel):
    organization_name: str
    organization_slug: str
    api_key_label: str = "admin"


class BootstrapResponse(BaseModel):
    organization_id: str
    organization_slug: str
    api_key: str


class ApiKeyCreateRequest(BaseModel):
    label: str
    role: str = "reader"


class ApiKeyCreateResponse(BaseModel):
    id: str
    label: str
    role: str
    api_key: str
    key_prefix: str
    last_four: str
    created_at: datetime


class ApiKeySummary(BaseModel):
    id: str
    label: str
    role: str
    key_prefix: str
    last_four: str
    is_active: bool
    created_at: datetime
    revoked_at: datetime | None = None


class OrganizationResponse(BaseModel):
    id: str
    name: str
    slug: str
    created_at: datetime


class PublisherWrite(BaseModel):
    name: str
    display_name: str
    website_url: str | None = None
    support_url: str | None = None
    metadata: dict[str, Any] = Field(default_factory=dict)


class PublisherResponse(PublisherWrite):
    id: str
    organization_id: str
    verification_status: str
    created_at: datetime
    updated_at: datetime


class AgentWrite(BaseModel):
    publisher_id: str
    did: str
    name: str
    version: str = "0.1.0"
    environment: str = "development"
    capabilities: list[str] = Field(default_factory=list)
    protocols: list[str] = Field(default_factory=list)
    endpoints: list[dict[str, Any]] = Field(default_factory=list)
    metadata: dict[str, Any] = Field(default_factory=dict)


class AgentResponse(AgentWrite):
    id: str
    organization_id: str
    lifecycle_state: str
    verification_status: str
    created_at: datetime
    updated_at: datetime


class ListingWrite(BaseModel):
    publisher_id: str
    agent_id: str
    name: str
    short_description: str
    long_description: str = ""
    categories: list[str] = Field(default_factory=list)
    tags: list[str] = Field(default_factory=list)
    capabilities: list[str] = Field(default_factory=list)
    protocols: list[str] = Field(default_factory=list)
    pricing_plans: list[dict[str, Any]] = Field(default_factory=list)
    metadata: dict[str, Any] = Field(default_factory=dict)


class ListingResponse(ListingWrite):
    id: str
    organization_id: str
    lifecycle_state: str
    verification_status: str
    trust_score: int
    published_at: datetime | None = None
    created_at: datetime
    updated_at: datetime


class LifecycleRequest(BaseModel):
    reason: str
    dry_run: bool = False
    force: bool = False


class LifecycleResponse(BaseModel):
    subject_type: str
    subject_id: str
    previous_state: str
    new_state: str
    dry_run: bool


class SubscriptionCreateRequest(BaseModel):
    listing_id: str
    plan_id: str
    subscriber_label: str = "self"


class SubscriptionResponse(BaseModel):
    id: str
    organization_id: str
    listing_id: str
    subscriber_label: str
    plan_id: str
    status: str
    created_at: datetime
    cancelled_at: datetime | None = None


class EntitlementCheckRequest(BaseModel):
    listing_id: str
    subscriber_label: str = "self"
    action: str = "invoke"


class EntitlementCheckResponse(BaseModel):
    allowed: bool
    listing_id: str
    subscriber_label: str
    reason: str


class ReviewCreateRequest(BaseModel):
    listing_id: str
    rating: int = Field(ge=1, le=5)
    title: str
    body: str = ""


class ReviewResponse(BaseModel):
    id: str
    organization_id: str
    listing_id: str
    reviewer_label: str
    rating: int
    title: str
    body: str
    status: str
    created_at: datetime


class AuditEventResponse(BaseModel):
    id: str
    organization_id: str | None
    actor_label: str
    event_type: str
    subject_type: str
    subject_id: str | None
    previous_state: str | None
    new_state: str | None
    reason: str | None
    metadata: dict[str, Any]
    created_at: datetime


class ServiceInfoResponse(BaseModel):
    service: str
    version: str
    status: str
