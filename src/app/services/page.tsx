import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Wild Electrical",
  description:
    "Residential, commercial, industrial and solar electrical services, plus new homes, renovations, utility-scale solar farm maintenance and instrumentation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-wild-purple py-16 text-white sm:py-20">
        <Container>
          <h1 className="font-display text-4xl sm:text-5xl">Services</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Electrical work across every scale: residential, commercial,
            industrial, solar and air conditioning, including utility-scale
            maintenance and instrumentation.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-wild-purple/30 px-4 py-2 text-sm font-semibold text-wild-purple transition hover:bg-wild-purple hover:text-white"
              >
                {s.title}
              </a>
            ))}
          </div>

          <div className="mt-12 space-y-16">
            {services.map((s) => (
              <div
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24 border-t border-black/10 pt-10 first:border-t-0 first:pt-0"
              >
                <div className="grid gap-6 lg:grid-cols-3">
                  <div>
                    <h2 className="font-display text-2xl text-wild-purple sm:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-wild-ink/75">{s.summary}</p>
                  </div>
                  <ul className="lg:col-span-2 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 rounded-xl bg-wild-fog p-4 text-sm"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-wild-sky" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-wild-fog p-8 text-center">
            <h2 className="font-display text-2xl text-wild-purple">
              How can we help?
            </h2>
            <p className="mt-2 text-wild-ink/75">
              Send us the details and we&apos;ll point you in the right direction.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-full bg-wild-pink px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
