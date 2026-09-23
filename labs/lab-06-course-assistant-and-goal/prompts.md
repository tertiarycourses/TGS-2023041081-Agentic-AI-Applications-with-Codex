# Prompts — Lab 06: Build the Course Assistant and Drive It with /goal

Surface: Codex. Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Codex

```
Build the course assistant, following
assistant-spec.md.

- js/rag.js: buildQuery (quote every term, join
  with OR — never pass raw text to MATCH),
  search(db, text, k) with bm25 weights favouring
  title, and extractiveAnswer(hits).
- js/chat.js: a chat panel that loads
  data/academy.db into SQLite WASM with
  sqlite3_deserialize, answers from the top hit,
  and lists its sources as links.
- No results → a polite refusal with our contact.
- Render all text with textContent.
Share rag.js with scripts/eval.mjs.
```

## PROMPT B — /goal

```
/goal npm run eval reports 30/30 passed.

Rules:
- Never edit eval/golden-questions.csv.
- Improve js/rag.js or the kb/ documents only.
- Questions about the cheapest, most expensive or
  under S$X need the courses table, not search.
- Off-topic questions must return no results.
- After each change, run npm run eval and report
  the score.
```
