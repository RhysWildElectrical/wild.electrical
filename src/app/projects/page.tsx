import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Projects | Wild Electrical",
  description: "A look at recent Wild Electrical projects.",
};

const projects = [
  {
    src: "/projects/project-1.jpg",
    alt: "Kitchen renovation electrical fit-out, character home",
    blurb:
      "Electrical fit-out including linear LED strip lighting, pendant drops over the island, and power points built into the benchtop.",
  },
  {
    src: "/projects/project-2.jpg",
    alt: "Kitchen renovation electrical fit-out, contemporary home",
    blurb:
      "Electrical fit-out including feature pendant lighting, under-cabinet task lighting, and power provisions for a full run of kitchen appliances.",
  },
  {
    src: "/projects/project-3.jpg",
    alt: "Kitchen renovation electrical fit-out, hillside home",
    blurb:
      "Electrical fit-out including recessed downlighting and bench-top power points.",
  },
];

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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.src}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-5 text-sm text-wild-ink/75">{p.blurb}</p>
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
