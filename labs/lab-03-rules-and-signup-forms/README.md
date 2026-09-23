# Lab 03 — Project Rules and a Sign-up Form for Every Course

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 1 · Topic 1 · about 30 minutes · slides 46–49**  
**Surface:** Codex  
**Features:** /init · AGENTS.md · static-site forms · consent

## The story so far

Investors liked the site and asked the obvious question: how does anyone book? There is no budget for a booking system yet. Grace needs a sign-up form on every course that works on a static site — and rules so every future change follows the academy's standards.

## Your goal

Give Codex durable rules, then let visitors sign up for any course — with no backend.

## You'll build

AGENTS.md, a validated sign-up form on every card, and a staff CSV export

## What is in this folder

- `assets/AGENTS.template.md`
- `assets/signup-spec.md`
- `assets/signups-format.csv`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Generate rules** — Run /init. Read what Codex wrote.
2. **Trim them** — Cut AGENTS.md to four sections — What this is, Commands, Conventions, Boundaries — under 60 lines.
3. **Add a boundary** — Add: "No framework. Never put an API key in code." Then ask Codex to add Bootstrap and watch it refuse.
4. **Build the form** — Paste the prompt. It follows signup-spec.md.
5. **Break it on purpose** — Submit a bad email, a 5-digit mobile and no consent. Then a nut allergy on the macaron course.
6. **Export** — Open admin.html and export the CSV.

## The prompts

### PROMPT — Codex

> Add a sign-up form for every course, following
> signup-spec.md exactly.
>
> - A Sign up button on every course card opens one
>   shared <dialog>, prefilled with that course.
> - Fields: intake (from the course's intakes), full
>   name, email, Singapore mobile, experience,
>   allergies, a REQUIRED consent box and a SEPARATE,
>   unticked newsletter opt-in.
> - Validate in the browser with inline messages.
> - If the allergy mentions nuts and the course uses
>   nuts, show a warning (do not block).
> - No backend: save to localStorage, show a
>   reference number and a mailto link, and add
>   admin.html that exports the CSV columns in
>   signups-format.csv.
>
> DONE WHEN every rule in signup-spec.md passes.

## Check your work

- [ ] AGENTS.md has the four sections and is under 60 lines.
- [ ] Codex refused or questioned Bootstrap, citing your rule.
- [ ] Every one of the 20 cards has a working Sign up button.
- [ ] A bad email and a 5-digit mobile are rejected inline.
- [ ] Consent is required; the newsletter opt-in starts unticked.
- [ ] A nut allergy on BAK-104 shows a warning.
- [ ] admin.html exports a CSV with the 12 columns in the spec.

## If it goes wrong

- **Consent and marketing merged** — They must be two boxes. Agreeing to be contacted about your sign-up is not agreeing to marketing.

## Stretch

- Set SIGNUP_ENDPOINT to a Google Form or Formspree URL and confirm a submission arrives.

> **Why it matters:** A static site cannot receive data. Say so honestly: localStorage and a CSV export for class; a form service in production.

## Next

Lab 4 — Publish the Site: GitHub Pages and Sites. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
