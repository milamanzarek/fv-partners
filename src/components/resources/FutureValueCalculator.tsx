import { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';

export const FutureValueCalculator = () => {
  const [presentValue, setPresentValue] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(7);
  const [years, setYears] = useState<number>(10);
  const [futureValue, setFutureValue] = useState<number>(0);

  useEffect(() => {
    const fv = presentValue * Math.pow(1 + interestRate / 100, years);
    setFutureValue(fv);
  }, [presentValue, interestRate, years]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="surface-tier-2 p-8 md:p-10 h-full flex flex-col hover:surface-tier-3 transition-colors duration-500 rounded-none shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10 shrink-0">
        <div className="p-3 surface-tier-3 text-tertiary">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h2 className="font-headline text-2xl text-on-surface tracking-tight leading-none font-semibold">Future Value <span className="italic text-primary">Modeler</span></h2>
          <p className="text-secondary font-label text-[10px] uppercase tracking-[0.2em] mt-1.5 font-bold">Interactive Strategic Tool</p>
        </div>
      </div>

      {/* Sliders Area */}
      <div className="space-y-8 mb-10">
        <div>
          <div className="flex justify-between items-end mb-3 px-1">
            <label className="text-outline font-label text-[10px] uppercase tracking-[0.2em] font-semibold">Initial Capital</label>
            <span className="text-primary font-body font-bold text-lg">{formatCurrency(presentValue)}</span>
          </div>
          <input 
            type="range" min="10000" max="1000000" step="10000" 
            value={presentValue} onChange={(e) => setPresentValue(Number(e.target.value))}
            className="w-full h-1.5 bg-background rounded-none appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div>
          <div className="flex justify-between items-end mb-3 px-1">
            <label className="text-outline font-label text-[10px] uppercase tracking-[0.2em] font-semibold">Annual Growth (%)</label>
            <span className="text-primary font-body font-bold text-lg">{interestRate}%</span>
          </div>
          <input 
            type="range" min="1" max="25" step="0.5" 
            value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-1.5 bg-background rounded-none appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div>
          <div className="flex justify-between items-end mb-3 px-1">
            <label className="text-outline font-label text-[10px] uppercase tracking-[0.2em] font-semibold">Horizon (Years)</label>
            <span className="text-primary font-body font-bold text-lg">{years} Years</span>
          </div>
          <input 
            type="range" min="1" max="40" step="1" 
            value={years} onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-1.5 bg-background rounded-none appearance-none cursor-pointer accent-primary"
          />
        </div>
      </div>

      {/* Result Box */}
      <div className="mt-auto max-w-sm mx-auto w-full p-8 surface-tier-3 text-center shrink-0 shadow-sm">
        <p className="text-outline font-label text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">Projected Value</p>
        <div className="text-4xl md:text-5xl font-headline font-bold text-tertiary mb-4 tracking-tight">
          {formatCurrency(futureValue)}
        </div>
        <div className="flex items-center justify-center gap-2 text-outline text-[10px] uppercase font-label">
          <Info className="w-3.5 h-3.5" />
          Compounded annually
        </div>
      </div>
    </div>
  );
};
