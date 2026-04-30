# Demo Script

**Project**: Service Request Mini

**Purpose**: Provide a repeatable walkthrough that another person can use to demonstrate the browser-native MVP without extra explanation.

---

## 1. Demo Opening

Open:

```text
examples/service-request-mini/app/index.html
```

Explain that this is a local-only browser app built with plain HTML, CSS, and JavaScript. It uses browser `localStorage` so requests persist in this browser after reload, but the data is not shared with other users or devices.

## 2. Empty State Observation

Start with no saved requests, or use Clear All Data first.

Expected observation:

- The Requests area shows the empty state.
- No backend, login, or setup step appears.

## 3. Create Request Flow

Fill in:

- Title: `Laptop keyboard issue`
- Description: `Several keys are not responding during work.`
- Category: `IT`
- Priority: `High`

Submit the request.

Expected observation:

- The request appears at the top of the list.
- The request includes the title, category, priority, creation date, description, and status.
- The initial status is New.

## 4. Status Transition Flow

Use the status selector on the created request.

Change status from:

1. New to In Progress.
2. In Progress to Done.

Expected observation:

- The status badge changes after each selection.
- The selected status remains visible in the request item.

## 5. Reload Persistence Proof

Reload the browser page.

Expected observation:

- The request remains visible after reload.
- The latest status is preserved.

Explain that this proves local persistence through `localStorage`, not production persistence.

## 6. Clear Data Flow

Select Clear All Data.

Confirm the browser prompt.

Expected observation:

- The request list is cleared.
- The empty state appears again.

## 7. Closing Explanation

Close by explaining:

- The demo proves the smallest request lifecycle: create, list, update status, persist locally, and clear.
- The app has no backend, API, authentication, deploy, dependency, package manager, or automated test framework.
- The example is reusable because the product context, validation checklist, demo flow, and operational state are documented in the Product Instance.
