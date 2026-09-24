# Prompts — Lab 17: A Multi-Agent Content Studio

Surface: Codex (subagents + the Lab 16 skills). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — meet the team

```
We are running a content studio with five
agents. Here is the team — do not start yet.

1. Strategist: reads post-performance.csv and
   content-pillars.md, then plans 7 posts and
   one YouTube video for next week.
2. Copywriter: writes the 7 posts with
   $social-post, in our $brand-voice.
3. Visual director: makes one image per post
   with $imagegen, on brand.
4. Video producer: writes the YouTube package
   with $youtube-package and youtube-brief.md,
   plus a 30-second Short.
5. Brand reviewer: checks everything against
   courses.csv. It reports problems; it does
   not edit.

Rules for everyone: every fee and date comes
from courses.csv. Publish nothing.
Reply with one line per agent to confirm.
```

## PROMPT B — run the studio

```
Now run the studio, using subagents.
- First, the strategist makes the plan.
- Then the copywriter, visual director and
  video producer work in parallel, each as
  its own subagent.
- Last, the brand reviewer checks it all.
  Send each problem back to fix.
Save to content/week-01/ with a review log,
then give me a short summary.
```
