// Workshop invite — a timed popup with a three-field sign-up form.
//
// After a visitor has spent 10 seconds on the page, invite them to the free
// 1-hour Pastries Workshop & Treat. Shown once per visitor; closes with X,
// "Maybe later" or Esc. Sign-ups are kept in localStorage (like course
// sign-ups) with a mailto copy for the academy — no backend needed.
export const STORE = 'cb_workshop';
const SEEN = 'cb_workshop_seen';
const DELAY_MS = 10_000;

const dialog = document.querySelector('#workshop');
const form = document.querySelector('#workshop-form');
const done = document.querySelector('#workshop-done');
const error = document.querySelector('#workshop-error');

const SG_MOBILE = /^(\+65\s?)?[89]\d{3}\s?\d{4}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// "Next Wednesday" from today: never today, always the coming one.
export function nextWednesday(from = new Date()) {
  const d = new Date(from);
  d.setDate(d.getDate() + (((3 - d.getDay() + 7) % 7) || 7));
  return d;
}

const when = nextWednesday();
document.querySelector('#workshop-when').textContent =
  `${when.toLocaleDateString('en-SG', { weekday: 'long', day: 'numeric', month: 'long' })}, 1:00–2:00 PM`;

function seen() {
  try { return localStorage.getItem(SEEN) === '1'; } catch { return false; }
}

function open() {
  // Never interrupt a visitor who is already in another dialog.
  if (seen() || document.querySelector('dialog[open]')) return;
  try { localStorage.setItem(SEEN, '1'); } catch { /* private mode */ }
  dialog.showModal();
  form.name.focus();
}

setTimeout(open, DELAY_MS);

form.addEventListener('submit', e => {
  e.preventDefault();
  const problems = [];
  const mark = (el, bad, msg) => {
    el.setAttribute('aria-invalid', String(bad));
    if (bad) problems.push(msg);
  };
  mark(form.name, form.name.value.trim().length < 2, 'Enter your name.');
  mark(form.tel, !SG_MOBILE.test(form.tel.value.trim()), 'Enter a Singapore mobile number, e.g. 9123 4567.');
  mark(form.email, !EMAIL.test(form.email.value.trim()), 'Enter a valid email address.');
  error.textContent = problems[0] || '';
  if (problems.length) return;

  const record = {
    event: 'Pastries Workshop & Treat',
    date: `${when.getFullYear()}-${String(when.getMonth() + 1).padStart(2, '0')}-${String(when.getDate()).padStart(2, '0')}`,
    name: form.name.value.trim(),
    tel: form.tel.value.trim(),
    email: form.email.value.trim(),
    submitted: new Date().toISOString(),
  };
  try {
    const all = JSON.parse(localStorage.getItem(STORE) || '[]');
    all.push(record);
    localStorage.setItem(STORE, JSON.stringify(all));
  } catch { /* storage blocked: the mailto copy still works */ }

  const lines = Object.entries(record).map(([k, v]) => `${k}: ${v}`).join('\n');
  document.querySelector('#workshop-mailto').href =
    `mailto:enrol@cookbakeacademy.sg?subject=${encodeURIComponent(`Workshop sign-up — ${record.name}`)}&body=${encodeURIComponent(lines)}`;
  form.hidden = true;
  done.hidden = false;
});

dialog.addEventListener('click', e => {
  if (e.target.matches('[data-close]')) dialog.close();
});
