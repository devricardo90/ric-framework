# Product-to-Execution Gate

This document defines the gate that decides when product context is ready to become a READY task and enter Execution / Sprint Mode.

The gate protects RIC Framework from premature execution. It ensures that agents do not use implementation work to resolve missing product direction, MVP boundaries, architecture questions, stack decisions, or validation criteria.

## Gate Definition

The Product-to-Execution Gate is the decision point between product clarification and controlled execution.

A task may move toward READY only when product context is clear enough to define bounded work, expected value, allowed scope, validation, and evidence.

The gate does not replace Trigger approval. It defines the minimum information that must exist before the Trigger can safely promote a task to READY.

## Minimum Criteria Before READY

Before a task is promoted to READY, the following criteria must be documented:

- Problem: the product problem or need is stated clearly.
- User: the affected user, stakeholder, role, or system is identified.
- Value: the intended value or outcome is described.
- MVP boundary: the smallest useful product slice is defined.
- Out of scope: excluded work is explicit.
- Acceptance criteria: observable success conditions exist.
- Risks or open questions: known uncertainty is recorded.
- Allowed files or areas: execution boundaries are known.
- Validation: the required validation command, review, or evidence is defined.
- Commit rule: the expected commit scope is clear.

If any criterion is missing, the task should remain in Discussion / Decision Mode.

## Relationship to Product, MVP, Architecture, Stack, Agents, and Validation

Product defines the problem, user, value, and acceptance criteria.

MVP scope defines the smallest useful slice that should be handled now.

Architecture should respond to product and MVP needs. It must not be used to invent product direction.

Stack decisions require product constraints, compatibility needs, and operational expectations. They must not be selected only because execution wants to start.

Agents can execute bounded work, review evidence, and surface blockers. They must not decide product direction, MVP scope, architecture, stack, or validation criteria without Trigger approval.

Validation proves that the approved task met its criteria. Validation should be known before execution starts.

## Lightweight Gate Checklist

Use this checklist before promoting a task to READY:

- Is the product problem clear?
- Is the user or stakeholder clear?
- Is the intended value clear?
- Is the MVP slice bounded?
- Is future-version work separated from current scope?
- Are nice-to-have items excluded unless explicitly approved?
- Are forbidden-scope items named?
- Are acceptance criteria observable?
- Are allowed files or areas defined?
- Is validation defined?
- Is the commit scope coherent?
- Are open decisions recorded before execution starts?

The checklist is intentionally lightweight. It should prevent unmanaged execution, not become a heavy ceremony.

## READY Blockers

A task must not be promoted to READY when:

- The product problem is vague.
- The user or stakeholder is unknown.
- The intended value is missing.
- The MVP boundary is open-ended.
- Future-version work is mixed into the current task.
- Nice-to-have work is treated as required without approval.
- Forbidden scope is present.
- Acceptance criteria are missing or untestable.
- Architecture, stack, agents, or validation choices are unresolved and relevant to the work.
- Allowed files or execution boundaries are unclear.
- The task asks agents to resolve product gaps during execution.

When a READY blocker exists, the correct state is Discussion / Decision Mode.

## Execution Does Not Fix Product Gaps

Execution / Sprint Mode is for scoped delivery.

It must not be used to discover the product, choose the MVP, settle architecture, select stack, assign strategic agent behavior, or invent validation criteria.

If a product gap appears during execution, the agent must pause, record the blocker, and return the decision to the Trigger.

## Minimum Evidence Before Execution / Sprint Mode

Before Execution / Sprint Mode begins, the repository should contain enough evidence for another agent to understand:

- The active task ID and title.
- The approved goal.
- The approved scope.
- Explicit out-of-scope items.
- The relevant product or MVP context.
- The validation method.
- The expected evidence.
- The allowed files or areas.
- Known blockers or pending decisions.
- The commit rule.

This evidence should be recorded in the backlog, status, handoff, execution log, or the relevant product document before execution starts.

## Future Work

Future work may define reusable templates or examples for product-to-execution handoff, but those artifacts require separate Trigger approval.

No template, example, playbook, script, workflow, stack decision, or automation is authorized by this gate document.
