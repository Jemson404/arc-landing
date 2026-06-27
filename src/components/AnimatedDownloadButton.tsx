"use client";
import Link from "next/link";

type Props = { href: string; title: string; subtitle?: string };

export default function AnimatedDownloadButton({ href, title, subtitle }: Props) {
  return (
    <Link
      href={href}
      prefetch={false}
      aria-label={`Download ${title}`}
      className="group relative block rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-sm backdrop-blur transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 transition-all group-hover:-translate-y-0.5 group-hover:shadow">
          <span className="text-xl">⬇️</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium leading-tight">{title}</div>
          {subtitle ? <div className="text-xs text-neutral-500">{subtitle}</div> : null}
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
          <span className="text-xs">Download</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-neutral-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}
