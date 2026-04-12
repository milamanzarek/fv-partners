import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const cookieConsent = localStorage.getItem('fv_cookie_consent');
    if (!cookieConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('fv_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('fv_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-safe"
        >
          <div className="max-w-5xl mx-auto bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] rounded-sm shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ring-1 ring-white/10">
            <div className="flex-1">
              <h3 className="font-headline font-semibold text-lg mb-2">Privacy & Consent</h3>
              <p className="font-sans text-sm opacity-90 leading-relaxed max-w-3xl">
                FV Partners utilizes analytical and functional cookies to optimize your browsing experience and comply with CCPA & CPRA data regulations. We respect your privacy and provide total control over your digital footprint. Read our full <a href="/privacy" className="underline hover:text-[var(--color-primary-fixed)] transition-colors">Privacy Policy</a>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto mt-4 md:mt-0 shrink-0">
              <button 
                onClick={handleDecline}
                className="w-full sm:w-auto px-6 py-2.5 text-sm font-label uppercase tracking-widest text-white/70 hover:text-white transition-colors"
              >
                Decline All
              </button>
              <button 
                onClick={handleAccept}
                className="w-full sm:w-auto px-8 py-2.5 bg-[var(--color-primary)] text-white text-sm font-label uppercase tracking-widest hover:bg-[var(--color-primary-container)] transition-colors shadow-lg"
              >
                Accept Cookies
              </button>
            </div>
            
            <button 
              onClick={handleDecline} 
              className="absolute top-4 right-4 text-white/50 hover:text-white"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
