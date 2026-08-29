# Bounded Codex task

## Outcome
Design a non-interactive Codex run that emits machine-readable events and fails safely when acceptance checks fail.

## Task prompt
Run the supplied repair task non-interactively. Emit JSON events, preserve stderr, and return non-zero if the required tests do not pass.

## Constraints
- Work only in the learner copy inside this lab.
- Preserve public behavior unless the task explicitly changes it.
- Do not change expected tests to force a pass.
- Do not access the network, external accounts, credentials or personal data.

## Definition of done
The wrapper avoids embedded secrets, records structured events and distinguishes success from failure by exit status.
