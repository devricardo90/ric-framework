# Session Handoff

**Project**: [Project name]

**Last Updated**: [YYYY-MM-DD]

---

## Current Objective

[TODO: One sentence describing the goal for the next session.
Example: "Complete Gate 3 pre-commit validation and create the authorized local commit for TASK-001."]

---

## Active Task

ID: [TODO: TASK-ID or None]

Title: [TODO: Task title or None]

Status: [TODO: READY / IN_PROGRESS / Local DONE pending review / Idle]

---

## Last Completed Action

[TODO: Describe the last meaningful action taken before this handoff.
Example: "Applied approved correction to prd-template.md. Ran git diff --check — PASS. Reported to Trigger."]

---

## Current State

[TODO: Describe the repository state at the moment of handoff.
Example: "TASK-001 execution is complete. Three files modified within scope.
Commit not yet created — awaiting Trigger review and DONE authorization."]

---

## Files Changed

[TODO: List every file modified or created in the current session.]

- [file path 1]
- [file path 2]

---

## Commands Executed

[TODO: List every significant command run in this session.]

- `git status --short`
- `git status -sb`
- `git log --oneline -3`
- [other commands]

---

## Validation Result

[TODO: State the outcome of the most recent validation.
Example: "git diff --check PASS. git status --short shows only approved files modified."]

---

## Pending Decisions for the Trigger

[TODO: List any open questions or decisions that require Trigger approval before the next agent proceeds.
Example:
- Whether to approve DONE for TASK-001.
- Whether to push after commit.
- Selection of next task via Discussion Gate.]

---

## Blockers

[TODO: List any known blockers, or "None recorded."]

---

## Next 3 Steps

1. [TODO: First concrete next action — state whether Trigger approval is required]
2. [TODO: Second concrete next action]
3. [TODO: Third concrete next action]

---

## Do Not Do Next

[TODO: Explicitly state what the next agent must not do without Trigger approval.
Example:
- Do not commit without Trigger authorization.
- Do not push without Trigger authorization.
- Do not open a new READY task without Trigger approval.
- Do not modify files outside the current approved scope.]

---

## Resume Instruction for Next Agent

[TODO: Write one paragraph that tells the next agent exactly what state they are resuming from
and what to do first. Assume the next agent has no memory of this session.

Example: "TASK-001 is complete pending Trigger review. Three files were modified within the
approved scope. The working tree has authorized uncommitted changes. Read operational files,
run git status --short and git log --oneline -3, and confirm state before taking any action.
Do not commit until Trigger authorizes DONE."]
