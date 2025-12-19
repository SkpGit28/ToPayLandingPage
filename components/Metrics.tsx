import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';

// Helper Component for the animation
const Counter = ({ value, suffix = "", label, isEnterpriseMode }) => {
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

const CERTIFICATIONS = [
  {
    id: 'rbi',
    name: 'RBI',
    role: 'Regulated Entity',
    logo: '/assets/RBI.svg'
  },
  {
    id: 'npci',
    name: 'NPCI',
    role: 'Strategic Partner',
    logo: '/assets/npci.svg'
  },
  {
    id: 'rupay',
    name: 'RuPay',
    role: 'Issuance Partner',
    logo: '/assets/rupay.svg'
  },
  {
    id: 'pci',
    name: 'PCI-DSS',
    role: 'Security L1',
    logo: '/assets/pci.svg'
  }
];

export const Metrics = ({ mode = 'enterprise' }) => {
  const isEnterprise = mode === 'enterprise';

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Certified & Regulated By</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center p-4">
                <img src={cert.logo} alt={cert.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg leading-none mb-1">{cert.name}</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{cert.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <Counter
          value={1.2}
          suffix=" Cr+"
          label="Transactions Processed"
          isEnterpriseMode={isEnterprise}
        />
        <Counter
          value={80}
          suffix=" Lakhs"
          label="Successful Settlements"
          isEnterpriseMode={isEnterprise}
        />
        <Counter
          value={99.9}
          suffix="%"
          label="System Uptime"
          isEnterpriseMode={isEnterprise}
        />
      </div>
    </section>
  );
};