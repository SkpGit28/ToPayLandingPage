import React from 'react';
import { UserSegment } from '../types';

interface CTAButtonProps {
  mode: UserSegment;
  size?: 'small'| 'medium' | 'large';
  className?: string;
  customText?: string;
  'aria-label'?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ mode, size = 'small', className = '', customText, 'aria-label': ariaLabel }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;
  
  const buttonText = customText || (isEnterprise ? 'Sign Up' : 'Download');
  const buttonColorClass = isEnterprise 
    ? 'bg-brand-primary hover:bg-brand-primary/90' 
    : 'bg-brand-secondary hover:bg-brand-secondary/90';
  
  const sizeClasses = size === 'large' 
  ? 'text-lg font-semibold px-8 py-4 shadow-xl hover:shadow-2xl hover:scale-105'
  : size === 'medium' ? 'text-base font-semibold px-6 py-3 shadow-lg hover:scale-105' : 'text-sm font-semibold px-6 py-2.5 shadow-lg hover:scale-105';
  
  return (
    <button 
      className={`${buttonColorClass} text-white rounded-full transition-all transform active:translate-y-0 active:scale-95 ${sizeClasses} ${className}`}
      aria-label={ariaLabel || buttonText}
    >
      {buttonText}
    </button>
  );
};

export default CTAButton;