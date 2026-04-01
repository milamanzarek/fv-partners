import { SVGProps } from 'react';
import { motion } from 'motion/react';

export const GrowthKurai = ({ className = "w-12 h-12", ...props }: { className?: string } & SVGProps<SVGSVGElement>) => {
  // Seven upward geometric shards
  const shards = [
    "M100 170 L100 40 L112 165 L88 165 Z", // Center (Tallest)
    "M92 168 L65 65 L85 160 Z",           // Left 1
    "M85 162 L35 105 L65 155 Z",          // Left 2
    "M78 155 L15 145 L45 150 Z",          // Left 3 (Base)
    "M108 168 L135 65 L115 160 Z",         // Right 1
    "M115 162 L165 105 L135 155 Z",        // Right 2
    "M122 155 L185 145 L155 150 Z",        // Right 3 (Base)
  ];

  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Hexagonal Container */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        d="M100 10 L180 55 L180 145 L100 190 L20 145 L20 55 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* Center base point */}
      <motion.circle 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        cx="100" cy="170" r="3" fill="currentColor" 
      />

      {/* Shards */}
      {shards.map((d, i) => (
        <motion.path
          key={i}
          initial={{ pathLength: 0, opacity: 0, y: 10 }}
          animate={{ pathLength: 1, opacity: 1, y: 0 }}
          transition={{ 
            pathLength: { duration: 1.5, delay: 0.2 + i * 0.1, ease: "easeOut" },
            opacity: { duration: 0.8, delay: 0.2 + i * 0.1 },
            y: { duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }
          }}
          d={d}
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
};
