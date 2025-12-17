import React from 'react';
import { UserSegment } from '../types';

interface PreFooterProps {
  mode: UserSegment;
}

const PreFooter: React.FC<PreFooterProps> = ({ mode }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 opacity-10 
        ${isEnterprise 
          ? 'bg-gradient-to-t from-brand-primary/30 to-transparent' 
          : 'bg-gradient-to-t from-brand-secondary/30 to-transparent'}`} 
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-main mb-6 tracking-tight">
          Ready to get started?
        </h2>
        <p className="text-xl text-text-muted mb-10">
          {isEnterprise 
            ? "Join over 10,000 businesses scaling with ToPay." 
            : "Join over 1 million users managing their money better."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className={`px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1 active:translate-y-0
            ${isEnterprise ? 'bg-brand-primary hover:bg-brand-primary/90' : 'bg-brand-secondary hover:bg-brand-secondary/90'}`}>
            {isEnterprise ? "Contact Sales" : "Download App"}
          </button>
          <button className="px-8 py-4 rounded-full bg-white text-text-main font-bold text-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;