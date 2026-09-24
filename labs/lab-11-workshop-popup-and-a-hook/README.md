# Lab 11 — A Workshop Popup and a Hook That Checks Every Edit

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 1 · Topic 3 · about 35 minutes · slides 112–116**  
**Surface:** Codex  
**Features:** timed popup · 3-field form · hook on an event · trust

## The story so far

Grace is running a free Pastries Workshop & Treat next Wednesday at the Bukit Timah campus to fill the first term. Visitors browse the site but leave without signing up. And her part-time administrator is about to start editing brochures — one wrong allergen line could go live. Invite the visitors who linger, and make Codex re-check every edit.

## Your goal

Visitors who stay a while are interested — invite them before they leave. Then add one guard rail: a hook that fires every time Codex edits a file and re-checks the site, so a wrong allergen line never goes live.

## You'll build

A 10-second workshop invite with a name, mobile and email form, and a trusted hook that runs npm run check after every edit

## What is in this folder

- `assets/workshop-brief.md`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Read the brief** — Open assets/workshop-brief.md: the event, the three form fields, and the difference between a timer, a hook and a schedule.
2. **Build the popup** — Paste Prompt A into Codex in your cook-and-bake project.
3. **Test it** — Reload the site and wait 10 seconds. Try a bad mobile number, then a good one. Reload again — the invite must not come back.
4. **Ask for the hook** — Paste Prompt B. Codex sets the hook up for you — no configuration to write.
5. **Trust it** — Codex asks you to review and trust the new hook. Read what it runs (npm run check), then trust it.
6. **Watch it fire** — Paste Prompt C. Straight after the edit the hook runs the check, a golden question fails, and Codex puts the allergen line back.
7. **Publish** — Run $gitpush (Lab 10). GitHub Pages redeploys with the invite.

## The prompts

### PROMPT A — the workshop popup

> Add a workshop invitation to the home page.
>
> When a visitor has been on the page for 10 seconds,
> open a friendly popup with:
> - Title: Free 1-hour Pastries Workshop & Treat
> - When: next Wednesday, 1:00-2:00 PM
> - Where: our Bukit Timah campus
> - Ask: Keen to join?
>
> Add a short form: name, mobile and email, and a
> "Count me in" button.
> - Mobile: Singapore, 8 digits starting with 8 or 9.
> - Save sign-ups in the browser like the course
>   sign-ups, then say thank you.
> - Show it once per visitor. Close with X or Esc.
> - Accessible: labels, and focus inside the popup.
> No libraries. Then tell me how to test it.

### PROMPTS B and C — the hook

> PROMPT B
> Add a hook to this project: every time you finish
> editing a file, run npm run check. If it fails,
> tell me which test failed and fix it before you
> carry on. Set it up for me — I don't need to see
> the configuration. Then tell me in two sentences
> what the hook does and how to switch it off.
>
> PROMPT C
> In kb/brochures/BAK-104.md, change the allergen
> line to say the Macaron Masterclass is nut-free.

## Check your work

- [ ] The invite opens after about 10 seconds, not before.
- [ ] A bad mobile number shows an error; a good sign-up shows the thank-you message.
- [ ] After a reload the invite does not appear again.
- [ ] The hook is trusted, and Codex explained what it does in plain words.
- [ ] After Prompt C the hook ran the check, G04 failed, and Codex restored the allergen line in the same turn.
- [ ] npm run check passes every golden question, and the live site shows the invite.

## If it goes wrong

- **The invite never appears** — You have seen it already — clear the site's storage (DevTools → Application) or use a private window.
- **The hook never fires** — It is not trusted yet. Codex asks once; check the hooks list in Settings.

## Stretch

- Ask Codex to show the invite after the visitor scrolls halfway down, instead of after 10 seconds.
- Add a "Workshop sign-ups" table to admin.html with a CSV export.

> **Why it matters:** A timer, a hook and a schedule are three different triggers: the popup waits for the visitor, the hook waits for Codex to edit, a scheduled task waits for the clock (Lab 14).

## Next

Lab 12 — Price the Courses and Find Break-even. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
