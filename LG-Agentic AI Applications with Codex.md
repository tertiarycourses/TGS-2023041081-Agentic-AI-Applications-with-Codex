# Agentic AI Applications with Codex
**Course Code:** TGS-2023041081
**Version:** v9.0
**TSC:** AER-TEM-4026-1.1 Artificial Intelligence Application
## Learning outcomes
- LO1 Analyse agentic AI applications, their strengths, limitations and suitability for a work problem.
- LO2 Correlate agent-control design with algorithm efficiency and evaluate the resulting process improvement.
- LO3 Assess methods for evaluating the effectiveness, safety and reliability of Codex-enabled workflows.
- LO4 Evaluate comparative effectiveness and recommend a governed Codex implementation using observable evidence.

## End-to-end architecture
1. Surface and applicability decision
2. Repository reconnaissance and scoped instruction hierarchy
3. Outcome contract, plan and permission boundary
4. Minimal implementation and reviewed diff
5. Focused tests, regression checks and browser evidence
6. Golden-task comparison against baseline
7. Human-governed pilot, expand, hold or stop decision

## Topic 1: Codex Surfaces, Agentic Loops and Applicability

Analyse where Codex fits, how a task travels through the agentic loop, and where human judgment remains essential.

### The Codex product surface

**Mechanism:** Select surface → Provide repository → Bound task → Review result
**Fields:** surface, repo, goal, diff
**Measure:** Task-to-surface fit score across local, IDE, cloud and app
**Control:** Choose by data location, duration, isolation and collaboration need.
**Evidence:** Decision matrix plus selected surface rationale

### Agentic task lifecycle

**Mechanism:** Observe state → Form plan → Act with tools → Verify outcome
**Fields:** state, plan, action, verification
**Measure:** Verified task transitions / total task transitions
**Control:** Make verification an explicit finish condition.
**Evidence:** Plan, command trace, test result and final diff

### Prompt as an execution contract

**Mechanism:** State outcome → Add context → Set constraints → Define done
**Fields:** objective, context, constraints, acceptance
**Measure:** Acceptance criteria satisfied on first review
**Control:** Require observable acceptance checks and protected boundaries.
**Evidence:** Prompt contract linked to passing checks

### Repository reconnaissance

**Mechanism:** Read instructions → Map files → Inspect tests → Choose scope
**Fields:** AGENTS, tree, tests, scope
**Measure:** Relevant files inspected before first edit
**Control:** Front-load read-only inspection and instruction discovery.
**Evidence:** Inspection log and scoped file list

### Tool-mediated reasoning

**Mechanism:** Choose tool → Execute action → Read output → Update plan
**Fields:** tool, command, result, next_step
**Measure:** Useful tool results / total tool calls
**Control:** Tie each call to one decision and stop when evidence is sufficient.
**Evidence:** Tool result cited in the next decision

### Local versus cloud execution

**Mechanism:** Locate data → Assess duration → Choose isolation → Dispatch task
**Fields:** data_zone, runtime, isolation, destination
**Measure:** Policy-compliant runs completed without relocation
**Control:** Select the execution boundary before attaching the repository.
**Evidence:** Environment choice and policy check

### Parallel task decomposition

**Mechanism:** Find seams → Assign scopes → Run independently → Integrate outputs
**Fields:** dependency, owner, worktree, merge_order
**Measure:** Parallel speed-up with zero overlapping edits
**Control:** Decompose only at dependency-light boundaries.
**Evidence:** Scope map, separate worktrees and integration checks

### Strengths of coding agents

**Mechanism:** Search broadly → Edit consistently → Run checks → Summarise evidence
**Fields:** coverage, patch, tests, summary
**Measure:** Cycle time reduction at unchanged defect escape rate
**Control:** Measure throughput and quality together.
**Evidence:** Baseline versus assisted task metrics

### Limitations and uncertainty

**Mechanism:** Detect ambiguity → Expose assumption → Seek evidence → Escalate choice
**Fields:** unknown, assumption, evidence, decision_owner
**Measure:** Material assumptions surfaced before mutation
**Control:** Use uncertainty thresholds and explicit escalation points.
**Evidence:** Assumption register with resolved evidence

### Human accountability boundary

**Mechanism:** Classify consequence → Assign owner → Prepare evidence → Approve action
**Fields:** risk_class, owner, evidence_pack, approval
**Measure:** Consequential actions with named approval
**Control:** Require current evidence and a named human before consequence.
**Evidence:** Approval record bound to the reviewed change

### Applicability decision matrix

**Mechanism:** Define problem → Score fit → Test constraints → Recommend posture
**Fields:** problem, fit_score, constraints, recommendation
**Measure:** Recommendation traceability to scored criteria
**Control:** Score repeatability, verifiability, risk and integration cost.
**Evidence:** Weighted matrix and recommendation

## Topic 2: Harness Design, Context, Sandbox and Process Efficiency

Design a bounded Codex harness that turns project context, permissions and Git isolation into an efficient process.

### AGENTS.md instruction hierarchy

**Mechanism:** Discover files → Resolve scope → Apply nearest rule → Record compliance
**Fields:** root_rule, nested_rule, scope, evidence
**Measure:** Edits compliant with the nearest applicable instruction
**Control:** Resolve instructions from repository root to target file.
**Evidence:** Instruction chain and compliant patch

### Context budget engineering

**Mechanism:** Load essentials → Summarise findings → Discard noise → Refresh evidence
**Fields:** essential, summary, noise, refresh
**Measure:** Decision-relevant context / total loaded context
**Control:** Load progressively and summarise before expanding scope.
**Evidence:** Compact context ledger

### Planning and checkpoints

**Mechanism:** Decompose outcome → Order dependencies → Mark checkpoint → Re-plan from evidence
**Fields:** steps, dependencies, checkpoint, status
**Measure:** Completed checkpoints with verification
**Control:** Update the plan at material state changes.
**Evidence:** Plan history and checkpoint result

### Configuration layers

**Mechanism:** Read defaults → Apply user config → Apply project config → Confirm effective value
**Fields:** default, user, project, effective
**Measure:** Configuration values with known provenance
**Control:** Expose configuration precedence and validate the effective state.
**Evidence:** Resolved configuration table

### Sandbox policy

**Mechanism:** Classify resource → Set access → Execute bounded action → Audit result
**Fields:** resource, permission, action, audit
**Measure:** Writes contained within the approved boundary
**Control:** Use the narrowest filesystem and network permissions that work.
**Evidence:** Sandbox policy and audited path list

### Approval design

**Mechanism:** Detect boundary → Explain command → Request decision → Resume or stop
**Fields:** boundary, justification, decision, result
**Measure:** Approval prompts that identify exact consequence
**Control:** Ask only at real boundaries with exact targets and effects.
**Evidence:** Approval decision tied to command and output

### Git worktree isolation

**Mechanism:** Select base → Create worktree → Edit independently → Integrate commit
**Fields:** base_sha, branch, path, commit
**Measure:** Parallel tasks integrated without working-tree collision
**Control:** Allocate one worktree and branch per independent mutation stream.
**Evidence:** Distinct paths, branches and commit SHAs

### Patch discipline

**Mechanism:** Inspect target → Make minimal edit → Review diff → Run focused checks
**Fields:** target, patch, diff, checks
**Measure:** Changed lines that directly serve acceptance criteria
**Control:** Prefer minimal, reviewable patches and preserve unrelated state.
**Evidence:** Scoped diff and focused test output

### Command safety

**Mechanism:** Resolve target → Quote arguments → Run non-destructive check → Perform action
**Fields:** target, arguments, preflight, action
**Measure:** Potentially destructive commands preceded by exact target checks
**Control:** Resolve explicit targets and prefer recoverable operations.
**Evidence:** Preflight listing and action log

### Process baseline

**Mechanism:** Map current flow → Measure delay → Locate rework → Select intervention
**Fields:** steps, cycle_time, rework, intervention
**Measure:** Baseline cycle time and defect rate captured
**Control:** Measure the existing process before introducing Codex.
**Evidence:** Baseline map and observed metrics

### Efficiency without control loss

**Mechanism:** Automate repeatable step → Keep gate → Measure result → Adjust scope
**Fields:** automation, gate, metric, scope
**Measure:** Cycle-time gain with equal or better verification coverage
**Control:** Automate preparation and checking while retaining consequential gates.
**Evidence:** Before/after measures and unchanged control map

## Topic 3: Tools, Skills, MCP, Subagents and Cloud Automation

Apply the Codex extension surface to implement repeatable, observable and portable agent workflows.

### Terminal and file tools

**Mechanism:** Inspect file → Choose operation → Apply change → Verify bytes
**Fields:** path, operation, patch, checksum
**Measure:** File operations with explicit before-and-after evidence
**Control:** Use targeted search, patch and verification tools.
**Evidence:** Diff plus test or checksum

### Browser-based verification

**Mechanism:** Start app → Navigate flow → Observe state → Capture defect
**Fields:** url, action, state, screenshot
**Measure:** Critical user paths verified at target viewport
**Control:** Pair implementation tests with real-browser evidence.
**Evidence:** Browser trace and screenshot

### Model Context Protocol

**Mechanism:** Select server → Declare capability → Call typed tool → Validate response
**Fields:** server, schema, request, response
**Measure:** MCP calls returning schema-valid results
**Control:** Install only required servers and constrain their permissions.
**Evidence:** Server inventory, call trace and validation

### Plugins and packaged capability

**Mechanism:** Inspect bundle → Check permissions → Enable component → Test boundary
**Fields:** manifest, permissions, component, test
**Measure:** Enabled capabilities with reviewed dependencies
**Control:** Review source, permissions and dependencies before enabling.
**Evidence:** Manifest review and bounded test

### Reusable skills

**Mechanism:** Write trigger → Encode workflow → Add resources → Test near-miss
**Fields:** description, instructions, resources, evaluation
**Measure:** Trigger precision across positive and near-miss prompts
**Control:** Use narrow triggers and verify both trigger and non-trigger cases.
**Evidence:** Skill package plus evaluation record

### Subagent delegation

**Mechanism:** Define bounded task → Fork context → Work independently → Return evidence
**Fields:** task, context, output, evidence
**Measure:** Delegated tasks completed without scope overlap
**Control:** Delegate concrete, dependency-light work with explicit deliverables.
**Evidence:** Task brief and returned evidence

### Hooks and lifecycle checks

**Mechanism:** Detect event → Run policy → Return status → Block or continue
**Fields:** event, policy, status, decision
**Measure:** Policy violations blocked before completion
**Control:** Keep hooks deterministic, fast and fail-closed for material rules.
**Evidence:** Hook output and blocked test case

### Headless codex exec

**Mechanism:** Provide task → Select output mode → Stream events → Exit by status
**Fields:** prompt, jsonl, events, exit_code
**Measure:** Machine-readable runs with reliable non-zero failure status
**Control:** Use structured JSON events and explicit finish conditions.
**Evidence:** JSONL event log and process exit code

### Cloud environments

**Mechanism:** Connect repository → Configure setup → Run isolated task → Review diff
**Fields:** repo, environment, task, diff
**Measure:** Cloud tasks reproducible from declared setup
**Control:** Pin setup steps, environment variables and safe secrets.
**Evidence:** Environment config and cloud task summary

### Background and scheduled work

**Mechanism:** Define cadence → Select project → Run task → Route result
**Fields:** schedule, project, run, notification
**Measure:** Scheduled runs producing actionable, non-duplicate results
**Control:** Use bounded prompts, idempotency and appropriate notification policy.
**Evidence:** Run history and action decision

### Portable agent workflow

**Mechanism:** Declare inputs → Bundle instructions → Run across surface → Compare outputs
**Fields:** inputs, AGENTS, surface, comparison
**Measure:** Equivalent acceptance results across supported surfaces
**Control:** Move requirements into versioned repository artifacts.
**Evidence:** Portable repository and cross-surface comparison

## Topic 4: Evaluation, Comparative Effectiveness and Governed Adoption

Evaluate Codex workflows with golden tasks, risk-adjusted measures and a defensible adoption recommendation.

### Evaluation question design

**Mechanism:** Name decision → Choose criterion → Define measure → Set threshold
**Fields:** decision, criterion, measure, threshold
**Measure:** Criteria with decision-linked thresholds
**Control:** Start from the adoption or remediation decision.
**Evidence:** Evaluation charter

### Golden task suite

**Mechanism:** Sample real work → Freeze fixture → Run candidate → Compare outcome
**Fields:** task, fixture, run, comparison
**Measure:** Representative tasks passing repeatable checks
**Control:** Use a stratified task set including edge and failure cases.
**Evidence:** Versioned fixtures and run results

### Functional correctness

**Mechanism:** Run tests → Inspect behavior → Review diff → Re-test repair
**Fields:** tests, behavior, diff, retest
**Measure:** Passed required checks / total required checks
**Control:** Combine automated, browser and human review criteria.
**Evidence:** Test report, observed behavior and diff

### Reliability and variance

**Mechanism:** Repeat task → Capture outcome → Measure variance → Investigate cause
**Fields:** repetitions, outcomes, variance, cause
**Measure:** Success rate and outcome variance over repeated runs
**Control:** Repeat representative tasks under controlled conditions.
**Evidence:** Run series and variance summary

### Latency and throughput

**Mechanism:** Timestamp start → Record stages → Locate bottleneck → Re-test change
**Fields:** start, stages, bottleneck, result
**Measure:** Median completion time and useful tasks per hour
**Control:** Pair speed measures with defect and review effort.
**Evidence:** Stage timings and quality-adjusted throughput

### Cost and resource efficiency

**Mechanism:** Count usage → Value reviewer time → Add rework → Compare baseline
**Fields:** usage, review_time, rework, baseline
**Measure:** Total cost per accepted task
**Control:** Use fully loaded cost per accepted outcome.
**Evidence:** Cost model and sensitivity table

### Security and privacy evaluation

**Mechanism:** Map data → Probe boundary → Inspect logs → Record residual risk
**Fields:** data, boundary, logs, risk
**Measure:** Material risks with tested controls and owners
**Control:** Use least privilege, redaction and explicit retention rules.
**Evidence:** Threat model, probe results and risk owner

### Comparative experiment

**Mechanism:** Define baseline → Hold task constant → Run alternatives → Interpret trade-off
**Fields:** baseline, task, alternatives, tradeoff
**Measure:** Paired results across identical tasks and criteria
**Control:** Use controlled paired trials and document confounders.
**Evidence:** Comparison table and caveat register

### Failure taxonomy and repair

**Mechanism:** Classify failure → Find locus → Apply scoped repair → Re-run affected checks
**Fields:** class, locus, repair, retest
**Measure:** Repairs that close the failed criterion without regression
**Control:** Repair the smallest causal layer and re-test scope plus regression set.
**Evidence:** Failure record, patch and re-test result

### Adoption readiness

**Mechanism:** Aggregate evidence → Score controls → Identify gaps → Choose posture
**Fields:** evidence, control_score, gaps, posture
**Measure:** Readiness score supported by retrievable evidence
**Control:** Evaluate people, process, technology and governance together.
**Evidence:** Readiness scorecard and gap owners

### Governed recommendation

**Mechanism:** Summarise benefit → State limits → Set controls → Approve next step
**Fields:** benefit, limits, controls, decision
**Measure:** Recommendation accepted with conditions and review date
**Control:** Recommend a bounded posture: pilot, expand, hold or stop.
**Evidence:** Signed recommendation with conditions

## Labs

### Lab 01: Repository Reconnaissance and Baseline

Inspect a TaskBoard repository, identify its instruction and test boundaries, and record a measurable baseline before any edit.

- Folder: `labs/lab-01-repository-reconnaissance/`
- Workflow: Open repo, Read rules, Map files, Run tests, Measure baseline, Decide scope
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The report names the applicable instruction chain, test command, baseline result and scoped target files.

### Lab 02: Prompt-to-Plan Feature Delivery

Turn an outcome contract into a bounded plan, implement one TaskBoard feature and verify the changed behavior.

- Folder: `labs/lab-02-prompt-plan-feature/`
- Workflow: State goal, Inspect code, Write plan, Apply patch, Run checks, Review diff
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The diff is scoped, the new behavior is tested, all supplied tests pass and the final summary cites evidence.

### Lab 03: Scoped AGENTS.md Hierarchy

Design root and nested instructions, then verify that a task applies the nearest rule without conflicting with repository policy.

- Folder: `labs/lab-03-agents-hierarchy/`
- Workflow: Read root, Read nested, Resolve scope, Execute task, Inspect diff, Record trace
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The trace distinguishes root and nested rules and the patch complies with both in the correct precedence.

### Lab 04: Sandbox and Approval Experiment

Compare read-only, workspace-write and approval boundaries using safe commands and an explicit consequence matrix.

- Folder: `labs/lab-04-sandbox-approval/`
- Workflow: Classify action, Set sandbox, Run probe, Observe block, Request approval, Recommend policy
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The log contains safe probes for three permission cases and a least-privilege recommendation supported by results.

### Lab 05: Parallel Worktrees without Collision

Split two independent TaskBoard changes into isolated worktrees and integrate them in a controlled order.

- Folder: `labs/lab-05-parallel-worktrees/`
- Workflow: Find seams, Create branches, Create worktrees, Run tasks, Test commits, Integrate
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The worktrees use distinct paths and branches, produce separate commits, and integrate with the full test suite passing.

### Lab 06: Browser QA with Playwright

Verify a local TaskBoard dashboard through a real browser and convert one visible defect into reproducible evidence.

- Folder: `labs/lab-06-browser-qa/`
- Workflow: Serve app, Open page, Exercise flow, Capture defect, Repair UI, Re-test
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The evidence includes pre-repair failure, scoped patch and passing desktop/mobile re-test.

### Lab 07: Build and Evaluate a Codex Skill

Package a test-triage workflow as a reusable skill and measure trigger precision with positive and near-miss prompts.

- Folder: `labs/lab-07-reusable-skill/`
- Workflow: Define trigger, Write skill, Add template, Run positive, Run near-miss, Refine
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The skill passes structural checks and its evaluation shows correct trigger and near-miss behavior.

### Lab 08: Headless Codex Exec for CI

Design a non-interactive Codex run that emits machine-readable events and fails safely when acceptance checks fail.

- Folder: `labs/lab-08-headless-exec/`
- Workflow: Define task, Choose JSON, Run exec, Parse events, Check exit, Archive evidence
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The wrapper avoids embedded secrets, records structured events and distinguishes success from failure by exit status.

### Lab 09: Golden-Task Evaluation Harness

Run a repeatable golden-task suite and calculate correctness, reliability, latency and cost-per-accepted-task.

- Folder: `labs/lab-09-evaluation-harness/`
- Workflow: Load fixtures, Run candidate, Score criteria, Repeat trials, Calculate metrics, Diagnose failure
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The report is reproducible, includes at least four decision-relevant metrics and links each failure to a fixture.

### Lab 10: Capstone: Governed Codex Adoption

Deliver a bounded TaskBoard improvement, evaluate it against the baseline and make a pilot, expand, hold or stop recommendation.

- Folder: `labs/lab-10-capstone-governed-adoption/`
- Workflow: Frame problem, Configure harness, Implement change, Verify outcome, Compare baseline, Recommend posture
- Detailed guide: `README.md` and `README.pdf` in the individual folder
- Acceptance: The solution works, the evidence pack covers correctness, efficiency and risk, and the recommendation states limits, controls, owner and review date.

## References
- [Official course page](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-codex.html) — course identity, duration, learning outcomes and assessment context
- [OpenAI Codex learning hub](https://developers.openai.com/learn/codex) — current Codex workflows, guides and reference entry points
- [Codex cloud documentation](https://learn.chatgpt.com/docs/cloud) — cloud environments, parallel tasks and review workflow
- [OpenAI Academy: Codex](https://openai.com/academy/codex/) — official learning resources and demonstrations
- [OpenAI Codex product](https://openai.com/codex/) — Codex product surfaces and capabilities
- [OpenAI Codex repository](https://github.com/openai/codex) — CLI installation, repository guidance and source reference
- [AIFLOXIUM Codex guide](https://www.aifloxium.online/blog/openai-codex-tutorial-complete-guide-2026) — supplementary workflow coverage
- [QCode Codex IDE guide](https://docs.qcode.cc/en/docs/ide/codex) — supplementary IDE integration perspective
- [DataCamp Codex tutorial](https://www.datacamp.com/tutorial/openai-codex) — supplementary cloud-task examples
- [YouMind Codex tutorial](https://youmind.com/landing/x-viral-articles/master-codex-ai-features-tutorial) — supplementary feature overview
- [AirMore Codex beginners review](https://airmore.ai/ai-review/codex-tutorial-beginners) — supplementary beginner perspective
- [Gauraw Codex tutorial](https://www.gauraw.com/openai-codex-tutorial/) — supplementary workflow and troubleshooting coverage
- [DeepWiki Codex interfaces](https://deepwiki.com/openai/codex/4-user-interfaces) — supplementary interface taxonomy
