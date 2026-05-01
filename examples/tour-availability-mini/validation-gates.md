# Validation Gates

**Project**: Tour Availability Mini

**Last Updated**: 2026-05-01

---

## Purpose

This document defines the validation gates that must be passed at each phase of this Product Instance before a task can be closed as DONE.

No task may be marked DONE without passing its applicable gates and reporting evidence to the Trigger.

---

## Gate 1 — Documentation Validation Gate

**Applies to**: TAM-001

**Trigger**: Before closing TAM-001 as DONE.

**Required Evidence**:

- [ ] `README.md` exists and explains what Tour Availability Mini is, what problem it tests, why it exists after Service Request Mini, what it is not, current status, and MVP boundary.
- [ ] `prd.md` exists and defines the product problem, target user, input, output, success criteria, non-goals, and constraints.
- [ ] `mvp-scope.md` exists and defines the exact MVP question, all seven allowed rules, forbidden scope, and future scope as Future only, not READY.
- [ ] `stack-decision.md` exists and records the TAM-001 documentation-only position, the default TAM-002 stack recommendation, and the authority constraint against heavier stacks without a new Discussion Gate.
- [ ] `backlog.md` exists and lists TAM-001 as active and TAM-002 as Future only, not READY.
- [ ] `status.md` exists and records current task, implementation status (no code yet), and limitations.
- [ ] `decision-log.md` exists and records the four approved decisions.
- [ ] `validation-gates.md` exists (this file).
- [ ] `session-handoff.md` exists and allows another agent or human to resume without chat history.

**Git Evidence Required**:

- `git status --short` output showing only authorized TAM-001 files.
- `git diff --check` output with no whitespace or conflict errors.
- `git diff --stat` output showing only TAM-001 documentation files and the authorized operational updates.
- Confirmation that no files under `examples/service-request-mini/` changed.
- Confirmation that no `app/` directory, `index.html`, `styles.css`, `app.js`, `package.json`, `.github/`, scripts, or build files were created.
- Confirmation that no extra READY task was opened.

---

## Gate 2 — Scope Control Gate

**Applies to**: All tasks in this Product Instance.

**Trigger**: Before any file is created or modified.

**Rules**:

- No file may be created outside the allowed list for the current task.
- No file under `examples/service-request-mini/` may be changed.
- No code file (`index.html`, `styles.css`, `app.js`, or any equivalent) may be created during TAM-001.
- No `package.json`, `node_modules`, framework, build config, or dependency manifest may be created.
- No `.github/` directory, CI/CD file, deploy config, or automation script may be created.
- No backend, database, API, or external service may be introduced.
- No extra READY task may be opened without explicit Trigger authorization.

**Failure Action**: Stop execution immediately. Report the scope violation to the Trigger before proceeding.

---

## Gate 3 — No-Code Gate

**Applies to**: TAM-001 specifically.

**Trigger**: At any point during TAM-001 execution.

**Rules**:

- The `examples/tour-availability-mini/app/` directory must not exist.
- No `index.html`, `styles.css`, or `app.js` file may exist in this Product Instance directory.
- No JavaScript logic implementing the availability check may exist.
- No HTML form, CSS style, or DOM structure may exist.
- The product is documentation-only until TAM-002 is authorized.

**Evidence Required**:

- `git status --short` must show only `.md` files (documentation files) as new or modified.
- No binary, image, script, or code file appears in git status output.

**Failure Action**: Stop execution immediately. Do not proceed. Report to Trigger.

---

## Gate 4 — Future Implementation Gate (Placeholder)

**Applies to**: TAM-002 and beyond. Not active in TAM-001.

**Trigger**: Before TAM-002 execution begins.

**Rules** (recorded here for future governance continuity):

- TAM-002 must not begin without explicit Trigger authorization through a Discussion Gate.
- The executing agent must use the default stack (browser-native HTML/CSS/JS, no framework, no dependency, no backend, no build step) unless a new Discussion Gate authorizes a different stack.
- Implementation files must be limited to `examples/tour-availability-mini/app/`.
- No external dependency, package manager, backend, database, API, or deploy configuration may be introduced.
- `git diff --check` must pass before any implementation commit.
- Manual browser validation must confirm all seven MVP rules pass before DONE.

**Status**: Not active. TAM-002 is Future only, not READY.

---

## Evidence Required Before DONE

Any task in this Product Instance requires the following evidence before the Trigger may authorize DONE:

1. `git status --short` output confirming only authorized files are present.
2. `git diff --check` output with no errors.
3. `git diff --stat` output showing only authorized files.
4. Explicit confirmation that no files under `examples/service-request-mini/` changed.
5. Explicit confirmation of the applicable scope control and no-code gates (for TAM-001).
6. Explicit confirmation that no extra READY task was opened.
7. Trigger review and authorization.

No agent may mark a task as DONE without this evidence being reported and the Trigger confirming authorization.
