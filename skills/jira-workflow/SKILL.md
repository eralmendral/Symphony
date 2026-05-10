---
name: jira-workflow
description: Use when creating, refining, triaging, estimating, or organizing Jira epics, stories, tasks, bugs, spikes, boards, sprints, labels, components, statuses, and reports.
metadata:
  short-description: Manage generic Jira workflows, issue types, and story points.
---

# Jira Workflow

## Mission

Keep Jira useful as a delivery system, not a paperwork system. Every ticket should make ownership, priority, status, and acceptance clear.

## Issue Types

- Epic: outcome-sized initiative containing related stories.
- Story: user-visible value with acceptance criteria.
- Task: engineering work without direct user story framing.
- Bug: defect with expected vs actual behavior and reproduction steps.
- Spike: time-boxed research with a concrete decision or artifact.
- Sub-task: implementation step owned inside a parent issue.

## Workflow Statuses

Use a simple workflow by default:

```text
Backlog -> Ready -> In Progress -> In Review -> QA/Verify -> Done
```

Add `Blocked` as a visible flag or status only when the team actively manages blockers.

## Required Fields

- Summary.
- Issue type.
- Priority.
- Component or platform.
- Acceptance criteria or reproduction steps.
- Story points for sprint-planned stories.
- Owner when work enters `In Progress`.

## Labels And Components

Recommended components for Symphony:

- `server`
- `webapp`
- `website`
- `desktop`
- `ios`
- `android`
- `automation`
- `skills`

Recommended labels:

- `bug`
- `enhancement`
- `security`
- `docs`
- `ci-cd`
- `needs-design`
- `blocked`

## Rules

- Do not estimate vague tickets; refine first.
- Do not leave finished work in review or verification after acceptance passes.
- Keep Jira status aligned with the actual repo and PR state.
