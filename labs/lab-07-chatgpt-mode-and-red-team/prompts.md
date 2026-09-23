# Prompts — Lab 07: Add ChatGPT Mode, Then Try to Break It

Surface: Codex. Paste each prompt as written; change only what the lab tells you to.

## PROMPT — Codex

```
Add a ChatGPT mode to the course assistant.

- A settings panel: API key (password field) and
  model (default gpt-6-luna). Store the key in
  sessionStorage ONLY. Never in code, localStorage
  or the repo.
- On a question: retrieve the top 3 chunks, then
  POST https://api.openai.com/v1/responses with
  instructions from grounded-prompt.md and the
  chunks as numbered sources.
- Show the answer with its [n] citations.
- On any API error, fall back to search mode.
- Retrieval with no hits → refuse without calling
  the API.
```
