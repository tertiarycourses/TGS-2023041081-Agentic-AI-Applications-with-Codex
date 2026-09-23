---
name: gitpush
description: Use when asked to push, publish, ship or deploy the Cook & Bake
  site. Runs the checks, scans for secrets, commits with a clear message and
  pushes, which triggers the GitHub Pages deployment.
---

# gitpush

## Steps
1. Run `npm run check`. Stop and report if it is not 30/30 (or the current
   total).
2. Scan the staged diff for API keys (sk-...), .env files and sign-up
   exports (signups-*.csv). Abort if any are present.
3. Stage only files related to this change.
4. Write a commit message that says WHY the change was made.
5. Push the current branch.
6. If the branch is main, report the Actions run URL and the Pages URL.

## Never
- Never force-push.
- Never commit learner data, keys or .env files.
- Never skip the check because "it is only a small change".
