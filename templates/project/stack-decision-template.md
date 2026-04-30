# Stack Decision Record

**Project**: [Project name]

**Decision ID**: [e.g., STACK-001]

**Date**: [YYYY-MM-DD]

**Decision Area**: [e.g., Runtime, Framework, Database, Authentication, Storage, Deployment, Provider]

**Status**: [Pending / Approved / Superseded]

---

## Why This Decision Is Needed Now

Describe the product or execution need that requires this decision. A stack decision must serve the product — not precede it.

```
[TODO: Example: "The MVP requires server-side rendering for SEO. The runtime and framework
must be chosen before execution begins on the page routing task."]
```

---

## Scope of This Decision

What does this decision cover? What does it not cover?

```
[TODO: Example: "Covers the server runtime and web framework for the public-facing
front end. Does not cover the database, authentication provider, or deployment target —
those are separate decisions."]
```

---

## Options Considered

List each realistic option evaluated. Include enough detail to understand why it was accepted or rejected.

### Option 1: [Name]

- Description: [TODO]
- Advantages: [TODO]
- Disadvantages: [TODO]
- Compatibility notes: [TODO]

### Option 2: [Name]

- Description: [TODO]
- Advantages: [TODO]
- Disadvantages: [TODO]
- Compatibility notes: [TODO]

### Option 3: [Name] _(optional)_

- Description: [TODO]
- Advantages: [TODO]
- Disadvantages: [TODO]
- Compatibility notes: [TODO]

---

## Approved Decision

```
[TODO: State the approved choice clearly.
Example: "Use Node.js 20 LTS with Next.js 14 App Router for the public-facing front end."]
```

---

## Rationale

Why was this option chosen over the alternatives?

```
[TODO: Connect the decision to product requirements, MVP constraints, team context,
compatibility, and known risks.]
```

---

## Impact

| Area | Impact |
| --- | --- |
| Product scope | [TODO] |
| Execution scope | [TODO] |
| Validation approach | [TODO] |
| Deployment | [TODO] |
| Maintenance | [TODO] |
| Security | [TODO] |
| Portability | [TODO] |
| Agent handoff | [TODO] |

---

## Compatibility

Record version constraints, platform targets, provider dependencies, or environment requirements that this decision introduces.

| Item | Version / Constraint | Notes |
| --- | --- | --- |
| [TODO: e.g., Node.js] | [TODO: e.g., 20 LTS] | [TODO] |
| [TODO: e.g., Next.js] | [TODO: e.g., 14.x] | [TODO] |

---

## Validation Required Before Execution Depends on This Decision

What evidence must exist before the team can proceed with implementation that relies on this stack choice?

- [ ] [TODO: Validation step 1]
- [ ] [TODO: Validation step 2]

---

## Reversal or Migration Cost

What would it cost to change this decision later?

```
[TODO: Brief assessment. Example: "Switching from Next.js to Remix would require
rewriting routing, server actions, and deployment configuration. Cost: high."]
```

---

## Open Questions

Record any unresolved questions that could affect this decision.

| Question | Status | Owner |
| --- | --- | --- |
| [TODO] | [Open / Resolved] | [Trigger / Agent] |

---

## Approval

This decision is not approved until the Trigger explicitly confirms it.

Trigger approval recorded: [TODO: Date and summary, or "Pending"]
