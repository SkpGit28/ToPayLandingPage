import React from 'react';
import { UserSegment } from '../types';

interface HeroBackgroundProps {
  mode: UserSegment;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ mode }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-white">
      {/* Noise Texture Overlay - Applied with overlay blend mode */}
      <div className="absolute inset-0 z-20 opacity-40 bg-noise mix-blend-overlay pointer-events-none"></div>

      {/* 
        Columnar Aurora Effects 
        Tall, narrow divs, skewed and heavily blurred to create "pillars of light"
      */}
      <div className="absolute inset-0 z-10 opacity-70">

        {/* Left Pillar */}
        <div
          className={`absolute -top-[20%] left-[5%] w-[40vw] h-[140vh] transform -skew-x-12 blur-[80px] md:blur-[120px] transition-colors duration-1000 ease-in-out
            ${isEnterprise ? 'bg-rose-200/60' : 'bg-blue-200/60'}
          `}
        />

        {/* Center-Right Highlight Pillar */}
        <div
          className={`absolute -top-[30%] left-[40%] w-[30vw] h-[150vh] transform -skew-x-12 blur-[90px] md:blur-[130px] transition-colors duration-1000 ease-in-out
            ${isEnterprise ? 'bg-brand-primary/20' : 'bg-brand-secondary/20'}
          `}
        />

        {/* Far Right Accent Pillar */}
        <div
          className={`absolute top-[10%] right-[2%] w-[40vw] h-[100vh] transform -skew-x-12 blur-[100px] md:blur-[140px] transition-colors duration-1000 ease-in-out
            ${isEnterprise ? 'bg-orange-100/50' : 'bg-cyan-100/50'}
          `}
        />

        {/* Bottom Left Subtle Glow */}
        <div
          className={`absolute bottom-[-20%] left-[-15%] w-[50vw] h-[80vh] blur-[70px] md:blur-[100px] transition-colors duration-1000 ease-in-out
            ${isEnterprise ? 'bg-red-50/80' : 'bg-indigo-50/80'}
          `}
        />
      </div>
    </div>
  );
};

export default HeroBackground;