import React from 'react';
import { UserSegment } from '../types';
import { LifeBuoy, BookOpen, ChatCircle, ArrowRight } from './Icons';

interface HelpSectionProps {
  mode: UserSegment;
}

const HelpSection: React.FC<HelpSectionProps> = ({ mode }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;
  
  const accentColor = isEnterprise ? 'text-brand-primary' : 'text-brand-secondary';
  const bgColor = isEnterprise ? 'bg-brand-primary' : 'bg-brand-secondary';

  const cards = [
    {
      icon: BookOpen,
      title: "Documentation",
      desc: isEnterprise ? "Detailed API references and guides." : "User guides and tutorials.",
    },
    {
      icon: ChatCircle,
      title: "Community Forum",
      desc: "Connect with other users and developers.",
    },
    {
      icon: LifeBuoy,
      title: "24/7 Support",
      desc: "Get help from our expert team anytime.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl text-text-main mb-4">Need help?</h2>
          <p className="text-text-muted">We're here to support you every step of the way.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-100">
              <div className={`w-12 h-12 rounded-xl ${isEnterprise ? 'bg-red-50 text-brand-primary' : 'bg-blue-50 text-brand-secondary'} flex items-center justify-center mb-6 transition-colors group-hover:scale-110 duration-300`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-text-main mb-2">{card.title}</h3>
              <p className="text-text-muted mb-6">{card.desc}</p>
              <div className={`flex items-center text-sm font-semibold ${accentColor} gap-1 group-hover:gap-2 transition-all`}>
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;