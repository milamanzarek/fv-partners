import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../../components/seo/SEO';

export const Insights = () => {
  const articles = [
    {
      category: "Growth & Profitability",
      date: "Oct 24, 2025",
      title: "Navigating US Tax Complexity: A Guide for Immigrant-Owned Businesses",
      excerpt: "Overwhelmed by IRS compliance and intricate tax structures? Discover how proactive bookkeeping reclaims your time and protects your hard-earned revenue from unnecessary liabilities.",
      featured: true,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
    },
    {
      category: "Capital Readiness",
      date: "Oct 18, 2025",
      title: "Scaling Beyond the Plateau: When to Upgrade Your Financial Reporting",
      excerpt: "If you are relying on basic cash-basis accounting, you are flying blind. Learn how accrual accounting and detailed margin analysis provide the clarity needed to scale confidently.",
      featured: false,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
    },
    {
      category: "Strategic Leadership",
      date: "Oct 12, 2025",
      title: "The Strategic Advantage of Fractional Financial Leadership",
      excerpt: "You do not need a full-time CFO to execute high-level strategy. See how a fractional CFO brings executive-level insight to optimize cash flow and prepare you for your next capital event.",
      featured: false,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    }
  ];

  const featuredArticle = articles.find(a => a.featured);
  const secondaryArticles = articles.filter(a => !a.featured);

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-background text-on-background flex flex-col overflow-hidden pt-20 selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title="Insights & Perspectives" 
        description="Explore articles and commentary from the Firm on wealth strategy, capital defense, and structural positioning." 
      />
      {/* 1. Header Row */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 pb-10 shrink-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 shadow-[0_1px_0_var(--color-outline-variant)]">
          <h1 className="font-headline text-5xl md:text-7xl text-on-surface tracking-tight whitespace-nowrap leading-none font-semibold">
            Institutional <span className="italic text-tertiary">Directives</span>
          </h1>
          <nav className="flex flex-wrap items-center gap-3 pb-2 md:pb-0" aria-label="Article Categories">
            {['All', 'Growth & Profitability', 'Capital Readiness', 'Strategic Leadership'].map((tag, i) => (
              <button 
                key={i} 
                className={`whitespace-nowrap px-5 py-2 cursor-pointer font-label text-[10px] uppercase tracking-[0.2em] transition-all duration-300 font-bold shadow-sm ${
                  i === 0 
                    ? 'bg-secondary text-on-secondary' 
                    : 'surface-tier-2 text-outline hover:surface-tier-3 hover:text-primary hover:shadow-md'
                }`}
              >
                {tag}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* 2. Content Row */}
      <section className="flex-grow flex items-center px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full h-full min-h-[600px]">
          {/* Main Featured Article (Left 2/3) */}
          {featuredArticle && (
            <div className="lg:col-span-2 h-full">
              <article 
                tabIndex={0}
                role="button"
                className="group cursor-pointer flex flex-col h-full focus:outline-none focus:ring-0 focus:shadow-xl p-8 surface-tier-2 hover:surface-tier-3 transition-all duration-500 rounded-none shadow-lg"
              >
                <figure className="overflow-hidden bg-[#0D2A4A] relative aspect-[21/9] mb-8 shrink-0">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 mix-blend-luminosity grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                </figure>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 shrink-0">
                    <span className="text-secondary font-label text-[10px] font-bold uppercase tracking-[0.2em]">{featuredArticle.category}</span>
                    <span className="text-outline font-label text-[10px] uppercase tracking-[0.2em]">• {featuredArticle.date}</span>
                  </div>
                  <h3 className="font-headline font-semibold text-on-surface leading-tight mb-4 group-hover:text-primary transition-colors text-balance text-3xl md:text-5xl">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-outline font-body text-base leading-relaxed mb-8 text-pretty max-w-2xl line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-tertiary font-label text-[10px] font-bold uppercase tracking-[0.2em]">
                    Read Diagnostic 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Secondary Articles Column (Right 1/3) */}
          <div className="flex flex-col gap-8 h-full">
            {secondaryArticles.map((article, idx) => (
              <article 
                key={idx} 
                tabIndex={0} 
                role="button"
                className="group cursor-pointer flex flex-col focus:outline-none focus:ring-0 focus:shadow-xl p-6 surface-tier-2 hover:surface-tier-3 transition-all duration-500 rounded-none flex-1 shadow-md"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3 shrink-0">
                    <span className="text-secondary font-label text-[10px] font-bold uppercase tracking-[0.2em]">{article.category}</span>
                  </div>
                  <h3 className="font-headline font-semibold text-on-surface leading-tight mb-3 group-hover:text-primary transition-colors text-balance text-xl md:text-2xl line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="text-outline font-body text-[13px] leading-relaxed mb-6 text-pretty line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-tertiary font-label text-[10px] font-bold uppercase tracking-[0.2em]">
                    Execute 
                    <ArrowRight className="w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Footer Row */}
      <aside className="py-12 px-6 surface-tier-2 shrink-0 shadow-inner">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col gap-1">
            <h2 className="font-headline text-2xl md:text-3xl text-on-surface tracking-tight italic font-semibold">Access The Terminal</h2>
            <p className="font-body text-outline text-sm md:text-base tracking-wide">Monthly quantitative briefings and structural directives.</p>
          </div>
          <form className="flex gap-3 w-full md:w-auto shadow-lg">
            <input 
              type="email" 
              required
              placeholder="Secure Email" 
              aria-label="Secure Email for Newsletter"
              className="bg-background px-5 py-4 text-on-background font-body text-sm focus:outline-none focus:ring-0 flex-grow md:w-72 shadow-inner placeholder:text-outline"
            />
            <button type="submit" className="px-8 py-4 bg-tertiary text-on-tertiary font-label text-sm uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap">
              Deploy
            </button>
          </form>
        </div>
      </aside>
    </motion.main>
  );
};

export default Insights;
