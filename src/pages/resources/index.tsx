import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../../components/seo/SEO';
import { ResourceCard, Resource } from '../../components/resources/ResourceCard';
import { FutureValueCalculator } from '../../components/resources/FutureValueCalculator';
import { EmailCaptureModal } from '../../components/resources/EmailCaptureModal';
import { submitContactForm } from '../../services/api';
import { useI18n } from '../../context/I18nContext';
import resourcesData from '../../data/resources.json';

const resources = resourcesData as Resource[];

export const Resources = () => {
  const { t } = useI18n();
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Newsletter state
  const [newsName, setNewsName] = useState('');
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSubmitting, setNewsSubmitting] = useState(false);
  const [newsStatus, setNewsStatus] = useState<string | null>(null);

  const level1Resource = resources.find(r => r.id === 'financial-planning-guide');
  const level2Resource = resources.find(r => r.id === 'saas-financial-model');

  const handleResourceAction = (resource: Resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsName || !newsEmail) return;
    
    setNewsSubmitting(true);
    setNewsStatus(null);
    
    const result = await submitContactForm({
      formType: 'Newsletter',
      name: newsName,
      email: newsEmail
    });
    
    setNewsSubmitting(false);
    if (result.success) {
      setNewsStatus('Successfully subscribed to our newsletter.');
      setNewsName('');
      setNewsEmail('');
    } else {
      setNewsStatus('Failed to subscribe. Please try again.');
    }
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
      className="bg-background text-on-background flex flex-col pt-20 overflow-x-hidden selection:bg-primary selection:text-on-primary"
    >
      <SEO 
        title={t('Financial Insights for Growing Businesses')} 
        description={t('Practical advice, strategies, and perspectives to help entrepreneurs and SMBs make smarter decisions and scale with confidence.')} 
      />
      {/* 1. Header Row */}
      <header className="pt-16 pb-12 px-6 md:px-12 text-center shrink-0 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 tracking-tight font-bold text-balance"
        >
          {t('Financial Insights for Growing Businesses')}
        </motion.h1>
        <p className="font-body text-xl text-outline max-w-3xl mx-auto text-balance font-medium">
          {t('Practical advice, strategies, and perspectives to help entrepreneurs and SMBs make smarter decisions and scale with confidence.')}
        </p>
      </header>

      {/* 2. Content Row */}
      <section className="flex-grow flex flex-col px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full gap-16">
        
        {/* Calculators Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">
          <div className="lg:col-span-2">
            <FutureValueCalculator />
          </div>

          <div className="flex flex-col gap-8 h-full">
            {level1Resource && (
              <div className="flex flex-col flex-1">
                <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-3 px-1 shrink-0">{t('Foundational Tool')}</h3>
                <div className="flex-grow [&_h3]:text-balance [&_h3]:text-pretty">
                  <ResourceCard resource={level1Resource} index={0} onAction={handleResourceAction} />
                </div>
              </div>
            )}
            
            {level2Resource && (
              <div className="flex flex-col flex-1">
                <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-3 px-1 shrink-0">{t('Growth Framework')}</h3>
                <div className="flex-grow [&_h3]:text-balance [&_h3]:text-pretty">
                  <ResourceCard resource={level2Resource} index={1} onAction={handleResourceAction} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="surface-tier-2 p-10 md:p-16 text-center shadow-sm mt-8">
           <h2 className="font-headline text-3xl font-bold mb-4">{t('Stay Ahead With Insights That Matter')}</h2>
           <p className="font-body text-lg text-outline mb-8">{t('Sign up for our newsletter and get financial tips, growth strategies, and fundraising guidance straight to your inbox.')}</p>
           
           <form className="max-w-2xl mx-auto flex flex-col gap-4" onSubmit={handleNewsletterSubmit}>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <input type="text" value={newsName} onChange={(e) => setNewsName(e.target.value)} disabled={newsSubmitting} placeholder={t('Name')} className="flex-1 px-4 py-3 bg-white border border-surface-variant focus:outline-none focus:border-tertiary disabled:opacity-50" required />
                <input type="email" value={newsEmail} onChange={(e) => setNewsEmail(e.target.value)} disabled={newsSubmitting} placeholder={t('Email')} className="flex-1 px-4 py-3 bg-white border border-surface-variant focus:outline-none focus:border-tertiary disabled:opacity-50" required />
                <button type="submit" disabled={newsSubmitting} className="px-8 py-3 bg-tertiary text-on-tertiary font-bold tracking-widest uppercase hover:bg-primary transition-colors disabled:opacity-50">
                   {newsSubmitting ? t('Subscribing...') : t('Subscribe')}
                </button>
              </div>
              {newsStatus && (
                <div className="text-sm font-label uppercase tracking-widest text-primary mt-2">
                  {newsStatus}
                </div>
              )}
           </form>
        </div>

      </section>

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
