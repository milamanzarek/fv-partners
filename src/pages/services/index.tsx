import { motion } from 'motion/react';
import { ArrowRight, FileText, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';
import { useI18n } from '../../context/I18nContext';

export const Services = () => {
  const { t } = useI18n();

  const services = [
    {
      level: "Level 1",
      title: t('Fractional Bookkeeping & Controllership'),
      subtitle: t('Accurate Financial Data to Run and Scale Your Business'),
      desc: t('Your bookkeeping is the foundation of every financial decision you make. We ensure your transactions are accurately recorded, categorized, and reconciled - so you always know exactly where your money is going and how your business is performing.'),
      icon: <FileText className="w-6 h-6 text-tertiary" />,
      items: [
        t('Prevents costly errors, missed expenses, and profit leakage'), 
        t('Provides clear visibility into cash flow so you can avoid shortages'), 
        t('Enables faster, more informed operational decisions'), 
        t('Keeps your financial records capital-ready and audit-ready')
      ]
    },
    {
      level: "Level 2",
      title: t('ACCOUNTING SERVICES'),
      subtitle: t('Financial Reporting That Improves Profitability'),
      desc: t('We go beyond basic bookkeeping by delivering structured financial reporting and analysis that helps you understand your margins, identify inefficiencies, and optimize financial performance.'),
      icon: <BarChart3 className="w-6 h-6 text-tertiary" />,
      items: [
        t('Identifies your most and least profitable products, services, and clients'), 
        t('Helps control costs and improve operating margins'), 
        t('Provides timely monthly financial statements to guide decision-making'), 
        t('Enables better budgeting, forecasting, and performance tracking')
      ]
    },
    {
      level: "Level 3",
      title: t('Strategic CFO Services & Exit Planning'),
      subtitle: t('Strategic Financial Leadership, Fractional Cost'),
      desc: t('Our CFO advisory services provide executive-level financial strategy to help you scale profitably, improve cash flow, and maximize business value - without the expense of a full-time CFO.'),
      icon: <TrendingUp className="w-6 h-6 text-tertiary" />,
      items: [
        t('Improves cash flow management and capital efficiency'), 
        t('Builds financial models and forecasts to support smarter growth decisions'), 
        t('Helps you price correctly, increase margins, and optimize profitability'), 
        t('Prepares your business for fundraising, lending, or exit opportunities')
      ]
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-background text-on-background flex flex-col overflow-hidden selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title={t('nav.services')} 
        description={t('Accurate Financial Data to Run and Scale Your Business')} 
      />
      
      <header className="pt-32 pb-24 px-6 md:px-12 text-center shrink-0">
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

      {/* 2. Content Row (The Ladder) */}
      <section className="flex-grow flex items-center px-6 md:px-12 pb-24 max-w-7xl mx-auto w-full">
        <div className="relative w-full">
          {/* Visual depth element instead of a connecting line */}
          <div className="hidden lg:block absolute inset-0 bg-surface-container-lowest shadow-[0_0_80px_rgba(42,160,28,0.05)] transform -skew-y-2 z-0 scale-105"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10 w-full">
            {services.map((service, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`surface-tier-2 p-10 flex flex-col hover:surface-tier-3 transition-colors shadow-sm border border-surface-variant min-h-[500px] ${
                  idx === 0 ? 'lg:mt-24' : idx === 1 ? 'lg:mt-12' : 'lg:mt-0'
                }`}
              >
                <div className="flex items-center justify-between mb-8 shrink-0">
                  <span className="text-primary font-label text-xs font-bold uppercase tracking-[0.2em]">{service.level}</span>
                  <div className="w-10 h-10 rounded-full surface-tier-3 flex items-center justify-center text-tertiary font-label text-xs font-bold shadow-sm">
                    0{idx + 1}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-2 leading-tight text-balance">
                    {service.title}
                  </h2>
                  <h3 className="font-label text-sm font-semibold text-tertiary mb-6 uppercase tracking-wider">{service.subtitle}</h3>
                  <p className="font-body text-outline text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-10 pt-8 shrink-0 border-t border-surface-variant">
                  <p className="font-bold text-sm text-tertiary mb-4 uppercase">{t('How this makes you more money:')}</p>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-on-surface font-body text-sm leading-relaxed">
                        <span className="text-primary font-bold select-none shrink-0 mt-0.5">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Footer Row */}
      <aside className="py-16 px-6 surface-tier-2 shrink-0 border-t border-surface-variant">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col gap-2">
            <h2 className="font-headline text-3xl text-on-surface tracking-tight font-bold">
              {t('READY FOR CLARITY AND GROWTH?')}
            </h2>
            <p className="font-body text-outline text-lg tracking-wide">
              {t('Book your complimentary consultation and discover how FV Partners can help you scale with confidence.')}
            </p>
          </div>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-tertiary text-on-tertiary font-label text-sm uppercase tracking-[0.1em] font-semibold hover:bg-primary transition-colors shadow-lg flex items-center gap-3 whitespace-nowrap"
          >
            {t('GET STARTED')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>
    </motion.main>
  );
};

export default Services;
