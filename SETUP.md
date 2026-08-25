# Setup Checklist — Wild Electrical Website

This is everything needed to take this code from "built" to "live at
wildelectrical.au". I've checked the steps below against GitHub's, Vercel's
and Resend's own current documentation (checked 2026-08-24) rather than
guessing — but UI screens do change, so if a button/label doesn't match
exactly, look for the nearest equivalent rather than assuming something's
broken.

I don't have access to your company GitHub or Vercel accounts from this
session, so the GitHub push and the Vercel project creation need to happen
from your side. Everything below is real, verified steps — nothing invented.

---

## 1. Push the code to GitHub

1. On github.com, under your company account, create a **new empty
   repository** (no README/license/gitignore — this project already has
   those). Note the repo URL, e.g. `https://github.com/your-org/wild-electrical.git`.
2. On a machine with `git` installed, from this project's folder:

```bash
   git init
   git add .
   git commit -m "Initial site build"
   git branch -M main
   git remote add origin https://github.com/your-org/wild-electrical.git
   git push -u origin main
```

   (If a `.git` folder already exists because I initialized one, just run
   the `remote add` and `push` steps.)

## 2. Create the Vercel project

1. Log into Vercel under your **company** account (not any personal one).
2. Dashboard → **Add New… → Project** → **Import Git Repository** → pick the
   GitHub repo you just pushed. Vercel auto-detects Next.js — no build
   settings need changing.
3. Before the first deploy, add the environment variables below (Project
   Settings → Environment Variables, or the import screen's "Environment
   Variables" section).

### Environment variables to set in Vercel

| Key | Value |
|---|---|
| `RESEND_API_KEY` | From your Resend account — see step 3 below |
| `ENQUIRY_TO_EMAIL` | `rhys@wildelectrical.au` |
| `ENQUIRY_FROM_EMAIL` | e.g. `enquiries@wildelectrical.au` — must be on a domain verified in Resend (step 3) |

Without `RESEND_API_KEY` set, the enquiry form will show a "not configured
yet" error instead of silently failing — that's intentional.

4. Deploy. You'll get a `*.vercel.app` preview URL immediately.

## 3. Connect wildelectrical.au to Vercel

1. In the Vercel project → **Settings → Domains** → add `wildelectrical.au`
   (and `www.wildelectrical.au` if you want that to work too).
2. Vercel will show you DNS records to add. Add those at wherever
   `wildelectrical.au` is currently registered/managed.
3. Propagation is usually fast but can take a few hours.

## 4. Set up the enquiry form's email delivery (Resend)

The form is wired to Resend (resend.com) — a transactional email API. As of
2026-08-24, their **free tier is 100 emails/day, 3,000/month, verified
directly from resend.com/pricing** — go re-check that page yourself before
relying on it, terms can change.

1. Create a free Resend account at resend.com.
2. Dashboard → **Domains → Add Domain** → enter `wildelectrical.au`.
3. Resend will show you DNS records to add (TXT/SPF and MX for DKIM,
   per their docs). Add these wherever your domain's DNS is managed —
   same place as step 3 above.
4. Verification usually completes within ~15 minutes of adding the records,
   but can take up to 72 hours if DNS propagation is slow.
5. Once verified, go to **API Keys** and create a new key. Put that value
   into Vercel's `RESEND_API_KEY` environment variable (step 2 above), then
   redeploy (or just trigger a new deployment — env var changes need a
   redeploy to take effect).

## 5. Content that still needs real details

Filled in so far (as of 2026-08-25): phone, ABN, electrical licence number
(PGE228784), operating hours, service area, and a general "Adelaide Hills"
address (intentionally not exact, per your instruction). Still outstanding —
search the codebase for `PLACEHOLDER` to double-check:

- About page: real company story/history
- Projects page: real project photos + short descriptions (currently empty
  placeholder slots)
- Any testimonials — only add real, verifiable ones

## 6. Restart Hard font — licence status

The "WILD" heading font (Restart Hard, from Superior Type / superiortype.com)
is now licensed for the **Bold (700)** weight only — confirmed 2026-08-25 via
a Superior Type Webfont EULA (2026, v1.0) and the font file's own internal
metadata, which no longer carries any "Trial" marking.

Note: the site's headings previously used the **ExtraBold (800)** and
**Black (900)** cuts of Restart Hard, which looked heavier/punchier. Those
were trial files and have been removed from the project — headings now
render in the licensed Bold weight instead, which will look a bit lighter
than earlier previews. If you want that heavier look back, ExtraBold and/or
Black would need to be separately licensed from Superior Type and added
back into `src/fonts.ts`.

## 7. Before going live — quick checklist

- [ ] Remaining `PLACEHOLDER` content replaced with real details (About page
      story, project photos, testimonials — see section 5)
- [x] Restart Hard commercial licence purchased — Bold weight only, 2026-08-25
      (see section 6 — ExtraBold/Black still unlicensed if you want them back)
- [ ] Resend domain verified, `RESEND_API_KEY` set in Vercel, test enquiry
      sent and received at rhys@wildelectrical.au
- [ ] wildelectrical.au DNS pointed at Vercel and resolving
- [ ] Real project photos added

Commit directly to main.

5. Replace README.md — one small line change, same approach:

markdown
# Wild Electrical Website

Next.js site for Wild Electrical (wildelectrical.au). Covers residential,
commercial, industrial and solar electrical work, new homes, additions &
renovations, utility-scale solar farm maintenance, and instrumentation.

See **SETUP.md** for the full checklist to get this from code to a live,
working site (GitHub, Vercel, the enquiry form's email delivery, DNS, and
the content that still needs to be filled in).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Fonts: Barlow (SIL OFL, free) for body text, Restart Hard (Superior Type,
  **licensed for the Bold weight — see SETUP.md**) for headings
- Enquiry form: Next.js API route (`src/app/api/enquiry/route.ts`) sending via
  the Resend API — needs `RESEND_API_KEY` set as an environment
