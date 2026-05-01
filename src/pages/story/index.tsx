import { motion } from 'motion/react';
import { SEO } from '../../components/seo/SEO';
import { useI18n } from '../../context/I18nContext';

export const OurStory = () => {
  const { t } = useI18n();

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-background text-on-background selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title={t('Clarity and Confidence in Your Numbers')} 
        description={t('FV Partners exists to give business owners the confidence, strategy, and tools they need to build lasting success.')} 
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-24">
        
        {/* 1. Hero / Introduction */}
        <header className="flex flex-col items-center justify-center text-center mb-24">
          <h1 className="font-headline text-4xl md:text-6xl text-on-surface mb-6 tracking-tight font-bold text-balance max-w-4xl mx-auto">
            {t('We believe finance should empower.')}
          </h1>
          <p className="font-body text-xl md:text-2xl text-[var(--color-outline)] max-w-4xl mx-auto leading-relaxed text-pretty font-medium mb-8">
            {t('FV Partners exists to give business owners the confidence, strategy, and tools they need to build lasting success.')}
          </p>
          <p className="font-label text-sm md:text-base uppercase tracking-[0.3em] text-[var(--color-primary)] font-bold">
            {t('CLARITY • PARTNERSHIP • GROWTH')}
          </p>
        </header>

        <section className="space-y-32">
          {/* 2. Story Section */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-2 font-bold text-balance">{t('OUR STORY AND MISSION')}</h2>
              <h3 className="font-label text-sm uppercase tracking-[0.2em] text-primary font-bold mb-8">{t('Clarity and Confidence in Your Numbers')}</h3>
              <div className="font-body text-lg leading-relaxed flex flex-col gap-6 text-on-surface">
                <p className="text-pretty">
                  {t('FV Partners was built on a simple belief: small and mid-sized businesses deserve the same financial intelligence and strategic guidance as large enterprises.')}
                </p>
                <p className="text-pretty text-outline">
                  {t('After years in corporate finance and banking, our founders, Gulnaz Adigamova and Farida, saw a recurring problem - founders often lacked the financial strategy needed to scale, invest, and exit with confidence.')}
                </p>
                <p className="text-pretty text-outline">
                  {t('FV Partners bridges that gap. We provide clear, proactive, and executive-level financial leadership tailored to each stage of growth.')}
                </p>
                <p className="text-pretty font-medium mt-2">
                  {t('Our mission is to help business owners make smarter decisions, unlock profitability, and prepare for transformative opportunities - from expansion to liquidity events.')}
                </p>
              </div>
            </div>
            
            <figure className="order-1 lg:order-2 w-full max-w-md lg:ml-auto mx-auto aspect-[4/5] surface-tier-2 relative overflow-hidden shadow-sm group p-2 rounded-sm bg-white">
              <div className="w-full h-full relative overflow-hidden bg-surface-dim">
                <img 
                  src="https://res.cloudinary.com/dp9lnazkj/image/upload/v1777402661/our-paradigm-FV-Partners_zhk77g.png" 
                  alt="FV Partners Our Paradigm" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </figure>
          </article>

          {/* 3. Who We Work With */}
          <article className="surface-tier-2 p-12 md:p-16 shadow-sm">
            <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-10 font-bold text-center">{t('WHO WE WORK WITH')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
               <div className="flex flex-col justify-start h-full text-left bg-background p-8 md:p-10 border border-surface-variant">
                  <h3 className="font-headline text-xl md:text-2xl text-tertiary mb-4 font-bold leading-snug text-balance">{t('STARTUPS & SMALL BUSINESSES')}</h3>
                  <p className="font-body text-base md:text-lg text-outline leading-relaxed text-pretty">{t('Building strong financial foundations.')}</p>
               </div>
               <div className="flex flex-col justify-start h-full text-left bg-background p-8 md:p-10 border border-surface-variant">
                  <h3 className="font-headline text-xl md:text-2xl text-tertiary mb-4 font-bold leading-snug text-balance">{t('GROWING SMBs')}</h3>
                  <p className="font-body text-base md:text-lg text-outline leading-relaxed text-pretty">{t('Scaling operations with clarity and confidence.')}</p>
               </div>
            </div>
          </article>

          {/* 4. Core Values & Approach */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
             <div className="lg:py-10">
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-8 font-bold">{t('OUR VALUES')}</h2>
                <ul className="space-y-6">
                   <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                      <div>
                         <strong className="block text-xl font-semibold mb-1 text-tertiary">{t('CLARITY')}</strong>
                         <span className="text-outline text-lg">{t('We simplify complex financials into actionable insights.')}</span>
                      </div>
                   </li>
                   <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                      <div>
                         <strong className="block text-xl font-semibold mb-1 text-tertiary">{t('INTEGRITY')}</strong>
                         <span className="text-outline text-lg">{t('Trust and transparency guide every client relationship.')}</span>
                      </div>
                   </li>
                   <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                      <div>
                         <strong className="block text-xl font-semibold mb-1 text-tertiary">{t('PARTNERSHIP')}</strong>
                         <span className="text-outline text-lg">{t('We see ourselves as part of your team, invested in your success.')}</span>
                      </div>
                   </li>
                   <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                      <div>
                         <strong className="block text-xl font-semibold mb-1 text-tertiary">{t('GROWTH')}</strong>
                         <span className="text-outline text-lg">{t('We help you plan today for the opportunities of tomorrow.')}</span>
                      </div>
                   </li>
                </ul>
             </div>
             
             <div className="surface-tier-2 p-10 shadow-sm">
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-8 font-bold">{t('OUR APPROACH')}</h2>
                <ul className="space-y-8">
                   <li>
                      <strong className="block text-xl font-semibold mb-2 text-tertiary">{t('COLLABORATIVE')}</strong>
                      <span className="text-outline text-lg">{t('We integrate with your business like an in-house finance partner.')}</span>
                   </li>
                   <li>
                      <strong className="block text-xl font-semibold mb-2 text-tertiary">{t('TAILORED')}</strong>
                      <span className="text-outline text-lg">{t('Every engagement is customized to your stage and goals.')}</span>
                   </li>
                   <li>
                      <strong className="block text-xl font-semibold mb-2 text-tertiary">{t('PROVEN')}</strong>
                      <span className="text-outline text-lg">{t('Our experience spans startups, SMBs, and companies preparing for capital events.')}</span>
                   </li>
                </ul>
             </div>
          </article>
        </section>

      </div>
    </motion.main>
  );
};

export default OurStory;
