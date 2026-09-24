// Course catalogue, filters, search, FAQ and the per-course sign-up form.
import { openSignup } from './signup.js';

const grid = document.querySelector('#course-grid');
const count = document.querySelector('#course-count');
const search = document.querySelector('#course-search');
let courses = [];
let filter = 'all';

const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const img = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=640&q=70`;

function render() {
  const q = search.value.trim().toLowerCase();
  const shown = courses.filter(c =>
    (filter === 'all' || c.cat === filter) &&
    (!q || `${c.code} ${c.title} ${c.summary} ${c.level} ${c.cat}`.toLowerCase().includes(q)));
  count.textContent = `${shown.length} of ${courses.length} courses`;
  grid.innerHTML = shown.map(c => `
    <article class="card" id="course-${esc(c.code)}">
      <div class="card__img" role="img" aria-label="${esc(c.title)}" style="background-image:url('${img(c.img)}')"></div>
      <div class="card__body">
        <span class="card__code">${esc(c.code)} · ${esc(c.level)} · ${esc(c.campus)}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.summary)}</p>
        <p><span class="tag tag--${esc(c.cat)}">${esc(c.cat)}</span> ${c.weeks} week${c.weeks > 1 ? 's' : ''} · ${esc(c.when)}</p>
        <div class="card__meta">
          <span class="card__price">S$${c.fee.toLocaleString('en-SG')}</span>
          <button class="btn btn--small" type="button" data-signup="${esc(c.code)}">Sign up</button>
        </div>
      </div>
    </article>`).join('');
}

document.querySelectorAll('.chip').forEach(chip => chip.addEventListener('click', () => {
  filter = chip.dataset.filter;
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.toggle('is-active', c === chip);
    c.setAttribute('aria-pressed', String(c === chip));
  });
  render();
}));
search.addEventListener('input', render);
grid.addEventListener('click', e => {
  const code = e.target.closest('[data-signup]')?.dataset.signup;
  if (code) openSignup(courses.find(c => c.code === code));
});

async function loadFaq() {
  const md = await (await fetch('kb/faq.md')).text();
  const items = md.split('\n## ').slice(1).map(block => {
    const [q, ...rest] = block.split('\n');
    return `<details><summary>${esc(q)}</summary><p>${esc(rest.join(' ').trim())}</p></details>`;
  });
  document.querySelector('#faq-list').innerHTML = items.join('');
}

courses = await (await fetch('data/courses.json')).json();
render();
loadFaq();
