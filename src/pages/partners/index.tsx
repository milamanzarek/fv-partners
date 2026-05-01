import { motion } from 'motion/react';
import { SEO } from '../../components/seo/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Target } from 'lucide-react';

export const Partners = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-[var(--color-surface)]"
    >
      <SEO 
        title="Clients & Ecosystem Partners" 
        description="Discover the businesses, strategic consultants, and organizations that partner with FV Partners." 
      />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="font-headline text-4xl md:text-6xl text-[var(--color-on-surface)] mb-6 font-bold tracking-tight text-balance">
          Clients & Ecosystem Partners
        </h1>
        <p className="font-body text-xl md:text-2xl text-[var(--color-outline)] max-w-3xl mx-auto leading-relaxed text-pretty font-medium mb-12">
          We collaborate with top-tier organizations and strategic innovators to deliver comprehensive financial and operational solutions.
        </p>
      </section>

      {/* Partners Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Kamilla - AI/Marketing Partner */}
          <article className="surface-tier-2 p-10 flex flex-col items-center justify-center text-center shadow-sm border border-[var(--color-surface-variant)] group hover:border-[var(--color-primary)] transition-colors h-full">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform overflow-hidden shadow-sm border border-[var(--color-surface-variant)] bg-white">
               <img src="https://res.cloudinary.com/dp9lnazkj/image/upload/v1772235120/Kamilla_-_Personal_Brand_Board_3_kwhcca.webp" alt="Kamilla Gafurzianova, OLY" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-[var(--color-on-surface)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
              Kamilla Gafurzianova, OLY
            </h2>
            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-[var(--color-outline)] font-bold mb-4">
              AI Orchestration & Marketing Automation Partner
            </h3>
            <p className="font-body text-sm text-[var(--color-outline)] leading-relaxed mb-8 text-balance">
              Integrating advanced AI workflows, intelligent automation, and data-driven marketing orchestration to supercharge business growth and operational efficiency.
            </p>
            <a 
              href="https://www.kamilla.coach/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto font-label text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-tertiary)] flex items-center gap-2 group-hover:text-[var(--color-primary)] transition-colors"
            >
              Visit Website <ArrowRight className="w-4 h-4" />
            </a>
          </article>

          {/* Tuganlyq - Featured Client / Ecosystem Partner */}
          <article className="surface-tier-2 p-10 flex flex-col items-center justify-center text-center shadow-sm border border-[var(--color-surface-variant)] group hover:border-[var(--color-primary)] transition-colors h-full">
            <div className="w-full h-16 flex items-center justify-center mb-6">
               <img 
                 src="https://res.cloudinary.com/dp9lnazkj/image/upload/f_webp/q_auto:best/Tuganlyq-logo-full-color_l6osyb.png" 
                 alt="Tuganlyq Logo" 
                 className="max-h-full max-w-[200px] object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
               />
            </div>
            <h2 className="font-headline text-2xl font-bold text-[var(--color-on-surface)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
              Tuganlyq
            </h2>
            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-[var(--color-outline)] font-bold mb-4">
              Featured Ecosystem Client
            </h3>
            <p className="font-body text-sm text-[var(--color-outline)] leading-relaxed mb-8 text-balance">
              A premier non-profit organization focused on community empowerment and development, relying on FV Partners for uncompromising financial architecture and compliance.
            </p>
            <div className="mt-auto font-label text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-tertiary)] flex items-center gap-2">
              <Target className="w-4 h-4" /> Non-Profit Sector
            </div>
          </article>

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
