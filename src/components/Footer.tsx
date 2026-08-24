"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import EnquiryForm from "./EnquiryForm";
import { navLinks, services, site } from "@/lib/site";

export default function Footer() {
  const pathname = usePathname();
  const showQuoteForm = pathname !== "/contact";

  return (
    <footer className="bg-wild-purple-dark text-white">
      {showQuoteForm && (
        <div className="border-b border-white/10 bg-wild-purple">
          <Container className="py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl sm:text-4xl">Get a Quote</h2>
              <p className="mt-3 text-white/80">
                Tell us what you need and we&apos;ll get back to you.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-white p-6 text-wild-ink sm:p-8">
              <EnquiryForm compact />
            </div>
          </Container>
        </div>
      )}

      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo/WILD_Electrical_Logo_White.svg"
            alt="Wild Electrical"
            width={160}
            height={67}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-white/70">{site.serviceArea}</p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wide text-wild-sky">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wide text-wild-sky">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-white/80 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wide text-wild-sky">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Wild Electrical. {site.abn !== "" ? site.abn : ""}
          </p>
          <p>{site.licence}</p>
        </Container>
      </div>
    </footer>
  );
}
