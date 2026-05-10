---
name: technical-documentation
description: Use when writing, updating, reviewing, or organizing technical docs, READMEs, runbooks, API docs, architecture notes, onboarding docs, release notes, and troubleshooting guides.
metadata:
  short-description: Write accurate, maintainable engineering documentation.
---

# Technical Documentation

## Mission

Write documentation that helps someone complete a task or make a decision. Keep it accurate, discoverable, and close to the code it describes.

## Workflow

1. Inspect the code, configs, scripts, and current docs before writing.
2. Identify the reader: developer, operator, reviewer, product owner, or user.
3. Document actual commands and behavior.
4. Prefer short sections with runnable examples.
5. Link related docs instead of duplicating details.

## Common Doc Types

- README: purpose, setup, scripts, structure, verification.
- Runbook: symptoms, impact, diagnosis, mitigation, rollback, escalation.
- API docs: endpoint, request, response, status codes, auth, examples.
- Architecture note: context, decision, alternatives, consequences.
- Release notes: user-visible changes, migration steps, known issues.

## Quality Bar

- Commands are copy-pasteable from the correct directory.
- Assumptions and prerequisites are explicit.
- Links point to maintained sources.
- Docs do not claim unsupported features.
- Screenshots or examples are current when included.

## Rules

- Do not invent setup steps, env vars, ports, or deployment targets.
- Do not add large docs for trivial changes.
- Update existing docs before creating parallel duplicates.
