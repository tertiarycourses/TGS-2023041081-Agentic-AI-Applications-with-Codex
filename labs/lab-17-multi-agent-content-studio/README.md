# Lab 17 — A Multi-Agent Content Studio

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 2 · Topic 5 · about 45 minutes · slides 156–160**  
**Surface:** Codex (subagents + the Lab 16 skills)  
**Features:** agents described in the prompt · subagents in parallel · the Lab 16 skills · a reviewer

## The story so far

Grace wants to post every day and start a YouTube channel, with no marketing staff. Set up a studio of five specialist agents that use her new marketing skills to plan, write, design and script a week of content — with a reviewer that catches mistakes.

## Your goal

One agent writing everything produces one voice and no second opinion. Five specialists — with a reviewer at the end — produce a week of content fast and safely. You set them up in plain words, not config files.

## You'll build

content/week-01/: 7 posts, images, a YouTube video package and a review log

## What is in this folder

- `assets/studio-roles.md`
- `assets/post-performance.csv`
- `assets/content-pillars.md`
- `assets/youtube-brief.md`
- `assets/courses.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Open the project** — Use the cookbake-marketing project from Lab 16, with its four marketing skills installed. Copy the assets into it.
2. **Meet the team** — Paste Prompt A. It describes the five agents in plain words (longer notes: studio-roles.md). Codex confirms each role in one line.
3. **Run the studio** — Paste Prompt B. Codex starts the agents as subagents — watch them move from Active to Done in the Subagents panel.
4. **Look inside** — Click two finished agents to see what each one did and the summary it sent back.
5. **Read the review** — The brand reviewer must flag at least one problem. Confirm it was fixed.
6. **Make the video** — Film the shot list on a phone in the kitchen, or cut the $imagegen storyboard frames with a voice-over in any video editor.
7. **Stage, do not publish** — Posts stay as files for a person to schedule.

## The prompts

### PROMPT A — meet the team

> We are running a content studio with five
> agents. Here is the team — do not start yet.
>
> 1. Strategist: reads post-performance.csv and
>    content-pillars.md, then plans 7 posts and
>    one YouTube video for next week.
> 2. Copywriter: writes the 7 posts with
>    $social-post, in our $brand-voice.
> 3. Visual director: makes one image per post
>    with $imagegen, on brand.
> 4. Video producer: writes the YouTube package
>    with $youtube-package and youtube-brief.md,
>    plus a 30-second Short.
> 5. Brand reviewer: checks everything against
>    courses.csv. It reports problems; it does
>    not edit.
>
> Rules for everyone: every fee and date comes
> from courses.csv. Publish nothing.
> Reply with one line per agent to confirm.

### PROMPT B — run the studio

> Now run the studio, using subagents.
> - First, the strategist makes the plan.
> - Then the copywriter, visual director and
>   video producer work in parallel, each as
>   its own subagent.
> - Last, the brand reviewer checks it all.
>   Send each problem back to fix.
> Save to content/week-01/ with a review log,
> then give me a short summary.

## Check your work

- [ ] Codex confirmed all five roles before starting.
- [ ] Five subagents ran; you opened at least two in the Subagents panel.
- [ ] The strategist's plan cites what performed best.
- [ ] content/week-01/ holds 7 posts, 7 images and the video package.
- [ ] The reviewer logged at least one issue, and it was fixed.
- [ ] Every fee and date matches courses.csv, and nothing was published.

## If it goes wrong

- **Codex did it all in one agent** — Ask directly: "use subagents — one per role". Codex delegates when you ask.
- **Slow or costly** — Every subagent uses its own tokens. Split only work that is truly independent.

## Stretch

- Add a sixth agent in plain words: a community manager who drafts replies to the 5 most likely comments.
- Reuse the team every week: copy the five roles into AGENTS.md, then just say "run the content studio".

> **Why it matters:** Sora is discontinued. Film the shot list, or cut $imagegen frames with a voice-over.

## Next

Lab 18 — Lead Magnet, Newsletter and the Open-House Campaign. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
