import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Projects | Wild Electrical",
  description: "A look at recent Wild Electrical projects.",
};

const placeholderSlots = Array.from({ length: 6 }, (_, i) => i + 1);

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-wild-purple py-16 text-white sm:py-20">
        <Container>
          <h1 className="font-display text-4xl sm:text-5xl">Projects</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            A selection of recent work across residential, commercial,
            industrial and solar jobs.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="rounded-xl border-2 border-dashed border-wild-pink/40 bg-wild-pink/5 p-5 text-sm text-wild-ink/75">
            This page is placeholder gallery slots — I don&apos;t have real
            project photos, so I haven&apos;t invented any. Send through
            photos and a line or two about each job (what it was, roughly
            where) and I&apos;ll drop them in.
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderSlots.map((n) => (
              <div
                key={n}
                className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-black/15 bg-wild-fog text-wild-ink/40"
              >
                <span className="font-display text-3xl">+</span>
                <span className="text-sm font-semibold">Project photo {n}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-wild-pink px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110"
            >
              Start Your Project
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
