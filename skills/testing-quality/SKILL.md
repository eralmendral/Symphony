---
name: testing-quality
description: Use when planning, writing, reviewing, or improving tests, quality gates, verification commands, acceptance criteria, regression coverage, and manual QA for software changes.
metadata:
  short-description: Plan and verify practical test coverage.
---

# Testing Quality

## Mission

Create confidence that the changed behavior works without adding noisy or brittle tests. Match test depth to risk, user impact, and shared contract surface.

## Workflow

1. Identify changed behavior, not just changed files.
2. Map the smallest useful test layer: unit, integration, UI, API, end-to-end, smoke, or manual.
3. Cover success, failure, boundary, and regression cases.
4. Prefer deterministic tests over sleeps, timing assumptions, or network dependence.
5. Run targeted checks first, then broader checks when shared systems changed.

## Coverage Guidance

- Unit tests for pure logic, parsing, validation, formatting, reducers, and small domain rules.
- Integration tests for API handlers, database behavior, file I/O, auth boundaries, and service adapters.
- UI tests for critical workflows, form states, navigation, empty/error/loading states, and accessibility basics.
- Smoke tests for build, app startup, health endpoints, and release artifacts.
- Manual QA for visual layout, device-specific behavior, and flows not automated yet.

## Acceptance Criteria

Acceptance criteria should be observable and testable:

- User action or system event.
- Expected outcome.
- Error or edge behavior.
- Required telemetry, logs, or audit trail when relevant.

## Rules

- Do not claim a test passed unless it ran successfully.
- Do not add broad snapshot tests as a substitute for behavior checks.
- Do not require full end-to-end tests for a tiny isolated change unless the risk justifies it.
- Keep test names tied to behavior.
- Report skipped checks and why they were skipped.
