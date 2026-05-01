import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from '../../services/api';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle: string;
  onSuccess: (email: string) => void;
}

export const EmailCaptureModal = ({ isOpen, onClose, resourceTitle, onSuccess }: EmailCaptureModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    await submitContactForm({
      formType: 'Lead Magnet Download',
      email: email,
      resourceTitle: resourceTitle
    });
    
    setIsSubmitting(false);
    onSuccess(email);
    setEmail('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-on-background/10 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] px-6 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-background p-8 md:p-14 max-w-xl w-full relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-none pointer-events-auto"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-outline hover:text-primary transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 surface-tier-2 text-secondary mb-8 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>

                <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4 tracking-tight font-semibold">
                  Access <span className="italic text-tertiary">The Vault</span>
                </h2>
                
                <p className="font-body text-outline mb-10 text-pretty leading-relaxed text-lg">
                  Enter your email to secure access to <span className="text-on-surface font-semibold">{resourceTitle}</span> and receive our monthly strategic briefings.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      autoFocus
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Professional Email Address"
                      className="w-full surface-tier-2 px-6 py-5 text-on-surface font-body text-base outline-none focus:ring-0 shadow-inner rounded-none placeholder:text-outline"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="flex justify-center items-center w-full gap-3 px-8 py-5 bg-tertiary text-on-tertiary font-label text-sm uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Securing Access...
                      </>
                    ) : (
                      <>
                        Request Access
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-10 text-[10px] font-label font-bold uppercase tracking-[0.2em] text-outline">
                  Secured by FV Partners Stewardship
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
