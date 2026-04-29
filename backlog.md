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

## Blocked Items

| ID | Blocker | Needed To Unblock |
| --- | --- | --- |
| None | None | None |

## Recommended Next Items

| ID | Title | Status | Notes |
| --- | --- | --- | --- |
| RIC-005 | Product Discipline Core | Recommended | Candidate only; define the first `docs/product/` product discipline core document after Trigger approval |

## Next Process Step

RIC-004 is DONE by Trigger approval. RIC-005 is recommended only and is not READY.
