# Start New Project

Use this playbook when starting a product instance governed by RIC Framework or Protocolo RIC.

## Canonical Template Source

The canonical template source for new product instances is `templates/project/`.

Do not use `templates/` (root) as the primary source for new products. Root-level templates are auxiliary and pre-date the governed project instance pack. They may be referenced for individual artifacts but do not represent the current standard.

## Steps

1. Confirm that the product has passed the Product-to-Execution Gate defined in `docs/product/product-to-execution-gate.md` before creating any files.
2. Copy the relevant templates from `templates/project/` into your product repository or instance folder.
3. Fill in `prd-template.md` first — problem, user, value, scope, and acceptance criteria must be defined before architecture or stack decisions.
4. Fill in `mvp-scope-template.md` — bound the smallest useful slice and name explicit exclusions.
5. Fill in `stack-decision-template.md` if the product requires an architecture or stack decision. Record the approved decision before execution depends on it.
6. Fill in `backlog-template.md` — add the first task with ID, goal, scope, validation, and commit rule.
7. Fill in `status-template.md` — set the initial canonical status.
8. Fill in `session-handoff-template.md` — record the starting state so the first agent can resume from files alone.
9. Use `decision-log-template.md` to record every architecture or stack decision as it is resolved.
10. Use `execution-log-template.md` to record evidence for each execution session.
11. Use `validation-gates-template.md` at task closure to run and record all six gates.

## Minimum Ready State

Before any execution task is promoted to READY, the following must exist:

- Product problem is stated clearly (`prd-template.md`).
- MVP scope is bounded with explicit exclusions (`mvp-scope-template.md`).
- At least one backlog task has ID, scope, validation, and commit rule.
- Status has an owner and a clear next action.
- Known risks and open questions are recorded.
- No architecture or stack decision is pending that would block execution.

## Product-to-Execution Flow

The recommended documentation order before first execution:

```
prd-template.md          (problem, user, value, scope, acceptance criteria)
    └─> mvp-scope-template.md    (smallest slice, explicit exclusions)
            └─> stack-decision-template.md   (if applicable, before execution)
                    └─> backlog-template.md  (first READY task)
                            └─> status-template.md + session-handoff-template.md
```

## Official Example Requirement

Any product placed in `examples/` must qualify as an Official Example:

1. It follows the current framework principles.
2. It uses the `templates/project/` documentation structure.
3. It has been validated manually by an agent and approved by the Trigger.
4. It is recorded in `backlog.md` as DONE under a dedicated READY task.

`examples/sample-project/` is a pre-governance Skeleton Example and does not qualify as an Official Example. See `docs/architecture/examples-and-automation-boundaries.md`.
