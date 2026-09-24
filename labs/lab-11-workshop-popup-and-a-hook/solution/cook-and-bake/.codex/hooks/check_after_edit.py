#!/usr/bin/env python3
"""PostToolUse hook — after every edit Codex makes, run the site check.

Fired by an event (Codex finished editing a file), not by a timer. It runs
`npm run check` — rebuild the chatbot's knowledge base, then the 30-question
golden test — and hands the result back to Codex as extra context. A failing
test sends Codex back to fix it in the same turn, before anyone else sees it.
"""
import json
import subprocess
import sys


def main():
    try:
        json.load(sys.stdin)          # the event: which tool ran, on what
    except json.JSONDecodeError:
        return

    r = subprocess.run("npm run --silent check", shell=True,
                       capture_output=True, text=True)
    lines = (r.stdout + r.stderr).strip().splitlines()
    summary = lines[-1] if lines else "no output"
    if r.returncode == 0:
        context = f"Site check passed after your edit: {summary}"
    else:
        fails = "\n".join(l for l in lines if l.startswith("FAIL"))[:1500]
        context = ("Site check FAILED after your edit. Fix this before you "
                   f"finish:\n{fails or chr(10).join(lines[-15:])}")

    print(json.dumps({"hookSpecificOutput": {
        "hookEventName": "PostToolUse",
        "additionalContext": context}}))


if __name__ == "__main__":
    main()
