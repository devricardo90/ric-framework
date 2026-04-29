# MVP Scope Rules

This document defines how RIC Framework limits MVP scope.

MVP scope exists to prevent inflated scope, premature execution, and excessive documentation. An MVP should be the smallest useful product slice that can prove value for a known user with clear acceptance criteria.

## Meaning of MVP

In RIC Framework, an MVP is not the smallest thing that can be built technically.

An MVP is the smallest coherent product slice that:

- Addresses a defined problem.
- Serves a known user or stakeholder.
- Delivers observable value.
- Has bounded scope.
- Can be validated with acceptance criteria.
- Leaves future work explicit instead of hidden inside the current task.

## Scope Categories

MVP:
The approved smallest useful product slice for the current task or phase. It is allowed for execution only when product clarity and validation criteria exist.

Future version:
Useful work that may matter later but is not required to prove the current MVP. It must be recorded outside the current execution scope.

Nice-to-have:
Helpful or polished behavior that is not required for the current value proof. Nice-to-have items are not authorized unless the Trigger explicitly moves them into scope.

Forbidden scope:
Work that must not be done in the current task. This includes unapproved architecture changes, unapproved stack choices, unapproved automation, unrelated refactors, decorative documentation, or features outside the approved product slice.

## Minimum MVP Questions

Before an MVP can move toward execution, the following questions should be answered:

- What is the smallest useful outcome?
- Which user receives value from that outcome?
- What problem does this slice solve now?
- What must be true for the slice to be accepted?
- What is deliberately excluded?
- What can wait for a future version?
- What would make this slice too large?

If these questions cannot be answered, the work must remain in Discussion / Decision Mode.

## Signs of Inflated Scope

Scope is likely inflated when:

- The task tries to solve multiple unrelated problems.
- Future-version work is treated as required now.
- Nice-to-have details are framed as blockers.
- Agents must invent missing product context to continue.
- Architecture, stack, or automation is introduced before product need is clear.
- Documentation expands into broad theory instead of supporting the current decision.
- Acceptance criteria are too broad to validate in one coherent slice.
- The task requires creating files, folders, examples, templates, or workflows not explicitly approved.

When these signals appear, the agent must pause and return the scope decision to the Trigger.

## Agent Scope Discipline

Agents must not add features, documents, folders, scripts, workflows, templates, examples, refactors, or automation outside the approved MVP scope.

Agents may recommend future work, but they must not silently move future-version or nice-to-have items into execution.

If the requested scope is unclear, the agent must ask for clarification or record the task as blocked. Execution must not proceed by guessing.

## MVP Blockers

Execution is blocked when:

- The MVP outcome is not defined.
- The target user or stakeholder is unknown.
- The current value proof is unclear.
- The scope includes future-version work without approval.
- Nice-to-have items are required without Trigger approval.
- Forbidden scope is mixed into the task.
- Acceptance criteria are missing or not observable.
- Out-of-scope boundaries are not documented.
- The agent would need to decide product priority, architecture, stack, or automation without approval.

When an MVP blocker exists, the correct next step is Discussion / Decision Mode.

## Future Product Discipline Document

The product-to-execution gate remains a future task.

That future document should define the checks required before product context moves into architecture, agents, and execution. It is recommended only and is not READY until the Trigger explicitly promotes it.
