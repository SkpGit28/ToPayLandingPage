import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserSegment } from '../types';
import { FAQ_DATA } from '../data/faq';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    isEnterprise: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, isEnterprise }) => {
    const textColor = isEnterprise ? 'text-brand-primary' : 'text-brand-secondary';
    const accentBg = isEnterprise ? 'rgba(227, 52, 65, 0.1)' : 'rgba(41, 81, 160, 0.1)';
    const accentLine = isEnterprise ? 'bg-brand-primary' : 'bg-brand-secondary';

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-7 flex items-center justify-between text-left group transition-all duration-300"
            >
                <span className={`text-lg md:text-xl font-semibold transition-colors duration-500 ${isOpen ? textColor : 'text-text-main group-hover:text-gray-600'}`}>
                    {question}
                </span>

                {/* Unique Animated Toggle Button */}
                <div className="relative w-10 h-10 flex items-center justify-center ml-4 flex-shrink-0">
                    {/* Background Circle with Scale Effect */}
                    <motion.div
                        animate={{
                            scale: isOpen ? 1 : 0.8,
                            backgroundColor: isOpen ? accentBg : 'rgba(243, 244, 246, 1)',
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="absolute inset-0 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />

                    {/* Horizontal Line */}
                    <motion.div
                        className={`absolute w-4 h-0.5 rounded-full ${isOpen ? accentLine : 'bg-gray-400'}`}
                        animate={{
                            rotate: isOpen ? 180 : 0,
                            width: isOpen ? 18 : 16
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    />

                    {/* Vertical Line (Plus to Minus) */}
                    <motion.div
                        className={`absolute w-0.5 h-4 rounded-full ${isOpen ? accentLine : 'bg-gray-400'}`}
                        animate={{
                            rotate: isOpen ? 90 : 0,
                            scaleY: isOpen ? 0 : 1,
                            opacity: isOpen ? 0 : 1,
                            height: isOpen ? 0 : 16
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            className="pb-8 text-text-muted text-lg leading-relaxed max-w-3xl"
                        >
                            {answer}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection: React.FC<{ mode: UserSegment }> = ({ mode }) => {
    const isEnterprise = mode === UserSegment.ENTERPRISE;
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const data = FAQ_DATA[mode];

    return (
        <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${isEnterprise ? 'bg-red-50 text-brand-primary' : 'bg-blue-50 text-brand-secondary'}`}
                    >
                        Support & FAQ
                    </motion.div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-text-main mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-text-muted text-xl max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about ToPay. Can't find the answer? Our support team is always here to help.
                    </p>
                </div>

                <motion.div
                    layout
                    className="bg-gray-50/30 rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-sm"
                >
                    {data.map((item, idx) => (
                        <FAQItem
                            key={idx}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            isEnterprise={isEnterprise}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
