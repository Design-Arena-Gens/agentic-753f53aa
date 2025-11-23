'use client';

import Link from 'next/link';
import { useLocale } from '@/components/providers/LocaleProvider';

export function Hero() {
  const { dictionary } = useLocale();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.25),_transparent_60%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 text-center">
        <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-lg shadow-cyan-500/10">
          dpita.com
        </span>
        <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          {dictionary.heroTitle}
        </h1>
        <p className="max-w-2xl text-balance text-lg text-slate-200 sm:text-xl">
          {dictionary.heroSubtitle}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#tools"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            {dictionary.heroCtaPrimary}
          </a>
          <Link
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-slate-100 transition hover:border-cyan-300 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            {dictionary.heroCtaSecondary}
          </Link>
        </div>
        <dl className="grid w-full gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur">
          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                {dictionary.speedLabel}
              </dt>
              <dd className="text-3xl font-bold text-white">
                {dictionary.speedStat}
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                {dictionary.trustLabel}
              </dt>
              <dd className="text-3xl font-bold text-white">
                {dictionary.trustStat}
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                {dictionary.coverageLabel}
              </dt>
              <dd className="text-3xl font-bold text-white">
                {dictionary.coverageStat}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
}
