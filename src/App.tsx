import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { slidesData } from './data/slidesData';
import { WorldMode } from './types';
import { Navbar } from './components/Navbar';
import { SlideController } from './components/SlideController';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { BrandLogo } from './components/BrandLogo';

// Slide Component Imports
import { Slide01Cover } from './slides/Slide01Cover';
import { VideoSlide } from './slides/VideoSlide';
import { Slide02IntroduceBrand } from './slides/Slide02IntroduceBrand';
import { Slide03BrandGoals } from './slides/Slide03BrandGoals';
import { Slide04VVPModel } from './slides/Slide04VVPModel';
import { Slide05Visuals } from './slides/Slide05Visuals';
import { Slide06Voice } from './slides/Slide06Voice';
import { Slide07Promise } from './slides/Slide07Promise';
import { Slide08MarketingStrategy } from './slides/Slide08MarketingStrategy';
import { Slide09CustomerExperience } from './slides/Slide09CustomerExperience';
import { Slide10CompetitorComparison } from './slides/Slide10CompetitorComparison';
import { Slide11BrandSlogan } from './slides/Slide11BrandSlogan';
import { Slide12FinalRecommendation } from './slides/Slide12FinalRecommendation';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);
  const [worldMode, setWorldMode] = useState<WorldMode>('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [autoPlayProgress, setAutoPlayProgress] = useState<number>(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(false);

  const totalSlides = slidesData.length;
  const currentSlideData = slidesData[currentSlideIndex - 1];

  // Auto-play timer for presenter mode (10 seconds per slide)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setAutoPlayProgress((prev) => {
          if (prev >= 100) {
            setCurrentSlideIndex((slide) => (slide < totalSlides ? slide + 1 : 1));
            return 0;
          }
          return prev + 1; // 1% every 100ms = 10s per slide
        });
      }, 100);
    } else {
      setAutoPlayProgress(0);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handleNextSlide = () => {
    if (currentSlideIndex < totalSlides) {
      setCurrentSlideIndex((prev) => prev + 1);
      setAutoPlayProgress(0);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 1) {
      setCurrentSlideIndex((prev) => prev - 1);
      setAutoPlayProgress(0);
    }
  };

  const handleGoToSlide = (slideNum: number) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      setCurrentSlideIndex(slideNum);
      setAutoPlayProgress(0);
    }
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => console.log(err));
    } else {
      document.exitFullscreen().catch((err) => console.log(err));
    }
  };

  // Render active slide component
  const renderSlideContent = () => {
    switch (currentSlideIndex) {
      case 1:
        return <Slide01Cover onNext={handleNextSlide} />;
      case 2:
        return <VideoSlide onNext={handleNextSlide} />;
      case 3:
        return <Slide02IntroduceBrand />;
      case 4:
        return <Slide03BrandGoals />;
      case 5:
        return <Slide04VVPModel />;
      case 6:
        return <Slide05Visuals />;
      case 7:
        return <Slide06Voice />;
      case 8:
        return <Slide07Promise />;
      case 9:
        return <Slide08MarketingStrategy />;
      case 10:
        return <Slide09CustomerExperience />;
      case 11:
        return <Slide10CompetitorComparison />;
      case 12:
        return <Slide11BrandSlogan />;
      case 13:
        return <Slide12FinalRecommendation onRestart={() => handleGoToSlide(1)} />;
      default:
        return <Slide01Cover onNext={handleNextSlide} />;
    }
  };

  // Dynamic world mode background classes
  const getWorldBgClass = () => {
    if (worldMode === 'magical') {
      return 'bg-gradient-to-br from-[#1A0D1F] via-[#26152F] to-[#120817] text-[#F7EFE7]';
    } else if (worldMode === 'dark_fantasy') {
      return 'bg-gradient-to-br from-[#0F0B14] via-[#1A0B22] to-[#08050B] text-[#F7EFE7]';
    }
    return 'bg-[#0F0B14] text-[#F7EFE7]';
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 flex flex-col justify-between ${getWorldBgClass()}`}>
      
      {/* Top Navbar Header */}
      <Navbar
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        slideTitle={currentSlideData.title}
        worldMode={worldMode}
        onSelectWorld={setWorldMode}
        onGoToSlide={handleGoToSlide}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
        showSpeakerNotes={showSpeakerNotes}
        onToggleSpeakerNotes={() => setShowSpeakerNotes(!showSpeakerNotes)}
        onToggleFullscreen={handleToggleFullscreen}
        slideTitles={slidesData.map((s) => ({ id: s.id, title: s.title, category: s.category }))}
      />

      {/* Main Slide Stage Area */}
      <main className="relative flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        
        {/* MANDATORY INSTRUCTION: Official logo on every slide header corner */}
        {currentSlideIndex > 1 && (
          <div className="absolute top-8 right-8 z-20 hidden md:block opacity-85 hover:opacity-100 transition-opacity">
            <BrandLogo size="sm" showSubtitle={false} />
          </div>
        )}

        {/* Animated Slide Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, y: 15, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.99 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Speaker Notes Overlay Drawer */}
      <SpeakerNotesDrawer
        slide={currentSlideData}
        isOpen={showSpeakerNotes}
        onClose={() => setShowSpeakerNotes(false)}
      />

      {/* Floating Bottom Navigation Controller Dock */}
      <SlideController
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
        isAutoPlaying={isAutoPlaying}
        autoPlayProgress={autoPlayProgress}
      />
    </div>
  );
}
