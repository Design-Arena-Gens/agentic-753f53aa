'use client';

import Link from 'next/link';
import { useLocale } from '@/components/providers/LocaleProvider';

export function Footer() {
  const { dictionary } = useLocale();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-base font-semibold text-white">
            {dictionary.footerTagline}
          </p>
          <p>{dictionary.footerRights}</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-4">
            {dictionary.navSections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className="transition hover:text-cyan-300 focus-visible:text-cyan-200"
                >
                  {section.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://status.dpita.com"
                className="transition hover:text-cyan-300 focus-visible:text-cyan-200"
              >
                Status
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@dpita.com"
                className="transition hover:text-cyan-300 focus-visible:text-cyan-200"
              >
                hello@dpita.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
