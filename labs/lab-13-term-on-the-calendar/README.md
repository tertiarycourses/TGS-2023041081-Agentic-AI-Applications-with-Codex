# Lab 13 — Put the Term on the Calendar

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 2 · Topic 4 · about 30 minutes · slides 127–130**  
**Surface:** ChatGPT Work + @Drive + @Calendar  
**Features:** @Calendar write access · clash detection · approve before write

## The story so far

Term 4 starts on 10 October: seven chefs, two campuses, 20 courses and two academy closure days, all in Grace's head. Put every session on one calendar — and catch the double-booking she missed.

## Your goal

Twenty courses, seven chefs, two campuses. One prompt turns the term plan into a calendar — and catches the clash a human missed.

## You'll build

A dedicated term calendar with every session, and a clash report

## What is in this folder

- `assets/term-schedule.csv`
- `assets/instructors.csv`
- `assets/closures.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Make a calendar** — In Google Calendar create "Cook & Bake — Term 4", so every test event stays in one place.
2. **Connect @Calendar** — Grant write access and confirm the account.
3. **Run the prompt** — Paste it. Read the event list before approving.
4. **Find the clash** — The fixture hides one instructor double-booking. Did Work catch it?
5. **Approve and check** — Open Google Calendar and look.

## The prompts

### PROMPT — ChatGPT Work

> Plan first. Create nothing until I approve.
>
> From @Drive term-schedule.csv, instructors.csv and
> closures.csv, create one @Calendar event per weekly
> session in the calendar "Cook & Bake — Term 4".
>
> Title:    <code> <title> — Session <n> of <N>
> Location: the campus
> Notes:    instructor, what to bring, sign-up link
>
> Rules:
> - Skip every date in closures.csv.
> - If an instructor or a campus kitchen is booked
>   twice at the same time, create neither course.
>   List the clash and ask me.
> - Do NOT add guests — that emails invitations.
>
> Show me the full event list and any clashes first.

## Check your work

- [ ] Work listed every event and waited for approval.
- [ ] It reported the BAK-101 / BAK-110 Saturday clash (Chef Daniel Koh).
- [ ] No event falls on 25 December or 1 January.
- [ ] Titles read "Session 3 of 4", with the campus as location.
- [ ] No guests were invited.
- [ ] You opened Google Calendar and saw the events.

## If it goes wrong

- **Events in the wrong calendar** — Name the calendar explicitly in the prompt.

## Stretch

- Ask Work to propose a new slot for BAK-110 that fixes the clash.

> **Why it matters:** Deleting 60 wrong events by hand is a bad afternoon. The list before the write is your last cheap checkpoint.

## Next

Lab 14 — Enrol the Learners and Automate Reminders. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
