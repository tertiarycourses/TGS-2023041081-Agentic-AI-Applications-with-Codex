#!/usr/bin/env bash
set -euo pipefail
task_file="${1:-prompt.md}"
output_file="${2:-evidence/codex-events.jsonl}"
test -f "$task_file"
# Remove `echo` only in a trainer-approved environment with Codex installed.
echo codex exec --json --sandbox workspace-write "$(<"$task_file")" '>' "$output_file"
