# Lab 09 — Install Community Skills from skills.sh

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 1 · Topic 3 · about 25 minutes · slides 94–99**  
**Surface:** Codex  
**Features:** npx skills add · frontend-design · cybersecurity-analyst · anthropic-cybersecurity-skills

## The story so far

A designer friend says the site looks a bit template. Grace's insurer asks what happens to the personal data in sign-ups. There is no designer and no security team — but you can install one of each as a skill.

## Your goal

Borrow expertise. Install a design skill to polish the site and two security skills to review the chatbot and the form.

## You'll build

A polished UI, a ranked security review, and the skills lock file

## What is in this folder

- `assets/skills-to-install.md`
- `assets/security-review-scope.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Install frontend-design** — Run the first command in skills-to-install.md. It lands in .agents/skills/.
2. **Read before you run** — Open the SKILL.md. Skills run with your permissions.
3. **Polish the site** — Paste Prompt A.
4. **Install the security skills** — Run the two security commands.
5. **Review the attack surface** — Paste Prompt B. Fix the top finding.
6. **Commit the lock file** — skills.sh creates it automatically; it records exactly what you installed.

## The prompts

### COMMANDS — terminal

```
npx skills add https://github.com/anthropics/skills \
  --skill frontend-design -a codex -y

npx skills add https://github.com/rysweet/amplihack \
  --skill cybersecurity-analyst -a codex -y

npx skills add https://github.com/reason-machines/security-skills \
  --skill anthropic-cybersecurity-skills -a codex -y
```

### PROMPT A — Codex

> $frontend-design Refine the Cook & Bake site.
> Keep brand.md's colours and fonts. Improve the
> hero, card rhythm and the sign-up dialog. Do not
> change any text, fee or behaviour. Show before and
> after screenshots.

### PROMPT B — Codex

> $cybersecurity-analyst Review this static site
> using security-review-scope.md: the sign-up form,
> localStorage data, the ChatGPT-mode key handling,
> third-party images and prompt injection.
> Rank findings by severity with evidence. Propose
> fixes; do not apply them yet.

## Check your work

- [ ] Three skills are in .agents/skills/ and in the lock file.
- [ ] You read each SKILL.md before running it.
- [ ] The design change kept every fee and behaviour — check the diff.
- [ ] The security review ranks findings with evidence.
- [ ] You fixed the top finding (e.g. a Content-Security-Policy).

## If it goes wrong

- **Skill not found** — Start a new Codex chat — skills load when a session starts.

## Stretch

- Run npx skills find seo and inspect what else exists.

> **Why it matters:** anthropic-cybersecurity-skills is a large library. Invoke the specific skill you need rather than all of it.

## Next

Lab 10 — Create Custom Codex Skills. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
