# Commit Conventions

Symphony uses Conventional Commits for clear history and future release automation.

## Format

```text
<type>[optional scope][optional !]: <description>

[optional body]

[optional footer(s)]
```

## Types

- `feat`: user-visible feature.
- `fix`: bug fix.
- `docs`: documentation-only change.
- `test`: test-only change.
- `refactor`: code restructuring without behavior change.
- `perf`: performance improvement.
- `build`: dependency, build, package, or generated artifact change.
- `ci`: CI/CD automation change.
- `chore`: maintenance.
- `style`: formatting-only change.
- `revert`: revert a previous change.

## Scopes

Recommended scopes:

- `server`
- `webapp`
- `website`
- `desktop`
- `ios`
- `android`
- `automation`
- `skills`
- `docs`

## Examples

```text
feat(webapp): add onboarding checklist
fix(server): return json for health check errors
docs(automation): add Jira workflow playbook
ci(website): build Astro site on pull requests
```

## Rules

- Use imperative mood: `add`, `fix`, `document`, `remove`.
- Keep the subject specific and lowercase after the colon unless it starts with a proper noun.
- Do not describe tests as passing unless they were run.
- Split unrelated changes into separate commits.
- Use `!` or `BREAKING CHANGE:` for breaking behavior.
