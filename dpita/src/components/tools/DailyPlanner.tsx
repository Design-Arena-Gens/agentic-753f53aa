'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useLocale } from '@/components/providers/LocaleProvider';

type Task = {
  id: string;
  label: string;
  completed: boolean;
};

const createId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2, 10);

const createTask = (label: string): Task => ({
  id: createId(),
  label,
  completed: false,
});

export function DailyPlanner() {
  const { dictionary } = useLocale();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [draft, setDraft] = useState('');

  const activeTasks = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed) {
      return;
    }
    setTasks((current) => [createTask(trimmed), ...current]);
    setDraft('');
  };

  return (
    <section className="flex flex-col gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
        aria-label={dictionary.tools.find((tool) => tool.id === 'planner')?.name}
      >
        <label className="flex-1 text-sm text-slate-200">
          <span className="sr-only">{dictionary.toolLabels.planner.add}</span>
          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder={dictionary.toolLabels.planner.placeholder}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
            aria-label={dictionary.toolLabels.planner.add}
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
        >
          {dictionary.toolLabels.planner.add}
        </button>
      </form>
      <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
        {tasks.length === 0 ? (
          <p className="text-sm text-slate-300">
            {dictionary.toolLabels.planner.empty}
          </p>
        ) : (
          <>
            <ul className="flex flex-col gap-3">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-slate-900/80 px-3 py-2"
                >
                  <label className="flex flex-1 items-center gap-3 text-sm text-slate-100">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() =>
                        setTasks((current) =>
                          current.map((item) =>
                            item.id === task.id
                              ? { ...item, completed: !item.completed }
                              : item,
                          ),
                        )
                      }
                      className="h-4 w-4 rounded border border-cyan-400/40 bg-slate-950/80 text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    />
                    <span
                      className={`flex-1 ${
                        task.completed
                          ? 'text-slate-400 line-through'
                          : 'text-white'
                      }`}
                    >
                      {task.label}
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setTasks((current) =>
                        current.filter((item) => item.id !== task.id),
                      )
                    }
                    className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-200 transition hover:bg-cyan-500/10 focus-visible:bg-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
            <footer className="mt-4 flex flex-col gap-3 border-t border-white/5 pt-3 text-xs uppercase tracking-wide text-cyan-200/90 sm:flex-row sm:items-center sm:justify-between">
              <span>
                {activeTasks} / {tasks.length}
              </span>
              <button
                type="button"
                onClick={() => setTasks([])}
                className="self-start rounded-full border border-cyan-400/60 px-3 py-1 text-[0.6rem] font-semibold text-cyan-100 transition hover:bg-cyan-500/10 focus-visible:bg-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {dictionary.toolLabels.planner.clear}
              </button>
            </footer>
          </>
        )}
      </div>
    </section>
  );
}
