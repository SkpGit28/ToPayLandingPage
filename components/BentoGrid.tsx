import React from 'react';
import { motion } from 'framer-motion';
import { UserSegment, BentoItem } from '../types';
import SpotlightCard from './ui/SpotlightCard';
import Pill from './ui/Pill';
import SectionHeader from './ui/SectionHeader';
import ChartMockup from './ui/ChartMockup';
import CodeSnippet from './ui/CodeSnippet';
import { BENTO_DATA, BENTO_THEME } from '../data/bento';
import { SquaresFour as LayoutGrid, DeviceMobile as Smartphone } from './Icons';

interface BentoCardProps {
  item: BentoItem;
  theme: any;
  isEnterprise: boolean;
}

const BentoCard: React.FC<BentoCardProps> = React.memo(({ item, theme, isEnterprise }) => {
  const isLarge = item.type === 'large';
  const isWide = item.type === 'wide';

  return (
    <div className={`${isLarge ? 'md:col-span-2 md:row-span-2' : isWide ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1 md:row-span-1'} h-full`}>
      <SpotlightCard
        spotlightColor={theme.spotlight}
        borderColor={theme.borderColor}
        isEnterprise={isEnterprise}
        className={`h-full p-6 flex ${isWide ? 'flex-col sm:flex-row items-center gap-8' : 'flex-col justify-between'} overflow-hidden`}
      >
        {isLarge && (
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-[0.08] -mr-20 -mt-20 pointer-events-none ${theme.gradient}`}></div>
        )}

        <div className={`relative z-10 flex flex-col ${isWide ? 'flex-1' : 'h-full'} w-full`}>
          <div className={isLarge ? 'mb-6' : 'mb-2'}>
            <Pill
              icon={item.pillIcon}
              text={item.pillText}
              className={`bg-white/80 backdrop-blur border-gray-100 shadow-sm ${theme.textPrimary} ${!isLarge && 'mb-3'}`}
            />
            <h3 className={`font-bold ${isLarge ? 'text-3xl' : isWide ? 'text-2xl' : 'text-xl'} mb-1 text-text-main tracking-tight`}>
              {item.title}
            </h3>
            <p className={`text-text-muted leading-relaxed ${!isLarge && 'text-sm'} ${isWide && 'max-w-sm'}`}>
              {item.description}
            </p>
          </div>

          {item.visualType === 'chart' && (
            <ChartMockup data={item.visualData} primaryColor={theme.primary} />
          )}

          {item.visualType === 'grid' && (
            <div className="grid grid-cols-2 gap-2 mt-auto">
              {item.visualData.map((v: { label: string; icon: React.ElementType }, idx: number) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                  className="bg-white border border-gray-100 p-2 rounded-xl flex flex-col items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer"
                >
                  <v.icon className={`w-4 h-4 opacity-80 ${theme.textPrimary}`} />
                  <span className="text-[9px] font-bold text-gray-500 uppercase">{v.label}</span>
                </motion.div>
              ))}
            </div>
          )}

          {item.visualType === 'code' && (
            <CodeSnippet {...item.visualData} />
          )}

          {item.visualType === 'icon' && (
            <div className={`mt-auto w-12 h-12 rounded-2xl flex items-center justify-center ${theme.bgLight} ${theme.textPrimary}`}>
              <item.visualData className="w-6 h-6" />
            </div>
          )}

          {item.visualType === 'image' && (
            <div className="mt-auto w-[calc(100%+3rem)] -mx-6 -mb-6 flex justify-center overflow-hidden">
              <motion.img
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                src={item.visualData}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>

        {item.visualType === 'list' && (
          <div className="w-full flex gap-3 overflow-hidden mt-4">
            {item.visualData.map((v: { label: string; icon: React.ElementType }, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                whileHover={{ y: -5 }}
                className="flex-1 bg-white border border-gray-100 p-3 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <v.icon className={`w-4 h-4 ${theme.textPrimary}`} />
                <span className="text-[10px] font-bold text-gray-500 uppercase">{v.label}</span>
              </motion.div>
            ))}
          </div>
        )}
      </SpotlightCard>
    </div>
  );
});

const BentoGrid = ({ mode = UserSegment.ENTERPRISE }) => {
  const isEnterprise = mode === UserSegment.ENTERPRISE;
  const theme = BENTO_THEME(isEnterprise);
  const data = BENTO_DATA[mode];

  return (
    <section className="relative z-20 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans bg-transparent">
      <SectionHeader
        pillIcon={isEnterprise ? LayoutGrid : Smartphone}
        pillText={isEnterprise ? "Business Suite" : "Consumer App"}
        title={isEnterprise ? "ToPay Business Suite" : "Your Money, Reimagined"}
        description={isEnterprise
          ? "The complete financial operating system. Manage NCMC cards, payouts, and compliance from one dashboard."
          : "The all-in-one app for spending, saving, and managing your financial life."}
        mode={mode}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6">
        {data.map((item) => (
          <BentoCard key={item.id} item={item} theme={theme} isEnterprise={isEnterprise} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(BentoGrid);
