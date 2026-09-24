# Lab 04 — Publish the Site: GitHub Pages and Sites

**Course:** Agentic AI Applications with Codex (TGS-2023041081)  
**Day 1 · Topic 1 · about 25 minutes · slides 52–56**  
**Surface:** Codex → GitHub Pages → @Sites  
**Features:** git · GitHub Pages (deploy from a branch) · @Sites access control

## The story so far

Investors want a link, not a laptop demo — and every improvement from now on should land on a live site, not sit in a folder. Publish it: publicly on GitHub Pages for customers, privately on Sites for investors.

## Your goal

A site on your laptop helps nobody. Put it online now, so every lab after this improves a live site.

## You'll build

A public GitHub Pages site for customers and a private Sites copy for investors

## What is in this folder

- `assets/publish-checklist.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Create the repo** — On github.com create cook-and-bake (or run gh repo create), then add it as the remote.
2. **Commit and push** — Paste Prompt A. Read the file list before Codex commits.
3. **Turn on Pages** — Repo Settings → Pages → Source: Deploy from a branch → main, / (root) → Save. After a minute the site URL appears at the top.
4. **Publish on Sites too** — Paste Prompt B for the private investor copy.
5. **Test on a phone** — Open both URLs on your phone and sign up for one course.

## The prompts

### PROMPT A — Codex

> Commit and push this project to GitHub.
>
> Before committing, list every file you will add and
> confirm there is no .env file, API key or sign-up
> export among them. Write a commit message that says
> why, not what. Push to main, then give me the
> Pages URL (https://<your-user>.github.io/cook-and-bake/).

### PROMPT B — @Sites

> @Sites Deploy this project as a static site.
> It is plain HTML, CSS and JavaScript with no
> backend. Check compatibility, publish it, set access
> to Only those invited, and give me the URL.

## Check your work

- [ ] Codex listed the files and none is a secret or an export.
- [ ] The Pages URL loads the site with all 20 courses.
- [ ] A sign-up works on the live Pages site from your phone.
- [ ] The Sites copy is live and set to Only those invited.
- [ ] You can say which URL is for customers and which for investors.

## If it goes wrong

- **Pages shows 404** — Source must be "Deploy from a branch" with main and / (root), and the first deploy takes a minute or two.
- **courses.csv not found online** — Paths on Pages are case-sensitive: data/courses.csv is not Data/Courses.csv.

## Stretch

- Add a custom domain under Settings → Pages (needs a DNS record).

> **Why it matters:** Publish early. From now on every lab ends with a push, and the live site is the one you test.

## Next

Lab 5 — Turn the Brochures into a SQLite Knowledge Base. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password or personal data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without your explicit approval.
