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
            <p className="text-wild-ink/75">
              At Wild Electrical, we are passionate about delivering
              efficient electrical projects with a commitment to
              communication and high-quality work for your peace of mind.
            </p>
            <p className="mt-4 text-wild-ink/75">
              Founded on the belief that everyone deserves honest,
              transparent advice, professional workmanship and reliability.
            </p>
            <p className="mt-4 text-wild-ink/75">
              Whether it is a small residential repair, alteration or
              addition, a new home, commercial maintenance, solar, air
              conditioning, instrumentation or utility scale solar farms, we
              bring the same level of dedication and attention to detail.
            </p>
            <p className="mt-4 text-wild-ink/75">
              The name <em>Wild Electrical</em> reflects our energy,
              determination and our family. We embrace collaboration, we
              stay up to date with industry standards and continuously
              invest ourselves to provide the best possible service.
            </p>
            <p className="mt-4 text-wild-ink/75">
              What sets us apart is our commitment to building lasting
              relationships. We take pride in clear communication and
              delivering a customer experience that exceeds expectations.
            </p>
            <p className="mt-6 font-display text-xl text-wild-pink">
              GO WILD
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
