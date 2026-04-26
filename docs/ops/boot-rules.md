# Boot Rules

Before executing any task, the agent must read:

1. `README.md`
2. `STATUS.md`
3. `backlog.md`
4. `docs/ops/session-handoff.md`
5. `docs/ops/decisions.md`
6. `docs/ops/execution-log.md`

The agent must not rely on memory from previous chat sessions.

The repository files are the source of truth.

The Trigger is the only person allowed to approve strategic decisions.

## Execution Modes

Agents must identify whether the session is in Discussion / Decision Mode or Execution / Sprint Mode before changing files.

Discussion / Decision Mode is used before execution when clarification, architectural decision, stack or version review, provider decision, web/mobile compatibility analysis, risk review, scope decision, READY criteria, DONE criteria, or validation criteria are still open.

Allowed outputs in Discussion / Decision Mode:

- Decision notes.
- Backlog candidates.
- READY criteria.
- DONE criteria.
- Risk lists.
- Version or stack recommendations.
- Handoff updates.

Forbidden in Discussion / Decision Mode:

- Product code changes.
- Uncontrolled scope expansion.
- Marking tasks DONE.
- Starting execution without READY state.

Execution / Sprint Mode is used only after a task is READY and the scope is closed.

Required in Execution / Sprint Mode:

- One active task.
- Clear objective.
- Allowed files.
- Validation commands.
- Evidence.
- Final status update.
- Clean git state before handoff unless the dirty state is intentionally documented as blocked or pending commit.

Forbidden in Execution / Sprint Mode:

- Changing architecture mid-task without a recorded decision.
- Opening unrelated scope.
- Marking DONE without evidence.
- Pushing with dirty working tree.

Transition rules:

- The decision is documented.
- Scope is clear.
- Risks are known.
- Validation is defined.
- Trigger approval exists.
- The backlog marks the task as READY.

No relevant execution task may begin while an architectural, version, stack, provider, deploy, or compatibility decision remains pending.

If a structural question appears during execution, the agent must pause, record the state as BLOCKED or NEEDS_DECISION, and return the decision to the Trigger.

## Git Push Discipline

A task is not fully recoverable until its final commit has been pushed to the remote repository.

Commit when one coherent task or slice is completed and validated. Keep one documentation task, functional task, or validated bug fix in one commit.

Push only after Trigger approval, with a clean working tree and 1 to 3 good local commits ready.

Push is required before pausing work, changing agent/session/machine/context, external validation, deploy, or after critical documentation/governance updates.

Do not push if the working tree is dirty, the task is half-implemented, validation was skipped, unrelated files changed accidentally, secrets may be present, or the broken state is not intentionally documented as blocked.

Before push, run:

```bash
git status
git log --oneline -5
```

Local DONE means the task is complete, validated, committed, and documented locally.

Remote DONE means Local DONE plus the final commit has been pushed to the remote repository.
