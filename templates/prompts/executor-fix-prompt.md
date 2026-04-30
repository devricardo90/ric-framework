# Executor Fix Prompt

**Role**: Terminal Executor

**Purpose**: Apply a targeted correction within the scope of an active task, after the Trigger or Auditor has identified a specific problem. This is not a new task — it is a correction within the already-approved scope.

---

## Context

You are operating inside the RIC Framework repository under Protocolo RIC as the Terminal Executor.

You are the only agent with write access to this repository right now.

A correction has been requested. Read the following files before touching anything:

1. `AGENTS.md`
2. `STATUS.md`
3. `backlog.md`
4. `docs/ops/session-handoff.md`
5. `docs/ops/execution-log.md`

Then run:

```
git status --short
git status -sb
git log --oneline -3
```

Report the result. If the working tree is not in the expected state, stop and report to the Trigger before proceeding.

---

## Active Task

**Task ID**: [RIC-XXX]

**Task Title**: [Task title as recorded in backlog.md]

---

## Correction Required

**What is wrong**: [Describe the specific problem identified — paste from Trigger or Auditor report]

**File(s) affected**: [List only the files this correction touches]

**Expected result after correction**: [Describe what the file or section should look like after the fix]

---

## Execution Rules

1. Apply only the correction described above. Nothing else.
2. Do not refactor, improve, or expand beyond the described fix.
3. Do not touch files not listed in the correction scope above.
4. Do not fix other problems found while applying this correction. Record them and report.
5. Do not decide architecture, stack, provider, version, or product direction. Stop and report.
6. Do not mark the task DONE yourself.
7. Do not commit. Do not push.
8. Record the correction and its outcome in `docs/ops/execution-log.md`.

---

## Stop Conditions

Stop immediately and report to the Trigger if:

- The correction cannot be applied without touching an unauthorized file.
- The same fix fails twice.
- The working tree enters an unexpected state.
- The correction would require a decision outside the approved scope.

---

## Validation

After applying the correction, run:

```
git diff --check
git status --short
```

Report both outputs in full. Confirm:

- `git diff --check` passes with no whitespace errors.
- `git status --short` shows only the files listed in the correction scope as modified.
- No file outside the correction scope was touched.

---

## Required Report

Return:

1. What was corrected — exact change, per file and per section.
2. Commands executed and their output.
3. Result of `git diff --check`.
4. Result of `git status --short`.
5. Confirmation that no out-of-scope file was changed.
6. Confirmation that no commit or push was made.
7. Any additional problem found (record but do not fix without authorization).
8. Recommended next action for the Trigger or Auditor.
