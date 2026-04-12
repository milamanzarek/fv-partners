import { motion } from 'motion/react';
import { SEO } from '../../components/seo/SEO';

export const OurStory = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-background text-on-background selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title="Our Paradigm" 
        description="Structured for alpha. Driven by data. Our firm leverages elite strategic architecture and uncompromising quantitative analysis." 
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-24">
        {/* 1. Hero / Introduction */}
        <header className="flex flex-col items-center justify-center text-center mb-24">
          <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-6 tracking-tight font-semibold text-balance">
            Structured for Alpha.<br/>
            <span className="italic text-tertiary">Driven by Data.</span>
          </h1>
          <p className="font-body text-xl text-outline max-w-4xl mx-auto leading-relaxed text-balance">
            FV Partners was engineered to eliminate the gap between raw data and aggressive strategic growth. Founded on the principles of institutional rigor, our firm leverages uncompromising analytics and elite financial architecture.
          </p>
        </header>

        <section className="space-y-32">
          {/* 2. Foundation Section */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <h2 className="font-headline text-4xl text-on-surface mb-2 font-semibold text-balance">The Foundation and The Architecture</h2>
              <h3 className="font-label text-sm uppercase tracking-[0.2em] text-primary font-bold mb-8">Structural Integrity</h3>
              <div className="font-body text-lg leading-relaxed flex flex-col gap-5 text-on-surface">
                <p className="text-pretty">
                  We deploy institutional-grade analytical models to establish a baseline of operational certainty.
                </p>
                <p className="text-pretty text-outline">
                  Our approach is grounded in absolute precision—emphasizing data validation, risk mitigation, and uncompromising execution to protect enterprise valuation.
                </p>
                <p className="text-pretty text-outline">
                  By constructing an unassailable financial infrastructure, we ensure that every ledger and metric is pristine, audit-ready, and built to withstand macroeconomic volatility.
                </p>
              </div>
            </div>
            
            <figure className="order-1 lg:order-2 w-full max-w-md lg:ml-auto mx-auto aspect-[4/5] surface-tier-2 relative overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                alt="Architectural Foundation" 
                className="w-full h-full object-cover opacity-90 mix-blend-multiply grayscale contrast-125 transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </figure>
          </article>

          {/* 3. Strategy Section */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <figure className="w-full max-w-md lg:mr-auto mx-auto aspect-[4/5] surface-tier-2 relative overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                alt="Strategic Calculus" 
                className="w-full h-full object-cover opacity-90 mix-blend-multiply grayscale contrast-125 transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </figure>
            
            <div className="flex flex-col justify-center">
              <h2 className="font-headline text-4xl text-on-surface mb-2 font-semibold text-balance">The Strategy and The Calculus</h2>
              <h3 className="font-label text-sm uppercase tracking-[0.2em] text-primary font-bold mb-8">Aggressive Execution</h3>
              <div className="font-body text-lg leading-relaxed flex flex-col gap-5 text-on-surface">
                <p className="text-pretty">
                  Building upon our rigorous foundation, we deploy algorithmic forecasting and advanced financial modeling to force-multiply enterprise value.
                </p>
                <p className="text-pretty text-outline">
                  By transforming static analytics into offensive growth strategies, we optimize capital deployment and structure pathways for scaling organizations.
                </p>
                <p className="text-pretty text-outline">
                  This execution methodology represents the true "Future Value" mechanism. We ensure organizations are not merely protected, but are perfectly structured for aggressive market capture.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* 4. Final Quote / Philosophy */}
        <section className="mt-32 py-24 surface-tier-2 shadow-sm rounded-none px-6">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <blockquote className="font-headline text-3xl md:text-5xl italic text-on-surface leading-tight mb-10 text-balance">
              "We execute systemic, unyielding architecture to secure institutional dominance. Our clinical and detached methodologies are specifically engineered to eliminate margin of error."
            </blockquote>
            <p className="font-label text-sm uppercase tracking-[0.1em] text-tertiary font-bold">The Firm's Directive</p>
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default OurStory;
