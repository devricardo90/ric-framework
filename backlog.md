# Backlog

## Governance Rules

- The Trigger is the only authority allowed to promote a task to READY.
- The Trigger is the only authority allowed to mark a task as DONE.
- Agents may recommend next work, but must not open scope without Trigger approval.

## Active Items

| ID | Title | Status | Goal | Validation | Commit Rule |
| --- | --- | --- | --- | --- | --- |
| None | None | None | None | None | None |

## Completed Items

| ID | Title | Evidence |
| --- | --- | --- |
| RIC-001 | Repository Foundation and Documentation Skeleton | Commit `f0be24e docs: initialize ric framework structure`; `git status` was clean after commit |
| RIC-001A | Add Agent Governance and Recovery Control | Trigger approved formal closure; commit `b297a2e docs: add agent governance and recovery controls`; `git status` was clean after commit |
| RIC-001B | Align README with canonical governance controls | README reviewed as coherent with canonical governance controls; commit authorized by Trigger |
| RIC-001C | Add Git push discipline to agent governance | Git Push Discipline added to `AGENTS.md` and `docs/ops/boot-rules.md`; rule reviewed as complete and commit authorized by Trigger |
| RIC-002 | Choose and publish repository license | Commit `b598a10 docs: add MIT license`; MIT License published in `LICENSE` with `Copyright (c) 2026 Ricardo Souza`; operational documents record the Trigger license decision; validation passed with `git diff --check` |
| RIC-003 | Add Discussion and Execution Sprint Model | Commit `cdab8bf docs: add discussion and execution sprint modes`; Discussion / Decision Mode and Execution / Sprint Mode added to `AGENTS.md`, `README.md`, and `docs/ops/boot-rules.md`; validation passed with `git diff --check` |
| RIC-004 | Define Product-First Documentation Architecture | Product-first documentation architecture recorded in `docs/architecture/documentation-architecture.md`; root `docs/` separated from templates, examples, baselines, playbooks, and agents; reserved areas and risks documented; validation passed with `git diff --check` |
| RIC-004A | Define Repository Language Standard | Repository-facing language standard recorded in `AGENTS.md` and referenced in `docs/architecture/documentation-architecture.md`; Trigger-facing communication may use Portuguese; RIC-005 remained Recommended only; validation passed with `git diff --check` |
| RIC-005 | Product Discipline Core | Core product discipline recorded in `docs/product/product-discipline.md`; product defined as problem, user, value, scope, and acceptance criteria; blockers and future product discipline topics documented; validation passed with `git diff --check` |
| RIC-005A | Define MVP Scope Rules | MVP scope rules recorded in `docs/product/mvp-scope-rules.md`; MVP, future version, nice-to-have, and forbidden scope separated; inflated-scope signals and MVP blockers documented; validation passed with `git diff --check` |
| RIC-006 | Define Product-to-Execution Gate | Commit `b8000d9 docs: define product-to-execution gate`; product-to-execution gate recorded in `docs/product/product-to-execution-gate.md`; READY criteria, blockers, lightweight checklist, and minimum evidence before Execution / Sprint Mode documented; validation passed with `git diff --check`; pushed to `origin/main` |

## Blocked Items

| ID | Blocker | Needed To Unblock |
| --- | --- | --- |
| None | None | None |

## Recommended Next Items

| ID | Title | Status | Notes |
| --- | --- | --- | --- |
| None | None | None | Future templates or examples for product-to-execution handoff remain unpromoted and require separate Trigger approval |

## Next Process Step

RIC-006 is Remote DONE by Trigger confirmation. The next session must begin with a Discussion Gate to evaluate the next smallest logical advance for RIC Framework. RIC-007 or any future task must remain unpromoted until explicit Trigger approval.
