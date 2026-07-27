import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
  sparkle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  subtitleText = 'THE ENCHANTED SPOON',
  className = '',
  sparkle = false,
}) => {
  // Dimension mappings
  const dimensions = {
    sm: { height: 'h-8', width: 'w-auto', text: 'text-sm', sub: 'text-[9px]' },
    md: { height: 'h-12', width: 'w-auto', text: 'text-lg', sub: 'text-[11px]' },
    lg: { height: 'h-20', width: 'w-auto', text: 'text-2xl', sub: 'text-xs' },
    hero: { height: 'h-32 md:h-44', width: 'w-auto', text: 'text-3xl md:text-5xl', sub: 'text-xs md:text-sm' },
  };

  const dim = dimensions[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <div className="relative group flex flex-col items-center">
        {/* Magic Glow behind logo */}
        {sparkle && (
          <div className="absolute -inset-4 bg-gradient-to-r from-[#E8A9C5]/20 via-[#C9A86A]/20 to-[#26152F]/30 rounded-full blur-xl animate-magical-pulse pointer-events-none" />
        )}

        {/* Official Spell & Spoon Graphic Emblem */}
        <div className={`relative ${dim.height} flex items-center justify-center`}>
          <svg
            viewBox="0 0 500 240"
            className="h-full w-auto drop-shadow-[0_4px_16px_rgba(232,169,197,0.3)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7EFE7" />
                <stop offset="35%" stopColor="#C9A86A" />
                <stop offset="70%" stopColor="#E8A9C5" />
                <stop offset="100%" stopColor="#C9A86A" />
              </linearGradient>

              <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E8A9C5" />
                <stop offset="50%" stopColor="#C9B8D9" />
                <stop offset="100%" stopColor="#E8A9C5" />
              </linearGradient>

              <radialGradient id="galaxyBg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E8A9C5" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#26152F" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0F0B14" />
              </radialGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Dark Magical Circular Emblem Background with Runes */}
            <circle cx="250" cy="90" r="75" fill="url(#galaxyBg)" stroke="#C9A86A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.85" />
            <circle cx="250" cy="90" r="82" stroke="#E8A9C5" strokeWidth="0.75" opacity="0.5" />

            {/* Runes / Astrological symbols around circle */}
            <g opacity="0.6" stroke="#C9B8D9" strokeWidth="1">
              <path d="M 250 5 L 250 12 M 250 168 L 250 175 M 165 90 L 172 90 M 328 90 L 335 90" />
              <circle cx="250" cy="12" r="2" fill="#E8A9C5" />
              <circle cx="250" cy="168" r="2" fill="#E8A9C5" />
              <circle cx="172" cy="90" r="2" fill="#E8A9C5" />
              <circle cx="328" cy="90" r="2" fill="#E8A9C5" />
            </g>

            {/* Enchanted Spoon Bowl with Galaxy Swirl */}
            <g transform="rotate(-12 250 90)">
              {/* Spoon Bowl */}
              <path
                d="M 120 95 C 120 70, 190 60, 220 95 C 190 130, 120 120, 120 95 Z"
                fill="url(#galaxyBg)"
                stroke="url(#goldGrad)"
                strokeWidth="3.5"
                filter="url(#glow)"
              />
              
              {/* Swirl inside spoon */}
              <path
                d="M 140 95 C 160 80, 185 110, 200 95 C 180 85, 155 105, 140 95 Z"
                fill="#E8A9C5"
                opacity="0.7"
              />

              {/* Spoon Handle (Glass to Ornate Gold) */}
              <path
                d="M 220 95 Q 280 92, 340 95"
                stroke="url(#goldGrad)"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Glass stem effect */}
              <path
                d="M 215 95 L 290 94"
                stroke="#F7EFE7"
                strokeWidth="2.5"
                opacity="0.8"
              />

              {/* Ornate Gold Handle Details */}
              <rect x="290" y="87" width="45" height="15" rx="3" fill="url(#goldGrad)" stroke="#0F0B14" strokeWidth="1" />
              <circle cx="342" cy="94.5" r="7" fill="#26152F" stroke="url(#goldGrad)" strokeWidth="2" />
              <circle cx="342" cy="94.5" r="4" fill="#E8A9C5" filter="url(#glow)" />

              {/* Roses & Vines wrapping around the spoon */}
              <path
                d="M 190 85 Q 220 100, 260 88 T 310 98"
                stroke="#1B4323"
                strokeWidth="2.5"
                fill="none"
              />

              {/* Red Blooming Roses */}
              <circle cx="210" cy="85" r="6" fill="#A81C38" stroke="#E8A9C5" strokeWidth="1" />
              <circle cx="255" cy="88" r="7" fill="#8B112B" stroke="#C9A86A" strokeWidth="1" />
              <circle cx="295" cy="96" r="5" fill="#A81C38" stroke="#E8A9C5" strokeWidth="1" />

              {/* Butterfly and Sparkling Magic Dust Trail */}
              <path
                d="M 345 92 Q 380 60, 420 40 T 460 20"
                stroke="url(#roseGrad)"
                strokeWidth="2"
                strokeDasharray="4 3"
                fill="none"
                opacity="0.9"
              />

              {/* Magic Sparkles */}
              <polygon points="380,50 383,56 389,59 383,62 380,68 377,62 371,59 377,56" fill="#E8A9C5" />
              <polygon points="410,35 412,39 416,41 412,43 410,47 408,43 404,41 408,39" fill="#F7EFE7" />
              <polygon points="440,22 441,25 444,26 441,27 440,30 439,27 436,26 439,25" fill="#C9A86A" />

              {/* Butterfly shape */}
              <path
                d="M 425 40 C 420 30, 435 30, 428 40 C 435 50, 420 50, 425 40 Z"
                fill="#E8A9C5"
                opacity="0.85"
              />
            </g>

            {/* Typography: SPELL & SPOON */}
            <text
              x="250"
              y="202"
              textAnchor="middle"
              className="font-cinzel font-bold tracking-[0.18em]"
              fill="url(#goldGrad)"
              fontSize="34"
              style={{ letterSpacing: '0.15em' }}
            >
              SPELL &amp; SPOON
            </text>
          </svg>
        </div>

        {/* Subtitle / Slogan */}
        {showSubtitle && (
          <div className="mt-1 flex items-center justify-center gap-2">
            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#E8A9C5]/60" />
            <span className={`font-cinzel tracking-[0.3em] font-semibold text-[#E8A9C5] uppercase ${dim.sub}`}>
              {subtitleText}
            </span>
            <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#E8A9C5]/60" />
          </div>
        )}
      </div>
    </div>
  );
};
