import React from 'react';
import Counter from './ui/Counter';
import { METRICS_DATA, CERTIFICATIONS } from '../data/metrics';
import { UserSegment } from '../types';

export const Metrics = ({ mode = UserSegment.ENTERPRISE }: { mode?: UserSegment }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;

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
        {METRICS_DATA.map((metric, idx) => (
          <Counter
            key={idx}
            value={metric.value}
            suffix={metric.suffix}
            label={metric.label}
            isEnterpriseMode={isEnterprise}
          />
        ))}
      </div>
    </section>
  );
};