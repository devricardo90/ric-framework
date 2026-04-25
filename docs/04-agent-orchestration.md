# Agent Orchestration

RIC Framework supports controlled use of AI agents through explicit roles, written briefs, and evidence-based review.

## Core Roles

## Orchestrator

The Orchestrator owns coordination. It selects work, defines scope, assigns agents, updates status, and ensures handoff quality.

Primary outputs:

- Updated status.
- Agent briefs.
- Sequenced work plan.
- Handoff notes.

## Executor

The Executor performs scoped implementation or documentation work.

Primary outputs:

- Completed assigned work.
- Evidence of validation.
- Risks or blockers.
- Files changed or artifacts produced.

## Auditor

The Auditor reviews work for correctness, evidence, risk, and delivery readiness.

Primary outputs:

- Findings.
- Missing evidence.
- Approval or rejection against delivery gates.
- Recommended follow-up items.

## Specialist Agents

Specialists should be used when domain-specific judgment is needed. Examples include frontend, backend, and DevOps specialists.

Specialists must receive:

- Objective.
- Scope boundaries.
- Inputs.
- Expected outputs.
- Validation expectations.

## Delegation Rules

- Delegate only work that can be scoped and reviewed.
- Give agents written context from project records.
- Require evidence, not just summaries.
- Keep status and handoff current after agent work.
- Use the Auditor role for high-risk or release-facing changes.
