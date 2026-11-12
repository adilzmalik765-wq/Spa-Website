import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Clock, Calendar, Sparkles, Check, 
  ChevronDown, Phone, MapPin, Heart, Star, Compass, Award 
} from 'lucide-react';
import { 
  TREATMENTS, CONSULT_STEPS, TEAM, FAQS, CONCERNS, IMAGES 
} from '../data/spaData';

export default function HomeView({ onNavigate, onOpenBooking, onSelectTreatment }) {
  const [activeConsultIndex, setActiveConsultIndex] = useState(2);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2EFEA] border border-[#E3DED6] text-xs font-medium text-[#5C5852]">
              <span className="w-2 h-2 rounded-full bg-[#6B3A5D]" />
              <span>Doctor-Supervised Aesthetic Medicine · Tampa</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif-display text-5xl sm:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-[#1C1C1C]"
            >
              Look rested, <br />
              <span className="italic text-[#6B3A5D]">not done.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-[#5C5852] leading-relaxed max-w-lg"
            >
              An unhurried medical aesthetic practice on Swann Avenue. Sixty-minute consultations, conservative dosing, and transparent pricing by the unit.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onOpenBooking}
                className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-sm font-medium px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a consultation ($50)</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <button
                type="button"
                onClick={() => onNavigate('treatments')}
                className="text-sm font-medium text-[#1C1C1C] hover:text-[#6B3A5D] px-4 py-3.5 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>View Treatment Menu</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6B3A5D]" />
              </button>
            </motion.div>

            {/* Micro Trust Proofs */}
            <motion.div variants={fadeInUp} className="pt-4 border-t border-[#E3DED6] grid grid-cols-3 gap-4 text-xs text-[#5C5852]">
              <div>
                <p className="font-serif-display text-xl text-[#1C1C1C]">$13 / unit</p>
                <p className="mt-0.5">Neurotoxins dosed conservatively</p>
              </div>
              <div>
                <p className="font-serif-display text-xl text-[#1C1C1C]">60 Minutes</p>
                <p className="mt-0.5">First visit comprehensive consult</p>
              </div>
              <div>
                <p className="font-serif-display text-xl text-[#1C1C1C]">MD Oversight</p>
                <p className="mt-0.5">Board-certified dermatologist led</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden shadow-xl border border-[#E3DED6] bg-[#F2EFEA]">
              <img
                src={IMAGES.hero}
                alt="Sorrel Aesthetics serene clinic room on Swann Avenue Tampa"
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating aesthetic badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-auto bg-[#F9F8F6]/90 backdrop-blur-md border border-[#E3DED6] rounded-2xl p-4 shadow-lg max-w-xs"
              >
                <p className="text-[11px] uppercase tracking-widest text-[#6B3A5D] font-bold">
                  The Sorrel Ethos
                </p>
                <p className="text-xs text-[#1C1C1C] font-medium mt-1">
                  "Facial volume looks best when built gradually. We start with 1 syringe, not five."
                </p>
                <p className="text-[11px] text-[#5C5852] mt-1.5 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#6B3A5D]" />
                  <span>Complimentary 2-week follow-up included</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. THREE CORE PILLARS BANNER */}
      {/* ============================================================ */}
      <section className="border-y border-[#E3DED6] bg-[#F2EFEA]/50 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#F9F8F6] border border-[#E3DED6] flex items-center justify-center text-[#6B3A5D] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-display text-xl text-[#1C1C1C]">Unhurried 60 Minutes</h4>
                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                  Never rushed through a 15-minute conveyor belt. We listen to your goals, map facial anatomy, and provide written quotes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#F9F8F6] border border-[#E3DED6] flex items-center justify-center text-[#6B3A5D] shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-display text-xl text-[#1C1C1C]">1-Syringe Restraint</h4>
                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                  Our clinical priority is natural tissue preservation. We dosed conservatively, let tissue settle, and check back at 14 days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#F9F8F6] border border-[#E3DED6] flex items-center justify-center text-[#6B3A5D] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-display text-xl text-[#1C1C1C]">Board-Certified Oversight</h4>
                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                  Dr. Philippa Delacorte, MD reviews every client chart and ensures emergency-ready clinical safety on Swann Avenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FEATURED TREATMENTS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
              Signature Treatment Menu
            </p>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#1C1C1C]">
              Every treatment, clearly priced.
            </h2>
            <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
              We charge by the exact unit and syringe, not inflated area packages. Your $50 consultation deposit applies directly.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('treatments')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B3A5D] hover:text-[#552D4A] transition-colors cursor-pointer"
          >
            <span>Explore All 5 Modalities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((treatment, idx) => (
            <motion.div
              key={treatment.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group bg-white border border-[#E3DED6] rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] bg-[#F2EFEA] overflow-hidden relative">
                  <img
                    src={treatment.img}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-[#F9F8F6]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#E3DED6] text-[11px] font-bold tracking-wider text-[#6B3A5D] uppercase">
                    {treatment.code}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif-display text-2xl text-[#1C1C1C] group-hover:text-[#6B3A5D] transition-colors">
                      {treatment.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                    {treatment.desc}
                  </p>

                  <div className="pt-2 text-xs text-[#5C5852] space-y-1">
                    <p className="flex items-center gap-1.5 font-medium text-[#1C1C1C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B3A5D]" />
                      <span>{treatment.price}</span>
                    </p>
                    <p className="text-[11px] text-[#5C5852]">
                      Downtime: {treatment.downtime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#F2EFEA] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectTreatment) onSelectTreatment(treatment.code);
                    onOpenBooking();
                  }}
                  className="text-xs font-semibold text-[#6B3A5D] hover:text-[#552D4A] flex items-center gap-1 cursor-pointer"
                >
                  <span>Book this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('treatments')}
                  className="text-xs text-[#5C5852] hover:text-[#1C1C1C] cursor-pointer"
                >
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. THE CONSULTATION PROCESS (INTERACTIVE WALKTHROUGH) */}
      {/* ============================================================ */}
      <section className="border-y border-[#E3DED6] bg-[#F2EFEA]/40 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Steps Selector */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
                  The First Visit Protocol
                </p>
                <h2 className="font-serif-display text-3xl sm:text-5xl text-[#1C1C1C] mt-1">
                  Sixty minutes, six steps, $50.
                </h2>
                <p className="text-xs sm:text-sm text-[#5C5852] mt-2">
                  Click through each phase of our unhurried initial assessment on Swann Avenue:
                </p>
              </div>

              {/* Step Buttons */}
              <div className="space-y-2.5">
                {CONSULT_STEPS.map((step, idx) => {
                  const isActive = activeConsultIndex === idx;
                  return (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => setActiveConsultIndex(idx)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-white border-[#6B3A5D] shadow-sm'
                          : 'bg-[#F9F8F6]/80 border-[#E3DED6] hover:bg-white hover:border-[#6B3A5D]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-full ${
                            isActive ? 'bg-[#6B3A5D] text-white' : 'bg-[#E3DED6] text-[#5C5852]'
                          }`}>
                            {step.time}
                          </span>
                          <span className="font-serif-display text-lg text-[#1C1C1C]">
                            {step.title}
                          </span>
                        </div>
                        <span className="text-xs text-[#6B3A5D] font-medium">
                          {isActive ? 'Active' : ''}
                        </span>
                      </div>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-xs text-[#5C5852] mt-2 leading-relaxed pt-1 border-t border-[#E3DED6]"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Your 60 Minutes ($50)</span>
                </button>
              </div>
            </div>

            {/* Right Consultation Image and Caption */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#E3DED6] bg-white">
                <img
                  src={IMAGES.consult}
                  alt="Sorrel consultation suite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 bg-[#F9F8F6]/95 backdrop-blur-md p-5 rounded-2xl border border-[#E3DED6]">
                  <p className="text-[11px] uppercase tracking-widest text-[#6B3A5D] font-bold">
                    {CONSULT_STEPS[activeConsultIndex].time} · {CONSULT_STEPS[activeConsultIndex].title}
                  </p>
                  <p className="text-xs sm:text-sm text-[#1C1C1C] font-medium mt-1">
                    {CONSULT_STEPS[activeConsultIndex].caption}
                  </p>
                  <p className="text-[11px] text-[#5C5852] mt-1">
                    1720 W Swann Ave, Tampa · Private Consultation Suite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. EIGHT CONCERNS PREVIEW */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
              8 Common Aesthetic Concerns
            </p>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#1C1C1C]">
              Start with what you notice.
            </h2>
            <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
              You don’t need to know the medical terminology. Tell us what catches your eye in the mirror or during photos.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('concerns')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B3A5D] hover:text-[#552D4A] transition-colors cursor-pointer"
          >
            <span>View All Concerns In Detail</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONCERNS.slice(0, 8).map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-2xl bg-white border border-[#E3DED6] hover:border-[#6B3A5D] transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <span className="inline-block text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F4ECF1] text-[#6B3A5D] uppercase">
                  {c.tag}
                </span>
                <h3 className="font-serif-display text-xl text-[#1C1C1C] group-hover:text-[#6B3A5D] transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-[#5C5852] leading-relaxed">
                  {c.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-[#F2EFEA]">
                <p className="text-[11px] font-semibold text-[#6B3A5D]">
                  {c.rec}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. FULL-BLEED TESTIMONIAL BANNER */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl min-h-[460px] flex items-end p-8 sm:p-14 border border-[#E3DED6] shadow-xl">
          <img
            src={IMAGES.testimonial}
            alt="Tampa client in natural sunlight"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/40 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-4 text-white">
            <div className="flex items-center gap-1 text-[#F2EFEA]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F2EFEA] text-[#F2EFEA]" />
              ))}
            </div>

            <blockquote className="font-serif-display text-2xl sm:text-3xl lg:text-4xl leading-snug">
              "I wanted to look like myself, just after three weeks in Provence. Saskia understood immediately. Not one person asked what I had done—they just asked if I had been sleeping ten hours a night."
            </blockquote>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#F2EFEA]/80">
              <span className="font-semibold text-white">Elenora V.</span>
              <span>·</span>
              <span>Davis Islands, Tampa</span>
              <span>·</span>
              <span>Consultation + Conservative Neurotoxin</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. MEDICAL TEAM SPOTLIGHT */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
              Our Clinical Practitioners
            </p>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#1C1C1C]">
              Same injector, every visit.
            </h2>
            <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
              We never rotate your care through transient providers. You build an enduring clinical relationship with your injector.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('team')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B3A5D] hover:text-[#552D4A] transition-colors cursor-pointer"
          >
            <span>Meet All 4 Providers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-[#E3DED6] rounded-3xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/5] bg-[#F2EFEA] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#6B3A5D]">
                    {member.role}
                  </p>
                  <h3 className="font-serif-display text-xl text-[#1C1C1C]">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#5C5852] line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="text-[11px] font-medium text-[#1C1C1C]">
                  {member.cred}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. PHILOSOPHY & SWANN AVENUE CLINIC */}
      {/* ============================================================ */}
      <section className="border-t border-[#E3DED6] bg-[#F2EFEA]/40 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
                Clinical Philosophy
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#1C1C1C] leading-tight">
                Medicine first. <br />
                <span className="italic text-[#6B3A5D]">Then art.</span>
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                <p>
                  Medical aesthetics has too often turned into a fast-paced retail transaction driven by social media filters and aggressive sales quotas. At Sorrel, we founded our practice on the counter-principle: patience, restraint, and strict anatomical safety.
                </p>
                <p>
                  We believe true aesthetic excellence is invisible. When friends see you after a procedure, they shouldn’t notice altered cheeks or tight foreheads; they should simply notice how radiant, rested, and confident you look.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full shadow-sm transition-all cursor-pointer"
                >
                  Schedule Your Visit
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('consultation')}
                  className="text-xs sm:text-sm text-[#1C1C1C] hover:text-[#6B3A5D] font-medium transition-colors cursor-pointer"
                >
                  Read Consultation Protocol →
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#E3DED6] shadow-lg">
                <img
                  src={IMAGES.philosophy}
                  alt="Sorrel Aesthetics philosophy and interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
            Transparent Answers
          </p>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#1C1C1C]">
            Questions from first-time patients.
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5852] max-w-lg mx-auto">
            Everything you need to know about safety, comfort, downtime, and our conservative clinical approach.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white border border-[#E3DED6] rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif-display text-xl text-[#1C1C1C] font-medium">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-7 h-7 rounded-full bg-[#F2EFEA] flex items-center justify-center text-[#6B3A5D] shrink-0 font-bold"
                  >
                    +
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5C5852] leading-relaxed border-t border-[#F2EFEA]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. CLINIC LOCATION & CONTACT */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-12">
        <div className="bg-white border border-[#E3DED6] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
                Visit Our Practice
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1C1C1C]">
                1720 W Swann Ave, Tampa, FL
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed max-w-lg">
                Located in the quiet tree-lined heart of Hyde Park. Reserved private parking is available behind the clinic building.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5C5852]">
                <div className="space-y-1">
                  <p className="font-semibold text-[#1C1C1C]">Front Desk & Booking</p>
                  <p>(813) 555-0153</p>
                  <p>hello@sorrelaesthetics.com</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-[#1C1C1C]">Clinical Hours</p>
                  <p>Monday – Thursday: 9 AM – 7 PM</p>
                  <p>Friday: 9 AM – 5 PM · Sat: 9 AM – 3 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E3DED6] flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full shadow-sm transition-all cursor-pointer"
              >
                Book a Consultation ($50)
              </button>
              <a
                href="https://maps.google.com/?q=1720+W+Swann+Ave+Tampa+FL"
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-medium text-[#1C1C1C] hover:text-[#6B3A5D] transition-colors inline-flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#6B3A5D]" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto bg-[#F2EFEA]">
            <img
              src={IMAGES.location}
              alt="Sorrel Aesthetics Swann Avenue clinic exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
