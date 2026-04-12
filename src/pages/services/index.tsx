import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const Services = () => {
  const services = [
    {
      level: "Layer 01",
      title: "Absolute Structural Clarity",
      desc: "Before achieving scale, infrastructure must be flawless. We execute rigorous data audits to construct an unassailable financial foundation.",
      items: ["Comprehensive Ledgers", "Month-End Operations", "Financial Architecture", "Audit Preparation"]
    },
    {
      level: "Layer 02",
      title: "Quantitative Advisory",
      desc: "Move from static reporting to predictive modeling. We translate raw data into aggressive growth frameworks and operational capital strategies.",
      items: ["Fractional Controllership", "Cash Flow Engineering", "KPI Analytics", "Algorithmic Forecasting"]
    },
    {
      level: "Layer 03",
      title: "M&A and Capital Defense",
      desc: "Maximize asset vectors. We structure robust frameworks for exits, acquisitions, and comprehensive enterprise valuations.",
      items: ["Tax Mitigation Structures", "Enterprise Valuation", "Risk Modeling", "Exit Execution"]
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
        title="Corporate Architecture" 
        description="A deterministic progression from foundational structure to institutional dominance." 
      />
      
      <header className="pt-32 pb-24 px-6 md:px-12 text-center shrink-0">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-headline text-5xl md:text-7xl text-on-surface mb-6 tracking-tight font-semibold"
        >
          The Architecture of <span className="italic text-tertiary">Scale</span>
        </motion.h1>
        <p className="font-body text-xl text-outline max-w-4xl mx-auto">
          A deterministic progression from foundational structure to institutional dominance.
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
                className={`surface-tier-2 p-10 flex flex-col hover:surface-tier-3 transition-colors shadow-lg min-h-[500px] ${
                  idx === 0 ? 'lg:mt-24' : idx === 1 ? 'lg:mt-12' : 'lg:mt-0'
                }`}
              >
                <div className="flex items-center justify-between mb-10 shrink-0">
                  <span className="text-primary font-label text-xs font-bold uppercase tracking-[0.2em]">{service.level}</span>
                  <div className="w-10 h-10 rounded-full surface-tier-3 flex items-center justify-center text-tertiary font-label text-xs font-bold shadow-sm">
                    0{idx + 1}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h2 className="font-headline text-3xl font-semibold text-on-surface mb-6 leading-tight text-balance">
                    {service.title}
                  </h2>
                  <p className="font-body text-outline text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-12 pt-8 shrink-0">
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-on-surface font-body text-sm">
                        <span className="text-secondary font-bold select-none">✦</span>
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
      <aside className="py-16 px-6 surface-tier-2 shrink-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col gap-2">
            <h2 className="font-headline text-3xl text-on-surface tracking-tight italic font-semibold">
              Ready to execute?
            </h2>
            <p className="font-body text-outline text-lg tracking-wide">
              Our strategic deployment initiates with a comprehensive diagnostic.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-tertiary text-on-tertiary font-label text-sm uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors shadow-xl flex items-center gap-3 whitespace-nowrap"
          >
            Initiate Diagnostic
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>
    </motion.main>
  );
};

export default Services;
