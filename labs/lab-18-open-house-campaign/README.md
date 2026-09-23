# Lab 18 — Lead Magnet, Newsletter and the Open-House Campaign

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 2 · Topic 5 · about 40 minutes · slides 160–164**  
**Surface:** Codex (skills.sh) → ChatGPT Work (@Gmail, analysis)  
**Features:** lead-magnets · seo-audit · newsletter-generation · consent · UTM

## The story so far

The November open house is the term's biggest bet. Turn visitors into leads with a free starter guide, fix the site's search visibility, email only people who opted in — then read the numbers to decide where next month's S$3,000 goes.

## Your goal

Turn visitors into leads and leads into sign-ups for the November open house — then measure which channel actually worked.

## You'll build

A lead magnet, an SEO-fixed site, a newsletter to consented contacts only, and a results report

## What is in this folder

- `assets/open-house-brief.md`
- `assets/optins.csv`
- `assets/campaign-results.csv`
- `assets/utm-plan.md`
- `assets/skills-to-install.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Install three skills** — In the cook-and-bake repo, run the three commands in skills-to-install.md.
2. **Make the lead magnet** — Paste Prompt A in Codex.
3. **Fix the SEO** — Run $seo-audit on the site; fix the top three issues and ship with $gitpush.
4. **Write the newsletter** — Paste Prompt B in Codex.
5. **Send it properly** — In Work, paste Prompt C.
6. **Measure** — In Work, paste Prompt D.

## The prompts

### PROMPTS A and B — Codex

> PROMPT A
> $lead-magnets Create "The Home Baker's Sourdough
> Starter Guide" — a 4-page PDF lead magnet from
> kb/brochures/BAK-101.md and open-house-brief.md,
> plus a landing section on our site with an email
> field (same consent rules as the sign-up form).
>
> PROMPT B
> $newsletter-generation Write the November
> newsletter as HTML email: open house (date, both
> campuses), 3 featured courses from courses.json,
> the starter guide link, and UTM-tagged links per
> utm-plan.md. One clear call to action.

### PROMPTS C and D — ChatGPT Work

> PROMPT C
> Using @Drive optins.csv, create one @Gmail DRAFT of
> the newsletter per contact with consent = yes only.
> Report how many were excluded and why. Send nothing.
>
> PROMPT D
> Analyse @Drive campaign-results.csv. For each
> channel: sessions, downloads, RSVPs, sign-ups and
> conversion rate. Which channel converts best per
> visit and per volume? Recommend next month's
> S$3,000 budget split, with your reasoning.

## Check your work

- [ ] Three marketing skills are installed and recorded in the lock file.
- [ ] The lead magnet uses only facts from the source files.
- [ ] The top three SEO issues are fixed and deployed.
- [ ] Every newsletter link carries UTM tags.
- [ ] Drafts went only to consent = yes; 5 contacts were excluded.
- [ ] The results report gives conversion per channel and a budget split.

## If it goes wrong

- **Everyone got a draft** — Filter on consent before drafting — say it explicitly.

## Stretch

- Ask Work which single change would lift the newsletter's conversion, and why.

> **Why it matters:** Marketing without consent is not a growth hack — it breaks Singapore's PDPA. The consent column decides who gets mail.

## Next

The assessment. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
