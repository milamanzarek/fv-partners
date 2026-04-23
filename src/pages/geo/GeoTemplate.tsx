import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Target, ShieldCheck, FileText, BarChart3, TrendingUp } from 'lucide-react';
import { getGeoRouteData, CITIES, SERVICES } from '../../data/geoMatrix';
import { SEO } from '../../components/seo/SEO';
import { NewLogo } from '../../components/ui/NewLogo';
import { useI18n } from '../../context/I18nContext';

export const GeoTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  
  if (!slug) return <Navigate to="/404" replace />;
  
  // Check if it's a specific city-service combo
  const data = getGeoRouteData(slug);
  
  if (data) {
    const { city, service } = data;

    return (
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="bg-background text-on-background selection:bg-primary selection:text-on-primary"
      >
        <SEO 
          title={`${t(service.name)} | FV Partners`} 
          description={`${t('geo.strategic')} ${t(service.name)} ${t('geo.for')} ${t(city.industryFocus)}.`} 
        />
        
        {/* Hyper-Local Hero (Aligned with Home page) */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative pt-20 surface-tier-3 bg-white">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-10 text-tertiary"
          >
            <NewLogo className="w-32 h-32 md:w-48 md:h-48 drop-shadow-xl mx-auto" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <span className="font-label text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {t('geo.serving')} {t(city.name)}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-headline text-4xl md:text-6xl font-bold text-on-surface mb-6 leading-tight tracking-tight text-pretty max-w-4xl mx-auto"
          >
            {t('geo.strategic')} {t(service.name)} {t('geo.for')} {t(city.industryFocus)}
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-body text-xl md:text-2xl text-outline max-w-3xl mx-auto mb-10 leading-relaxed text-pretty font-medium"
          >
            {t(service.description)} {t('geo.elite')} {t(city.context)}.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <Link to={`/contact?lang=${t('nav.home') === 'Главная' ? 'ru' : 'en'}`} className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-tertiary text-on-tertiary font-label text-base uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors shadow-lg">
              {t('geo.cta_btn')} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* Localized Content Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface mb-6 leading-snug tracking-tight text-pretty max-w-4xl">
              {t('geo.why')} {t(city.name)} {t('geo.businesses_choose')}
            </h2>
            <p className="font-body text-xl text-outline leading-relaxed font-medium max-w-2xl text-pretty">
              {t('geo.intro1')} {t(city.name)}{t('geo.intro2')} {t(city.industryFocus)}{t('geo.intro3')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <article className="p-8 surface-tier-2 hover:surface-tier-3 transition-colors group shadow-sm flex items-start gap-4 w-full md:w-[calc(50%-12px)] max-w-xl">
              <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-headline text-xl text-on-surface group-hover:text-tertiary transition-colors mb-2">{t('geo.customized')}</h3>
                <p className="font-body text-outline leading-relaxed text-pretty">
                  {t('geo.approach1')} {t(service.name)} {t('geo.approach2')}
                </p>
              </div>
            </article>

            {service.complianceNote && (
              <article className="p-8 surface-tier-2 hover:surface-tier-3 transition-colors group shadow-sm flex items-start gap-4 w-full md:w-[calc(50%-12px)] max-w-xl">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl text-on-surface group-hover:text-tertiary transition-colors mb-2">{t('geo.fed_auth')}</h3>
                  <p className="font-body text-outline leading-relaxed text-pretty">
                    {t(service.complianceNote)}
                  </p>
                </div>
              </article>
            )}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-tertiary text-on-tertiary p-10 md:p-16 text-center max-w-5xl mx-auto shadow-xl mb-24 mx-6">
           <h2 className="font-headline text-3xl font-bold mb-6 tracking-tight">{t('geo.cta_title')}</h2>
           <p className="font-body text-xl leading-relaxed font-medium mb-8 max-w-2xl mx-auto text-pretty">
             {t('geo.cta_body')}
           </p>
           <Link to={`/contact?lang=${t('nav.home') === 'Главная' ? 'ru' : 'en'}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label text-sm uppercase tracking-[0.1em] font-bold hover:bg-white hover:text-tertiary transition-colors">
            {t('geo.cta_btn')}
          </Link>
        </section>

      </motion.main>
    );
  }

  // Fallback: Check if it's JUST a city hub page
  const cityObj = CITIES.find(c => c.id === slug);
  if (cityObj) {
    return (
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="bg-background text-on-background selection:bg-primary selection:text-on-primary"
      >
        <SEO 
          title={`Financial Services in ${t(cityObj.name)} | FV Partners`} 
          description={`Fractional CFO services for businesses in ${t(cityObj.name)}.`} 
        />
        
        {/* Hyper-Local Hero */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative pt-20 surface-tier-3 bg-white">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-10 text-tertiary"
          >
            <NewLogo className="w-32 h-32 md:w-48 md:h-48 drop-shadow-xl mx-auto" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <span className="font-label text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {t('geo.serving')} {t(cityObj.name)}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-headline text-4xl md:text-6xl font-bold text-on-surface mb-6 leading-tight tracking-tight text-pretty max-w-4xl mx-auto"
          >
            {t('geo.growth')}
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-body text-xl md:text-2xl text-outline max-w-3xl mx-auto mb-10 leading-relaxed text-pretty font-medium"
          >
            {t('geo.providing')} {t(cityObj.industryFocus)} {t('geo.operating')} {t(cityObj.name)}.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <Link to={`/contact?lang=${t('nav.home') === 'Главная' ? 'ru' : 'en'}`} className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-tertiary text-on-tertiary font-label text-base uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors shadow-lg">
              {t('geo.cta_btn')} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* Services List (Home Page Style) */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface mb-8 leading-snug tracking-tight text-pretty">
              {t('geo.advisory')}
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {SERVICES.map((service) => (
              <Link 
                key={service.id} 
                to={`/${cityObj.id}-${service.id}`}
                className="p-8 surface-tier-2 hover:surface-tier-3 transition-colors group shadow-sm flex flex-col gap-4 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                  <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">{t(service.name)}</h3>
                </div>
                <p className="font-body text-outline text-sm leading-relaxed flex-grow">
                  {t(service.description)}
                </p>
                <div className="mt-4 pt-4 border-t border-surface-variant flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-bold">
                  {t('geo.view')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-tertiary text-on-tertiary p-10 md:p-16 text-center max-w-5xl mx-auto shadow-xl mb-24 mx-6">
           <h2 className="font-headline text-3xl font-bold mb-6 tracking-tight">{t('geo.cta_hub_title')} {t(cityObj.name).toUpperCase()} {t('geo.cta_hub_title2')}</h2>
           <p className="font-body text-xl leading-relaxed font-medium mb-8 max-w-2xl mx-auto text-pretty">
             {t('geo.cta_body')}
           </p>
           <Link to={`/contact?lang=${t('nav.home') === 'Главная' ? 'ru' : 'en'}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label text-sm uppercase tracking-[0.1em] font-bold hover:bg-white hover:text-tertiary transition-colors">
            {t('geo.get_started')}
          </Link>
        </section>

      </motion.main>
    );
  }

  // If neither matches, 404
  return <Navigate to="/404" replace />;
};

export default GeoTemplate;
