import React, { useState } from 'react';
import { Compass, Sparkles, Heart, Smile, RotateCcw, CheckCircle } from 'lucide-react';

export const Slide09CustomerExperience: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      stage: 'STAGE 01',
      title: 'BEFORE VISITING',
      emotion: 'Curiosity & Excitement',
      icon: Compass,
      description: 'Triggered by social media reels or friend recommendations. Browsing menus, choosing between Pink Magic or Dark Fantasy.',
    },
    {
      stage: 'STAGE 02',
      title: 'UPON ARRIVAL',
      emotion: 'Discovery & Wonder',
      icon: Sparkles,
      description: 'Stepping through the dual grand doors. Absorbing the contrasting decor, soft lighting, and magical scents.',
    },
    {
      stage: 'STAGE 03',
      title: 'DURING THE EXPERIENCE',
      emotion: 'Comfort, Freedom, Fun & Connection',
      icon: Heart,
      description: 'Savoring signature drinks, playing board games, making flower crowns, taking group photos, and laughing together.',
    },
    {
      stage: 'STAGE 04',
      title: 'AFTER LEAVING',
      emotion: 'Happiness, Nostalgia & Desire to Return',
      icon: Smile,
      description: 'Posting photos on Instagram/TikTok, wearing crafted tiaras, and planning the next group outing to explore the other world.',
    },
  ];

  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#26152F]/80 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 border-b border-[#26152F] pb-4">
        <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
          Slide 09 • Customer Journey Map
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold mt-1">
          CUSTOMER EXPERIENCE
        </h2>
      </div>

      {/* 5-Pillar Timeline Bar */}
      <div className="relative z-10 my-4 space-y-2">
        <span className="text-xs font-mono font-bold text-[#C9A86A] uppercase">Core Experience Progression</span>
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 rounded-2xl bg-[#26152F]/50 border border-[#E8A9C5]/30">
          {['CURIOSITY', 'DISCOVERY', 'COMFORT', 'FUN', 'MEMORIES'].map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 p-2 rounded-xl bg-[#0F0B14] text-center border border-[#26152F]">
                <span className="font-cinzel text-xs font-bold text-[#E8A9C5] block">{step}</span>
              </div>
              {idx < 4 && <span className="text-[#C9A86A] font-bold text-xs hidden sm:inline">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Interactive 4-Stage Breakdown Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-2">
        {stages.map((stg, idx) => {
          const isActive = activeStage === idx;
          const Icon = stg.icon;

          return (
            <div
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#26152F] border-[#E8A9C5] shadow-[0_0_25px_rgba(232,169,197,0.3)] transform -translate-y-1'
                  : 'bg-[#0F0B14] border-[#26152F] hover:border-[#E8A9C5]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-[#0F0B14] border border-[#26152F]">
                    <Icon className="w-5 h-5 text-[#E8A9C5]" />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#C9A86A]">{stg.stage}</span>
                </div>

                <h3 className="font-cinzel text-base font-bold text-[#F7EFE7] mb-1">{stg.title}</h3>
                <span className="text-[11px] font-semibold text-[#E8A9C5] block mb-2">{stg.emotion}</span>
                <p className="text-xs text-[#C9B8D9] leading-relaxed">{stg.description}</p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#26152F] text-[10px] text-[#C9B8D9]/70 font-mono">
                Click to highlight stage
              </div>
            </div>
          );
        })}
      </div>

      {/* Final Impression Quote Box */}
      <div className="relative z-10 p-5 rounded-2xl bg-gradient-to-r from-[#26152F] via-[#0F0B14] to-[#26152F] border-2 border-[#E8A9C5]/40 text-center space-y-1">
        <span className="text-[10px] font-mono uppercase text-[#E8A9C5] font-bold tracking-widest">Final Customer Impression</span>
        <h3 className="font-cinzel text-lg sm:text-xl text-[#F7EFE7] font-bold text-glow-pink">
          “I had fun, I felt comfortable, and I experienced something different.”
        </h3>
      </div>
    </div>
  );
};
