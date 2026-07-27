import React, { useState } from 'react';
import { Sparkles, Utensils, Users, Gamepad2, Camera, Heart, Wand2 } from 'lucide-react';

export const Slide02IntroduceBrand: React.FC = () => {
  const [activeWorld, setActiveWorld] = useState<'magical' | 'dark'>('magical');

  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#26152F] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#26152F] pb-4">
        <div>
          <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
            Slide 02 • Brand Concept
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold">
            INTRODUCE THE BRAND
          </h2>
        </div>
        <div className="px-4 py-1.5 rounded-xl bg-[#26152F] border border-[#E8A9C5]/40 text-xs text-[#E8A9C5] font-bold font-mono">
          BRAND NAME: SPELL &amp; SPOON
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-stretch">
        
        {/* Left Column: Services & Experience Pillars (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          
          {/* Core Service Box */}
          <div className="p-6 rounded-2xl bg-[#26152F]/60 border border-[#E8A9C5]/30 backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#E8A9C5]">
              <Utensils className="w-4 h-4 text-[#E8A9C5]" />
              <span>Service Provided</span>
            </div>
            <h3 className="font-cinzel text-xl text-[#F7EFE7] font-bold">
              A Girls-Only Themed Restaurant &amp; Comfort Space
            </h3>
            <p className="text-xs text-[#C9B8D9] leading-relaxed">
              Spell &amp; Spoon combines dining with fantasy storytelling, social games, creative activity tables, and immersive photography spaces.
            </p>

            {/* 6 Combined Service Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
              {[
                { icon: Utensils, label: 'Fantasy Food' },
                { icon: Wand2, label: 'Magical Decors' },
                { icon: Gamepad2, label: 'Board Games' },
                { icon: Sparkles, label: 'Creative Arts' },
                { icon: Camera, label: 'Photo Spots' },
                { icon: Heart, label: 'Social Haven' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-[#0F0B14]/80 border border-[#26152F] text-xs text-[#F7EFE7]">
                  <item.icon className="w-3.5 h-3.5 text-[#E8A9C5]" />
                  <span className="font-medium text-[11px]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience Box */}
          <div className="p-6 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C9A86A]">
              <Users className="w-4 h-4 text-[#C9A86A]" />
              <span>Target Audience</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Teenage Girls',
                'Young Women',
                'Best Friends & Groups',
                'Sisters & Families',
                'Fantasy & Gaming Lovers',
                'Creative & Photo Enthusiasts',
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-[#26152F] border border-[#C9A86A]/40 text-xs text-[#F7EFE7] font-medium"
                >
                  ✨ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dual World Showcase (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#26152F]/40 border border-[#26152F] p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5]">Interactive World Switcher</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveWorld('magical')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                    activeWorld === 'magical'
                      ? 'bg-[#E8A9C5] text-[#0F0B14]'
                      : 'bg-[#0F0B14] text-[#C9B8D9]'
                  }`}
                >
                  Magical
                </button>
                <button
                  onClick={() => setActiveWorld('dark')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                    activeWorld === 'dark'
                      ? 'bg-[#26152F] text-[#E8A9C5] border border-[#E8A9C5]/40'
                      : 'bg-[#0F0B14] text-[#C9B8D9]'
                  }`}
                >
                  Dark Fantasy
                </button>
              </div>
            </div>

            {/* Active World Card */}
            {activeWorld === 'magical' ? (
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#E8A9C5]/20 to-[#0F0B14] border-2 border-[#E8A9C5]/50 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8A9C5]">World 1</span>
                <h4 className="font-cinzel text-xl text-[#F7EFE7] font-bold">THE MAGICAL WORLD</h4>
                <p className="text-xs text-[#C9B8D9]">
                  A soft, welcoming, pastel-lit sanctuary featuring Rapunzel murals, pink velvet booths, flower crown workshops, and strawberry desserts.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#E8A9C5]">
                  <span className="px-2 py-0.5 rounded bg-[#0F0B14]">Soft Pink</span>
                  <span className="px-2 py-0.5 rounded bg-[#0F0B14]">Lavender</span>
                  <span className="px-2 py-0.5 rounded bg-[#0F0B14]">Warm Cream</span>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#26152F] to-[#0F0B14] border-2 border-[#C9B8D9]/40 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9B8D9]">World 2</span>
                <h4 className="font-cinzel text-xl text-[#F7EFE7] font-bold">THE DARK FANTASY WORLD</h4>
                <p className="text-xs text-[#C9B8D9]">
                  A mysterious, adventurous atmosphere with Dark Fairy murals, plum velvet seating, rose glass cloches, and dramatic mood lighting.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#C9B8D9]">
                  <span className="px-2 py-0.5 rounded bg-[#0F0B14]">Midnight Black</span>
                  <span className="px-2 py-0.5 rounded bg-[#0F0B14]">Deep Plum</span>
                  <span className="px-2 py-0.5 rounded bg-[#0F0B14]">Deep Purple</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 p-3 rounded-xl bg-[#0F0B14] border border-[#26152F] text-center">
            <span className="font-cinzel text-xs text-[#E8A9C5] font-bold tracking-widest uppercase">
              "Two Worlds. One Experience."
            </span>
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="relative z-10 text-center border-t border-[#26152F] pt-3">
        <p className="font-garamond italic text-xs text-[#C9B8D9]">
          Spell &amp; Spoon redefines dining for teenage girls and young women by offering complete creative freedom and two distinct atmospheric worlds.
        </p>
      </div>
    </div>
  );
};
