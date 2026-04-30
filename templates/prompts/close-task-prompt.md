# Close Task Prompt

**Role**: Terminal Executor

**Purpose**: Finalize a task after the Trigger has approved DONE. Update operational records, run final validation, and create the authorized local commit. Do not push unless push is separately authorized.

---

## Context

You are operating inside the RIC Framework repository under Protocolo RIC as the Terminal Executor.

The Trigger has approved this task as DONE. You are now responsible for:
- Updating operational records to reflect DONE.
- Running final validation.
- Creating the authorized local commit.

You are not authorized to push unless the Trigger explicitly states so in this prompt.

Read the following files before touching anything:

1. `STATUS.md`
2. `backlog.md`
3. `docs/ops/session-handoff.md`
4. `docs/ops/execution-log.md`

Then run:

```
git status --short
git status -sb
git log --oneline -3
```

Confirm the state matches what was reported at the end of execution. If it does not, stop and report to the Trigger before proceeding.

---

## Task Being Closed

**Task ID**: [RIC-XXX]

**Task Title**: [Task title as recorded in backlog.md]

**Authorized Commit Message**: [Exact commit message authorized by Trigger — do not alter]

**Push Authorized**: [YES / NO — if YES, push is authorized immediately after commit; if NO, stop after commit]

---

## Closure Actions

Update the following operational records to reflect DONE:

### backlog.md

- Move task from Active Items to Completed Items.
- Evidence summary must include:
  - Trigger approval of DONE.
  - Files created or modified.
  - Validation result (`git diff --check` PASS).
  - Confirmation that no additional READY task was opened.

### STATUS.md

- Update Current Canonical Status to reflect DONE.
- Update Last Completed Task section.
- Update Local HEAD if changed by this commit.

### docs/ops/session-handoff.md

- Update Current Objective to reflect idle state.
- Update Active Task to None.
- Update Last Completed Action.
- Update Current State.
- Update Files Changed.
- Update Commands Executed.
- Update Pending Decisions for the Trigger.
- Update Next 3 Steps.
- Update Do Not Do Next.
- Update Resume Instruction for Next Agent.

### docs/ops/execution-log.md

- Prepend a new closure entry for this task.
- Include: Actor, Task ID, Title, Status, Work Performed, Commands Executed, Validation Evidence, Closure Decision, Risks or Gaps, Next Action.

---

## Pre-Commit Validation

Before creating the commit, run:

```
git diff --check
git status --short
```

Confirm:

- `git diff --check` passes.
- `git status --short` shows only the authorized operational records and any new files from this task as modified or untracked.
- No file outside the approved scope is present in the diff.

---

## Commit

Create the commit with the exact authorized message:

```
git add [list each file explicitly]
git commit -m "[authorized commit message]"
```

Do not use `git add .` or `git add -A`. Stage only the files belonging to this task.

---

## Post-Commit Validation

After the commit, run:

```
git status --short
git status -sb
git log --oneline -3
```

Report all outputs. Confirm:

- Working tree is clean.
- Branch is ahead of `origin/main` by the expected number of commits.
- The new commit appears at the top of the log.

---

## If Push Is Authorized

Run:

```
git push origin main
```

Then run:

```
git status --short
git status -sb
git log --oneline -3
```

Report the push result and all outputs. Confirm:

- Push succeeded.
- `git status -sb` shows `## main...origin/main` (no ahead/behind).
- Working tree is clean.

Report Remote DONE to the Trigger. Do not edit operational records after push unless a separate reconciliation task is approved.

---

## Required Report

Return:

1. Hash of the commit created.
2. Files included in the commit.
3. Result of pre-commit `git diff --check`.
4. Result of pre-commit `git status --short`.
5. Result of post-commit `git status --short`, `git status -sb`, `git log --oneline -3`.
6. Push result and post-push validation (if push was authorized).
7. Confirmation that no file outside the approved scope was altered after the commit.
8. Confirmation that no new READY task was opened.
9. Statement of whether task is Local DONE or Remote DONE.
