'use client';

import { useLocale } from '@/components/providers/LocaleProvider';

export function SkipLink() {
  const { dictionary } = useLocale();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan-400 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950 focus:shadow-lg focus:outline-none"
    >
      {dictionary.skipToContent}
    </a>
  );
}
