# Validation Gates

**Project**: RIC Framework Quality Baseline

**Last Updated**: 2026-04-30

---

## Purpose

Validation Gates are the final checkpoints that ensure a task meets the framework's quality, security, and architectural standards.

---

## Core Principles

1. **Stack Proportionality**: Validation must be proportional to the approved stack. A plain HTML app does not need a full backend test suite, but it must be manually verified in the browser.
2. **Architecture Alignment**: Validation must match the approved architecture in `stack-decision.md`.
3. **Evidence-Based PASS**: No gate can be marked as PASS by opinion only. Evidence must be recorded through:
   - Command output (e.g., `npm test`, `git diff --check`).
   - Manual browser review (with screenshots or step-by-step confirmation).
   - Verified file content.
   - Tested flow results.
   - Explicitly documented limitations.
4. **No Universal Commands**: There is no single command that applies to every project. Each project defines its own validation commands in `validation-gates.md`.

---

## Gate Checklist (Framework Template)

### 1. Pre-Execution
- [ ] Is the task READY?
- [ ] Is the working tree clean?
- [ ] Is the stack approved?

### 2. Post-Execution
- [ ] Does the implementation fulfill the Goal and Scope?
- [ ] Are the Code Quality Standards met?
- [ ] Is the Security Review Gate passed?

### 3. Pre-Commit
- [ ] `git diff --check` passes.
- [ ] `git status --short` shows only approved files.
- [ ] No secrets or unapproved dependencies added.

### 4. Post-Commit
- [ ] Commit message follows the rule.
- [ ] Git state is correct.

### 5. Pre-Push
- [ ] All local validations passed.
- [ ] Trigger authorized the push.

---

## Specific Case: Service Request Mini (Proportional Gate)

Because Service Request Mini is plain HTML/CSS/JS + browser `localStorage`, its implementation gate includes:

- **No Secrets**: Confirm no keys or credentials are in the code.
- **No Dependencies**: Confirm no unapproved third-party libraries were added.
- **Honest Security**: Confirm `localStorage` is not claimed as a secure production database.
- **Field Validation**: Confirm basic HTML/JS validation for input fields.
- **No Sensitive Data**: Confirm the example does not encourage storing passwords or PII in `localStorage`.
- **Readability**: Code is simple, readable, and uses no unnecessary "magic".
- **Manual Flow Validation**: Step-by-step verification of Create -> List -> Update status.
- **Persistence Validation**: Confirm data survives a browser reload.

---

## Central Validation Rule

No implementation task can be marked DONE without passing the Validation Gates defined for its specific scope and stack.
