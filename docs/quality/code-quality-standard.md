# Code Quality Standard

**Project**: RIC Framework Quality Baseline

**Last Updated**: 2026-04-30

---

## Definition of Good Code in RIC

In the RIC Framework, code quality is not about aesthetic preference, but about long-term maintainability, security, and clarity for both human developers and AI agents.

Good code in RIC must be:

- **Simple**: Solves the problem with the minimum necessary complexity.
- **Readable**: Intent is clear without requiring the reader to guess.
- **Explicit**: Uses typing (TypeScript) or explicit declarations according to the stack.
- **Testable**: Structured in a way that allows for verification (manual or automated).
- **Versioned**: Follows the framework's version and commit discipline.
- **Validated**: Passes all applicable validation gates before being marked DONE.
- **Maintainable**: Can be updated by another developer or agent without breaking unrelated logic.

---

## Core Rules

### 1. Clear Naming
- Use descriptive names for variables, functions, and files.
- Avoid abbreviations that are not industry-standard.
- Names should describe the "what" and "why", not the "how".

### 2. Single Responsibility
- Each module, file, or function should do one thing well.
- Large files must be refactored into smaller, cohesive units.

### 3. No Unnecessary Magic
- Avoid "clever" code, hidden side effects, or complex abstractions that hide the actual flow of data.
- Favor explicit logic over implicit behavior.

### 4. No Duplicated Business Rules
- Centralize logic to avoid the "update in two places" risk.
- Use clean abstractions to share logic when necessary.

### 5. Predictable Error Handling
- Never silence errors without a documented reason.
- Use consistent error patterns (e.g., try/catch, Result types).
- Boundary validation must be performed at the edges of the system.

### 6. Architecture Alignment
- Every implementation must respect the approved `stack-decision.md` and `architecture-decision-rules.md`.
- No silent technology swaps or unauthorized dependencies.

### 7. Low Coupling
- Minimize dependencies between unrelated layers.
- Use interfaces or well-defined boundaries to separate concerns.

---

## Maintainability Rule

Good code in RIC is not only code that works. It must be understandable and maintainable by another agent or developer without guessing the original intention. If a solution is non-obvious, it must be documented.

---

## Central Quality Rule

No implementation task can be marked DONE without passing the Quality Gate applicable to its scope.
