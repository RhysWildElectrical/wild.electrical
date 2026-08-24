"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot field — bots tend to fill every input, real users never see it.
    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      suburb: data.get("suburb"),
      service: data.get("service"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went wrong sending your enquiry.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-wild-sky bg-wild-sky/10 p-6 text-center">
        <p className="font-display text-xl text-wild-purple">Thanks — got it!</p>
        <p className="mt-2 text-sm text-wild-ink/80">
          Your enquiry has been sent. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-wild-ink outline-none focus:border-wild-pink focus:ring-2 focus:ring-wild-pink/30"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-wild-ink outline-none focus:border-wild-pink focus:ring-2 focus:ring-wild-pink/30"
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-wild-ink outline-none focus:border-wild-pink focus:ring-2 focus:ring-wild-pink/30"
          />
        </div>
        <div>
          <label htmlFor="suburb" className="mb-1 block text-sm font-semibold">
            Suburb
          </label>
          <input
            id="suburb"
            name="suburb"
            type="text"
            className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-wild-ink outline-none focus:border-wild-pink focus:ring-2 focus:ring-wild-pink/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-semibold">
          What do you need help with?
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-wild-ink outline-none focus:border-wild-pink focus:ring-2 focus:ring-wild-pink/30"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold">
          Tell us a bit about the job
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-wild-ink outline-none focus:border-wild-pink focus:ring-2 focus:ring-wild-pink/30"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-semibold text-wild-pink">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-wild-pink px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
