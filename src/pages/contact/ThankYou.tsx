import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { SEO } from '../../components/seo/SEO';

export const ThankYou = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-background text-on-background flex flex-col items-center justify-center px-6 text-center pt-20 selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title="Thank You" 
        description="Your inquiry has been secured. We will get back to you within the next 24 hours." 
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center justify-center p-5 surface-tier-3 text-secondary mb-12 shadow-inner rounded-full">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-8 tracking-tight font-semibold italic">
          Message Received.
        </h1>
        
        <div className="space-y-6 mb-12">
          <p className="font-body text-xl text-outline leading-relaxed text-balance">
            Your inquiry has been secured. We will get back to you within the next 24 hours.
          </p>
          <p className="font-body text-lg text-secondary italic text-balance">
            Don't want to wait? Call us today.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a 
              href="tel:+13105550198" 
              className="bg-tertiary text-on-tertiary px-8 py-4 font-label text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors shadow-lg flex-1 sm:flex-none min-w-[240px] flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link 
              to="/" 
              className="surface-tier-3 text-on-surface px-8 py-4 font-label text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors shadow-md flex-1 sm:flex-none min-w-[240px]"
            >
              Return Home
            </Link>
          </div>

          <Link to="/insights" className="inline-flex items-center gap-2 text-on-surface font-label text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors pb-1 group">
            Explore The Vault <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThankYou;
