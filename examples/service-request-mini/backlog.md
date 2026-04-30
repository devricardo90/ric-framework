# Backlog

**Project**: Service Request Mini

**Last Updated**: 2026-04-30 (RIC-020A review in progress)

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
| RIC-020A | Review Service Request Mini Against Official Example Rule | Local DONE pending local commit | Apply the RIC-019A official example review rule to Service Request Mini and classify its current role using evidence only. | `git status --short`; `git status -sb`; `git diff --stat`; `git diff --check`; `git diff -- examples/service-request-mini/app/`; confirm no app code changed. | Trigger authorized one local review/classification commit only for RIC-020A. |

---

## Completed Items

| ID | Title | Evidence |
| --- | --- | --- |
| SRM-003 | Document Service Request Mini Demo and Validation Pack | Trigger confirmed Remote DONE; commit `2388ca7 docs: add service request mini demo validation pack` pushed to `origin/main`; documentation package added; working tree clean after push; no SRM-004 or new READY task opened |
| SRM-002 | Implement Minimal Browser-Native Request Flow | Trigger approved Remote DONE; created `app/index.html`, `app/styles.css`, `app/app.js`; browser validation confirmed by Trigger; `git diff --check` PASS; push `f415b4f..777cc94 main -> main`; `main` synchronized with `origin/main` |
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
| SRM-004 | To be defined by future Discussion Gate | Future only, not READY | No approved goal yet. | Do not open without explicit Trigger approval. |

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

RIC-020A is the active review task and is Local DONE pending local commit. SRM-003 remains Remote DONE at `2388ca7`. SRM-004 is future only, not READY. No feature evolution task is open.
