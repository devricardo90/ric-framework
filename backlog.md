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
| RIC-015B | Define Product Instance Boot Rules | Trigger approved Local DONE; created `docs/ops/product-instance-boot-rules.md`; defined Product Instance location, template-copy rules, boot-required files, lifecycle stub rules, first READY criteria, boot prohibitions, and Trigger approval requirements; scope respected; `git diff --check` PASS; no product or example created; protected paths untouched |
| RIC-015A | Reconcile Product Onboarding and Example Semantics | Trigger approved DONE; updated `playbooks/start-new-project.md` and `docs/architecture/examples-and-automation-boundaries.md`; scope respected; `git diff --check` PASS; no additional READY task opened |
| RIC-014A | Define Project Instance Template Pack | Trigger approved DONE; created `templates/project/` with README.md and 10 project instance templates; scope respected; `git diff --check` PASS; no additional READY task opened |
| RIC-013A | Define Operational Prompt Templates Pack | Trigger approved DONE; created `templates/prompts/` with README.md and 7 prompt templates; scope respected; `git diff --check` PASS; no additional READY task opened |
| RIC-012D | Define Two-Agent Execution Playbook | Trigger approved DONE; created `playbooks/two-agent-execution-flow.md`; scope respected; `git diff --check` PASS; no additional READY task opened |
| RIC-012C | Define Human-Agent Operating Model | Trigger approved DONE; created `docs/agents/human-agent-operating-model.md`; scope respected; `git diff --check` PASS; no additional READY task opened |
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
| RIC-007A | Define Operational Source of Truth Rules | Commit `7f2ff99 docs: define operational source of truth rules`; operational source-of-truth rules recorded in `docs/ops/source-of-truth-rules.md`; `backlog.md`, `STATUS.md`, `docs/ops/session-handoff.md`, and `docs/ops/execution-log.md` roles documented; Local DONE and Remote DONE clarified; validation passed with `git diff --check`; pushed to `origin/main` |
| RIC-008A | Define Architecture Decision Rules | Commit `caaf09c docs: define architecture decision rules`; architecture decision rules recorded in `docs/architecture/architecture-decision-rules.md`; Discussion Gate triggers, stack/version/provider boundaries, no silent technology swap rule, decision-vs-execution separation, technical clarity blockers, and agent authority boundaries documented; validation passed with `git diff --check`; pushed to `origin/main` |
| RIC-009A | Define Agent Role and Responsibility Boundaries | Commit `fad9c07 docs: define agent role boundaries`; agent role and responsibility boundaries recorded in `docs/agents/agent-role-boundaries.md`; Trigger, Orchestrator, Executor, Consultant/Auditor, and specialist agent role boundaries defined; single-repository execution rule, recommendation vs approval boundaries, stop conditions, and handoff expectations documented; validation passed with `git diff --check`; pushed to `origin/main` |
| RIC-010A | Define Examples and Automation Boundaries | Commit `7ba869e docs: define examples and automation boundaries`; examples and automation boundaries recorded in `docs/architecture/examples-and-automation-boundaries.md`; Manual-First policy defined; example isolation, dependency separation, and official example criteria documented; automation triggers and authority boundaries established; validation passed with `git diff --check`; pushed to `origin/main` |
| RIC-011A | Reconcile Current Repository Tree and Directory Semantics | Commit `a91db43 docs: reconcile repository tree semantics`; physical repository tree reconciled with logical governance; `examples/sample-project/` classified as Skeleton Example; semantics of `agents/`, `playbooks/`, and `templates/` clarified; reserved area rules reinforced; validation passed with `git diff --check`; pushed to `origin/main`; Remote DONE confirmed by local `HEAD`, local `origin/main`, and online `origin/main` at `a91db43` |
| RIC-011B | Reconcile Post-Push Operational State | Commit `8fbf0a6 docs: reconcile post RIC-011A operational state`; operational records reconciled after confirmed RIC-011A push; RIC-011A remains Remote DONE at `a91db43 docs: reconcile repository tree semantics`; validation passed with `git diff --check` and `git status --short`; pushed to `origin/main`; Remote DONE confirmed |
| RIC-012A | Define RIC Framework Functional Map | Commit `3934815 docs: define RIC Framework functional map`; `docs/architecture/framework-functional-map.md` created; functional areas mapped against current repository structure; future/reserved areas, duplication risks, maturation order, and function-before-folder rule documented; no new folders created; no additional READY task opened; validation passed with `git status --short` and `git diff --check`; pushed to `origin/main`; Remote DONE confirmed |
| RIC-012B | Reconcile Post-RIC-012A Operational State | Trigger approved DONE; operational records reconciled after confirmed RIC-012A push; RIC-012A remains Remote DONE at `3934815 docs: define RIC Framework functional map`; `main` was synchronized with `origin/main`; working tree was clean before correction; no Human-Agent Operating Model task or additional READY task opened; validation passed with `git diff --check` and `git status --short`; local commit authorized with message `docs: reconcile post RIC-012A operational state` |

## Blocked Items

| ID | Blocker | Needed To Unblock |
| --- | --- | --- |
| None | None | None |

## Recommended Next Items

| ID | Title | Status | Notes |
| --- | --- | --- | --- |
| None | None | None | Use Discussion Gate before promoting any future task |

## Next Process Step

RIC-015B is Local DONE after Trigger approval. No task is active. No task is READY. Commit authorized with message `docs: define product instance boot rules`; push is not authorized yet.
