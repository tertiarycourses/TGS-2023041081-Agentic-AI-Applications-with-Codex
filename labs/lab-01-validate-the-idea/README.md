# Lab 01 — Validate the Idea with Chat and Work

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 1 · Topic 1 · about 30 minutes · slides 29–35**  
**Surface:** Chat → ChatGPT Work → @Sites  
**Features:** Chat brainstorm · Work research with plan review · @Sites HTML report

## The story so far

Late August 2026. Grace has signed two kitchen leases and drafted 20 courses. Before she spends S$8,000 on a website, her business partner wants proof: who will pay, how much, and which courses should launch first.

## Your goal

Before building anything, find out whether Singapore will pay for these 20 courses — and at what price.

## You'll build

A private HTML market report on Sites, and market-brief.md for Codex

## What is in this folder

- `assets/business-idea.md`
- `assets/courses.json`
- `assets/report-outline.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Pressure-test in Chat** — Paste Prompt A. Ten minutes: who pays, why now, what could sink it.
2. **Research in Work** — Switch to Work and paste Prompt B. Read the plan and change at least one step before approving.
3. **Audit the sources** — Every number needs a cited source and date. Mark anything uncited as UNKNOWN.
4. **Publish with @Sites** — Prompt C turns the research into a one-page HTML report. Set access to Only those invited.
5. **Write the brief** — Prompt D produces market-brief.md — save it into your cook-and-bake folder for Lab 2.

## The prompts

### PROMPT A — Chat

> I'm launching Cook & Bake Academy Singapore:
> 20 hands-on cooking and baking courses (S$160 to
> S$1,580), two campuses, classes of 12.
>
> Pressure-test the idea. In under 250 words:
> - Who is most likely to pay, and why now?
> - The three biggest risks to the business.
> - The five questions my market research must
>   answer before I spend money on a website.

### PROMPT B — ChatGPT Work

> Plan first, then research.
>
> Research the market for hands-on cooking and
> baking classes in Singapore for Cook & Bake
> Academy. Our proposed catalogue is attached
> (courses.json).
>
> Answer:
> 1. Who the customers are — 3 personas.
> 2. At least 5 named competitors, with course types
>    and published price ranges.
> 3. Where our 20 fees sit against those ranges.
> 4. Demand signals and seasonality.
> 5. The 5 courses we should launch first, and why.
>
> Cite every figure with its source and date. If a
> figure cannot be sourced, write UNKNOWN.
> Show me the plan before you start.

### PROMPT C — @Sites

> @Sites Turn this research into a one-page HTML
> report titled "Cook & Bake — Market Validation".
>
> Sections: summary, personas, competitor table,
> our fees against the market, demand and
> seasonality, the 5 launch courses, risks, and
> sources with links.
>
> Keep it private: Only those invited.
> Give me the Site URL when it is published.

### PROMPT D — the brief for Codex

> Summarise the research as market-brief.md for
> our website developer. Under 300 words:
> positioning line, 3 personas, the 5 launch
> courses, pricing notes, and 3 things the website
> must do to convert visitors. Facts only from the
> report.

## Check your work

- [ ] Chat returned five research questions you used in Prompt B.
- [ ] You changed at least one step of Work's plan before approving.
- [ ] The competitor table names 5+ real schools, each with a source.
- [ ] No uncited number appears — gaps say UNKNOWN.
- [ ] The HTML report is live on Sites and set to Only those invited.
- [ ] market-brief.md is saved in your cook-and-bake folder.

## If it goes wrong

- **Sites option missing** — Sites is in beta for workspaces, Plus and Pro. Ask Work for an HTML file and open it locally instead.

## Stretch

- Ask Work to add a "what would change our mind" section.

> **Why it matters:** Research is only as good as its citations. A confident figure with no source is a guess.

## Next

Lab 2 — Plan and Build the Site with /plan. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
