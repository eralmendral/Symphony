# Software Development Lifecycle

Symphony uses a lightweight lifecycle that keeps work moving from idea to release with enough structure to avoid avoidable defects.

## 1. Intake

Capture:

- Problem or opportunity.
- User or stakeholder.
- Desired outcome.
- Constraints, deadline, or risk.
- Initial owner.

Output: rough Jira epic, story, bug, or spike.

## 2. Discovery

Clarify:

- Current behavior.
- Expected behavior.
- Affected platform: `server`, `webapp`, `website`, `desktop`, `ios`, `android`, `automation`, or `skills`.
- Dependencies and unknowns.
- Success criteria.

Output: refined ticket with acceptance criteria.

## 3. Planning

Prepare:

- Split large work into sprint-sized stories.
- Estimate with story points.
- Identify blockers.
- Confirm definition of ready.
- Pick target sprint or backlog priority.

Output: ready backlog item.

## 4. Design

Define:

- User flow or API contract.
- Data flow and state changes.
- Security and privacy boundaries.
- Test approach.
- Release and rollback considerations.

Output: implementation-ready ticket or short design note.

## 5. Build

Implement:

- Create a branch from the current main branch.
- Keep commits focused and conventional.
- Update tests and docs with the behavior.
- Run targeted checks locally.

Output: pull request ready for review.

## 6. Review

Review for:

- Correctness and regression risk.
- Test coverage.
- Security and dependency risk.
- Maintainability.
- Docs and release notes.

Output: approved PR or requested changes.

## 7. Verify

Verify:

- Automated checks pass.
- Acceptance criteria pass.
- Manual QA is complete when UI or release behavior changed.
- Release checklist is complete for production changes.

Output: merge-ready change.

## 8. Release

Release:

- Merge through the approved branch strategy.
- Tag or version when needed.
- Deploy to the target environment.
- Run smoke checks.
- Capture release notes.

Output: deployed change with traceable commit SHA.

## 9. Operate

Watch:

- Health checks.
- Logs and errors.
- User reports.
- Performance and availability signals.
- Security alerts.

Output: stable production behavior or incident response.

## 10. Retro

Inspect:

- What shipped.
- What slowed delivery.
- What caused defects.
- What to improve next sprint.

Output: small process improvements and backlog follow-ups.
