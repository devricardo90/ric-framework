# Business Rules

**Project**: Tour Availability Mini

**Document ID**: TAM-BR-001

**Version**: 1.0

**Date**: 2026-05-01

**Task**: TAM-002A — Refine Tour Availability Rules Before Implementation

**Status**: Approved by Trigger

---

## Purpose

This document defines the exact business rules for Tour Availability Mini. It resolves all open questions from TAM-001 so that TAM-002 implementation is unambiguous. Every rule defined here must be implemented exactly as stated. Any deviation requires a new Discussion Gate.

---

## The MVP Question

The MVP answers exactly one question:

> "Given a tour, a date, and a number of people, is the tour available? If not, why?"

The answer is always one of two values: **Available** or **Unavailable with a specific reason**.

---

## Rule Evaluation Order

Rules are evaluated in the following fixed order. The first rule that fails stops evaluation and returns the corresponding reason. Multiple simultaneous failures are not reported.

| Priority | Rule | Trigger Condition |
| --- | --- | --- |
| 1 | Invalid party size | Party size is less than 1, not a whole number, or missing |
| 2 | Past date | The requested date is before today |
| 3 | Blocked date | The requested date appears in the tour's blocked-dates list |
| 4 | Unavailable weekday | The requested date falls on a weekday the tour does not operate |
| 5 | Capacity exceeded | The requested party size is greater than the tour's maximum capacity |
| — | Available | All rules pass |

---

## Rule Definitions

### Rule 1 — Invalid Party Size

**Condition**: The party size input is empty, zero, negative, or not a whole number.

**Decision**: This is an input validation rule, not an availability rule. It runs before any availability check.

**What counts as invalid**:
- Empty input.
- Zero (0 people).
- Any negative number.
- Any non-integer value (e.g., 1.5, 2.3).

**What counts as valid**: Any whole number equal to or greater than 1 (1, 2, 3, …).

**User-facing message**:
> "Please enter a valid number of people (minimum 1)."

**MVP constraint**: The input field must accept only whole numbers. The browser `number` input with `min="1"` and `step="1"` is sufficient. No external validation library is permitted.

---

### Rule 2 — Past Date

**Condition**: The requested date is strictly before today's date.

**Definition of today**: Today is the current calendar date in the user's local browser timezone. Today itself is **not** past — a tour can operate today.

**Examples**:
- Today = 2026-05-01. Requested date = 2026-04-30 → past, unavailable.
- Today = 2026-05-01. Requested date = 2026-05-01 → not past, continues to next rule.
- Today = 2026-05-01. Requested date = 2026-05-02 → not past, continues to next rule.

**User-facing message**:
> "This date has already passed. Please select today or a future date."

**MVP constraint**: Use the browser's native `Date` comparison. No external date library is permitted.

---

### Rule 3 — Blocked Date

**Condition**: The requested date appears in the tour's `blockedDates` list.

**Definition**: A blocked date is a specific calendar date (YYYY-MM-DD) that is closed regardless of weekday or capacity. Blocked dates are defined statically in the tour configuration.

**Examples of blocked-date use cases** (for documentation only; the MVP does not display reasons for individual blocked dates):
- Public holiday.
- Private event.
- Maintenance.
- Weather closure.

**User-facing message**:
> "This date is not available. Please select a different date."

**MVP constraint**: The blocked dates list is a hardcoded array in the tour configuration object. No admin UI, no dynamic input, no external calendar. The reason a specific date is blocked is not displayed to the user in the MVP.

---

### Rule 4 — Unavailable Weekday

**Condition**: The weekday of the requested date is not in the tour's `operatingDays` list.

**Definition of operating days**: Each tour has a fixed list of weekdays on which it operates. Days are represented as integers: 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday.

**Example**: A tour with `operatingDays: [2, 4, 6]` operates on Tuesday, Wednesday (no — 4 is Thursday), and Saturday. If the user selects a Monday (1), the rule fails.

**User-facing message**:
> "This tour does not operate on [weekday name]. It runs on: [list of operating day names]."

Example: "This tour does not operate on Monday. It runs on: Tuesday, Thursday, Saturday."

**MVP constraint**: The weekday name is derived from the date using the browser's native `Date` API. The operating day names in the message are derived from the tour's `operatingDays` array. No external library is permitted.

---

### Rule 5 — Capacity Exceeded

**Condition**: The requested party size is greater than the tour's `maxCapacity`.

**Capacity model decision**: Capacity is **per tour**, not per date and not per tour-date combination. One fixed maximum applies to all dates of a given tour.

**Rationale**: The MVP does not track actual bookings or reservations. There is no sold-out concept. Capacity is purely a ceiling: requested people must not exceed the tour's maximum. Per-date and per-tour-date capacity models require booking state, which is forbidden in the MVP.

**Sold-out behavior**: Sold out is **not applicable** in the MVP. Sold out requires tracking how many seats are already reserved, which requires persistence. Since the MVP has no booking flow and no persistence, a tour is never "sold out" — it only fails if the requested party size exceeds the maximum.

**Examples**:
- Tour max capacity = 10. Requested = 8 → passes (8 ≤ 10).
- Tour max capacity = 10. Requested = 10 → passes (10 ≤ 10).
- Tour max capacity = 10. Requested = 11 → fails (11 > 10).

**User-facing message**:
> "This tour has a maximum capacity of [N] people per session. Please reduce your party size."

Example: "This tour has a maximum capacity of 10 people per session. Please reduce your party size."

**MVP constraint**: `maxCapacity` is a single integer defined per tour in the configuration object. No date-specific or session-specific capacity is permitted.

---

### Rule 6 — Available

**Condition**: All five rules above pass.

**User-facing message**:
> "This tour is available on [weekday name], [formatted date] for [N] people."

Example: "This tour is available on Thursday, May 7, 2026 for 4 people."

**Format**: The date is formatted in a human-readable form. Exact format is: `[weekday name], [month name] [day], [year]`. No external date formatting library is permitted. Use `Date.toLocaleDateString` or manual string construction.

---

## Tour Configuration Model

Each tour in the MVP is a plain JavaScript object with the following shape:

```
{
  id:            string   — unique identifier, e.g. "tour-001"
  name:          string   — display name, e.g. "Old Town Walking Tour"
  operatingDays: number[] — weekday integers, 0=Sunday ... 6=Saturday
  blockedDates:  string[] — ISO date strings, e.g. ["2026-05-10", "2026-06-01"]
  maxCapacity:   number   — maximum party size, whole number, minimum 1
}
```

This shape is documentation only. Implementation must match exactly. No additional fields are permitted in the MVP without a new Discussion Gate.

The MVP must include at least two distinct tours in the configuration so that the weekday rule can be demonstrated with different operating schedules.

---

## What the MVP Must Display

The MVP interface must include the following elements:

| Element | Purpose |
| --- | --- |
| Tour selector | Dropdown or list allowing the user to choose one tour from the predefined configuration |
| Date input | Date field allowing the user to enter or select a date |
| Party size input | Number field allowing the user to enter the number of people |
| Check button | Button that triggers the availability evaluation |
| Result area | Text area that shows the availability message after the check runs |

No other UI elements are required. No additional elements may be added to the MVP without a new Discussion Gate.

---

## What the MVP Must Not Handle Yet

The following behaviors are explicitly deferred and must not be implemented in TAM-002:

| Deferred Behavior | Reason |
| --- | --- |
| Calendar UI with blocked/unavailable dates visually marked | Requires complex date-picker component; future scope |
| Showing which dates ARE available | Requires iterating over a date range; future scope |
| Multiple sessions per day | Requires time-slot model; future scope |
| Partial availability (some people can go, some cannot) | Requires partial capacity; future scope |
| Waitlist | Requires persistence and notifications; forbidden scope |
| Simultaneous display of multiple failure reasons | First-failure-only is the MVP rule |
| Sold-out status based on existing reservations | Requires booking tracking; forbidden scope |
| Dynamic capacity per date | Requires per-date configuration; future scope |

---

## Date Field Behavior

**Unavailable dates are selectable.** The date input does not pre-filter or visually block any date. The user may enter or select any calendar date. Availability validation runs only after the user presses the Check button.

**Rationale**: Pre-filtering dates requires a custom calendar component, which is more complex than the MVP warrants. The MVP evaluates availability on demand, not proactively.

**No pre-validation on date change**: The result area updates only when the user explicitly triggers the check. It does not update automatically as the user types or changes the date.

---

## Validation Approach

All validation is synchronous and in-browser. No server call, API call, or asynchronous operation is required or permitted in the MVP.

The validation sequence on Check button press:

1. Read tour selection, date value, and party size value from the DOM.
2. Apply Rule 1 (invalid party size). If fails, show message and stop.
3. Parse the date. Apply Rule 2 (past date). If fails, show message and stop.
4. Apply Rule 3 (blocked date). If fails, show message and stop.
5. Apply Rule 4 (unavailable weekday). If fails, show message and stop.
6. Apply Rule 5 (capacity exceeded). If fails, show message and stop.
7. All rules passed. Show available message.

---

## Open Questions Resolved by TAM-002A

| Question | Resolution |
| --- | --- |
| Is today a past date? | No. Today is available. Past = yesterday and earlier. |
| Is capacity per tour, per date, or per tour+date? | Per tour. One fixed maximum for all dates. |
| What is sold-out behavior? | Not applicable. No booking tracking exists in the MVP. |
| Can the user select unavailable dates? | Yes. All dates are selectable. Validation runs on check, not on selection. |
| What if party size is 0 or negative? | Invalid party size rule fires. Message: minimum 1. |
| What if party size is a decimal? | Invalid party size rule fires. Message: minimum 1. |
| Are blocked date reasons shown to the user? | No. The message states the date is not available. No reason is given. |
| What weekday format is shown in messages? | Full English weekday name (Monday, Tuesday, etc.). |
| What date format is shown in the available message? | `[Weekday], [Month] [Day], [Year]` — e.g., Thursday, May 7, 2026. |
| How many tours must the MVP include? | At least two, with different operating schedules. |
| Does the result update automatically on input change? | No. Only on explicit Check button press. |

---

## Approval

This business rules document is approved as part of TAM-002A documentation.

It does not authorize implementation. TAM-002 implementation remains blocked until the Trigger approves a separate implementation task.
