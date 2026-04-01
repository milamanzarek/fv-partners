import { motion } from 'motion/react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="h-screen bg-background text-cream flex flex-col lg:flex-row pt-20 lg:pt-0 overflow-hidden"
    >
      {/* Left: Contact Form */}
      <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-y-auto hide-scrollbar">
        <div className="max-w-2xl mx-auto lg:mx-0 w-full">
          <header className="mb-10">
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-4 tracking-tight text-balance font-semibold leading-tight">
              Initiate a <span className="italic text-accent">Conversation</span>
            </h1>
            <p className="font-body text-muted text-lg max-w-lg leading-relaxed text-pretty">
              Connect with our team to explore your Future Value.<br />
              We welcome inquiries from prospective clients seeking principled stewardship.
            </p>
          </header>
          
          <ContactForm />
        </div>
      </div>

      {/* Right: Image & Direct Contact */}
      <div className="w-full lg:w-[45%] bg-[#041527] relative flex flex-col border-l border-white/5 shadow-2xl h-full">
        {/* Hero Image Container */}
        <div className="relative flex-grow min-h-0 overflow-hidden">
          <img 
            src="/schedule-consultation-hero.jpg" 
            alt="FV Partners Founders in Consultation" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale contrast-110 object-top"
          />
          {/* Top gradient for header legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#041527]/80 via-[#041527]/20 to-transparent h-40"></div>
          {/* Dense bottom gradient to merge sections - perfectly opaque at the baseline */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#041527] via-[#041527]/90 via-15% to-transparent to-40%"></div>
        </div>
        
        {/* Info Container */}
        <div className="p-8 md:p-12 shrink-0 bg-[#041527]">
          <h2 className="font-heading text-3xl mb-8 text-white tracking-tight italic">Direct Contact</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-ui text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Los Angeles Office</h3>
                <p className="font-body text-cream/80 text-base leading-relaxed">
                  1900 Avenue of the Stars, Suite 2400<br/>
                  Los Angeles, CA 90067
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-ui text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Digital Connection</h3>
                <a href="mailto:inquiries@fvpartners.com" className="block font-body text-cream text-base mb-1 hover:text-accent transition-colors">inquiries@fvpartners.com</a>
                <a href="tel:+13105550198" className="block font-body text-cream text-base hover:text-accent transition-colors">+1 (310) 555-0198</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
