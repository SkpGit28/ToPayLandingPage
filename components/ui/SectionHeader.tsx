import React from 'react';
import { motion } from 'framer-motion';
import Pill from './Pill';

interface SectionHeaderProps {
    pillIcon: any;
    pillText: string;
    title: string;
    description: string;
    mode: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ pillIcon, pillText, title, description, mode }) => {
    return (
        <div className="text-center mb-16 space-y-4">
            <Pill
                icon={pillIcon}
                text={pillText}
                className="bg-white border-gray-200 text-gray-500 mx-auto mb-6 shadow-sm"
            />
            <motion.h2
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-4xl md:text-5xl text-text-main tracking-tight leading-tight"
            >
                {title}
            </motion.h2>
            <motion.p
                key={`${mode}-p`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed"
            >
                {description}
            </motion.p>
        </div>
    );
};

export default React.memo(SectionHeader);
