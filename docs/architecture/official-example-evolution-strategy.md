# Official Example Evolution Strategy

This document defines the RIC Framework strategy for evolving an existing official example after it has been classified under RIC-019A.

RIC-023A is a documentation-only strategy task. It does not open a READY implementation task, change app code, create portfolio assets, or promote TAM-003 to READY.

## Purpose

SRM and TAM proved that the framework can govern initial product slices from zero. RIC-022A classified TAM as an Official reference example. The next framework gap is controlled evolution: proving that an official example can grow after classification while preserving simplicity, scope control, documentation discipline, validation evidence, and Git governance. This strategy records the decision for how that test will be conducted.

## 1. Which Official Example Will Be Evolved

Target: Tour Availability Mini.

Candidate evolution task: TAM-003 — Evolve Tour Availability Mini With Selectable Multi-Tour Rules.

TAM-003 is a future candidate only. It is not READY. It must not be promoted to READY without explicit Trigger authorization through a new Discussion Gate.

## 2. Why TAM Instead of SRM

| Dimension | TAM | SRM |
| --- | --- | --- |
| Business rule clarity | Five rules documented in `business-rules.md` with explicit evaluation order, edge cases, and per-rule messages | Validation rules embedded in product flow; less isolated from CRUD concerns |
| Scenario coverage | Four distinct unavailability reasons, each independently testable | Pass/fail around required fields and status transitions |
| Domain variation potential | Two tours with different operating days, blocked dates, and capacity already defined — natural extension to selectable multi-tour rules | CRUD extension would likely require persistence or list management changes before producing new learning |
| Recency of validation evidence | RIC-022A review completed at `130ef7f`; TAM-002 Remote DONE at `8b22644` | RIC-020A review completed earlier; no subsequent implementation |
| Stack surface | No persistence, no localStorage, stateless computation — evolution stays in logic layer | localStorage persistence creates entanglement with any list-based evolution |
| Framework learning gap | Controlled logic evolution without adding complexity layers | Evolution would more likely surface persistence or security gaps before logic gaps |

TAM provides a cleaner surface for testing controlled evolution. Its stateless computation model means the evolution stays in business logic, not in storage, security, or persistence architecture.

## 3. What Type of Evolution Best Tests the Framework

Selectable multi-tour rules.

The existing TAM MVP uses two static tours defined in a configuration object. The user selects a tour, and the availability check applies that tour's rules. The evolution candidate extends this so that each tour has its own explicit name, capacity, available days, blocked dates, and result messages — and the availability engine applies the selected tour's rules without scattered conditional branching.

This type of evolution is preferred because:

- It tests real domain variation: tour A and tour B have genuinely different rules, not just different labels.
- It stays inside the existing product boundary: availability checking is still the only output.
- It does not introduce a new complexity layer: no persistence, no multi-user behavior, no authentication, no API.
- It produces testable negative cases: a date valid for tour A may be invalid for tour B; this difference must be demonstrable.
- It tests configuration discipline: tour data must be structured, not hardcoded as `if tour === x` conditionals.

The evolution must not use localStorage history as a next step. Storing query history introduces persistence and data-lifecycle concerns before the evolution learning question is answered. The learning question is about logic evolution, not persistence architecture.

## 4. What Learning Question Does This Evolution Answer

Central learning question: Can the RIC Framework evolve an existing official example with real domain variation while preserving simplicity, scope control, documentation discipline, validation evidence, and Git governance?

Secondary questions this evolution must answer:

- Can the framework govern a scope extension without reopening or weakening existing product boundaries?
- Can existing validation scenarios be preserved while new scenarios are added?
- Can tour configuration be extended without introducing scattered conditional logic?
- Can a READY evolution task be defined with the same precision as an initial implementation task?
- Can the Git evidence for an evolution task be as clean as for an initial task?

## 5. Documents That Must Be Consulted Before Implementation

Any agent executing TAM-003 must read these documents before touching any file:

| Document | Reason |
| --- | --- |
| `examples/tour-availability-mini/business-rules.md` | Defines the existing five rules, evaluation order, edge cases, and messages that must be preserved |
| `examples/tour-availability-mini/mvp-scope.md` | Defines the MVP boundary; evolution must not reopen forbidden scope |
| `examples/tour-availability-mini/stack-decision.md` | Records the approved browser-native stack; no deviation without a new Discussion Gate |
| `examples/tour-availability-mini/validation-gates.md` | Defines existing validation gates; evolution must satisfy or extend them, not bypass them |
| `docs/architecture/official-example-review-and-portfolio-rule.md` | RIC-019A criteria; evolution must not degrade the official reference example classification |
| `docs/architecture/tour-availability-mini-official-example-review.md` | RIC-022A classification record; describes current state and known gaps |
| `docs/architecture/examples-and-automation-boundaries.md` | Defines Manual-First policy, example isolation, and automation triggers |

Consulting these documents is not optional. An executor that skips pre-read and proceeds directly to code violates the framework's discussion-before-execution model.

## 6. What Proves the Evolution Was Controlled

The evolution is controlled if all of the following are true after TAM-003 closes:

- All existing TAM-002 scenarios still pass. No regression in any rule path.
- New scenarios demonstrate that tour A and tour B behave differently under at least one rule.
- No forbidden scope was introduced: no booking, no payment, no authentication, no backend, no API, no database, no localStorage, no framework, no build step, no external dependency.
- Tour configuration remains a structured data object. No `if tourId === 'tour-001'` or equivalent conditional branching was introduced in the rule engine.
- `business-rules.md` was updated to reflect the evolution, or a new equivalent document was produced.
- Validation gates were satisfied with Git evidence: `git status --short`, `git diff --check`, manual browser validation, post-commit `git show --stat`.
- The commit contains only the files authorized in the READY task.
- The Trigger authorized the commit and confirmed Remote DONE.

## 7. What Would Count as Framework Failure

The evolution fails the framework test if any of the following occurs:

- Existing rule scenarios regress after the evolution.
- Tour-specific logic is implemented as scattered `if tourId === x` conditionals rather than data-driven configuration.
- Forbidden scope is introduced: booking, payment, authentication, backend, API, database, localStorage, framework, build step, or external dependency.
- The stack is changed without a Discussion Gate.
- Validation gates are bypassed or not reported.
- The commit contains unauthorized files.
- A post-commit state check shows a dirty working tree.
- The executor promotes TAM-003 to READY or opens additional tasks without Trigger authorization.
- The evolution degrades the official example classification by removing documentation, breaking the validation record, or introducing undeclared limitations.

## 8. What Is Explicitly Out of Scope

The following are out of scope for the evolution strategy and for TAM-003:

- App code changes of any kind until TAM-003 is authorized as READY.
- Changes under `examples/tour-availability-mini/app/`.
- Visual polish, screenshots, or portfolio packaging.
- Demo script or manual validation pack creation.
- New templates or template modifications.
- New permanent framework gates.
- A third product instance.
- localStorage availability history or any persistence layer.
- Backend, API, authentication, database, or external service.
- Portfolio readiness review.
- Any work under `examples/service-request-mini/`.
- Framework rule documents other than the strategy record created by this task.

TAM-003 must not be promoted to READY without explicit Trigger authorization through a new Discussion Gate.

## TAM-003 Candidate Definition (Future Only, Not READY)

Recorded here for governance continuity. This is not a READY task definition.

**Candidate scope:**

- The user can select between at least two tours.
- Each tour has its own name, capacity, available days, blocked dates, and result messages defined as a structured configuration object.
- The availability engine applies the selected tour's rules using the configuration, not hardcoded conditionals.
- All existing TAM-002 scenarios continue to pass.
- At least one scenario demonstrates that tour A is available on a date when tour B is not.
- At least one scenario demonstrates that tour A and tour B have different capacities that produce different results.

**Candidate stack boundary:**

Browser-native HTML, CSS, and JavaScript. No framework, no dependency, no backend, no build step, no package manager, no authentication, no deploy, no localStorage.

**Candidate forbidden scope:**

All items listed in Section 8 above, plus any item in the existing `mvp-scope.md` forbidden scope list.

**Promotion requirement:**

TAM-003 requires a new Trigger-authorized Discussion Gate before it may be promoted to READY. The Discussion Gate must produce an updated READY task definition with explicit scope, out-of-scope, definition of done, validation commands, and commit rule.
