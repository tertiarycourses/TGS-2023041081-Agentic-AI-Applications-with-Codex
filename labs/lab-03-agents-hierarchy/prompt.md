# Bounded Codex task

## Outcome
Design root and nested instructions, then verify that a task applies the nearest rule without conflicting with repository policy.

## Task prompt
Modify the API fixture under its nearest instructions. Explain which rules apply before editing and verify compliance after the patch.

## Constraints
- Work only in the learner copy inside this lab.
- Preserve public behavior unless the task explicitly changes it.
- Do not change expected tests to force a pass.
- Do not access the network, external accounts, credentials or personal data.

## Definition of done
The trace distinguishes root and nested rules and the patch complies with both in the correct precedence.
