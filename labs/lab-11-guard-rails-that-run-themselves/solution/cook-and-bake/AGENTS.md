# AGENTS.md — Cook & Bake Academy site

## What this is
Static marketing and sign-up site for Cook & Bake Academy Singapore, with a
course assistant that answers from our own documents. Plain HTML, CSS and
JavaScript. It must run on GitHub Pages or Sites with **no backend**.

## Commands
  npm install          Install the SQLite WASM build (dev only)
  npm run vendor       Copy SQLite WASM into vendor/ for the browser
  npm run build:kb     Rebuild data/academy.db from kb/ and data/courses.json
  npm run eval         Score the assistant on eval/golden-questions.csv
  npm run check        build:kb + eval — must pass 30/30 before any commit
  npm run serve        Serve locally on http://localhost:8080

## Layout
  index.html, admin.html      Pages
  css/styles.css              All styles
  js/app.js                   Catalogue, filters, FAQ
  js/signup.js                Per-course sign-up form
  js/rag.js                   Retrieval — shared by the browser and eval
  js/chat.js                  Course assistant UI and ChatGPT mode
  kb/                         Source documents for the assistant (see kb/AGENTS.md)
  data/courses.json           The course catalogue — the only place fees live

## Conventions
- No framework, no bundler, no build step for the page itself.
- Fees, dates and policies come from data/ and kb/ only. Never hard-code
  them in HTML or JavaScript.
- Render user and model text with textContent, never innerHTML.
- Every form field has a visible label; every image has alt text or is
  marked decorative.

## Boundaries
- Never put an API key in the code, the repo or a commit. ChatGPT mode takes
  the visitor's own key from sessionStorage.
- Never commit .env files, sign-up exports or real learner data.
- Ask before adding a dependency.
- Do not change eval/golden-questions.csv to make a test pass — fix the
  retrieval or the documents instead.
