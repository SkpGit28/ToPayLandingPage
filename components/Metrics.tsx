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
        className={`text-4xl md:text-5xl font-bold tracking-tight ${isEnterpriseMode ? "text-red-600" : "text-blue-600"
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
          {/* RBI */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center p-4">
              <img src="/assets/RBI.svg" alt="RBI" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg leading-none mb-1">RBI</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Regulated Entity</div>
            </div>
          </div>

          {/* NPCI */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center p-4">
              <img src="/assets/npci.svg" alt="NPCI" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg leading-none mb-1">NPCI</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Strategic Partner</div>
            </div>
          </div>

          {/* RuPay */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center p-4">
              <img src="/assets/rupay.svg" alt="RuPay" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg leading-none mb-1">RuPay</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Issuance Partner</div>
            </div>
          </div>

          {/* PCI-DSS */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center p-4">
              <img src="/assets/pci.svg" alt="PCI-DSS" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg leading-none mb-1">PCI-DSS</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Security L1</div>
            </div>
          </div>
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