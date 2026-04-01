import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

export const ThankYou = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-background text-cream flex flex-col items-center justify-center px-6 text-center pt-20"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center justify-center p-4 bg-secondary/20 border border-secondary/30 text-secondary mb-12">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl text-white mb-8 tracking-tight font-semibold italic">
          Message Received.
        </h1>
        
        <div className="space-y-6 mb-12">
          <p className="font-body text-xl text-muted leading-relaxed text-balance">
            Your inquiry has been secured. We will get back to you within the next 24 hours.
          </p>
          <p className="font-body text-lg text-accent/80 italic text-balance">
            Don't want to wait? Call us today.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a 
              href="tel:+13105550198" 
              className="btn-primary-lg flex-1 sm:flex-none min-w-[240px]"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link to="/" className="btn-primary-lg bg-surface/30 hover:bg-surface/50 border-white/10 text-white flex-1 sm:flex-none min-w-[240px]">
              Return Home
            </Link>
          </div>

          <Link to="/insights" className="inline-flex items-center gap-2 text-cream font-ui text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors pb-1 border-b border-accent/30 hover:border-accent">
            Explore The Vault <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThankYou;
