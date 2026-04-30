# Product Instance Boot Rules

This document defines how a Product Instance is created within the RIC Framework. It covers what a Product Instance is, where it lives, which files must exist before the first task can be READY, and what is prohibited during the boot phase.

This document does not redefine the framework boot sequence (`docs/ops/boot-rules.md`), execution discipline (`AGENTS.md`), agent role boundaries (`docs/agents/agent-role-boundaries.md`), or the Product-to-Execution Gate (`docs/product/product-to-execution-gate.md`). It operates under all of them.

---

## What Is a Product Instance

A Product Instance is a set of filled documentation that represents one governed product under the RIC Protocol.

The RIC Framework answers: how do we think, decide, execute, validate, and document?

A Product Instance answers: what are we building, for whom, with which stack, with which scope, and with which evidence?

A Product Instance is not:
- The `ric-framework` repository itself.
- A template pack (`templates/project/`).
- A skeleton placeholder (`examples/sample-project/`).
- An idea without product clarity.

A Product Instance is ready to receive its first READY task only when the required boot files are filled, approved by the Trigger, and contain no hidden assumptions.

---

## Where a Product Instance Lives

| Context | Purpose | Schema |
| --- | --- | --- |
| `templates/project/` | Canonical template pack - empty, never filled directly | Current (RIC-014A) |
| `templates/` root | Auxiliary legacy templates - not the primary source | Legacy |
| `examples/sample-project/` | Pre-governance skeleton - historical reference only | Legacy |
| `examples/<product-slug>/` | Official Governed Example - filled, validated, Trigger-approved | Current |
| External repository | Real product using RIC Framework as governance reference | Defined by the product |

For demonstration within `ric-framework`: the correct path is `examples/<product-slug>/`.

For a real product: a separate repository, governed by RIC Protocol and using `templates/project/` as the starting point.

The `<product-slug>` must be concise, lowercase, and identify the product being demonstrated (e.g., `examples/task-manager/`, `examples/billing-api/`).

---

## How to Copy `templates/project/` Without Altering the Originals

1. Identify which templates are needed for the instance.
2. Copy each required file from `templates/project/` to the instance directory.
3. Rename each file using the convention below.
4. Fill the copied files. Never edit `templates/project/` files directly.
5. After execution, confirm that `git status --short` does not show any `templates/project/` file as modified.

### File Renaming Convention

| Source (`templates/project/`) | Instance file name |
| --- | --- |
| `prd-template.md` | `prd.md` |
| `mvp-scope-template.md` | `mvp-scope.md` |
| `stack-decision-template.md` | `stack-decision.md` |
| `version-matrix-template.md` | `version-matrix.md` |
| `backlog-template.md` | `backlog.md` |
| `status-template.md` | `status.md` |
| `decision-log-template.md` | `decision-log.md` |
| `execution-log-template.md` | `execution-log.md` |
| `validation-gates-template.md` | `validation-gates.md` |
| `session-handoff-template.md` | `session-handoff.md` |

The `-template` suffix is dropped in the instance. The originals in `templates/project/` keep their names and are never modified by instance work.

---

## Boot-Required Files

These five files must exist and be filled before the first task of a Product Instance can be promoted to READY.

| File | Content required at boot |
| --- | --- |
| `prd.md` | Problem, user, value, scope, out-of-scope, acceptance criteria, known risks. Trigger-approved. |
| `mvp-scope.md` | Smallest useful slice defined, explicit exclusions, nice-to-have items separated, acceptance criteria, Trigger-approved. |
| `backlog.md` | At least one task defined with: ID, Title, Goal, Scope, Out-of-Scope, Definition of Done, Validation, Commit Rule. |
| `status.md` | Initial canonical status: active task = None, state = boot/idle, repository state recorded. |
| `session-handoff.md` | Boot state recorded: objective, no active task, pending decisions for Trigger, resume instruction for first agent. |

No task may be promoted to READY until all five files exist and are approved by the Trigger.

---

## Lifecycle Files

These files belong to the product instance lifecycle. They are not required as filled content before the first READY task, but they may be initialized as empty, controlled stubs when the approved boot task authorizes copying the complete `templates/project/` package.

| File | When it is created |
| --- | --- |
| `stack-decision.md` | Before any execution that depends on a stack or architecture choice |
| `decision-log.md` | When the first architecture or stack decision is resolved |
| `execution-log.md` | During the first execution session |
| `validation-gates.md` | When the first task is closed |
| `version-matrix.md` | When the first version or environment state is recorded |

Lifecycle file stubs must not contain fabricated content. A stub must clearly state that no execution, decision, version, or validation has occurred yet. A lifecycle file must not declare execution, decision, version, validation, DONE state, or completeness without real evidence.

---

## Product-to-Execution Sequence

The required order before the first READY task:

```
1. prd.md               -> Trigger defines problem, user, value, scope
        |
        v
2. mvp-scope.md         -> Trigger bounds the smallest slice and names exclusions
        |
        v
3. stack-decision.md    -> if a stack or architecture decision is required before execution
        |
        v
4. backlog.md           -> first task defined with all required fields
        |
        v
5. status.md            -> initial state: idle, no active task
        |
        v
6. session-handoff.md   -> boot state recorded for first agent
        |
        v
   [First READY task authorized by Trigger]
        |
        v
7. execution-log.md     -> filled during execution
        |
        v
8. validation-gates.md  -> filled at task closure
        |
        v
9. version-matrix.md    -> filled at first release or environment state
        |
        v
10. decision-log.md     -> accumulated over time
```

---

## Criteria for the First READY Task

A task in a Product Instance may be promoted to READY only when:

1. `prd.md` is filled and Trigger-approved.
2. `mvp-scope.md` is filled and Trigger-approved.
3. No architecture or stack decision is pending that blocks execution.
4. `backlog.md` contains the task definition with all required fields.
5. `status.md` and `session-handoff.md` reflect the current boot state.
6. The Trigger explicitly promotes the task to READY.

An agent may not promote a task to READY on its own. Recommendation is allowed; approval is Trigger-only.

---

## Prohibitions During Boot

| Prohibited Action | Reason |
| --- | --- |
| Creating code, scripts, `package.json`, `.github/`, or workflows | Boot is documentation-first. No implementation before product clarity. |
| Filling `stack-decision.md` with a choice not approved by Trigger | Stack decisions require Discussion Gate and Trigger approval. |
| Marking any task READY before the five boot-required files exist | Violates the Product-to-Execution Gate. |
| Editing `templates/project/` files directly | Contaminates the canonical template pack. |
| Creating additional folders not explicitly authorized | Violates the function-before-folder rule. |
| Declaring execution-log, validation-gates, or version-matrix as complete without evidence | Violates the no-silent-DONE rule. |
| Agent deciding product direction, MVP scope, stack, or architecture | Violates agent role boundaries; those decisions require Trigger authority. |
| Opening a second READY task before the first is closed | Violates the one-READY-task-at-a-time rule. |
| Treating `examples/sample-project/` as the model for a new instance | It uses a legacy schema incompatible with the current standard. |

---

## Trigger Approval Requirements

The following actions in a Product Instance require explicit Trigger approval before they occur:

- Approving the PRD as complete and ready for execution.
- Approving the MVP scope.
- Approving any stack, architecture, provider, version, or database decision.
- Promoting a task to READY.
- Marking a task as DONE.
- Authorizing a commit.
- Authorizing a push.
- Creating any file or folder outside the approved Product Instance boot scope.
- Changing the product name, scope boundaries, or acceptance criteria after boot.
