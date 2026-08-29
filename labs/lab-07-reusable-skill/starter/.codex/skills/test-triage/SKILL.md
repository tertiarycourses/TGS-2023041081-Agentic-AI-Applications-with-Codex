---
name: test-triage
description: Diagnose failing Python unittest output and produce an evidence-backed root-cause report. Use only when a user asks to triage an existing unittest failure.
---
# Test Triage
1. Capture the exact failing command and traceback.
2. Identify the smallest causal layer before editing.
3. Reproduce the focused failure, repair it, then run regression tests.
4. Report changed files, test results and remaining uncertainty.
