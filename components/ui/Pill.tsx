import React from 'react';

interface PillProps {
    icon?: React.ElementType;
    text: string;
    className?: string;
}

const Pill: React.FC<PillProps> = ({ icon: Icon, text, className }) => (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-medium uppercase tracking-wide mb-4 ${className}`}>
        {Icon && <Icon className="w-3 h-3" />}
        <span>{text}</span>
    </div>
);

export default Pill;
