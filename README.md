# Send Ready — Training Log (v3)

A simple, offline PR logger built around **double progression**, plus a
warm-up / rehab reference library for hangboarding. No timers — iOS suspends
background timers when the screen sleeps, so you time your own sets and the app
just records them and does the progression math. All data stays on your phone;
nothing is sent anywhere.

## What it does

**Lifts (PR logger)**
- Each lift has a rep range (e.g. 8–12), a current weight, and a weight mode:
  **Total load** or **Per side** (for iso-lateral machines).
- Log a session: the weight used, and the reps you hit **per set** (to failure),
  with an optional RPE per set.
- The app shows your latest session front and center — weight, sets, reps per
  set, effort — and where you sit in the rep range.
- When **every** working set reaches the top of the range, the lift flags
  "Ready to add weight" and a one-tap **Move up** bumps the weight by your
  increment. You then restart at the bottom of the range at the heavier load.
- Estimated-1RM trend chart and full session history per lift.

**Library**
- Reference cards for pulse/general warm-up, wrist & forearm prep, rotator cuff
  activation, a fingerboard warm-up progression, and rehab for wrist/TFCC and
  fingers/pulleys. Suggested doses are text — you time and count them yourself.

**Also**: light / dark / auto themes, liquid-glass UI, drag-to-reorder lifts,
JSON export/import backup.

Upgrading from an earlier version: your strength exercises, working weights,
rep ranges, and logged PR history migrate automatically into lifts on first
load. Only strength/PR-tracked exercises carry over (the old timed warm-up and
rehab modules are replaced by the static Library).

## Host on GitHub Pages

1. Create a **public** repo (e.g. `send-ready`).
2. Upload these files to the repo root, keeping the structure:
   ```
   index.html
   manifest.json
   service-worker.js
   icons/icon-192.png
   icons/icon-512.png
   ```
3. **Settings → Pages → Deploy from a branch → `main` / `/ (root)` → Save**.
4. Live at `https://<your-username>.github.io/send-ready/` after ~1 minute.

## Install on iPhone

Open the URL in **Safari** → **Share** → **Add to Home Screen** → **Add**.
Launches full-screen and works offline.

Already installed? Push the new files; the service worker cache is bumped to v3,
so it updates on the next launch or two (force-quit and reopen if needed).

## The progression model, briefly

Pick a rep range and a weight. Train every working set to failure. When all
sets reach the top of the range, add weight and drop back to the bottom of the
range. Repeat. A few notes baked into how the app nudges you:

- The "ready" trigger requires **all** sets at the top, not just the first —
  more conservative, avoids stalling a session or two later.
- Expect to land near/below the bottom of the range right after a jump. That's
  the reset, not a regression.
- On machines, microloading makes the reset gentler if a full pin jump is too
  big.

*Library content is general guidance, not medical advice — see a physio for an
unresolved or worsening injury.*
