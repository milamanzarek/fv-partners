import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { NewLogo } from '../../components/ui/NewLogo';
import { SEO } from '../../components/seo/SEO';
import { useI18n } from '../../context/I18nContext';

export const Home = () => {
  const { t } = useI18n();
  
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-background text-on-background selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title={t('home.hero.title')}
        description={t('home.hero.subtitle')}
      />
      
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative pt-20 surface-tier-3 bg-white">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-10 text-tertiary"
        >
          <NewLogo className="w-32 h-32 md:w-48 md:h-48 drop-shadow-xl mx-auto" />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-headline text-4xl md:text-6xl font-bold text-on-surface mb-6 leading-tight tracking-tight text-pretty max-w-4xl mx-auto"
        >
          {t('home.hero.title')}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-body text-xl md:text-2xl text-outline max-w-3xl mx-auto mb-10 leading-relaxed text-pretty font-medium"
        >
          {t('home.hero.subtitle')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-tertiary text-on-tertiary font-label text-base uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors shadow-lg">
            {t('home.hero.cta')} <ArrowRight className="w-5 h-5" />
          </Link>
          
          <a href="tel:+13103091620" className="inline-flex items-center gap-2 text-outline font-label text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors group">
            <Phone className="w-3.5 h-3.5 text-tertiary group-hover:scale-110 transition-transform" />
            (310) 309-1620
          </a>
        </motion.div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-[var(--color-on-surface)] mb-8 leading-snug tracking-tight text-pretty max-w-4xl whitespace-pre-line">
            {t('home.s2.title')}
          </h2>
          <p className="font-body text-xl md:text-2xl text-[var(--color-outline)] leading-relaxed font-medium max-w-2xl text-pretty">
            {t('home.s2.desc')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            t('home.s2.list1'),
            t('home.s2.list2'),
            t('home.s2.list3'),
            t('home.s2.list4'),
            t('home.s2.list5')
          ].map((item, idx) => (
            <article 
              key={idx} 
              className="p-8 surface-tier-2 hover:surface-tier-3 transition-colors group shadow-sm flex items-start gap-4 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md"
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
              <h3 className="font-headline text-xl text-on-surface group-hover:text-tertiary transition-colors">{item}</h3>
            </article>
          ))}
        </div>
        
        <div className="bg-tertiary text-on-tertiary p-10 md:p-16 text-center max-w-5xl mx-auto shadow-xl">
           <p className="font-body text-xl md:text-2xl leading-relaxed font-medium mb-8">
             {t('home.s2.conclusion')}
           </p>
           <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label text-sm uppercase tracking-[0.1em] font-bold hover:bg-white hover:text-tertiary transition-colors">
            {t('home.s2.cta')}
          </Link>
        </div>
      </section>

      {/* Trust Carousel */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
          <h3 className="font-label text-sm uppercase tracking-[0.2em] text-[var(--color-primary)] font-bold">
            {t('home.carousel.title')}
          </h3>
        </div>
        <div className="logo-carousel max-w-6xl mx-auto">
          <div className="logo-carousel-track">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div className="logo-carousel-item" key={i}>
                <div className="w-full h-full bg-[var(--color-surface-variant)] opacity-20 rounded animate-pulse flex items-center justify-center">
                  <span className="text-[10px] font-label text-[var(--color-outline)] uppercase">Logo {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 surface-tier-2 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-[var(--color-on-surface)] mb-4">
              {t('home.reviews.title')}
            </h2>
            <div className="flex justify-center gap-1 text-[#FFB800]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <div key={review} className="bg-white p-8 border border-[var(--color-surface-variant)] shadow-sm flex flex-col h-full">
                <p className="font-body text-[var(--color-outline)] italic leading-relaxed mb-6 flex-grow">
                  {t('home.reviews.placeholder1')}
                </p>
                <div className="border-t border-[var(--color-surface-variant)] pt-6 mt-auto">
                  <h4 className="font-headline font-bold text-[var(--color-on-surface)] text-sm">James T.</h4>
                  <p className="font-body text-xs text-[var(--color-outline)]">Founder, BrightFuture Labs</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 surface-tier-2 px-6 text-center border-t border-surface-variant">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mb-6 leading-tight text-pretty">
            {t('home.s3.title')}
          </h2>
          <p className="font-body text-xl text-outline leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
            {t('home.s3.subtitle')}
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tertiary text-on-tertiary font-label text-sm uppercase tracking-[0.1em] font-semibold hover:bg-primary transition-colors">
            {t('home.s3.cta')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
