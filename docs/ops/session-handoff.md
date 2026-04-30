# Session Handoff

## Current Objective

Maintain repository after RIC-015B Local DONE. Push is not authorized yet.

## Active Task

ID: None

Title: None

Status: Idle

## Last Completed Action

Trigger approved RIC-015B as Local DONE. Created `docs/ops/product-instance-boot-rules.md` defining what a Product Instance is, where it lives, five boot-required files, lifecycle files, product-to-execution sequence, first READY criteria, boot prohibitions, and Trigger approval requirements. Updated operational records.

## Current State

RIC-015B is Local DONE by Trigger approval. Commit is authorized with message `docs: define product instance boot rules`. Push is not authorized yet.

## Files Changed

- `docs/ops/product-instance-boot-rules.md` (new)
- `STATUS.md`
- `backlog.md`
- `docs/ops/session-handoff.md`
- `docs/ops/execution-log.md`

## Commands Executed

- `git status --short`
- `git status -sb`
- `git log --oneline -3`
- Read `docs/ops/boot-rules.md` to confirm no overlap with new document.
- `git diff --check`
- `git status --short`
- Current session read required startup files.
- Current session re-read `docs/ops/product-instance-boot-rules.md` and `docs/ops/boot-rules.md`.
- Current session corrected non-ASCII arrows/dashes in the new document and aligned the RIC-015B state wording with the repository Local DONE rule.
- Current session ran `git diff --check`, `git status --short`, and scope checks for protected paths.
- Trigger approved RIC-015B as Local DONE and authorized local commit `docs: define product instance boot rules`.

## Validation Result

- Pre-execution `git status --short` was clean.
- `git diff --check` PASS (LF/CRLF warnings only).
- `git status --short` shows only authorized files modified or untracked.
- Current session `git diff --check` PASS (LF/CRLF warnings only).
- Current session `git status --short` shows only authorized files modified or untracked.
- Current session protected-path check shows no changes in `templates/project/`, `templates/prompts/`, `examples/sample-project/`, `AGENTS.md`, or `README.md`.
- Final pre-commit validation for RIC-015B closure required: `git diff --check` and `git status --short`.

## Pending Decisions for the Trigger

- Whether to push RIC-015B local commit to `origin/main`.
- Whether to open any future example task via Discussion Gate.

## Blockers

- None recorded.

## Next 3 Steps

1. Create authorized local commit: `docs: define product instance boot rules`.
2. Report commit hash and post-commit git state to Trigger.
3. Wait for Trigger direction before any push or new task.

## Do Not Do Next

Do not push without Trigger authorization. Do not create `examples/<product-slug>/` or any product. Do not open RIC-016A without Trigger approval.

## Resume Instruction for Next Agent

Read operational files. RIC-015B is Local DONE by Trigger approval. Commit is authorized if not already created. Push is not authorized. Do not create product/example scope or open RIC-016A.
