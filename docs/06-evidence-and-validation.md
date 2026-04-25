# Evidence and Validation

RIC Framework treats validation evidence as a required delivery artifact.

## Evidence Types

Useful evidence may include:

- Test command output.
- Manual test notes.
- Screenshots.
- Logs.
- Deployment checks.
- Code review findings.
- Accessibility or performance reports.
- Security review notes.

## Evidence Quality

Good evidence is specific. It should show what was checked, when it was checked, and what result was observed.

Weak evidence examples:

- "Looks good."
- "Tested."
- "Should work."

Stronger evidence examples:

- Command executed and result recorded.
- Manual workflow completed with expected result.
- Screenshot attached or referenced.
- Deployment health check passed.

## Validation Gaps

If something cannot be validated, record the gap. A known gap is better than an unsupported completion claim.

## Where Evidence Lives

Record evidence in `execution-log.md`, `done-template.md`, release notes, pull requests, or other project systems. The important rule is that the evidence must be discoverable during review or handoff.
