# Lab 14 — Enrol the Learners and Automate Reminders

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 2 · Topic 4 · about 35 minutes · slides 131–135**  
**Surface:** ChatGPT Work + @Drive + @Gmail → Scheduled  
**Features:** @Gmail drafts · data checks · scheduled tasks

## The story so far

Forty people signed up on the website. Some have paid and some have not; one left out a phone number; one with a nut allergy booked the macaron class. Each needs the right email, and two need a phone call first.

## Your goal

Forty people signed up on the website. Each needs the right email — and two of them need a phone call first.

## You'll build

One draft per learner, a flag list, and a weekly reminder task

## What is in this folder

- `assets/signups.csv`
- `assets/email-guidelines.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Use your own address** — In signups.csv replace YOUR.NAME with your Gmail username. Plus-addressing delivers every email to you.
2. **Upload** — Put it in Drive: Cook & Bake / Enrolments.
3. **Draft, do not send** — Paste Prompt A. Open three drafts.
4. **Check the flags** — Two rows need a human. Did Work flag both?
5. **Send one** — Send a single draft — to yourself.
6. **Automate** — Paste Prompt B to schedule the weekly reminders.

## The prompts

### PROMPT A — ChatGPT Work

> Using @Drive signups.csv and the Term 4
> calendar, prepare @Gmail DRAFTS. Send nothing.
>
> - paid = yes → joining email: first name, course,
>   first session date/time from the calendar,
>   campus address, what to bring.
> - paid = no → a polite payment reminder.
> - One draft per learner. Never CC or group-send.
>
> Flag, and draft nothing for:
> - rows with a missing field;
> - an allergy that conflicts with the course's
>   allergens — those need a phone call.
>
> Then show a table: learner, course, draft type,
> flag.

### PROMPT B — schedule by asking

> Every Monday at 08:00, check the "Cook & Bake —
> Term 4" calendar for sessions in the next 7 days.
> For each session, prepare a @Gmail DRAFT reminder
> to its enrolled learners: date, time, campus, what
> to bring. Do not send. Then message me: sessions
> this week, drafts prepared, anything odd.

## Check your work

- [ ] Only drafts were created — nothing was sent unprompted.
- [ ] Exactly one draft per learner, with no CC.
- [ ] Unpaid learners got a payment reminder, not joining details.
- [ ] The row with the missing mobile was flagged.
- [ ] The nut allergy on BAK-104 was flagged for a phone call.
- [ ] Your one test email arrived; the weekly task is in Scheduled.

## If it goes wrong

- **Drafts to real people** — Stop. Your find-and-replace missed rows. Every address must be yours.

## Stretch

- Ask for a Monday summary message only when something is flagged.

> **Why it matters:** Schedule the preparation, never the send. The automation does the tedious part; a person decides what goes out.

## Next

Lab 15 — Customer Service with a ChatGPT Skill. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
