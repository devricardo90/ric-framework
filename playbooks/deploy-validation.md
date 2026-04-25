# Deploy Validation

Use this playbook before and after deployment.

## Before Deploy

1. Confirm the target version or commit.
2. Confirm the target environment.
3. Review required validation evidence.
4. Check known risks and blockers.
5. Confirm rollback or recovery notes.

## After Deploy

1. Record deployment date and environment in `version-matrix.md`.
2. Run required health checks or manual checks.
3. Record evidence in `execution-log.md`.
4. Update `STATUS.md`.
5. Add handoff notes for the deployed state.

## Deployment Is Not Complete Until

- Version matrix is updated.
- Validation evidence is recorded.
- Known risks are visible.
- Rollback or recovery notes are available when relevant.
