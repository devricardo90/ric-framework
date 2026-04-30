# Two-Agent Execution Flow

This playbook defines the procedural steps for executing a task within the RIC Protocol using the two-agent model. It is a practical checklist — not a theoretical description of roles.

## Authorities and References

This playbook operates under and does not redefine:
- **AGENTS.md**: The foundational Agent Control Prompt.
- **docs/agents/agent-role-boundaries.md**: Role authority and boundaries.
- **docs/agents/human-agent-operating-model.md**: The Operational Triad and flow definition.

---

## The Flow

```
Trigger/Ricardo
    └─> Consultant/Auditor (PREPARE)
            └─> Terminal Executor (EXECUTE)
                    └─> Consultant/Auditor (AUDIT)
                            └─> Trigger/Ricardo (APPROVE)
                                    └─> Terminal Executor (CLOSE)
```

---

## Phase 1 — PREPARAR (PREPARE)

**Responsible**: Consultant / Auditor

**Entry condition**: Trigger has identified a candidate task via Discussion Gate. No task is currently READY or IN_PROGRESS.

### Actions

- [ ] Confirm `backlog.md` has no active READY or IN_PROGRESS task.
- [ ] Confirm `git status --short` is clean or document any known dirty state.
- [ ] Draft the task definition with all required fields:
  - ID
  - Title
  - Goal
  - Scope (what is permitted)
  - Out-of-Scope (what is explicitly forbidden)
  - Definition of Done
  - Validation method
  - Commit Rule
- [ ] Identify duplication risks against existing documentation.
- [ ] Present draft to Trigger for approval.

**Exit condition**: Trigger approves task definition and authorizes promotion to READY in `backlog.md`.

**Expected output**: Trigger-approved task definition, ready for executor handoff.

---

## Phase 2 — EXECUTAR (EXECUTE)

**Responsible**: Terminal Executor

**Entry condition**: Task is READY in `backlog.md` with Trigger approval. Working tree is clean.

### Checkpoint: Before Executing

- [ ] Read `STATUS.md`, `backlog.md`, `docs/ops/session-handoff.md` to confirm current state.
- [ ] Run `git status --short` and `git status -sb`. Confirm clean.
- [ ] Run `git log --oneline -3`. Record HEAD.
- [ ] Confirm only one task is READY.
- [ ] Confirm scope and out-of-scope boundaries are understood.
- [ ] Identify files that may be created or modified.
- [ ] Check for existing files that could conflict or duplicate.

### Actions

- [ ] Execute only within the approved scope.
- [ ] Make surgical edits — one concern at a time.
- [ ] Do not create folders or files not explicitly authorized.
- [ ] Do not resolve bugs or errors outside the approved scope.
- [ ] Record commands run and evidence in `docs/ops/execution-log.md`.

### Checkpoint: After Execution

- [ ] Run `git diff --check`. Confirm no whitespace errors.
- [ ] Run `git status --short`. Confirm only authorized files are modified or untracked.
- [ ] Confirm no out-of-scope files were touched.

**Exit condition**: Scope fulfilled, validation passed, evidence recorded.

**Expected output**: Modified files within scope, clean validation output, execution log updated.

---

## Phase 3 — AUDITAR (AUDIT)

**Responsible**: Consultant / Auditor

**Entry condition**: Executor reports execution complete with evidence.

### Actions

- [ ] Review the diff against the approved scope definition.
- [ ] Verify no file outside the scope was created or modified.
- [ ] Verify no folder was created without authorization.
- [ ] Verify `git diff --check` evidence is present and passed.
- [ ] Verify `git status --short` evidence shows only authorized changes.
- [ ] Verify no stop condition was triggered silently (see Stop Rules below).
- [ ] Verify no anti-pattern was introduced (see Anti-Patterns below).
- [ ] Draft a recommendation for the Trigger: approve DONE, or request correction.

**Exit condition**: Audit complete. Recommendation presented to Trigger.

**Expected output**: Audit report with clear recommendation — DONE or correction needed.

---

## Phase 4 — FECHAR (CLOSE)

**Responsible**: Trigger (approval) + Terminal Executor (implementation of closure)

**Entry condition**: Trigger reviews the audit recommendation and approves DONE.

### Checkpoint: Before Commit

- [ ] Trigger has explicitly approved DONE.
- [ ] Run `git status --short`. Confirm only authorized files are modified or untracked.
- [ ] Run `git diff --check`. Confirm PASS.
- [ ] Confirm commit message is pre-approved by Trigger.

### Actions

- [ ] Update `backlog.md`: move task from Active to Completed with evidence summary.
- [ ] Update `STATUS.md`: reflect task as completed.
- [ ] Update `docs/ops/session-handoff.md`: record current state, pending decisions, next steps.
- [ ] Update `docs/ops/execution-log.md`: record the full closure entry.
- [ ] Create the commit only with the Trigger-approved message.

### Checkpoint: Before Push

- [ ] Trigger has explicitly authorized the push (separate from commit authorization).
- [ ] Run `git status -sb`. Confirm branch is ahead of `origin/main` by the expected number of commits only.
- [ ] Run `git log --oneline origin/main..HEAD`. Confirm only authorized commits are pending.
- [ ] Confirm working tree is clean.

### Actions (if push is authorized)

- [ ] Push to `origin/main`.
- [ ] Run `git status -sb`. Confirm synchronized.
- [ ] Run `git status --short`. Confirm clean.

### Checkpoint: Post-Push

- [ ] Confirm `git status -sb` shows `## main...origin/main` (no ahead/behind).
- [ ] Confirm `git status --short` is clean.
- [ ] Report Remote DONE state to Trigger. Do not edit operational records after push unless a separate reconciliation task is approved.

**Exit condition**: Working tree clean, task marked DONE in `backlog.md`, commit and push state clearly recorded.

**Expected output**: Clean repository, Remote DONE reported to Trigger.

---

## Stop Rules

The active agent must stop immediately and return control to the Trigger if any of the following occur:

| Condition | Action |
| --- | --- |
| A decision about architecture, stack, provider, or product direction is encountered | Stop. Escalate to Discussion Gate. |
| A new dependency or external service is required | Stop. Do not install or add. Report to Trigger. |
| An error appears that is outside the approved task scope | Stop. Do not fix. Record and report. |
| The same correction fails twice in a row | Stop. Do not retry. Report the failure and evidence. |
| The working tree is dirty without a clear recorded reason | Stop. Do not proceed. Report state and history. |
| An executor handoff is needed but `session-handoff.md` is not verified clean | Stop. Require a clean handoff before resuming. |
| Scope definition is ambiguous and two interpretations would produce different files | Stop. Request clarification from Trigger before executing. |

---

## Anti-Patterns

These patterns are prohibited in every execution cycle:

| Anti-Pattern | Why It Is Prohibited |
| --- | --- |
| Loop between agents without a human checkpoint | Bypasses Trigger control; creates unverifiable state drift. |
| Executor deciding product direction or approving own scope | Executor authority is implementation only; scope is Trigger authority. |
| Commit and push in the same step without separate Trigger authorizations | Commit and push are distinct risk events requiring independent approvals. |
| Marking DONE without real evidence | Silent DONE is equivalent to fabricated evidence; it corrupts operational records. |
| Fixing a bug found outside the approved scope without recording it | Unrecorded changes break auditability and may conflict with future tasks. |
| Creating a file or folder for aesthetic organization without a functional requirement | Violates the function-before-folder rule; inflates repository structure without value. |
| Passing a task to a second executor without a clean `session-handoff.md` | Creates ambiguous working tree state and breaks single-executor rule. |

---

## Quick Reference Checklist

```
[ ] PREPARE: task defined and Trigger-approved as READY
[ ] PRE-EXECUTE: git status clean, scope understood
[ ] EXECUTE: surgical edits, evidence recorded
[ ] POST-EXECUTE: git diff --check PASS, only authorized files modified
[ ] AUDIT: diff reviewed, no scope creep, recommendation to Trigger
[ ] PRE-COMMIT: Trigger DONE approval confirmed, git diff --check PASS
[ ] COMMIT: authorized message only, operational records updated
[ ] PRE-PUSH: Trigger push authorization confirmed, only expected commits ahead
[ ] PUSH: push executed and confirmed
[ ] POST-PUSH: git status -sb synchronized, Remote DONE recorded
```
