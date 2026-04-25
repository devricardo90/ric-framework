# Version Discipline

Version discipline keeps project state traceable across commits, releases, deployments, and validation evidence.

## Version Matrix

Use `version-matrix.md` to record:

- Version or release name.
- Commit or artifact reference.
- Environment.
- Deployment date.
- Validation status.
- Known risks.
- Rollback notes.

## Commit Discipline

Commits should represent coherent units of work. A commit message should explain the type of change and the affected area.

Recommended examples:

- `docs: initialize ric framework structure`
- `feat: add project status dashboard`
- `fix: correct deployment health check`
- `test: add validation coverage for import flow`

## Release Discipline

Before a release, confirm:

- Backlog item is complete.
- Validation evidence exists.
- Version matrix is updated.
- Known risks are documented.
- Handoff notes explain the deployed state.

## Environment Tracking

When a project has multiple environments, track what is deployed to each one. Do not assume staging, production, and local state are equivalent.
