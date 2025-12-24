import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface CounterProps {
    value: number;
    suffix?: string;
    label: string;
    isEnterpriseMode: boolean;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "", label, isEnterpriseMode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const displayValue = useTransform(springValue, (latest) =>
        `${Math.floor(latest).toLocaleString()}${suffix}`
    );

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return (
        <div ref={ref} className="text-center space-y-2">
            <motion.div
                className={`text-4xl md:text-5xl font-bold tracking-tight ${isEnterpriseMode ? "text-brand-primary" : "text-brand-secondary"
                    }`}
            >
                {displayValue}
            </motion.div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
};

export default React.memo(Counter);
