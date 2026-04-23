import { Link } from 'react-router-dom';
import { NewLogo } from '../ui/NewLogo';
import { DeveloperCredit } from '../ui/DeveloperCredit';

import { CITIES } from '../../data/geoMatrix';

export const Footer = () => (
  <footer className="surface-tier-2 pt-20 pb-10 shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <Link to="/" aria-label="FV Partners Home" className="flex items-center gap-3 text-[var(--color-tertiary)] mb-6">
            <NewLogo className="w-8 h-8" />
            <span className="font-headline text-xl font-semibold tracking-wide text-[var(--color-on-surface)]">FV Partners</span>
          </Link>
          <p className="text-[var(--color-outline)] font-sans text-sm max-w-sm leading-relaxed text-pretty">
            Providing uncompromising financial architecture and elite quantitative modeling for enterprises requiring absolute operational clarity.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 col-span-1 md:col-span-3 lg:col-span-2">
          <div>
            <h4 className="font-label text-[10px] uppercase tracking-[0.15em] text-[var(--color-on-surface)] mb-3">Firm</h4>
            <ul className="space-y-2" aria-label="Firm navigation">
              <li><Link to="/story" className="text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors text-sm font-sans">Our Paradigm</Link></li>
              <li><Link to="/team" className="text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors text-sm font-sans">Team</Link></li>
              <li><Link to="/services" className="text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors text-sm font-sans">Services</Link></li>
              <li><Link to="/partners" className="text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors text-sm font-sans">Partners</Link></li>
              <li><Link to="/insights" className="text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors text-sm font-sans">Insights</Link></li>
              <li><Link to="/resources" className="text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors text-sm font-sans">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label text-[10px] uppercase tracking-[0.15em] text-[var(--color-on-surface)] mb-3">Locations</h4>
            <ul className="space-y-2" aria-label="Locations navigation">
              {CITIES.slice(0, 6).map(city => (
                <li key={city.id}><Link to={`/${city.id}`} className="text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors text-sm font-sans">{city.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-label text-[10px] uppercase tracking-[0.15em] text-[var(--color-on-surface)] mb-3">Connect</h4>
            <ul className="space-y-2" aria-label="Connect links">
              <li><Link to="/contact" className="text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors text-sm font-sans">Contact Us</Link></li>
              <li><a href="#" aria-label="Follow us on LinkedIn" className="text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors text-sm font-sans">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--color-outline)] text-[10px] font-label tracking-wider uppercase">© {new Date().getFullYear()} FV Partners. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-6" aria-label="Legal navigation">
           <Link to="/privacy" className="text-[var(--color-outline)] hover:text-[var(--color-on-surface)] text-[10px] font-label tracking-wider uppercase transition-colors">Privacy Policy</Link>
           <Link to="/terms" className="text-[var(--color-outline)] hover:text-[var(--color-on-surface)] text-[10px] font-label tracking-wider uppercase transition-colors">Terms of Service</Link>
           <Link to="/sitemap" className="text-[var(--color-outline)] hover:text-[var(--color-on-surface)] text-[10px] font-label tracking-wider uppercase transition-colors">Sitemap</Link>
        </nav>
      </div>
      
      <DeveloperCredit />
    </div>
  </footer>
);
