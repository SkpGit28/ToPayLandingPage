import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Code,
  ShieldCheck,
  DeviceMobile as Smartphone,
  Lightning as Zap,
  SquaresFour as LayoutGrid,
  CreditCard,
  Terminal,
  Users,
  Activity,
  Wallet,
  Ticket,
  ArrowsLeftRight as ArrowRightLeft,
  Bank as Landmark,
  PiggyBank,
  Gift
} from './Icons';

// --- MOCKS ---
const UserSegment = {
  ENTERPRISE: 'ENTERPRISE',
  CONSUMER: 'CONSUMER'
};

// --- COMPONENTS ---

// 1. Spotlight Card Component
const SpotlightCard = ({ children, className = "", spotlightColor, borderColor, isEnterprise = true }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { setOpacity(0.4); setIsHovered(true); }}
      onMouseLeave={() => { setOpacity(0); setIsHovered(false); }}
      className={`relative overflow-hidden rounded-[32px] border ${isHovered ? (isEnterprise ? 'border-red-500/30' : 'border-blue-500/30') : 'border-gray-200'} bg-[#fafafa] shadow-sm transition-all duration-300 ${className}`}
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Border Highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition duration-300 opacity-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 40%)`,
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
};

// 2. Pill Component
const Pill = ({ icon: Icon, text, className }) => (
  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-medium uppercase tracking-wide mb-4 ${className}`}>
    {Icon && <Icon className="w-3 h-3" />}
    <span>{text}</span>
  </div>
);

const BentoGrid = ({ mode = UserSegment.ENTERPRISE }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;

  // --- Theme Configuration ---
  const theme = {
    primary: isEnterprise ? 'bg-red-600' : 'bg-blue-600',
    textPrimary: isEnterprise ? 'text-red-600' : 'text-blue-600',
    borderPrimary: isEnterprise ? 'border-red-600' : 'border-blue-600',
    bgLight: isEnterprise ? 'bg-red-50' : 'bg-white',
    gradient: isEnterprise ? 'from-red-600 to-rose-400' : 'from-blue-600 to-cyan-400',
    spotlight: isEnterprise ? 'rgba(220, 38, 38, 0.15)' : 'rgba(37, 99, 235, 0.15)',
    borderColor: isEnterprise ? 'rgba(220, 38, 38, 0.3)' : 'rgba(37, 99, 235, 0.3)',
  };

  return (
    <>
      <style>{`
        .text-text-main { color: #111827; }
        .text-text-muted { color: #6B7280; }
      `}</style>

      <section className="relative z-20 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans bg-transparent">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <Pill
            icon={isEnterprise ? LayoutGrid : Smartphone}
            text={isEnterprise ? "Business Suite" : "Consumer App"}
            className="bg-white border-gray-200 text-gray-500 mx-auto mb-6 shadow-sm"
          />
          <motion.h2
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-4xl md:text-5xl text-text-main tracking-tight leading-tight"
          >
            {isEnterprise ? "ToPay Business Suite" : "Your Money, Reimagined"}
          </motion.h2>
          <motion.p
            key={`${mode}-p`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed"
          >
            {isEnterprise
              ? "The complete financial operating system. Manage NCMC cards, payouts, and compliance from one dashboard."
              : "The all-in-one app for spending, saving, and managing your financial life."}
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6">

          {/* Card 1: Main Feature (Large) */}
          <div className="md:col-span-2 md:row-span-2 h-full">
            <SpotlightCard
              spotlightColor={theme.spotlight}
              borderColor={theme.borderColor}
              isEnterprise={isEnterprise}
              className="h-full p-8 flex flex-col justify-between"
            >
              <div className={`absolute top-0 right-0 w-96 h-96  rounded-full blur-[100px] opacity-[0.08] -mr-20 -mt-20 pointer-events-none ${theme.gradient}`}></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <Pill
                    icon={Activity}
                    text={isEnterprise ? "Financial Overview" : "Overview"}
                    className={`bg-white/80 backdrop-blur border-gray-100 shadow-sm ${theme.textPrimary}`}
                  />
                  <h3 className="font-bold text-3xl mb-3 text-text-main tracking-tight">
                    {isEnterprise ? "ToPay Business Suite" : "Smart Wallet"}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {isEnterprise
                      ? "Real-time visualization of your NCMC cards, payouts, and revenue streams."
                      : "Track every penny with beautiful visualizations and get instant notifications."}
                  </p>
                </div>

                {/* Mockup Area */}
                <div className="flex-grow w-full rounded-2xl bg-white border border-gray-100 relative overflow-hidden shadow-sm mt-4">
                  <div className="absolute inset-0 p-4 flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                      <div className="w-24 h-2 bg-gray-100 rounded-full"></div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between h-32 px-2 pb-2 gap-2">
                      {[40, 70, 50, 90, 60, 80].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: "10%" }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100 }}
                          viewport={{ once: true }}
                          className={`flex-1 rounded-t-sm opacity-80 ${theme.primary}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: B2B Services (Ent) / Instant Transfers (Con) */}
          <div className="md:col-span-1 md:row-span-1 h-full">
            <SpotlightCard
              spotlightColor={theme.spotlight}
              borderColor={theme.borderColor}
              isEnterprise={isEnterprise}
              className="h-full p-6 flex flex-col"
            >
              <div className="z-10 flex flex-col h-full">
                <div className="mb-2">
                  <Pill
                    icon={isEnterprise ? Wallet : Zap}
                    text={isEnterprise ? "Infrastructure" : "Speed"}
                    className={`bg-white/50 border-gray-100 mb-3 ${theme.textPrimary}`}
                  />
                  <h4 className="font-bold text-xl text-text-main mb-1 tracking-tight">
                    {isEnterprise ? "B2B Services" : "Instant Transfers"}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {isEnterprise ? "Core banking & issuance suite." : "Send money to friends instantly."}
                  </p>
                </div>

                {isEnterprise ? (
                  // B2B Services Grid
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    {[
                      { l: "NCMC", i: CreditCard },
                      { l: "Vouchers", i: Ticket },
                      { l: "Cards", i: Wallet },
                      { l: "Travel", i: Globe }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                        className="bg-white border border-gray-100 p-2 rounded-xl flex flex-col items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer"
                      >
                        <item.i className={`w-4 h-4 opacity-80 ${theme.textPrimary}`} />
                        <span className="text-[9px] font-bold text-gray-500 uppercase">{item.l}</span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // Instant Transfer Visual
                  <div className={`mt-auto w-12 h-12 rounded-2xl flex items-center justify-center ${theme.bgLight} ${theme.textPrimary}`}>
                    <ArrowRightLeft className="w-6 h-6" />
                  </div>
                )}
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: API First (Ent) / Saving Jars (Con) */}
          <div className="md:col-span-1 md:row-span-1 h-full">
            <SpotlightCard
              spotlightColor={theme.spotlight}
              borderColor={theme.borderColor}
              isEnterprise={isEnterprise}
              className="h-full p-6 flex flex-col"
            >
              <div className="z-10 flex flex-col h-full">
                <div className="mb-2">
                  <Pill
                    icon={isEnterprise ? Terminal : PiggyBank}
                    text={isEnterprise ? "Developers" : "Savings"}
                    className={`bg-white/50 border-gray-100 mb-3 ${theme.textPrimary}`}
                  />
                  <h4 className="font-bold text-xl text-text-main mb-1 tracking-tight">
                    {isEnterprise ? "API First" : "Saving Jars"}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {isEnterprise ? "Integrate with 5 lines of code." : "Round up spare change automatically."}
                  </p>
                </div>

                {isEnterprise ? (
                  // API Snippet
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mt-auto w-full bg-[#1e293b] rounded-xl p-3 shadow-sm border border-gray-800 flex flex-col gap-2 font-mono text-[10px] leading-tight text-gray-300"
                  >
                    <div className="flex gap-1.5 pb-2 border-b border-gray-700/50 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="opacity-90">
                      <span className="text-purple-400">POST</span> /v1/cards <br />
                      <span className="text-blue-400">{`{`}</span> <br />
                      &nbsp;&nbsp;type: <span className="text-green-400">"ncmc"</span> <br />
                      <span className="text-blue-400">{`}`}</span>
                    </div>
                  </motion.div>
                ) : (
                  // Saving Jars Visual
                  <div className={`mt-auto w-12 h-12 rounded-2xl flex items-center justify-center ${theme.bgLight} ${theme.textPrimary}`}>
                    <Landmark className="w-6 h-6" />
                  </div>
                )}
              </div>
            </SpotlightCard>
          </div>

          {/* Card 4: Wide Feature (All Extra Services / Rewards) */}
          <div className="md:col-span-2 md:row-span-1 h-full">
            <SpotlightCard
              spotlightColor={theme.spotlight}
              borderColor={theme.borderColor}
              isEnterprise={isEnterprise}
              className="h-full p-8 flex flex-col sm:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <Pill
                  icon={isEnterprise ? Users : Gift}
                  text={isEnterprise ? "Operations" : "Perks"}
                  className={`bg-white/50 border-gray-100 mb-4 ${theme.textPrimary}`}
                />
                <h4 className="font-bold text-2xl text-text-main mb-2 tracking-tight">
                  {isEnterprise ? "All Extra Services" : "Rewards & Cashback"}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed max-w-sm">
                  {isEnterprise
                    ? "Scale your back-office with integrated HR, Tax, and Compliance modules."
                    : "Earn up to 5% cashback on your favorite brands."}
                </p>
              </div>

              {/* Animated List Area */}
              <div className="w-full flex gap-3 overflow-hidden mt-4">
                {(isEnterprise ? [
                  { t: "HRM", i: Users },
                  { t: "Tax", i: CreditCard },
                  { t: "Legal", i: ShieldCheck }
                ] : [
                  { t: "Recharge", i: Zap },
                  { t: "Travel", i: Globe },
                  { t: "FASTag", i: Smartphone }
                ]).map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    whileHover={{ y: -5 }}
                    className="flex-1 bg-white border border-gray-100 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <item.i className={`w-4 h-4 ${theme.textPrimary}`} />
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{item.t}</span>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
          </div>

        </div>
      </section>
    </>
  );
};

export default BentoGrid;
