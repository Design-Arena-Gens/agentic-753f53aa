'use client';

import type { ComponentType } from 'react';
import { SmartCalculator } from '@/components/tools/SmartCalculator';
import { ToolCard } from '@/components/tools/ToolCard';
import { UniversalConverter } from '@/components/tools/UniversalConverter';
import { WorldClock } from '@/components/tools/WorldClock';
import { DailyPlanner } from '@/components/tools/DailyPlanner';
import { useLocale } from '@/components/providers/LocaleProvider';

const toolComponentMap: Record<string, ComponentType> = {
  calculator: SmartCalculator,
  converter: UniversalConverter,
  timezone: WorldClock,
  planner: DailyPlanner,
};

export function ToolsSection() {
  const { dictionary } = useLocale();

  return (
    <section
      id="tools"
      className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:py-24"
    >
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {dictionary.dailyToolkitHeading}
        </h2>
        <p className="text-lg text-slate-300">
          {dictionary.dailyToolkitDescription}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {dictionary.tools.map((tool) => {
          const Component = toolComponentMap[tool.id];
          if (!Component) {
            return null;
          }
          return (
            <ToolCard key={tool.id} title={tool.name} description={tool.description}>
              <Component />
            </ToolCard>
          );
        })}
      </div>
    </section>
  );
}
