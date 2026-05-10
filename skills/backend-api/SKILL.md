---
name: backend-api
description: Use when designing, implementing, reviewing, or documenting backend services, HTTP APIs, handlers, validation, persistence, errors, auth boundaries, observability, and Go server behavior.
metadata:
  short-description: Build simple, explicit backend APIs and services.
---

# Backend API

## Mission

Design backend behavior that is explicit, testable, secure, and boring to operate. Prefer the standard library and existing project conventions before adding dependencies.

## Workflow

1. Define the public contract: route, method, auth, request, response, status codes.
2. Validate input at the boundary.
3. Keep handlers thin and business rules testable.
4. Make errors clear without leaking sensitive internals.
5. Add observability appropriate to the risk.

## API Standards

- Use consistent JSON shapes.
- Distinguish validation, unauthorized, forbidden, not-found, conflict, and internal errors.
- Avoid exposing persistence models directly when fields or privacy matter.
- Make idempotency explicit for retryable writes.
- Use pagination only when data size or workflow requires it.

## Go Standards

- Use `context.Context` for request-scoped external work.
- Return explicit errors and wrap with useful context.
- Prefer table-driven tests for handlers and validation.
- Avoid goroutines unless there is a real concurrency need.
- Bound timeouts for external I/O.

## Rules

- Do not introduce an ORM, framework, queue, or cache without a clear immediate need.
- Preserve backward compatibility unless a breaking change is requested.
- Keep configuration environment-driven where deployment varies.
