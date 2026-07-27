import React from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { Sparkles, Quote } from 'lucide-react';

export const Slide11BrandSlogan: React.FC = () => {
  return (
    <div className="relative min-h-[82vh] flex flex-col items-center justify-between text-center p-8 sm:p-12 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8A9C5]/10 rounded-full blur-3xl pointer-events-none animate-magical-pulse" />

      {/* Header Badge */}
      <div className="relative z-10 border-b border-[#26152F] pb-3 w-full max-w-xl mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#E8A9C5]" />
        <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
          Slide 11 • Official Brand Slogan
        </span>
      </div>

      {/* Central Dramatic Slogan Content */}
      <div className="relative z-10 my-auto max-w-3xl space-y-6">
        
        {/* Subtle Official Logo */}
        <div className="transform hover:scale-105 transition-transform duration-500">
          <BrandLogo size="md" showSubtitle={false} sparkle={true} />
        </div>

        {/* Large Slogan Typography */}
        <div className="space-y-2">
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F7EFE7] tracking-wider text-glow-pink uppercase">
            CHOOSE YOUR WORLD.
          </h1>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#E8A9C5] tracking-wider text-glow-pink uppercase">
            MAKE IT YOURS.
          </h1>
        </div>

        {/* Explanation Card */}
        <div className="p-6 rounded-2xl bg-[#26152F]/60 border border-[#E8A9C5]/30 backdrop-blur-md max-w-xl mx-auto space-y-2">
          <Quote className="w-6 h-6 text-[#E8A9C5]/50 mx-auto" />
          <span className="text-[10px] font-mono text-[#E8A9C5] uppercase font-bold tracking-widest block">
            Slogan &amp; Promise Alignment
          </span>
          <p className="font-garamond text-base sm:text-lg text-[#F7EFE7]/90 italic leading-relaxed">
            The Brand Slogan directly reflects the Brand Promise because every girl can choose the world, atmosphere, and activities that feel right for her.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="relative z-10 pt-4 border-t border-[#26152F] w-full text-xs text-[#C9B8D9]/70 font-mono tracking-widest uppercase">
        Spell &amp; Spoon • Two Worlds. One Experience.
      </div>
    </div>
  );
};
