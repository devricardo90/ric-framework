# MVP Scope

**Project**: Tour Availability Mini

**MVP Version**: MVP-001

**Date**: 2026-05-01

**Related PRD**: `prd.md`

---

## MVP Question

The MVP must answer only this question:

> "Given a tour, a date, and a number of people, is the tour available? If not, why?"

This is the entire scope of the MVP. Anything beyond this question is out of scope.

---

## Allowed Rules

The MVP may implement exactly these seven rules:

| Rule | Description |
| --- | --- |
| 1. Weekday rule | A tour has a list of allowed weekdays. Requests on other weekdays are unavailable. |
| 2. Past date rule | A date in the past is unavailable, regardless of weekday or capacity. |
| 3. Blocked date rule | Specific dates may be blocked. A blocked date is unavailable regardless of weekday or capacity. |
| 4. Capacity rule | Each tour has a maximum number of people per session. |
| 5. Capacity exceeded | If the requested number of people exceeds the tour's maximum capacity, the tour is unavailable. |
| 6. Available response | If all rules pass, return a clear message that the tour is available. |
| 7. Unavailable response | If any rule fails, return a clear message stating the specific reason. |

No other rules are permitted in the MVP.

---

## Minimum MVP Questions

| Question | Answer |
| --- | --- |
| What is the smallest useful outcome? | A user can select a tour, a date, and a party size and receive a clear available or unavailable answer with a specific reason. |
| Which user receives value from this outcome? | A traveler or planner checking tour availability before attempting to book. |
| What problem does this slice solve now? | It replaces manual inquiry or guesswork with a direct availability check and a specific reason when unavailable. |
| What must be true for this slice to be accepted? | The scope is clear, the seven rules are documented, future features are excluded, and no stack is selected or implemented. |
| What is deliberately excluded? | Booking, payment, login, admin, database, backend, API, email, checkout, integration, deploy, and everything listed in Forbidden Scope. |
| What can wait for a future version? | Stack selection, implementation, validation plan, admin management, dynamic pricing, booking flow, and richer data. |
| What would make this slice too large? | Adding any booking step, any admin flow, any user account, any payment logic, or any external integration. |

---

## Forbidden Scope

The following are explicitly forbidden in the MVP and in TAM-001:

- Real booking or reservation of any kind.
- Payment, pricing, invoice, or checkout.
- User login, registration, or authentication.
- User account management or profile storage.
- Administrative tour management interface.
- Database, backend, or server-side logic.
- API, REST endpoint, webhook, or external service call.
- External calendar integration.
- Email, SMS, or push notification.
- Customer registration or CRM.
- Integration with Rick Travel or any production system.
- Mandatory deploy or hosted environment.
- Multiple language support.
- Dynamic pricing or coupon logic.
- Image upload or media management.
- Management panel or protected route.
- Production infrastructure or CI/CD pipeline.
- External dependency, npm package, or package.json.
- Framework (React, Vue, Angular, Svelte, or equivalent).
- Build step (webpack, Vite, Parcel, or equivalent).
- `.github/` directory, scripts, or workflow automation.
- Automated test framework.

---

## Future Scope

The following items have been identified as possible future work. They are recorded here only as future candidates. None of them are READY.

| Item | Status | Notes |
| --- | --- | --- |
| Actual booking flow | Future only, not READY | Requires a separate Discussion Gate |
| Payment integration | Future only, not READY | Out of scope for any MVP candidate |
| User authentication | Future only, not READY | Requires identity architecture decision |
| Admin tour management | Future only, not READY | Requires a separate Discussion Gate |
| Dynamic pricing | Future only, not READY | Requires a separate Discussion Gate |
| Multi-language support | Future only, not READY | Requires a separate Discussion Gate |
| Email confirmation | Future only, not READY | Requires provider and delivery decision |
| External calendar sync | Future only, not READY | Requires API and integration decision |

No future item may be promoted to READY without explicit Trigger authorization through a new Discussion Gate.

---

## Acceptance Criteria

- [ ] The MVP question is documented and bounded to availability only.
- [ ] The seven allowed rules are documented and complete.
- [ ] Forbidden scope is explicit and covers all forbidden items.
- [ ] Future scope items are documented as Future only, not READY.
- [ ] No stack is selected or implemented.
- [ ] No code, dependency, backend, database, API, or deploy exists.
- [ ] TAM-002 appears only as Future only, not READY.

---

## MVP Blockers

- Future implementation is blocked until the Trigger approves TAM-002 through a separate Discussion Gate.
- The agent executing future implementation may not choose a stack heavier than the default recommendation without a new Discussion Gate.

---

## Approval

This MVP scope is approved only as documentation for TAM-001.

It does not approve execution of TAM-002, product implementation, final stack selection, or deployment.
