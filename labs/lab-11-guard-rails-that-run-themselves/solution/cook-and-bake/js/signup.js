// Per-course sign-up form for a static site (no backend).
//
// Where does a sign-up go without a server?
//   1. It is validated in the browser and saved to localStorage, so the
//      staff page (admin.html) can export sign-ups as CSV on this device.
//   2. The learner can email a copy to the academy (mailto link).
//   3. If SIGNUP_ENDPOINT is set to a form service URL (Google Forms,
//      Formspree, a Sheets webhook), the form also posts there.
// A real business needs (3). Classroom labs use (1) and (2).
export const SIGNUP_ENDPOINT = '';
export const STORE = 'cb_signups';

const dialog = document.querySelector('#signup');
const form = document.querySelector('#signup-form');
const done = document.querySelector('#signup-done');
const error = document.querySelector('#signup-error');
const warn = document.querySelector('#allergy-warning');
let current = null;

const SG_MOBILE = /^(\+65\s?)?[689]\d{3}\s?\d{4}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function openSignup(course) {
  current = course;
  form.reset();
  form.hidden = false;
  done.hidden = true;
  error.textContent = '';
  warn.hidden = true;
  form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
  form.course_code.value = course.code;
  form.course_title.value = course.title;
  document.querySelector('#signup-title').textContent = `Sign up — ${course.title}`;
  document.querySelector('#signup-course').textContent =
    `${course.code} · S$${course.fee.toLocaleString('en-SG')} · ${course.weeks} week(s) · ${course.when} · ${course.campus}`;
  form.intake.innerHTML = course.intakes.map(d => `<option value="${d}">Starts ${d}</option>`).join('');
  dialog.showModal();
  form.full_name.focus();
}

// Warn (not block) when a stated allergy meets a course's allergens.
form.allergies.addEventListener('input', () => {
  const a = form.allergies.value.toLowerCase();
  const risky = current && /nut/.test(a) && /nut/i.test(current.allergens);
  warn.hidden = !risky;
  warn.textContent = risky
    ? `Heads up: ${current.title} uses ${current.allergens}. We will contact you before confirming your seat.`
    : '';
});

function validate() {
  const problems = [];
  const mark = (el, bad, msg) => {
    el.setAttribute('aria-invalid', String(bad));
    if (bad) problems.push(msg);
  };
  mark(form.full_name, form.full_name.value.trim().length < 2, 'Enter your full name.');
  mark(form.email, !EMAIL.test(form.email.value.trim()), 'Enter a valid email address.');
  mark(form.mobile, !SG_MOBILE.test(form.mobile.value.trim()), 'Enter a Singapore mobile number, e.g. +65 9123 4567.');
  mark(form.consent, !form.consent.checked, 'Tick the consent box to submit.');
  return problems;
}

function reference() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  return `CB-${ymd}-${Math.floor(1000 + Math.random() * 9000)}`;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const problems = validate();
  error.textContent = problems[0] || '';
  if (problems.length) return;

  const record = {
    ref: reference(),
    submitted: new Date().toISOString().slice(0, 10),
    course_code: form.course_code.value,
    course_title: form.course_title.value,
    intake: form.intake.value,
    full_name: form.full_name.value.trim(),
    email: form.email.value.trim(),
    mobile: form.mobile.value.trim(),
    experience: form.experience.value,
    allergies: form.allergies.value.trim(),
    marketing_opt_in: form.marketing_opt_in.checked ? 'yes' : 'no',
    paid: 'no',
  };
  const all = JSON.parse(localStorage.getItem(STORE) || '[]');
  all.push(record);
  localStorage.setItem(STORE, JSON.stringify(all));

  if (SIGNUP_ENDPOINT) {
    const body = new FormData();
    Object.entries(record).forEach(([k, v]) => body.append(k, v));
    fetch(SIGNUP_ENDPOINT, { method: 'POST', body, mode: 'no-cors' }).catch(() => {});
  }

  const lines = Object.entries(record).map(([k, v]) => `${k}: ${v}`).join('\n');
  document.querySelector('#signup-mailto').href =
    `mailto:enrol@cookbakeacademy.sg?subject=${encodeURIComponent(`Sign-up ${record.ref} — ${record.course_code}`)}&body=${encodeURIComponent(lines)}`;
  document.querySelector('#signup-ref').textContent = record.ref;
  form.hidden = true;
  done.hidden = false;
});

dialog.addEventListener('click', e => {
  if (e.target.matches('[data-close]')) dialog.close();
});
