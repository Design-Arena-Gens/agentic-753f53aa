'use client';

import { ReactNode } from 'react';

type ToolCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ToolCard({ title, description, children }: ToolCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40 transition hover:border-cyan-400/40 hover:shadow-cyan-500/20 focus-within:border-cyan-400/60 focus-within:shadow-cyan-500/30">
      <header>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{description}</p>
      </header>
      <div className="flex-1 rounded-2xl border border-white/5 bg-slate-950/80 p-4">
        {children}
      </div>
    </article>
  );
}
