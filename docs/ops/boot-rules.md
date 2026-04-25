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
