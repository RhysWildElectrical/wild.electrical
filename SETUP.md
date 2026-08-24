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

I didn't invent any business facts — these are placeholders that need your
actual details before launch (search the codebase for `PLACEHOLDER` to find
them all, mainly in `src/lib/site.ts`):

- Phone number
- Business address (or confirm there isn't a public one)
- ABN
- Electrical licence number
- Operating hours
- Service area description
- About page: real company story/history
- Projects page: real project photos + short descriptions (currently empty
  placeholder slots)
- Any testimonials — only add real, verifiable ones

## 6. Restart Hard font — licence reminder

The "WILD" heading font (Restart Hard, from Superior Type / superiortype.com)
in this build is a **trial version** — confirmed by the font files' own
internal metadata. You said the business owner will purchase a commercial
licence before this goes live. This is the reminder to actually do that —
check superiortype.com for current pricing and licence terms before the
site goes live on wildelectrical.au.

## 7. Before going live — quick checklist

- [ ] All `PLACEHOLDER` content replaced with real details
- [ ] Restart Hard commercial licence purchased
- [ ] Resend domain verified, `RESEND_API_KEY` set in Vercel, test enquiry
      sent and received at rhys@wildelectrical.au
- [ ] wildelectrical.au DNS pointed at Vercel and resolving
- [ ] Real project photos added
