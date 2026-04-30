# Decision Log

**Project**: Service Request Mini

**Last Updated**: 2026-04-30

---

## Purpose

This log records architecture, stack, provider, version, deployment, and lifecycle decisions for this Product Instance.

---

## Decision Index

| ID | Area | Title | Status | Date |
| --- | --- | --- | --- | --- |
| SRM-STACK-001 | Stack / Validation | Minimal browser-only stack for future MVP implementation | Approved | 2026-04-30 |

---

## Decisions

## SRM-STACK-001 - Minimal Browser-Only Stack for Future MVP Implementation

Date: 2026-04-30

Area: Stack / Validation

Status: Approved

Supersedes: None

### Decision

Use plain HTML/CSS/JS with browser `localStorage` for the first future implementation of the Service Request Mini MVP.

This means no build step, no package manager, no dependencies, no backend, no external database, no authentication, and no deploy.

### Reason

This is the smallest stack that can prove request creation, request listing, status update, and reload persistence without pulling the example into backend, database, provider, deploy, or authentication decisions.

### Options Considered

- Static HTML/CSS/JS only: smallest surface, but does not prove persistence.
- HTML/CSS/JS with `localStorage`: best fit for proving the MVP flow with minimal stack.
- Small full-stack app with SQLite: closer to real persistence, but too heavy for the first implementation slice.
- Hosted backend/service platform: introduces provider, credential, environment, and deploy concerns too early.

### Impact

Future implementation can stay local, inspectable, dependency-free, and easy to validate manually. It will not prove production persistence, multi-user behavior, authentication, backend integration, deployment, or external database behavior.

### Validation Plan

Future implementation validation should include `git diff --check`, `git status --short`, manual browser validation of request creation, request listing, status update, reload persistence through `localStorage`, and confirmation that no unapproved dependency, backend, database, authentication, deploy, workflow, or automation was introduced.

### Reversal Cost

Low. A future task can introduce SQLite or a backend service through a separate stack decision and migration plan.

### Trigger Approval

Trigger approved the SRM-001 technical direction. This log entry does not open an implementation task as READY.
