import React from 'react';
import { UserSegment } from '../types';
import { CheckCircle } from './Icons';
import CTAButton from './CTAButton';
import WaterflowText from './WaterflowText';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../data/hero';

interface HeroContentProps {
  mode: UserSegment;
}

const HeroContent: React.FC<HeroContentProps> = ({ mode }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;
  const currentContent = HERO_CONTENT[mode];

  return (
    <div className="relative z-30 flex flex-col items-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-20 sm:pt-4 sm:pb-24">

      {/* Animated Content Wrapper */}
      <div className="flex flex-col items-center transition-all duration-700 ease-out">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-text-main leading-[1.1] tracking-tight max-w-[60rem] mb-6 sm:mb-8 transition-opacity duration-500"
        >
          {isEnterprise ? (
            <>
              One Platform for <br /> Everything{' '}
              <WaterflowText
                words={['Payments', 'Taxation', 'HRM', 'Compliance']}
                className="italic text-brand-primary"
              />
            </>
          ) : (
            <>
              One App, Total Control. <br /> Pay{' '}
              <WaterflowText
                words={['Bills', 'Recharges', 'Hotels', 'Food']}
                className="italic text-brand-secondary"
              />
            </>
          )}
        </motion.h1>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-lg sm:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed transition-opacity duration-500 delay-75"
        >
          {currentContent.body}
        </motion.p>

        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-6 w-full sm:w-auto"
        >
          <CTAButton
            mode={mode}
            size="medium"
            className="w-full sm:w-auto"
            customText={isEnterprise ? "Get Started" : "Download Now"}
          />

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-text-muted font-medium mt-2">
            {isEnterprise ? (
              // Enterprise badges
              (currentContent.badges as string[]).map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary" />
                  <span>{badge}</span>
                </div>
              ))
            ) : (
              // Consumer: Play Store rating instead
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" className="fill-cyan-400" />
                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" className="fill-yellow-400" />
                    <path d="M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" className="fill-red-500" />
                    <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" className="fill-green-400" />
                  </svg>
                </div>
                <span className="text-text-main">{(currentContent.badges as { label: string; rating: string }).label}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(HeroContent);