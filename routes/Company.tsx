import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Globe, Lightning as Zap, Heart } from '../components/Icons';
import { UserSegment } from '../types';
import MainLayout from '../layouts/MainLayout';

// --- SUB-COMPONENT: Hero Section with Mouse-Following Wordmark ---
const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pt-20">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4">
        {/* Mouse-following ToPay wordmark - LARGER */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]"
          style={{
            transform: `translate(${(mousePos.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.03}px, ${(mousePos.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.03}px)`
          }}
        >
          <span className="text-[35vw] font-display font-black leading-none">ToPay</span>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Pill Badge */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="px-4 py-1.5 rounded-full bg-blue-50 text-brand-secondary text-[10px] font-bold tracking-[0.4em] uppercase border border-current opacity-70 font-display">
                THE INFRASTRUCTURE OF TRUST
              </div>
            </motion.div>
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl sm:text-8xl font-extrabold mb-8 leading-[0.9] font-display"
          >
            Engineering<br />the <span
              className="italic bg-clip-text text-transparent
  bg-[linear-gradient(90deg,theme(colors.brand.primary)_0%,theme(colors.brand.primary)_30%,theme(colors.brand.secondary)_60%,theme(colors.brand.secondary)_100%)]
">
              impossible.
            </span>

          </motion.h1>

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            We've built the world's most sophisticated financial dual-core. One for global commerce, one for everyday life.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENT: Animated Timeline with Single Moving Dot and Year Color Animation ---
const TimelineItem = ({ year, title, description, index, scrollProgress, totalItems }: any) => {
  // Animate year gradient opacity based on scroll progress
  const gradientOpacity = useTransform(
    scrollProgress,
    [0, (index / totalItems), ((index + 0.5) / totalItems), 1],
    [0, 0, 1, 1]
  );

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row gap-8 items-start mb-16 ${!isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Content Side - Year and Text stacked and left-aligned */}
      <div className="w-full md:w-1/2 px-8 flex flex-col items-start text-left">
        <div className="relative text-[48px] font-black mb-4 font-black">
          {/* Base Gray Year */}
          <span className="text-slate-100">{year}</span>

          {/* Gradient Overlay Year */}
          <motion.span
            className="absolute inset-0 bg-[linear-gradient(90deg,theme(colors.brand.primary)_0%,theme(colors.brand.primary)_30%,theme(colors.brand.secondary)_60%,theme(colors.brand.secondary)_100%)] bg-clip-text text-transparent italic"
            style={{ opacity: index === 0 ? 1 : gradientOpacity }}
          >
            {year}
          </motion.span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>

      {/* Center Line Spacer - Transparent to show parent line */}
      <div className="hidden md:flex w-12 justify-center relative self-stretch">
        <div className="h-full w-0.5 bg-transparent"></div>
      </div>

      {/* Empty Side to maintain alternating layout */}
      <div className="hidden md:block w-full md:w-1/2 px-8"></div>
    </motion.div>
  );
};

const OurStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const milestones = [
    { year: "2018", title: "The Beginning", description: "Started in a small garage in Bengaluru with a simple mission: simplify UPI for merchants." },
    { year: "2020", title: "Going National", description: "Expanded to 50+ cities. Hit our first 1 million active users milestone during the digital boom." },
    { year: "2021", title: "Series A Funding", description: "Secured $20M in Series A funding to accelerate our infrastructure development and team growth." },
    { year: "2022", title: "The Super App", description: "Launched NCMC card integration and consumer savings jars. Became a household name." },
    { year: "2023", title: "Enterprise Suite", description: "Released our comprehensive B2B payment orchestration platform for global enterprises." },
    { year: "2024", title: "Global Vision", description: "Partnering with international banks to bring seamless cross-border payments to India." },
    { year: "2025", title: "AI-Powered Finance", description: "Introducing intelligent financial assistants and predictive analytics to democratize wealth management." },
  ];

  // Calculate total height needed for the timeline
  const dotPosition = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-3 font-display">Our Journey</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">From a sketch to a movement</h3>
        </div>
        <div className="relative pt-5">
          {/* Gray background line - Full height */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2" />

          {/* Animated red line that follows the dot - Full height potential */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-brand-primary origin-top z-10"
            style={{
              height: dotPosition,
              x: '-50%'
            }}
          />

          {/* Single animated red dot - Centered on line end */}
          <motion.div
            className="hidden md:block absolute left-1/2 w-4 h-4 bg-brand-primary rounded-full shadow-[0_0_0_4px_rgba(227,52,65,0.2)] z-20"
            style={{
              top: dotPosition,
              x: '-50%',
              y: '-50%'
            }}
          />

          {milestones.map((item, idx) => (
            <TimelineItem key={idx} {...item} index={idx} scrollProgress={scrollYProgress} totalItems={milestones.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: Values with Brand Red ---
const ValueCard = ({ icon: Icon, title, desc }: any) => (
  <motion.div
    className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-primary hover:shadow-xl transition-all duration-300 group"
  >
    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Values = () => (
  <section className="py-24 bg-[#fafafa]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight font-display">
            Built on trust,<br />driven by <span className="bg-[linear-gradient(90deg,theme(colors.brand.primary)_0%,theme(colors.brand.primary)_30%,theme(colors.brand.secondary)_60%,theme(colors.brand.secondary)_100%)] bg-clip-text text-transparent italic">innovation.</span>
          </h2>
          <p className="text-slate-600 mb-8">
            Our core values aren't just words on a wall. They are the principles that guide every line of code we write.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ValueCard
            icon={Shield}
            title="Uncompromising Security"
            desc="We treat your money with more care than our own. Bank-grade encryption is our baseline."
          />
          <ValueCard
            icon={Zap}
            title="Radical Velocity"
            desc="Finance shouldn't be slow. We build systems that move at the speed of the internet."
          />
          <ValueCard
            icon={Globe}
            title="Transparent Always"
            desc="No hidden fees. No asterisk. Just honest, clear pricing for everyone."
          />
          <ValueCard
            icon={Heart}
            title="User Obsessed"
            desc="We don't just build features; we solve real problems for real people."
          />
        </div>
      </div>
    </div>
  </section>
);

// --- SUB-COMPONENT: Team Section ---
const TeamMember = ({ name, position, image }: any) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={`relative ${showTooltip ? 'z-50' : 'z-10'}`}>
      <motion.div
        className="rounded-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-center whitespace-nowrap z-50 shadow-xl"
        >
          <p className="font-bold text-xs">{name}</p>
          <p className="text-xs text-gray-300">{position}</p>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
        </motion.div>
      )}
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    { name: "Shrree Krishan Chaudhary", position: "CEO", image: "/assets/krishan-choudhary.png" },
    { name: "Gagan Kumar", position: "Founder", image: "/assets/gagan-kumar.png" },
    { name: "Sarah Chen", position: "Head of Engineering", image: "https://i.pravatar.cc/200?img=5" },
    { name: "Marcus Johnson", position: "Product Lead", image: "https://i.pravatar.cc/200?img=12" },
    { name: "Priya Sharma", position: "Design Director", image: "https://i.pravatar.cc/200?img=47" },
    { name: "Alex Rodriguez", position: "CTO", image: "https://i.pravatar.cc/200?img=13" },
  ];

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight font-display">
              Human-centric,<br />engineering-first.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We've assembled a world-class team from places like Google, Stripe, and Goldman Sachs, united by one goal: to fix the internet's broken financial layer.
            </p>
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary/90 transition-colors shadow-lg w-fit">
              Join the Revolution
            </button>
          </div>

          {/* Right: Team Card with Subtle Red Gradient and Grain */}
          <div className="lg:w-1/2">
            <div className="relative bg-white rounded-3xl p-8 h-full flex flex-col justify-center">
              {/* Subtle red gradient with grain texture */}
              <div
                className="absolute inset-0 opacity-[0.12] rounded-3xl overflow-hidden"
              >
                {/* Grain texture overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    opacity: 1
                  }}
                />
              </div>

              <div className="relative z-10">
                {/* CEO & Founder - Side by Side */}
                <div className="flex justify-center gap-8 mb-8">
                  <div className="w-24 h-24">
                    <TeamMember {...teamMembers[0]} />
                  </div>
                  <div className="w-24 h-24">
                    <TeamMember {...teamMembers[1]} />
                  </div>
                </div>

                {/* Other team members - smaller grid */}
                <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
                  {/* Small */}
                  <div className="w-16 h-16">
                    <TeamMember {...teamMembers[2]} />
                  </div>
                  {/* Medium */}
                  <div className="w-20 h-20">
                    <TeamMember {...teamMembers[3]} />
                  </div>
                  {/* Small */}
                  <div className="w-16 h-16">
                    <TeamMember {...teamMembers[4]} />
                  </div>
                  {/* Medium */}
                  <div className="w-20 h-20">
                    <TeamMember {...teamMembers[5]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN EXPORT ---
export default function AboutUs() {
  return (
    <MainLayout mode={UserSegment.ENTERPRISE}>
      <Hero />
      <Values />
      <OurStory />
      <TeamSection />
    </MainLayout>
  );
}
