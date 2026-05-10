# Jira Workflow

This is a generic Jira setup for Symphony. Replace placeholders with real project keys, teams, and field IDs only after Jira exists.

## Recommended Issue Types

- Epic: major outcome or milestone.
- Story: user-facing value with acceptance criteria.
- Task: technical or operational work.
- Bug: defect with reproduction steps.
- Spike: research with a time box and decision output.
- Sub-task: small implementation step under a parent issue.

## Workflow

Use this default board flow:

```text
Backlog -> Ready -> In Progress -> In Review -> QA/Verify -> Done
```

Use a `Blocked` flag for blocked work. Add a separate blocked status only if the team actively reviews blocked items.

## Required Fields

- Summary.
- Description.
- Issue type.
- Priority.
- Component.
- Acceptance criteria or reproduction steps.
- Story points for stories.
- Sprint when committed.
- Assignee when work starts.

## Components

- `server`
- `webapp`
- `website`
- `desktop`
- `ios`
- `android`
- `automation`
- `skills`

## Priorities

- Highest: production outage, security breach, data loss.
- High: release blocker or major user-visible defect.
- Medium: normal planned work.
- Low: cleanup, small improvements, non-urgent docs.

## Story Point Rules

- Estimate only stories that meet the definition of ready.
- Use relative sizing: 1, 2, 3, 5, 8, 13.
- Split anything estimated at 13.
- Bugs may use points only when they consume sprint capacity.
- Spikes should have a time box and concrete output.

## Jira To GitHub Linkage

- Branch name: `type/JIRA-123-short-title`.
- PR title: `JIRA-123: short change summary`.
- Commit scope may match platform or component.
- Link the PR from the Jira issue before review.

## Reports To Watch

- Sprint burndown.
- Velocity trend.
- Aging work in progress.
- Reopened bugs.
- Carryover by sprint.
- Blocked work age.
