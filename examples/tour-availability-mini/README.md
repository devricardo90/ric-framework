# Tour Availability Mini

Tour Availability Mini is the second official Product Instance example in the RIC Framework. It is a small browser-native availability checker that tests temporal rules, date validation, blocked dates, and capacity restriction — without implementing a real booking system.

## What Tour Availability Mini Is

This example is a governed Product Instance designed to answer one specific question:

> "Given a tour, a date, and a number of people, is the tour available? If not, why?"

It is intentionally bounded to availability logic only. It does not book, register, charge, integrate, or persist any data.

## What Problem It Tests

Service Request Mini tested creation, listing, localStorage persistence, basic validation, and manual state changes.

Tour Availability Mini tests a different mechanic:

- Temporal rules: a tour runs only on certain weekdays.
- Date validation: a past date is unavailable.
- Blocked dates: specific calendar dates may be closed.
- Capacity restriction: each tour has a maximum number of people.
- Calculated response: the app computes a yes/no answer with a clear reason.
- Negative cases: when the answer is no, the reason is explicit and specific.

This mechanic was deliberately chosen because it exercises a different class of product logic than the first example.

## Why It Exists After Service Request Mini

The RIC Framework uses official Product Instance examples to prove that governed product slices can be delivered and validated without heavyweight infrastructure. Each example must test a mechanic that previous examples did not cover.

Service Request Mini proved that CRUD operations, local persistence, and basic validation can be governed under the framework. It did not test time-based logic or computed availability.

Tour Availability Mini extends the portfolio by proving that temporal rules and calculated responses can be governed the same way: with a documented scope, a minimal stack, manual validation, and controlled task movement under Trigger authority.

## What It Is Not

- It is not a booking product. No reservation is made.
- It is not a payment product. No transaction occurs.
- It is not an authenticated product. No login or user account exists.
- It is not connected to an external system. No API, database, or calendar integration exists.
- It is not Rick Travel or any other production system.
- It is not a multi-language product.
- It does not manage tours administratively.
- It does not send email or notifications.
- It does not store availability history.

## Current Status

TAM-001 is IN_PROGRESS. Documentation is being defined. No implementation code exists yet.

Implementation is blocked until a future TAM-002 task is approved through a separate Discussion Gate.

## MVP Boundary

The MVP must answer only one question:

> "Given a tour, a date, and a number of people, is the tour available? If not, why?"

Allowed rules:

1. A tour has allowed weekdays.
2. A past date is unavailable.
3. Specific dates may be blocked.
4. Each tour has a maximum capacity.
5. If requested people exceed capacity, the tour is unavailable.
6. If available, return a clear availability message.
7. If unavailable, return a clear reason.

Anything beyond these seven rules is out of scope for the MVP.
