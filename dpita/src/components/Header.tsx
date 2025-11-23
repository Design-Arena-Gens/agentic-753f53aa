"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/providers/LocaleProvider";

export function Header() {
  const { dictionary } = useLocale();

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="text-lg font-black tracking-wide text-cyan-300 transition hover:text-cyan-200 focus-visible:text-cyan-100"
          aria-label="dpita.com home"
        >
          dpita<span className="text-white">.</span>com
        </Link>
        <nav aria-label="Site sections">
          <ul className="hidden items-center gap-6 text-sm font-semibold text-slate-100 sm:flex">
            {dictionary.navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="rounded-full px-4 py-2 transition hover:bg-cyan-500/10 focus-visible:bg-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#tools"
            className="hidden rounded-full border border-cyan-400 bg-cyan-500/20 px-4 py-2 text-sm font-bold uppercase tracking-wide text-cyan-100 shadow-md shadow-cyan-500/20 transition hover:bg-cyan-500/40 focus-visible:bg-cyan-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:inline-flex"
          >
            {dictionary.heroCtaPrimary}
          </a>
        </div>
      </div>
    </header>
  );
}
