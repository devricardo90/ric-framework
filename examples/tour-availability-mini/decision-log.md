# Decision Log

**Project**: Tour Availability Mini

**Last Updated**: 2026-05-01

---

## Purpose

This log records architecture, stack, provider, version, deployment, and lifecycle decisions for this Product Instance.

---

## Decision Index

| ID | Area | Title | Status | Date |
| --- | --- | --- | --- | --- |
| TAM-DEC-001 | Product Selection | Tour Availability Mini chosen as second official Product Instance | Approved | 2026-05-01 |
| TAM-DEC-002 | Product Scope | Tour Availability Mini is not a booking product | Approved | 2026-05-01 |
| TAM-DEC-003 | Execution | TAM-001 starts with documentation only; no implementation | Approved | 2026-05-01 |
| TAM-DEC-004 | Stack | Default stack recommendation for TAM-002 is browser-native HTML/CSS/JS | Recorded; not yet approved for execution | 2026-05-01 |

---

## Decisions

### TAM-DEC-001 - Tour Availability Mini Chosen as Second Official Product Instance

Date: 2026-05-01

Area: Product Selection

Status: Approved by Trigger

Supersedes: None

#### Decision

Tour Availability Mini is approved as the second official Product Instance candidate in the RIC Framework, after Service Request Mini.

#### Reason

Service Request Mini tested creation, listing, localStorage persistence, basic validation, and manual state changes. The second official example must test a different mechanic to extend the governed portfolio.

Tour Availability Mini tests temporal rules, date validation, blocked dates, capacity restriction, calculated response, and negative cases with specific reasons. This is a meaningfully different class of product logic.

The selection was made because availability checking is a realistic, bounded, understandable product problem that can be proven with a minimal browser-native implementation.

#### Impact

Tour Availability Mini becomes the second governed Product Instance in `examples/tour-availability-mini/`. It follows the same documentation boot pattern as Service Request Mini and extends the framework's portfolio of covered mechanics.

#### Trigger Approval

Trigger approved Tour Availability Mini as the second official Product Instance candidate.

---

### TAM-DEC-002 - Tour Availability Mini Is Not a Booking Product

Date: 2026-05-01

Area: Product Scope

Status: Approved by Trigger

Supersedes: None

#### Decision

Tour Availability Mini is scoped to availability checking only. It is not a booking product.

No reservation, confirmation, payment, checkout, order, or ticket is created. The product answers one question and stops.

#### Reason

Booking would require a reservation store, a confirmation mechanism, payment logic, user identity, and a backend. These concerns are outside the scope of what this Product Instance is designed to prove.

The framework needs an example of a computed response product, not a transactional product. Limiting the scope to availability ensures the example remains minimal, understandable, and governed without infrastructure sprawl.

#### Impact

All documents in this Product Instance define the boundary explicitly: availability only, no booking. Any future task that attempts to introduce booking, payment, or transactional behavior must go through a new Discussion Gate.

#### Trigger Approval

Trigger approved the availability-only scope as a governing constraint for this Product Instance.

---

### TAM-DEC-003 - TAM-001 Starts With Documentation Only

Date: 2026-05-01

Area: Execution

Status: Approved by Trigger

Supersedes: None

#### Decision

TAM-001 is a documentation-only task. No implementation code is created.

The task produces: `README.md`, `prd.md`, `mvp-scope.md`, `stack-decision.md`, `backlog.md`, `status.md`, `decision-log.md`, `validation-gates.md`, and `session-handoff.md`.

#### Reason

The RIC Framework requires documentation before implementation. A Product Instance must have a defined problem, user, input, output, success criteria, forbidden scope, and stack direction before any code is written.

Starting with documentation allows the Trigger to review the product boundary before implementation begins. It prevents scope drift from occurring at the code level before the boundary is agreed at the document level.

This is the same pattern established by Service Request Mini (RIC-016A documented before SRM-001 selected a stack, and SRM-001 defined the stack before SRM-002 implemented the code).

#### Impact

No code exists in this Product Instance after TAM-001. Implementation is blocked until TAM-002 is authorized through a separate Discussion Gate.

#### Trigger Approval

Trigger authorized TAM-001 as a documentation-only task. One commit is authorized after Trigger review.

---

### TAM-DEC-004 - Default Stack Recommendation for TAM-002

Date: 2026-05-01

Area: Stack

Status: Recorded; not yet approved for execution

Supersedes: None

#### Decision

The default stack recommendation for a future TAM-002 implementation is browser-native HTML, CSS, and JavaScript with no framework, no dependency, no backend, no API, no database, no build step, no `package.json`, and no mandatory deploy.

#### Reason

The availability question (given a tour, a date, and a party size, is the tour available?) is a local calculation that can be answered by plain JavaScript without any external system. Tour data is small enough to be defined inline. Date logic is available in the browser natively. No server, database, or package is required.

#### Impact

The executing agent for TAM-002 must use this stack as the default. Any deviation requires a new Discussion Gate and Trigger authorization before proceeding.

#### Trigger Approval

This recommendation is recorded for governance continuity in TAM-001. It is not approved as an execution decision until TAM-002 is authorized.
