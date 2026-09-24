# Lab 12 — Price the Courses and Find Break-even

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 2 · Topic 4 · about 35 minutes · slides 123–126**  
**Surface:** ChatGPT Work + @Drive → Chat  
**Features:** Plan mode in Work · spreadsheet artifact · @Drive

## The story so far

Operations begin. Sign-ups are arriving and Grace's accountant asks the hard question: which of the 20 courses make money after ingredients, chefs and rent? The fees were set by instinct. Find out before the first class.

## Your goal

Twenty fees were set by instinct. Find out which courses lose money before the first term starts.

## You'll build

A pricing workbook with live formulas and a fee recommendation

## What is in this folder

- `assets/recipe-costs.csv`
- `assets/fixed-costs.csv`
- `assets/courses.json`
- `assets/instructors.csv`
- `assets/pricing-rules.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Upload to Drive** — Put the five files in a Drive folder: Cook & Bake / Finance.
2. **Connect @Drive** — Read access is enough.
3. **Plan first** — Paste the prompt. Change one step of the plan.
4. **Audit the workbook** — Click three cells — they must be formulas, not pasted numbers.
5. **Sanity-check in Chat** — Ask Chat: "Is a 45% gross margin realistic for a cooking school?" Compare with pricing-rules.md.

## The prompts

### PROMPT — ChatGPT Work

> Plan first, then build.
>
> Using @Drive Cook & Bake / Finance, build a pricing
> workbook with real formulas.
>
> Tabs:
> 1. Unit cost — per course: ingredients x sessions,
>    consumables, instructor and assistant cost per
>    session, cost per seat at 8, 10 and 12 learners.
> 2. Fixed costs — monthly total.
> 3. Break-even — seats per month to cover fixed
>    costs at the current fee mix.
> 4. Fee check — current fee vs the rule in
>    pricing-rules.md. Flag underpriced courses.
> 5. Notes — every assumption.
>
> Write UNKNOWN for anything you cannot derive.

## Check your work

- [ ] Work showed a plan and you changed one step.
- [ ] Cells in Unit cost are formulas, not pasted values.
- [ ] Break-even seats per month is stated with its formula.
- [ ] Underpriced courses are flagged against pricing-rules.md.
- [ ] The Notes tab lists every assumption.
- [ ] You recomputed one course's cost per seat by hand.

## If it goes wrong

- **Pasted values** — Ask: "Rebuild tab 1 with formulas that reference the source tabs."

## Stretch

- Ask for a scenario tab: what if rent rises 10%?

> **Why it matters:** Chat is for the quick second opinion; Work is for the artifact you will actually use.

## Next

Lab 13 — Put the Term on the Calendar. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
