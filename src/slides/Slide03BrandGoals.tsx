import React, { useState } from 'react';
import { ShieldCheck, Compass, Users2, Sparkles, HeartHandshake } from 'lucide-react';

export const Slide03BrandGoals: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const goalPillars = [
    {
      id: 1,
      title: 'COMFORT',
      subtitle: 'A Safe & Welcoming Sanctuary',
      icon: ShieldCheck,
      description: 'A dedicated girls-only environment where young women feel safe, relaxed, and fully comfortable without judgment.',
      color: '#E8A9C5',
    },
    {
      id: 2,
      title: 'ESCAPE',
      subtitle: 'Break Away from Daily Routine',
      icon: Compass,
      description: 'Step out of standard school or work routines into two immersive fantasy realms designed for wonder and adventure.',
      color: '#C9B8D9',
    },
    {
      id: 3,
      title: 'CONNECTION',
      subtitle: 'Social Bonds for Friends & Sisters',
      icon: Users2,
      description: 'Interactive tea parties, board game tables, and art stations that foster genuine conversation, laughter, and sisterhood.',
      color: '#C9A86A',
    },
    {
      id: 4,
      title: 'MEMORIES',
      subtitle: 'Unforgettable Photo & Play Moments',
      icon: Sparkles,
      description: 'Unique signature dishes, photo-worthy glass slipper displays, and custom craft takeaways to cherish forever.',
      color: '#E8A9C5',
    },
  ];

  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#26152F]/60 rounded-full blur-3xl pointer-events-none animate-magical-pulse" />

      {/* Header */}
      <div className="relative z-10 border-b border-[#26152F] pb-4">
        <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
          Slide 03 • Brand Ambition
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold mt-1">
          BRAND GOALS
        </h2>
      </div>

      {/* Answer Cards Header */}
      <div className="relative z-10 my-4 p-5 rounded-2xl bg-[#26152F]/50 border border-[#E8A9C5]/30 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs uppercase font-semibold text-[#E8A9C5] mb-1">
          <HeartHandshake className="w-4 h-4 text-[#E8A9C5]" />
          <span>Core Mission &amp; Desired Customer Perception</span>
        </div>
        <p className="font-cinzel text-base sm:text-lg text-[#F7EFE7] leading-relaxed font-semibold">
          Spell &amp; Spoon creates a comfortable space where girls can escape routine, have fun, connect with others, and build lasting memories.
        </p>
      </div>

      {/* Four Large Visual Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-2">
        {goalPillars.map((goal) => {
          const isHovered = hoveredCard === goal.id;
          const Icon = goal.icon;

          return (
            <div
              key={goal.id}
              onMouseEnter={() => setHoveredCard(goal.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isHovered
                  ? 'bg-[#26152F] border-[#E8A9C5] transform -translate-y-1 shadow-[0_0_30px_rgba(232,169,197,0.3)]'
                  : 'bg-[#0F0B14]/90 border-[#26152F] hover:border-[#E8A9C5]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#0F0B14] border border-[#26152F]">
                    <Icon className="w-6 h-6 text-[#E8A9C5]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#C9A86A]">0{goal.id}</span>
                </div>

                {/* Large Word */}
                <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#F7EFE7] tracking-wider mb-1">
                  {goal.title}
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E8A9C5] block mb-3">
                  {goal.subtitle}
                </span>

                <p className="text-xs text-[#C9B8D9] leading-relaxed">
                  {goal.description}
                </p>
              </div>

              {/* Bottom Indicator */}
              <div className="mt-4 pt-3 border-t border-[#26152F] flex items-center justify-between text-[10px] text-[#C9B8D9]/70 font-mono">
                <span>Perception Goal</span>
                <span className="text-[#E8A9C5]">✨ 100% Focus</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Image Perception Grid */}
      <div className="relative z-10 mt-4 p-4 rounded-xl bg-[#0F0B14] border border-[#26152F] flex flex-wrap items-center justify-between gap-3 text-xs text-[#C9B8D9]">
        <span className="font-semibold text-[#F7EFE7]">Desired Customer Perception:</span>
        <div className="flex items-center gap-2 flex-wrap">
          {['COMFORTABLE', 'UNIQUE', 'FUN', 'MEMORABLE'].map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-[#26152F] border border-[#E8A9C5]/40 font-cinzel text-xs text-[#E8A9C5] font-bold tracking-widest"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
