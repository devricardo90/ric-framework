# Backlog

**Project**: Tour Availability Mini

**Last Updated**: 2026-05-01 (TAM-002 implementation complete, awaiting commit authorization)

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
| TAM-002 | Implement Tour Availability Mini MVP | IN_PROGRESS — implementation complete, awaiting commit authorization | Implement the browser-native availability checker using plain HTML/CSS/JS. | `git status --short --untracked-files=all`; explicit file list; `git diff --cached --name-only`; `git diff --cached --check`; `git diff --check`; manual browser validation; post-commit `git show --stat --oneline --name-only HEAD`. | One commit authorized by Trigger after validation. Message: `feat: implement tour availability mini mvp`. Do not commit without authorization. |

---

## Completed Items

| ID | Title | Evidence |
| --- | --- | --- |
| TAM-002A | Refine Tour Availability Rules Before Implementation | Trigger confirmed Remote DONE; commit `4bb5efc docs: refine tour availability business rules` pushed to `origin/main`; working tree clean after push; no TAM-002 READY task opened. |
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
| TAM-003 | Extend Tour Availability Mini | Future only, not READY | Any post-MVP extension. | Do not open without explicit Trigger approval through a new Discussion Gate. |

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

TAM-002 is the only active task and is IN_PROGRESS awaiting Trigger commit authorization. Implementation is complete. Do not commit, push, or open TAM-003 without Trigger authorization.
