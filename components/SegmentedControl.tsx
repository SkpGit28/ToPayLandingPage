import React from 'react';
import { motion } from 'framer-motion';

export interface SegmentOption {
  value: string;
  label: string;
  icon?: React.ElementType;
}

interface SegmentedControlProps {
  options: SegmentOption[];
  value: string;
  onChange: (value: any) => void;
  variant?: 'glass' | 'solid';
  className?: string;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  variant = 'glass',
  className = ''
}) => {

  if (variant === 'glass') {
    return (
      <div className={`inline-flex p-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm relative z-30 ${className}`}>
        {options.map((option) => {
          const isActive = value === option.value;
          const Icon = option.icon;

          // Determine active styling based on value (hardcoded for now to match Home.tsx logic if needed, or generic)
          // For Home.tsx specific coloring, we can check the value or pass active classes.
          // To keep it simple and backward compatible with the visual style of Home.tsx:
          let activeClass = 'text-text-muted hover:text-text-main hover:bg-white/40';
          let iconClass = 'text-text-muted';

          if (isActive) {
            if (option.value === 'ENTERPRISE') {
              activeClass = 'bg-brand-primary/10 text-brand-primary shadow-sm ring-1 ring-brand-primary/10';
              iconClass = 'text-brand-primary';
            } else {
              activeClass = 'bg-brand-secondary/10 text-brand-secondary shadow-sm ring-1 ring-brand-secondary/10';
              iconClass = 'text-brand-secondary';
            }
          }

          return (
            <button
              key={option.value}
              onClick={() => onChange(option.value)}
              className={`
                relative flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeClass}
              `}
            >
              {Icon && <Icon className={`w-4 h-4 ${iconClass}`} />}
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Solid Variant (for Contact Us)
  return (
    <div className={`inline-flex bg-gray-100 p-1.5 rounded-full relative ${className}`}>
      {/* Sliding Background Pill */}
      {options.map((option, index) => {
        if (value === option.value) {
          return (
            <motion.div
              layoutId="segmented-pill"
              key="pill"
              className="absolute inset-y-1.5 bg-white shadow-sm rounded-full"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                left: index === 0 ? '6px' : 'auto',
                right: index === options.length - 1 ? '6px' : 'auto',
                width: `calc((100% - 12px) / ${options.length})`,
                // This simple width calc assumes equal width buttons. 
                // For variable width, we'd need more complex measurement.
                // Given the design, equal width is likely desired for this toggle.
              }}
            />
          );
        }
        return null;
      })}

      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`
              relative z-10 flex-1 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 text-center min-w-[140px] whitespace-nowrap
              ${isActive ? 'text-brand-primary' : 'text-gray-500 hover:text-gray-700'}
            `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedControl;