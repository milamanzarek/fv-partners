import { motion } from 'motion/react';
import { SEO } from '../../components/seo/SEO';
import { Award, Briefcase, GraduationCap, FileCheck } from 'lucide-react';

export const Team = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-[var(--color-surface)]"
    >
      <SEO 
        title="Our Team" 
        description="Meet the financial leadership team at FV Partners." 
      />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="font-headline text-4xl md:text-6xl text-[var(--color-on-surface)] mb-6 font-bold tracking-tight text-balance">
          Executive Leadership
        </h1>
        <p className="font-body text-xl md:text-2xl text-[var(--color-outline)] max-w-3xl mx-auto leading-relaxed text-pretty font-medium">
          Strategic financial expertise combined with decades of accounting precision.
        </p>
      </section>

      {/* Team Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Gulnaz Adigamova */}
          <article className="surface-tier-2 p-8 md:p-12 shadow-sm flex flex-col h-full border-t-4 border-[var(--color-primary)] group">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
              <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dp9lnazkj/image/upload/v1777155572/gulnaz-hex-blue_pvjmlt.png" 
                  alt="Gulnaz Adigamova" 
                  className="w-full h-full object-contain drop-shadow-lg transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-125"
                />
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold text-[var(--color-on-surface)] mb-2 whitespace-nowrap">Gulnaz Adigamova</h2>
                <h3 className="font-label text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] font-bold mb-6">Principal & Co-Founder</h3>
                <p className="font-body text-base text-[var(--color-outline)] leading-relaxed text-pretty">
                  Driving strategic financial planning, analysis, and comprehensive growth frameworks for scaling&nbsp;enterprises.
                </p>
              </div>
            </div>

            <div className="space-y-6 flex-grow">
              <div className="flex gap-4 items-start">
                <GraduationCap className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline font-semibold text-[var(--color-on-surface)] mb-1">Education</h4>
                  <p className="font-body text-sm text-[var(--color-outline)] leading-relaxed">
                    B.S. in Finance with Honors — California State University, Northridge&nbsp;(2014)
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Briefcase className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline font-semibold text-[var(--color-on-surface)] mb-1">Experience</h4>
                  <p className="font-body text-sm text-[var(--color-outline)] leading-relaxed">
                    10+ years of rigorous experience in the financial sector (March 2015 – Present)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Award className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline font-semibold text-[var(--color-on-surface)] mb-1">Certifications</h4>
                  <ul className="font-body text-sm text-[var(--color-outline)] leading-relaxed list-disc pl-4 space-y-1">
                    <li>Financial Planning & Analysis Professional&nbsp;(FPAP)</li>
                    <li>Financial Modeling & Valuation Analyst&nbsp;(FMVA)</li>
                    <li>AI for Finance Specialization&nbsp;(CFI)</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* Farida Adigamova */}
          <article className="surface-tier-2 p-8 md:p-12 shadow-sm flex flex-col h-full border-t-4 border-[var(--color-tertiary)] group">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
              <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dp9lnazkj/image/upload/v1777155566/farida-hex-blue.png_caqlwr.png" 
                  alt="Farida Adigamova" 
                  className="w-full h-full object-contain drop-shadow-lg transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-125"
                />
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold text-[var(--color-on-surface)] mb-2 whitespace-nowrap">Farida Adigamova</h2>
                <h3 className="font-label text-xs uppercase tracking-[0.2em] text-[var(--color-tertiary)] font-bold mb-6">Co-Founder</h3>
                <p className="font-body text-base text-[var(--color-outline)] leading-relaxed text-pretty">
                  Delivering four decades of unparalleled accounting precision and tax advisory&nbsp;excellence.
                </p>
              </div>
            </div>

            <div className="space-y-6 flex-grow">
              <div className="flex gap-4 items-start">
                <Briefcase className="w-5 h-5 text-[var(--color-tertiary)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline font-semibold text-[var(--color-on-surface)] mb-1">Experience</h4>
                  <p className="font-body text-sm text-[var(--color-outline)] leading-relaxed">
                    40+ years in accounting & finance (since&nbsp;1984). <br/>
                    10 years of US-based non-CPA accounting & financial advisory practice (since&nbsp;2016).
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <GraduationCap className="w-5 h-5 text-[var(--color-tertiary)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline font-semibold text-[var(--color-on-surface)] mb-1">Education</h4>
                  <p className="font-body text-sm text-[var(--color-outline)] leading-relaxed">
                    M.S. in Accounting (Russia). <br/>
                    US Accounting coursework at West Valley Occupational Center — Los Angeles,&nbsp;CA.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FileCheck className="w-5 h-5 text-[var(--color-tertiary)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline font-semibold text-[var(--color-on-surface)] mb-1">Authorizations & Certifications</h4>
                  <ul className="font-body text-sm text-[var(--color-outline)] leading-relaxed list-disc pl-4 space-y-1">
                    <li>IRS Authorized ITIN Acceptance Agent&nbsp;(EA)</li>
                    <li>QuickBooks Online Certified&nbsp;ProAdvisor</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

    </motion.div>
  );
};

export default Team;
