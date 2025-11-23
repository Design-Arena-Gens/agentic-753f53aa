'use client';

import { useMemo, useState } from 'react';
import { useLocale } from '@/components/providers/LocaleProvider';

const operations = [
  { value: 'add', label: '+' },
  { value: 'subtract', label: '−' },
  { value: 'multiply', label: '×' },
  { value: 'divide', label: '÷' },
  { value: 'percent', label: '% of' },
];

export function SmartCalculator() {
  const { dictionary } = useLocale();
  const calculatorCopy =
    dictionary.tools.find((tool) => tool.id === 'calculator') ??
    dictionary.tools[0];
  const [firstValue, setFirstValue] = useState<string>('0');
  const [secondValue, setSecondValue] = useState<string>('0');
  const [operation, setOperation] = useState<string>('add');

  const parsedFirst = Number.parseFloat(firstValue);
  const parsedSecond = Number.parseFloat(secondValue);

  const result = useMemo(() => {
    if (Number.isNaN(parsedFirst) || Number.isNaN(parsedSecond)) {
      return '—';
    }

    switch (operation) {
      case 'add':
        return (parsedFirst + parsedSecond).toString();
      case 'subtract':
        return (parsedFirst - parsedSecond).toString();
      case 'multiply':
        return (parsedFirst * parsedSecond).toString();
      case 'divide':
        return parsedSecond === 0 ? '∞' : (parsedFirst / parsedSecond).toFixed(4);
      case 'percent':
        return ((parsedFirst * parsedSecond) / 100).toFixed(2);
      default:
        return '—';
    }
  }, [parsedFirst, parsedSecond, operation]);

  return (
    <form className="flex flex-col gap-3" aria-label={calculatorCopy.name}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <label className="flex flex-col text-sm text-slate-200">
          <span className="mb-1 font-medium text-slate-100">
            {dictionary.toolLabels.calculator.valueA}
          </span>
          <input
            type="number"
            inputMode="decimal"
            value={firstValue}
            onChange={(event) => setFirstValue(event.target.value)}
            className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
          />
        </label>
        <label className="flex flex-col text-sm text-slate-200">
          <span className="mb-1 font-medium text-slate-100">
            {dictionary.toolLabels.calculator.operation}
          </span>
          <select
            value={operation}
            onChange={(event) => setOperation(event.target.value)}
            className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
          >
            {operations.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col text-sm text-slate-200">
          <span className="mb-1 font-medium text-slate-100">
            {dictionary.toolLabels.calculator.valueB}
          </span>
          <input
            type="number"
            inputMode="decimal"
            value={secondValue}
            onChange={(event) => setSecondValue(event.target.value)}
            className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
          />
        </label>
      </div>
      <output
        aria-live="polite"
        className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-400/20 via-cyan-500/10 to-cyan-400/20 px-4 py-3 text-lg font-semibold text-cyan-100"
      >
        <span>{dictionary.toolLabels.calculator.result}</span>
        <span>{result}</span>
      </output>
    </form>
  );
}
