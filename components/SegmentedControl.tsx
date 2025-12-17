import React from 'react';
import { UserSegment } from '../types';
import { Buildings, User } from './Icons';

interface SegmentedControlProps {
  mode: UserSegment;
  onChange: (mode: UserSegment) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({ mode, onChange }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;

  return (
    <div className="inline-flex p-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm relative z-30">
      
      {/* Enterprise Option */}
      <button
        onClick={() => onChange(UserSegment.ENTERPRISE)}
        className={`
          relative flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
          ${isEnterprise 
            ? 'bg-brand-primary/10 text-brand-primary shadow-sm ring-1 ring-brand-primary/10' 
            : 'text-text-muted hover:text-text-main hover:bg-white/40'}
        `}
      >
        <Buildings className={`w-4 h-4 ${isEnterprise ? 'text-brand-primary' : 'text-text-muted'}`} />
        <span>For Enterprises</span>
      </button>

      {/* Consumer Option */}
      <button
        onClick={() => onChange(UserSegment.CONSUMER)}
        className={`
          relative flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
          ${!isEnterprise 
            ? 'bg-brand-secondary/10 text-brand-secondary shadow-sm ring-1 ring-brand-secondary/10' 
            : 'text-text-muted hover:text-text-main hover:bg-white/40'}
        `}
      >
        <User className={`w-4 h-4 ${!isEnterprise ? 'text-brand-secondary' : 'text-text-muted'}`} />
        <span>For Consumers</span>
      </button>

    </div>
  );
};

export default SegmentedControl;