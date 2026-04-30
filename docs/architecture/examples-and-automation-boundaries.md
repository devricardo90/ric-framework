# Examples and Automation Boundaries

This document defines the rules for repository examples and automation. These boundaries ensure that the framework core remains clean, predictable, and isolated from project-specific decisions or premature automation.

## Core Principles

### Manual-First Policy
Automation is a consequence of proven manual success. No process shall be automated before it has been executed manually, validated, and found to be repetitive and stable.

### Example Isolation
Examples serve as educational evidence. They must never contaminate the framework core with project-specific dependencies, stack choices, or architectural leaks.

## Example Semantics

Three distinct categories exist within the examples and templates area. Agents must not treat them as equivalent.

### Category 1 — Canonical Template Pack (`templates/project/`)

`templates/project/` is the current canonical source for new product instances governed by RIC Framework.

It contains fillable templates that any product should copy and complete before execution begins: PRD, MVP scope, stack decision, version matrix, backlog, status, decision log, execution log, validation gates, and session handoff.

When starting a new product, use `templates/project/`. Do not use the root `templates/` as the primary source.

### Category 2 — Pre-Governance Skeleton Example (`examples/sample-project/`)

`examples/sample-project/` is a pre-governance skeleton. It was created before the governed project instance pack existed.

Its schema is **legacy**:
- `STATUS.md` uses a free-form format, not the canonical Active Task / Last Completed / Repository State schema.
- `backlog.md` uses Priority and Owner columns, not the current Goal / Validation / Commit Rule schema.
- `session-handoff.md` is minimal and predates the current Pending Decisions / Do Not Do Next / Resume Instruction standard.
- It does not include a PRD, MVP scope document, execution log, validation gates, stack decision record, or decision log.

`examples/sample-project/` must not be treated as an Official Example or as a reference for how a governed product should be structured. It is retained as a historical reference only.

### Category 3 — Official Governed Example (`examples/<product-slug>/`)

An Official Governed Example is a product-level example that uses the current `templates/project/` structure, has a defined product (PRD filled), has been validated by an agent, and has been approved by the Trigger under a dedicated READY task.

No Official Governed Example exists yet. The first one must be created under its own READY task with an explicit product definition, not as a side effect of another task.

The path pattern for an Official Governed Example is `examples/<product-slug>/`, where `<product-slug>` is a concise, lowercase identifier for the product being demonstrated.

---

## Rules for Examples

### Directory Boundary
- All examples must reside within the `examples/` directory.
- **Pre-existing Content:** The `examples/sample-project/` directory is classified as a **pre-governance Skeleton Example**. Its schema is legacy and it does not represent the current official standard.
- **Access Rule:** The presence of `examples/sample-project/` does **not** grant permission to create new files or directories within `examples/` without a dedicated READY task.
- No example files (e.g., `package.json`, `tsconfig.json`, source code) are allowed in the repository root or `docs/` core.
- The `examples/` folder remains a **reserved area** and requires explicit Trigger approval for any content creation.

### Dependency Separation
- Examples must maintain their own dependency manifests (e.g., local `package.json`).
- Framework core dependencies must not include libraries required only for examples.
- Examples should reference the framework via stable paths or as if they were external consumers.

### Definition of Official Example
An example is considered "Official" only if:
1. It follows the current framework principles.
2. It uses the approved documentation structure.
3. It has been validated manually by an agent and approved by the Trigger.
4. It is recorded in the `backlog.md` as DONE.

## Rules for Automation

### Directory Boundary
- All scripts must reside within the `scripts/` directory.
- All CI/CD workflows must reside within `.github/workflows/`.
- Both directories are reserved areas.

### Automation Triggers
- A process is a candidate for automation only if it is:
    - **Stable:** The manual steps haven't changed in the last 3 tasks.
    - **Frequent:** Executed multiple times per session.
    - **Error-Prone:** Subject to human error that automation can mitigate.
- Automation creation requires a dedicated READY task.

### Validation Over Automation
- Automation does not replace real validation.
- All automated outputs must be subject to the same validation rigor as manual work.
- Automation success does not imply Trigger approval; final authority remains with the Trigger.

## Agent Authority Boundaries

### Permissions
- Agents may propose automations or examples during Discussion Gates.
- Agents may execute automation tasks only when the task is marked as READY.

### Restrictions
- Agents must not create "just-in-case" scripts or folders.
- Agents must not modify `.github/`, `scripts/`, or `examples/` silently during other tasks.
- Agents must not bypass manual validation steps even if an automation exists.

## Prohibited Actions
- No silent technology swaps via automation.
- No global `package.json` at the root that includes example dependencies.
- No automation that performs Git push without explicit Trigger confirmation for that specific push event.
