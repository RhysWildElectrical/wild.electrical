import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Wild Electrical",
  description: "About Wild Electrical.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-wild-purple py-16 text-white sm:py-20">
        <Container>
          <h1 className="font-display text-4xl sm:text-5xl">About Wild Electrical</h1>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl text-wild-purple">
              [Placeholder — replace with real company story]
            </h2>
            <p className="mt-4 text-wild-ink/75">
              This section needs real content from you: how Wild Electrical
              started, who&apos;s behind it, and what sets the way you work
              apart. I haven&apos;t invented a company history or made-up years
              of experience here — that&apos;s not something I know, so it
              needs to come from you.
            </p>
            <p className="mt-4 text-wild-ink/75">
              Useful things to include: how long you&apos;ve been operating,
              your electrical licence details, the areas you cover, and
              anything that explains why a customer should call Wild
              Electrical over another electrician.
            </p>
          </div>
          <div className="rounded-2xl bg-wild-fog p-6">
            <h3 className="font-display text-lg text-wild-purple">
              Business Details
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-wild-ink/60">Licence</dt>
                <dd>{site.licence}</dd>
              </div>
              <div>
                <dt className="font-semibold text-wild-ink/60">ABN</dt>
                <dd>{site.abn}</dd>
              </div>
              <div>
                <dt className="font-semibold text-wild-ink/60">Service Area</dt>
                <dd>{site.serviceArea}</dd>
              </div>
              <div>
                <dt className="font-semibold text-wild-ink/60">Hours</dt>
                <dd>{site.hours}</dd>
              </div>
            </dl>
          </div>
        </Container>

        <Container className="mt-16">
          <div className="rounded-2xl bg-wild-fog p-8 text-center">
            <h2 className="font-display text-2xl text-wild-purple">
              Got a job in mind?
            </h2>
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
