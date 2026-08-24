"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-wild-purple text-white shadow-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo/WILD_Electrical_Logo_White.svg"
            alt="Wild Electrical"
            width={160}
            height={67}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-white/90 transition hover:text-wild-sky"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-white/90 hover:text-wild-sky"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-wild-pink px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </div>
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-wild-purple md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 text-base font-semibold uppercase tracking-wide text-white/90 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="rounded px-2 py-3 text-base font-semibold text-white/90 hover:bg-white/10"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-wild-pink px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
            >
              Get a Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
