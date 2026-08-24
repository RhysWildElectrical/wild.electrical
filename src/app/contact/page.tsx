import type { Metadata } from "next";
import Container from "@/components/Container";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Wild Electrical",
  description: "Get in touch with Wild Electrical for a quote.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-wild-purple py-16 text-white sm:py-20">
        <Container>
          <h1 className="font-display text-4xl sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Send an enquiry and we&apos;ll get back to you, or call us directly.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl text-wild-purple">Get in Touch</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-wild-ink/60">Phone</dt>
                <dd>
                  <a href={site.phoneHref} className="text-wild-pink hover:underline">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-wild-ink/60">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="text-wild-pink hover:underline">
                    {site.email}
                  </a>
                </dd>
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

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
