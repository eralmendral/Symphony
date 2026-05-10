# GitHub Workflow

Use GitHub as the source of truth for code, review, and release traceability.

## Branches

Default branch:

- `main`

Feature branch examples:

- `feat/JIRA-123-add-health-check`
- `fix/JIRA-124-handle-empty-state`
- `docs/JIRA-125-update-sdlc-playbook`

## Pull Requests

Each PR should include:

- Problem and solution summary.
- Linked Jira issue when applicable.
- Test commands run.
- Screenshots or recordings for UI changes.
- Release or migration notes when relevant.

## Review Policy

Review for:

- Correctness.
- Regression risk.
- Security.
- Test coverage.
- Documentation.
- Operational impact.

Do not merge with unresolved high-risk review comments.

## Suggested Branch Protection

Enable when the repo is ready:

- Require pull request before merge.
- Require status checks to pass.
- Require conversation resolution.
- Require linear history if the team prefers rebase/squash flow.
- Restrict force pushes on protected branches.

## GitHub Issues And Projects

Use GitHub Issues for lightweight open-source style tracking or small repos. Use Jira when sprint planning, story points, cross-team reporting, or roadmap management is required.

GitHub Projects can mirror delivery state:

- Backlog.
- Ready.
- In Progress.
- In Review.
- Done.

## Releases

Release notes should include:

- User-visible changes.
- Fixes.
- Breaking changes.
- Migration steps.
- Known issues.
- Commit SHA or tag.

## Security Features

When available, enable:

- Dependabot alerts and updates.
- Secret scanning and push protection.
- Code scanning.
- Dependency review.
- Required reviews for sensitive files.
