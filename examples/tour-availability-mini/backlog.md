# Backlog

**Project**: Tour Availability Mini

**Last Updated**: 2026-05-01 (TAM-002A active)

---

## Governance Rules

- The Trigger is the only authority allowed to promote a task to READY.
- The Trigger is the only authority allowed to mark a task as DONE.
- Only one task may be READY or IN_PROGRESS at a time.
- Agents may recommend next work but must not open scope without Trigger approval.
- Every task promoted to READY must have: ID, Title, Status, Goal, Scope, Out-of-Scope, Definition of Done, Validation, and Commit Rule.

---

## Active Items

| ID | Title | Status | Goal | Validation | Commit Rule |
| --- | --- | --- | --- | --- | --- |
| TAM-002A | Refine Tour Availability Rules Before Implementation | IN_PROGRESS — awaiting Trigger review | Create `business-rules.md` to resolve all open business rule questions before implementation begins. | `git status --short`; `git diff --check`; `git diff --stat`; confirm no app/code files created; confirm no TAM-003 READY task opened. | One documentation commit authorized by Trigger after review. Do not commit without authorization. |

---

## Completed Items

| ID | Title | Evidence |
| --- | --- | --- |
| TAM-001 | Define Tour Availability Mini Product Instance | Trigger confirmed Remote DONE; commit `862d848 docs: define tour availability mini product instance` pushed to `origin/main`; working tree clean after push; no TAM-002 READY task opened. |

---

## Blocked Items

| ID | Blocker | Needed to Unblock |
| --- | --- | --- |
| None | None | None |

---

## Recommended Next Items

Items that have been identified but are not READY. Trigger must approve before promoting.

| ID | Title | Status | Goal | Notes |
| --- | --- | --- | --- | --- |
| TAM-002 | Implement Tour Availability Mini MVP | Future only, not READY | Implement the browser-native availability checker using plain HTML/CSS/JS. | Do not open without explicit Trigger approval. Business rules are now defined in `business-rules.md`. Default stack recommendation is documented in `stack-decision.md`. |

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

TAM-002A is the only active task and is IN_PROGRESS awaiting Trigger review. TAM-001 is Remote DONE at `862d848`. TAM-002 is Future only, not READY. TAM-003 is not open. No feature evolution task is open. Do not commit, push, or promote TAM-002 without Trigger authorization.
