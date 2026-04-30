# MVP Scope

**Project**: Service Request Mini

**MVP Version**: MVP-001

**Date**: 2026-04-30

**Related PRD**: `prd.md`

---

## MVP Definition

MVP-001 defines the smallest useful Service Request Mini product slice: a requester can submit a service request, the request has a basic status, and an administrator can view requests and change their status.

This MVP is documentation-only in RIC-016A. It does not implement the product and does not choose a stack.

---

## Minimum MVP Questions

| Question | Answer |
| --- | --- |
| What is the smallest useful outcome? | A documented request flow with submission fields, status model, administrative view, and acceptance criteria. |
| Which user receives value from this outcome? | Internal requester first; administrator/operator second. |
| What problem does this slice solve now? | It replaces scattered informal service requests with a minimal, traceable request record and status. |
| What must be true for this slice to be accepted? | The scope is clear, future features are excluded, no stack is selected, and the first internal task remains Recommended only. |
| What is deliberately excluded? | Authentication, comments, attachments, notifications, SLA, reporting, integrations, code, deployment, and automation. |
| What can wait for a future version? | Stack selection, implementation, validation plan, authentication, notifications, and richer administration. |
| What would make this slice too large? | Adding identity, workflows, communication features, reporting, or implementation during the documentation boot task. |

---

## Included in This MVP

- Request creation model with title, description, requester contact, and category.
- Status model with `New`, `In Review`, `Done`, and `Rejected`.
- Administrative list view concept for reviewing submitted requests.
- Administrative status update concept.
- Initial candidate task for a future stack and validation Discussion Gate.

---

## Excluded from This MVP

- Authentication or user accounts, because the first MVP should stay focused on request tracking.
- Role permissions, because identity and authorization require a separate decision.
- Notifications, because they introduce delivery channels and provider decisions.
- Attachments, because storage requires a separate architecture decision.
- SLA tracking, because it adds business rules outside the first value proof.
- Reporting and exports, because they are not required to prove the basic request flow.
- Any executable product implementation.

---

## Nice-to-Have (Not Authorized)

- Email notifications for status changes.
- Request comments.
- Attachment uploads.
- Admin-configurable categories.
- Dashboard metrics.
- Public requester status page.

---

## Forbidden Scope

- Creating frontend, backend, database, authentication, deployment, scripts, package managers, workflows, `.github`, or automation.
- Choosing a final stack inside RIC-016A.
- Marking an internal Product Instance task as READY.
- Using `examples/sample-project/` as the model for this instance.
- Altering `templates/project/` or other framework templates.

---

## Acceptance Criteria

- [ ] The Service Request Mini MVP is documented as a small request-submission and status-tracking product.
- [ ] Current scope, future candidates, nice-to-have items, and forbidden scope are separated.
- [ ] The instance remains documentation-only and stack-agnostic.
- [ ] `SRM-001` appears only as a Recommended future task.

---

## MVP Blockers

- Future implementation is blocked until a stack and validation plan are approved through a separate Discussion Gate.

---

## Approval

This MVP scope is approved only as documentation for RIC-016A.

It does not approve execution of `SRM-001`, product implementation, final stack selection, or deployment.
