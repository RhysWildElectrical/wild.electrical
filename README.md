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
  **trial license — see SETUP.md**) for headings
- Enquiry form: Next.js API route (`src/app/api/enquiry/route.ts`) sending via
  the Resend API — needs `RESEND_API_KEY` set as an environment variable
