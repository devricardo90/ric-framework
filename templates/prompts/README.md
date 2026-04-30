# Operational Prompt Templates

This directory contains reusable prompt templates for operating under Protocolo RIC.

Each template is a structured starting point. Fill in the bracketed fields before submitting to an agent.

These templates do not replace or override:
- `AGENTS.md` — the foundational Agent Control Prompt.
- `docs/agents/agent-role-boundaries.md` — role authority and boundaries.
- `docs/agents/human-agent-operating-model.md` — the Operational Triad and flow.
- `playbooks/two-agent-execution-flow.md` — the procedural execution checklist.
- `backlog.md`, `STATUS.md`, `docs/ops/session-handoff.md`, `docs/ops/execution-log.md` — the operational source of truth.

Prompt templates are convenience wrappers, not governance documents. When a template conflicts with a governance document, the governance document wins.

---

## Template Index

| File | Role | When to Use |
| --- | --- | --- |
| `prepare-task-prompt.md` | Consultant / Auditor | Preparing a task definition for Trigger review before READY |
| `executor-sprint-prompt.md` | Terminal Executor | Starting execution of a READY task |
| `consultant-auditor-prompt.md` | Consultant / Auditor | Auditing executor output before Trigger closure |
| `executor-fix-prompt.md` | Terminal Executor | Applying a targeted correction within an active task |
| `close-task-prompt.md` | Terminal Executor | Closing a task after Trigger approval of DONE |
| `close-session-prompt.md` | Any agent | Ending a session and updating continuity records |
| `handoff-to-new-agent-prompt.md` | Any agent | Transferring ownership to a new agent or session |

---

## Non-Negotiable Rules Enforced by All Prompts

1. One executor holds write access at a time. No two agents modify the same repository simultaneously.
2. One auditor reviews a given task slice at a time.
3. The Trigger is the only authority who approves direction, scope, READY, DONE, commits, and pushes.
4. Only one task may be READY or IN_PROGRESS at a time.
5. DONE requires real evidence — command output, diffs, or verified logs. No silent DONE.
6. Codex and Claude Code must not execute file changes together in the same branch without a clean handoff between them.
7. Agent handoff requires a verified, clean `docs/ops/session-handoff.md` before the next agent begins.
