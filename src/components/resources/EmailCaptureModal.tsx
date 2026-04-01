import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';

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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
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
            className="fixed inset-0 bg-[#041527]/95 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] px-6 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-background border border-white/10 p-8 md:p-12 max-w-xl w-full relative shadow-2xl rounded-none pointer-events-auto"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-muted hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="inline-flex items-center justify-center p-3 bg-secondary/20 border border-secondary/30 text-secondary mb-8">
                  <Mail className="w-6 h-6" />
                </div>

                <h2 className="font-heading text-3xl md:text-4xl text-white mb-4 tracking-tight">
                  Access <span className="italic text-accent">The Vault</span>
                </h2>
                
                <p className="font-body text-muted mb-10 text-pretty leading-relaxed">
                  Enter your email to secure access to the <span className="text-cream font-medium">{resourceTitle}</span> and receive our monthly strategic briefings.
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
                      className="w-full bg-surface/30 border border-white/10 px-6 py-4 text-cream font-body text-sm focus:outline-none focus:border-accent/50 transition-colors rounded-none placeholder:text-muted/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="btn-primary-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Securing Access...
                      </>
                    ) : (
                      <>
                        Request Access
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-8 text-[10px] font-ui uppercase tracking-[0.2em] text-muted/50">
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
