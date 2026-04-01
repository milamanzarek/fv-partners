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
      case 'planning':
        return <FileText className="w-4 h-4" />;
      case 'compliance':
        return <BadgeCheck className="w-4 h-4" />;
      case 'calculators':
        return <Calculator className="w-4 h-4" />;
      case 'modeling':
      case 'valuation':
      case 'saas':
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface/30 border border-white/5 p-5 flex flex-col h-full hover:border-accent/40 transition-all duration-500 group relative overflow-hidden rounded-none shadow-xl"
    >
      <div className="flex items-start justify-between mb-3 shrink-0">
        <div className="p-2 bg-background/50 border border-white/5 text-accent">
          {getIcon(resource.category)}
        </div>
      </div>

      <h3 className="text-lg font-heading text-cream mb-1.5 group-hover:text-accent transition-colors leading-tight line-clamp-2 shrink-0">
        {resource.title}
      </h3>
      
      <p className="text-muted font-body text-[11px] flex-grow mb-4 leading-relaxed line-clamp-2">
        {resource.description}
      </p>

      <button
        onClick={() => onAction(resource)}
        className="btn-primary w-full py-2.5 text-[9px] group/btn mt-auto shrink-0"
      >
        <Download className="w-3 h-3 transition-transform group-hover/btn:-translate-y-0.5" />
        Access Resource
      </button>
    </motion.div>
  );
};
