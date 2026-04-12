import { motion } from 'motion/react';
import { MapPin, Mail, Webhook } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { SEO } from '../../components/seo/SEO';

export const Contact = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-background text-on-background flex flex-col lg:flex-row pt-20 lg:pt-0 selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title="Secure Inquiry" 
        description="Initiate communication with the firm. We respond strictly to enterprises seeking uncompromising financial architecture." 
      />
      {/* Left: Contact Form */}
      <section className="w-full lg:w-[55%] p-8 md:p-12 lg:p-20 flex flex-col justify-center relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 w-full">
          <header className="mb-12">
            <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-6 tracking-tight text-balance font-semibold leading-tight">
              Initiate a <span className="italic text-tertiary">Diagnostic</span>
            </h1>
            <p className="font-body text-outline text-lg max-w-lg leading-relaxed text-pretty">
              Execute a formal inquiry to engage our advisory board.<br />
              We respond strictly to enterprises seeking uncompromising financial architecture.
            </p>
          </header>
          
          <ContactForm />
        </div>
      </section>

      {/* Right: Image & Direct Contact */}
      <aside className="w-full lg:w-[45%] bg-[#041527] relative flex flex-col shadow-2xl h-full z-20">
        {/* Hero Image Container */}
        <figure className="relative flex-grow min-h-0 overflow-hidden m-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
            alt="Corporate Architecture" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale contrast-110 object-top"
          />
          {/* Dense bottom gradient to merge sections completely seamlessly without a border line */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-tier-2 via-surface-tier-2/90 via-15% to-transparent to-40%"></div>
        </figure>
        
        {/* Info Container */}
        <div className="p-8 md:p-16 shrink-0 surface-tier-2 shadow-[0_-20px_40px_rgba(0,0,0,0.5)] z-30">
          <h2 className="font-headline text-3xl mb-10 text-on-surface tracking-tight italic font-semibold">Terminal Access</h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <div className="p-3 surface-tier-3">
                <MapPin className="w-5 h-5 text-tertiary shrink-0" />
              </div>
              <div>
                <h3 className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-3 font-bold">Corporate Headquarters</h3>
                <address className="font-body text-outline text-base leading-relaxed not-italic space-y-1">
                  18565 SOLEDAD CANYON RD #110<br/>
                  CANYON COUNTRY, CA 91351
                </address>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="p-3 surface-tier-3">
                <Webhook className="w-5 h-5 text-tertiary shrink-0" />
              </div>
              <div>
                <h3 className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-3 font-bold">Encrypted Connection</h3>
                <div className="space-y-1 flex flex-col">
                  <a href="mailto:contact@fvpartners.us" className="font-body text-on-surface text-base hover:text-primary transition-colors">contact@fvpartners.us</a>
                  <a href="tel:+13103091620" className="font-body text-on-surface text-base hover:text-primary transition-colors">(310) 309-1620</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </motion.main>
  );
};

export default Contact;
