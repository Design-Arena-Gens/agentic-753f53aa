'use client';

import { useLocale } from '@/components/providers/LocaleProvider';

export function FeaturesSection() {
  const { dictionary } = useLocale();

  return (
    <section
      id="features"
      className="mx-auto max-w-6xl px-6 py-16 sm:py-24"
      aria-labelledby="features-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
        <div className="space-y-5">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {dictionary.featuresHeading}
          </h2>
          <p className="text-lg text-slate-300">
            {dictionary.heroSubtitle}
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {dictionary.features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40"
            >
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
