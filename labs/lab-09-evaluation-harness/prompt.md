# Bounded Codex task

## Outcome
Run a repeatable golden-task suite and calculate correctness, reliability, latency and cost-per-accepted-task.

## Task prompt
Evaluate the supplied candidate outputs against frozen fixtures. Do not adjust the expected results. Report uncertainty and failed criteria.

## Constraints
- Work only in the learner copy inside this lab.
- Preserve public behavior unless the task explicitly changes it.
- Do not change expected tests to force a pass.
- Do not access the network, external accounts, credentials or personal data.

## Definition of done
The report is reproducible, includes at least four decision-relevant metrics and links each failure to a fixture.
