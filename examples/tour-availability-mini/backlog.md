# Backlog

**Project**: Tour Availability Mini

**Last Updated**: 2026-05-01

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
| TAM-001 | Define Tour Availability Mini Product Instance | Local DONE pending local commit | Create the initial documentation for Tour Availability Mini before any implementation code exists. | `git status --short`; `git diff --check`; `git diff --stat`; confirm no files under `examples/service-request-mini/` changed; confirm no app/code files created; confirm no `package.json` created; confirm no extra READY task opened. | One documentation commit authorized by Trigger after close pass review. Do not commit without authorization. |

---

## Completed Items

| ID | Title | Evidence |
| --- | --- | --- |
| None | None | None recorded yet. |

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
| TAM-002 | Define Stack and Implement Tour Availability Mini MVP | Future only, not READY | Select the approved minimal stack and implement the browser-native availability checker. | Do not open without explicit Trigger approval through a separate Discussion Gate. Default stack recommendation is documented in `stack-decision.md`. |

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

TAM-001 is the only active task and is Local DONE pending local commit. Close pass passed. TAM-002 is Future only, not READY. No feature evolution task is open. Do not commit, push, or promote TAM-002 without Trigger authorization.
