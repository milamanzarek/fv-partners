import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Download, ArrowRight } from 'lucide-react';

interface GatedLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle: string;
  resourceDescription: string;
}

export const GatedLeadModal = ({ isOpen, onClose, resourceTitle, resourceDescription }: GatedLeadModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call to save email and send PDF
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-on-surface/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-surface-tier-1 shadow-2xl border border-surface-variant overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-outline hover:text-on-surface transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="bg-tertiary text-on-tertiary p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="w-16 h-16 bg-white/10 rounded-sm flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-headline text-2xl font-semibold mb-2">{resourceTitle}</h3>
            <p className="font-sans text-sm text-white/80">{resourceDescription}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="resourceEmail" className="block font-label text-[10px] uppercase tracking-widest text-outline mb-2 font-bold">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="resourceEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to receive the PDF"
                    required
                    className="w-full bg-surface-tier-2 px-4 py-3 text-on-surface font-body text-sm outline-none focus:ring-1 focus:ring-primary transition-all border border-surface-variant shadow-inner"
                  />
                </div>
                
                <p className="text-xs text-outline font-sans text-balance">
                  By downloading this resource, you agree to receive occasional insights from FV Partners. We respect your privacy.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-primary text-white py-4 font-label text-xs uppercase tracking-widest font-semibold hover:bg-primary-fixed transition-colors shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? 'Processing...' : 'Download Template'}
                  {!isSubmitting && <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />}
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Download className="w-8 h-8" />
                </div>
                <h4 className="font-headline text-xl font-semibold text-on-surface mb-2">Check Your Inbox</h4>
                <p className="font-sans text-outline mb-8">
                  We've sent the {resourceTitle} to <strong>{email}</strong>.
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-tertiary font-label text-xs uppercase tracking-widest hover:text-primary transition-colors group"
                >
                  Return to Site <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
