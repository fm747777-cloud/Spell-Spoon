import React from 'react';
import { OfficialBrandVideo } from '../components/OfficialBrandVideo';
import { Film, Sparkles, ArrowRight } from 'lucide-react';

interface VideoSlideProps {
  onNext: () => void;
}

export const VideoSlide: React.FC<VideoSlideProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-[82vh] flex flex-col items-center justify-center p-4 sm:p-8 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#26152F]/50 rounded-full blur-3xl pointer-events-none" />

      {/* Transition Banner Header */}
      <div className="relative z-10 mb-4 text-center space-y-1">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#26152F] border border-[#E8A9C5]/30 text-xs font-semibold text-[#E8A9C5]">
          <Film className="w-3.5 h-3.5 text-[#E8A9C5]" />
          <span>Official Brand Experience Video</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold text-glow-pink">
          “WELCOME TO YOUR WORLD.”
        </h2>
        <p className="font-garamond text-xs sm:text-sm text-[#C9B8D9] italic">
          30-Second Official Spell &amp; Spoon Cinematic Brand Introduction
        </p>
      </div>

      {/* Official Video Player Component */}
      <div className="relative z-10 w-full">
        <OfficialBrandVideo onNextSlide={onNext} />
      </div>

      {/* Next Step Footer */}
      <div className="relative z-10 mt-4 flex items-center justify-between w-full max-w-5xl px-2">
        <span className="text-xs text-[#C9B8D9]/70">
          The video introduces the two contrasting worlds, dining atmosphere, and creative activity spaces.
        </span>
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#26152F] hover:bg-[#E8A9C5] text-[#E8A9C5] hover:text-[#0F0B14] font-semibold text-xs border border-[#E8A9C5]/40 transition-all cursor-pointer"
        >
          <span>Continue to Brand Introduction (Slide 2)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
