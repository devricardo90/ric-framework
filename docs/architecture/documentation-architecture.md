# Product-First Documentation Architecture

This document defines the official documentation architecture for RIC Framework.

RIC Framework is product-first. Product context comes before governance, architecture, stack, agents, execution, and validation because execution serves the product.

## Core Principle

`docs/product/` at the framework root represents the product discipline of RIC Framework.

It is not only documentation about the RIC Framework repository as a product. It defines how product work must be understood before execution begins:

- Problem.
- User.
- MVP scope.
- Requirements.
- Flows.
- Domain language.
- Acceptance criteria.
- Handoff from product understanding to architecture and execution.

Architecture, stack choices, agent behavior, execution criteria, validation, and delivery controls must be derived from product context.

## Official `docs/` Order

The canonical documentation order is:

```text
docs/
├── product/
├── governance/
├── architecture/
├── quality/
├── security/
├── deploy/
├── execution-harness/
├── ops/
├── maintenance/
├── risks/
└── knowledge/
```

This order is conceptual as well as structural. Agents should read and reason from product context before moving into governance, architecture, execution, or operational records.

## Framework Documentation

Root-level `docs/` is for canonical RIC Framework documentation.

It defines the framework's disciplines, rules, and reusable operating model. It must not become a filled project dossier for an application that uses RIC Framework.

Repository-facing framework content must use professional English. Trigger-facing communication may use Portuguese. This language standard applies to documentation, task titles, commit messages, templates, examples, agents, playbooks, baselines, code comments, and filenames when applicable.

Canonical framework areas:

- `docs/product/`: product discipline and product-first handoff rules.
- `docs/governance/`: Trigger authority, task control, approvals, and decision boundaries.
- `docs/architecture/`: documentation architecture and approved structural decisions.
- `docs/quality/`: validation expectations, evidence rules, and review controls.
- `docs/security/`: security and secrets-handling rules.
- `docs/deploy/`: deployment discipline and release readiness rules.
- `docs/execution-harness/`: execution support model for agents and structured delivery.
- `docs/ops/`: operational status, handoff, decisions, and execution log.
- `docs/maintenance/`: repository maintenance and stewardship practices.
- `docs/risks/`: known framework risks and mitigation records.
- `docs/knowledge/`: stable framework knowledge that supports reuse.

`docs/ops/` does not come before `docs/product/`.

Product comes before execution. `docs/ops/` controls status, backlog, handoff, and execution log after product context, scope, and essential decisions have been defined. Operations records must not decide product direction, stack, or architecture on their own.

## Templates

`templates/` is for reusable project documents and skeleton structures that can be copied into projects using RIC Framework. These are helper tools and do not authorize changes to the framework core.

## Examples

`examples/` is for demonstrations of the framework in use.
- **Reserved Area:** The directory is a reserved area. Pre-existing content (like `examples/sample-project/`) is classified as a Skeleton Example and does not imply permission for further modification or creation without explicit task approval.

## Playbooks and Agents

`playbooks/` is for reusable procedures and "how-to" guides for agents and human operators.

`agents/` (Root) is for operational agent profiles, personas, and specialized roles.

`docs/agents/` (Documentation) is for the formal rules of authority, responsibility, boundaries, and governance governing agent behavior.

## Reserved Areas

The following areas are reserved until separately approved:

- `examples/`: reserved for official demonstrations.
- `scripts/`: reserved for future tooling or automation.
- `.github/`: reserved for future repository automation, workflows, or issue templates.
- `projects/`: reserved for future project references, project registry, or consumer-project coordination.

These directories must not be created or populated without a task that explicitly authorizes them. Existing folders do not grant write permission outside the approved task scope.

## Risks

Premature stack lock:
Creating stack-specific templates, baselines, or scripts too early can make RIC Framework appear tied to one technical implementation. Stack-specific material must be clearly marked as optional or scoped by Trigger approval.

Decorative empty folders:
Creating the full tree without real content can reduce clarity and create false maturity. Directories should be created when they contain useful documentation or when a task explicitly approves the structural placeholder.

Premature automation:
Adding scripts or `.github/` workflows can change the repository from documentation-first to tooling-led. Automation requires a separate decision and validation path.

Framework/project mixing:
Root-level framework docs must not contain filled product state for consumer projects. Project-specific content belongs in `templates/`, `examples/`, or a separately approved project area.

## Next Recommended Task

Recommend `RIC-005 - Product Discipline Core` as the next Discussion Gate candidate to define the first product-discipline document under `docs/product/` before creating the broader documentation tree.
