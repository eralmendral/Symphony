---
name: frontend-ui-ux
description: Use when designing, implementing, reviewing, or testing frontend user interfaces, responsive layouts, accessibility, state handling, forms, navigation, design systems, and user workflows.
metadata:
  short-description: Build usable frontend workflows with accessible, responsive UI.
---

# Frontend UI UX

## Mission

Build the actual user workflow first. Keep interfaces clear, accessible, responsive, and consistent with the existing app.

## Workflow

1. Identify the primary user task.
2. Inspect existing components, styles, routes, and state patterns.
3. Design loading, empty, error, success, disabled, and submitting states.
4. Keep data fetching and mutation behavior explicit.
5. Verify responsive layout and keyboard access.

## UI Standards

- Use semantic HTML and accessible labels.
- Keep focus states visible.
- Make buttons and links visually distinct.
- Use familiar controls for familiar tasks.
- Ensure text fits containers on mobile and desktop.
- Avoid nested cards, overlapping text, layout shifts, and decorative clutter.
- Match density to the product: operational tools should be compact and scannable.

## State Standards

- Prefer local state unless distant components need shared state.
- Model async state explicitly.
- Preserve user input after recoverable errors.
- Disable duplicate submits.
- Show useful errors without leaking internals.

## Rules

- Follow the existing framework and styling approach.
- Do not add UI libraries or state managers unless clearly needed.
- Inspect rendered output when layout or interaction changes.
