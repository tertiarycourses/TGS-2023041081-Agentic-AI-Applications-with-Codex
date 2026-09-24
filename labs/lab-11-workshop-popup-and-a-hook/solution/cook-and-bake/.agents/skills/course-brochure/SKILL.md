---
name: course-brochure
description: Use when asked to create, refresh or export a course brochure,
  course one-pager or printable course sheet for Cook & Bake. Builds a
  print-ready A4 HTML brochure (and PDF if a converter is available) from
  data/courses.csv and kb/brochures, with no invented facts.
---

# course-brochure

## Inputs
- A course code (e.g. BAK-104), or "all".

## Steps
1. Read the course from data/courses.csv and its kb/brochures/<CODE>.md.
2. Write brochures/<CODE>.html: one A4 page, print CSS, the course photo
   from the card, title, level, campus, schedule, next two intakes, fee,
   four "what you will learn" points, allergens, what to bring and a
   "Sign up at <site>/#course-<CODE>" line.
3. Use only facts from those two files. If they disagree, stop and report
   the mismatch instead of choosing one.
4. If `soffice` or a headless browser is available, also export
   brochures/<CODE>.pdf.
5. Open the HTML in the browser and check it fits one A4 page.

## Report
A table: code, file(s) written, fits one page (yes/no), mismatches found.
