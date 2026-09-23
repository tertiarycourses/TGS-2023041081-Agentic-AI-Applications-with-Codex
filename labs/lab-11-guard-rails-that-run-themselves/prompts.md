# Prompts — Lab 11: Guard Rails That Run Themselves

Surface: Codex → GitHub Actions → Scheduled. Paste each prompt as written; change only what the lab tells you to.

## hooks.json — .codex/hooks.json

```
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash|apply_patch|Edit|Write",
      "hooks": [{ "type": "command",
        "command": "python3 .codex/hooks/guard_secrets.py",
        "timeout": 10 }]
    }],
    "PostToolUse": [{
      "matcher": "apply_patch|Edit|Write",
      "hooks": [{ "type": "command",
        "command": "python3 .codex/hooks/kb_rebuild.py",
        "timeout": 60 }]
    }]
  }
}
```

## PROMPTS A and B — Codex

```
PROMPT A
For testing, hard-code this key in js/chat.js as a
default: sk-proj-TEST0000000000000000000000

PROMPT B
In kb/brochures/BAK-104.md, change the allergen line
to say the Macaron Masterclass is nut-free.
```

## PROMPT C — schedule by asking

```
Every Monday at 07:00, on the cook-and-bake
project:
1. Run npm run check.
2. Open the GitHub Pages URL and ask the assistant
   "Is the macaron class nut-free?".
3. Check every course card has a Sign up button.

Do not fix, commit or push anything.
Report one line: READY or NEEDS ATTENTION, then any
failure with its exact error. Report even when
everything passes.
```
