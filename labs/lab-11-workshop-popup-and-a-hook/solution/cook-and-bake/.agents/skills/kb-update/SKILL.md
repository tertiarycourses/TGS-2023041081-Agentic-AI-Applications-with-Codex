---
name: kb-update
description: Use when a course is added, changed or withdrawn, or when a fee,
  intake date, allergen or policy changes. Updates data/courses.csv and the
  matching kb/ brochure, rebuilds academy.db and proves the course assistant
  still passes its golden questions.
---

# kb-update

Keep the catalogue, the brochures and the assistant's database in step.

## Steps
1. Read kb/AGENTS.md for the brochure format.
2. Update data/courses.csv first — it is the source of truth for code,
   title, fee, weeks, schedule and intakes.
3. Create or edit kb/brochures/<CODE>.md so every figure matches
   courses.csv exactly. Keep the six "## " sections in order.
4. If the change affects the FAQ or policies, edit kb/faq.md or
   kb/policies.md too.
5. Run `npm run check`.
6. If a golden question now fails, fix the document or js/rag.js — never
   edit eval/golden-questions.csv to make it pass.
7. For a NEW course, add one golden question that only that brochure can
   answer, and confirm it passes.

## Report
- Files changed.
- The eval line, e.g. "31/31 passed (100%)".
- Any figure you could not confirm, flagged for a human.

## Never
- Never invent a fee, date or allergen. Ask if it is missing.
- Never delete a brochure for a withdrawn course without asking — mark it
  withdrawn in courses.csv and the brochure instead.
