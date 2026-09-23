# Lab 08 — QA the Whole Site with @Computer Use

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 1 · Topic 2 · about 25 minutes · slides 81–84**  
**Surface:** Codex + Computer Use  
**Features:** @Computer Use · evidence-based QA

## The story so far

The site is live, but Grace asks one question before she announces it on Monday: has anyone actually tried to sign up on a phone? Let Codex use the site like a visitor, on desktop and mobile, and fix what breaks before a customer finds it.

## Your goal

Before a single learner sees the site, let Codex use it like a visitor — at two screen sizes — and report what breaks.

## You'll build

A ranked defect table with screenshots, and one verified fix

## What is in this folder

- `assets/qa-script.md`
- `assets/defect-template.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Enable Computer Use** — Plugins → Computer Use → Add to Codex. On macOS grant Screen Recording and Accessibility, then restart.
2. **Serve the site** — Keep npm run serve running.
3. **Run the QA** — Paste the prompt and watch the first run.
4. **Reproduce** — Confirm one reported defect yourself.
5. **Fix and retest** — Fix only the top defect, then rerun the same prompt.

## The prompts

### PROMPT — Codex

> @Computer Use Test the Cook & Bake site at
> http://localhost:8080 following qa-script.md.
>
> Run it at 1440px and again at 375px:
> 1. Hero, course grid and the three filter chips.
> 2. Search "vegan" — expect CUL-208 only.
> 3. Sign up for BAK-104 with a bad email, then a
>    valid one with a nut allergy.
> 4. Ask the assistant 3 questions from qa-script.md.
>
> Record what you clicked, what appeared and whether
> it was visible without scrolling. Do not change any
> system or browser settings. Report defects in
> defect-template.csv format with a screenshot each.
> Do not fix anything yet.

## Check your work

- [ ] Computer Use drove a real browser through the whole script.
- [ ] You have screenshots at 1440px and 375px.
- [ ] Every defect has severity, step, expected, observed.
- [ ] You reproduced one defect yourself.
- [ ] The top defect is fixed and the retest confirms it.

## If it goes wrong

- **Nothing happens** — Permissions only apply after the app restarts.

## Stretch

- Ask for a keyboard-only pass: can you sign up without a mouse?

> **Why it matters:** "Do not fix anything yet" keeps testing and repair as two reviewable steps.

## Next

Lab 9 — Install Community Skills from skills.sh. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
