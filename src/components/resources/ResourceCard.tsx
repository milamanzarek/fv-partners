import { motion } from 'motion/react';
import { Download, FileText, BarChart3, Calculator, BadgeCheck } from 'lucide-react';

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  fileUrl: string;
}

interface ResourceCardProps {
  resource: Resource;
  index: number;
  onAction: (resource: Resource) => void;
}

export const ResourceCard = ({ resource, index, onAction }: ResourceCardProps) => {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'planning': return <FileText className="w-5 h-5" />;
      case 'compliance': return <BadgeCheck className="w-5 h-5" />;
      case 'calculators': return <Calculator className="w-5 h-5" />;
      case 'modeling':
      case 'valuation':
      case 'saas': return <BarChart3 className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="surface-tier-2 p-6 flex flex-col h-full hover:surface-tier-3 transition-colors duration-500 group relative overflow-hidden rounded-none shadow-md hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-4 shrink-0">
        <div className="p-3 surface-tier-3 text-tertiary shadow-sm">
          {getIcon(resource.category)}
        </div>
      </div>

      <h3 className="text-xl font-headline font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-2 shrink-0">
        {resource.title}
      </h3>
      
      <p className="text-outline font-body text-sm flex-grow mb-6 leading-relaxed line-clamp-2">
        {resource.description}
      </p>

      <button
        onClick={() => onAction(resource)}
        className="w-full py-3.5 bg-background text-on-background font-label text-[10px] uppercase tracking-[0.1em] font-bold mt-auto shrink-0 flex justify-center items-center gap-2 group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-inner"
      >
        <Download className="w-3.5 h-3.5" />
        Access Resource
      </button>
    </motion.div>
  );
};
