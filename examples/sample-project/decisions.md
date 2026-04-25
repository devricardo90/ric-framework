# Decisions

## DEC-001: Use RIC Framework Records

Date: TODO

Status: Accepted

## Decision

The sample project will use project context, status, backlog, decisions, and session handoff records as its minimum execution system.

## Rationale

These records demonstrate the smallest useful project structure for Protocolo RIC without adding stack-specific implementation details.

## Alternatives Considered

- A larger example with deployment and version records.

## Consequences

- The sample remains simple.
- More advanced examples can be added later when real adoption patterns are known.

## Related Work

- Backlog: SAMPLE-001
- Evidence: File presence in `examples/sample-project/`
