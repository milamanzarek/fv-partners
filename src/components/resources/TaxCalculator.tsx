import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const TaxCalculator = () => {
  const { t } = useI18n();
  const [revenue, setRevenue] = useState<number>(500000);
  const [expenses, setExpenses] = useState<number>(300000);
  
  // Basic estimated tax calculation (very simplified for demonstration)
  // Assuming 21% corporate rate or similar blended effective rate for SMB
  const netIncome = Math.max(0, revenue - expenses);
  const estimatedTaxRate = 0.21;
  const estimatedTax = netIncome * estimatedTaxRate;
  const netAfterTaxes = netIncome - estimatedTax;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="surface-tier-2 shadow-sm border border-surface-variant flex flex-col md:flex-row min-h-[400px]">
      {/* Input Section */}
      <div className="w-full md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-surface-variant flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 surface-tier-3 rounded-full border border-surface-variant">
            <Calculator className="w-5 h-5 text-tertiary" />
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight">{t('Tax Estimator')}</h2>
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mt-1">
              {t('Simplified Corporate Rate')}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="tax-revenue" className="font-label text-xs uppercase tracking-wider font-bold text-outline">
                {t('Annual Revenue')}
              </label>
              <span className="font-body font-medium text-on-surface">{formatCurrency(revenue)}</span>
            </div>
            <input
              id="tax-revenue"
              type="range"
              min="0"
              max="5000000"
              step="50000"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full h-1 bg-surface-variant rounded-none appearance-none cursor-pointer accent-tertiary"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="tax-expenses" className="font-label text-xs uppercase tracking-wider font-bold text-outline">
                {t('Annual Expenses')}
              </label>
              <span className="font-body font-medium text-on-surface">{formatCurrency(expenses)}</span>
            </div>
            <input
              id="tax-expenses"
              type="range"
              min="0"
              max="5000000"
              step="50000"
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
              className="w-full h-1 bg-surface-variant rounded-none appearance-none cursor-pointer accent-tertiary"
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full md:w-1/2 p-8 md:p-12 bg-surface-dim flex flex-col justify-center relative overflow-hidden">
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline font-bold mb-4">
              {t('Estimated Liability')}
            </h3>
            
            <div className="space-y-6">
               <div className="flex justify-between items-end border-b border-surface-variant pb-2">
                  <span className="font-body text-outline font-medium">{t('Net Income')}</span>
                  <span className="font-headline text-xl font-bold">{formatCurrency(netIncome)}</span>
               </div>
               <div className="flex justify-between items-end border-b border-surface-variant pb-2">
                  <span className="font-body text-outline font-medium">{t('Estimated Tax (21%)')}</span>
                  <span className="font-headline text-xl font-bold text-tertiary">{formatCurrency(estimatedTax)}</span>
               </div>
               <div className="flex justify-between items-end pt-2">
                  <span className="font-body text-on-surface font-bold uppercase tracking-wider text-sm">{t('Net After Taxes')}</span>
                  <motion.span 
                     key={netAfterTaxes}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tight"
                  >
                     {formatCurrency(netAfterTaxes)}
                  </motion.span>
               </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-surface-variant">
            <p className="font-body text-xs text-outline leading-relaxed max-w-sm">
              {t('This is a simplified estimate assuming a flat 21% corporate tax rate. Actual tax liability varies based on entity structure, deductions, and state taxes.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
