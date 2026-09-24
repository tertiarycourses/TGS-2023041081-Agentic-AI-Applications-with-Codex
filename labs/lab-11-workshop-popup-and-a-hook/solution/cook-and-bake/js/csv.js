// Read the course catalogue from data/courses.csv — the same file Grace
// edits in Excel. One row per course; the list columns (learn, intakes)
// hold their items separated by "; ". Shared by the site and build-kb.mjs.
const NUMBERS = ['weeks', 'fee', 'class_size'];
const LISTS = ['learn', 'intakes'];

export function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += ch;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows.filter(r => r.some(c => c.trim() !== ''));
}

export function parseCourses(text) {
  const [head, ...body] = parseCsv(text.replace(/^﻿/, ''));
  return body.map(cells => {
    const c = Object.fromEntries(head.map((h, i) => [h.trim(), (cells[i] ?? '').trim()]));
    for (const k of NUMBERS) c[k] = Number(c[k]);
    for (const k of LISTS) c[k] = c[k] ? c[k].split(';').map(s => s.trim()).filter(Boolean) : [];
    c.url = `#course-${c.code}`;
    return c;
  });
}
