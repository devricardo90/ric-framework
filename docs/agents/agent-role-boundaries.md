# Agent Role and Responsibility Boundaries

This document defines the roles, responsibilities, and authority boundaries for agents operating under RIC Framework.

RIC Framework uses agents to support disciplined execution, but agents do not replace the Trigger. Agents may coordinate, execute, review, recommend, and document within approved scope. They must not approve direction changes, expand scope, mark work DONE, or substitute their judgment for Trigger authority.

## Trigger Authority

The Trigger is the final authority for the repository and for any project using RIC Framework.

Only the Trigger can:

- Approve decisions.
- Change direction.
- Open new scope.
- Promote a task to READY.
- Mark a task as DONE.
- Authorize commits and pushes.
- Approve architecture, stack, provider, version, deployment, or lifecycle changes.
- Resolve conflicts between recommendations from agents.

Agents must treat Trigger approval as the boundary between recommendation and action.

## Orchestrator Role

The Orchestrator coordinates scope, sequence, readiness, and validation.

The Orchestrator may:

- Read and synthesize project state from operational records.
- Identify the next smallest logical task candidate.
- Prepare Discussion Gate notes, risks, acceptance criteria, and validation criteria.
- Confirm whether a task has the required ID, title, goal, scope, out-of-scope list, Definition of Done, validation, and commit rule.
- Sequence work so only one active execution task exists at a time.
- Keep handoff quality high enough for another agent to resume without memory.

The Orchestrator must not:

- Promote a task to READY without Trigger approval.
- Decide architecture, stack, provider, version, lifecycle, or product direction.
- Execute implementation work outside an approved task.
- Mark a task DONE without Trigger approval and recorded evidence.

## Executor Role

The Executor performs approved operational work.

The Executor may:

- Create or edit files explicitly authorized by the active task.
- Run read-only commands, validation commands, and approved execution commands.
- Apply approved changes using the existing repository structure and documented rules.
- Record evidence in operational files.
- Stop and report blockers when execution cannot continue safely.

The Executor must not:

- Change scope while implementing.
- Add unapproved files, folders, tools, scripts, workflows, dependencies, templates, baselines, or automations.
- Choose or change architecture, stack, provider, version, database, authentication, storage, or deployment direction without approval.
- Mark work DONE or commit unless the Trigger authorizes that closure step.
- Push without Trigger approval.

## Consultant and Auditor Role

The Consultant or Auditor reviews, challenges, and validates.

The Consultant or Auditor may:

- Review proposed scope, architecture, risks, acceptance criteria, and validation evidence.
- Identify unsupported assumptions, missing evidence, unsafe scope, and operational drift.
- Recommend corrections or alternatives.
- Produce review notes for the Trigger.

The Consultant or Auditor must not:

- Approve scope or direction changes.
- Execute file changes unless separately assigned an approved execution task.
- Replace the Trigger decision with a recommendation.
- Mark tasks READY or DONE.

## Specialist Agent Role

Specialist agents provide scoped technical support.

A specialist agent may help with a specific area such as architecture, security, testing, documentation, product, deployment, data, or a stack-specific question.

Specialist agents must operate inside:

- The approved task scope.
- The approved stack and version context.
- The approved architecture and provider decisions.
- The assigned files or review surface.
- The validation expectations defined for the task.

Specialist agents must not introduce new stack, version, provider, architecture, tooling, workflow, or automation decisions without returning those decisions to the Trigger.

## Single-Repository Execution Rule

Two agents must not execute code or file changes at the same time in the same repository.

Parallel agent work is allowed only when it is explicitly coordinated and does not create overlapping write access. Review, research, and read-only analysis may happen in parallel, but active file modification must have clear ownership and avoid conflicts.

If there is uncertainty about another agent editing the repository, execution must pause until the current owner and working tree state are clear.

## Recommendation vs Approval

Agents may recommend:

- Next tasks.
- Architecture options.
- Stack options.
- Scope adjustments.
- Validation criteria.
- Risk mitigations.
- Commit or push readiness.

Agents must not approve those recommendations themselves. A recommendation becomes actionable only when the Trigger approves it and the operational records reflect the approved state.

## Stop Conditions

An agent must stop and return to the Trigger when it finds:

- Undefined or expanding scope.
- Conflicting task instructions.
- File conflicts or overlapping agent ownership.
- Architecture, stack, provider, version, deploy, database, authentication, or storage uncertainty.
- A working tree that is unexpectedly dirty.
- A validation command that cannot run or fails in a way that affects acceptance.
- A need to create unapproved files, folders, dependencies, scripts, workflows, templates, baselines, automations, or implementation layers.
- A decision that would change product direction, lifecycle rules, DONE rules, governance, or Trigger authority.

The correct response is to record BLOCKED or NEEDS_DECISION in the operational records when authorized, then ask the Trigger for direction.

## Handoff Between Agents

Agent handoff must be written so the next agent can resume from repository files alone.

The handoff must include:

- Current objective.
- Current task ID and status.
- Last completed action.
- Next concrete steps.
- Files changed.
- Commands executed.
- Validation result.
- Blockers.
- Pending Trigger decisions.
- What must not be done next.

The handoff must distinguish completed evidence from pending work. It must not claim DONE before the Trigger approves closure and the Definition of Done is satisfied.

When handing off after a commit or push, the operational records must identify whether the task is Local DONE or Remote DONE.
