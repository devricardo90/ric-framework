# Stack Decision Record

**Project**: Service Request Mini

**Decision ID**: SRM-STACK-001

**Date**: 2026-04-30

**Decision Area**: Minimal implementation stack and validation plan

**Status**: Approved by Trigger

---

## Why This Decision Is Needed Now

Service Request Mini has a documented MVP, but future implementation is blocked until the Product Instance has a minimal stack and validation plan.

SRM-001 does not implement the product. It compares stack options, records the recommended minimal stack, defines validation expectations, and keeps implementation as future scope.

---

## Scope of This Decision

This decision covers only the minimum stack direction and validation plan for a future MVP implementation.

It does not authorize:

- Creating code, HTML, CSS, or JavaScript files.
- Creating `package.json` or installing dependencies.
- Creating scripts, `.github`, workflows, or automation.
- Creating a backend, external database, authentication, deployment, or hosted service.
- Opening an implementation task as READY.

---

## Options Considered

### Option 1: Static HTML/CSS/JS only

- Description: A static interface with no persistent storage.
- Advantages: Smallest possible implementation surface; no dependencies; no build step; simple to review.
- Disadvantages: Does not prove request persistence across reloads; weak fit for a request tracking MVP.
- Compatibility notes: Works in a browser without package manager, backend, database, deploy, or authentication.
- Assessment: Acceptable for a visual prototype, but too weak for the Service Request Mini MVP because request state would not persist.

### Option 2: HTML/CSS/JS with `localStorage`

- Description: Plain browser files using `localStorage` for local request persistence.
- Advantages: Proves request creation, request listing, status update, and persistence through reload without dependencies or backend.
- Disadvantages: `localStorage` is not production persistence; admin/requester roles are simulated; data remains local to one browser.
- Compatibility notes: Works in a browser without build step, package manager, backend, external database, authentication, deploy, or provider.
- Assessment: Best fit for the first future implementation slice because it proves the MVP flow with minimal stack surface.

### Option 3: Small full-stack app with SQLite

- Description: A simple backend application with SQLite persistence.
- Advantages: Closer to a real service request system; persistent data model; clearer separation between requester and administrator behavior.
- Disadvantages: Introduces runtime, backend, database, routing, setup, and validation complexity too early.
- Compatibility notes: Requires stack choices that are larger than the current MVP needs.
- Assessment: Useful future option, but too heavy for the first implementation slice.

### Option 4: Hosted backend/service platform

- Description: A hosted service, backend platform, or managed database backing the request flow.
- Advantages: Real persistence and potential deploy path can be established quickly.
- Disadvantages: Introduces provider lock-in, credentials, environment configuration, deployment concerns, and external dependencies.
- Compatibility notes: Conflicts with the current goal of avoiding provider, deploy, and credential decisions.
- Assessment: Not appropriate for the first implementation slice.

---

## Recommended Decision

Use plain HTML/CSS/JS with browser `localStorage` for the first future implementation of the Service Request Mini MVP.

This stack means:

- Runtime: browser.
- Markup/style/behavior: plain HTML, CSS, and JavaScript.
- Persistence: browser `localStorage` only.
- Build step: none.
- Package manager: none.
- Dependencies: none.
- Backend: none.
- External database: none.
- Authentication: none.
- Deploy: none.

This decision was approved by the Trigger during SRM-001 review. It is the approved minimum stack for the next implementation discussion.

---

## Rationale

The MVP needs to prove a simple request lifecycle: create request, list requests, update status, and preserve state across a browser reload.

Plain HTML/CSS/JS with `localStorage` is the smallest stack that can prove that flow without introducing backend, database, authentication, package management, deployment, or provider decisions. It keeps the example understandable and stack-light while still being more useful than a purely static prototype.

---

## Limits of the Chosen Stack

- `localStorage` is not production persistence.
- Data is local to one browser and one device.
- Data is not secure for sensitive information.
- Data can be deleted by the browser or the user at any time.
- Admin/requester roles are simulated, not authenticated identities.
- No backend exists.
- No external database exists.
- No deployment target is selected.
- No package manager is used.
- No security model is approved.
- No multi-user behavior is proven.

---

## Minimal Validation Plan

Future implementation validation should prove only the MVP behavior:

1. `git diff --check` passes.
2. `git status --short` shows only approved implementation files.
3. Manual browser review confirms a requester can create a service request.
4. Manual browser review confirms created requests appear in a list.
5. Manual browser review confirms an administrator can change status among `New`, `In Review`, `Done`, and `Rejected`.
6. Manual browser review confirms request data persists after page reload using `localStorage`.
7. Review confirms no package manager, dependency, backend, external database, authentication, deploy, `.github`, workflow, or automation was introduced.

No automated test framework is approved by this decision.

---

## Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| `localStorage` may be mistaken for production persistence. | Medium | Document it as local prototype persistence only. |
| Admin/requester roles may be mistaken for real authentication. | Medium | State that roles are simulated and no authentication exists. |
| Lack of backend limits multi-user behavior. | Medium | Keep the future implementation explicitly local-only. |
| Lack of deploy may limit external review. | Low | Validate by local browser review only. |
| Lack of external database limits durability. | Medium | Treat SQLite or backend storage as future scope. |
| Lack of package manager limits tooling. | Low | Accept this to keep the first slice dependency-free. |

---

## Reversal or Migration Cost

Migration cost is low while the product remains small. A future task could replace `localStorage` with SQLite or a backend service, but that would require a separate stack decision, data model review, validation plan, and Trigger approval.

---

## Open Questions

| Question | Status | Owner |
| --- | --- | --- |
| Should the future implementation remain local-only for the first slice? | Resolved: yes for first slice | Trigger |
| Should a later version introduce authentication? | Future question | Trigger |
| Should a later version use SQLite or a hosted backend? | Future question | Trigger |

---

## Approval

Trigger approved the SRM-001 technical direction: plain HTML/CSS/JS with browser `localStorage`, no build step, no package manager, no dependencies, no backend, no external database, no authentication, and no deploy.

No implementation, dependency, package manager, backend, database, authentication, deploy, or workflow has been created.
