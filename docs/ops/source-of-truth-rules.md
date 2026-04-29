# Operational Source of Truth Rules

This document defines how RIC Framework operational records relate to each other during planning, execution, validation, completion, and handoff.

The goal is to prevent state drift between files. Each operational file has a defined authority boundary. When files disagree, agents must use the hierarchy in this document and update the affected operational records inside the approved task scope.

## Source of Truth Hierarchy

`backlog.md` is the primary source of truth for tasks.

It owns:

- Task IDs, titles, status, goals, validation expectations, and commit rules.
- Whether a task is Recommended, READY, active, blocked, or completed.
- The completed-item history and evidence summary for each task.
- The rule that only the Trigger can promote a task to READY or mark it DONE.

`STATUS.md` is an executive summary, not the primary source of truth.

It should summarize:

- The current canonical status.
- The active task, if any.
- The last completed task.
- Known blockers.
- The next recommended action.
- The current Git state as last verified.

If `STATUS.md` conflicts with `backlog.md` about task state, `backlog.md` controls and `STATUS.md` must be corrected in an approved operational update.

`docs/ops/session-handoff.md` is the continuity record between sessions, agents, machines, and interruptions.

It should preserve:

- The current objective.
- The current task ID and status.
- The last completed action.
- The next concrete steps.
- Files changed.
- Commands executed.
- Validation result.
- Blockers.
- Pending Trigger decisions.
- What must not be done next.

`docs/ops/execution-log.md` is the chronological evidence history.

It should record:

- What was done.
- Which commands were executed.
- What validation evidence exists.
- What decisions closed or blocked a task.
- What risks or gaps remain.
- What action should follow.

The execution log is append-only in normal work. Corrections are allowed only when the current task explicitly authorizes operational reconciliation.

## DONE States

Local DONE means the task is complete, validated, committed, and documented locally.

Remote DONE means Local DONE plus the final commit has been pushed to the remote repository and post-push verification confirms the expected Git state.

Operational records must not claim Remote DONE before the push and post-push verification are complete.

## READY Gate

A new READY task requires:

- Discussion Gate or equivalent Trigger-approved decision context.
- A clear task ID, title, goal, scope, out-of-scope list, Definition of Done, validation, and commit rule.
- Explicit Trigger approval to promote the task to READY.

Agents may recommend a next task, but recommendations do not create READY status.

## Clean Working Tree Rule

Execution must not begin with a dirty working tree unless the dirty state is explicitly documented as intentional and within the approved task scope.

Before starting an execution task, agents should verify the Git state. If unexpected changes exist, the agent must stop and report the state instead of mixing unrelated work into the task.

## Permanent Documentation vs Operational Records

Permanent documentation defines reusable framework rules, concepts, lifecycle expectations, and procedures.

Operational records describe the current repository state, task movement, validation evidence, handoff context, and recovery information.

Do not mix them:

- Permanent documentation should not contain session-specific logs, temporary state, local Git status, or pending handoff notes.
- Operational records should not redefine long-term framework rules unless the current task explicitly authorizes an operational source-of-truth update.

When a task creates or changes permanent documentation, operational records may be updated only to record the task state, evidence, files changed, commands executed, blockers, and pending Trigger decisions.
