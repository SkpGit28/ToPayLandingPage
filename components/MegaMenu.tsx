import React, { useState } from 'react';
import { Buildings, User, Globe, ShieldCheck, DeviceMobile, Gift, Wallet, QrCode, Receipt, Code, ChartBar, CreditCard } from './Icons';

type MenuTab = 'CONSUMER' | 'BUSINESS';

const MegaMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>('CONSUMER');

  const consumerItems = [
    { icon: DeviceMobile, title: "UPI Payments", desc: "Instant bank transfers", color: "text-brand-secondary", bg: "bg-brand-secondary/10" },
    { icon: Wallet, title: "Wallet", desc: "Secure digital wallet", color: "text-brand-secondary", bg: "bg-brand-secondary/10" },
    { icon: Gift, title: "Rewards", desc: "Earn cashback on spends", color: "text-brand-secondary", bg: "bg-brand-secondary/10" },
    { icon: Receipt, title: "Bill Payments", desc: "Utility & recharge", color: "text-brand-secondary", bg: "bg-brand-secondary/10" },
    { icon: QrCode, title: "QR & Scan Pay", desc: "Scan any QR code", color: "text-brand-secondary", bg: "bg-brand-secondary/10" },
  ];

  const businessItems = [
    { icon: Globe, title: "Global Payouts", desc: "Send money to 180+ countries", color: "text-brand-primary", bg: "bg-brand-primary/10" },
    { icon: Code, title: "API Integration", desc: "Developer-friendly docs", color: "text-brand-primary", bg: "bg-brand-primary/10" },
    { icon: ShieldCheck, title: "Compliance", desc: "Automated tax & fraud checks", color: "text-brand-primary", bg: "bg-brand-primary/10" },
    { icon: CreditCard, title: "Corporate Cards", desc: "Expense management", color: "text-brand-primary", bg: "bg-brand-primary/10" },
    { icon: ChartBar, title: "Analytics", desc: "Real-time financial insights", color: "text-brand-primary", bg: "bg-brand-primary/10" },
  ];

  const currentItems = activeTab === 'CONSUMER' ? consumerItems : businessItems;

  return (
    <div className="w-[900px] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden flex transition-all text-left">

      {/* Left Sidebar */}
      <div className="w-1/3 bg-gray-50/50 border-r border-gray-100 p-6 flex flex-col">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Select View</h3>

        <div className="space-y-2">
          <button
            onMouseEnter={() => setActiveTab('CONSUMER')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left group
              ${activeTab === 'CONSUMER'
                ? 'bg-brand-secondary/5 text-brand-secondary shadow-sm ring-1 ring-brand-secondary/20'
                : 'text-text-muted hover:bg-gray-100'}`}
          >
            <div className={`p-1.5 rounded-lg transition-colors ${activeTab === 'CONSUMER' ? 'bg-white shadow-sm' : 'bg-transparent group-hover:bg-white/50'}`}>
              <User className="w-5 h-5" />
            </div>
            <span className="font-semibold text-sm">For Consumer</span>
          </button>

          <button
            onMouseEnter={() => setActiveTab('BUSINESS')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left group
              ${activeTab === 'BUSINESS'
                ? 'bg-brand-primary/5 text-brand-primary shadow-sm ring-1 ring-brand-primary/20'
                : 'text-text-muted hover:bg-gray-100'}`}
          >
            <div className={`p-1.5 rounded-lg transition-colors ${activeTab === 'BUSINESS' ? 'bg-white shadow-sm' : 'bg-transparent group-hover:bg-white/50'}`}>
              <Buildings className="w-5 h-5" />
            </div>
            <span className="font-semibold text-sm">For Business</span>
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-8">
        <h3 className="text-xl font-bold text-text-main mb-8">
          {activeTab === 'CONSUMER' ? 'Consumer Solutions' : 'Business Solutions'}
        </h3>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          {currentItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${item.bg} ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`font-bold text-text-main transition-colors text-base ${activeTab === 'BUSINESS' ? 'group-hover:text-brand-primary' : 'group-hover:text-brand-secondary'}`}>{item.title}</h4>
                <p className="text-sm text-text-muted mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MegaMenu;