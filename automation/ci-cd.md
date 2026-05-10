# CI/CD Strategy

This file documents recommended CI/CD behavior. It does not add executable workflows yet.

## Current Baseline

Our current CI does not do anything interesting yet.

A useful CI pipeline typically includes:

- Unit tests.
- Integration tests.
- Styling checks.
- Linting checks.
- Security checks.
- Any other automated test that protects expected behavior.

If any check fails, the build is considered broken. The developer should be notified by GitHub so they can fix the issue before merge or release.

## Pipeline Goals

- Validate every PR before merge.
- Build every deployable app.
- Catch dependency and secret issues early.
- Keep artifacts traceable to commit SHA.
- Make release and rollback repeatable.

## Recommended PR Checks

| Area | Check |
| --- | --- |
| Go server | `go test ./...`, `go build ./...` |
| Angular webapp | `npm test`, `npm run build` |
| Astro website | `npm run build` |
| Desktop Vue/Tauri | `npm run build`; Tauri build on platform runner when configured |
| Android | `./gradlew test`, `./gradlew assembleDebug` |
| iOS | `xcodebuild test` on macOS runner when configured |
| Security | dependency audit, secret scanning, code scanning |
| Docs | link checks or markdown lint when tooling exists |

## Environments

- Local: developer machine.
- Preview: temporary environment for PR review.
- Staging: production-like validation.
- Production: user-facing release.

Do not deploy to production from unreviewed branches.

## Release Gates

Before production:

- All required checks pass.
- PR is approved.
- Release checklist is complete.
- Rollback path is documented.
- Secrets and environment variables are configured outside the repo.
- Smoke checks are defined.

## Rollback

A rollback plan should include:

- Last known good version.
- Command or platform action to redeploy it.
- Database rollback or forward-fix plan.
- Owner and escalation path.
- Verification after rollback.

## Future GitHub Actions

When executable CI is requested, create workflows under `.github/workflows/` in this order:

1. `server.yml`
2. `webapp.yml`
3. `website.yml`
4. `desktop.yml`
5. `android.yml`
6. `ios.yml`
7. `security.yml`

Keep each workflow small and platform-specific before building a large matrix.
