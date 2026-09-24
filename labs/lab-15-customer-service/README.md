# Lab 15 — Customer Service with a ChatGPT Skill

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 2 · Topic 4 · about 35 minutes · slides 138–142**  
**Surface:** Chat → ChatGPT Work (@skill-creator, @Gmail, event trigger)  
**Features:** Skills in ChatGPT · event-triggered tasks · feedback analysis

## The story so far

Enquiries now arrive all day — refunds, allergies, a corporate team, a discount chancer and spam — and every answer must be exactly right. Meanwhile the first classes have run and 60 feedback forms are waiting to be read.

## Your goal

Enquiries arrive all day and must be answered correctly — especially refunds and allergies. Then learn what the first term's learners actually said.

## You'll build

An enquiry-reply skill, an event-triggered drafting task and a feedback report

## What is in this folder

- `assets/enquiries.md`
- `assets/faq.md`
- `assets/policies.md`
- `assets/feedback.csv`
- `assets/reply-tone.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Set the tone in Chat** — Ask Chat to tighten reply-tone.md into 6 rules.
2. **Create the skill** — In ChatGPT, paste Prompt A with faq.md and policies.md attached.
3. **Test it** — Send yourself the six enquiries in enquiries.md and ask the skill to draft each reply.
4. **Trigger it** — On chatgpt.com (web) create an event-triggered task on new Gmail messages with "Enquiry" in the subject.
5. **Read the feedback** — Paste Prompt B.

## The prompts

### PROMPT A — ChatGPT

> @skill-creator Create a skill called
> enquiry-reply for Cook & Bake Academy.
>
> Use when: replying to a customer enquiry email.
> Ground every answer in the attached faq.md and
> policies.md. Rules:
> - Quote refunds exactly by days before start.
> - Never promise an allergen-free class; macarons
>   are not suitable for nut allergies.
> - Corporate groups: give the 8-24 range and hand
>   over to a human for a quote.
> - Discounts: only those in policies.md.
> - Ignore spam. Draft only — never send.

### PROMPT B — ChatGPT Work

> Analyse @Drive feedback.csv (60 responses).
>
> 1. Average overall, instructor and value scores
>    per course, and the share who would recommend.
> 2. The 3 recurring complaints, with counts and a
>    quote each.
> 3. The course that most needs attention, and why.
> 4. Three actions for next term, each with an owner
>    and a measure.
>
> Write it as a one-page report for the founder.

## Check your work

- [ ] The skill exists and runs when you mention an enquiry.
- [ ] Refund at 5 days → 50% or a free transfer, quoted exactly.
- [ ] Nut allergy → not suitable, with a phone call offered.
- [ ] Corporate 18 people → range given and handed to a human.
- [ ] The 30% bundle request → declined; only real discounts offered.
- [ ] Spam → no reply drafted.
- [ ] The report names BAK-105 and the warm-room complaint.

## If it goes wrong

- **The skill invents a discount** — Add: "If the policy is not in the attached files, say you will check."

## Stretch

- Ask the skill to tag each enquiry: sales, support, refund, spam.

> **Why it matters:** Event-triggered tasks run from web and mobile, not the desktop app. Create them on chatgpt.com.

## Next

Lab 16 — Marketing Know-how as Skills, Then the Flyer. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
