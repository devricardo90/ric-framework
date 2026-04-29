# Architecture Decision Rules

This document defines when technical decisions in RIC Framework require discussion, approval, documentation, and validation before execution.

RIC Framework is stack-agnostic by default. Technical choices must serve the approved product context, MVP scope, constraints, and validation needs. Agents may recommend architecture decisions, but only the Trigger can approve a change of direction, stack, provider, version, or architecture.

## When Discussion Gate Is Required

A technical decision requires Discussion Gate before execution when it affects:

- Stack selection, including language, runtime, framework, package manager, or platform.
- Version selection for major dependencies, runtimes, SDKs, APIs, databases, or deployment targets.
- Compatibility assumptions across web, mobile, desktop, browser, operating system, runtime, provider, or infrastructure.
- Provider choice or provider change for AI, authentication, database, storage, hosting, deployment, analytics, payments, email, search, observability, or similar project infrastructure.
- Database type, schema ownership, migration strategy, data model boundaries, or persistence guarantees.
- Authentication model, authorization model, identity provider, session model, or secrets-handling approach.
- Storage model, file lifecycle, privacy constraints, retention expectations, or access control.
- Deployment target, release process, rollback expectation, environment model, or version matrix expectations when a version matrix exists.
- Application architecture, service boundaries, module boundaries, integration boundaries, or agent orchestration model.
- Any technical choice that changes risk, cost, operability, security, portability, maintenance, or delivery evidence.

If a functional task exposes one of these decisions during execution, the task must pause and return to Discussion Gate before implementation continues.

## Required Decision Shape

An architecture decision must define:

- Scope: what the decision covers and what it does not cover.
- Reason: why the decision is needed now.
- Options considered: the realistic choices and their tradeoffs.
- Impact: expected effect on product scope, execution, validation, maintenance, security, deploy, and handoff.
- Compatibility: relevant versions, platforms, providers, environments, or constraints.
- Validation: evidence required before execution can rely on the decision.
- Reversal or migration note: what it would cost to change the decision later, when known.

The decision must be recorded before execution depends on it. A recommendation is not an approval.

## Stack, Version, and Compatibility Choices

Stack and version choices must remain open until the Trigger approves them.

Agents must not lock the framework or a project to a stack by creating stack-specific files, folders, package manifests, scripts, workflows, examples, or implementation details unless the approved task explicitly authorizes that scope.

Version choices must be checked against the intended runtime, provider, deployment target, and compatibility constraints before execution starts. If the project has a version matrix, the decision must reference or update it within the approved scope. If no version matrix exists, agents must not create one unless the task explicitly authorizes it.

## Provider and Platform Changes

Changing a provider, platform, database, authentication system, storage system, deployment target, or architecture boundary is an architecture decision.

Agents must not silently replace one provider or platform with another inside a functional task. If the approved task depends on a provider that is unavailable, incompatible, too costly, insecure, or otherwise blocked, the task must be marked BLOCKED or NEEDS_DECISION and returned to the Trigger.

## No Silent Technology Swaps

Execution agents must implement the approved technical direction.

They must not silently change:

- Framework.
- Runtime.
- Package manager.
- Database.
- Provider.
- Authentication approach.
- Storage approach.
- Deployment target.
- API version.
- Architecture pattern.
- Validation strategy.

If a change appears necessary, the agent must stop execution, document the issue in the operational records, and request Trigger approval through Discussion Gate.

## Decision vs Execution

Architecture decision work defines what technical direction is approved and why.

Execution work applies an approved direction to a scoped task.

Do not mix them:

- A decision task must not implement product code, tooling, automation, or stack files unless explicitly approved.
- A functional execution task must not invent or change architecture while implementing behavior.
- Operational records may capture that a decision was made, blocked, or pending, but they must not replace the permanent decision document or approved architecture record.

## Technical Clarity Blockers

A task is blocked by lack of technical clarity when:

- The stack or runtime required for execution is unknown.
- Required provider, database, authentication, storage, or deploy choice is undecided.
- Version compatibility is uncertain and could affect implementation.
- Security, privacy, data ownership, or secrets-handling expectations are unclear.
- Validation depends on tooling, environment, provider access, or deployment context that has not been approved.
- The task would require creating scripts, workflows, package files, services, infrastructure, or automations outside the approved scope.
- The agent would need to choose between multiple architecture directions to proceed.

When these signals appear, the correct state is BLOCKED or NEEDS_DECISION, not silent implementation.

## Agent Authority Boundary

Agents may:

- Identify architecture decisions that are needed.
- Recommend options with tradeoffs.
- Record risks, blockers, and validation needs.
- Draft decision notes when authorized.

Agents must not:

- Approve architecture changes.
- Promote a decision to execution without Trigger approval.
- Change stack, provider, version, deploy target, database, authentication, storage, or architecture boundaries without approval.
- Treat a recommendation as a decision.

The Trigger remains the approval authority for architecture decisions and direction changes.
