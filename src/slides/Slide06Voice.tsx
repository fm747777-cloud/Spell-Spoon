import React, { useState } from 'react';
import { MessageSquare, Sparkles, Smile, MessageCircle, HelpCircle, BarChart3 as Poll } from 'lucide-react';

export const Slide06Voice: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personality' | 'tone' | 'messages' | 'interactions'>('personality');

  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-[#0F0B14] border border-[#26152F] shadow-2xl overflow-hidden">
      
      {/* Background Radial Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E8A9C5]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#26152F] pb-4">
        <div>
          <span className="text-xs uppercase font-mono font-bold text-[#E8A9C5] tracking-widest">
            Slide 06 • VVP Pillar 2
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7EFE7] font-bold mt-1">
            VOICE
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-[#26152F]/70 border border-[#26152F]">
          {[
            { id: 'personality', label: 'Personality' },
            { id: 'tone', label: 'Tone & Style' },
            { id: 'messages', label: 'Key Messages' },
            { id: 'interactions', label: 'Customer Interaction' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#E8A9C5] text-[#0F0B14]'
                  : 'text-[#C9B8D9] hover:text-[#F7EFE7]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-4 flex-1">
        
        {/* PERSONALITY TAB */}
        {activeTab === 'personality' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-[#26152F]/50 border border-[#E8A9C5]/30 flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-[#E8A9C5] uppercase">Brand Personality Traits</span>
              <span className="text-xs text-[#C9B8D9]">Three Core Pillars of Communication</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'PLAYFUL', desc: 'Enthusiastic, fun-loving, and energetic without taking itself too seriously.', color: '#E8A9C5' },
                { title: 'IMAGINATIVE', desc: 'Sparking curiosity, magical storytelling, and inviting creative expression.', color: '#C9B8D9' },
                { title: 'WELCOMING', desc: 'Warm, safe, inclusive, and embracing every girl like a close friend or sister.', color: '#C9A86A' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0F0B14] border-2 border-[#26152F] hover:border-[#E8A9C5] transition-all text-center space-y-2">
                  <span className="text-[10px] font-mono text-[#E8A9C5] uppercase font-bold">Trait 0{idx + 1}</span>
                  <h3 className="font-cinzel text-2xl font-bold text-[#F7EFE7] tracking-wider">{item.title}</h3>
                  <p className="text-xs text-[#C9B8D9] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TONE & STYLE TAB */}
        {activeTab === 'tone' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#26152F]/50 border border-[#E8A9C5]/40 space-y-4">
              <span className="text-xs font-mono font-bold text-[#E8A9C5] uppercase">Tone of Communication</span>
              <h3 className="font-cinzel text-xl text-[#F7EFE7] font-bold">Friendly, Warm &amp; Adventurous</h3>
              <p className="text-xs text-[#C9B8D9] leading-relaxed">
                The brand speaks directly to the audience in a warm, inviting conversational tone that feels like talking to a trusted sister or best friend.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Friendly', 'Warm', 'Playful', 'Imaginative', 'Slightly Adventurous'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-[#0F0B14] text-xs text-[#E8A9C5] font-semibold border border-[#E8A9C5]/30">
                    ✨ {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F0B14] border border-[#26152F] space-y-4">
              <span className="text-xs font-mono font-bold text-[#C9A86A] uppercase">Language Style</span>
              <h3 className="font-cinzel text-xl text-[#F7EFE7] font-bold">Short, Simple &amp; Interactive</h3>
              <p className="text-xs text-[#C9B8D9] leading-relaxed">
                Copywriting is kept punchy, scannable, and imaginative — avoiding complex corporate speak or childish cartoons.
              </p>
              <div className="p-3 rounded-xl bg-[#26152F] text-xs font-mono text-[#F7EFE7] border border-[#26152F]">
                Rule: "Short, friendly, simple, interactive, and imaginative."
              </div>
            </div>
          </div>
        )}

        {/* KEY MESSAGES TAB */}
        {activeTab === 'messages' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#26152F]/50 border border-[#E8A9C5]/30 text-xs text-[#E8A9C5] font-mono uppercase font-bold">
              Core Brand Slogans &amp; Campaign Headlines
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-[#0F0B14] border-2 border-[#E8A9C5]/40 text-center space-y-2">
                <span className="text-[10px] font-mono text-[#E8A9C5] font-bold uppercase">Primary Slogan</span>
                <h4 className="font-cinzel text-lg text-[#F7EFE7] font-bold">"CHOOSE YOUR WORLD. MAKE IT YOURS."</h4>
                <p className="text-xs text-[#C9B8D9]">Empowers every girl to select her atmospheric vibe.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0F0B14] border border-[#26152F] text-center space-y-2">
                <span className="text-[10px] font-mono text-[#C9B8D9] font-bold uppercase">Campaign Hook</span>
                <h4 className="font-cinzel text-lg text-[#F7EFE7] font-bold">"PINK MAGIC OR DARK FANTASY?"</h4>
                <p className="text-xs text-[#C9B8D9]">Sparks social engagement and friendly debate among friend groups.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0F0B14] border border-[#26152F] text-center space-y-2">
                <span className="text-[10px] font-mono text-[#C9A86A] font-bold uppercase">Interactive Question</span>
                <h4 className="font-cinzel text-lg text-[#F7EFE7] font-bold">"WHICH WORLD MATCHES YOU?"</h4>
                <p className="text-xs text-[#C9B8D9]">Invites personality quiz interactions on social channels.</p>
              </div>
            </div>
          </div>
        )}

        {/* CUSTOMER INTERACTIONS TAB */}
        {activeTab === 'interactions' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#26152F]/50 border border-[#E8A9C5]/30 text-xs text-[#E8A9C5] font-mono uppercase font-bold">
              How the Brand Interacts With Customers
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { title: 'Questions', desc: 'Engaging story questions on IG/TikTok', icon: MessageCircle },
                { title: 'Polls', desc: 'Weekly voting on new magic mocktail flavors', icon: Poll },
                { title: 'Challenges', desc: 'Flower crown crafting & photo contests', icon: Sparkles },
                { title: 'Interactive Posts', desc: 'Personality quizzes & alignment cards', icon: HelpCircle },
                { title: 'Community Content', desc: 'Reposting customer moments & reels', icon: Smile },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#0F0B14] border border-[#26152F] text-center space-y-2">
                  <item.icon className="w-5 h-5 text-[#E8A9C5] mx-auto" />
                  <h4 className="font-cinzel text-xs font-bold text-[#F7EFE7]">{item.title}</h4>
                  <p className="text-[10px] text-[#C9B8D9]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Footer Summary */}
      <div className="relative z-10 pt-3 border-t border-[#26152F] text-center text-xs text-[#C9B8D9]">
        Voice aligns directly with the Visuals to create a friendly, imaginative, and interactive relationship with customers.
      </div>
    </div>
  );
};
