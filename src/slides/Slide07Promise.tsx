import React from 'react';
import { ShieldCheck, Sparkles, Heart, Gift, Quote, CheckCircle2 } from 'lucide-react';

export const Slide07Promise: React.FC = () => {
  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8A9C5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#26152F] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 border-b border-[#26152F] pb-4">
        <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
          Slide 07 • VVP Pillar 3
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold mt-1">
          PROMISE
        </h2>
      </div>

      {/* Hero Quote Composition Banner */}
      <div className="relative z-10 my-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#26152F]/90 via-[#0F0B14] to-[#26152F]/90 border-2 border-[#E8A9C5]/40 shadow-2xl text-center space-y-3">
        <Quote className="w-10 h-10 text-[#E8A9C5]/40 mx-auto" />
        
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F7EFE7] tracking-wider text-glow-pink">
          “MORE THAN A MEAL.”
        </h1>
        
        <h3 className="font-cinzel text-xl sm:text-2xl text-[#E8A9C5] tracking-widest font-semibold">
          “A WORLD OF YOUR OWN.”
        </h3>

        {/* Value Proposition Quote */}
        <div className="pt-3 max-w-2xl mx-auto">
          <p className="font-garamond text-base sm:text-lg text-[#F7EFE7]/90 italic leading-relaxed">
            “Spell &amp; Spoon gives girls more than a meal. It combines food, fantasy, play, creativity, and social experiences in one place.”
          </p>
        </div>
      </div>

      {/* Three Detailed Academic Framework Boxes */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
        
        {/* Box 1: WHAT CUSTOMERS CAN EXPECT */}
        <div className="p-5 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E8A9C5] uppercase">
            <Gift className="w-4 h-4 text-[#E8A9C5]" />
            <span>What Customers Can Expect</span>
          </div>
          <ul className="space-y-2 text-xs text-[#C9B8D9]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A9C5]" /> Absolute Comfort &amp; Safety
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A9C5]" /> Themed Fantasy Meals &amp; Drinks
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A9C5]" /> Board Games &amp; Interactive Tables
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A9C5]" /> Creative Flower Crown &amp; Art Crafts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A9C5]" /> Social Connection for Friends &amp; Sisters
            </li>
          </ul>
        </div>

        {/* Box 2: THE VALUE PROVIDED */}
        <div className="p-5 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C9B8D9] uppercase">
            <Heart className="w-4 h-4 text-[#C9B8D9]" />
            <span>The Value Provided</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-[#F7EFE7]">
            <div className="p-2.5 rounded-xl bg-[#26152F]/60 border border-[#26152F] text-center">
              <span className="font-cinzel font-bold text-[#E8A9C5] block">A Place To</span> Relax &amp; Unwind
            </div>
            <div className="p-2.5 rounded-xl bg-[#26152F]/60 border border-[#26152F] text-center">
              <span className="font-cinzel font-bold text-[#E8A9C5] block">A Place To</span> Have Fun &amp; Play
            </div>
            <div className="p-2.5 rounded-xl bg-[#26152F]/60 border border-[#26152F] text-center">
              <span className="font-cinzel font-bold text-[#E8A9C5] block">A Place To</span> Express Yourself
            </div>
            <div className="p-2.5 rounded-xl bg-[#26152F]/60 border border-[#26152F] text-center">
              <span className="font-cinzel font-bold text-[#E8A9C5] block">A Place To</span> Create Memories
            </div>
          </div>
        </div>

        {/* Box 3: TRUSTWORTHINESS & MEMORABILITY */}
        <div className="p-5 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C9A86A] uppercase">
            <ShieldCheck className="w-4 h-4 text-[#C9A86A]" />
            <span>Trust &amp; Consistency</span>
          </div>
          <p className="text-xs text-[#C9B8D9] leading-relaxed">
            What makes the brand trustworthy and memorable is total alignment across all three VVP pillars:
          </p>
          <div className="p-3 rounded-xl bg-[#26152F] border border-[#C9A86A]/30 text-xs text-[#F7EFE7] space-y-1">
            <span className="font-bold text-[#E8A9C5] block">VVP Harmony:</span>
            <span>Visuals + Voice + Promise work seamlessly together to deliver the exact promised world every single visit.</span>
          </div>
        </div>

      </div>

      {/* Footer Banner */}
      <div className="relative z-10 pt-3 border-t border-[#26152F] flex items-center justify-between text-xs text-[#C9B8D9]">
        <span>Brand Commitment: "Choose Your World. Make It Yours."</span>
        <span className="text-[#E8A9C5] font-mono font-bold">✨ 100% Brand Authenticity</span>
      </div>
    </div>
  );
};
