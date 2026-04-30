# Official Example Review and Portfolio Presentation Rule

This document defines the minimum rule for reviewing an official RIC Framework example before it can be presented publicly, reused as a reference, or evolved with new features.

RIC-019A defines the rule only. It does not promote any existing example to portfolio-ready, reusable-reference, or feature-evolution status.

## Purpose

Official examples carry more weight than ordinary drafts. They teach how the framework should be used, so they must be reviewed against product clarity, scope control, validation evidence, documentation quality, and honest limitations before they are presented as reference material.

An example must not be called portfolio-ready, reusable as a reference, or ready for feature evolution because it looks complete. Those labels require a separate review task with evidence.

## What Qualifies As An Official RIC Framework Example

An official RIC Framework example is a Product Instance under `examples/<product-slug>/` that satisfies all of the following:

- It has a clear product definition.
- It has documented MVP scope and explicit out-of-scope boundaries.
- It records the approved stack or stack-agnostic decision that governed execution.
- It has task history in Product Instance operational files.
- It has validation evidence tied to the implemented or documented behavior.
- It has Trigger approval under a dedicated READY task.
- It does not rely on chat history to be understood, resumed, or reviewed.

An example is not official only because it exists under `examples/`. It must pass review and be recorded as approved.

## Required Review Evidence

Before an example can be called official, the review task must provide:

- `git status --short`.
- `git status -sb`.
- `git diff --stat`.
- Relevant diff excerpts or full diff, depending on review size.
- Confirmation that only authorized files changed.
- Confirmation that no out-of-scope files were created, modified, deleted, or renamed.
- Confirmation that protected paths and app code were not changed unless explicitly authorized.
- Confirmation that no new READY task was opened without Trigger approval.

The review must inspect repository files, not rely on narrative claims alone.

## Required Validation Evidence

An official example must have validation evidence proportional to its stack and scope.

Minimum validation evidence includes:

- The commands or manual checks that were executed.
- The expected result for each check.
- The actual result or pending review status.
- Evidence that the implementation or documentation matches the approved task scope.
- Evidence that forbidden stack elements were not introduced.
- Evidence that security and data limitations were reviewed honestly.

For browser-native examples, validation must include manual run instructions, behavior checks, storage limitations, and confirmation that no backend, API, authentication, deploy, package manager, dependency, or test framework was introduced unless separately approved.

## Required Documentation

An official example must include enough documentation for another person to open, understand, run, validate, and resume the example without asking the original Trigger or agent for context.

Minimum documentation includes:

- Product purpose and problem solved.
- User or audience.
- MVP scope.
- Stack decision or stack boundary.
- How to run or inspect the example.
- Manual validation checklist or equivalent review steps.
- Known limitations.
- Security and data limitations.
- Operational handoff and current task state.
- Clear out-of-scope list.

Documentation must be repository-facing professional English.

## Required Limitation Declarations

Every official example must declare its limits plainly.

Limits may include:

- Prototype-only persistence.
- Local-only behavior.
- Missing authentication or authorization.
- No backend or external database.
- No deployment target.
- No multi-user behavior.
- No production security guarantee.
- Missing automation or test coverage.
- Features intentionally deferred to future tasks.

An example with serious limitations may still be official if the limitations are visible and the example is not presented beyond what it proves.

## Portfolio-Ready Criteria

Portfolio-ready is a higher status than official.

An example may be presented publicly as portfolio-ready only after a separate review task confirms:

- The example has a clear user-facing purpose.
- The README explains what the example is, how to run it, and what it proves.
- Validation evidence is current and reviewable.
- Security and data limitations are visible.
- The example has no known broken core flow.
- Screenshots, demo links, or visual assets exist if required by the presentation context.
- The repository state is clean and the reviewed commit is pushed.
- The Trigger explicitly approves portfolio-ready status.

RIC-019A does not create screenshots, demo links, portfolio pages, or presentation assets. It only defines when those items may be required.

## Reusable Reference Criteria

An example may be reused as a reference only after a separate review task confirms:

- The example follows current RIC Framework structure and governance.
- Its operational records are internally consistent.
- Its task history is understandable from repository files.
- Its validation pack is complete enough for another agent to repeat.
- Its limitations are clear enough to prevent copying unsafe assumptions.
- It does not depend on private chat context.
- The Trigger explicitly approves reusable-reference status.

Reference status does not mean the implementation is production-ready.

## Feature Evolution Criteria

An official example may evolve with new features only when:

- The current example state is reviewed and stable.
- Existing validation evidence is current.
- The next feature is proposed as a separate task with clear scope.
- The feature does not bypass product, stack, security, or validation gates.
- The Trigger approves the next task as READY.

Feature evolution must be incremental. A feature task must not silently redesign the example, change the stack, add dependencies, or introduce backend/auth/deploy concerns unless those decisions are explicitly approved.

## Freeze Criteria

An example must remain frozen when:

- Operational state is stale or contradictory.
- Validation evidence is missing or obsolete.
- Known limitations are not documented.
- The example has not been reviewed after a major framework rule change.
- A proposed feature would expand scope without a product or architecture decision.
- The Trigger has not approved a READY task for the change.

Frozen does not mean abandoned. It means no new feature work may begin until review evidence is restored.

## Feature Creep Controls

Official examples must stay small enough to teach the framework clearly.

To avoid feature creep:

- Keep one active task at a time.
- Separate review tasks from feature tasks.
- Keep portfolio/readiness approval separate from implementation.
- Treat screenshots, demo links, and presentation polish as separate scope.
- Do not add backend, authentication, deploy, dependencies, automation, or workflows without a dedicated decision.
- Do not convert limitations into features unless the Trigger approves a feature task.
- Do not use an example to smuggle stack decisions into the framework core.

## Approval Labels

The following labels require explicit Trigger approval and evidence:

- Official Example.
- Portfolio-ready.
- Reusable reference.
- Ready for feature evolution.
- Frozen pending review.

Agents may recommend these labels, but must not assign them autonomously.

## Application To Existing Examples

This rule can be applied to existing examples only through a future review task.

RIC-019A does not promote Service Request Mini, `examples/sample-project/`, or any other example to a new status. It only defines the review standard that a future task must use.
