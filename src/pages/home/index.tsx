import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { NewLogo } from '../../components/ui/NewLogo';

export const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-background text-cream">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative pt-20">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 text-accent"
        >
          <NewLogo className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_15px_rgba(196,163,90,0.3)]" />
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-heading text-5xl md:text-7xl font-semibold text-cream mb-4 leading-tight tracking-tight text-balance"
        >
          Generational Wisdom.<br />
          <span className="italic text-accent">Future Value.</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-body text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed text-balance"
        >
          Cultivating your legacy with SoCal stewardship and deep familial care. We transform financial ambiguity into a clear, actionable roadmap for growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <Link to="/story" className="inline-flex items-center gap-2 text-cream font-ui text-sm uppercase tracking-[0.1em] hover:text-accent transition-colors pb-1 border-b border-accent/30 hover:border-accent">
            Discover Our Story <ArrowRight className="w-4 h-4" />
          </Link>
          
          <a href="tel:+13105550198" className="inline-flex items-center gap-2 text-muted font-ui text-[10px] uppercase tracking-[0.2em] hover:text-accent transition-colors group">
            <Phone className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
            Call Us Directly
          </a>
        </motion.div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-cream/10 md:border-y-0">
          {[
            { title: "Generational Synergy", desc: "A mother-daughter partnership blending seasoned expertise with contemporary strategic innovation." },
            { title: "Upstream Positioning", desc: "Providing foundational clarity before you reach the CFO stage, securing your path to growth." },
            { title: "Culturally-Rooted Care", desc: "Drawing from Bashqort roots to offer personal care and unity, contrasting clinical financial services." }
          ].map((prop, idx) => (
            <div key={idx} className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-cream/10 last:border-0 hover:border-accent/30 transition-colors group">
              <h3 className="font-heading text-2xl text-cream mb-3 group-hover:text-accent transition-colors text-balance">{prop.title}</h3>
              <p className="font-body text-muted leading-relaxed text-pretty">{prop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Band */}
      <section className="py-20 bg-surface/20 border-y border-white/5 px-6 text-center">
        <div className="max-w-4xl mx-auto border-l-4 border-accent pl-8 md:pl-12 text-left">
          <p className="font-heading text-3xl md:text-5xl italic text-cream leading-tight mb-6 text-balance">
            "Financial clarity isn't a luxury for the established; it is the very foundation that makes your growth possible."
          </p>
          <p className="font-ui text-sm uppercase tracking-[0.1em] text-accent">FV Partners Philosophy</p>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
