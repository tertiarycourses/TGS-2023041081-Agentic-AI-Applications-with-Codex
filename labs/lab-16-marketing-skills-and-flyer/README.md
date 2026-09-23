# Lab 16 — Marketing Know-how as Skills, Then the Flyer

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 2 · Topic 5 · about 30 minutes · slides 147–151**  
**Surface:** Chat → Codex ($skill-creator, $imagegen)  
**Features:** custom marketing skills · $imagegen · proofreading

## The story so far

With operations running, Grace turns to growth. Everything she knows about her brand and her customers lives in her head, and every flyer so far was made in a hurry. Capture the know-how as skills, then make the Term 4 flyer properly.

## Your goal

Grace's marketing know-how lives in her head. Capture it once as skills anyone can run, then use them to make the term flyer.

## You'll build

Four marketing skills (brand-voice, flyer-design, social-post, youtube-package) and an A5 flyer, 1:1 post and 9:16 story

## What is in this folder

- `assets/brand-brief.md`
- `assets/flyer-brief.md`
- `assets/term-highlights.md`
- `assets/marketing-skills-spec.md`
- `assets/marketing-skills-reference/`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Pick a tagline in Chat** — Ask for 10 taglines from brand-brief.md; choose one.
2. **Open the studio** — Create a local project cookbake-marketing, add its folder, and copy in the assets.
3. **Capture the voice** — Paste Prompt A — the brand-voice skill.
4. **Capture the know-how** — Paste Prompt B — flyer-design, social-post and youtube-package.
5. **Make the flyer** — Paste Prompt C. $flyer-design drives $imagegen.
6. **Proofread every word** — Check each fee, date and name against term-highlights.md. Regenerate with a named fix.

## The prompts

### PROMPTS A and B — Codex

> PROMPT A
> $skill-creator Create a project skill called
> brand-voice from brand-brief.md and our chosen
> tagline: voice rules, banned words, colours with
> hex codes, photo style. Use when writing or
> designing anything for Cook & Bake.
>
> PROMPT B
> $skill-creator Create three project skills from
> marketing-skills-spec.md: flyer-design,
> social-post and youtube-package. Each follows
> brand-voice, takes facts only from courses.json or
> term-highlights.md, and says exactly what it hands
> back.

### PROMPT C — Codex

> $flyer-design Make Term 4 creative from
> flyer-brief.md with $imagegen:
> 1. An A5 portrait print flyer.
> 2. A 1:1 Instagram post.
> 3. A 9:16 story.
>
> Must carry: academy name, our tagline, three
> featured courses with fee and weeks, both campuses
> and "Sign up at" our site. Use only facts from
> term-highlights.md. Save to creative/term4/ with the
> prompt used next to each image, then list every
> word of text on each image for me to proofread.

## Check your work

- [ ] Four skills exist in .agents/skills/, each with a "Use when" description.
- [ ] The flyer, post and story images are in creative/term4/.
- [ ] Every fee, date and course name matches term-highlights.md.
- [ ] You regenerated at least once with a specific, named fix.
- [ ] Text is legible at arm's length and at thumbnail size.
- [ ] In a new chat, "write an Instagram post about macarons" triggers social-post on its own.

## If it goes wrong

- **$imagegen not found** — It is a built-in Codex skill. Start a new chat, and check your plan includes image generation.

## Stretch

- If a word keeps rendering wrong, ask $flyer-design for text-free artwork plus an HTML/CSS A5 layout with the exact text, exported to PDF.

> **Why it matters:** Image models can misspell. A flyer is not done until a person has proofread every word and number against the source.

## Next

Lab 17 — A Multi-Agent Content Studio. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
