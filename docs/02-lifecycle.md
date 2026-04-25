# Lifecycle

RIC Framework uses six lifecycle stages: Discovery, Planning, Development, Testing, Deploy, and Handoff.

## Discovery

Capture the project purpose, users, constraints, risks, environments, and assumptions in `PROJECT_CONTEXT.md`.

Outputs:

- Project goal.
- Stakeholders or target users.
- Known constraints.
- Initial risks.
- Success criteria.

## Planning

Translate context into actionable work in `backlog.md` and define delivery expectations.

Outputs:

- Prioritized backlog.
- Acceptance criteria.
- Validation plan.
- Agent assignments if needed.
- Delivery gates.

## Development

Execute scoped work while updating status, decisions, and execution notes.

Outputs:

- Completed changes.
- Updated `STATUS.md`.
- New decisions in `decisions.md`.
- Work notes in `execution-log.md`.

## Testing

Validate the work against acceptance criteria and record evidence.

Outputs:

- Test commands and results.
- Manual verification notes.
- Screenshots or logs when useful.
- Known gaps or risks.

## Deploy

Confirm what version is deployed where and whether it passed required checks.

Outputs:

- Updated `version-matrix.md`.
- Deployment evidence.
- Rollback notes.
- Environment-specific status.

## Handoff

Prepare the project for continuation by another session, agent, or human.

Outputs:

- Updated `session-handoff.md`.
- Current state.
- Completed work.
- Open risks.
- Next recommended action.
