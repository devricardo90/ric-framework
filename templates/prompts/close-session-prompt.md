# Close Session Prompt

**Role**: Any agent (Executor or Consultant / Auditor)

**Purpose**: End the current working session cleanly. Update continuity records so the next agent or session can resume from repository files alone, without memory of this session.

---

## Context

You are operating inside the RIC Framework repository under Protocolo RIC.

A session is ending. Before stopping, you must ensure the repository state is fully documented.

Run the following and report:

```
git status --short
git status -sb
git log --oneline -3
```

---

## Session Closure Checklist

Work through each item before finishing.

### Working Tree

- [ ] Working tree is clean, OR
- [ ] Working tree is dirty and the dirty state is intentional, documented, and recorded as blocked or pending commit in `docs/ops/session-handoff.md`.

If the working tree is dirty without a recorded reason, resolve or document before closing.

### Operational Records

Update the following files to reflect the current state accurately:

**docs/ops/session-handoff.md** must contain:

- Current Objective: what remains to be done next.
- Active Task: ID, title, and status (or None if idle).
- Last Completed Action: what was the last meaningful action taken.
- Current State: exact repository state right now.
- Files Changed: all files modified in this session.
- Commands Executed: all significant commands run.
- Validation Result: outcome of the last validation check.
- Pending Decisions for the Trigger: any open questions that need Trigger approval.
- Blockers: any known blockers.
- Next 3 Steps: concrete next actions in order.
- Do Not Do Next: explicit list of actions the next agent must not take without Trigger approval.
- Resume Instruction for Next Agent: one paragraph that tells the next agent exactly what state they are resuming from and what to do first.

**docs/ops/execution-log.md** must contain a new entry if meaningful work occurred in this session:

- Actor.
- Task ID and Title (or session purpose if no formal task).
- Status.
- Work Performed.
- Commands Executed.
- Validation Evidence.
- Closure Decision.
- Risks or Gaps.
- Next Action.

### Commit and Push State

- [ ] No uncommitted changes exist that are not intentionally documented as pending.
- [ ] If commits are pending push, they are recorded in `STATUS.md` and `docs/ops/session-handoff.md`.
- [ ] Push is not performed without Trigger authorization.

### No Unauthorized Actions

- [ ] No new READY task was opened during this session without Trigger approval.
- [ ] No commit was created without Trigger authorization.
- [ ] No push was performed without Trigger authorization.
- [ ] No files outside the approved scope were modified.

---

## Agent Transition Note

If this session is ending because a new agent will take over:

- Verify `docs/ops/session-handoff.md` is complete enough that the next agent can resume without asking any clarifying questions about current state.
- Do not assume the next agent has memory of this session.
- Do not leave the repository in a state where the next agent cannot safely determine what to do next from files alone.
- Codex and Claude Code must not both hold write access to the same branch simultaneously. Confirm which agent will next take ownership before closing.

---

## Required Report

Return:

1. Result of `git status --short`.
2. Result of `git status -sb`.
3. Result of `git log --oneline -3`.
4. Confirmation that `docs/ops/session-handoff.md` is up to date.
5. Confirmation that `docs/ops/execution-log.md` has a current entry if work occurred.
6. List of any pending decisions requiring Trigger approval before the next session begins.
7. Confirmation of whether the repository is Local DONE, Remote DONE, or Idle.
