import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      level: "Level 01",
      title: "Foundational Financial Clarity",
      desc: "Before you can scale, you must understand the story your numbers are telling. We handle the rigorous details so you have a pristine, audit-ready foundation.",
      items: ["Comprehensive Bookkeeping", "Month-End Close & Reporting", "Financial Infrastructure", "Audit Readiness"]
    },
    {
      level: "Level 02",
      title: "Strategic Growth & Advisory",
      desc: "Move from stress to strategy. We bridge the gap between raw data and actionable growth plans, providing clarity before you reach the full-time CFO stage.",
      items: ["Fractional CFO Services", "Cash Flow Forecasting", "KPI Dashboarding", "Budgeting & Analysis"]
    },
    {
      level: "Level 03",
      title: "Future Value & Legacy",
      desc: "Protect and maximize what you've built. We offer forward-looking strategies to ensure your wealth transfers smoothly to the next generation.",
      items: ["Strategic Tax Positioning", "Wealth Preservation", "Business Valuation", "Exit Strategy"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-background text-cream flex flex-col overflow-hidden"
    >
      <header className="pt-32 pb-12 px-6 md:px-12 text-center shrink-0">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-heading text-5xl md:text-7xl text-cream mb-4 tracking-tight font-semibold whitespace-nowrap"
        >
          The Path to <span className="italic text-accent">Future Value</span>
        </motion.h1>
        <p className="font-body text-lg text-muted max-w-4xl mx-auto">
          A deliberate progression from foundational clarity to generational legacy.
        </p>
      </header>

      {/* 2. Content Row (The Ladder) */}
      <div className="flex-grow flex items-center px-6 md:px-12 pb-12 max-w-7xl mx-auto w-full">
        <div className="relative w-full">
          {/* Connecting ascending line */}
          <div className="hidden lg:block absolute top-[60%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-secondary via-accent to-accent opacity-20 transform -translate-y-1/2 -rotate-[10deg] z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10 w-full">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`bg-surface/30 backdrop-blur-md border border-white/10 p-10 flex flex-col hover:border-accent/50 transition-colors shadow-2xl min-h-[500px] rounded-none ${
                  idx === 0 ? 'lg:mt-24' : idx === 1 ? 'lg:mt-12' : 'lg:mt-0'
                }`}
              >
                <div className="flex items-center justify-between mb-10 shrink-0">
                  <span className="text-accent font-ui text-[10px] font-bold uppercase tracking-[0.2em]">{service.level}</span>
                  <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center border border-secondary/30 text-secondary font-ui text-[10px] font-bold">
                    {idx + 1}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h2 className="font-heading text-2xl text-cream mb-6 leading-tight whitespace-nowrap">
                    {service.title}
                  </h2>
                  <p className="font-body text-muted text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <ul className="space-y-4 mt-10 pt-8 border-t border-white/10 shrink-0">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-cream font-body text-[13px]">
                      <span className="text-accent mt-0.5 text-[10px]">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CTA Footer Row */}
      <footer className="py-8 px-6 bg-surface/40 border-t border-white/5 shrink-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl text-white tracking-tight italic mb-1">
              Ready to secure your legacy?
            </h2>
            <p className="font-body text-muted text-xs tracking-wide">
              Our principled stewardship starts with a single dialogue.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="btn-primary"
          >
            Initiate Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </motion.div>
  );
};

export default Services;
