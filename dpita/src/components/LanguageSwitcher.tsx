'use client';

import { ChangeEvent } from 'react';
import { supportedLocales } from '@/i18n/translations';
import { useLocale } from '@/components/providers/LocaleProvider';

export function LanguageSwitcher() {
  const { locale, setLocale, dictionary } = useLocale();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value as typeof locale);
  };

  return (
    <label htmlFor="language-picker" className="inline-flex items-center gap-2">
      <span className="sr-only">{dictionary.languageSwitcherLabel}</span>
      <select
        id="language-picker"
        className="rounded-full border border-cyan-400/60 bg-slate-900/80 px-4 py-2 text-sm font-semibold tracking-wide text-slate-100 shadow-inner shadow-cyan-500/20 outline-none transition focus-visible:border-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        value={locale}
        onChange={handleChange}
        aria-label={dictionary.languageSwitcherLabel}
      >
        {supportedLocales.map((supportedLocale) => (
          <option key={supportedLocale} value={supportedLocale}>
            {supportedLocale.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
