import Link from "next/link";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import { services, site } from "@/lib/site";

const categories = services.filter((s) =>
  ["residential", "commercial", "industrial", "solar", "air-conditioning"].includes(s.slug)
);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-wild-purple text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-wild-pink/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-wild-sky/20 blur-3xl"
        />
        <Container className="relative py-20 sm:py-28">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-wild-sky">
            Residential · Commercial · Industrial · Solar · Air Conditioning
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl">
            Professional electrical work done right, from first fix to fault-finding.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Wild Electrical covers homes, offices, industrial buildings and
            solar: new builds, renovations, and everything in the middle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-wild-pink px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110"
            >
              Get a Quote
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white"
            >
              {site.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* Service categories */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-wild-purple sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-3 text-wild-ink/75">
              From a single power point all the way to utility-scale solar
              farm maintenance, Wild Electrical handles it.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((s) => (
              <ServiceCard key={s.slug} service={s} href={`/services#${s.slug}`} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border-2 border-wild-purple px-7 py-3 text-sm font-bold uppercase tracking-wide text-wild-purple transition hover:bg-wild-purple hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      {/* New homes / renovations */}
      <section className="bg-wild-fog py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-wild-pink">
              Building or renovating?
            </p>
            <h2 className="mt-3 font-display text-3xl text-wild-purple sm:text-4xl">
              New Homes, Additions &amp; Renovations
            </h2>
            <p className="mt-4 text-wild-ink/75">
              From first and second fix on new home builds to extensions,
              renovations and additions, Wild Electrical works alongside
              builders and homeowners to get it done properly.
            </p>
            <Link
              href="/services#new-homes"
              className="mt-6 inline-block text-sm font-bold text-wild-pink"
            >
              See how we work on new builds →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <ServiceCard
              service={services.find((s) => s.slug === "new-homes")!}
              href="/services#new-homes"
            />
            <ServiceCard
              service={services.find((s) => s.slug === "additions-renovations")!}
              href="/services#additions-renovations"
            />
          </div>
        </Container>
      </section>

      {/* Utility-scale / instrumentation */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 grid gap-6 sm:grid-cols-2 lg:order-1">
            <ServiceCard
              service={services.find((s) => s.slug === "utility-scale-solar")!}
              href="/services#utility-scale-solar"
            />
            <ServiceCard
              service={services.find((s) => s.slug === "instrumentation")!}
              href="/services#instrumentation"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-wild-sky">
              Large-scale &amp; specialised
            </p>
            <h2 className="mt-3 font-display text-3xl text-wild-purple sm:text-4xl">
              Solar Farm Maintenance &amp; Instrumentation
            </h2>
            <p className="mt-4 text-wild-ink/75">
              Beyond standard electrical work, Wild Electrical provides
              maintenance and fault finding for utility-scale solar farms,
              plus installation and maintenance of process instrumentation
              including weather station sensors.
            </p>
            <Link
              href="/services#utility-scale-solar"
              className="mt-6 inline-block text-sm font-bold text-wild-pink"
            >
              Learn more →
            </Link>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-wild-purple py-16 text-white sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl">
              Why Wild Electrical
            </h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="font-display text-lg">Straight Answers</h3>
              <p className="mt-2 text-sm text-white/75">
                Clear quotes and honest advice on what a job actually needs.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg">Every Scale</h3>
              <p className="mt-2 text-sm text-white/75">
                From a single home to industrial sites and utility-scale
                solar.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg">Done Properly</h3>
              <p className="mt-2 text-sm text-white/75">
                Compliant, tested work, no shortcuts.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
