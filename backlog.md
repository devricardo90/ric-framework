# Backlog

## Governance Rules

- The Trigger is the only authority allowed to promote a task to READY.
- The Trigger is the only authority allowed to mark a task as DONE.
- Agents may recommend next work, but must not open scope without Trigger approval.

## Active Items

| ID | Title | Status | Goal | Validation | Commit Rule |
| --- | --- | --- | --- | --- | --- |
| RIC-019A | Define Official Example Review and Portfolio Presentation Rule | Local DONE pending local commit | Define the minimum review, validation, documentation, and portfolio-readiness rules for official RIC Framework examples. | `git status --short`; `git diff --stat`; `git diff --check`; confirm only authorized files changed; confirm no changes under `examples/service-request-mini/`; confirm no SRM-004 or other READY task opened. | Trigger authorized local commit. One documentation-rule commit only for RIC-019A. |

## Completed Items

| ID | Title | Evidence |
| --- | --- | --- |
| SRM-003 | Document Service Request Mini Demo and Validation Pack | Trigger confirmed Remote DONE; commit `2388ca7 docs: add service request mini demo validation pack` pushed to `origin/main`; post-push `git status --short` clean; `git status -sb` showed `## main...origin/main`; `git log --oneline -3 origin/main` confirmed `2388ca7`, `5c79ef3`, and `3449b22`; no SRM-004 or new READY task opened |
| RIC-018C | Define Mandatory Diff Evidence Before Commit | Trigger confirmed Remote DONE; commit `5c79ef3 docs: require mandatory diff evidence before commit` pushed to `origin/main`; post-push `git status --short` clean; `git status -sb` showed `## main...origin/main`; `git log --oneline -3 origin/main` confirmed `5c79ef3`, `3449b22`, and `408140a`; SRM-003 remained Recommended only, not READY |
| RIC-018B | Reconcile RIC-018A Remote DONE Operational State | Trigger confirmed Remote DONE; commit `3449b22 docs: reconcile RIC-018A remote done state` pushed to `origin/main`; post-push `git status --short` clean; `git status -sb` showed `## main...origin/main`; `git log --oneline -3 origin/main` confirmed `3449b22`, `408140a`, and `0e040fd`; SRM-003 remained Recommended only, not READY |
| RIC-018A | Define Post-Commit and Remote DONE Closure Rules | Trigger confirmed Remote DONE; commit `408140a docs: define post-commit and remote done closure rules` pushed to `origin/main`; post-push `git status --short` clean; `git status -sb` showed `## main...origin/main`; `git log --oneline -3 origin/main` confirmed `408140a`, `0e040fd`, and `777cc94` |
| SRM-002 | Implement Minimal Browser-Native Request Flow | Trigger approved Remote DONE; created `examples/service-request-mini/app/` with `index.html`, `styles.css`, `app.js`; browser validation confirmed by Trigger; push `f415b4f..777cc94 main -> main`; `main` synchronized with `origin/main` |
| SRM-001 | Define Stack and Validation Plan for Service Request Mini | Trigger approved DONE; compared four stack options; approved plain HTML/CSS/JS with browser `localStorage`; defined no-build future validation plan; `SRM-002` remains Recommended only; no code, dependencies, backend, database, auth, deploy, workflow, automation, or protected-path changes created; `git diff --check` PASS |
| RIC-016A | Create First Official Sample Product Documentation | Remote DONE at commit `c545e2c`; created `examples/service-request-mini/` with exactly 10 approved documentation files; boot-required files filled; lifecycle files controlled stubs; `SRM-001` Recommended only, not READY; no code, stack, automation, workflow, implementation, validation, version, deployment, or protected-path changes created; `git diff --check` PASS |
| RIC-015B | Define Product Instance Boot Rules | Remote DONE at commit `3f5286f`; created `docs/ops/product-instance-boot-rules.md`; defined Product Instance location, template-copy rules, boot-required files, lifecycle stub rules, first READY criteria, boot prohibitions, and Trigger approval requirements; scope respected; `git diff --check` PASS; no product or example created; protected paths untouched |
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

RIC-019A is the only active task and is Local DONE pending local commit. SRM-003 is recorded as Remote DONE at `2388ca7`. No SRM-004 READY task is open. No example is promoted to portfolio-ready, reusable-reference, or feature-evolution status by this task. Do not push without Trigger authorization.
