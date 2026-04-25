# Introduction

RIC Framework, also called Protocolo RIC, is a stack-agnostic project execution framework for work performed by humans, AI agents, or both.

The framework is documentation-first. It does not prescribe a programming language, hosting provider, frontend framework, backend architecture, or project management tool. Instead, it defines the minimum execution records needed to keep a project understandable, auditable, and resumable.

## Purpose

RIC Framework exists to reduce project drift. Every contributor should be able to understand the goal, current state, active work, known risks, validation evidence, and next action without depending on private memory or chat history.

## Operating Model

The framework works by maintaining a small set of project documents:

- `PROJECT_CONTEXT.md` explains the project.
- `backlog.md` controls the work queue.
- `STATUS.md` shows the current state.
- `decisions.md` records important choices.
- `execution-log.md` captures work and validation evidence.
- `version-matrix.md` maps versions to environments and evidence.
- `session-handoff.md` preserves continuity between sessions.

## Design Constraint

RIC Framework should stay practical. A document is only valuable when it improves execution, validation, governance, or handoff.
