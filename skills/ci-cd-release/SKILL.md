---
name: ci-cd-release
description: Use when designing, reviewing, documenting, or troubleshooting CI/CD pipelines, release processes, versioning, artifacts, deployment checks, rollback plans, and GitHub Actions workflows.
metadata:
  short-description: Design CI/CD and release workflows with safe quality gates.
---

# CI/CD Release

## Mission

Build a release path that catches defects early, keeps deployments repeatable, and makes rollback possible. Prefer simple workflows that match the repo's actual stack.

## Pipeline Shape

Use these stages unless the repo has a better established pattern:

1. Validate: formatting, linting, type checks, unit tests.
2. Build: compile apps and package artifacts.
3. Security: dependency audit, secret scanning, code scanning when available.
4. Preview: deploy non-production environments for review when useful.
5. Release: tag, changelog, artifact publishing, production deploy.
6. Verify: smoke tests, health checks, monitoring, rollback readiness.

## Release Rules

- Version only from merged code on the release branch.
- Keep artifacts traceable to commit SHA.
- Require passing checks before merge or deployment.
- Use protected environments for production.
- Keep secrets in the CI provider's secret store, never in repo files.
- Document rollback before first production deployment.

## Symphony Stack Checks

- Go server: `go test ./...`, `go build ./...`.
- Angular webapp: `npm test`, `npm run build`.
- Astro website: `npm run build`.
- Tauri desktop: `npm run build`, then `npm run tauri build` when platform prerequisites exist.
- Android: `./gradlew test`, `./gradlew assembleDebug`.
- iOS: `xcodebuild test` or archive checks on macOS runners.

## Rules

- Do not add CI workflow files unless requested.
- Do not assume cloud provider, registry, signing keys, or deployment target.
- State which checks are local-only, CI-ready, or release-gating.
