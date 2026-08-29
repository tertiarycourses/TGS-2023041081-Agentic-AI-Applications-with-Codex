# Bounded Codex task

## Outcome
Split two independent TaskBoard changes into isolated worktrees and integrate them in a controlled order.

## Task prompt
Deliver documentation and test-fixture changes in separate worktrees. Do not edit the same file. Return commit SHAs and integration order.

## Constraints
- Work only in the learner copy inside this lab.
- Preserve public behavior unless the task explicitly changes it.
- Do not change expected tests to force a pass.
- Do not access the network, external accounts, credentials or personal data.

## Definition of done
The worktrees use distinct paths and branches, produce separate commits, and integrate with the full test suite passing.
