---
name: security-review
description: Use when evaluating application, API, infrastructure, dependency, secret, auth, data handling, or AI-tooling security risk before implementation, review, release, or incident response.
metadata:
  short-description: Review security risks across code, data, dependencies, and operations.
---

# Security Review

## Mission

Find realistic security risks and propose practical mitigations that fit the existing system. Focus on exploitable paths, sensitive data, trust boundaries, and operational exposure.

## Workflow

1. Identify assets: secrets, credentials, user data, payment data, source code, logs, deployments.
2. Identify trust boundaries: browser, API, database, filesystem, shell, cloud, third-party services.
3. Trace untrusted input through validation, authorization, storage, and output.
4. Check dependencies, configuration, CI/CD, and deployment behavior.
5. Prioritize fixes by exploitability and impact.

## Review Areas

- Authentication and authorization.
- Input validation, output encoding, injection risk.
- Secret handling and environment variables.
- File uploads, path traversal, shell execution, SSRF, and unsafe deserialization.
- Dependency and supply-chain exposure.
- Logging of sensitive data.
- CORS, cookies, session handling, CSRF, and browser security headers.
- CI/CD token permissions and release signing.
- AI tool permissions, prompt injection, and repository data exposure.

## Output

For each issue, include:

- Risk and affected boundary.
- Exploit or failure scenario.
- Recommended mitigation.
- Verification step.

## Rules

- Do not exaggerate theoretical risks without a plausible path.
- Do not recommend heavy compliance controls unless the product requires them.
- Prefer default-deny permissions, least privilege, explicit allowlists, and auditable changes.
