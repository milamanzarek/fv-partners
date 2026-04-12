import { motion } from 'motion/react';

export const DeveloperCredit = ({ language = 'en' }: { language?: 'en' | 'es' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="pt-6 mt-10 flex flex-col items-center md:items-start opacity-40 hover:opacity-80 transition-opacity duration-500 relative"
    >
      <div className="absolute top-0 left-0 w-full md:w-[60%] h-[1px] bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
      <p className="text-[9px] text-[var(--color-outline)] uppercase tracking-[0.25em] font-label mb-1">
        {language === 'en' ? 'Digital Stewardship' : 'Desarrollado por'}
      </p>
      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
        <p className="font-headline text-sm font-medium text-[var(--color-on-surface)] tracking-wide">
          Kamilla Gafurzianova, OLY
        </p>
        <p className="text-[8px] text-[var(--color-outline)] uppercase tracking-[0.2em] font-label">
          {language === 'en' ? 'Business Strategy & Systems Architect' : 'Estrategia de Negocios & Arquitecta de Sistemas'}
        </p>
      </div>
    </motion.div>
  );
};
