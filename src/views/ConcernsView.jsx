import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { CONCERNS } from '../data/spaData';

export default function ConcernsView({ onNavigate, onOpenBooking, onSelectTreatment }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Concerns' },
    { id: 'NTX', label: 'Expression Lines (NTX)' },
    { id: 'HA', label: 'Volume & Symmetry (HA)' },
    { id: 'LHR', label: 'Laser & Hair (LHR)' },
    { id: 'PEEL', label: 'Tone & Clarity (PEEL)' },
    { id: 'MN', label: 'Acne Scars & Texture (MN)' },
  ];

  const filteredConcerns = selectedCategory === 'ALL'
    ? CONCERNS
    : CONCERNS.filter(c => c.tag === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-20 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-block text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
          8 Common Aesthetic Targets
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl text-[#1C1C1C] leading-tight">
          Start with what you notice, <br />
          <span className="italic text-[#6B3A5D]">not the clinical jargon.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
          Patients rarely walk into our practice asking for "inter-dermal reticulated hyaluronic acid." They say: "My forehead looks tired even when I am well rested," or "My foundation catches on rough texture." Select your primary concern below to explore our conservative clinical solutions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-2 pb-4 border-b border-[#E3DED6]">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#6B3A5D] text-white shadow-sm'
                  : 'bg-white border border-[#E3DED6] text-[#5C5852] hover:text-[#1C1C1C] hover:bg-[#F2EFEA]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Concerns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredConcerns.map((concern, idx) => (
            <motion.div
              layout
              key={concern.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-[#E3DED6] rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#F4ECF1] text-[#6B3A5D] uppercase">
                    {concern.tag}
                  </span>
                  <span className="text-[11px] text-[#5C5852] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#6B3A5D]" />
                    {concern.downtime}
                  </span>
                </div>

                <h2 className="font-serif-display text-2xl text-[#1C1C1C] leading-snug">
                  {concern.title}
                </h2>

                <p className="text-xs text-[#5C5852] leading-relaxed">
                  {concern.details || concern.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2EFEA] space-y-3">
                <div>
                  <p className="text-[10px] uppercase font-semibold text-[#5C5852] tracking-wider">
                    Recommended Protocol
                  </p>
                  <p className="text-xs font-semibold text-[#6B3A5D] mt-0.5">
                    {concern.rec}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (onSelectTreatment) onSelectTreatment(concern.tag);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#F2EFEA] hover:bg-[#6B3A5D] text-[#1C1C1C] hover:text-white text-xs font-medium py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book for this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom CTA Box */}
      <div className="bg-[#F2EFEA]/60 border border-[#E3DED6] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
          Not Certain Which Category Applies?
        </span>
        <h3 className="font-serif-display text-3xl sm:text-4xl text-[#1C1C1C]">
          That is why we created the $50 first consultation.
        </h3>
        <p className="text-xs sm:text-sm text-[#5C5852] max-w-lg mx-auto leading-relaxed">
          In sixty unhurried minutes, our medical injectors evaluate your facial dynamics at rest and in motion. Your $50 deposit is credited in full to any treatment you choose.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onOpenBooking}
            className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs sm:text-sm font-medium px-7 py-3 rounded-full shadow transition-all cursor-pointer"
          >
            Schedule a 60-Minute Assessment ($50)
          </button>
        </div>
      </div>
    </div>
  );
}
