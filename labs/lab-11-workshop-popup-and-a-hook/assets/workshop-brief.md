# Workshop invite and the check-after-edit hook (Lab 11)

## Part A — the invite (a feature of the website)

| Item | Detail |
|---|---|
| Event | Free 1-hour Pastries Workshop & Treat |
| When | Next Wednesday, 1:00–2:00 PM |
| Where | Bukit Timah Culinary Campus |
| What happens | Laminate, shape and bake one pastry with a chef, then enjoy it with coffee |
| Trigger | A **timer in the browser**: the visitor has been on the page for 10 seconds |
| Form | Name · mobile (Singapore, 8 digits starting 8 or 9) · email |
| Rules | Show once per visitor · close with X, "Maybe later" or Esc · never on top of another open dialog |
| Where sign-ups go | Saved in the browser like the course sign-ups, plus a mailto copy to the academy |

## Part B — the hook (a feature of Codex)

A hook is triggered by an **event in Codex**, not by a timer and not by a
schedule. Ours:

- **Event:** Codex has just edited a file.
- **Action:** run `npm run check` (rebuild the assistant's knowledge base,
  then the 30 golden questions).
- **Result:** if a check fails, Codex is told which one and fixes it in the
  same turn.

You ask for it in plain words; Codex writes the configuration
(`.codex/hooks.json`) itself. Before it runs, Codex asks you to review and
**trust** it.

## Three triggers, three different features

| Trigger | Feature | Example in this course |
|---|---|---|
| Time on the page | Website timer | The workshop invite (Lab 11) |
| An event in Codex | Hook | Check after every edit (Lab 11) |
| A time or cadence | Scheduled task | Enrolment reminders (Lab 14) |
