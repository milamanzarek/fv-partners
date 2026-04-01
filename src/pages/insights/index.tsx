import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Insights = () => {
  const articles = [
    {
      category: "Wealth Strategy",
      date: "Oct 24, 2025",
      title: "Navigating Generational Wealth in Volatile Markets",
      excerpt: "An in-depth look at how our unified mother-daughter stewardship model provides an emotional and mathematical anchor during economic shifts.",
      featured: true,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
    },
    {
      category: "Future Value",
      date: "Oct 18, 2025",
      title: "The Psychology of Future Value",
      excerpt: "Understanding the emotional weight of legacy and how it shapes long-term financial decision making.",
      featured: false,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
    },
    {
      category: "Strategic Growth",
      date: "Oct 12, 2025",
      title: "Upstream Positioning for Entrepreneurs",
      excerpt: "Why getting the numbers right before the transaction is the most critical step in scaling your business.",
      featured: false,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    }
  ];

  const featuredArticle = articles.find(a => a.featured);
  const secondaryArticles = articles.filter(a => !a.featured);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-background text-cream flex flex-col overflow-hidden pt-20"
    >
      {/* 1. Header Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 pb-6 shrink-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6">
          <h1 className="font-heading text-5xl md:text-7xl text-white tracking-tight whitespace-nowrap leading-none">
            Insights & <span className="italic text-accent">Perspectives</span>
          </h1>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
            {['All', 'Market Updates', 'Wealth Strategy', 'Future Value'].map((tag, i) => (
              <button 
                key={i} 
                className={`whitespace-nowrap px-5 py-1.5 border cursor-pointer font-ui text-[9px] uppercase tracking-widest transition-all duration-300 ${
                  i === 0 
                    ? 'bg-accent text-background border-accent' 
                    : 'border-white/10 text-muted hover:border-accent/50 hover:text-accent'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Content Row */}
      <div className="flex-grow flex items-center px-6 md:px-12 py-4 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full h-full max-h-[600px]">
          {/* Main Featured Article (Left 2/3) */}
          {featuredArticle && (
            <div className="lg:col-span-2 h-full">
              <article 
                tabIndex={0}
                role="button"
                className="group cursor-pointer flex flex-col h-full focus:outline-none focus:ring-1 focus:ring-accent p-6 border border-white/5 bg-surface/30 hover:bg-surface/50 transition-all duration-500 rounded-none shadow-xl"
              >
                <div className="overflow-hidden bg-[#0D2A4A] relative aspect-[21/9] mb-6 shrink-0">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3 shrink-0">
                    <span className="text-secondary font-ui text-[9px] font-bold uppercase tracking-[0.2em]">{featuredArticle.category}</span>
                    <span className="text-muted font-ui text-[9px] uppercase tracking-[0.2em]">• {featuredArticle.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-white leading-tight mb-4 group-hover:text-accent transition-colors text-balance text-3xl md:text-4xl">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted font-body text-sm leading-relaxed mb-6 text-pretty max-w-xl line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-accent font-ui text-[9px] font-bold uppercase tracking-[0.2em]">
                    Read Full Perspective 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Secondary Articles Column (Right 1/3) */}
          <div className="flex flex-col gap-6 h-full">
            {secondaryArticles.map((article, idx) => (
              <article 
                key={idx} 
                tabIndex={0} 
                role="button"
                className="group cursor-pointer flex flex-col focus:outline-none focus:ring-1 focus:ring-accent p-4 border border-white/5 bg-surface/30 hover:bg-surface/50 transition-all duration-500 rounded-none flex-1"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-2 shrink-0">
                    <span className="text-secondary font-ui text-[9px] font-bold uppercase tracking-[0.2em]">{article.category}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-white leading-tight mb-2 group-hover:text-accent transition-colors text-balance text-lg line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted font-body text-[12px] leading-relaxed mb-4 text-pretty line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-accent font-ui text-[9px] font-bold uppercase tracking-[0.2em]">
                    Explore 
                    <ArrowRight className="w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CTA Footer Row */}
      <footer className="py-8 px-6 bg-surface/40 border-t border-white/5 shrink-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl text-white tracking-tight italic mb-1">Access The Vault</h2>
            <p className="font-body text-muted text-xs tracking-wide">Monthly strategic briefings and generational wisdom.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Secure Email" 
              className="bg-background/50 border border-white/10 px-4 py-3 text-cream font-body text-xs focus:outline-none focus:border-accent/50 flex-grow md:w-64"
            />
            <button className="btn-primary px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Insights;
