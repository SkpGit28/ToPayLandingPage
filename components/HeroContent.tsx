import React from 'react';
import { UserSegment } from '../types';
import { CheckCircle } from './Icons';
import CTAButton from './CTAButton';

interface HeroContentProps {
  mode: UserSegment;
}

const HeroContent: React.FC<HeroContentProps> = ({ mode }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;

  // Content configuration
  const content = {
    [UserSegment.ENTERPRISE]: {
      heading: "One Platform. Every Payment Experience.",
      body: "Streamline your global transactions with enterprise-grade security, automated compliance, and real-time reconciliation across all borders.",
      buttonColor: "bg-brand-primary hover:bg-brand-primary/90",
      badges: ["No credit card required", "14-day free trial"]
    },
    [UserSegment.CONSUMER]: {
      heading: "One App for Total Control.",
      body: "Manage your personal finances, split bills with friends instantly, and track your daily spending habits effortlessly from your pocket.",
      buttonColor: "bg-brand-secondary hover:bg-brand-secondary/90",
      badges: ["Free forever plan", "No hidden fees"]
    }
  };

  const currentContent = content[mode];

  return (
    <div className="relative z-30 flex flex-col items-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-20 sm:pt-4 sm:pb-24">

      {/* Animated Content Wrapper */}
      <div className="flex flex-col items-center transition-all duration-700 ease-out">

        {/* Main Heading */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-text-main leading-[1.1] tracking-tight max-w-[60rem] mb-6 sm:mb-8 transition-opacity duration-500">
          {isEnterprise ? (
            <>One Platform. <br /> Every Payment Experience.</>
          ) : (
            currentContent.heading
          )}
        </h1>

        {/* Body Text */}
        <p className="font-sans text-lg sm:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed transition-opacity duration-500 delay-75">
          {currentContent.body}
        </p>

        {/* CTA Area */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-auto">
          <CTAButton 
  mode={mode} 
  size="medium" 
  className="w-full sm:w-auto" 
  customText={isEnterprise ? "Get Started" : "Download Now"}
/>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-text-muted font-medium mt-2">
            {currentContent.badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-5 h-5 ${isEnterprise ? 'text-brand-primary' : 'text-brand-secondary'}`} />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;