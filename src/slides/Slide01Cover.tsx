import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Slide01CoverProps {
  onNext: () => void;
}

export const Slide01Cover: React.FC<Slide01CoverProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-[82vh] flex flex-col items-center justify-center text-center p-6 sm:p-12 overflow-hidden rounded-3xl bg-[#0F0B14] border border-[#E8A9C5]/20 shadow-2xl">
      
      {/* Background Atmosphere: Split Gradient */}
      <div className="absolute inset-0 z-0 flex pointer-events-none">
        <div className="w-1/2 h-full bg-gradient-to-br from-[#E8A9C5]/20 via-[#26152F] to-[#0F0B14]" />
        <div className="w-1/2 h-full bg-gradient-to-bl from-[#26152F] via-[#0F0B14] to-[#0F0B14]" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A86A 0%, transparent 70%)' }}
        />
      </div>

      {/* Visual Accents: Atmospheric Particles */}
      <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-[#E8A9C5]/15 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-40 h-40 bg-[#C9B8D9]/15 blur-[80px] rounded-full pointer-events-none" />

      {/* Decorative Frame Elements */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-l-2 border-[#C9A86A]/40 pointer-events-none" />
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-r-2 border-[#C9A86A]/40 pointer-events-none" />

      {/* Brand Statement / Eyebrow */}
      <div className="relative z-10 mb-2 overflow-hidden">
        <span className="block text-[#E8A9C5] text-xs sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-semibold opacity-90 mb-4">
          Official Brand Presentation
        </span>
      </div>

      {/* Immersive Title Display */}
      <div className="relative z-10 my-2">
        <h1 className="text-6xl sm:text-8xl md:text-[110px] leading-[0.85] font-garamond font-light mb-6 italic tracking-tight">
          <span className="text-[#F7EFE7]">Spell</span>
          <span className="text-[#C9B8D9] mx-2 sm:mx-4 text-3xl sm:text-5xl md:text-[60px] not-italic opacity-40">&amp;</span>
          <span className="text-[#E8A9C5] text-glow-pink font-normal">Spoon</span>
        </h1>
      </div>

      {/* Tagline with Ambient Lines */}
      <div className="relative z-10 flex items-center justify-center space-x-4 sm:space-x-6 mb-8 max-w-2xl">
        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#E8A9C5]" />
        <p className="text-base sm:text-2xl tracking-[0.2em] font-light uppercase text-[#C9B8D9] font-cinzel">
          Two Worlds. One Experience.
        </p>
        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#E8A9C5]" />
      </div>

      {/* Academic Subtitle Badge */}
      <div className="relative z-10 bg-[#26152F]/70 backdrop-blur-md border border-[#E8A9C5]/20 px-6 sm:px-8 py-3.5 rounded-full shadow-xl">
        <p className="text-xs sm:text-sm tracking-widest font-light text-[#F7EFE7]/90">
          Building a <span className="text-[#E8A9C5] font-medium font-cinzel">Strong Brand Identity</span> Using the VVP Model
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="relative z-10 mt-8">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E8A9C5] via-[#C9B8D9] to-[#C9A86A] text-[#0F0B14] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:brightness-110 shadow-[0_0_35px_rgba(232,169,197,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Begin Brand Experience</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Interaction Hint */}
      <div className="relative z-10 mt-8 flex flex-col items-center">
        <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9B8D9]/50 mb-2 font-mono">
          Begin Cinematic Sequence
        </p>
        <div className="w-5 h-8 border border-[#E8A9C5]/40 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#E8A9C5] rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

