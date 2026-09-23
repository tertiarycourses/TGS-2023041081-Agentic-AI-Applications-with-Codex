# Prompts — Lab 17: A Multi-Agent Content Studio

Surface: Codex (custom agents + custom skills). Paste each prompt as written; change only what the lab tells you to.

## agents/copywriter.toml — one of five

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

## PROMPT — Codex

```
Run the content studio for next week.

1. strategist: read post-performance.csv and
   content-pillars.md; plan 7 posts (platform,
   format, topic, course) and one YouTube video.
Then in parallel:
2. copywriter: all 7 posts with $social-post.
3. visual-director: one image per post with
   $imagegen, following $brand-voice.
4. video-producer: the YouTube package with
   $youtube-package from youtube-brief.md,
   including storyboard frames made with $imagegen
   and a 30-second Short.
Then:
5. brand-reviewer: check everything against
   courses.json and content-pillars.md; log issues
   and send fixes back.
Save to content/week-01/. Publish nothing.
```
