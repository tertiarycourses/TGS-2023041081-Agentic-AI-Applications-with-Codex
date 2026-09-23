# Prompts — Lab 09: Install Community Skills from skills.sh

Surface: Codex. Paste each prompt as written; change only what the lab tells you to.

## COMMANDS — terminal

```
npx skills add https://github.com/anthropics/skills \
  --skill frontend-design -a codex -y

npx skills add https://github.com/rysweet/amplihack \
  --skill cybersecurity-analyst -a codex -y

npx skills add https://github.com/reason-machines/security-skills \
  --skill anthropic-cybersecurity-skills -a codex -y
```

## PROMPT A — Codex

```
$frontend-design Refine the Cook & Bake site.
Keep brand.md's colours and fonts. Improve the
hero, card rhythm and the sign-up dialog. Do not
change any text, fee or behaviour. Show before and
after screenshots.
```

## PROMPT B — Codex

```
$cybersecurity-analyst Review this static site
using security-review-scope.md: the sign-up form,
localStorage data, the ChatGPT-mode key handling,
third-party images and prompt injection.
Rank findings by severity with evidence. Propose
fixes; do not apply them yet.
```
