# Post-Commit and Remote DONE Closure Rules

This document defines the formal rules for task closure in the RIC Framework, covering the complete sequence from pre-commit through Remote DONE confirmation.

---

## 1. Definitions

### Local DONE

A task is Local DONE when all of the following are true:

- All work authorized in the task scope is complete.
- All required validation has been run and passed.
- All operational records have been updated to reflect the completed state.
- The authorized commit has been created with the Trigger-approved message.
- The working tree is clean after the commit.
- The agent has reported the clean committed state to the Trigger.
- The Trigger has confirmed the Local DONE state based on that report.

Local DONE does not require a push. It does require a clean working tree and a committed state.

### Remote DONE

A task is Remote DONE when all of the following are true:

- The task is Local DONE.
- The Trigger has authorized the push.
- The push to `origin/main` has succeeded.
- Post-push verification confirms:
  - `git status --short` is clean.
  - `git status -sb` shows `## main...origin/main` with no `ahead` or `behind` indicator.
  - `git log --oneline -3 origin/main` confirms the expected commits are on `origin/main`.

Remote DONE is a repository state, not a claim in an operational record. The agent reports it to the Trigger; the Trigger confirms it.

Remote DONE must not be recorded as fact before the push succeeds and post-push verification has been completed.

---

## 2. Correct Closure Sequence

The authorized sequence for closing any task is:

```
1. Complete all work within approved scope.
2. Run all required validation commands and confirm PASS.
3. Update operational records to reflect task completion state.
   - Include: task status, files changed, commands executed, validation evidence.
   - Include: pending Trigger decisions (push authorization, next task).
   - Do NOT include: post-commit hash, git log after commit, Remote DONE state.
4. Run git diff --check. Confirm PASS.
5. Run git status --short. Confirm the working tree contains only authorized modified, added, deleted, or untracked files.
6. Report to Trigger. Wait for commit authorization.
7. On Trigger authorization: create the commit with the approved message.
8. Run git status --short. Confirm working tree is clean.
9. Report: commit hash, files committed, git status, git log --oneline -3.
   Stop. Do not edit any file.
10. Wait for Trigger push authorization.
11. On Trigger authorization: run git push origin main.
12. Run post-push verification: git status --short, git status -sb, git log --oneline -3.
13. Report Remote DONE state to Trigger. Stop. Do not edit any file.
14. If Trigger requires operational records to reflect Remote DONE: wait for explicit
    authorization of a separate closure commit before editing any file.
```

---

## 3. What Goes Into the Task Commit

The task commit contains:

- All files created or modified as part of the task scope.
- All operational record updates that reflect the task state at the moment of commit:
  - `backlog.md`: task moved to Completed with evidence summary.
  - `STATUS.md`: last completed task, idle state.
  - `docs/ops/session-handoff.md`: updated objective, last action, validation result.
  - `docs/ops/execution-log.md`: full execution record including all validation evidence run so far.
  - Product Instance files: `backlog.md`, `status.md`, `session-handoff.md`, `validation-gates.md`.

The task commit does NOT contain:

- The post-commit hash of itself (a commit cannot reference its own hash before it exists).
- Remote DONE state (push has not happened yet at commit time).
- `git log` output from after the commit.
- Any file that was not staged before the commit command was run.

---

## 4. The Post-Commit Hash Problem

After a commit is created, its hash is known. Recording that hash in operational records requires editing a file and creating another commit. This pattern must not be used without explicit Trigger authorization.

**Prohibited pattern:**
```
commit A (authorized)
  -> agent edits execution-log to record hash of commit A
  -> commit B (not authorized) "docs: record post-commit evidence"
```

**Correct pattern:**
```
commit A (authorized)
  -> agent reports hash of commit A to Trigger in text
  -> Trigger receives hash via report; no additional commit needed
  -> if Trigger requires the hash in the repo: Trigger explicitly authorizes a closure commit
```

The report to the Trigger is sufficient evidence. A commit is a durable record; the git log preserves the hash permanently. Recording the hash again inside the repo adds no information that is not already in the git log.

---

## 5. What Must Not Be Edited After the Commit Without Authorization

After the task commit is created and before the push:

- No operational record may be edited without Trigger authorization.
- No new commit may be created without Trigger authorization.
- The agent must stop and report the commit state.

After the push:

- The agent must verify the repository state and report it to the Trigger.
- The agent must not edit the repository.
- Remote DONE can be reported only after successful push and verification.
- No operational record may be edited without Trigger authorization.
- No new commit may be created without Trigger authorization.
- The agent must stop and report the Remote DONE state.

Default post-push behavior is verification and report only. Repository edits after push require a separate Trigger-authorized operational commit.

Any edit to any file after the task commit - including operational records - constitutes a new change requiring a new authorized commit. That commit requires explicit Trigger authorization before staging or committing.

---

## 6. Remote DONE State in Operational Records

Remote DONE is a repository state confirmed by observation, not by writing to a file.

**The agent confirms Remote DONE by running verification commands and reporting to the Trigger.**
**The agent does not confirm Remote DONE by editing files.**

If the Trigger decides that operational records must reflect Remote DONE in a committed state, the Trigger must explicitly authorize a separate closure commit. That commit:

- Has its own Trigger-approved message (e.g., `docs: record <TASK-ID> remote done state`).
- Contains only operational record updates.
- Must pass `git diff --check` and `git status --short` scope check before staging.
- Is pushed separately, also with explicit Trigger authorization.

---

## 7. When a Separate Operational Closure Commit Is Necessary

A separate operational closure commit is necessary when:

- The Trigger explicitly requests that operational records reflect Remote DONE in the repository.
- An operational record divergence is detected after push that cannot wait for the next task.

A separate operational closure commit is NOT automatically required after every push. The default behavior after push is: report state to Trigger, stop, wait for instruction.

---

## 8. Working Tree Clean After Push

"Working tree clean after push" is a required condition for Remote DONE confirmation.

If the working tree is not clean after push, the agent must:

1. Report the dirty state to the Trigger immediately.
2. List the modified or untracked files.
3. Not stage, commit, or discard any file without Trigger instruction.
4. Wait for Trigger decision: authorize a closure commit, authorize discard, or defer to next session.

A dirty working tree after push is not an error that the agent resolves unilaterally.

---

## 9. Difference Between Repository Evidence and Trigger Report Evidence

There are two ways evidence is recorded in this framework:

| Type | Where | Purpose | Requires commit |
| --- | --- | --- | --- |
| Repository evidence | `docs/ops/execution-log.md` and Product Instance files, committed | Permanent, auditable history in the git log | Yes |
| Trigger report evidence | Text message in the conversation | Immediate operational visibility for the Trigger | No |

Post-commit and post-push state (hash, log, clean working tree confirmation) is Trigger report evidence. It does not require repository evidence unless the Trigger explicitly requests it.

This separation prevents the loop where an agent creates a commit to record evidence of a commit.

---

## 10. Quick Reference

| Moment | Allowed | Not Allowed Without Authorization |
| --- | --- | --- |
| Before commit | Edit operational records, run validation | Stage files outside approved scope |
| After commit, before push | Report state to Trigger | Edit any file, create any commit |
| After push | Report Remote DONE state to Trigger | Edit any file, create any commit |
| After Trigger authorizes closure commit | Edit only authorized operational files, commit, push | Edit files outside authorized list |

---

## 11. Authority

- Only the Trigger may authorize a commit.
- Only the Trigger may authorize a push.
- Only the Trigger may authorize a separate operational closure commit after push.
- The agent reports state. The Trigger decides what gets committed.
