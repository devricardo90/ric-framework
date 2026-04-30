# RIC Framework Functional Map

This document maps the functional areas of RIC Framework to the current repository structure. It is a functional map, not a directory creation plan.

RIC Framework is a documentation system for disciplined software development work. It defines how product intent, architecture, agent execution, validation, deployment, presentation, maintenance, and risk boundaries are made explicit before and during AI-assisted delivery.

Function comes before folder. A directory should exist only when it contains useful framework documentation, a validated reusable artifact, or an explicitly approved structural placeholder.

## Functional Areas

### Product

Product defines what to build.

It captures the problem, user, value, MVP scope, requirements, domain language, acceptance criteria, and the handoff from product understanding to architecture and execution.

Current repository coverage:
- `docs/product/product-discipline.md`
- `docs/product/mvp-scope-rules.md`
- `docs/product/product-to-execution-gate.md`

### Architecture

Architecture defines how to structure the work.

It captures documentation architecture, structural boundaries, decision rules, examples, automation limits, and the relationship between current structure and future framework maturity.

Current repository coverage:
- `docs/architecture/documentation-architecture.md`
- `docs/architecture/architecture-decision-rules.md`
- `docs/architecture/examples-and-automation-boundaries.md`
- `docs/architecture/framework-functional-map.md`

### Ops

Ops controls the work.

It records current state, backlog authority, handoff context, execution evidence, decisions, boot rules, and source-of-truth boundaries.

Current repository coverage:
- `STATUS.md`
- `backlog.md`
- `docs/ops/boot-rules.md`
- `docs/ops/session-handoff.md`
- `docs/ops/execution-log.md`
- `docs/ops/decisions.md`
- `docs/ops/source-of-truth-rules.md`

### Execution Harness

Execution harness controls the agent.

It defines how agents receive authority, execute scoped tasks, respect boundaries, hand off work, and stop when scope or decisions are unclear.

Current repository coverage:
- `AGENTS.md`
- `agents/orchestrator.md`
- `agents/executor.md`
- `agents/auditor.md`
- `agents/backend-specialist.md`
- `agents/frontend-specialist.md`
- `agents/devops-specialist.md`
- `docs/agents/agent-role-boundaries.md`
- `playbooks/agent-execution.md`
- `playbooks/resume-project.md`
- `playbooks/close-task.md`

### Quality

Quality validates the work.

It proves that a task satisfies its Definition of Done, has recorded evidence, and does not claim completion without validation.

Current repository coverage:
- `docs/06-evidence-and-validation.md`
- `docs/07-delivery-gates.md`
- `templates/done-template.md`
- `templates/execution-log.md`
- `playbooks/close-task.md`

Reserved or future coverage:
- `docs/quality/` remains reserved until a dedicated task creates real quality discipline content.

### Deploy

Deploy publishes the work.

It covers release readiness, version discipline, deployment validation, environment evidence, rollback notes, and remote recoverability.

Current repository coverage:
- `docs/05-version-discipline.md`
- `templates/version-matrix.md`
- `playbooks/deploy-validation.md`
- `playbooks/git-discipline.md`

Reserved or future coverage:
- `docs/deploy/` remains reserved until a dedicated task creates real deploy discipline content.

### Recruiter

Recruiter turns the framework into a presentation surface.

It explains how the framework can be shown as professional evidence of disciplined AI-assisted software development without turning core documentation into marketing copy.

Current repository coverage:
- `README.md`
- `CHANGELOG.md`
- `docs/00-introduction.md`
- `docs/08-glossary.md`

Reserved or future coverage:
- `docs/recruiter/` remains reserved until a dedicated task defines presentation and portfolio rules.

### Maintenance

Maintenance keeps the framework alive.

It covers repository stewardship, periodic review, stale document detection, backlog hygiene, version drift, and long-term ownership.

Current repository coverage:
- `docs/ops/source-of-truth-rules.md`
- `playbooks/resume-project.md`
- `playbooks/git-discipline.md`

Reserved or future coverage:
- `docs/maintenance/` remains reserved until a dedicated task creates real maintenance discipline content.

### Risks

Risks records limits.

It captures known boundaries, failure modes, reserved areas, premature automation risks, stack-lock risks, and framework/project mixing risks.

Current repository coverage:
- `docs/architecture/documentation-architecture.md`
- `docs/architecture/architecture-decision-rules.md`
- `docs/architecture/examples-and-automation-boundaries.md`
- `docs/product/product-discipline.md`
- `docs/product/mvp-scope-rules.md`

Reserved or future coverage:
- `docs/risks/` remains reserved until a dedicated task creates a real risk register or risk discipline document.

## Role Map

The role map does not redefine agent authority documents. It summarizes the current functional intent:

- Trigger decides.
- Orchestrator thinks.
- Executor builds.
- Quality proves.
- Deploy publishes.
- Recruiter presents.

Permanent authority boundaries remain governed by `AGENTS.md` and `docs/agents/agent-role-boundaries.md`.

## Current Structure Mapping

The current repository already covers several functional areas without needing new folders:

| Current path | Primary functional area | Notes |
| --- | --- | --- |
| `docs/product/` | Product | Product discipline already has dedicated content. |
| `docs/architecture/` | Architecture | Structural and decision documents belong here. |
| `docs/ops/` | Ops | Operational source of truth and recovery records. |
| `docs/agents/` | Execution Harness | Formal agent authority and responsibility boundaries. |
| `agents/` | Execution Harness | Operational role profiles, not product code. |
| `playbooks/` | Execution Harness, Quality, Deploy, Maintenance | Reusable procedures; not automation. |
| `templates/` | Ops, Quality, Deploy | Reusable project documents and evidence containers. |
| `examples/sample-project/` | Product, Ops | Skeleton Example only; reserved for separately approved work. |
| `docs/00-introduction.md` through `docs/08-glossary.md` | Framework Core | General framework explanation and lifecycle material. |
| `README.md` | Recruiter, Framework Core | Entry point and public explanation. |
| `CHANGELOG.md` | Maintenance, Recruiter | Change visibility and external readability. |

## Future and Reserved Areas

The following areas are functional concepts, not automatically approved directories:

- `docs/quality/`
- `docs/deploy/`
- `docs/execution-harness/`
- `docs/maintenance/`
- `docs/risks/`
- `docs/recruiter/`
- `projects/`
- `scripts/`
- `.github/`

They must not be created for symmetry or appearance. Each requires a dedicated READY task with scope, validation, and Trigger approval.

## Duplication Risks

Functional growth can create duplication if new files repeat existing documents instead of extending missing discipline.

Key risks:
- Rewriting `docs/architecture/documentation-architecture.md` inside another architecture document.
- Redefining agent authority already governed by `AGENTS.md` and `docs/agents/agent-role-boundaries.md`.
- Creating `docs/quality/` while quality rules already exist in delivery gate and evidence documents.
- Creating `docs/deploy/` before deploy discipline is clearer than the current version and validation records.
- Creating empty conceptual folders that imply maturity without content.
- Mixing framework documentation with project-specific dossiers.

The correct pattern is to map, reference, and identify gaps before adding structure.

## Maturation Order

The recommended maturation order is:

1. Functional map.
2. Quality discipline.
3. Execution harness discipline.
4. Deploy discipline.
5. Maintenance discipline.
6. Risks register or risks discipline.
7. Recruiter presentation discipline.

This order keeps the framework operationally grounded. It also prevents presentation, automation, or folder symmetry from outrunning product, architecture, execution, and validation clarity.

## Folder Creation Rule

Do not create a folder for aesthetics.

A new folder is justified only when:
- The function is understood.
- Existing documents do not already cover it.
- The content is useful now.
- The task explicitly authorizes that folder.
- Validation can prove the change did not expand scope silently.

If those conditions are not met, the area remains a reserved functional concept.
