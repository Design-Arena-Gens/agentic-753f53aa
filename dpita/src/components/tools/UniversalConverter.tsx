'use client';

import { useMemo, useState } from 'react';
import { useLocale } from '@/components/providers/LocaleProvider';

type ConversionCategory = 'temperature' | 'length' | 'weight';

type ConversionUnit = {
  value: string;
  label: string;
};

const temperatureUnits: ConversionUnit[] = [
  { value: 'celsius', label: '°C' },
  { value: 'fahrenheit', label: '°F' },
  { value: 'kelvin', label: 'K' },
];

const lengthUnits: ConversionUnit[] = [
  { value: 'meter', label: 'm' },
  { value: 'kilometer', label: 'km' },
  { value: 'mile', label: 'mi' },
  { value: 'foot', label: 'ft' },
];

const weightUnits: ConversionUnit[] = [
  { value: 'gram', label: 'g' },
  { value: 'kilogram', label: 'kg' },
  { value: 'pound', label: 'lb' },
  { value: 'ounce', label: 'oz' },
];

const categories: Record<
  ConversionCategory,
  { label: string; units: ConversionUnit[] }
> = {
  temperature: { label: 'Temperature', units: temperatureUnits },
  length: { label: 'Length', units: lengthUnits },
  weight: { label: 'Weight', units: weightUnits },
};

const toBaseUnit = (
  category: ConversionCategory,
  value: number,
  unit: string,
): number => {
  switch (category) {
    case 'temperature': {
      if (unit === 'celsius') return value;
      if (unit === 'fahrenheit') return ((value - 32) * 5) / 9;
      if (unit === 'kelvin') return value - 273.15;
      break;
    }
    case 'length': {
      if (unit === 'meter') return value;
      if (unit === 'kilometer') return value * 1000;
      if (unit === 'mile') return value * 1609.344;
      if (unit === 'foot') return value * 0.3048;
      break;
    }
    case 'weight': {
      if (unit === 'gram') return value;
      if (unit === 'kilogram') return value * 1000;
      if (unit === 'pound') return value * 453.59237;
      if (unit === 'ounce') return value * 28.3495231;
      break;
    }
    default:
      return value;
  }
  return value;
};

const fromBaseUnit = (
  category: ConversionCategory,
  value: number,
  unit: string,
): number => {
  switch (category) {
    case 'temperature': {
      if (unit === 'celsius') return value;
      if (unit === 'fahrenheit') return (value * 9) / 5 + 32;
      if (unit === 'kelvin') return value + 273.15;
      break;
    }
    case 'length': {
      if (unit === 'meter') return value;
      if (unit === 'kilometer') return value / 1000;
      if (unit === 'mile') return value / 1609.344;
      if (unit === 'foot') return value / 0.3048;
      break;
    }
    case 'weight': {
      if (unit === 'gram') return value;
      if (unit === 'kilogram') return value / 1000;
      if (unit === 'pound') return value / 453.59237;
      if (unit === 'ounce') return value / 28.3495231;
      break;
    }
    default:
      return value;
  }
  return value;
};

const formatNumber = (value: number): string =>
  Number.isFinite(value) ? value.toLocaleString(undefined, { maximumFractionDigits: 4 }) : '—';

export function UniversalConverter() {
  const { dictionary } = useLocale();
  const converterCopy =
    dictionary.tools.find((tool) => tool.id === 'converter') ??
    dictionary.tools[1];
  const [category, setCategory] = useState<ConversionCategory>('temperature');
  const [fromUnit, setFromUnit] = useState<string>('celsius');
  const [toUnit, setToUnit] = useState<string>('fahrenheit');
  const [inputValue, setInputValue] = useState<string>('25');

  const currentUnits = categories[category].units;
  const categoryEntries = Object.entries(categories) as [
    ConversionCategory,
    { label: string; units: ConversionUnit[] }
  ][];

  const result = useMemo(() => {
    const parsed = Number.parseFloat(inputValue);
    if (Number.isNaN(parsed)) {
      return '—';
    }
    const base = toBaseUnit(category, parsed, fromUnit);
    const converted = fromBaseUnit(category, base, toUnit);
    return formatNumber(converted);
  }, [category, fromUnit, toUnit, inputValue]);

  return (
    <form className="flex flex-col gap-4" aria-label={converterCopy.name}>
      <label className="flex flex-col text-sm text-slate-200">
        <span className="mb-1 font-medium text-slate-100">
          {dictionary.toolLabels.converter.category}
        </span>
        <select
          className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
          value={category}
          onChange={(event) => {
            const nextCategory = event.target.value as ConversionCategory;
            setCategory(nextCategory);
            const [firstUnit, secondUnit] = categories[nextCategory].units;
            setFromUnit(firstUnit.value);
            setToUnit(secondUnit?.value ?? firstUnit.value);
          }}
        >
          {categoryEntries.map(([key, value]) => (
            <option key={key} value={key}>
              {dictionary.toolLabels.converter.categoryLabels[key] ??
                value.label}
            </option>
          ))}
        </select>
      </label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-sm text-slate-200">
          <span className="mb-1 font-medium text-slate-100">
            {dictionary.toolLabels.converter.value}
          </span>
          <input
            type="number"
            inputMode="decimal"
            className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col text-sm text-slate-200">
            <span className="mb-1 font-medium text-slate-100">
              {dictionary.toolLabels.converter.unitFrom}
            </span>
            <select
              className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
              value={fromUnit}
              onChange={(event) => setFromUnit(event.target.value)}
            >
              {currentUnits.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col text-sm text-slate-200">
            <span className="mb-1 font-medium text-slate-100">
              {dictionary.toolLabels.converter.unitTo}
            </span>
            <select
              className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-base text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
              value={toUnit}
              onChange={(event) => setToUnit(event.target.value)}
            >
              {currentUnits.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <output
        aria-live="polite"
        className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-400/20 via-cyan-500/10 to-cyan-400/20 px-4 py-3 text-lg font-semibold text-cyan-100"
      >
        <span>{dictionary.toolLabels.converter.outcome}</span>
        <span>
          {result}{' '}
          <span className="text-sm font-normal text-cyan-200">{toUnit}</span>
        </span>
      </output>
    </form>
  );
}
