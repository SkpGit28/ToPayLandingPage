import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WaterflowTextProps {
    words: string[];
    className?: string;
}

const WaterflowText: React.FC<WaterflowTextProps> = ({ words, className = '' }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Change word every 3 seconds for better readability

        return () => clearInterval(interval);
    }, [words.length]);

    const word = words[index];
    const characters = word.split('');

    return (
        <span className={`inline-flex relative overflow-hidden px-4 pb-2 ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    className="inline-flex"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 } },
                        exit: { transition: { staggerChildren: 0.02, staggerDirection: 1 } }
                    }}
                >
                    {characters.map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block"
                            variants={{
                                hidden: { y: '100%', opacity: 0, filter: 'blur(8px)' },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    filter: 'blur(0px)',
                                    transition: {
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 100
                                    }
                                },
                                exit: {
                                    y: '-100%',
                                    opacity: 0,
                                    filter: 'blur(8px)',
                                    transition: { duration: 0.3, ease: "easeIn" }
                                }
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default WaterflowText;
