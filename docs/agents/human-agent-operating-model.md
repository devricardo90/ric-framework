# Human-Agent Operating Model

This document formalizes the operational flow and interaction between the Trigger and agents within the RIC Protocol. It serves as the bridge between theoretical role boundaries and concrete daily execution.

## Authorities and References

This model operates under the governance defined in:
- **AGENTS.md**: The foundational Agent Control Prompt.
- **docs/agents/agent-role-boundaries.md**: The formal definition of roles and authority limits.

## The Operational Triad

Execution in the RIC Framework relies on three distinct perspectives:

1.  **Trigger (Ricardo)**: The final decision authority. Decides direction, approves scope, authorizes commits, and marks tasks as DONE.
2.  **Consultant / Auditor**: The tactical organizer. Questions assumptions, prepares tasks for READY state, audits evidence, and ensures protocol discipline.
3.  **Terminal Executor**: The implementation operator. Modifies files, runs commands, collects evidence, and performs the actual implementation within the terminal environment.

## The Operational Flow: PREPARE - EXECUTE - AUDIT - CLOSE

### 1. PREPARAR (PREPARE)
- **Actor**: Consultant / Auditor.
- **Goal**: Transition a task from Discussion Gate to READY.
- **Action**: Define ID, Title, Goal, Scope, Out-of-Scope, Definition of Done, Validation, and Commit Rule.
- **Exit Criteria**: Trigger approval to mark as READY in `backlog.md`.

### 2. EXECUTAR (EXECUTE)
- **Actor**: Terminal Executor.
- **Goal**: Fulfill the task scope.
- **Action**: Perform surgical file edits and run validation commands. Record evidence in `execution-log.md`.
- **Exit Criteria**: Scope fulfilled and local validation passed.

### 3. AUDITAR (AUDIT)
- **Actor**: Consultant / Auditor.
- **Goal**: Verify technical and protocol integrity.
- **Action**: Review diffs, check for scope creep, verify evidence, and ensure no non-negotiable rules were broken.
- **Exit Criteria**: Recommendation to Trigger for closure or redirection.

### 4. FECHAR (CLOSE)
- **Actor**: Trigger and Terminal Executor.
- **Goal**: Finalize the task.
- **Action**: 
    - Trigger approves closure.
    - Executor updates operational records to DONE only after approval.
    - Executor runs final validation if required.
    - Executor creates commit only if authorized.
    - Executor pushes only if explicitly authorized.
- **Exit Criteria**: Working tree clean, task marked DONE in `backlog.md`, and commit/push state clearly recorded.

## Central Operating Rules

- **One Executor**: Only one agent may hold write access to the repository at a time.
- **One Auditor**: Only one agent (or the Trigger) may act as the primary reviewer for a specific task slice.
- **One Human**: All final decisions must pass through the Trigger.
- **One READY Task**: Only one substantive execution task may be READY/IN_PROGRESS at a time to maintain focus.
- **One Real Evidence**: Every DONE status must be backed by empirical evidence (logs, command output, or verified diffs).

## Chat vs. Terminal Usage

- **Chat (Decision & Audit Mode)**: Used for decision, strategy, audit, prompt preparation, and review. Chat may draft decisions, prompts, and review notes, but repository file changes must be performed by the Terminal Executor. Chat-only context must not claim repository changes were made unless reported by the Terminal Executor.
- **Terminal (Execution Mode)**: Used for repository writes, validation commands, git operations, and evidence collection.

## Loop Prevention and Stop Rules

To avoid infinite agent loops and ensure human control, agents must stop and return to the Trigger if:

1.  **Correction Failure**: A specific correction fails twice in a row.
2.  **Strategic Decisions**: A decision regarding architecture, stack, provider, or product direction is encountered.
3.  **Out-of-Scope Errors**: Technical errors appear that are outside the approved task scope.
4.  **Operational Drift**: The working tree is dirty without a clear recorded reason or if the agent loses track of current state.
5.  **Baton Passing**: Changing from one executor to another is only allowed with a verified, clean `session-handoff.md`.

## Prohibited Patterns

- **Infinite Relay**: Passing a task between multiple agents (e.g., Gemini -> Codex -> Claude) without a recorded human checkpoint.
- **Silent Done**: Marking a task as DONE in operational files without explicit Trigger approval of the evidence.
- **Evidence Fabrication**: Claiming a command passed without providing the actual output.

## Summary of Interaction

- **Consultant** prepares.
- **Executor** executes.
- **Consultant** audits.
- **Trigger** approves.
- **Executor** closes (if authorized).
