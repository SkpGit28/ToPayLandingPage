import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DATA = [
  {
    id: 1,
    type: 'Product',
    title: 'UPI Gateway',
    metric: '99.99% uptime',
    detail: 'Handles millions of daily transactions with bank-grade reliability.'
  },
  {
    id: 2,
    type: 'People',
    title: 'Risk & Fraud Engine',
    metric: '45% fraud reduction',
    detail: 'Built by a cross-functional team combining finance + ML expertise.'
  },
  {
    id: 3,
    type: 'Impact',
    title: 'Merchant Adoption',
    metric: '10,000+ businesses',
    detail: 'From kirana stores to enterprises across India.'
  },
];

export default function CompanyLedger() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">
            The Living Ledger
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our story, told through what matters
          </h3>
        </div>

        {/* Ledger Items */}
        <div className="space-y-6">
          {DATA.map(item => (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActive(active === item.id ? null : item.id)}
              className="bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase">
                    {item.type}
                  </p>
                  <h4 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h4>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900">
                    {item.metric}
                  </p>
                  <p className="text-xs text-slate-500">
                    Tap to expand
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {active === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-slate-600 text-sm leading-relaxed"
                  >
                    {item.detail}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
