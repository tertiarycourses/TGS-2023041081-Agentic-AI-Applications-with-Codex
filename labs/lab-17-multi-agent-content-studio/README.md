# Lab 17 — A Multi-Agent Content Studio

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 2 · Topic 5 · about 45 minutes · slides 156–160**  
**Surface:** Codex (custom agents + custom skills)  
**Features:** .codex/agents/*.toml · parallel subagents · the Lab 16 skills · reviewer agent

## The story so far

Grace wants to post every day and start a YouTube channel, with no marketing staff. Set up a studio of five specialist agents that use her new marketing skills to plan, write, design and script a week of content — with a reviewer that catches mistakes.

## Your goal

One agent writing everything produces one voice and no second opinion. Five specialists — with a reviewer at the end — produce a week of content fast and safely.

## You'll build

content/week-01/: 7 posts, images, a YouTube video package and a review log

## What is in this folder

- `assets/agents/`
- `assets/post-performance.csv`
- `assets/content-pillars.md`
- `assets/youtube-brief.md`
- `assets/courses.json`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Load the agents** — In the cookbake-marketing project from Lab 16, copy agents/ to .codex/agents/.
2. **Read the agents** — Open each .toml: what it may do, which model, which sandbox.
3. **Run the studio** — Paste the prompt. Open each subagent thread from the activity feed as it works.
4. **Read the review** — The brand-reviewer must flag at least one problem. Confirm it was fixed.
5. **Make the video** — Film the shot list on a phone in the kitchen, or cut the $imagegen storyboard frames with a voice-over in any video editor.
6. **Stage, do not publish** — Posts stay as files for a human to schedule.

## The prompts

### agents/copywriter.toml — one of five

```
name = "copywriter"
description = "Writes captions, hooks and hashtags
  for Cook & Bake social posts."
model = "gpt-6-luna"
sandbox_mode = "workspace-write"
developer_instructions = """
Use $social-post and $brand-voice. Every
fee, date and course fact must come from
courses.json. Save each post to
content/week-01/posts/. Never publish.
"""
```

### PROMPT — Codex

> Run the content studio for next week.
>
> 1. strategist: read post-performance.csv and
>    content-pillars.md; plan 7 posts (platform,
>    format, topic, course) and one YouTube video.
> Then in parallel:
> 2. copywriter: all 7 posts with $social-post.
> 3. visual-director: one image per post with
>    $imagegen, following $brand-voice.
> 4. video-producer: the YouTube package with
>    $youtube-package from youtube-brief.md,
>    including storyboard frames made with $imagegen
>    and a 30-second Short.
> Then:
> 5. brand-reviewer: check everything against
>    courses.json and content-pillars.md; log issues
>    and send fixes back.
> Save to content/week-01/. Publish nothing.

## Check your work

- [ ] Five agent threads ran; you opened at least two.
- [ ] The strategist's plan cites what performed best.
- [ ] content/week-01/ holds 7 posts, 7 images and the video package.
- [ ] The reviewer logged at least one issue, and it was fixed.
- [ ] Every fee and date matches courses.json.
- [ ] The YouTube package has title, chapters, tags and a thumbnail.
- [ ] Nothing was published.

## If it goes wrong

- **Agents not found** — They load at session start. Start a new chat after copying .codex/agents/.

## Stretch

- Add a sixth agent: a community-manager that drafts replies to the 5 most likely comments.

> **Why it matters:** Sora's app shut down in April 2026 and its API on 24 Sep 2026. Build video from a script and shot list — film it, or cut $imagegen frames with a voice-over.

## Next

Lab 18 — Lead Magnet, Newsletter and the Open-House Campaign. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
