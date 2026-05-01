# Product Requirements Document

**Project**: Tour Availability Mini

**Version**: PRD-001

**Date**: 2026-05-01

**Trigger / Owner**: Trigger

---

## Problem

Tour operators and travelers need to know whether a tour is available on a specific date before attempting to book it. Without an availability check, users waste time pursuing unavailable dates, operators receive invalid requests, and the system cannot communicate the reason for unavailability.

Tour Availability Mini documents a minimal product that answers a single availability question: given a tour, a date, and a party size, is the tour available? If not, why?

This is not a booking product. The sole purpose is to compute and communicate a clear availability answer.

---

## User

Primary user: a traveler or planner who wants to check whether a specific tour is available on a given date for a given number of people.

There is no secondary administrative user in the MVP. Tour data is defined in the product configuration, not through an admin interface.

---

## Input

The user provides three inputs:

1. A tour selection (chosen from a predefined list of tours).
2. A date (selected or typed by the user).
3. A number of people (entered by the user).

---

## Output

The product returns one of two responses:

**Available**: A message confirming the tour is available on the given date for the given party size.

**Unavailable**: A message stating that the tour is not available, with a specific reason chosen from:

- The date is in the past.
- The tour does not operate on that weekday.
- The date is blocked.
- The requested party size exceeds the tour's maximum capacity.

The response must be human-readable and specific. It must not return a generic error.

---

## Success Criteria

- [ ] A user can select a tour, a date, and a number of people.
- [ ] The product returns a clear available or unavailable answer.
- [ ] When unavailable, the product returns a specific reason from the allowed rule set.
- [ ] A past date returns an unavailable response with a past-date reason.
- [ ] A date on a disallowed weekday returns an unavailable response with a weekday reason.
- [ ] A blocked date returns an unavailable response with a blocked-date reason.
- [ ] A party size exceeding capacity returns an unavailable response with a capacity reason.
- [ ] A valid date, allowed weekday, non-blocked date, and acceptable party size returns an available response.
- [ ] No backend, API, database, authentication, payment, booking, or external dependency is required.

---

## Non-Goals

- Booking or reserving a tour.
- Payment or pricing.
- User login, registration, or account management.
- Email or notification delivery.
- Administrative tour management.
- External calendar integration.
- Dynamic pricing or coupon logic.
- Checkout or order flow.
- Multi-language support.
- Image upload or media management.
- Integration with Rick Travel or any production system.
- Production infrastructure or mandatory deploy.

---

## Constraints

- The product must run in a browser without a build step, package manager, dependency, backend, API, or external service.
- Tour data (allowed weekdays, blocked dates, capacity) is defined in the product configuration directly in the source file.
- No framework is required or permitted for the MVP.
- No database is permitted for the MVP.
- No external dependency is permitted for the MVP.
- The agent executing implementation may not choose a heavier stack without a new Discussion Gate authorized by the Trigger.

---

## Known Risks and Open Questions

| Risk or Question | Impact | Status | Owner |
| --- | --- | --- | --- |
| Tour data is static and must be manually updated. | Low | Accepted for MVP | Trigger |
| No booking step may limit perceived usefulness. | Low | Accepted; scope is availability only | Trigger |
| Stack choice for implementation is not yet selected. | Medium | Open; blocked until TAM-002 | Trigger |
| Blocked dates must be manually maintained in configuration. | Low | Accepted for MVP | Trigger |

---

## Product Blockers

- No blocker prevents this documentation from existing.
- Future implementation is blocked until the Trigger approves TAM-002 through a separate Discussion Gate.

---

## Approval

This PRD is part of TAM-001, approved by the Trigger as the second Official Governed Example documentation instance.

This PRD does not approve product implementation, stack selection, deployment, or any internal READY task beyond TAM-001.
