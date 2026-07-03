# Send Ready — Boulder Training PWA

A fully offline, installable training timer for bouldering: Warm-Up → Fingerboard →
Rehab (wrist/TFCC/rotator cuff) → Strength Training (PR-tracked) → Cooldown.
Every exercise is editable, swappable, or fully custom. All data stays on your phone
(localStorage) — nothing is sent anywhere.

## 1. Host it on GitHub Pages (free, ~5 minutes)

1. Create a new **public** repo on GitHub (e.g. `send-ready`).
2. Upload all the files in this folder to the repo root, keeping the structure:
   ```
   index.html
   manifest.json
   service-worker.js
   icons/icon-192.png
   icons/icon-512.png
   ```
   Easiest way: on the repo page, click **Add file → Upload files**, drag in
   everything (including the `icons` folder), then commit.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Branch: `main`, folder: `/ (root)`. Click **Save**.
6. Wait ~1 minute, then your app is live at:
   `https://<your-username>.github.io/send-ready/`

## 2. Install on iPhone

1. Open the URL above in **Safari** on your iPhone (must be Safari, not Chrome).
2. Tap the **Share** icon (square with an arrow) in the toolbar.
3. Tap **Add to Home Screen**, then **Add**.
4. Launch it from the home screen icon — it opens full-screen with no browser
   chrome, and works offline after the first load.

## 3. Using the app

- **Home** shows the 5 modules in session order. Tap **Start** to run the timer,
  or **Edit** to add/remove/reorder/swap exercises.
- Tap the **✎** on any exercise to change its sets, reps, rest, weight, or type,
  or tap **+ Add Exercise** to pick from the built-in library or create a fully
  custom one.
- In **Strength Training**, mark an exercise as a "Weighted Strength (PR)" type
  to get the automatic 3-set warm-up ramp (default 50/70/80% × 6/4/2 reps,
  editable in Settings) before your working sets.
- Working sets prompt you to log actual weight/reps/RPE — this feeds the
  **PR tracker** tab, which shows an estimated 1RM trend chart per lift and a
  "ready to progress" nudge once your last 3 sessions all hit top-of-range reps
  at RPE ≤ 8.
- **Settings** lets you switch kg/lb, edit the default warm-up ramp and working
  set scheme, and export/import a JSON backup of everything.

## Notes

- The Rehab module includes a general-information disclaimer — it's not a
  substitute for a physiotherapist, especially for an active TFCC injury.
- If you ever want a clean slate, use **Settings → Reset Everything** (or just
  delete and reinstall).
