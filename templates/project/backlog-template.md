# Backlog

**Project**: [Project name]

**Last Updated**: [YYYY-MM-DD]

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
| None | None | None |

---

## Blocked Items

| ID | Blocker | Needed to Unblock |
| --- | --- | --- |
| None | None | None |

---

## Recommended Next Items

Items that have been identified but are not yet READY. Trigger must approve before promoting.

| ID | Title | Notes |
| --- | --- | --- |
| [TODO] | [TODO] | Use Discussion Gate before promoting |

---

## Task Definition Format

Every task promoted to READY must include all of the following fields:

```
ID:                [PROJECT-XXX]
Title:             [Concise title in English]
Status:            READY
Goal:              [One sentence: what this task produces and why]
Scope:
  - [File or action explicitly permitted]
Out-of-Scope:
  - [File or action explicitly forbidden]
Definition of Done:
  - [Measurable criteria — what must be true for DONE]
Validation:
  - [Commands or checks the executor must run and report]
Commit Rule:
  - [One coherent commit. Message format: docs/feat/fix: description]
```

---

## Next Process Step

[TODO: Describe current state. Example: "No task is active. No task is READY. Use Discussion Gate before promoting any next item."]
