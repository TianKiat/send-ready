# Send Ready — Training Log (v5)

A simple, offline PR logger built around **double progression**, with
draggable folders to organize your lifts into splits, plus a Rehab reference
library with pain-gated progressive loading for hangboarding prep. No
timers — iOS suspends background timers when the screen sleeps, so you time
your own sets and the app just records them and does the progression math.
All data stays on your phone; nothing is sent anywhere.

## What's new in v5

- **Rehab tab** — the Library tab is now labeled **Rehab** with a 🩹 icon.
  Same content underneath (warm-ups, wrist/TFCC/rotator cuff work, and the
  three pain-gated progressive isometrics).
- **Groups (folders) for lifts** — organize your lifts into named groups
  (e.g. "Push Day", "Pull Day", "Legs") to mirror your actual splits:
  - **Drag ⠿ to reorder** lifts and groups, exactly like before.
  - **Drop a lift directly onto another lift** to instantly create a new
    group containing both — same gesture as making a folder on an iPhone
    home screen. A quick rename sheet pops up right after.
  - **Drop a lift onto an existing group** to add it in.
  - Tap a group's header to **expand or collapse** it with a smooth
    animation — no full-page flash, just the folder opening in place.
  - **Peek without opening**: a collapsed group shows a mini 2×2 preview of
    its lifts' initials (like an iOS folder icon), plus exercise count and a
    rough estimated time.
  - Inside a group: reorder members by dragging, add an existing ungrouped
    lift or create a brand-new one directly inside, or tap **⇅ Move** on any
    member to relocate it to a different group or back to the top level.
  - Rename or delete a group from the ✎ on its header — deleting a group
    doesn't delete its lifts, they just move back to the top level.

A note on the drag gestures: dragging *out* of an open folder back to the top
level isn't a drag gesture (reliable cross-container touch dragging on iOS
Safari is fragile) — use the **⇅ Move** button on that lift instead, which
opens a simple destination picker. Everything else above is genuine
touch-drag.

Upgrading from an earlier version: everything migrates in place automatically
— existing lifts start out ungrouped at the top level, in their existing
order. Nothing is lost.

## What it does

**Lifts (PR logger)**
- Each lift has a rep range (e.g. 8–12), a current weight, a weight mode
  (**Total load** or **Per side** for iso-lateral machines), and a
  **train-to-failure** toggle (RPE auto-logs as 10 when on).
- Log a session: the weight used, and the reps you hit **per set**.
- Latest session front and center — weight, sets, reps per set, effort — plus
  where you sit in the rep range.
- When **every** working set reaches the top of the range, the lift flags
  "Ready to add weight" and a one-tap **Move up** bumps the weight,
  resetting you to the bottom of the range.
- Trend chart (Est. 1RM or Volume) and full session history per lift.
- Organize lifts into drag-and-drop **groups** to mirror your training split.

**Rehab**
- Reference cards for pulse/general warm-up, wrist & forearm prep, rotator
  cuff activation, a fingerboard warm-up progression, and rehab for
  wrist/TFCC and fingers/pulleys — each loggable, three of them progressive.

**Also**: light / dark / auto themes, liquid-glass UI, JSON export/import
backup.

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

Already installed? Push the new files; the service worker cache is bumped to
v5, so it updates on the next launch or two (force-quit and reopen if
needed).

## The progression model, briefly

**Lifts:** pick a rep range and a weight, train every working set to failure
(or not — your call per lift). When all sets reach the top of the range, add
weight and drop back to the bottom of the range.

**Progressive rehab items:** same shape, but gated on pain instead of
failure — hit the target reps/hold on every set **and** stay at or under
3/10 pain, and you're clear to add load.

*Rehab content is general guidance, not medical advice — see a physio for an
unresolved or worsening injury.*
