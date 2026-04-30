# Version Matrix

**Project**: [Project name]

**Last Updated**: [YYYY-MM-DD]

---

## Active Version

| Field | Value |
| --- | --- |
| Version | [TODO: e.g., v0.1.0] |
| Commit or Artifact | [TODO: git hash or artifact reference] |
| Environment | [TODO: local / staging / production] |
| Date | [TODO: YYYY-MM-DD] |
| Validation Status | [TODO: Pending / PASS / FAIL] |
| Evidence | [TODO: Link or description of validation output] |
| Deployed By | [TODO: Agent name or "Trigger"] |
| Rollback Notes | [TODO: What would be required to revert this version] |

---

## Version History

Record every release or deployment that has occurred. Keep the most recent at the top.

| Version | Commit or Artifact | Environment | Date | Validation Status | Evidence | Rollback Notes |
| --- | --- | --- | --- | --- | --- | --- |
| [TODO] | [TODO] | [TODO] | [TODO] | [TODO] | [TODO] | [TODO] |

---

## Environment Registry

Record each environment in use and its current state.

| Environment | Purpose | Current Version | Last Deploy Date | Status |
| --- | --- | --- | --- | --- |
| local | Development | [TODO] | [TODO] | [TODO] |
| staging | Pre-production validation | [TODO] | [TODO] | [TODO] |
| production | Live | [TODO] | [TODO] | [TODO] |

---

## Rules

- Record every release or deployment that affects the product or its dependencies.
- Keep environment state explicit. Do not rely on memory or undocumented configuration.
- Link validation evidence before marking a version as validated.
- Do not mark a version as deployed to production without Trigger authorization.
- If a version is rolled back, record the rollback event and the reason.
- Stack or runtime version changes require a separate Stack Decision Record before appearing here.
