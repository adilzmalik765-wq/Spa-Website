import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Check, Calendar, ArrowRight, Sparkles, FileText, HeartHandshake } from 'lucide-react';
import { CONSULT_STEPS, IMAGES } from '../data/spaData';

export default function ConsultationView({ onOpenBooking, onNavigate }) {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
          The First Visit Protocol
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl text-[#1C1C1C]">
          Sixty minutes, six steps, $50.
        </h1>
        <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed max-w-2xl">
          We do not believe in five-minute rushed consultations or sales pitches in treatment rooms. Your first appointment on Swann Avenue is a deliberate clinical assessment designed to evaluate your anatomy, answer every question, and provide a transparent written plan.
        </p>
      </div>

      {/* Hero Consultation Banner */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-[#E3DED6] shadow-md">
        <img
          src={IMAGES.consult}
          alt="Sorrel Aesthetics private consultation suite"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-transparent" />
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-white max-w-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F2EFEA]/80">
            Private Consultation Suite
          </p>
          <p className="font-serif-display text-2xl sm:text-3xl text-white mt-1">
            "We listen first. Before any syringe or needle enters the room."
          </p>
        </div>
      </div>

      {/* Six Step Detailed Timeline */}
      <div className="space-y-4">
        <div className="pb-3 border-b border-[#E3DED6] flex items-center justify-between">
          <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1C1C1C]">
            Your 60-Minute Timeline
          </h2>
          <span className="text-xs text-[#5C5852]">
            $50 deposit credited in full
          </span>
        </div>

        <div className="space-y-4">
          {CONSULT_STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E3DED6] flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 shadow-sm hover:border-[#6B3A5D] transition-colors"
            >
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-sm font-bold text-[#6B3A5D] w-14">
                  {s.time}
                </span>
                <span className="text-xs text-[#5C5852] sm:hidden">· Step {s.step}</span>
              </div>

              <div className="space-y-1.5 flex-1">
                <h3 className="font-serif-display text-2xl text-[#1C1C1C]">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                  {s.desc}
                </p>
                <p className="text-[11px] text-[#6B3A5D] font-medium pt-1 italic">
                  Note: {s.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What to Bring & Prepare Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#F2EFEA]/50 border border-[#E3DED6] rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-white border border-[#E3DED6] flex items-center justify-center text-[#6B3A5D]">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-serif-display text-2xl text-[#1C1C1C]">
            Preparing for Your Visit
          </h3>
          <ul className="text-xs sm:text-sm text-[#5C5852] space-y-2.5">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#6B3A5D] shrink-0 mt-0.5" />
              <span>Arrive with a clean, makeup-free face if convenient. (Gentle cleansers available in our washroom.)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#6B3A5D] shrink-0 mt-0.5" />
              <span>Have a list of prescription medications, blood thinners, and daily supplements.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#6B3A5D] shrink-0 mt-0.5" />
              <span>Avoid alcohol, high-dose fish oil, and NSAIDs for 24 hours prior if considering same-day injectables.</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#F2EFEA]/50 border border-[#E3DED6] rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-white border border-[#E3DED6] flex items-center justify-center text-[#6B3A5D]">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="font-serif-display text-2xl text-[#1C1C1C]">
            Same-Day Treatment Policy
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
            If both you and your injector determine treatment is medically appropriate, neurotoxin (Botox/Dysport), superficial chemical peels, or HydraFacials can frequently be performed immediately following the consultation.
          </p>
          <p className="text-xs text-[#5C5852] leading-relaxed">
            For advanced filler balancing or laser resurfacing, we often schedule a dedicated second visit so you have unhurried time to reflect on your written plan.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center pt-4">
        <button
          type="button"
          onClick={onOpenBooking}
          className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-sm font-medium px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Reserve Your Consultation Chair ($50)</span>
        </button>
      </div>
    </div>
  );
}
