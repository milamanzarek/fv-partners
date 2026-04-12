import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../../components/seo/SEO';
import { ResourceCard, Resource } from '../../components/resources/ResourceCard';
import { FutureValueCalculator } from '../../components/resources/FutureValueCalculator';
import { EmailCaptureModal } from '../../components/resources/EmailCaptureModal';
import resourcesData from '../../data/resources.json';

const resources = resourcesData as Resource[];

export const Resources = () => {
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
      // Programmatic download trigger
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
        title="Resources & The Vault" 
        description="Strategic tools and proprietary frameworks for exponential growth including our exclusive Future Value Modeler." 
      />
      {/* 1. Header Row */}
      <header className="pt-16 pb-12 px-6 md:px-12 text-center shrink-0">
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-4 tracking-tight font-semibold text-balance whitespace-nowrap">
          The Client <span className="italic text-tertiary">Vault</span>
        </h1>
        <p className="font-body text-xl text-outline max-w-3xl mx-auto text-balance">
          Strategic tools and proprietary frameworks for exponential growth.
        </p>
      </header>

      {/* 2. Content Row */}
      <section className="flex-grow flex items-center px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {/* Main Interactive Section (Left 2/3) */}
          <div className="lg:col-span-2">
            <FutureValueCalculator />
          </div>

          {/* Secondary Resources Column (Right 1/3) */}
          <div className="flex flex-col gap-8 h-full">
            {level1Resource && (
              <div className="flex flex-col flex-1">
                <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-3 px-1 shrink-0">Foundational Tool</h3>
                <div className="flex-grow">
                  <ResourceCard resource={level1Resource} index={0} onAction={handleResourceAction} />
                </div>
              </div>
            )}
            
            {level2Resource && (
              <div className="flex flex-col flex-1">
                <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-3 px-1 shrink-0">Growth Framework</h3>
                <div className="flex-grow">
                  <ResourceCard resource={level2Resource} index={1} onAction={handleResourceAction} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. CTA Footer Row */}
      <aside className="py-12 px-6 surface-tier-2 shrink-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col gap-1">
            <h2 className="font-headline text-2xl md:text-3xl text-on-surface tracking-tight italic font-semibold">
              Looking for a custom framework?
            </h2>
            <p className="font-body text-outline text-sm md:text-base tracking-wide">
              Our vault is expanding. Inquire about bespoke financial modeling.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-tertiary text-on-tertiary font-label text-sm uppercase tracking-[0.1em] font-semibold hover:bg-primary hover:text-on-primary transition-colors shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Request Bespoke Resource
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
