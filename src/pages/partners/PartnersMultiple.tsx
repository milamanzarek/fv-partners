import { motion } from 'motion/react';
import { SEO } from '../../components/seo/SEO';
import { Link } from 'react-router-dom';
import { Handshake, ArrowRight } from 'lucide-react';

export const Partners = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-[var(--color-surface)]"
    >
      <SEO 
        title="Our Partners" 
        description="Discover the businesses and organizations that partner with FV Partners." 
      />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="font-headline text-4xl md:text-6xl text-[var(--color-on-surface)] mb-6 font-bold tracking-tight text-balance">
          Strategic Partnerships
        </h1>
        <p className="font-body text-xl md:text-2xl text-[var(--color-outline)] max-w-3xl mx-auto leading-relaxed text-pretty font-medium mb-12">
          We collaborate with top-tier organizations across the United States to deliver comprehensive financial solutions.
        </p>
      </section>

      {/* Partners Grid (Placeholder) */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="surface-tier-2 p-12 flex flex-col items-center justify-center text-center shadow-sm h-64 border border-[var(--color-surface-variant)] group hover:border-[var(--color-primary)] transition-colors">
               <Handshake className="w-12 h-12 text-[var(--color-outline)] opacity-20 mb-4 group-hover:text-[var(--color-primary)] group-hover:opacity-100 transition-all duration-300" />
               <span className="font-label text-sm uppercase tracking-[0.2em] text-[var(--color-outline)] group-hover:text-[var(--color-primary)] transition-colors">
                 Partner {i} Placeholder
               </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 surface-tier-3 px-6 text-center border-t border-[var(--color-surface-variant)]">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-[var(--color-on-surface)] mb-6 leading-tight text-pretty">
            Interested in partnering with us?
          </h2>
          <p className="font-body text-xl text-[var(--color-outline)] leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
            Whether you provide complementary services or want to expand your offering, let's explore how we can grow together.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-label text-sm uppercase tracking-[0.1em] font-bold hover:bg-[var(--color-tertiary)] transition-colors shadow-lg">
            Reach Out <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </motion.div>
  );
};

export default Partners;
