import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { NewLogo } from '../../components/ui/NewLogo';
import { SEO } from '../../components/seo/SEO';

export const Home = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-background text-on-background selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title="Absolute Data. Institutional Precision." 
        description="Executing uncompromising financial architecture. We transform complex data into institutional-grade roadmaps for enterprise scale and capital acquisition." 
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative pt-20 surface-tier-1">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 text-primary"
        >
          <NewLogo className="w-32 h-32 md:w-48 md:h-48 drop-shadow-xl" />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-headline text-5xl md:text-7xl font-semibold text-on-surface mb-4 leading-tight tracking-tight text-balance"
        >
          Absolute Data.<br />
          <span className="italic text-tertiary">Institutional Precision.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-body text-xl text-outline max-w-2xl mx-auto mb-8 leading-relaxed text-balance"
        >
          Executing uncompromising financial architecture. We transform complex data into institutional-grade roadmaps for enterprise scale and capital acquisition.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <Link to="/story" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tertiary text-on-tertiary font-label text-sm uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors shadow-lg">
            Review Operating Paradigm <ArrowRight className="w-4 h-4" />
          </Link>
          
          <a href="tel:+13105550198" className="inline-flex items-center gap-2 text-outline font-label text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors group">
            <Phone className="w-3.5 h-3.5 text-tertiary group-hover:scale-110 transition-transform" />
            Execute Inquiry
          </a>
        </motion.div>
      </section>

      {/* Value Props Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Algorithmic Precision", desc: "A high-performance quantitative approach blending rigorous analysis with aggressive strategic innovation." },
            { title: "Structural Dominance", desc: "Providing ruthless foundational clarity before the capital event, ensuring unassailable positions." },
            { title: "Absolute Architecture", desc: "Executing clinical financial services and strict data methodologies to eliminate operational vulnerabilities." }
          ].map((prop, idx) => (
            <article 
              key={idx} 
              className="p-10 surface-tier-2 hover:surface-tier-3 transition-colors group shadow-sm flex flex-col"
            >
              <h3 className="font-headline text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors text-balance">{prop.title}</h3>
              <p className="font-body text-outline leading-relaxed text-pretty">{prop.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Quote Band Section */}
      <section className="py-24 surface-tier-2 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center md:items-start md:text-left">
          <blockquote className="font-headline text-3xl md:text-5xl italic text-on-surface leading-tight mb-8 text-balance">
            "Operational alpha is derived from absolute financial clarity. It is the unyielding foundation of institutional dominance."
          </blockquote>
          <p className="font-label text-sm uppercase tracking-[0.1em] text-tertiary font-semibold">The Firm's Directive</p>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
