# Stack Decision Record

**Project**: Tour Availability Mini

**Decision ID**: TAM-STACK-001

**Date**: 2026-05-01

**Decision Area**: Documentation phase stack position and future implementation default recommendation

**Status**: TAM-001 documentation only. TAM-002 stack not yet selected.

---

## TAM-001 Stack Position

TAM-001 is a documentation-only task.

No code is created. No stack is selected. No implementation exists.

The following are confirmed absent from TAM-001:

- No HTML, CSS, or JavaScript files.
- No `package.json` or `node_modules`.
- No framework (React, Vue, Angular, Svelte, or equivalent).
- No build step (webpack, Vite, Parcel, or equivalent).
- No backend, server, or runtime.
- No database or persistence layer.
- No API or external service.
- No authentication or authorization.
- No deploy configuration or hosted environment.
- No `.github/` directory, workflow, or script.
- No external dependency.
- No automated test framework.

---

## Future TAM-002 Default Stack Recommendation

This section documents the default stack recommendation for a future TAM-002 implementation task. This recommendation is not authorized as READY. It cannot be acted upon until the Trigger approves TAM-002 through a separate Discussion Gate.

### Recommended Default Stack

Browser-native HTML, CSS, and JavaScript with no framework, no dependency, no backend, no API, no database, no build step, no `package.json`, and no mandatory deploy.

### Why This Stack Is Recommended

Tour Availability Mini must answer one question: given a tour, a date, and a party size, is the tour available?

This question requires:

- A simple form for user input (tour, date, people count).
- Date comparison logic (past date check, weekday check, blocked date check).
- Capacity comparison logic (people versus maximum).
- A response area displaying the result.

Plain HTML, CSS, and JavaScript can satisfy all of these requirements directly in the browser without any external dependency, runtime, build step, server, or package manager.

Introducing a framework, package manager, backend, database, or API would add complexity that the availability question does not require. The RIC Framework principle of minimal stack surface for the first implementation slice applies here exactly as it did in Service Request Mini.

### Stack Means

- Runtime: browser.
- Markup/style/behavior: plain HTML, CSS, and JavaScript.
- Persistence: none required; tour configuration is defined inline in the source file.
- Build step: none.
- Package manager: none.
- Dependencies: none.
- Backend: none.
- External database: none.
- Authentication: none.
- Deploy: none (validated by local browser review only).

### Why No Backend or API Is Needed

The MVP question is a local calculation. The seven allowed rules (weekday, past date, blocked date, capacity, response) can all be evaluated with in-browser JavaScript and a static tour configuration object. No server is required to compute or store the answer.

### Why No Database Is Needed

Tour data (allowed weekdays, blocked dates, capacity) is small enough to be defined directly in the source configuration. The MVP does not store results, reservations, or user data. No database is needed.

### Why No Framework Is Needed

A form, a button, and a response area do not require a component framework. Plain DOM operations are sufficient for the MVP and keep the implementation inspectable without toolchain knowledge.

### Authority Constraint

The agent executing TAM-002 may not choose a stack heavier than this default recommendation without a new Discussion Gate authorized by the Trigger.

If a future agent believes a heavier stack is justified, it must:

1. Stop execution.
2. Open a Discussion Gate.
3. Document the reason for the heavier stack.
4. Wait for Trigger authorization before proceeding.

This rule exists because stack escalation is a governance decision, not an implementation detail.

---

## Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Static tour configuration must be updated manually. | Low | Accepted for MVP; admin management is future scope. |
| No persistence means no availability history. | Low | Accepted; the MVP checks availability, it does not record it. |
| Agent may attempt to use a framework. | Medium | This document is an explicit constraint against that choice. |
| Future scope creep toward booking or backend. | Medium | Forbidden scope is documented in mvp-scope.md. |

---

## Open Questions

| Question | Status | Owner |
| --- | --- | --- |
| Should TAM-002 use `localStorage` at all? | Open; likely no, since no persistence is needed | Trigger |
| Should TAM-002 define tour data in a JS object or a JSON file? | Open; deferred to TAM-002 Discussion Gate | Trigger |
| Should blocked dates be hardcoded or configurable at runtime? | Open; deferred to TAM-002 Discussion Gate | Trigger |

---

## Approval

This stack decision record is approved only as documentation for TAM-001.

The default stack recommendation for TAM-002 is recorded here for governance continuity.

TAM-002 is not READY. No implementation task is authorized by this document.
