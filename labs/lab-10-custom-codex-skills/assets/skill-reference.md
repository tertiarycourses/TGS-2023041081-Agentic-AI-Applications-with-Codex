# Writing a good SKILL.md (Lab 9)

    ---
    name: <kebab-case>
    description: Use when <the words a colleague would type>. <What it does
      and what it produces, in one sentence.>
    ---
    ## Steps     numbered, in order, each checkable
    ## Report    exactly what to hand back
    ## Never     the two or three mistakes to prevent

Where skills live
- Project: `.agents/skills/<name>/SKILL.md` — commit it.
- Personal: `$HOME/.agents/skills/<name>/SKILL.md`.

Test twice
1. Explicitly: `$kb-update add BAK-111`.
2. Implicitly, in a NEW chat: "we're adding a Pineapple Tart course".
If step 2 does not trigger the skill, the description is too vague.
