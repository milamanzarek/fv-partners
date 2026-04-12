import { motion } from 'motion/react';
import logoUrl from '../../assets/logo.png';

export const NewLogo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Custom expo-out for a "premium" feel
      }}
      className={`relative ${className}`}
    >
      {/* Subtle background glow */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-accent/20 blur-xl rounded-full"
      />
      
      <img 
        src={logoUrl} 
        alt="FV Partners Logo" 
        className="w-full h-full object-contain relative z-10"
      />
    </motion.div>
  );
};
