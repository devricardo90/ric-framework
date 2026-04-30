# Project Instance Template Pack

This directory contains reusable templates for creating a RIC-governed project instance.

## Purpose

The RIC Framework defines how to think, decide, execute, validate, and document.

A project instance defines what is being built, for whom, with which stack, with which scope, and with which evidence.

These templates are the bridge between the two. Copy the relevant files into your project repository and fill in the bracketed fields.

## When to Use This Pack

Use these templates when:
- Starting a new product governed by the RIC Protocol.
- Onboarding an existing product into RIC governance.
- Establishing the documentation baseline before execution begins.

Do not use these templates to bypass the Product-to-Execution Gate defined in `docs/product/product-to-execution-gate.md`. Templates do not replace Trigger approval.

## Governance References

These templates operate under and do not redefine:
- `AGENTS.md` — Agent Control Prompt.
- `docs/product/product-discipline.md` — Product definition and minimum clarity rules.
- `docs/product/mvp-scope-rules.md` — MVP scope discipline.
- `docs/product/product-to-execution-gate.md` — Gate criteria before READY.
- `docs/architecture/architecture-decision-rules.md` — When architecture decisions require Discussion Gate.
- `docs/agents/agent-role-boundaries.md` — Role authority and boundaries.
- `playbooks/two-agent-execution-flow.md` — Procedural execution checklist.

When a template conflicts with a governance document, the governance document wins.

## Template Index

| File | Purpose | When to Fill |
| --- | --- | --- |
| `prd-template.md` | Product Requirements Document — problem, user, value, scope, acceptance criteria | Before any architecture or stack decision |
| `mvp-scope-template.md` | MVP scope definition — smallest useful slice, exclusions, blockers | Before READY promotion |
| `stack-decision-template.md` | Stack and architecture decisions — options, tradeoffs, approval | Before execution that depends on the stack |
| `version-matrix-template.md` | Version tracking — releases, environments, validation status | Updated at each release or deploy |
| `backlog-template.md` | Task backlog — active, completed, blocked items | Maintained throughout project lifetime |
| `status-template.md` | Canonical project status — active task, last completed, repository state | Updated at each session boundary |
| `decision-log-template.md` | Architecture decision record — each technical decision with context and approval | Each time a Discussion Gate decision is resolved |
| `execution-log-template.md` | Chronological execution evidence — per-task records | After each execution session |
| `validation-gates-template.md` | Validation checkpoints — pre-execution, pre-commit, pre-push, post-push | Used during task closure |
| `session-handoff-template.md` | Session continuity — current state, next steps, resume instructions | Before ending any session or switching agents |

## Non-Negotiable Rules Enforced by All Templates

1. One product instance governs one repository at a time.
2. Only one task may be READY or IN_PROGRESS at a time.
3. MVP scope is explicit. Out-of-scope items are named before execution begins.
4. Stack and version decisions are documented and Trigger-approved before execution depends on them.
5. DONE requires real validation evidence. No silent DONE.
6. No architecture change without a decision record.
7. Session handoff must be complete enough for a new agent to resume without memory.
8. No hidden assumptions. Every open question is recorded.
