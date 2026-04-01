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
    <div className="bg-surface/30 border border-white/5 p-8 md:p-10 h-full flex flex-col hover:border-accent/40 transition-all duration-500 rounded-none shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <div className="p-2.5 bg-background/50 border border-white/5 text-accent">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-heading text-2xl text-white tracking-tight leading-none">Future Value <span className="italic text-accent">Modeler</span></h2>
          <p className="text-muted font-ui text-[8px] uppercase tracking-[0.3em] mt-1 opacity-60">Interactive Strategic Tool</p>
        </div>
      </div>

      {/* Sliders Area */}
      <div className="space-y-6 mb-6">
        <div>
          <div className="flex justify-between items-end mb-2 px-1">
            <label className="text-cream font-ui text-[9px] uppercase tracking-[0.2em] opacity-70">Initial Capital</label>
            <span className="text-accent font-body font-bold text-base">{formatCurrency(presentValue)}</span>
          </div>
          <input 
            type="range" min="10000" max="1000000" step="10000" 
            value={presentValue} onChange={(e) => setPresentValue(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-none appearance-none cursor-pointer accent-accent"
          />
        </div>

        <div>
          <div className="flex justify-between items-end mb-2 px-1">
            <label className="text-cream font-ui text-[9px] uppercase tracking-[0.2em] opacity-70">Annual Growth (%)</label>
            <span className="text-accent font-body font-bold text-base">{interestRate}%</span>
          </div>
          <input 
            type="range" min="1" max="25" step="0.5" 
            value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-none appearance-none cursor-pointer accent-accent"
          />
        </div>

        <div>
          <div className="flex justify-between items-end mb-2 px-1">
            <label className="text-cream font-ui text-[9px] uppercase tracking-[0.2em] opacity-70">Horizon (Years)</label>
            <span className="text-accent font-body font-bold text-base">{years} Years</span>
          </div>
          <input 
            type="range" min="1" max="40" step="1" 
            value={years} onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-none appearance-none cursor-pointer accent-accent"
          />
        </div>
      </div>

      {/* Result Box - More compact */}
      <div className="mt-auto max-w-sm mx-auto w-full p-6 bg-black/30 border border-white/5 text-center shrink-0">
        <p className="text-muted font-ui text-[8px] uppercase tracking-[0.4em] mb-2 opacity-50">Projected Value</p>
        <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-3 tracking-tight">
          {formatCurrency(futureValue)}
        </div>
        <div className="flex items-center justify-center gap-2 text-muted text-[9px] font-body italic opacity-30">
          <Info className="w-3 h-3" />
          Compounded annually.
        </div>
      </div>
    </div>
  );
};
