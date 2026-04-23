import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NewLogo } from '../ui/NewLogo';
import { useI18n } from '../../context/I18nContext';

export const Header = () => {
  const { lang, setLang } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Paradigm', path: '/story' },
    { name: 'Team', path: '/team' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' },
    { name: 'Insights', path: '/insights' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--color-surface)]/90 backdrop-blur-xl shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" aria-label="FV Partners Home" className="flex items-center gap-3 text-[var(--color-tertiary)] hover:opacity-80 transition-opacity z-50 whitespace-nowrap">
          <NewLogo className="w-10 h-10 shrink-0" />
          <span className="font-headline text-2xl font-bold tracking-tight text-[var(--color-on-surface)]">FV Partners</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-label text-xs uppercase tracking-[0.1em] transition-colors relative group whitespace-nowrap ${location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-[var(--color-outline)] hover:text-[var(--color-primary)]'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-[var(--color-primary)] transition-transform duration-300 origin-center ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-2">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ru' : 'en')} 
              className="text-[var(--color-tertiary)] hover:text-[var(--color-primary)] font-label text-xs uppercase font-bold tracking-widest px-2 transition-colors"
            >
              {lang === 'en' ? 'RU' : 'EN'}
            </button>
            <a href="tel:+13105550198" className="flex items-center gap-2 text-[var(--color-tertiary)] font-label text-[10px] font-semibold uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors group whitespace-nowrap shrink-0">
              <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform shrink-0" />
              Call Directly
            </a>
            <Link to="/contact" className="px-5 py-3 bg-[var(--color-tertiary)] text-white font-label text-xs uppercase tracking-[0.1em] font-semibold hover:bg-[var(--color-primary)] transition-colors shadow-lg whitespace-nowrap shrink-0">
              Initiate Diagnostic
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-[var(--color-on-surface)] z-50 p-2 -mr-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-0 left-0 w-full h-screen bg-[var(--color-surface)] flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-headline text-3xl font-bold text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-6 mt-4">
                <button 
                  onClick={() => {
                    setLang(lang === 'en' ? 'ru' : 'en');
                    setMobileMenuOpen(false);
                  }} 
                  className="text-[var(--color-tertiary)] hover:text-[var(--color-primary)] font-label text-sm uppercase font-bold tracking-widest transition-colors"
                >
                  Language: {lang === 'en' ? 'RU' : 'EN'}
                </button>
              </div>
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 bg-[var(--color-tertiary)] text-white font-label text-sm uppercase tracking-widest font-bold hover:bg-[var(--color-primary)] transition-colors shadow-xl"
              >
                Initiate Diagnostic
              </Link>
              <a 
                href="tel:+13105550198"
                className="flex items-center gap-2 mt-4 text-[var(--color-tertiary)] font-label text-xs font-bold uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Directly
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
