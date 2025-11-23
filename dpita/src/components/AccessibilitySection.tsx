'use client';

import { useLocale } from '@/components/providers/LocaleProvider';

export function AccessibilitySection() {
  const { dictionary } = useLocale();

  return (
    <section
      id="accessibility"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24"
      aria-labelledby="accessibility-heading"
    >
      <div className="space-y-6 rounded-3xl border border-indigo-400/40 bg-indigo-500/10 p-8 shadow-xl shadow-indigo-500/10">
        <h2
          id="accessibility-heading"
          className="text-3xl font-bold tracking-tight text-indigo-100 sm:text-4xl"
        >
          {dictionary.accessibilityHeading}
        </h2>
        <p className="text-lg text-indigo-50/90">
          {dictionary.accessibilityDescription}
        </p>
        <ol className="grid list-decimal gap-3 pl-5 text-sm text-indigo-100/90 sm:grid-cols-2">
          {dictionary.accessibilityHighlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-2xl border border-indigo-300/30 bg-indigo-400/10 px-4 py-3"
            >
              {highlight}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
