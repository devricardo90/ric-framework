# Examples and Automation Boundaries

This document defines the rules for repository examples and automation. These boundaries ensure that the framework core remains clean, predictable, and isolated from project-specific decisions or premature automation.

## Core Principles

### Manual-First Policy
Automation is a consequence of proven manual success. No process shall be automated before it has been executed manually, validated, and found to be repetitive and stable.

### Example Isolation
Examples serve as educational evidence. They must never contaminate the framework core with project-specific dependencies, stack choices, or architectural leaks.

## Rules for Examples

### Directory Boundary
- All examples must reside within the `examples/` directory.
- No example files (e.g., `package.json`, `tsconfig.json`, source code) are allowed in the repository root or `docs/` core.
- The `examples/` folder remains a reserved area and requires explicit Trigger approval for any content creation.

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
