import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize, CheckCircle, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { VideoTimestamp } from '../types';

interface OfficialBrandVideoProps {
  onVideoEnd?: () => void;
  onNextSlide?: () => void;
}

export const videoTimestamps: VideoTimestamp[] = [
  {
    time: 0,
    label: '00:00 - Entrance Doors',
    description: 'Double doors dividing the Magical World (Soft Pink & White Rose) and Dark Fantasy World (Midnight Black & Runes).',
    world: 'entrance',
  },
  {
    time: 2,
    label: '00:02 - The Two Worlds',
    description: 'Overview of the contrasting interiors: Pastel Rapunzel murals on the left vs Dark Fairy & Corpse Bride murals on the right.',
    world: 'both',
  },
  {
    time: 5,
    label: '00:05 - Dark Fantasy Dining',
    description: 'Deep plum velvet booths, cloche with red rose, dark wood, elegant crystal glassware, and romantic dark ambient lighting.',
    world: 'dark',
  },
  {
    time: 8,
    label: '00:08 - Gourmet Plating',
    description: 'High-end culinary service with fantasy-inspired steak and signature appetizers.',
    world: 'dark',
  },
  {
    time: 10,
    label: '00:10 - Glass Slipper Cabinet',
    description: 'Gold-framed display showcasing the Cinderella glass slipper, crystal tiara crown, and magical storybooks.',
    world: 'magical',
  },
  {
    time: 12,
    label: '00:12 - Pastel Pink World',
    description: 'Soft pink curved booth seating, gold tableware, fresh strawberry cakes, and cute fantasy creature wall murals.',
    world: 'magical',
  },
  {
    time: 15,
    label: '00:15 - Fantasy & Fast Food Menu',
    description: 'Menu posters showing Cinderella glass slipper drinks, layered rainbow mocktails, gourmet burgers, crispy chicken, and waffle desserts.',
    world: 'menu',
  },
  {
    time: 20,
    label: '00:20 - Activity & Treasure Tables',
    description: 'Interactive social tables: Advanced Tea Party, Flower Crown making, and Creative Art tables with colored pencils and ribbons.',
    world: 'activity',
  },
];

export const OfficialBrandVideo: React.FC<OfficialBrandVideoProps> = ({ onNextSlide }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(25); // 25-30 second official video duration
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Active scene based on timestamp
  const activeScene = videoTimestamps.reduce((prev, curr) => {
    return currentTime >= curr.time ? curr : prev;
  }, videoTimestamps[0]);

  // Video playback interval simulator synced with ambient sound synth
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 0.2 * playbackSpeed;
        });
      }, 200);
    }
    return () => clearInterval(timer);
  }, [isPlaying, duration, playbackSpeed]);

  const togglePlay = () => {
    if (!hasStarted) setHasStarted(true);
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    if (!hasStarted) setHasStarted(true);
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch((err) => console.log(err));
      } else {
        document.exitFullscreen().catch((err) => console.log(err));
      }
    }
  };

  // Scene visual generator based on video timestamp frames
  const getSceneVisual = (time: number) => {
    if (time < 2) {
      return (
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-[#26152F] via-[#0F0B14] to-[#1A0B22]">
          <div className="absolute inset-0 flex">
            {/* Left Door - Pink Magical */}
            <div className="w-1/2 h-full bg-[#E8A9C5]/10 border-r-2 border-[#C9A86A]/40 flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#E8A9C5]/20 rounded-full blur-2xl" />
              <div className="border-2 border-[#E8A9C5]/30 p-6 rounded-2xl bg-[#0F0B14]/60 backdrop-blur-md text-center max-w-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#E8A9C5] font-semibold">The Magical World</span>
                <h3 className="font-cinzel text-xl text-[#F7EFE7] mt-1">Soft Pink &amp; Roses</h3>
              </div>
            </div>
            {/* Right Door - Dark Fantasy */}
            <div className="w-1/2 h-full bg-[#26152F]/40 border-l-2 border-[#C9A86A]/40 flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#26152F]/60 rounded-full blur-2xl" />
              <div className="border-2 border-[#C9B8D9]/20 p-6 rounded-2xl bg-[#0F0B14]/60 backdrop-blur-md text-center max-w-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C9B8D9] font-semibold">The Dark Fantasy World</span>
                <h3 className="font-cinzel text-xl text-[#F7EFE7] mt-1">Midnight &amp; Mystery</h3>
              </div>
            </div>
          </div>
          {/* Logo across the doors */}
          <div className="relative z-10 bg-[#0F0B14]/85 border-2 border-[#C9A86A]/60 px-8 py-5 rounded-3xl shadow-[0_0_50px_rgba(232,169,197,0.3)] backdrop-blur-lg text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-[#E8A9C5] font-semibold">Official Brand Video</span>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[#F7EFE7] mt-1">SPELL &amp; SPOON</h2>
            <p className="font-garamond italic text-[#C9B8D9] text-sm mt-1">"Choose Your World. Make It Yours."</p>
          </div>
        </div>
      );
    } else if (time < 5) {
      return (
        <div className="relative w-full h-full bg-[#0F0B14] flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-2 gap-4 p-6 opacity-90">
            {/* Left Magical Side */}
            <div className="bg-gradient-to-br from-[#E8A9C5]/15 to-[#26152F]/30 rounded-2xl border border-[#E8A9C5]/30 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs px-3 py-1 rounded-full bg-[#E8A9C5]/20 text-[#E8A9C5] font-semibold border border-[#E8A9C5]/30">Magical Realm</span>
                <Sparkles className="w-5 h-5 text-[#E8A9C5]" />
              </div>
              <div className="space-y-2">
                <h4 className="font-cinzel text-lg text-[#F7EFE7]">Rapunzel &amp; Fairy Tale Alcoves</h4>
                <p className="text-xs text-[#C9B8D9]">Soft cream velvet circular booths with pastel floral murals and golden lighting.</p>
              </div>
            </div>
            {/* Right Dark Side */}
            <div className="bg-gradient-to-br from-[#26152F]/80 to-[#0F0B14] rounded-2xl border border-[#C9B8D9]/20 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs px-3 py-1 rounded-full bg-[#26152F] text-[#C9B8D9] font-semibold border border-[#C9B8D9]/30">Dark Fantasy Realm</span>
                <Compass className="w-5 h-5 text-[#C9B8D9]" />
              </div>
              <div className="space-y-2">
                <h4 className="font-cinzel text-lg text-[#F7EFE7]">Dark Fairy &amp; Corpse Bride Murals</h4>
                <p className="text-xs text-[#C9B8D9]">Deep purple velvet seating, gothic archways, and moody forest wall artwork.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (time < 10) {
      return (
        <div className="relative w-full h-full bg-gradient-to-r from-[#0F0B14] via-[#26152F] to-[#0F0B14] flex items-center justify-center p-8">
          <div className="relative z-10 max-w-md w-full bg-[#0F0B14]/90 border-2 border-[#26152F] rounded-2xl p-6 shadow-2xl text-center">
            <span className="text-xs uppercase tracking-widest text-[#E8A9C5] font-semibold">Dark Fantasy Dining Experience</span>
            <h3 className="font-cinzel text-2xl text-[#F7EFE7] my-2">Enchanted Culinary Art</h3>
            <p className="text-xs text-[#C9B8D9] leading-relaxed mb-4">
              Gourmet steak with micro-herbs served under glass bell jars, dark roses, and glowing candle chandeliers.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#26152F] border border-[#E8A9C5]/40 text-xs text-[#E8A9C5]">
              <CheckCircle className="w-4 h-4 text-[#E8A9C5]" /> Premium Fine Dining &amp; Comfort Food
            </div>
          </div>
        </div>
      );
    } else if (time < 15) {
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#E8A9C5]/20 via-[#0F0B14] to-[#26152F] flex items-center justify-center p-8">
          <div className="relative z-10 max-w-md w-full bg-[#0F0B14]/90 border-2 border-[#E8A9C5]/40 rounded-2xl p-6 shadow-2xl text-center">
            <span className="text-xs uppercase tracking-widest text-[#E8A9C5] font-semibold">Magical World Dining &amp; Gallery</span>
            <h3 className="font-cinzel text-2xl text-[#F7EFE7] my-2">The Glass Slipper &amp; Dessert Lounge</h3>
            <p className="text-xs text-[#C9B8D9] leading-relaxed mb-4">
              Glass display cabinets with golden tiaras, fairytale storybooks, fresh strawberry sponge cakes, and gold-trimmed cutlery.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8A9C5]/20 border border-[#E8A9C5]/50 text-xs text-[#F7EFE7]">
              <Sparkles className="w-4 h-4 text-[#E8A9C5]" /> Photo Spaces &amp; Magical Desserts
            </div>
          </div>
        </div>
      );
    } else if (time < 20) {
      return (
        <div className="relative w-full h-full bg-[#0F0B14] flex items-center justify-center p-6">
          <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
            <div className="bg-[#26152F]/70 border border-[#E8A9C5]/30 rounded-xl p-4 text-center">
              <h4 className="font-cinzel text-base text-[#E8A9C5]">Signature Drinks</h4>
              <p className="text-xs text-[#C9B8D9] mt-1">Cinderella glass slipper mocktails, layered rainbow elixirs &amp; enchanted sodas.</p>
            </div>
            <div className="bg-[#26152F]/70 border border-[#C9A86A]/30 rounded-xl p-4 text-center">
              <h4 className="font-cinzel text-base text-[#C9A86A]">Gourmet Fast Food</h4>
              <p className="text-xs text-[#C9B8D9] mt-1">Double stacked burgers, crispy golden chicken tenders &amp; loaded cheesy fries.</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-full bg-gradient-to-t from-[#0F0B14] via-[#26152F] to-[#0F0B14] flex items-center justify-center p-8 text-center">
          <div className="max-w-lg space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E8A9C5] font-semibold">Interactive Social Experiences</span>
            <h3 className="font-cinzel text-2xl md:text-3xl text-[#F7EFE7]">Activity &amp; Treasure Tables</h3>
            <p className="text-xs md:text-sm text-[#C9B8D9]">
              Advanced Tea Party setups, Flower Crown crafting tables, and Creative Art stations with ribbons, coloring books, and games for friends &amp; sisters.
            </p>
            {onNextSlide && (
              <button
                onClick={onNextSlide}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#E8A9C5] to-[#C9A86A] text-[#0F0B14] font-bold text-sm hover:brightness-110 shadow-[0_0_25px_rgba(232,169,197,0.4)] transition-all"
              >
                Continue to Brand Introduction (Slide 2) <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto my-4 flex flex-col items-center">
      {/* Video Container Box */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0F0B14] border-2 border-[#26152F] shadow-[0_0_50px_rgba(38,21,47,0.8)] group">
        
        {/* Render Active Scene Visual */}
        {getSceneVisual(currentTime)}

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-transparent to-[#0F0B14]/70" />

        {/* Live Caption Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F0B14]/80 border border-[#E8A9C5]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E8A9C5] animate-ping" />
            <span className="text-xs font-semibold text-[#E8A9C5] uppercase tracking-wider">
              {activeScene.world === 'magical' ? '✨ Magical World' : activeScene.world === 'dark' ? '🖤 Dark Fantasy World' : '🏰 Spell & Spoon Venue'}
            </span>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-[#0F0B14]/80 border border-[#C9A86A]/30 backdrop-blur-md text-xs font-mono text-[#C9A86A]">
            {Math.floor(currentTime).toString().padStart(2, '0')}:00 / {duration}:00
          </div>
        </div>

        {/* Floating Play Overlay Button if not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-[#0F0B14]/60 backdrop-blur-xs flex items-center justify-center z-30 transition-all">
            <button
              onClick={togglePlay}
              className="p-6 rounded-full bg-gradient-to-tr from-[#E8A9C5] to-[#C9A86A] text-[#0F0B14] shadow-[0_0_35px_rgba(232,169,197,0.6)] hover:scale-110 transition-transform cursor-pointer group-hover:rotate-6"
              title="Play Official Video"
            >
              <Play className="w-10 h-10 fill-current ml-1" />
            </button>
          </div>
        )}

        {/* Bottom Video Controls Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0F0B14] via-[#0F0B14]/90 to-transparent p-4 z-20 flex flex-col gap-2">
          {/* Progress / Seek Scrubber */}
          <div className="relative w-full h-2 bg-[#26152F] rounded-full overflow-hidden cursor-pointer group/scrub">
            <div
              className="h-full bg-gradient-to-r from-[#E8A9C5] via-[#C9B8D9] to-[#C9A86A] transition-all"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            <input
              type="range"
              min={0}
              max={duration}
              step={0.1}
              value={currentTime}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-xs text-[#F7EFE7]">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-[#26152F] hover:bg-[#E8A9C5]/20 text-[#E8A9C5] transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={handleRestart}
                className="p-2 rounded-lg bg-[#26152F] hover:bg-[#E8A9C5]/20 text-[#C9B8D9] transition-colors"
                title="Replay Video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg bg-[#26152F] hover:bg-[#E8A9C5]/20 text-[#C9B8D9] transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#E8A9C5]" />}
              </button>

              <span className="font-mono text-xs text-[#C9B8D9] hidden sm:inline">
                {activeScene.label}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Playback speed toggle */}
              <button
                onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 0.75 : playbackSpeed === 0.75 ? 1.25 : 1)}
                className="px-2.5 py-1 rounded bg-[#26152F] hover:bg-[#E8A9C5]/20 text-[#E8A9C5] font-mono text-[11px]"
              >
                {playbackSpeed}x Speed
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg bg-[#26152F] hover:bg-[#E8A9C5]/20 text-[#C9B8D9] transition-colors"
                title="Toggle Fullscreen"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Timestamp Chapter Buttons */}
      <div className="mt-4 w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
        {videoTimestamps.map((ts, idx) => {
          const isActive = activeScene.label === ts.label;
          return (
            <button
              key={idx}
              onClick={() => handleSeek(ts.time)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-[#26152F] border-[#E8A9C5] text-[#E8A9C5] shadow-[0_0_15px_rgba(232,169,197,0.3)]'
                  : 'bg-[#0F0B14]/80 border-[#26152F] text-[#C9B8D9]/70 hover:border-[#E8A9C5]/40 hover:text-[#F7EFE7]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">{ts.label.split(' - ')[0]}</span>
                {isActive && <Sparkles className="w-3 h-3 text-[#E8A9C5]" />}
              </div>
              <div className="text-xs font-semibold truncate mt-0.5">{ts.label.split(' - ')[1]}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
