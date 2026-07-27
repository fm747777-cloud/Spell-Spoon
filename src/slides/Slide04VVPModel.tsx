import React from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { Eye, MessageSquareQuote, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const Slide04VVPModel: React.FC = () => {
  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-to-b from-[#26152F] to-transparent opacity-60 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#26152F] pb-4">
        <div>
          <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
            Slide 04 • Academic Framework
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold mt-1">
            THE VVP MODEL
          </h2>
        </div>

        {/* Subtle Official Logo Badge */}
        <div className="p-2 rounded-xl bg-[#26152F]/70 border border-[#E8A9C5]/30">
          <BrandLogo size="sm" showSubtitle={false} />
        </div>
      </div>

      {/* Central Definition Box */}
      <div className="relative z-10 my-4 p-5 rounded-2xl bg-[#26152F]/60 border border-[#E8A9C5]/30 backdrop-blur-md text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F0B14] border border-[#E8A9C5]/40 text-xs font-semibold text-[#E8A9C5]">
          <Layers className="w-3.5 h-3.5" /> Core Strategic Brand Architecture
        </div>
        <p className="font-garamond text-base sm:text-lg text-[#F7EFE7] italic">
          The VVP Model aligns how a brand appears, communicates, and fulfills its commitment to create a unified, trustworthy customer experience.
        </p>
      </div>

      {/* Three Pillars Composition Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 my-2">
        
        {/* Pillar 1: VISUALS */}
        <div className="group relative p-6 rounded-2xl bg-[#0F0B14] border-2 border-[#26152F] hover:border-[#E8A9C5] transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,169,197,0.25)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-[#26152F] border border-[#E8A9C5]/30">
                <Eye className="w-6 h-6 text-[#E8A9C5]" />
              </div>
              <span className="font-mono text-xs font-bold text-[#E8A9C5] px-2.5 py-1 rounded bg-[#26152F]">
                PILLAR 01
              </span>
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[#F7EFE7] tracking-wider mb-1 group-hover:text-[#E8A9C5] transition-colors">
              VISUALS
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E8A9C5] block mb-3">
              How the Brand Looks
            </span>

            <p className="text-xs text-[#C9B8D9] leading-relaxed mb-4">
              The tangible visual identity: Official Logo, 60-25-15 strict color palette, dual-world interior design, typography, and marketing media.
            </p>
          </div>

          <div className="pt-3 border-t border-[#26152F] space-y-1">
            <span className="text-[10px] uppercase font-mono text-[#C9A86A] font-bold">Key Components</span>
            <div className="flex flex-wrap gap-1 text-[10px] text-[#F7EFE7]">
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Logo</span>
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Colors</span>
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Fonts</span>
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Decors</span>
            </div>
          </div>
        </div>

        {/* Pillar 2: VOICE */}
        <div className="group relative p-6 rounded-2xl bg-[#0F0B14] border-2 border-[#26152F] hover:border-[#C9B8D9] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,184,217,0.25)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-[#26152F] border border-[#C9B8D9]/30">
                <MessageSquareQuote className="w-6 h-6 text-[#C9B8D9]" />
              </div>
              <span className="font-mono text-xs font-bold text-[#C9B8D9] px-2.5 py-1 rounded bg-[#26152F]">
                PILLAR 02
              </span>
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[#F7EFE7] tracking-wider mb-1 group-hover:text-[#C9B8D9] transition-colors">
              VOICE
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9B8D9] block mb-3">
              How the Brand Communicates
            </span>

            <p className="text-xs text-[#C9B8D9] leading-relaxed mb-4">
              The tone and message: Playful, imaginative, welcoming language style, interactive social polls, and slogan "Choose Your World. Make It Yours."
            </p>
          </div>

          <div className="pt-3 border-t border-[#26152F] space-y-1">
            <span className="text-[10px] uppercase font-mono text-[#C9A86A] font-bold">Key Components</span>
            <div className="flex flex-wrap gap-1 text-[10px] text-[#F7EFE7]">
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Personality</span>
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Tone</span>
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Messages</span>
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Interactions</span>
            </div>
          </div>
        </div>

        {/* Pillar 3: PROMISE */}
        <div className="group relative p-6 rounded-2xl bg-[#0F0B14] border-2 border-[#26152F] hover:border-[#C9A86A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,106,0.25)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-[#26152F] border border-[#C9A86A]/30">
                <ShieldCheck className="w-6 h-6 text-[#C9A86A]" />
              </div>
              <span className="font-mono text-xs font-bold text-[#C9A86A] px-2.5 py-1 rounded bg-[#26152F]">
                PILLAR 03
              </span>
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[#F7EFE7] tracking-wider mb-1 group-hover:text-[#C9A86A] transition-colors">
              PROMISE
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A86A] block mb-3">
              What the Brand Commits
            </span>

            <p className="text-xs text-[#C9B8D9] leading-relaxed mb-4">
              The core value proposition: "More Than a Meal. A World of Your Own." Delivering comfort, creative play, sisterhood, and memorable experiences.
            </p>
          </div>

          <div className="pt-3 border-t border-[#26152F] space-y-1">
            <span className="text-[10px] uppercase font-mono text-[#C9A86A] font-bold">Key Components</span>
            <div className="flex flex-wrap gap-1 text-[10px] text-[#F7EFE7]">
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Expectations</span>
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Value</span>
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Trust</span>
              <span className="px-2 py-0.5 rounded bg-[#26152F]">Proposition</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Summary */}
      <div className="relative z-10 text-center border-t border-[#26152F] pt-3 flex items-center justify-center gap-2 text-xs text-[#C9B8D9]">
        <Sparkles className="w-3.5 h-3.5 text-[#E8A9C5]" />
        <span>Together, Visuals, Voice, and Promise create the complete Spell &amp; Spoon brand identity.</span>
      </div>
    </div>
  );
};
