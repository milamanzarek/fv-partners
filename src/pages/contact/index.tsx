import { motion } from 'motion/react';
import { MapPin, Mail, Webhook, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { SEO } from '../../components/seo/SEO';
import { useI18n } from '../../context/I18nContext';

export const Contact = () => {
  const { t } = useI18n();

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-background text-on-background flex flex-col lg:flex-row pt-20 lg:pt-0 selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title={t('nav.contact')} 
        description={t('Schedule your complimentary consultation')} 
      />
      {/* Left: Contact Form */}
      <section className="w-full lg:w-[55%] p-8 md:p-12 lg:p-20 flex flex-col justify-center relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 w-full">
          <header className="mb-12">
            <h1 className="font-headline text-4xl md:text-6xl text-on-surface mb-6 tracking-tight text-balance font-bold leading-tight">
              {t('Get started today')}
            </h1>
            <p className="font-body text-outline text-lg max-w-lg leading-relaxed text-pretty font-medium mb-2">
              {t('Schedule your complimentary consultation')}
            </p>
            <p className="font-body text-tertiary text-base font-bold uppercase tracking-widest">
              {t('FILL OUT OUR QUICK FORM')}
            </p>
          </header>
          
          <ContactForm />
        </div>
      </section>

      {/* Right: Image & Direct Contact */}
      <aside className="w-full lg:w-[45%] bg-surface-dim relative flex flex-col shadow-sm h-full z-20">
        {/* Calendar Embed */}
        <div className="flex-grow flex flex-col items-center justify-center p-4 lg:p-8 relative w-full h-full">
           <div className="w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-white rounded-sm shadow-inner relative overflow-hidden">
               <iframe src="https://calendar.google.com/calendar/embed?src=contact%40fvpartners.us&ctz=America%2FLos_Angeles" style={{ border: 0 }} className="absolute inset-0 w-full h-full" frameBorder="0" scrolling="no"></iframe>
           </div>
           <a href="https://calendar.app.google/JD47skP1FCrJbbwy8" target="_blank" rel="noopener noreferrer" className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-fv-navy text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-tertiary transition-colors z-10">
              Open Full Calendar
           </a>
        </div>
        
        {/* Info Container */}
        <div className="p-8 md:p-16 shrink-0 surface-tier-2 shadow-sm z-30">
          <h2 className="font-headline text-2xl mb-8 text-on-surface tracking-tight font-bold">{t('Terminal Access')}</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="p-3 surface-tier-3 rounded-full border border-surface-variant">
                <MapPin className="w-5 h-5 text-tertiary shrink-0" />
              </div>
              <div className="mt-1">
                <address className="font-body text-outline text-base leading-relaxed not-italic space-y-1">
                  {t('We’re based in Los Angeles and proudly serve clients across the United States.')}
                </address>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="p-3 surface-tier-3 rounded-full border border-surface-variant">
                <Phone className="w-5 h-5 text-tertiary shrink-0" />
              </div>
              <div className="mt-1">
                <h3 className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-2 font-bold">{t('For faster service')}</h3>
                <a href="tel:+13103091620" className="font-body text-on-surface text-lg hover:text-primary transition-colors font-semibold">(310) 309-1620</a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-3 surface-tier-3 rounded-full border border-surface-variant">
                <Mail className="w-5 h-5 text-tertiary shrink-0" />
              </div>
              <div className="mt-1">
                <h3 className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-2 font-bold">{t('Email Address')}</h3>
                <a href="mailto:contact@fvpartners.us" className="font-body text-on-surface text-lg hover:text-primary transition-colors font-semibold">contact@fvpartners.us</a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </motion.main>
  );
};

export default Contact;
