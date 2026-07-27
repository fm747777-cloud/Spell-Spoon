import React from 'react';
import { Megaphone, Share2, Video, Sparkles, ArrowRight, CheckCircle, Eye, MessageCircle, Heart } from 'lucide-react';

export const Slide08MarketingStrategy: React.FC = () => {
  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#26152F]/70 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 border-b border-[#26152F] pb-4">
        <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
          Slide 08 • Strategic Promotion
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold mt-1">
          MARKETING STRATEGY
        </h2>
      </div>

      {/* Main 5-Step Customer Marketing Journey Bar */}
      <div className="relative z-10 my-4 space-y-2">
        <span className="text-xs font-mono font-bold text-[#E8A9C5] uppercase">Customer Marketing Journey</span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {[
            { step: '01', title: 'DISCOVER', desc: 'Cinematic video & TikTok reels' },
            { step: '02', title: 'ENGAGE', desc: 'Social polls & world quizzes' },
            { step: '03', title: 'VISIT', desc: 'Experiencing the two worlds' },
            { step: '04', title: 'SHARE', desc: 'Photo spots & crown crafts' },
            { step: '05', title: 'RETURN', desc: 'Nostalgia & friend reunions' },
          ].map((j, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#26152F]/60 border border-[#E8A9C5]/30 text-center space-y-1">
              <span className="font-mono text-[10px] font-bold text-[#E8A9C5]">{j.step}</span>
              <h4 className="font-cinzel text-xs font-bold text-[#F7EFE7]">{j.title}</h4>
              <p className="text-[10px] text-[#C9B8D9]">{j.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Marketing Channels (Left 6) + How VVP Supports Marketing (Right 6) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 my-2">
        
        {/* Left Column: Marketing Channels */}
        <div className="md:col-span-6 p-5 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E8A9C5] uppercase">
            <Megaphone className="w-4 h-4 text-[#E8A9C5]" />
            <span>Targeted Marketing Channels</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { name: 'TikTok', detail: 'Short viral POV video tours' },
              { name: 'Instagram', detail: 'Aesthetic photo carousels & stories' },
              { name: 'Reels', detail: 'High-energy food & mocktail clips' },
              { name: 'Influencer Collaborations', detail: 'Local creators & gaming vloggers' },
              { name: 'Cinematic Videos', detail: '30-second official promo teasers' },
              { name: 'User-Generated Content', detail: 'Customer photos with crowns & shoes' },
            ].map((channel, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-[#26152F]/50 border border-[#26152F] space-y-1">
                <span className="font-cinzel font-bold text-[#F7EFE7] block text-xs">✨ {channel.name}</span>
                <p className="text-[10px] text-[#C9B8D9]">{channel.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: How VVP Supports Marketing */}
        <div className="md:col-span-6 p-5 rounded-2xl bg-[#26152F]/50 border border-[#E8A9C5]/30 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C9A86A] uppercase">
            <Sparkles className="w-4 h-4 text-[#C9A86A]" />
            <span>How VVP Drives Marketing Success</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-[#0F0B14] border border-[#26152F] flex items-start gap-3">
              <Eye className="w-5 h-5 text-[#E8A9C5] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-cinzel font-bold text-[#E8A9C5] block">VISUALS Attract Attention</span>
                <p className="text-[11px] text-[#C9B8D9]">
                  Stunning interior decors, dual-world lighting, and magical dishes stop viewers scrolling on social feeds.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0F0B14] border border-[#26152F] flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-[#C9B8D9] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-cinzel font-bold text-[#C9B8D9] block">VOICE Creates Engagement</span>
                <p className="text-[11px] text-[#C9B8D9]">
                  Playful polls ("Pink Magic vs Dark Fantasy") and welcoming captions encourage comments, shares, and tags.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0F0B14] border border-[#26152F] flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#C9A86A] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-cinzel font-bold text-[#C9A86A] block">PROMISE Gives Reason To Visit</span>
                <p className="text-[11px] text-[#C9B8D9]">
                  The guarantee of comfort, creative freedom, and sisterhood converts online interest into actual venue bookings.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Reference to Official Video */}
      <div className="relative z-10 pt-3 border-t border-[#26152F] flex items-center justify-between text-xs text-[#C9B8D9]">
        <div className="flex items-center gap-2">
          <Video className="w-4 h-4 text-[#E8A9C5]" />
          <span>The uploaded 30-second cinematic video serves as a prime example of visual marketing content.</span>
        </div>
      </div>
    </div>
  );
};
