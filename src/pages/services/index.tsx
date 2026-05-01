import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { useI18n } from '../../context/I18nContext';

export const Services = () => {
  const { t } = useI18n();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const services = [
    {
      level: t("CLARITY"),
      colorClass: "text-primary",
      shortTitle: t("Bookkeeping"),
      title: t('Fractional Bookkeeping & Controllership'),
      desc: t('Your bookkeeping is the foundation of every financial decision you make. We ensure your transactions are accurately recorded, categorized, and reconciled - so you always know exactly where your money is going and how your business is performing.'),
      icon: "https://res.cloudinary.com/dp9lnazkj/image/upload/f_webp/q_auto:best/mark-only-brand-green_yl1cd2.png",
      bgImage: "https://res.cloudinary.com/dp9lnazkj/image/upload/v1777564512/semi-transparent-grey-hex_wgepaq.png",
      items: [
        t('Prevents costly errors, missed expenses, and profit leakage'), 
        t('Provides clear visibility into cash flow so you can avoid shortages'), 
        t('Enables faster, more informed operational decisions'), 
        t('Keeps your financial records capital-ready and audit-ready')
      ]
    },
    {
      level: t("GROWTH"),
      colorClass: "text-secondary",
      shortTitle: t("Accounting Services"),
      title: t('Accounting Services & Reporting'),
      desc: t('We go beyond basic bookkeeping by delivering structured financial reporting and analysis that helps you understand your margins, identify inefficiencies, and optimize financial performance.'),
      icon: "https://res.cloudinary.com/dp9lnazkj/image/upload/f_webp/q_auto:best/mark-only-brand-blue_dfakon.png",
      bgImage: "https://res.cloudinary.com/dp9lnazkj/image/upload/v1777564516/light-grey-hex_plmupt.png",
      items: [
        t('Identifies your most and least profitable products, services, and clients'), 
        t('Helps control costs and improve operating margins'), 
        t('Provides timely monthly financial statements to guide decision-making'), 
        t('Enables better budgeting, forecasting, and performance tracking')
      ]
    },
    {
      level: t("CAPITAL"),
      colorClass: "text-tertiary",
      shortTitle: t("Fractional CFO Advisory"),
      title: t('Strategic CFO Services & Exit Planning'),
      desc: t('Our fractional CFO advisory services provide executive-level financial strategy to help you scale profitably, improve cash flow, and maximize business value - without the expense of a full-time CFO.'),
      icon: "https://res.cloudinary.com/dp9lnazkj/image/upload/f_webp/q_auto:best/mark-only-full-color_1_jv49yi.png",
      bgImage: "https://res.cloudinary.com/dp9lnazkj/image/upload/v1777564545/washed-light-grey-hex_c0abbv.png",
      items: [
        t('Improves cash flow management and capital efficiency'), 
        t('Builds financial models and forecasts to support smarter growth decisions'), 
        t('Helps you price correctly, increase margins, and optimize profitability'), 
        t('Prepares your business for fundraising, lending, or exit opportunities')
      ]
    }
  ];

  const hexagonClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-background text-on-background flex flex-col overflow-hidden selection:bg-primary selection:text-on-primary min-h-screen"
    >
      <SEO 
        title={t('nav.services')} 
        description={t('Accurate Financial Data to Run and Scale Your Business')} 
      />
      
      <header className="pt-32 pb-4 px-6 md:px-12 text-center shrink-0">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 tracking-tight font-bold md:whitespace-nowrap"
        >
          {t('Take Control of Your Financial Future Today')}
        </motion.h1>
        <p className="font-body text-xl text-outline max-w-4xl mx-auto font-medium">
          {t('From accurate books to actionable insights, we help growing businesses make confident decisions and scale smarter.')}
        </p>
      </header>

      {/* Content Row (The Honeycomb Ladder) */}
      <section className="flex-grow flex items-center justify-center px-6 md:px-12 pb-24 w-full">
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Subtle Background Geometry */}
          <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-[2rem]">
            <img src={services[0].bgImage} alt="" className="absolute -top-32 -left-32 w-[32rem] h-[32rem] object-contain transform -rotate-12 opacity-50" />
            <img src={services[1].bgImage} alt="" className="absolute top-1/4 -right-24 w-[28rem] h-[28rem] object-contain transform rotate-12 opacity-50" />
            <img src={services[2].bgImage} alt="" className="absolute -bottom-40 left-1/4 w-[40rem] h-[40rem] object-contain opacity-50" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center relative z-10 w-full pt-16 pb-32 max-w-[1400px] mx-auto">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`flex relative ${
                  idx === 0 ? 'md:translate-y-32 md:translate-x-16 z-10' : 
                  idx === 1 ? 'z-20' : 
                  'md:-translate-y-32 md:-translate-x-16 z-30'
                } -my-8 md:my-0 transition-transform duration-500 hover:z-50`}
              >
                <motion.button 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(idx)}
                  className="relative w-80 h-[370px] sm:w-[360px] sm:h-[416px] lg:w-[460px] lg:h-[531px] group focus:outline-none"
                >
                  <div 
                    className="absolute inset-0 bg-surface-tier-2 shadow-xl transition-colors duration-300 group-hover:bg-surface-tier-3 flex flex-col items-center justify-center p-8 cursor-pointer relative"
                    style={{ clipPath: hexagonClip, WebkitClipPath: hexagonClip }}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply pointer-events-none transition-opacity duration-300 group-hover:opacity-60"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />
                    <div className="absolute inset-[1px] bg-surface-tier-2/90 transition-colors duration-300 group-hover:bg-surface-tier-3/90" style={{ clipPath: hexagonClip, WebkitClipPath: hexagonClip }}></div>
                    
                    <div className="relative z-10 flex flex-col items-center w-full">
                      <div className="w-24 h-24 lg:w-40 lg:h-40 mb-8 shrink-0 transform transition-transform duration-500 group-hover:scale-110">
                        <img src={service.icon} alt={`${service.level} mark`} className="w-full h-full object-contain drop-shadow-sm" />
                      </div>
                      <span className={`${service.colorClass} font-label text-xs font-bold uppercase tracking-[0.2em] mb-4`}>
                        {service.level}
                      </span>
                      <h2 className="font-headline text-xl lg:text-2xl font-bold text-on-surface leading-tight text-balance text-center px-8 lg:px-16 max-w-[90%]">
                        {service.shortTitle}
                      </h2>
                    </div>
                    
                    <div className="absolute bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className={`${service.colorClass} text-2xl font-light`}>+</span>
                    </div>
                  </div>
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Row */}
      <aside className="py-16 px-6 surface-tier-2 shrink-0 border-t border-surface-variant/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col gap-2">
            <h2 className="font-headline text-3xl text-on-surface tracking-tight font-bold">
              {t('Ready For Clarity And Growth?')}
            </h2>
            <p className="font-body text-outline text-lg tracking-wide">
              {t('Book your complimentary consultation and discover how FV Partners can help you scale with confidence.')}
            </p>
          </div>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-tertiary text-on-tertiary font-label text-sm uppercase tracking-[0.1em] font-semibold hover:bg-primary transition-colors shadow-lg flex items-center gap-3 whitespace-nowrap rounded-sm"
          >
            {t('GET STARTED')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>

      {/* The Blow-Up Modal (Giant Hexagon) */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 2 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl md:aspect-[1/1.1] flex items-center justify-center my-auto"
            >
              {/* Desktop Giant Hexagon Background */}
              <div 
                className="absolute inset-0 bg-surface-tier-2 shadow-2xl hidden md:block overflow-hidden"
                style={{ clipPath: hexagonClip, WebkitClipPath: hexagonClip }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-multiply pointer-events-none"
                  style={{ backgroundImage: `url(${services[selectedService].bgImage})` }}
                />
              </div>
              {/* Mobile Rounded Background */}
              <div className="absolute inset-0 bg-surface-tier-2 shadow-2xl md:hidden rounded-3xl border border-surface-variant/50" />
              
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 md:top-24 md:right-24 w-12 h-12 flex items-center justify-center rounded-full bg-surface-variant hover:bg-surface-tier-3 text-on-surface transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10 w-full p-8 py-16 md:p-32 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 shrink-0">
                  <img src={services[selectedService].icon} alt={`${services[selectedService].level} mark`} className="w-full h-full object-contain drop-shadow-sm" />
                </div>
                <span className={`${services[selectedService].colorClass} font-label text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4`}>
                  {services[selectedService].level}
                </span>
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-6 md:mb-8 leading-tight text-balance">
                  {services[selectedService].title}
                </h2>
                <p className="font-body text-outline text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mb-12">
                  {services[selectedService].desc}
                </p>

                <div className="w-full max-w-4xl mx-auto">
                  <h3 className="font-label text-sm font-bold text-on-surface uppercase tracking-[0.15em] mb-8 opacity-70">
                    {t('How this makes you more money')}
                  </h3>
                  
                  {/* Small Hexagons Inside Giant Hexagon */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-items-center">
                    {services[selectedService].items.map((item, i) => (
                      <div 
                        key={i} 
                        className="relative w-full md:w-64 md:h-72 lg:w-72 lg:h-80 flex items-center justify-center p-6 group"
                      >
                        {/* Desktop Hexagon Cell */}
                        <div 
                          className="absolute inset-0 bg-surface-tier-3/50 hidden md:block group-hover:bg-surface-tier-3 transition-colors duration-300"
                          style={{ clipPath: hexagonClip, WebkitClipPath: hexagonClip }}
                        />
                        {/* Mobile Rounded Cell */}
                        <div className="absolute inset-0 bg-surface-tier-3/50 rounded-2xl md:hidden group-hover:bg-surface-tier-3 transition-colors duration-300" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center gap-4 px-2">
                          <span className={`${services[selectedService].colorClass} font-bold select-none text-2xl`}>✦</span>
                          <p className="font-body text-sm lg:text-base text-on-surface leading-relaxed text-pretty">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Services;
