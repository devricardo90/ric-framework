# Validation Gates

**Project**: [Project name]

**Task**: [TASK-ID — Task Title]

**Date**: [YYYY-MM-DD]

---

## Purpose

This checklist defines the validation checkpoints required before and after each significant step in the execution lifecycle. Complete and record each gate before proceeding to the next phase.

---

## Gate 1 — Pre-Execution

Complete before any file is created or modified.

- [ ] No task is currently READY or IN_PROGRESS other than this one.
- [ ] Working tree is clean. (`git status --short` output: `[paste here]`)
- [ ] Branch is correct. (`git status -sb` output: `[paste here]`)
- [ ] Last three commits are known. (`git log --oneline -3` output: `[paste here]`)
- [ ] Task scope is understood. Approved files are identified.
- [ ] Out-of-scope boundaries are understood.
- [ ] No architecture or stack decision is required that has not been approved.
- [ ] No new dependency is required that has not been approved.

**Gate 1 result**: [PASS / FAIL — describe any failure]

---

## Gate 2 — Post-Execution

Complete after all approved file changes are made, before any commit.

- [ ] `git diff --check` output: `[paste here]` — Result: [PASS / FAIL]
- [ ] `git status --short` output: `[paste here]`
- [ ] Only files listed in the approved scope appear as modified or untracked.
- [ ] No file outside the approved scope was created or modified.
- [ ] No folder was created without explicit authorization.
- [ ] No out-of-scope bug fix, feature, or refactor was introduced.
- [ ] No architecture or stack decision was made silently.
- [ ] All commands run and their outputs are recorded in `execution-log.md`.

**Gate 2 result**: [PASS / FAIL — describe any failure]

---

## Gate 3 — Pre-Commit

Complete after Trigger approves DONE, before creating the commit.

- [ ] Trigger has explicitly approved DONE.
- [ ] Authorized commit message is confirmed: `[paste exact message]`
- [ ] `git diff --check` output: `[paste here]` — Result: [PASS / FAIL]
- [ ] `git status --short` output: `[paste here]`
- [ ] Operational records (`backlog.md`, `STATUS.md`, `session-handoff.md`, `execution-log.md`) have been updated to reflect DONE.
- [ ] Only approved files are staged.

**Gate 3 result**: [PASS / FAIL — describe any failure]

---

## Gate 4 — Post-Commit

Complete immediately after the commit is created.

- [ ] Commit hash: `[paste here]`
- [ ] `git status --short` output: `[paste here]` — working tree is clean.
- [ ] `git status -sb` output: `[paste here]` — branch is ahead by expected number of commits.
- [ ] `git log --oneline -3` output: `[paste here]`
- [ ] No files were modified after the commit.

**Gate 4 result**: [PASS / FAIL — describe any failure]

---

## Gate 5 — Pre-Push

Complete before pushing, only if push is authorized.

- [ ] Trigger has explicitly authorized this push (separate from DONE authorization).
- [ ] `git status -sb` shows ahead by expected count only: `[paste here]`
- [ ] `git log --oneline origin/main..HEAD` shows only authorized commits: `[paste here]`
- [ ] Working tree is clean.
- [ ] No unrelated commits are included.

**Gate 5 result**: [PASS / FAIL — describe any failure]

---

## Gate 6 — Post-Push

Complete after push is confirmed.

- [ ] Push result: `[paste output]`
- [ ] `git status -sb` shows `## main...origin/main` (no ahead/behind): `[paste here]`
- [ ] `git status --short` is clean: `[paste here]`
- [ ] `git log --oneline -3` shows commit on `origin/main`: `[paste here]`
- [ ] Remote DONE reported to Trigger.
- [ ] No operational records were edited after push.

**Gate 6 result**: [PASS / FAIL — describe any failure]

---

## Summary

| Gate | Description | Result |
| --- | --- | --- |
| Gate 1 | Pre-Execution | [PASS / FAIL / Skipped] |
| Gate 2 | Post-Execution | [PASS / FAIL / Skipped] |
| Gate 3 | Pre-Commit | [PASS / FAIL / Skipped] |
| Gate 4 | Post-Commit | [PASS / FAIL / Skipped] |
| Gate 5 | Pre-Push | [PASS / FAIL / Skipped] |
| Gate 6 | Post-Push | [PASS / FAIL / Skipped] |
