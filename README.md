# RIC Framework

RIC Framework, also referred to as Protocolo RIC, is a documentation-first execution framework for AI-assisted projects. It defines how a project is planned, executed, validated, handed off, and resumed without depending on any specific technology stack.

The framework is built for disciplined delivery: clear context before work starts, visible status while work is in progress, evidence before claiming completion, and controlled use of agents when work is delegated.

## What Problem It Solves

AI-assisted projects often lose continuity when context is scattered across chats, tickets, commits, and undocumented assumptions. RIC Framework solves this by making execution state explicit and portable.

It helps teams answer practical questions:

- What are we building and why?
- What is currently in progress?
- What decisions have already been made?
- What evidence proves the work is valid?
- What version is deployed, tested, or ready for handoff?
- What should the next agent or human do without guessing?

## Who It Is For

RIC Framework is for builders who use AI agents, human contributors, or both to deliver projects with accountability.

It is especially useful for:

- Solo developers who need reliable project memory.
- Teams coordinating AI-assisted implementation.
- Technical leads who need audit-ready delivery evidence.
- Product owners who want backlog and status discipline.
- Agent operators who need clear orchestration boundaries.

## Lifecycle

RIC Framework organizes work through six lifecycle stages.

1. Discovery: capture project goals, constraints, users, risks, and working assumptions.
2. Planning: define backlog items, delivery gates, agent responsibilities, and validation expectations.
3. Development: execute scoped work while recording decisions, changes, blockers, and evidence.
4. Testing: validate behavior against acceptance criteria and record proof in an execution log.
5. Deploy: confirm the deployed version, environment, checks, rollback notes, and version matrix updates.
6. Handoff: summarize current state, completed work, open risks, next actions, and recovery context.

## Core Execution Records

RIC Framework relies on a small set of living documents. Each one has a job.

- Backlog: tracks proposed, active, blocked, and completed work.
- Status: shows the current project state, active task, blockers, owner, and next action.
- Decisions: records meaningful technical, product, and process decisions with rationale.
- Evidence: captures validation output, test results, screenshots, deployment checks, logs, and review notes.
- Version matrix: maps versions, environments, commits, releases, migrations, and validation state.
- Session handoff: gives the next contributor enough context to resume without re-discovery.

## Recommended Agent Model

RIC Framework recommends a controlled three-agent model for most projects.

- Orchestrator: owns planning, sequencing, task boundaries, status discipline, and handoff quality.
- Executor: implements scoped work according to the current context, backlog item, and acceptance criteria.
- Auditor: reviews outputs, checks evidence, challenges unsupported claims, and verifies delivery gates.

Specialist agents can be added when needed, but they should operate from a written brief and return evidence, risks, and handoff notes.

## Start a New Project

1. Create a project folder.
2. Copy the templates from `templates/` into the project folder.
3. Fill in `PROJECT_CONTEXT.md` before implementation starts.
4. Create the first backlog items in `backlog.md`.
5. Set the current owner, state, and next action in `STATUS.md`.
6. Record known constraints and first decisions in `decisions.md`.
7. Use `execution-log.md` during work to capture evidence.
8. Update `version-matrix.md` before deployment or release.
9. Complete `session-handoff.md` before pausing, switching agents, or handing off to another person.

The sample project in `examples/sample-project/` shows the intended structure in a minimal form.

## Repository Layout

```text
docs/       Framework concepts, lifecycle, governance, and delivery rules.
templates/  Reusable project documents.
playbooks/  Operational workflows for common project moments.
agents/     Agent role definitions and operating contracts.
examples/   Example project structure using the templates.
```

## Current Status

This repository is documentation-first and stack-agnostic. It intentionally contains no application code, dependencies, CLI, backend, frontend, or automation scripts.
