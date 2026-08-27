import { NextRequest, NextResponse } from "next/server";

// Sends enquiry form submissions via Resend's REST API.
// Verified against Resend's own docs (resend.com/docs/api-reference/emails/send-email)
// and pricing page (resend.com/pricing) on 2026-08-24 — go re-check if this is being
// read much later, terms/limits can change.
//
// Required setup before this works (see SETUP.md in the repo root):
// 1. Create a free Resend account (free tier: 100 emails/day, 3,000/month as of the date above).
// 2. Verify the wildelectrical.au domain in Resend (adds DNS records).
// 3. Set RESEND_API_KEY and ENQUIRY_TO_EMAIL as environment variables in Vercel.

const RESEND_API_URL = "https://api.resend.com/emails";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL || "rhys@wildelectrical.au";
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL || "enquiries@wildelectrical.au";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Enquiry form is not configured yet (missing RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  let body: {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    suburb?: unknown;
    message?: unknown;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const suburb = String(body.suburb || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email and phone are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const html = `
    <h2>New enquiry from wildelectrical.au</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    ${suburb ? `<p><strong>Suburb:</strong> ${escapeHtml(suburb)}</p>` : ""}
    ${message ? `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
  `;

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Wild Electrical Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Resend API error:", res.status, errBody);
      return NextResponse.json(
        { error: "Failed to send enquiry. Please try calling or emailing us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry send failed:", err);
    return NextResponse.json(
      { error: "Failed to send enquiry. Please try calling or emailing us directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
