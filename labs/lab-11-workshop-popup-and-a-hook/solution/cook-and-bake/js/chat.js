// Course assistant: SQLite FTS5 retrieval in the browser, no backend.
//   Search mode  — quotes the best-matching document section (no key needed)
//   ChatGPT mode — sends the retrieved sections to the OpenAI Responses API
//                  with the visitor's own key (kept in sessionStorage only)
import sqlite3InitModule from '../vendor/sqlite-wasm/index.mjs';
import { search, structuredAnswer, extractiveAnswer, groundedPrompt, REFUSAL } from './rag.js';

const $ = sel => document.querySelector(sel);
const chat = $('#chat'), log = $('#chat-log'), form = $('#chat-form'), input = $('#chat-input');
const KEY = 'cb_openai_key', MODEL = 'cb_openai_model';
let dbPromise = null;

// Load academy.db once, into an in-memory SQLite database.
async function openDb() {
  const sqlite3 = await sqlite3InitModule({ print: () => {}, printErr: () => {} });
  const res = await fetch('data/academy.db');
  if (!res.ok) throw new Error(`academy.db not found (${res.status}) — run npm run build:kb`);
  const bytes = new Uint8Array(await res.arrayBuffer());
  const p = sqlite3.wasm.allocFromTypedArray(bytes);
  const db = new sqlite3.oo1.DB();
  const rc = sqlite3.capi.sqlite3_deserialize(db.pointer, 'main', p, bytes.length, bytes.length,
    sqlite3.capi.SQLITE_DESERIALIZE_FREEONCLOSE | sqlite3.capi.SQLITE_DESERIALIZE_RESIZEABLE);
  db.checkRc(rc);
  return db;
}
const getDb = () => (dbPromise ??= openDb());

function say(who, text, hits = []) {
  const div = document.createElement('div');
  div.className = `msg msg--${who}`;
  div.textContent = text;                       // text, never innerHTML
  if (hits.length) {
    const s = document.createElement('div');
    s.className = 'sources';
    s.append('Sources: ');
    hits.forEach((h, i) => {
      const a = document.createElement('a');
      a.href = h.url || '#faq';
      a.textContent = `[${i + 1}] ${h.title}`;
      if (i) s.append(' · ');
      s.append(a);
    });
    div.append(s);
  }
  log.append(div);
  log.scrollTop = log.scrollHeight;
  return div;
}

async function askModel(question, hits) {
  const key = sessionStorage.getItem(KEY);
  const model = sessionStorage.getItem(MODEL) || 'gpt-6-luna';
  const { instructions, input: prompt } = groundedPrompt(question, hits);
  const res = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({ model, instructions, input: prompt, max_output_tokens: 400 }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || `OpenAI error ${res.status}`);
  return data.output_text ?? (data.output || [])
    .flatMap(o => o.content || []).filter(c => c.type === 'output_text')
    .map(c => c.text).join('').trim();
}

async function answer(question) {
  const db = await getDb();
  const structured = structuredAnswer(db, question);
  if (structured) return say('bot', structured.text, structured.hits);

  const hits = search(db, question, 3);
  if (!hits.length) return say('bot', REFUSAL);

  if (sessionStorage.getItem(KEY)) {
    const pending = say('bot', 'Thinking…');
    try {
      const text = await askModel(question, hits);
      pending.remove();
      return say('bot', text, hits);
    } catch (err) {
      pending.remove();
      say('bot', `ChatGPT mode failed (${err.message}). Showing search results instead.`);
    }
  }
  say('bot', extractiveAnswer(hits), hits);
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const q = input.value.trim();
  if (!q) return;
  input.value = '';
  say('user', q);
  try { await answer(q); }
  catch (err) { say('bot', `Sorry — the assistant could not load (${err.message}).`); }
});

function setMode() {
  const gpt = !!sessionStorage.getItem(KEY);
  const badge = $('#chat-mode');
  badge.textContent = gpt ? 'ChatGPT mode' : 'Search mode';
  badge.classList.toggle('badge--gpt', gpt);
}

document.querySelectorAll('[data-open-chat]').forEach(b => b.addEventListener('click', () => {
  chat.hidden = false;
  if (!log.children.length) say('bot', 'Hi! Ask me about courses, fees, schedules, allergens, campuses or policies.');
  input.focus();
  getDb().catch(() => {});
}));
document.querySelector('[data-close-chat]').addEventListener('click', () => { chat.hidden = true; });
$('#chat-settings-btn').addEventListener('click', () => { $('#chat-settings').hidden = !$('#chat-settings').hidden; });
$('#chat-key-save').addEventListener('click', () => {
  const k = $('#chat-key').value.trim();
  if (!k) return;
  sessionStorage.setItem(KEY, k);
  sessionStorage.setItem(MODEL, $('#chat-model').value.trim() || 'gpt-6-luna');
  $('#chat-key').value = '';
  $('#chat-settings').hidden = true;
  setMode();
});
$('#chat-key-clear').addEventListener('click', () => {
  sessionStorage.removeItem(KEY);
  $('#chat-settings').hidden = true;
  setMode();
});
setMode();
