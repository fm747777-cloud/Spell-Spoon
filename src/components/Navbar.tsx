import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { WorldMode } from '../types';
import { Volume2, VolumeX, Sparkles, BookOpen, Layers, ChevronDown, Fullscreen, Play, Pause } from 'lucide-react';
import { soundSynth } from './AmbientSoundSynth';

interface NavbarProps {
  currentSlide: number;
  totalSlides: number;
  slideTitle: string;
  worldMode: WorldMode;
  onSelectWorld: (mode: WorldMode) => void;
  onGoToSlide: (slideNum: number) => void;
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
  showSpeakerNotes: boolean;
  onToggleSpeakerNotes: () => void;
  onToggleFullscreen: () => void;
  slideTitles: { id: number; title: string; category: string }[];
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSlide,
  totalSlides,
  slideTitle,
  worldMode,
  onSelectWorld,
  onGoToSlide,
  isAutoPlaying,
  onToggleAutoPlay,
  showSpeakerNotes,
  onToggleSpeakerNotes,
  onToggleFullscreen,
  slideTitles,
}) => {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

  const toggleAudio = () => {
    const active = soundSynth.toggleAmbientLoop();
    setIsAudioActive(active);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F0B14]/60 backdrop-blur-md border-b border-[#E8A9C5]/20 px-4 sm:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Gold Framed Brand Logo Badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onGoToSlide(1)}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer group"
            title="Return to Cover Slide"
          >
            <div className="w-8 h-8 rounded-full border border-[#C9A86A] flex items-center justify-center p-1 overflow-hidden bg-[#26152F]/80 shadow-[0_0_12px_rgba(201,168,106,0.3)]">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-[#E8A9C5]">
                <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" />
              </svg>
            </div>
            <span className="text-xs tracking-[0.4em] uppercase font-semibold text-[#E8A9C5] font-cinzel">
              Spell &amp; Spoon
            </span>
          </button>

          {/* Vertical Divider */}
          <div className="hidden md:block h-5 w-[1px] bg-[#E8A9C5]/20" />

          {/* Academic Subtitle Badge */}
          <div className="hidden lg:flex flex-col">
            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#C9A86A]">Academic Presentation</span>
            <span className="font-cinzel text-xs text-[#F7EFE7]/90">VVP Brand Identity Model</span>
          </div>
        </div>

        {/* Center: Slide Dropdown Selector */}
        <div className="relative">
          <button
            onClick={() => setIsSlideMenuOpen(!isSlideMenuOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#26152F]/80 border border-[#E8A9C5]/30 text-xs font-medium text-[#F7EFE7] hover:border-[#E8A9C5] transition-all cursor-pointer shadow-sm"
          >
            <span className="font-mono text-[#E8A9C5] font-bold">
              {currentSlide.toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
            </span>
            <span className="truncate max-w-[140px] sm:max-w-[220px] font-cinzel text-[#F7EFE7]">
              {slideTitle}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-[#E8A9C5] transition-transform ${isSlideMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Slide List Dropdown */}
          {isSlideMenuOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 sm:w-80 max-h-96 overflow-y-auto bg-[#0F0B14] border-2 border-[#26152F] rounded-2xl p-2 shadow-2xl z-50 divide-y divide-[#26152F]/50">
              <div className="p-2 text-[10px] uppercase font-bold tracking-wider text-[#E8A9C5]">
                Presentation Slides Overview
              </div>
              {slideTitles.map((slide) => {
                const isActive = slide.id === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => {
                      onGoToSlide(slide.id);
                      setIsSlideMenuOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#26152F] text-[#E8A9C5] font-bold border border-[#E8A9C5]/40'
                        : 'text-[#C9B8D9] hover:bg-[#26152F]/40 hover:text-[#F7EFE7]'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[10px] text-[#E8A9C5] font-semibold w-5">
                        {slide.id.toString().padStart(2, '0')}
                      </span>
                      <span className="truncate font-cinzel">{slide.title}</span>
                    </div>
                    <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-[#0F0B14] text-[#C9B8D9]">
                      {slide.category}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          
          {/* World Switcher Pills */}
          <div className="hidden xl:flex items-center p-1 rounded-xl bg-[#0F0B14] border border-[#26152F] text-xs">
            <button
              onClick={() => onSelectWorld('all')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                worldMode === 'all'
                  ? 'bg-[#26152F] text-[#E8A9C5] font-semibold border border-[#E8A9C5]/30'
                  : 'text-[#C9B8D9] hover:text-[#F7EFE7]'
              }`}
            >
              Two Worlds
            </button>
            <button
              onClick={() => onSelectWorld('magical')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                worldMode === 'magical'
                  ? 'bg-[#E8A9C5]/20 text-[#E8A9C5] font-semibold border border-[#E8A9C5]/40'
                  : 'text-[#C9B8D9] hover:text-[#F7EFE7]'
              }`}
            >
              🌸 Magical
            </button>
            <button
              onClick={() => onSelectWorld('dark_fantasy')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                worldMode === 'dark_fantasy'
                  ? 'bg-[#26152F] text-[#C9B8D9] font-semibold border border-[#C9B8D9]/40'
                  : 'text-[#C9B8D9] hover:text-[#F7EFE7]'
              }`}
            >
              🖤 Dark Fantasy
            </button>
          </div>

          {/* Auto-Play Presenter Toggle */}
          <button
            onClick={onToggleAutoPlay}
            className={`p-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              isAutoPlaying
                ? 'bg-[#E8A9C5] text-[#0F0B14] font-bold border-[#E8A9C5] shadow-[0_0_15px_rgba(232,169,197,0.5)]'
                : 'bg-[#26152F]/70 border-[#26152F] text-[#C9B8D9] hover:text-[#F7EFE7] hover:border-[#E8A9C5]/30'
            }`}
            title="Auto-advance slides for presentation delivery"
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[11px]">{isAutoPlaying ? 'Auto' : 'Presenter'}</span>
          </button>

          {/* Speaker Notes Toggle */}
          <button
            onClick={onToggleSpeakerNotes}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              showSpeakerNotes
                ? 'bg-[#E8A9C5]/20 border-[#E8A9C5] text-[#E8A9C5]'
                : 'bg-[#26152F]/70 border-[#26152F] text-[#C9B8D9] hover:text-[#F7EFE7]'
            }`}
            title="Toggle Speaker Notes & Academic Group Script"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          {/* Audio Chime Ambient Synth Toggle */}
          <button
            onClick={toggleAudio}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isAudioActive
                ? 'bg-[#E8A9C5]/20 border-[#E8A9C5] text-[#E8A9C5]'
                : 'bg-[#26152F]/70 border-[#26152F] text-[#C9B8D9] hover:text-[#F7EFE7]'
            }`}
            title={isAudioActive ? 'Mute Ambient Fantasy Chime' : 'Enable Ethereal Ambient Chime'}
          >
            {isAudioActive ? <Volume2 className="w-4 h-4 text-[#E8A9C5]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xl bg-[#26152F]/70 border border-[#26152F] text-[#C9B8D9] hover:text-[#F7EFE7] hover:border-[#E8A9C5]/30 transition-all cursor-pointer"
            title="Toggle Fullscreen"
          >
            <Fullscreen className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
