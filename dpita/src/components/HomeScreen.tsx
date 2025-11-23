'use client';

import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ToolsSection } from '@/components/ToolsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PrivacySection } from '@/components/PrivacySection';
import { AccessibilitySection } from '@/components/AccessibilitySection';
import { Footer } from '@/components/Footer';
import { useLocale } from '@/components/providers/LocaleProvider';
import type { Locale } from '@/i18n/translations';

type HomeScreenProps = {
  initialLocale?: Locale;
};

export function HomeScreen({ initialLocale }: HomeScreenProps) {
  const { setLocale } = useLocale();

  useEffect(() => {
    if (initialLocale) {
      setLocale(initialLocale);
    }
  }, [initialLocale, setLocale]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main id="main-content">
        <Hero />
        <ToolsSection />
        <FeaturesSection />
        <PrivacySection />
        <AccessibilitySection />
      </main>
      <Footer />
    </div>
  );
}
