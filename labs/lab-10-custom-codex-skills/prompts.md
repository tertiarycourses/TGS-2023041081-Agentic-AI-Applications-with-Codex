# Prompts — Lab 10: Create Custom Codex Skills

Surface: Codex. Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Codex

```
Use $skill-installer to install the attached
`project-setup` skill.

Do not run the skill or build the project yet.
Confirm the exact installed path and tell me when
`project-setup` appears in this project's skill
list. Do not write outside this project folder.
```

## PROMPT B — Codex

```
$skill-creator Save what we just did as a
project skill called kb-update.

It should trigger when a course is added, changed
or withdrawn, or a fee, date, allergen or policy
changes. Steps: update data/courses.csv first,
then the kb/ brochure to match, then run
npm run check. Never edit the golden questions to
pass. Report files changed and the eval score.
```

## PROMPT C — Codex

```
$skill-creator Create a project skill called
course-brochure: given a course code, write a
one-page A4 HTML brochure from data/courses.csv and the
kb/ brochure only — photo, schedule, intakes, fee,
what you learn, allergens, sign-up link. Stop and
report if the two sources disagree.
```
