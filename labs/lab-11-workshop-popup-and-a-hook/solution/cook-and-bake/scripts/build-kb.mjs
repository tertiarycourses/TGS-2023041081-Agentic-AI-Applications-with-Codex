// Build data/academy.db — the knowledge base the chatbot searches.
//
//   kb/brochures/*.md, kb/faq.md, kb/policies.md, kb/campuses.md
//     → split into one chunk per "## " section
//     → FTS5 table `chunks` (porter stemming, so "refunds" finds "refund")
//   data/courses.csv (the Excel-friendly catalogue)
//     → table `courses` for fee / duration questions keyword search can't answer
//
// Runs in Node with the official SQLite WASM build — the same engine the
// browser uses, so the file it writes opens identically on GitHub Pages.
import sqlite3InitModule from '@sqlite.org/sqlite-wasm';
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { parseCourses } from '../js/csv.js';
import { join } from 'node:path';

const KB = 'kb';
const OUT = 'data/academy.db';

function chunk(docId, markdown, url) {
  const title = (markdown.match(/^# (.+)$/m) || [, docId])[1].trim();
  return markdown.split(/\n## /).slice(1).map(block => {
    const [section, ...rest] = block.split('\n');
    return { doc_id: docId, title, section: section.trim(),
             body: rest.join('\n').trim(), url };
  }).filter(c => c.body);
}

const docs = [];
for (const f of readdirSync(join(KB, 'brochures')).filter(f => f.endsWith('.md')).sort()) {
  const code = f.replace('.md', '');
  docs.push(...chunk(code, readFileSync(join(KB, 'brochures', f), 'utf8'), `#course-${code}`));
}
for (const [id, url] of [['faq', '#faq'], ['policies', '#faq'], ['campuses', '#campuses']]) {
  docs.push(...chunk(id, readFileSync(join(KB, `${id}.md`), 'utf8'), url));
}
const courses = parseCourses(readFileSync('data/courses.csv', 'utf8'));

const sqlite3 = await sqlite3InitModule({ print: () => {}, printErr: () => {} });
const db = new sqlite3.oo1.DB(':memory:');
db.exec(`
  CREATE VIRTUAL TABLE chunks USING fts5(
    doc_id UNINDEXED, title, section, body, url UNINDEXED,
    tokenize = 'porter unicode61');
  CREATE TABLE courses (
    code TEXT PRIMARY KEY, title TEXT, cat TEXT, level TEXT,
    weeks INTEGER, fee INTEGER, campus TEXT, schedule TEXT, next_intake TEXT);
  CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT);`);

db.transaction(() => {
  for (const c of docs) {
    db.exec({ sql: 'INSERT INTO chunks VALUES (?,?,?,?,?)',
              bind: [c.doc_id, c.title, c.section, c.body, c.url] });
  }
  for (const c of courses) {
    db.exec({ sql: 'INSERT INTO courses VALUES (?,?,?,?,?,?,?,?,?)',
              bind: [c.code, c.title, c.cat, c.level, c.weeks, c.fee, c.campus, c.when, c.intakes[0]] });
  }
  db.exec({ sql: 'INSERT INTO meta VALUES (?,?), (?,?)',
            bind: ['built', new Date().toISOString(), 'chunks', String(docs.length)] });
});
db.exec("INSERT INTO chunks(chunks) VALUES('optimize')");

mkdirSync('data', { recursive: true });
writeFileSync(OUT, sqlite3.capi.sqlite3_js_db_export(db));
console.log(`Built ${OUT}: ${docs.length} chunks from ${new Set(docs.map(d => d.doc_id)).size} documents, ${courses.length} courses.`);
db.close();
