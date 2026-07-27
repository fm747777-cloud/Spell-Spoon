import React from 'react';
import { X, Clock, UserCheck, CheckCircle2, BookOpen, Key } from 'lucide-react';
import { SlideData } from '../types';

interface SpeakerNotesDrawerProps {
  slide: SlideData;
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  slide,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#0F0B14] border-l-2 border-[#26152F] p-6 shadow-2xl overflow-y-auto flex flex-col justify-between backdrop-blur-xl">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#26152F]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#E8A9C5]" />
            <h3 className="font-cinzel text-lg text-[#F7EFE7] font-bold">Presenter &amp; Speaker Notes</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#26152F] text-[#C9B8D9] hover:text-[#F7EFE7] hover:bg-[#E8A9C5]/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Title Banner */}
        <div className="my-4 p-3 rounded-xl bg-[#26152F]/70 border border-[#E8A9C5]/30 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#E8A9C5] font-bold">Slide {slide.id.toString().padStart(2, '0')}</span>
            <h4 className="font-cinzel text-base text-[#F7EFE7] font-semibold">{slide.title}</h4>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#C9A86A] font-mono px-2.5 py-1 rounded-lg bg-[#0F0B14] border border-[#C9A86A]/30">
            <Clock className="w-3.5 h-3.5" />
            <span>{slide.speakerNotes.duration}</span>
          </div>
        </div>

        {/* Group Presenter Role */}
        <div className="mb-4 p-3 rounded-xl bg-[#0F0B14] border border-[#26152F]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E8A9C5] mb-1">
            <UserCheck className="w-4 h-4" /> Group Member Role
          </div>
          <p className="text-xs text-[#C9B8D9] font-medium">{slide.speakerNotes.presenterRole}</p>
        </div>

        {/* Group Speech Script & Talking Points */}
        <div className="mb-6 space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-wider text-[#E8A9C5] flex items-center gap-1.5">
            Key Speech Script &amp; Explanation
          </h5>
          <ul className="space-y-2.5 text-xs text-[#F7EFE7]/90 leading-relaxed">
            {slide.speakerNotes.talkingPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#26152F]/40 border border-[#26152F]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8A9C5]/20 text-[#E8A9C5] font-mono text-[10px] font-bold flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Academic Terms Checklist */}
        <div className="space-y-2">
          <h5 className="text-xs font-bold uppercase tracking-wider text-[#C9A86A] flex items-center gap-1.5">
            <Key className="w-3.5 h-3.5" /> Required Academic Terms Tested
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {slide.speakerNotes.academicTerms.map((term, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#26152F] border border-[#C9A86A]/40 text-[11px] text-[#C9A86A] font-mono"
              >
                <CheckCircle2 className="w-3 h-3 text-[#E8A9C5]" /> {term}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-[#26152F] text-center text-[10px] text-[#C9B8D9]">
        Designed for a 5–7 minute group presentation delivery.
      </div>
    </div>
  );
};
