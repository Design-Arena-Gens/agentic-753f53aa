'use client';

import { useCallback, useEffect, useState } from 'react';
import { useLocale } from '@/components/providers/LocaleProvider';

type City = {
  id: string;
  name: string;
  timeZone: string;
};

const cities: City[] = [
  { id: 'new-york', name: 'New York', timeZone: 'America/New_York' },
  { id: 'london', name: 'London', timeZone: 'Europe/London' },
  { id: 'madrid', name: 'Madrid', timeZone: 'Europe/Madrid' },
  { id: 'dubai', name: 'Dubai', timeZone: 'Asia/Dubai' },
  { id: 'singapore', name: 'Singapore', timeZone: 'Asia/Singapore' },
  { id: 'sydney', name: 'Sydney', timeZone: 'Australia/Sydney' },
];

const formatTime = (date: Date, locale: string, timeZone: string) =>
  new Intl.DateTimeFormat(locale, {
    timeStyle: 'short',
    hour12: false,
    timeZone,
  }).format(date);

export function WorldClock() {
  const { locale, dictionary } = useLocale();
  const [timestamp, setTimestamp] = useState<Date>(new Date());

  useEffect(() => {
    const interval = window.setInterval(
      () => setTimestamp(new Date()),
      60_000,
    );
    return () => window.clearInterval(interval);
  }, []);

  const handleRefresh = useCallback(() => {
    setTimestamp(new Date());
  }, []);

  return (
    <section
      aria-label={dictionary.tools.find((tool) => tool.id === 'timezone')?.name}
      className="flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-300">
          {dictionary.toolLabels.timezone.subtitle}
        </p>
        <button
          type="button"
          onClick={handleRefresh}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100 transition hover:bg-cyan-500/20 focus-visible:bg-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          {dictionary.toolLabels.timezone.refresh}
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {cities.map((city) => (
          <li
            key={city.id}
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-inner shadow-cyan-500/10"
          >
            <dl className="flex items-center justify-between">
              <dt className="text-sm font-semibold text-white">{city.name}</dt>
              <dd className="text-lg font-bold text-cyan-100">
                {formatTime(timestamp, locale, city.timeZone)}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </section>
  );
}
