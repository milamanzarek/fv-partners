import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NewLogo } from '../ui/NewLogo';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Services', path: '/services' },
    { name: 'Insights', path: '/insights' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#041527]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" aria-label="FV Partners Home" className="flex items-center gap-3 text-[#D4AF37] hover:opacity-80 transition-opacity z-50 whitespace-nowrap">
          <NewLogo className="w-12 h-12 shrink-0" />
          <span className="font-heading text-2xl font-semibold tracking-wide text-white">FV Partners</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-ui text-xs uppercase tracking-[0.1em] transition-colors relative group whitespace-nowrap ${location.pathname === link.path ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-[#0F7A4D] transition-transform duration-300 origin-center ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
          
          <div className="flex items-center gap-6 ml-4">
            <a href="tel:+13105550198" className="flex items-center gap-2 text-white font-ui text-[10px] uppercase tracking-widest hover:text-accent transition-colors group">
              <Phone className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
              Call Directly
            </a>
            <Link to="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white z-50" 
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
              className="absolute top-0 left-0 w-full h-screen bg-[#041527] flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-3xl text-white hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 btn-primary px-8 py-4"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:+13105550198"
                className="flex items-center gap-2 text-white font-ui text-xs uppercase tracking-widest hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                Call Directly
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
