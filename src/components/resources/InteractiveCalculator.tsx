import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight } from 'lucide-react';

export const InteractiveCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [years, setYears] = useState<number>(10);
  const [estimatedReturn, setEstimatedReturn] = useState<number>(7);

  const calculateFutureValue = () => {
    const r = estimatedReturn / 100 / 12;
    const n = years * 12;
    
    // Future Value of Initial Investment
    const fvInitial = initialInvestment * Math.pow(1 + r, n);
    
    // Future Value of Monthly Contributions
    const fvContributions = monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
    
    return fvInitial + fvContributions;
  };

  const totalValue = calculateFutureValue();
  const totalContributions = initialInvestment + (monthlyContribution * years * 12);
  const totalInterest = totalValue - totalContributions;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-surface-tier-2 p-8 border border-surface-variant shadow-lg relative overflow-hidden group">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-sm bg-tertiary flex items-center justify-center text-on-tertiary shadow-md">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-semibold text-on-surface">Future Value Calculator</h3>
            <p className="font-sans text-sm text-outline">Project your long-term growth potential.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="flex justify-between font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                <span>Initial Investment</span>
                <span className="font-semibold text-on-surface">{formatCurrency(initialInvestment)}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="100000" 
                step="1000"
                value={initialInvestment} 
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
            
            <div>
              <label className="flex justify-between font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                <span>Monthly Contribution</span>
                <span className="font-semibold text-on-surface">{formatCurrency(monthlyContribution)}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="5000" 
                step="100"
                value={monthlyContribution} 
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <label className="flex justify-between font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                <span>Time Horizon (Years)</span>
                <span className="font-semibold text-on-surface">{years} Years</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="40" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <label className="flex justify-between font-label text-[10px] uppercase tracking-widest text-outline mb-2">
                <span>Estimated Annual Return (%)</span>
                <span className="font-semibold text-on-surface">{estimatedReturn}%</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="15" 
                step="0.5"
                value={estimatedReturn} 
                onChange={(e) => setEstimatedReturn(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </div>

          <div className="bg-surface-tier-3 p-6 border border-surface-variant shadow-inner flex flex-col justify-center">
            <h4 className="font-label text-[10px] uppercase tracking-widest text-outline mb-4 text-center">Projected Value</h4>
            
            <div className="text-center mb-6">
              <motion.span 
                key={totalValue}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-headline text-5xl md:text-6xl font-bold text-tertiary block mb-2"
              >
                {formatCurrency(totalValue)}
              </motion.span>
            </div>

            <div className="space-y-3 pt-4 border-t border-surface-variant/50">
              <div className="flex justify-between text-sm font-sans">
                <span className="text-outline">Total Contributions</span>
                <span className="font-semibold text-on-surface">{formatCurrency(totalContributions)}</span>
              </div>
              <div className="flex justify-between text-sm font-sans">
                <span className="text-outline">Total Interest Earned</span>
                <span className="font-semibold text-primary">{formatCurrency(totalInterest)}</span>
              </div>
            </div>
            
            <a 
              href="/contact" 
              className="mt-8 w-full bg-tertiary text-on-tertiary py-3 px-4 font-label text-xs uppercase tracking-widest font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2 group"
            >
              Discuss Your Strategy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
