import React from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { Sparkles, CheckCircle, ArrowRight, Layers, Heart, MessageSquare } from 'lucide-react';

interface Slide12FinalRecommendationProps {
  onRestart?: () => void;
}

export const Slide12FinalRecommendation: React.FC<Slide12FinalRecommendationProps> = ({ onRestart }) => {
  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8A9C5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#26152F] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 border-b border-[#26152F] pb-4">
        <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
          Slide 12 • Group Project Synthesis
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold mt-1">
          FINAL RECOMMENDATION
        </h2>
      </div>

      {/* Main Core Recommendation Box */}
      <div className="relative z-10 my-3 p-6 rounded-3xl bg-gradient-to-r from-[#26152F] via-[#0F0B14] to-[#26152F] border-2 border-[#E8A9C5]/40 text-center space-y-3">
        <span className="text-xs font-mono font-bold uppercase text-[#E8A9C5] tracking-widest">
          Core Academic Strategy Recommendation
        </span>
        
        <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F7EFE7] text-glow-pink">
          THE TWO-WORLD CONCEPT
        </h1>
        
        <h3 className="font-cinzel text-lg sm:text-xl text-[#E8A9C5] font-semibold tracking-wider">
          “TWO WORLDS. ONE EXPERIENCE.”
        </h3>

        <p className="font-garamond text-sm sm:text-base text-[#C9B8D9] max-w-2xl mx-auto italic">
          The two-world framework is the strategic engine that harmonizes all elements of the brand identity.
        </p>
      </div>

      {/* Connection Grid connecting VVP + Marketing + Experience */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-5 gap-2 my-2 text-center text-xs">
        {[
          { label: 'VISUALS', detail: 'Magical & Dark Fantasy decors', icon: Sparkles },
          { label: 'VOICE', detail: 'Playful & welcoming copy', icon: MessageSquare },
          { label: 'PROMISE', detail: 'Comfort, freedom & memories', icon: Heart },
          { label: 'MARKETING', detail: 'TikTok & cinematic video', icon: Layers },
          { label: 'EXPERIENCE', detail: '5-stage customer journey', icon: CheckCircle },
        ].map((item, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-[#0F0B14] border border-[#26152F] space-y-1">
            <item.icon className="w-4 h-4 text-[#E8A9C5] mx-auto" />
            <span className="font-cinzel font-bold text-[#F7EFE7] block text-xs">{item.label}</span>
            <p className="text-[10px] text-[#C9B8D9]">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Final Closing Statement & Official Logo End Card */}
      <div className="relative z-10 p-6 rounded-2xl bg-[#0F0B14] border-2 border-[#26152F] text-center space-y-4">
        <p className="font-cinzel text-base sm:text-lg text-[#F7EFE7] font-semibold max-w-2xl mx-auto leading-relaxed">
          “Spell &amp; Spoon is not just a place to eat. It is a place where every girl can choose her world, enjoy the experience, and make it her own.”
        </p>

        {/* End Official Logo */}
        <div className="pt-2">
          <BrandLogo size="md" showSubtitle={true} subtitleText="THANK YOU • Q&amp;A" sparkle={true} />
        </div>

        {onRestart && (
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#26152F] hover:bg-[#E8A9C5] text-[#E8A9C5] hover:text-[#0F0B14] font-semibold text-xs border border-[#E8A9C5]/40 transition-all cursor-pointer"
          >
            <span>Replay Presentation from Slide 1</span>
          </button>
        )}
      </div>

      {/* Footer Group Sign-off */}
      <div className="relative z-10 pt-3 border-t border-[#26152F] flex items-center justify-between text-[11px] text-[#C9B8D9]/70 font-mono">
        <span>Group Academic Project Completion</span>
        <span className="text-[#E8A9C5]">VVP Model Presentation • Spell &amp; Spoon</span>
      </div>
    </div>
  );
};
