import Link from "next/link";
import { Service } from "@/lib/site";

export default function ServiceCard({ service, href }: { service: Service; href?: string }) {
  const content = (
    <>
      <h3 className="font-display text-xl text-wild-purple">{service.title}</h3>
      <p className="mt-2 text-sm text-wild-ink/75">{service.summary}</p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group block rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-wild-pink hover:shadow-lg"
      >
        {content}
        <span className="mt-4 inline-block text-sm font-bold text-wild-pink">
          Learn more →
        </span>
      </Link>
    );
  }

  return <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">{content}</div>;
}
