import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-react';
import { TREATMENTS } from '../data/spaData';

export default function TreatmentsView({ onOpenBooking, onSelectTreatment }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'Injectables', 'Laser & Energy', 'Skin Health', 'Regenerative'];

  const filtered = activeCategory === 'ALL'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-20 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
          Clinical Treatment Portfolio
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl text-[#1C1C1C]">
          Every treatment, clearly priced.
        </h1>
        <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
          We dose conservatively, list prices upfront, and never push packages you do not need. Medical aesthetic procedures at Sorrel are administered exclusively by licensed medical practitioners under the oversight of board-certified dermatologist Dr. Philippa Delacorte, MD.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E3DED6]">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#6B3A5D] text-white shadow-sm'
                : 'bg-white border border-[#E3DED6] text-[#5C5852] hover:bg-[#F2EFEA] hover:text-[#1C1C1C]'
            }`}
          >
            {cat === 'ALL' ? 'All Treatments' : cat}
          </button>
        ))}
      </div>

      {/* Treatment List Detailed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((t, idx) => (
          <motion.div
            key={t.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="rounded-3xl bg-white border border-[#E3DED6] overflow-hidden grid grid-cols-1 sm:grid-cols-12 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image Column */}
            <div className="sm:col-span-5 aspect-[4/3] sm:aspect-auto bg-[#F2EFEA] relative overflow-hidden">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#F9F8F6]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#E3DED6] text-[11px] font-bold tracking-wider text-[#6B3A5D] uppercase">
                {t.code}
              </div>
            </div>

            {/* Content Column */}
            <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1C1C1C]">
                    {t.name}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                  {t.fullDesc || t.desc}
                </p>

                {/* Target Areas */}
                {t.targetAreas && (
                  <div className="pt-1">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#5C5852] mb-1.5">
                      Target Anatomy
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.targetAreas.map((area) => (
                        <span
                          key={area}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-[#F2EFEA] text-[#1C1C1C]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Metrics */}
                <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-[#5C5852] border-t border-[#F2EFEA]">
                  <div>
                    <span className="block text-[10px] uppercase text-stone-400">Downtime</span>
                    <span className="font-medium text-[#1C1C1C]">{t.downtime}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-stone-400">Pricing</span>
                    <span className="font-medium text-[#6B3A5D]">{t.unitPrice}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#F2EFEA] flex items-center justify-between">
                <span className="text-xs text-[#5C5852]">
                  {t.price}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectTreatment) onSelectTreatment(t.code);
                    onOpenBooking();
                  }}
                  className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Safety & Medical Ethics Note */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#F4ECF1] border border-[#6B3A5D]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <p className="font-serif-display text-2xl text-[#1C1C1C]">
            Our Two-Week Complimentary Check-in
          </p>
          <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
            Every injectable treatment at Sorrel includes an optional 14-day in-person review at zero additional charge. This allows your injector to inspect your results under medical lighting once swelling and micro-settling have completed.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenBooking}
          className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all shrink-0 cursor-pointer"
        >
          Book a Consult ($50)
        </button>
      </div>
    </div>
  );
}
