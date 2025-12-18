import React, { useState, useEffect } from 'react';
import { UserSegment } from '../types';
import { Headphones, ChatTeardrop, NotePencil, WarningCircle, ArrowRight, CheckCircle, Lightning, Globe, ShieldCheck, Code, MapPin } from '../components/Icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

import SegmentedControl from '../components/SegmentedControl';

interface ContactPageProps {
  mode: UserSegment;
}

const ContactPage: React.FC<ContactPageProps> = ({ mode }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;
  const brandColor = 'text-brand-primary';
  const brandBg = 'bg-brand-primary';
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [contactMode, setContactMode] = useState<'message' | 'complaint'>('message');

  // Track mouse for holographic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const portals = [
    {
      id: 'sales',
      icon: NotePencil,
      title: "Growth & Sales",
      desc: "For enterprises looking to scale their global infrastructure.",
      status: "Available",
      wait: "15 min",
      color: "blue"
    },
    {
      id: 'support',
      icon: Headphones,
      title: "Technical Support",
      desc: "Instant troubleshooting for your transactions and cards.",
      status: "High Volume",
      wait: "4 min",
      color: "green"
    },
    {
      id: 'dev',
      icon: Code,
      title: "Developer Desk",
      desc: "Deep-dive API support and integration architecture.",
      status: "Online",
      wait: "2 min",
      color: "purple"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar mode={mode} />

      <div className="pt-20"> {/* Offset for fixed navbar */}
        {/* 1. KINETIC HERO */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]"
            style={{ transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.05}px, ${(mousePos.y - window.innerHeight / 2) * 0.05}px)` }}
          >
            <span className="text-[20vw] font-display font-black leading-none">CONNECT</span>
          </div>

          <div className="relative z-10 max-w-5xl text-center">
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`px-4 py-1.5 rounded-full ${isEnterprise ? 'bg-red-50 text-brand-primary' : 'bg-blue-50 text-brand-secondary'} text-[10px] font-bold tracking-[0.4em] uppercase border border-current opacity-70 font-display`}>
                  Communication Layer
                </div>
              </motion.div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-extrabold text-6xl sm:text-8xl mb-8 leading-[0.9]"
            >
              Talk to us, <br />
              at <span className="italic bg-clip-text text-transparent bg-[linear-gradient(90deg,theme(colors.brand.primary)_0%,theme(colors.brand.primary)_30%,theme(colors.brand.secondary)_60%,theme(colors.brand.secondary)_100%)]">lightspeed.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
            >
              Eliminating the gap between asking a question and receiving a resolution. Select a portal to begin.
            </motion.p>
          </div>
        </section>

        {/* 2. THE PORTAL GRID */}
        <section className="max-w-7xl mx-auto px-4 mb-32 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portals.map((p) => (
              <div
                key={p.id}
                onClick={() => setActiveCategory(p.id)}
                className={`group relative p-10 rounded-[40px] bg-white border-2 transition-all duration-500 cursor-pointer overflow-hidden
                  ${activeCategory === p.id ? `border-text-main shadow-2xl scale-[1.02]` : 'border-gray-50 hover:border-gray-200 shadow-sm'}
                `}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${brandBg} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity`}></div>

                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${brandBg} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <p.icon className="w-7 h-7" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <span className={`w-2 h-2 rounded-full animate-pulse ${p.status === 'High Volume' ? 'bg-orange-500' : 'bg-green-500'}`}></span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{p.status}</span>
                    </div>
                    <p className="text-xs font-medium text-text-main mt-1">Wait: {p.wait}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-text-muted leading-relaxed mb-8">{p.desc}</p>

                <div className={`flex items-center gap-2 font-bold text-sm bg-[linear-gradient(90deg,theme(colors.brand.primary)_0%,theme(colors.brand.primary)_30%,theme(colors.brand.secondary)_60%,theme(colors.brand.secondary)_100%)] bg-clip-text text-transparent italic group-hover:gap-4 transition-all`}>
                  Connect  <ArrowRight className="w-4 h-4 text-brand-secondary" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. COMBINED CONTACT & COMPLAINT SECTION */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-5xl mb-4">Get in Touch</h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">Whether you have a question or need to resolve an issue, we're here to help.</p>

            {/* SEGMENTED CONTROL */}
            <div className="flex justify-center">
              <SegmentedControl
                variant="solid"
                value={contactMode}
                onChange={(val) => setContactMode(val)}
                options={[
                  { value: 'message', label: 'Send Message' },
                  { value: 'complaint', label: 'Raise Complaint' }
                ]}
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {contactMode === 'message' ? (
              /* SEND MESSAGE FORM */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm"
              >
                <h3 className="font-display font-bold text-2xl mb-2">Send a Message</h3>
                <p className="text-text-muted mb-8">Our team will route your inquiry to the right expert.</p>

                {formSubmitted ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Message Sent!</h4>
                    <p className="text-text-muted mb-6">We'll get back to you shortly.</p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-sm font-bold text-brand-primary hover:underline"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-6">
                    <div>
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 block">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all text-base"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 block">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all text-base"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 block">Message</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all text-base resize-none"
                        placeholder="Describe your inquiry..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 group"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </motion.div>
            ) : (
              /* RAISE COMPLAINT COMPONENT */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-red-50 via-white to-blue-50 border border-red-100 rounded-3xl p-10 shadow-sm relative overflow-hidden"
              >
                {/* Decorative gradient blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <WarningCircle className="w-4 h-4" />
                    Priority Path
                  </div>

                  <h3 className="font-display font-bold text-2xl mb-2">Raise a Complaint</h3>
                  <p className="text-text-muted mb-8">Experiencing an issue? We'll escalate it immediately.</p>

                  <form className="space-y-6 mb-8">
                    <div>
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 block">Transaction ID</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all text-base"
                        placeholder="e.g. TX-992..."
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 block">Issue Description</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all text-base resize-none"
                        placeholder="Describe the issue in detail..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-xl"
                    >
                      Submit Complaint
                    </button>
                  </form>

                  {/* Resolution Steps */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-bold text-text-main uppercase tracking-wider">Resolution Process</h4>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-display font-black text-sm flex-shrink-0">
                        01
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1">Standard Escalation</h5>
                        <p className="text-xs text-text-muted">Resolved within a mandatory 12-hour window.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-secondary/10 text-brand-secondary flex items-center justify-center font-display font-black text-sm flex-shrink-0">
                        02
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1">Ombudsman Desk</h5>
                        <p className="text-xs text-text-muted">Independent audit for complex disputes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* 4. GLOBAL HUB SYNC */}
        <section className="py-32 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-xl">
              <h2 className="font-display font-bold text-5xl tracking-tight mb-6"> From India to Global .</h2>
              <p className="text-xl text-text-muted">Our physical presence spans from North India to the South India, We mostly belive in diversity and culture.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-full bg-gray-50 font-bold text-sm border border-gray-100">Live Operation Hours: 24/7/365</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                type: "Registered Office",
                city: "New Delhi",
                address: "Plot no.31, Ground Floor, Sai Enclave, Lane No: 2, Sector - 23, Dwarka, New Delhi - 110077",
                timezone: "GMT+5:30",
                coord: "28.57° N",
                img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop"
              },
              {
                type: "Chennai Office",
                city: "Chennai",
                address: "3/162 First Floor Shanamuga Valli Complex, Nehru Street Echankadu Kovilambakkam, Chennai - 600129",
                timezone: "GMT+5:30",
                coord: "12.94° N",
                img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((hub, idx) => (
              <div key={idx} className="group relative rounded-[48px] overflow-hidden aspect-[16/10] bg-gray-100 cursor-none">
                <img src={hub.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]" alt={hub.city} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>

                <div className="absolute top-8 right-8 text-right text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">Status</p>
                  <p className="font-mono text-sm">Operational</p>
                </div>

                <div className="absolute bottom-10 left-10 text-white max-w-[80%]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-70">{hub.type}</p>
                  <h3 className="text-4xl font-display font-black tracking-tighter mb-4">{hub.city}</h3>
                  <p className="text-sm text-white/80 mb-6 font-medium leading-relaxed">{hub.address}</p>

                  <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 opacity-50" />
                      <span className="text-xs font-medium">{hub.timezone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 opacity-50" />
                      <span className="text-xs font-medium">{hub.coord}</span>
                    </div>
                  </div>
                </div>

                {/* Custom Cursor Circle for Hubs */}
                <div
                  className="absolute w-24 h-24 border border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-difference"
                  style={{ left: (mousePos.x % 400) - 48, top: (mousePos.y % 400) - 48 }}
                >
                  <span className="text-[8px] font-bold text-white uppercase tracking-widest">View Map</span>
                </div>
              </div>
            ))}
          </div>
        </section >
      </div >

      <Footer />
      {styleTag}
    </div >
  );
};

const styleTag = (
  <style>{`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

export default ContactPage;
