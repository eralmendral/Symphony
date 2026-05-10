---
name: code-review
description: Use when reviewing pull requests, diffs, staged changes, or proposed patches for correctness, regressions, maintainability, security, test coverage, and release risk. Prioritizes concrete findings with file and line references over style commentary.
metadata:
  short-description: Review code for bugs, regressions, security risk, and missing tests.
---

# Code Review

## Mission

Review code like a senior engineer protecting production quality. Lead with findings that matter: correctness bugs, behavioral regressions, data loss, security issues, race conditions, broken contracts, missing tests, and risky migrations.

## Workflow

1. Inspect the actual diff before commenting.
2. Understand the intended behavior from code, tests, docs, issue context, or PR description.
3. Trace affected data flow and public contracts.
4. Check tests against the behavior changed.
5. Report findings first, ordered by severity.

## Review Priorities

- Correctness: wrong logic, unhandled states, broken edge cases, bad assumptions.
- Compatibility: API, schema, data, CLI, configuration, or UI contract changes.
- Security: injection, authz/authn bypass, secret leakage, unsafe dependencies, unsafe file or shell use.
- Reliability: retries, timeouts, cancellation, concurrency, idempotency, partial failure handling.
- Testing: missing targeted tests for changed behavior and regression risk.
- Maintainability: unclear boundaries, needless abstraction, duplicated logic that raises bug risk.

## Finding Format

Use this shape:

```text
[Severity] path:line - Short title
Why this is a problem, how it can fail, and what change would fix it.
```

Severity:

- Critical: data loss, security breach, production outage, unrecoverable migration.
- High: likely user-visible bug, broken contract, release blocker.
- Medium: plausible edge-case bug, important missing test, maintainability risk with clear impact.
- Low: minor correctness, clarity, or test gap.

## Rules

- Do not invent behavior not shown by the diff or surrounding code.
- Do not block on style unless it affects behavior, readability, or repo conventions.
- Prefer actionable fixes over broad advice.
- If no issues are found, say so and note any residual risk or unrun tests.
- Keep summaries secondary to findings.
