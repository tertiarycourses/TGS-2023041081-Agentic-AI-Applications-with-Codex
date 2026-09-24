# Prompts — Lab 05: Turn the Brochures into a SQLite Knowledge Base

Surface: Codex. Paste each prompt as written; change only what the lab tells you to.

## PROMPT — Codex

```
Write scripts/build-kb.mjs and an npm script
"build:kb" that builds data/academy.db.

- Use @sqlite.org/sqlite-wasm (the official build,
  which includes FTS5) — the same engine the
  browser will use.
- Split every Markdown file in kb/ into one chunk
  per "## " section. Keep the document title.
- FTS5 table chunks(doc_id UNINDEXED, title,
  section, body, url UNINDEXED) with
  tokenize='porter unicode61'.
- A normal table courses(...) from
  data/courses.csv for fee and date questions.
- Write the file with sqlite3_js_db_export.

Then test: "refunds", "nut allergy macaron",
"Bukit Timah parking" — show the top hit for each.
```
