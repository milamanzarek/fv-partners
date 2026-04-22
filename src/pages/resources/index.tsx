import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../../components/seo/SEO';
import { ResourceCard, Resource } from '../../components/resources/ResourceCard';
import { FutureValueCalculator } from '../../components/resources/FutureValueCalculator';
import { EmailCaptureModal } from '../../components/resources/EmailCaptureModal';
import { useI18n } from '../../context/I18nContext';
import resourcesData from '../../data/resources.json';

const resources = resourcesData as Resource[];

export const Resources = () => {
  const { t } = useI18n();
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const level1Resource = resources.find(r => r.id === 'financial-planning-guide');
  const level2Resource = resources.find(r => r.id === 'saas-financial-model');

  const handleResourceAction = (resource: Resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const handleModalSuccess = (email: string) => {
    console.log(`[Lead Acquisition] Access granted to ${selectedResource?.title} for ${email}`);
    setIsModalOpen(false);
    
    if (selectedResource) {
      const link = document.createElement('a');
      link.href = selectedResource.fileUrl;
      link.download = selectedResource.fileUrl.split('/').pop() || 'resource';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-background text-on-background flex flex-col pt-20 overflow-x-hidden selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title={t('FINANCIAL INSIGHTS FOR GROWING BUSINESSES')} 
        description={t('Practical advice, strategies, and perspectives to help entrepreneurs and SMBs make smarter decisions and scale with confidence.')} 
      />
      {/* 1. Header Row */}
      <header className="pt-16 pb-12 px-6 md:px-12 text-center shrink-0 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-headline text-4xl md:text-6xl text-on-surface mb-6 tracking-tight font-bold text-balance"
        >
          {t('FINANCIAL INSIGHTS FOR GROWING BUSINESSES')}
        </motion.h1>
        <p className="font-body text-xl text-outline max-w-3xl mx-auto text-balance font-medium">
          {t('Practical advice, strategies, and perspectives to help entrepreneurs and SMBs make smarter decisions and scale with confidence.')}
        </p>
      </header>

      {/* 2. Content Row */}
      <section className="flex-grow flex flex-col px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full gap-16">
        
        {/* Newsletter Section */}
        <div className="surface-tier-2 p-10 md:p-16 text-center shadow-sm border-t-4 border-primary">
           <h2 className="font-headline text-3xl font-bold mb-4">{t('STAY AHEAD WITH INSIGHTS THAT MATTER.')}</h2>
           <p className="font-body text-lg text-outline mb-8">{t('Sign up for our newsletter and get financial tips, growth strategies, and fundraising guidance straight to your inbox.')}</p>
           
           <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert('Newsletter subscribed!'); }}>
              <input type="text" placeholder={t('Name')} className="flex-1 px-4 py-3 bg-white border border-surface-variant focus:outline-none focus:border-tertiary" required />
              <input type="email" placeholder={t('Email')} className="flex-1 px-4 py-3 bg-white border border-surface-variant focus:outline-none focus:border-tertiary" required />
              <button type="submit" className="px-8 py-3 bg-tertiary text-on-tertiary font-bold tracking-widest uppercase hover:bg-primary transition-colors">
                 {t('SUBSCRIBE')}
              </button>
           </form>
        </div>

        {/* Calculators Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">
          <div className="lg:col-span-2">
            <FutureValueCalculator />
          </div>

          <div className="flex flex-col gap-8 h-full">
            {level1Resource && (
              <div className="flex flex-col flex-1">
                <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-3 px-1 shrink-0">{t('Foundational Tool')}</h3>
                <div className="flex-grow">
                  <ResourceCard resource={level1Resource} index={0} onAction={handleResourceAction} />
                </div>
              </div>
            )}
            
            {level2Resource && (
              <div className="flex flex-col flex-1">
                <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-3 px-1 shrink-0">{t('Growth Framework')}</h3>
                <div className="flex-grow">
                  <ResourceCard resource={level2Resource} index={1} onAction={handleResourceAction} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. CTA Footer Row */}
      <aside className="py-16 px-6 surface-tier-2 shrink-0 border-t border-surface-variant">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col gap-2">
            <h2 className="font-headline text-3xl text-on-surface tracking-tight font-bold">
              {t('READY TO GO DEEPER?')}
            </h2>
            <p className="font-body text-outline text-lg tracking-wide">
              {t('Schedule a free consultation and learn how FV Partners can help you apply these strategies to your own business.')}
            </p>
          </div>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-tertiary text-on-tertiary font-label text-sm uppercase tracking-[0.1em] font-semibold hover:bg-primary transition-colors shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {t('Book a Consultation')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>

      {/* Access Modal */}
      <EmailCaptureModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resourceTitle={selectedResource?.title || 'Resource'}
        onSuccess={handleModalSuccess}
      />
    </motion.main>
  );
};

export default Resources;
