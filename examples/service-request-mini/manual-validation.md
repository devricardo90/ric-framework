# Manual Validation

**Project**: Service Request Mini

**Purpose**: Provide an objective checklist for manually validating the browser-native MVP.

---

## Setup

Open:

```text
examples/service-request-mini/app/index.html
```

No package install, server, build command, environment variable, deploy target, or external service is required.

## Checklist

| Check | Expected Result | Result |
| --- | --- | --- |
| Required fields block invalid submission | Submitting with missing title, description, or category shows field errors and does not create a request. | Pending manual validation |
| Valid request appears in list | A request with valid title, description, and category appears in the Requests list after submission. | Pending manual validation |
| Status can change | The status selector changes the request status between New, In Progress, and Done. | Pending manual validation |
| Reload preserves data through localStorage | Reloading the page keeps created requests and their current status in the same browser. | Pending manual validation |
| Clear data resets state | Clear All Data removes saved requests after confirmation and returns the app to the empty state. | Pending manual validation |
| No external network dependency expected | The app uses local files only and should not require external network calls. | Pending manual validation |
| No backend/auth/API expected | The app has no backend, authentication, API, login, session, or server-side permission model. | Pending manual validation |
| No deploy expected | The app runs by opening `app/index.html` locally and does not require deployment. | Pending manual validation |
| Security and Clean Code Gate is proportional | Validation confirms no secrets, no dependencies, no dynamic script injection, no user-content `innerHTML`, and honest `localStorage` limitations. | Pending manual validation |

## Security And Clean Code Gate

For this browser-native `localStorage` app, the proportional gate is:

- No secrets, tokens, passwords, or production credentials.
- No package manager or dependency.
- No backend, API, authentication, deploy, or external database.
- User-entered content rendered with safe DOM text APIs.
- `localStorage` documented as local prototype persistence only.
- No claim that this is production-secure storage.

## Validation Result Rule

Do not mark a future implementation or documentation validation task DONE unless the checklist result is reported with evidence and the Trigger confirms the result.
