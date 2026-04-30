# Handoff to New Agent Prompt

**Role**: Any agent transferring ownership to a new agent or session

**Purpose**: Transfer repository ownership to a new agent cleanly. The receiving agent must be able to resume from repository files alone. No memory of the previous session is assumed.

---

## Pre-Handoff Requirements (Outgoing Agent)

Before handing off, the outgoing agent must confirm all of the following:

- [ ] Working tree is clean, OR the dirty state is intentional and fully documented with reason, files affected, and next required action.
- [ ] `docs/ops/session-handoff.md` is complete and accurate for the current state.
- [ ] `docs/ops/execution-log.md` has an entry for this session if meaningful work occurred.
- [ ] No in-progress commit is left hanging. Either the commit is created and recorded, or the pending state is documented.
- [ ] No push is pending authorization. If commits are awaiting push, they are recorded in `STATUS.md` and `docs/ops/session-handoff.md`.
- [ ] No new READY task was silently opened.
- [ ] The receiving agent is identified and a single agent will take ownership next.

Two agents must not hold write access to the same repository simultaneously. Confirm the outgoing agent is done before the incoming agent begins.

---

## Handoff Record (Fill Before Submitting to New Agent)

```
Outgoing Agent:    [e.g., Claude Code / Codex / Gemini / session name]
Incoming Agent:    [e.g., Claude Code / Codex / new session name]
Handoff Time:      [date and approximate time]
Repository State:  [clean / dirty — describe if dirty]
Branch:            main
Local HEAD:        [commit hash and message]
origin/main HEAD:  [commit hash and message, or "same as local HEAD"]
Active Task:       [RIC-XXX: title — status] OR None
Pending Push:      [YES — N commits / NO]
Pending Decision:  [Describe or None]
```

---

## Resume Instructions for Incoming Agent

You are operating inside the RIC Framework repository under Protocolo RIC.

You are receiving ownership from a previous agent or session. You have no memory of that session.

Read the following files in this order before taking any action:

1. `AGENTS.md`
2. `STATUS.md`
3. `backlog.md`
4. `docs/ops/session-handoff.md`
5. `docs/ops/decisions.md`
6. `docs/ops/execution-log.md`

Then run:

```
git status --short
git status -sb
git log --oneline -3
```

Report what you find:
- Current canonical status.
- Active task, if any.
- Last completed task.
- Pending decisions or blockers.
- Whether the working tree is clean.
- What action, if any, you recommend next — and whether it requires Trigger approval before proceeding.

---

## Incoming Agent Execution Rules

1. You are the only agent with write access to this repository right now. Confirm no other agent is actively modifying files.
2. Do not begin execution until you have read all required files and confirmed the current state.
3. Do not assume the previous agent's last action was completed successfully. Verify from evidence in files.
4. Do not open a new READY task without Trigger approval.
5. Do not commit or push without Trigger authorization.
6. If the working tree is dirty and the reason is not documented, stop and report to the Trigger before proceeding.
7. If the handoff record above indicates a pending push, confirm with the Trigger before pushing.

---

## Constraints

- Codex and Claude Code must not execute file changes together in the same branch. Only one agent holds write access at a time.
- Handoff is not complete until the incoming agent confirms the state is understood and the outgoing agent has stopped all execution.
- If the state described in the handoff record does not match what `git status` and `git log` report, stop and report the discrepancy to the Trigger before proceeding.
