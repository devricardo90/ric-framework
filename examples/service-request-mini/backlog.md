# Backlog

**Project**: Service Request Mini

**Last Updated**: 2026-04-30

---

## Governance Rules

- The Trigger is the only authority allowed to promote a task to READY.
- The Trigger is the only authority allowed to mark a task as DONE.
- Only one task may be READY or IN_PROGRESS at a time.
- Agents may recommend next work but must not open scope without Trigger approval.
- Every task must have: ID, Title, Status, Goal, Scope, Out-of-Scope, Definition of Done, Validation, and Commit Rule.

---

## Active Items

| ID | Title | Status | Goal | Validation | Commit Rule |
| --- | --- | --- | --- | --- | --- |
| None | None | None | None | None | None |

---

## Completed Items

| ID | Title | Evidence |
| --- | --- | --- |
| SRM-001 | Define Stack and Validation Plan for Service Request Mini | Trigger approved DONE; compared four stack options; approved plain HTML/CSS/JS with browser `localStorage`; defined validation plan for a future no-build implementation; no code, dependencies, backend, database, authentication, deploy, workflow, or automation created; `git diff --check` PASS |

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
| SRM-002 | Implement Local Browser MVP for Service Request Mini | Recommended | Create the first local browser-only implementation of the request creation, list, status update, and reload persistence flow. | Not READY. Depends on Trigger approval of SRM-001 and a separate implementation scope. |

---

## Task Definition Format

Every task promoted to READY must include all of the following fields:

```text
ID:                [PROJECT-XXX]
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

SRM-001 is DONE after Trigger approval. No task is active. No task is READY. `SRM-002` is Recommended only.
