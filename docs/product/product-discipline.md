# Product Discipline Core

This document defines the core product discipline for RIC Framework.

Product comes before architecture, stack, agents, execution, and validation. Execution must serve a clear product intent instead of turning vague ideas into unmanaged work.

## Meaning of Product

In RIC Framework, a product is not just an idea, a feature request, a technical task, or a backlog item.

A product is a defined response to a real or intended problem for a known user, with a value proposition, bounded scope, and acceptance criteria.

Product work answers:

- What problem is being addressed?
- Who has the problem?
- Why does the outcome matter?
- What value should the solution provide?
- What is inside the current scope?
- What is explicitly outside the current scope?
- What evidence will show that the intended outcome is acceptable?

## Product Elements

Every product discussion should identify the following elements before execution begins:

- Problem: the situation, pain, gap, or opportunity being addressed.
- User: the person, role, team, or system that needs the outcome.
- Value: the practical benefit the user or project receives.
- Scope: the bounded set of outcomes to pursue now.
- Acceptance criteria: observable conditions that prove the outcome is acceptable.

If these elements are missing or contradictory, the work must remain in Discussion / Decision Mode.

## Idea, Product, Requirement, and Execution Task

Idea:
An idea is a possible direction. It can be useful, but it is not ready for execution by itself.

Product:
A product is a clarified value target. It connects a problem, user, scope, and acceptance criteria.

Requirement:
A requirement is a specific condition the product or system must satisfy. Requirements must trace back to product context.

Execution task:
An execution task is a bounded unit of work with scope, allowed files, validation, and evidence. It must not be used to discover the product from scratch.

## Minimum Product Clarity

No execution task should begin until minimum product clarity exists.

Minimum product clarity means:

- The problem is stated clearly.
- The primary user or stakeholder is identified.
- The intended value is described.
- The current scope is bounded.
- Major out-of-scope items are stated.
- Acceptance criteria are defined.
- Known product risks or open questions are recorded.

If minimum product clarity is absent, the correct state is Discussion / Decision Mode, not Execution / Sprint Mode.

## Before Architecture, Stack, Agents, and Execution

Before architecture is selected, the product context must explain what the system or documentation needs to support.

Before stack decisions are made, the product context must clarify constraints, users, workflows, compatibility needs, and operational expectations.

Before agents are assigned, the product context must define the work well enough for agent responsibilities to be bounded.

Before execution begins, the task must have a clear relationship to product value and acceptance criteria.

## Product Blockers

Execution is blocked when any of the following conditions are true:

- The problem is vague or only implied.
- The user is unknown or too broad to guide decisions.
- The value proposition is missing.
- The scope is open-ended.
- Out-of-scope boundaries are missing.
- Acceptance criteria are absent or untestable.
- The task asks agents to choose product direction without Trigger approval.
- Architecture or stack choices are being used to compensate for unclear product intent.
- The requested execution would create artifacts before the product purpose is understood.

When a product blocker exists, the agent must pause execution, record the blocker, and return the decision to the Trigger.

## Future Product Discipline Documents

This core document does not define all product rules.

Future recommended product discipline tasks should define:

- MVP scope rules: how RIC Framework bounds the smallest useful product slice without inflating scope.
- Product-to-execution gate: the checks required before product context can move into architecture, agents, and execution.

Those follow-up tasks must be approved separately and must not be treated as READY until the Trigger promotes them.
