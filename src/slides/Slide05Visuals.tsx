import React, { useState } from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { Palette, Type, Image as ImageIcon, Sparkles, Layout, Instagram, Video } from 'lucide-react';
import { ColorSwatch } from '../types';

export const Slide05Visuals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'logo' | 'colors' | 'images' | 'fonts' | 'social'>('colors');

  const swatches: ColorSwatch[] = [
    { name: 'MIDNIGHT BLACK', hex: '#0F0B14', usage: 'Dominant Backgrounds & Mystery Atmosphere', percentage: '35%', world: 'dark_fantasy' },
    { name: 'DEEP PLUM', hex: '#26152F', usage: 'Rich Velvet Booths & Container Cards', percentage: '25%', world: 'dark_fantasy' },
    { name: 'WARM CREAM', hex: '#F7EFE7', usage: 'Soft Pastel Walls, Tableware & Main Text', percentage: '15%', world: 'magical' },
    { name: 'LAVENDER MIST', hex: '#C9B8D9', usage: 'Subtle Accent Lighting & Supporting Labels', percentage: '10%', world: 'both' },
    { name: 'SPELL PINK', hex: '#E8A9C5', usage: 'Signature Brand Accent, Glows, Borders & Buttons', percentage: '10%', world: 'magical' },
    { name: 'ANTIQUE GOLD', hex: '#C9A86A', usage: 'Luxury Mirrors, Cutlery & Crown Detailing', percentage: '5%', world: 'both' },
  ];

  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#26152F]/70 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#26152F] pb-4">
        <div>
          <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
            Slide 05 • VVP Pillar 1
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold mt-1">
            VISUALS
          </h2>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-[#26152F]/70 border border-[#26152F]">
          {[
            { id: 'colors', label: 'Colors', icon: Palette },
            { id: 'logo', label: 'Logo', icon: Sparkles },
            { id: 'images', label: 'Images', icon: ImageIcon },
            { id: 'fonts', label: 'Fonts', icon: Type },
            { id: 'social', label: 'Social Media', icon: Instagram },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#E8A9C5] text-[#0F0B14] shadow-md'
                    : 'text-[#C9B8D9] hover:text-[#F7EFE7]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Tab Content */}
      <div className="relative z-10 my-4 flex-1">
        
        {/* TAB 1: COLORS */}
        {activeTab === 'colors' && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-[#26152F]/50 border border-[#E8A9C5]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold font-mono text-[#E8A9C5] uppercase">Strict Brand Color Palette</span>
                <h3 className="font-cinzel text-lg text-[#F7EFE7] font-semibold">60-25-15 Proportion Ratio Balance</h3>
              </div>
              <div className="text-xs text-[#C9B8D9]">
                Spell Pink (#E8A9C5) serves as the recognizable brand signature across all materials.
              </div>
            </div>

            {/* Color Proportion Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-mono text-[#C9B8D9]">
                <span>60% Midnight Black &amp; Deep Plum</span>
                <span>25% Warm Cream &amp; Lavender</span>
                <span>15% Spell Pink &amp; Gold</span>
              </div>
              <div className="w-full h-3 rounded-full overflow-hidden flex border border-[#26152F]">
                <div className="h-full bg-[#0F0B14] w-[35%]" />
                <div className="h-full bg-[#26152F] w-[25%]" />
                <div className="h-full bg-[#F7EFE7] w-[15%]" />
                <div className="h-full bg-[#C9B8D9] w-[10%]" />
                <div className="h-full bg-[#E8A9C5] w-[10%]" />
                <div className="h-full bg-[#C9A86A] w-[5%]" />
              </div>
            </div>

            {/* Interactive Swatch Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {swatches.map((swatch, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-[#0F0B14] border border-[#26152F] hover:border-[#E8A9C5] transition-all group flex flex-col justify-between"
                >
                  <div
                    className="w-full h-16 rounded-xl shadow-inner border border-white/10 flex items-center justify-center font-mono text-[10px] font-bold"
                    style={{ backgroundColor: swatch.hex, color: swatch.hex === '#F7EFE7' || swatch.hex === '#E8A9C5' ? '#0F0B14' : '#F7EFE7' }}
                  >
                    {swatch.hex}
                  </div>
                  <div className="mt-2 space-y-1">
                    <span className="font-cinzel text-xs font-bold text-[#F7EFE7] block truncate">
                      {swatch.name}
                    </span>
                    <p className="text-[10px] text-[#C9B8D9]/80 leading-tight">
                      {swatch.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: LOGO */}
        {activeTab === 'logo' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 p-6 rounded-2xl bg-[#0F0B14] border-2 border-[#26152F] text-center flex flex-col items-center justify-center">
              <span className="text-xs uppercase font-mono text-[#E8A9C5] font-bold mb-4">Official Brand Logo</span>
              <BrandLogo size="lg" showSubtitle={true} sparkle={true} />
              <p className="text-[11px] text-[#C9B8D9] mt-4 italic">
                Official logo displayed consistently on every slide.
              </p>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl bg-[#26152F]/50 border border-[#E8A9C5]/30 space-y-2">
                <span className="text-xs font-bold font-mono text-[#E8A9C5] uppercase">Symbolic Breakdown</span>
                <h3 className="font-cinzel text-xl text-[#F7EFE7] font-bold">The Meaning Behind "Spell &amp; Spoon"</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#0F0B14] border border-[#26152F]">
                    <span className="font-cinzel text-sm font-bold text-[#E8A9C5] block">"SPELL"</span>
                    <p className="text-xs text-[#C9B8D9] mt-1">Represents magic, fantasy, stories, imagination, and wonder.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0F0B14] border border-[#26152F]">
                    <span className="font-cinzel text-sm font-bold text-[#C9A86A] block">"SPOON"</span>
                    <p className="text-xs text-[#C9B8D9] mt-1">Represents food, dining, comfort meals, and shared feasts.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F0B14] border border-[#26152F] text-xs text-[#C9B8D9] space-y-1">
                <span className="font-bold text-[#F7EFE7]">Visual Logo Elements:</span>
                <p>Glass enchanted spoon with galaxy liquid, dark rose vines, gold ornate handle, and glowing butterfly dust trail.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: IMAGES & SCENES */}
        {activeTab === 'images' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#26152F]/50 border border-[#E8A9C5]/30 text-xs text-[#E8A9C5] font-semibold font-mono uppercase">
              Visual Directions &amp; Atmospheric Scene Gallery
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { title: 'Fantasy Interiors', desc: 'Rapunzel alcoves, velvet booths & Dark Fairy murals', icon: Layout },
                { title: 'Signature Food', desc: 'Gourmet steak with herbs, strawberry shortcakes & waffles', icon: Sparkles },
                { title: 'Special Drinks', desc: 'Cinderella glass slipper drinks & layered rainbow mocktails', icon: Sparkles },
                { title: 'Game Tables', desc: 'Board games, card tables & group activity setups', icon: Layout },
                { title: 'Photo Spaces', desc: 'Gold display cabinets, tiaras & rose glass cloches', icon: ImageIcon },
                { title: 'Cinematic Scenes', desc: 'Moody lighting, rose vines & grand entrance doors', icon: Video },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#0F0B14] border border-[#26152F] hover:border-[#E8A9C5]/40 transition-all">
                  <div className="flex items-center gap-2 mb-2 text-[#E8A9C5]">
                    <item.icon className="w-4 h-4" />
                    <h4 className="font-cinzel text-sm font-bold text-[#F7EFE7]">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#C9B8D9]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FONTS */}
        {activeTab === 'fonts' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#26152F]/50 border border-[#E8A9C5]/40 space-y-3">
              <span className="text-xs font-mono font-bold text-[#E8A9C5] uppercase">Headline Typography</span>
              <h3 className="font-cinzel text-3xl text-[#F7EFE7] font-bold">CINZEL &amp; CORMORANT</h3>
              <p className="text-xs text-[#C9B8D9]">
                Elegant editorial serif font used for major headings, title logos, and key brand statements.
              </p>
              <div className="p-3 rounded-xl bg-[#0F0B14] font-cinzel text-base text-[#E8A9C5] font-bold">
                "CHOOSE YOUR WORLD. MAKE IT YOURS."
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-3">
              <span className="text-xs font-mono font-bold text-[#C9A86A] uppercase">Body Typography</span>
              <h3 className="font-sans text-2xl text-[#F7EFE7] font-semibold">PLUS JAKARTA SANS</h3>
              <p className="text-xs text-[#C9B8D9]">
                Clean modern sans-serif font used for readable body text, menus, speaker notes, and interactive labels.
              </p>
              <div className="p-3 rounded-xl bg-[#26152F] font-sans text-xs text-[#F7EFE7] leading-relaxed">
                A comfortable place where girls can escape routine, connect with friends, and create memories.
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SOCIAL MEDIA PREVIEWS */}
        {activeTab === 'social' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#26152F]/50 border border-[#E8A9C5]/30 flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-[#E8A9C5] uppercase">Social Media Marketing Aesthetics</span>
              <span className="text-xs text-[#C9B8D9]">Instagram Posts, Reels &amp; TikTok Previews</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-2 text-center">
                <Instagram className="w-6 h-6 text-[#E8A9C5] mx-auto" />
                <h4 className="font-cinzel text-sm text-[#F7EFE7] font-bold">Instagram Carousel</h4>
                <p className="text-xs text-[#C9B8D9]">"Pink Magic or Dark Fantasy? Tag your bestie &amp; pick your world."</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-2 text-center">
                <Video className="w-6 h-6 text-[#C9B8D9] mx-auto" />
                <h4 className="font-cinzel text-sm text-[#F7EFE7] font-bold">TikTok Cinematic Reel</h4>
                <p className="text-xs text-[#C9B8D9]">30-second POV walkthrough opening the double doors into Spell &amp; Spoon.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-2 text-center">
                <Sparkles className="w-6 h-6 text-[#C9A86A] mx-auto" />
                <h4 className="font-cinzel text-sm text-[#F7EFE7] font-bold">User-Generated Stories</h4>
                <p className="text-xs text-[#C9B8D9]">Flower crown making &amp; glass slipper drink photo spots.</p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Overall Style Summary Banner */}
      <div className="relative z-10 pt-3 border-t border-[#26152F] flex flex-wrap items-center justify-between gap-2 text-xs text-[#C9B8D9]">
        <span className="font-semibold text-[#F7EFE7]">Overall Style &amp; Appearance:</span>
        <div className="flex items-center gap-1.5 flex-wrap font-mono text-[11px] text-[#E8A9C5]">
          <span className="px-2 py-0.5 rounded bg-[#26152F]">Premium</span>
          <span className="px-2 py-0.5 rounded bg-[#26152F]">Cinematic</span>
          <span className="px-2 py-0.5 rounded bg-[#26152F]">Immersive</span>
          <span className="px-2 py-0.5 rounded bg-[#26152F]">Magical</span>
          <span className="px-2 py-0.5 rounded bg-[#26152F]">Elegant</span>
          <span className="px-2 py-0.5 rounded bg-[#26152F]">Modern</span>
        </div>
      </div>
    </div>
  );
};
