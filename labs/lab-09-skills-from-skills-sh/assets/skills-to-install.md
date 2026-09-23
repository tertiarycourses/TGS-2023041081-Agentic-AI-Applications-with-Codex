# Skills to install (Lab 8)

Run in your cook-and-bake folder. `-a codex` installs for Codex into
`.agents/skills/`; `-y` skips the prompts. Read each SKILL.md before use.

    npx skills add https://github.com/anthropics/skills \
      --skill frontend-design -a codex -y

    npx skills add https://github.com/rysweet/amplihack \
      --skill cybersecurity-analyst -a codex -y

    npx skills add https://github.com/reason-machines/security-skills \
      --skill anthropic-cybersecurity-skills -a codex -y

Check what you have:

    npx skills list

Browse more: https://skills.sh — or `npx skills find <topic>`.
