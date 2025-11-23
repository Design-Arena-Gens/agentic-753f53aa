'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Locale,
  LocaleDictionary,
  defaultLocale,
  dictionaries,
  supportedLocales,
} from '@/i18n/translations';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  dictionary: LocaleDictionary;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

type LocaleProviderProps = {
  children: ReactNode;
};

const getBrowserLocale = (): Locale | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const primaryLanguage =
    window.navigator?.languages?.[0] ?? window.navigator?.language;

  if (!primaryLanguage) {
    return null;
  }

  const normalized = primaryLanguage.split('-')[0]?.toLowerCase();
  const found = supportedLocales.find((locale) => locale === normalized);
  return found ?? null;
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [isLocked, setIsLocked] = useState(false);

  const updateLocale = useCallback(
    (nextLocale: Locale) => {
      setLocale(nextLocale);
      setIsLocked(true);
    },
    [setLocale],
  );

  useEffect(() => {
    if (isLocked) {
      return;
    }
    const detectedLocale = getBrowserLocale();
    if (detectedLocale) {
      const timeoutId = window.setTimeout(
        () => updateLocale(detectedLocale),
        0,
      );
      return () => window.clearTimeout(timeoutId);
    }
  }, [isLocked, updateLocale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: updateLocale,
      dictionary: dictionaries[locale] ?? dictionaries[defaultLocale],
    }),
    [locale, updateLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
