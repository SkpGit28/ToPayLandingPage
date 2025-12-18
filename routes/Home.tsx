import React, { useState } from 'react';
import { Metrics } from '../components/Metrics';
import { Testimonials } from '../components/Testimonials';
import Navbar from '../components/Navbar';
import HeroBackground from '../components/HeroBackground';
import HeroContent from '../components/HeroContent';
import SegmentedControl from '../components/SegmentedControl';
import BentoGrid from '../components/BentoGrid';
import HelpSection from '../components/HelpSection';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import { UserSegment } from '../types';
import { Buildings, User } from '../components/Icons';

const Home: React.FC = () => {
  const [mode, setMode] = useState<UserSegment>(UserSegment.ENTERPRISE);

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden font-sans selection:bg-gray-100">

      {/* Hero Section Container */}
      <div className="relative w-full">
        {/* Background Layer */}
        <div className="absolute inset-0 h-[120vh] z-0">
          <HeroBackground mode={mode} />
        </div>

        {/* Navigation Layer */}
        <Navbar mode={mode} />

        {/* Hero Main Content */}
        <header className="relative z-10 flex flex-col items-center pt-24 sm:pt-32 pb-12 w-full">
          {/* Segmented Control */}
          <div className="w-full flex justify-center px-4 mb-6">
            <SegmentedControl
              variant="glass"
              value={mode}
              onChange={(val) => setMode(val as UserSegment)}
              options={[
                { value: UserSegment.ENTERPRISE, label: 'For Enterprises', icon: Buildings },
                { value: UserSegment.CONSUMER, label: 'For Consumers', icon: User }
              ]}
            />
          </div>

          {/* Hero Text & CTA */}
          <HeroContent mode={mode} />
        </header>
      </div>

      {/* Main Page Content - Below Fold */}
      <main className="relative z-20 bg-white/50 backdrop-blur-3xl">
        <BentoGrid mode={mode} />
        <Metrics mode="enterprise" />
        <Testimonials />
        <HelpSection mode={mode} />
        <PreFooter mode={mode} />
      </main>

      <Footer />

      {/* Styles for simple keyframe animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;