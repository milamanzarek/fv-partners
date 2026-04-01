import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ResourceCard, Resource } from '../../components/resources/ResourceCard';
import { FutureValueCalculator } from '../../components/resources/FutureValueCalculator';
import { EmailCaptureModal } from '../../components/resources/EmailCaptureModal';
import resourcesData from '../../data/resources.json';

// Type assertion for imported JSON
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
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-background text-cream flex flex-col pt-20 overflow-x-hidden"
    >
      {/* 1. Header Row */}
      <header className="pt-12 pb-8 px-6 md:px-12 text-center shrink-0">
        <h1 className="font-heading text-5xl md:text-7xl text-white mb-2 tracking-tight font-semibold text-balance whitespace-nowrap">
          The Client <span className="italic text-accent">Vault</span>
        </h1>
        <p className="font-body text-base text-muted max-w-3xl mx-auto">
          Strategic tools and proprietary frameworks for exponential growth.
        </p>
      </header>

      {/* 2. Content Row */}
      <div className="flex-grow flex items-center px-6 md:px-12 py-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {/* Main Interactive Section (Left 2/3) */}
          <div className="lg:col-span-2">
            <FutureValueCalculator />
          </div>

          {/* Secondary Resources Column (Right 1/3) */}
          <div className="flex flex-col gap-8 h-full">
            {level1Resource && (
              <div className="flex flex-col flex-1">
                <h3 className="font-ui text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-3 px-1 shrink-0">Foundational Tool</h3>
                <div className="flex-grow">
                  <ResourceCard resource={level1Resource} index={0} onAction={handleResourceAction} />
                </div>
              </div>
            )}
            
            {level2Resource && (
              <div className="flex flex-col flex-1">
                <h3 className="font-ui text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-3 px-1 shrink-0">Growth Framework</h3>
                <div className="flex-grow">
                  <ResourceCard resource={level2Resource} index={1} onAction={handleResourceAction} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. CTA Footer Row */}
      <footer className="py-8 px-6 bg-surface/40 border-t border-white/5 shrink-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-xl md:text-2xl text-white tracking-tight italic mb-1">
              Looking for a custom framework?
            </h2>
            <p className="font-body text-muted text-[10px] tracking-wide">
              Our vault is expanding. Inquire about bespoke financial modeling.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="btn-primary px-8 py-4"
          >
            Request Bespoke Resource
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>

      {/* Access Modal */}
      <EmailCaptureModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resourceTitle={selectedResource?.title || 'Resource'}
        onSuccess={handleModalSuccess}
      />
    </motion.div>
  );
};

export default Resources;
