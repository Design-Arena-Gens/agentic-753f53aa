'use client';

import { useLocale } from '@/components/providers/LocaleProvider';

export function PrivacySection() {
  const { dictionary } = useLocale();

  return (
    <section
      id="privacy"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24"
      aria-labelledby="privacy-heading"
    >
      <div className="rounded-3xl border border-emerald-400/40 bg-emerald-500/10 p-8 text-left shadow-xl shadow-emerald-500/10">
        <h2
          id="privacy-heading"
          className="text-3xl font-bold tracking-tight text-emerald-200 sm:text-4xl"
        >
          {dictionary.privacyHeading}
        </h2>
        <p className="mt-4 text-lg text-emerald-50/90">
          {dictionary.privacyDescription}
        </p>
        <ul className="mt-6 grid gap-3 text-sm text-emerald-100/90 sm:grid-cols-2">
          {dictionary.privacyHighlights.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
