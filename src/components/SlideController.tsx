import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SlideControllerProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  isAutoPlaying: boolean;
  autoPlayProgress: number; // 0 to 100
}

export const SlideController: React.FC<SlideControllerProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  isAutoPlaying,
  autoPlayProgress,
}) => {
  // Trigger magical sparkle confetti on the final slide completion
  const triggerMagicalSparkles = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#E8A9C5', '#C9B8D9', '#C9A86A', '#F7EFE7'],
    });
  };

  // Keyboard navigation listener (Left Arrow / Right Arrow / Space / PageUp / PageDown)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'PageDown') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev]);

  return (
    <div className="fixed bottom-3 inset-x-0 z-40 px-4 pointer-events-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-2 pointer-events-auto">
        
        {/* Immersive UI Segmented Progress Rail */}
        <div className="w-full bg-[#0F0B14]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E8A9C5]/10 flex items-center justify-between gap-2 shadow-lg">
          <div
            className="flex-grow gap-1 max-w-full"
            style={{ display: 'grid', gridTemplateColumns: `repeat(${totalSlides}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => {
              const slideNum = index + 1;
              const isPastOrCurrent = slideNum <= currentSlide;
              return (
                <div
                  key={slideNum}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isPastOrCurrent
                      ? 'bg-gradient-to-r from-[#E8A9C5] to-[#C9A86A] shadow-[0_0_8px_rgba(232,169,197,0.5)]'
                      : 'bg-[#26152F] opacity-40'
                  }`}
                />
              );
            })}
          </div>

          <span className="text-[10px] font-mono opacity-60 uppercase tracking-widest text-[#E8A9C5] ml-2 shrink-0">
            Slide {currentSlide.toString().padStart(2, '0')} of {totalSlides.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Floating Slide Navigation Bar */}
        <div className="w-full bg-[#0F0B14]/90 border border-[#E8A9C5]/20 rounded-2xl p-2 sm:px-5 shadow-[0_10px_35px_rgba(0,0,0,0.85)] backdrop-blur-xl flex items-center justify-between gap-3">
          
          {/* Previous Button */}
          <button
            onClick={onPrev}
            disabled={currentSlide === 1}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              currentSlide === 1
                ? 'opacity-30 cursor-not-allowed text-[#C9B8D9]'
                : 'bg-[#26152F] text-[#F7EFE7] hover:bg-[#E8A9C5] hover:text-[#0F0B14] shadow-md border border-[#E8A9C5]/20'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline font-cinzel">Previous</span>
          </button>

          {/* Center Info & Timer Ring */}
          <div className="flex items-center gap-3">
            {/* Auto-play progress indicator ring */}
            {isAutoPlaying && (
              <div className="relative w-6 h-6 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-[#26152F]"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-[#E8A9C5]"
                    strokeDasharray={`${autoPlayProgress}, 100`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <RefreshCw className="w-2.5 h-2.5 text-[#E8A9C5] animate-spin absolute" />
              </div>
            )}

            {/* Slide Index Counter */}
            <div className="text-center">
              <div className="font-mono text-xs font-bold text-[#E8A9C5] tracking-widest">
                0{currentSlide} / 13
              </div>
              <div className="text-[10px] text-[#C9B8D9]/70 hidden md:block tracking-wider">
                Use <kbd className="px-1 py-0.5 rounded bg-[#26152F] text-[#E8A9C5] font-mono">←</kbd>{' '}
                <kbd className="px-1 py-0.5 rounded bg-[#26152F] text-[#E8A9C5] font-mono">→</kbd> keys to navigate
              </div>
            </div>

            {/* Sparkle Button */}
            <button
              onClick={triggerMagicalSparkles}
              className="p-2 rounded-xl bg-[#26152F]/80 text-[#E8A9C5] hover:bg-[#E8A9C5]/20 hover:scale-110 border border-[#E8A9C5]/20 transition-all cursor-pointer"
              title="Cast Magical Sparkles"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              currentSlide === totalSlides
                ? 'opacity-30 cursor-not-allowed text-[#C9B8D9]'
                : 'bg-gradient-to-r from-[#E8A9C5] via-[#C9B8D9] to-[#C9A86A] text-[#0F0B14] hover:brightness-110 shadow-[0_0_20px_rgba(232,169,197,0.4)] font-cinzel font-bold'
            }`}
          >
            <span className="hidden sm:inline">
              {currentSlide === totalSlides ? 'End of Presentation' : 'Next'}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
