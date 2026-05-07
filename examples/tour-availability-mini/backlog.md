# Backlog

**Project**: Tour Availability Mini

**Last Updated**: 2026-05-07 (TAM-003 implementation complete; awaiting Trigger commit authorization)

---

## Governance Rules

- The Trigger is the only authority allowed to promote a task to READY.
- The Trigger is the only authority allowed to mark a task as DONE.
- Only one task may be READY or IN_PROGRESS at a time.
- Agents may recommend next work but must not open scope without Trigger approval.
- Every task promoted to READY must have: ID, Title, Status, Goal, Scope, Out-of-Scope, Definition of Done, Validation, and Commit Rule.

---

## Active Items

```
ID:     TAM-003
Title:  Evolve Tour Availability Mini With Selectable Multi-Tour Rules
Status: IN_PROGRESS — Implementation complete 2026-05-07; manual browser validation completed by Trigger; commit authorized

Goal:
  Evolve the TAM MVP so each tour has its own structured configuration object
  (name, capacity, operating days, blocked dates, messages), the availability
  engine applies the selected tour's rules via configuration (not scattered
  conditionals), all existing TAM-002 scenarios continue passing, and new
  scenarios prove tour A and tour B behave differently.

Scope:
  - examples/tour-availability-mini/app/index.html
  - examples/tour-availability-mini/app/styles.css
  - examples/tour-availability-mini/app/app.js
  - examples/tour-availability-mini/business-rules.md
  - examples/tour-availability-mini/validation-gates.md
  - examples/tour-availability-mini/status.md
  - examples/tour-availability-mini/backlog.md
  - examples/tour-availability-mini/session-handoff.md
  - STATUS.md
  - backlog.md
  - docs/ops/execution-log.md
  - docs/ops/session-handoff.md

Out-of-Scope:
  - No backend, API, auth, database, build tools, framework migration, or persistence
  - No localStorage history or any session state beyond current page
  - No visual polish, screenshots, GIF, or portfolio packaging
  - No third tour or additional product instance
  - No new permanent framework rule documents
  - No files under examples/service-request-mini/
  - No TAM-004, TAM-005, or TAM-006 READY promotion
  - No scattered if-tourId-equals-x conditional branching in the rule engine
  - No external dependency, package manager, CDN, or build step
  - No RIC-024A unless TAM-003 exposes genuine escalation pressure

Definition of Done:
  - User can select between at least two tours from the existing dropdown
  - Each tour is defined as a structured configuration object with: id, name,
    operatingDays, blockedDates, maxCapacity — same shape as current TOURS array
  - Availability engine applies selected tour's config through the rule functions;
    no if-tourId-equals-x branching introduced
  - All existing TAM-002 rule-path scenarios pass for both tours: past date,
    blocked date, unavailable weekday, capacity exceeded, valid available
  - At least one cross-tour scenario demonstrates behavioral difference on
    operating days (tour A available; tour B not available on same date)
  - At least one cross-tour scenario demonstrates behavioral difference on
    capacity (same party size; different results for each tour)
  - business-rules.md updated to reflect the evolution
  - validation-gates.md updated with TAM-003 gate entry
  - Git evidence clean: only authorized files; git diff --check passes;
    post-commit working tree clean
  - Trigger authorizes commit; Remote DONE confirmed

Hard Stops — Stop immediately and request Trigger review if:
  1. Backend, API, auth, database, build tools, framework migration, or
     persistence becomes necessary
  2. Logic spreads through repeated tour-specific if conditionals
  3. Any existing validation scenario regresses
  4. Visual polish or portfolio packaging is requested
  5. Scope expands beyond selectable multi-tour availability
  6. More than two structural correction rounds are needed
  7. Files outside approved scope become necessary without justification
  8. A third tour or product instance is proposed
  9. The stack changes without a new Discussion Gate
  10. Any item in official-example-evolution-strategy.md Section 7 or 8 is triggered

Validation:
  - git status --short --untracked-files=all (pre-execution preflight)
  - Manual browser validation — open index.html in browser (file://):
      Existing scenarios (both tours):
        past date → "This date has already passed..."
        blocked date → "This date is not available..."
        unavailable weekday → "This tour does not operate on..."
        capacity exceeded → "This tour has a maximum capacity of..."
        valid available → "This tour is available on..."
      New cross-tour scenarios:
        same date: available for tour A, unavailable weekday for tour B
        same party size: within tour A capacity, exceeds tour B capacity
  - git diff --cached --name-only (after staging)
  - git diff --cached --check (after staging)
  - git diff --check (before commit)
  - git show --stat --oneline --name-only HEAD (after commit)
  - git status --short and git status -sb (after commit)

Commit Rule:
  One commit authorized by Trigger after full validation evidence is reported.
  Message: docs: prove tour availability multi-tour behavior (Trigger-authorized message, 2026-05-07)
  Manual browser validation completed by Trigger before commit authorization.
```

---

## Completed Items

| ID | Title | Evidence |
| --- | --- | --- |
| TAM-002 | Implement Tour Availability Mini MVP | Trigger confirmed Remote DONE; commit `8b22644 feat: implement tour availability mini mvp` pushed to `origin/main`; working tree clean after push; no TAM-003 READY task opened |
| TAM-002A | Refine Tour Availability Rules Before Implementation | Trigger confirmed Remote DONE; commit `4bb5efc docs: refine tour availability business rules` pushed to `origin/main`; working tree clean after push; no TAM-002 READY task opened |
| TAM-001 | Define Tour Availability Mini Product Instance | Trigger confirmed Remote DONE; commit `862d848 docs: define tour availability mini product instance` pushed to `origin/main`; working tree clean after push; no TAM-002 READY task opened |

---

## Blocked Items

| ID | Blocker | Needed to Unblock |
| --- | --- | --- |
| None | None | None |

---

## TAM Evolution Track — Future Items

TAM-003 is READY above. TAM-004 through TAM-006 are Future only. Do not promote without a new Discussion Gate and explicit Trigger authorization.

| ID | Title | Status | Notes |
| --- | --- | --- | --- |
| TAM-004 | Refactor Availability Rules If Evolution Pressure Appears | Future only, not READY | Open only if TAM-003 reveals genuine structural pressure; do not open preemptively |
| TAM-005 | Add Evolution Validation Pack | Future only, not READY | Formal validation artifact; depends on TAM-003 DONE |
| TAM-006 | Portfolio Readiness Review | Future only, not READY | External-facing packaging; depends on TAM-005 DONE |

---

## Task Definition Format

Every task promoted to READY must include all of the following fields:

```text
ID:                [TAM-XXX]
Title:             [Concise title in English]
Status:            READY
Goal:              [One sentence: what this task produces and why]
Scope:
  - [File or action explicitly permitted]
Out-of-Scope:
  - [File or action explicitly forbidden]
Definition of Done:
  - [Measurable criteria - what must be true for DONE]
Validation:
  - [Commands or checks the executor must run and report]
Commit Rule:
  - [One coherent commit. Message format: docs/feat/fix: description]
```

---

## Next Process Step

TAM-003 implementation complete. Manual browser validation completed by Trigger. Commit authorized. Commit with message `docs: prove tour availability multi-tour behavior`. Report post-commit state. Await push authorization. Trigger confirms Remote DONE. Do not promote TAM-004, TAM-005, or TAM-006 to READY without a new Discussion Gate.
