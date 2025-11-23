'use client';

import { notFound } from 'next/navigation';
import { HomeScreen } from '@/components/HomeScreen';
import {
  supportedLocales,
  type Locale,
} from '@/i18n/translations';

type PageProps = {
  params: {
    locale: string;
  };
};

export default function LocalePage({ params }: PageProps) {
  const { locale } = params;
  const normalizedLocale = locale.toLowerCase() as Locale;

  if (!supportedLocales.includes(normalizedLocale)) {
    notFound();
  }

  return <HomeScreen initialLocale={normalizedLocale} />;
}
