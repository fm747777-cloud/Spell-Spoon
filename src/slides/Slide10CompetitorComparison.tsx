import React from 'react';
import { Check, X, Sparkles, Trophy, Utensils, Coffee, Gamepad2 } from 'lucide-react';

export const Slide10CompetitorComparison: React.FC = () => {
  const comparisonMatrix = [
    { feature: 'Gourmet Food & Meals', trad: true, cafe: false, games: false, spell: true },
    { feature: 'Specialty Drinks & Desserts', trad: true, cafe: true, games: true, spell: true },
    { feature: 'Two Dual Themed Worlds', trad: false, cafe: false, games: false, spell: true },
    { feature: 'Girls-Only Safe Comfort Space', trad: false, cafe: false, games: false, spell: true },
    { feature: 'Board Games & Activity Tables', trad: false, cafe: false, games: true, spell: true },
    { feature: 'Creative Flower Crown Workshops', trad: false, cafe: false, games: false, spell: true },
    { feature: 'Cinematic Photo Spots & Cabinets', trad: false, cafe: false, games: false, spell: true },
  ];

  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#26152F] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 border-b border-[#26152F] pb-4">
        <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
          Slide 10 • Competitive Advantage
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold mt-1">
          COMPETITOR COMPARISON
        </h2>
      </div>

      {/* Main Differentiation Highlight */}
      <div className="relative z-10 my-3 p-4 rounded-2xl bg-[#26152F]/60 border border-[#E8A9C5]/40 backdrop-blur-md flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-[#E8A9C5]">Core Differentiator</span>
          <h3 className="font-cinzel text-base sm:text-lg text-[#F7EFE7] font-semibold">
            What makes Spell &amp; Spoon different from competitors?
          </h3>
          <p className="text-xs text-[#C9B8D9]">
            Spell &amp; Spoon combines food, fantasy, games, creative art workshops, photography, and social connection in one venue.
          </p>
        </div>
        <div className="p-3 rounded-xl bg-[#E8A9C5] text-[#0F0B14] font-bold text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(232,169,197,0.5)]">
          <Trophy className="w-4 h-4" /> All-In-One Haven
        </div>
      </div>

      {/* Matrix Table */}
      <div className="relative z-10 my-2 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-[#26152F] text-xs font-cinzel">
              <th className="p-3 text-[#C9B8D9]">Experience Feature</th>
              <th className="p-3 text-center text-[#C9B8D9]/70">Traditional Restaurants</th>
              <th className="p-3 text-center text-[#C9B8D9]/70">Regular Cafés</th>
              <th className="p-3 text-center text-[#C9B8D9]/70">Game Venues</th>
              <th className="p-3 text-center bg-[#26152F] border-x border-t border-[#E8A9C5] text-[#E8A9C5] font-bold rounded-t-xl">
                ✨ SPELL &amp; SPOON
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#26152F] text-xs">
            {comparisonMatrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#26152F]/30 transition-colors">
                <td className="p-3 font-medium text-[#F7EFE7] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A9C5]" />
                  {row.feature}
                </td>
                <td className="p-3 text-center">
                  {row.trad ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-red-400/40 mx-auto" />}
                </td>
                <td className="p-3 text-center">
                  {row.cafe ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-red-400/40 mx-auto" />}
                </td>
                <td className="p-3 text-center">
                  {row.games ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-red-400/40 mx-auto" />}
                </td>
                {/* Highlighted Spell & Spoon Column */}
                <td className="p-3 text-center bg-[#26152F]/80 border-x border-[#E8A9C5] text-[#E8A9C5] font-bold shadow-[0_0_15px_rgba(232,169,197,0.15)]">
                  <div className="inline-flex items-center gap-1 text-[#E8A9C5]">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Banner */}
      <div className="relative z-10 pt-3 border-t border-[#26152F] text-center text-xs text-[#C9B8D9]">
        Spell &amp; Spoon eliminates competition by creating a brand-new market category: <span className="text-[#E8A9C5] font-bold">Themed Comfort Dining &amp; Creative Social Space</span>.
      </div>
    </div>
  );
};
