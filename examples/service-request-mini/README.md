# Service Request Mini

Service Request Mini is the first official Product Instance example in the RIC Framework. It is a small browser-native request tracker that demonstrates how a governed product slice can move from documented context to a manually validatable MVP without introducing a heavy stack.

## What This Example Is

This example is a local-only service request flow. A user can open the app in a browser, create a request, see it in a list, change its status, reload the page, and confirm that the data remains in browser `localStorage`.

It is intentionally simple so the product behavior, validation evidence, and governance records can be inspected without build tooling or infrastructure.

## Problem Solved

Small teams often receive service requests through scattered messages or informal notes. Service Request Mini shows a minimal way to capture a request, display it, and track its status in one local browser session.

## MVP Scope

The implemented MVP covers:

- Creating a request with title, description, category, and optional priority.
- Listing created requests.
- Changing request status between New, In Progress, and Done.
- Preserving request data across reloads using `localStorage`.
- Clearing local request data with user confirmation.

## Stack Decision

The approved stack is plain HTML, CSS, and JavaScript with browser `localStorage`.

The app uses:

- `app/index.html`
- `app/styles.css`
- `app/app.js`
- Browser runtime only
- No build step
- No package manager
- No dependencies
- No backend
- No authentication
- No deploy target

## How To Run

Open this file in a local browser:

```text
examples/service-request-mini/app/index.html
```

No local server, package install, build command, environment variable, or external service is required.

## How To Validate Manually

Use `manual-validation.md` as the checklist and `demo-script.md` as the guided flow.

At minimum, validate that:

- Required fields block invalid submission.
- A valid request appears in the list.
- Status can be changed.
- Reload preserves data through `localStorage`.
- Clear All Data resets the app to the empty state.
- No backend, API, authentication, deploy, dependency, or external network call is required.

## Intentional Limitations

- Data is local to one browser and one device.
- There is no multi-user behavior.
- There are no real requester or administrator accounts.
- There is no backend or database.
- There is no deployment target.
- There are no notifications, attachments, comments, SLA timers, reports, exports, or integrations.

## Security And Data Limitations

`localStorage` is not secure production storage. It does not protect sensitive data from other scripts running in the same browser origin, and it does not replace a backend, database, authentication, authorization, encryption, audit trail, or backup strategy.

This example must not be used to collect secrets, production credentials, regulated data, or sensitive personal information.

## How This Demonstrates RIC Framework

This Product Instance demonstrates the RIC Framework by keeping product context, stack decision, implementation evidence, validation gates, backlog state, and handoff records in the repository.

It shows:

- A small approved scope.
- A stack decision before implementation.
- Manual validation tied to acceptance behavior.
- Security limitations stated honestly.
- Operational records that allow another agent or human to resume without chat history.
- Controlled task movement under Trigger authority.

## Intentionally Out Of Scope

- Backend, API, database, authentication, deploy, package manager, dependencies, automated tests, and workflow automation.
- UX redesign or app refactor in SRM-003.
- Production security claims.
- New READY tasks beyond the currently approved task.
