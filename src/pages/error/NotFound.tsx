import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, SearchX } from 'lucide-react';
import { SEO } from '../../components/seo/SEO';
import { useI18n } from '../../context/I18nContext';

export const NotFound = () => {
  const { t } = useI18n();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center pt-20 selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title={t('404.title')} 
        description={t('404.desc')} 
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center justify-center p-5 surface-tier-3 text-outline mb-8 shadow-inner rounded-full">
          <SearchX className="w-12 h-12" />
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-6 tracking-tight font-bold text-balance">
          404.
        </h1>
        
        <div className="space-y-4 mb-12">
          <p className="font-body text-xl md:text-2xl text-outline leading-relaxed text-pretty font-medium">
            {t('404.body1')}
          </p>
          <p className="font-body text-lg text-outline italic text-balance">
            {t('404.body2')}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="bg-primary text-on-primary px-8 py-4 font-label text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-tertiary transition-colors shadow-lg flex-1 sm:flex-none min-w-[200px]"
          >
            {t('404.home')}
          </Link>
          <Link 
            to="/contact" 
            className="surface-tier-3 text-on-surface px-8 py-4 font-label text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-tertiary hover:text-white transition-colors shadow-md flex-1 sm:flex-none min-w-[200px]"
          >
            {t('404.contact')}
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
