import { motion } from 'motion/react';

export const DeveloperCredit = ({ language = 'en' }: { language?: 'en' | 'es' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="pt-6 mt-10 border-t border-white/5 flex flex-col items-center md:items-start opacity-40 hover:opacity-80 transition-opacity duration-500"
    >
      <p className="text-[9px] text-muted uppercase tracking-[0.25em] font-ui mb-1">
        {language === 'en' ? 'Digital Stewardship' : 'Desarrollado por'}
      </p>
      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
        <p className="font-heading text-sm font-medium text-muted tracking-wide">
          Kamilla Gafurzianova, OLY
        </p>
        <p className="text-[8px] text-accent/50 uppercase tracking-[0.2em] font-ui">
          {language === 'en' ? 'Business Strategy & Systems Architect' : 'Estrategia de Negocios & Arquitecta de Sistemas'}
        </p>
      </div>
    </motion.div>
  );
};
