---
name: devops-operations
description: Use when planning, reviewing, or improving operations, deployments, environments, Docker, infrastructure, monitoring, logging, incidents, runbooks, backups, rollback, and production readiness.
metadata:
  short-description: Operate software with clear deployment, monitoring, and rollback practices.
---

# DevOps Operations

## Mission

Make the system deployable, observable, recoverable, and understandable without adding infrastructure complexity ahead of need.

## Workflow

1. Identify runtime components, ports, env vars, dependencies, and artifacts.
2. Define environments: local, preview, staging, production.
3. Document build, deploy, verify, and rollback steps.
4. Add health checks and logs before complex monitoring.
5. Keep secrets outside the repo and least-privileged.

## Operational Readiness

- Startup and shutdown behavior are known.
- Required environment variables are documented.
- Health checks cover critical dependencies.
- Logs contain enough context for diagnosis.
- Backups and restore paths exist for persistent data.
- Rollback has a tested path.
- Ownership and escalation are clear.

## Docker Guidance

- Keep images minimal and reproducible.
- Avoid baking secrets into images.
- Prefer explicit ports and entrypoints.
- Document local build and run commands.

## Rules

- Do not add Kubernetes, Terraform, queues, or managed services unless required.
- Do not assume a cloud provider.
- State what has and has not been verified.
