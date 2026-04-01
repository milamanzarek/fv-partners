import { Link } from 'react-router-dom';
import { NewLogo } from '../ui/NewLogo';
import { DeveloperCredit } from '../ui/DeveloperCredit';

export const Footer = () => (
  <footer className="bg-[#041527] border-t border-white/10 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" aria-label="FV Partners Home" className="flex items-center gap-3 text-[#D4AF37] mb-6">
            <NewLogo className="w-8 h-8" />
            <span className="font-heading text-xl font-semibold tracking-wide text-white">FV Partners</span>
          </Link>
          <p className="text-[#8BA3B5] font-body text-sm max-w-sm leading-relaxed text-pretty">
            Generational Wisdom. Future Value. Providing premium financial stewardship and strategic clarity for high-net-worth families and scaling businesses in Southern California.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 col-span-1 md:col-span-2">
          <div>
            <h4 className="font-ui text-[10px] uppercase tracking-[0.15em] text-white mb-3">Firm</h4>
            <ul className="space-y-1" aria-label="Firm navigation">
              <li><Link to="/story" className="text-[#8BA3B5] hover:text-[#D4AF37] transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/services" className="text-[#8BA3B5] hover:text-[#D4AF37] transition-colors text-sm">Services</Link></li>
              <li><Link to="/insights" className="text-[#8BA3B5] hover:text-[#D4AF37] transition-colors text-sm">Insights</Link></li>
              <li><Link to="/resources" className="text-[#8BA3B5] hover:text-[#D4AF37] transition-colors text-sm">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-ui text-[10px] uppercase tracking-[0.15em] text-white mb-3">Connect</h4>
            <ul className="space-y-1" aria-label="Connect links">
              <li><Link to="/contact" className="text-[#8BA3B5] hover:text-[#D4AF37] transition-colors text-sm">Contact Us</Link></li>
              <li><a href="#" aria-label="Follow us on LinkedIn" className="text-[#8BA3B5] hover:text-[#D4AF37] transition-colors text-sm">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#8BA3B5] text-xs font-ui tracking-wider uppercase">© {new Date().getFullYear()} FV Partners. All rights reserved.</p>
        <nav className="flex gap-6" aria-label="Legal navigation">
          <a href="#" className="text-[#8BA3B5] hover:text-white text-xs font-ui tracking-wider uppercase transition-colors">Privacy</a>
          <a href="#" className="text-[#8BA3B5] hover:text-white text-xs font-ui tracking-wider uppercase transition-colors">Terms</a>
        </nav>
      </div>
      
      <DeveloperCredit />
    </div>
  </footer>
);
