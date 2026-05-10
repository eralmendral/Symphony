---
name: conventional-commits
description: Use when writing, reviewing, correcting, or explaining git commit messages with the Conventional Commits 1.0.0 specification. Covers commit type selection, scopes, descriptions, bodies, footers, breaking changes, SemVer intent, changelog-friendly history, staged diff inspection, splitting mixed changes, and avoiding invented commit content.
metadata:
  short-description: Write and review Conventional Commits accurately from the actual git diff.
---

# Conventional Commits

## Mission

Write and review commit messages using the official Conventional Commits 1.0.0 specification:

https://www.conventionalcommits.org/en/v1.0.0/

The goal is a clear, machine-readable, changelog-friendly commit history that describes only the work actually present in the commit.

## Evidence Rules

Do not invent commit content.

- Inspect `git status --short` before proposing a commit message when working in a repository.
- Inspect the staged diff before writing a commit message for an actual commit.
- If nothing is staged, say so. Inspect unstaged changes only when the user asks for help planning commits.
- Base the message on the diff, not on guesses from branch names, issue titles, or prior conversation.
- If staged changes contain unrelated purposes, recommend splitting them into multiple commits.
- Do not claim tests passed, files changed, or behavior changed unless the diff or command output supports it.
- Do not add commit hooks, commitlint, Commitizen, semantic-release, CI checks, or package dependencies unless explicitly asked for enforcement automation.

Useful inspection commands:

```sh
git status --short
git diff --cached --stat
git diff --cached
git diff --stat
```

## Required Format

Use this structure:

```txt
<type>[optional scope][optional !]: <description>

[optional body]

[optional footer(s)]
```

Rules:

- The type is required.
- The description is required and immediately follows `: `.
- Scope is optional and appears in parentheses: `feat(api): ...`.
- `!` before `:` marks a breaking change: `feat(api)!: ...`.
- Body is optional and starts after one blank line.
- Footer section is optional and starts after one blank line after the body or description.
- Footer tokens use a word token followed by `: ` or ` #`, similar to git trailers.
- `BREAKING CHANGE:` must be uppercase when used as a footer token.
- `BREAKING-CHANGE:` is synonymous with `BREAKING CHANGE:`.

## Type Selection

Use the type that best describes the primary intent of the commit.

- `feat`: adds a user-visible capability or application/library feature. Maps to a SemVer minor release.
- `fix`: patches a bug. Maps to a SemVer patch release.
- `docs`: documentation-only changes.
- `test`: adds or corrects tests without changing production behavior.
- `refactor`: restructures code without changing external behavior.
- `perf`: improves performance.
- `build`: changes build system, packaging, dependencies, or generated build artifacts.
- `ci`: changes CI configuration or automation.
- `chore`: maintenance that does not fit product, build, CI, docs, test, refactor, or style.
- `style`: formatting or style-only code changes with no behavior change.
- `revert`: reverts prior commit(s).

The Conventional Commits spec mandates `feat` and `fix` meanings. Other types are allowed, but they have no implicit SemVer effect unless they include a breaking change.

## Scope Selection

Use a scope when it makes the affected area clearer.

- Prefer short nouns from the codebase or product area: `auth`, `api`, `client`, `server`, `uploads`, `deps`, `ci`.
- Do not force a scope when the whole repo or multiple unrelated areas changed.
- Use one scope per commit. If multiple scopes are needed because changes are unrelated, split the commit.
- Keep scope lowercase unless the repo convention says otherwise.

## Description Style

Write the subject as a concise summary of the change.

- Use imperative mood: `add`, `fix`, `remove`, `rename`, `validate`.
- Start lowercase after the type unless the first word is a proper noun.
- Do not end with a period.
- Keep it specific enough to distinguish from nearby commits.
- Avoid vague subjects like `update files`, `fix bug`, `changes`, or `work in progress`.
- Do not mention implementation details unless they are the meaningful change.

Good:

```txt
feat(auth): add token refresh endpoint
fix(uploads): reject mismatched image content types
docs: document local server setup
```

Weak:

```txt
chore: update
fix: bug
feat: changes
```

## Body and Footer Rules

Use a body when the subject cannot explain the reason, risk, migration, or behavior clearly.

- Explain why the change exists and what changed at a high level.
- Do not restate every file touched.
- Wrap prose naturally for readability.
- Keep detailed test output out of the commit body unless it is important context.

Use footers for metadata:

```txt
Refs: #123
Reviewed-by: Name
Co-authored-by: Name <name@example.com>
```

Use `BREAKING CHANGE:` when the commit introduces a breaking API or behavior change:

```txt
BREAKING CHANGE: environment variables now take precedence over config files.
```

## Breaking Changes

A breaking change can appear on any commit type.

Prefix form:

```txt
feat(api)!: require pagination parameters
```

Footer form:

```txt
feat(api): require pagination parameters

BREAKING CHANGE: list endpoints now reject requests without pagination.
```

Use `!` for short, obvious breaking changes. Use a `BREAKING CHANGE:` footer when migration context or the exact compatibility impact needs explanation. It is valid to use both.

Breaking changes map to a SemVer major release.

## Reverts

The spec does not mandate one revert format, but recommends using the flexible type/footer model. Prefer:

```txt
revert: remove experimental profile editor

Refs: 676104e
```

If reverting a specific Conventional Commit and git generated a useful body, preserve the useful context while keeping the subject conventional.

## Workflow for Writing a Commit Message

1. Inspect staged state.
   - Run `git status --short`.
   - Run `git diff --cached --stat`.
   - Read `git diff --cached` when needed to determine intent.

2. Identify the primary purpose.
   - New capability: `feat`.
   - Bug fix: `fix`.
   - No behavior change: choose `docs`, `test`, `refactor`, `style`, `build`, `ci`, or `chore`.
   - Breaking contract: add `!` or `BREAKING CHANGE:`.

3. Decide whether the staged changes belong together.
   - If one coherent purpose, write one commit message.
   - If unrelated purposes, recommend splitting and propose separate messages.

4. Write the message.
   - Use a precise type and optional scope.
   - Keep the description concise and imperative.
   - Add body/footer only when useful.

5. If committing.
   - Do not stage files unless the user asked.
   - Do not amend, rebase, squash, or rewrite history unless the user asked.
   - Use multiple `-m` flags for subject, body, and footers.

Example command:

```sh
git commit -m "fix(auth): reject expired tokens" \
  -m "Ensure expired JWTs return unauthorized instead of reaching protected handlers." \
  -m "Refs: #123"
```

## Review Checklist

- Does the message match the actual staged diff?
- Is the type correct?
- Is the scope useful and accurate?
- Is the description specific, concise, imperative, and free of a trailing period?
- Are unrelated changes split?
- Is a breaking change marked with `!` or `BREAKING CHANGE:`?
- Does the body explain why, not merely repeat what?
- Are footers formatted as trailers?
- Is there any invented behavior, issue reference, test result, or release impact?

## Examples

Simple feature:

```txt
feat(projects): add certificate links
```

Bug fix with scope:

```txt
fix(auth): reject malformed bearer tokens
```

Breaking change with `!`:

```txt
feat(server)!: require postgres project storage
```

Breaking change footer:

```txt
feat(config): prefer environment variables

BREAKING CHANGE: file-based configuration is no longer loaded at startup.
```

Body and issue footer:

```txt
fix(requests): prevent stale responses from replacing current data

Track the latest request id and ignore responses from older requests.

Refs: #123
```

Revert:

```txt
revert: remove experimental profile editor

Refs: 676104e
```
