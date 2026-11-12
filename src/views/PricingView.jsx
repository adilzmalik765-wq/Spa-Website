import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Sparkles, Calendar, HelpCircle, ArrowRight } from 'lucide-react';
import { PRICING } from '../data/spaData';
import PricingCalculator from '../components/PricingCalculator';

export default function PricingView({ onOpenBooking }) {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
          Transparent Fee Schedule
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl text-[#1C1C1C]">
          Priced by the unit, <br />
          <span className="italic text-[#6B3A5D]">never arbitrary packages.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed max-w-2xl">
          We do not believe in opaque tiered packages or upselling during procedures. You pay only for the exact neurotoxin units and filler syringes required to achieve balanced, natural anatomy.
        </p>
      </div>

      {/* Pricing Table List */}
      <div className="bg-white border border-[#E3DED6] rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
        <div className="pb-4 border-b border-[#E3DED6] flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]">Procedure</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]">Fee</span>
        </div>

        <div className="divide-y divide-[#F2EFEA]">
          {PRICING.map((p) => (
            <div key={p.name} className="py-4.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="space-y-0.5">
                <h3 className="text-base sm:text-lg font-medium text-[#1C1C1C]">{p.name}</h3>
                <p className="text-xs text-[#5C5852]">{p.detail} {p.note && `· ${p.note}`}</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="font-serif-display text-2xl sm:text-3xl text-[#1C1C1C]">{p.price}</span>
                {p.unit && <span className="text-xs text-[#5C5852] ml-1">/ {p.unit}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Treatment Estimator Calculator */}
      <div className="pt-2">
        <PricingCalculator onBookConsult={onOpenBooking} />
      </div>

      {/* Membership Card Spotlight */}
      <div className="bg-[#6B3A5D] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full font-bold">
              The Swann Avenue Club
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-white">
              Sustained skin health, without contracts.
            </h2>
            <p className="text-xs sm:text-sm text-[#F4ECF1] leading-relaxed">
              $99 per month deposits directly into your personal treatment bank. Use it toward neurotoxins, HydraFacials, or peels whenever you choose—and enjoy an exclusive 10% member pricing on every treatment.
            </p>
            <ul className="text-xs text-[#F4ECF1] space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>100% of the $99 rolls over; credits never expire</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>10% off all injectable and laser modalities</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Priority booking windows with Saskia and Leonie</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center space-y-3">
            <p className="text-xs uppercase tracking-wider text-white/80">Monthly Investment</p>
            <p className="font-serif-display text-5xl text-white">$99</p>
            <p className="text-[11px] text-[#F4ECF1]">Banked toward your future visits</p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full bg-white text-[#6B3A5D] hover:bg-[#F2EFEA] text-xs font-semibold py-3 rounded-full transition-colors cursor-pointer mt-2"
            >
              Join Club / Inquire
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Disclaimers */}
      <div className="text-xs text-[#5C5852] space-y-2 border-t border-[#E3DED6] pt-6">
        <p>
          * A $50 deposit is collected at the time of consultation booking to reserve your dedicated 60-minute appointment chair. 100% of this deposit is applied as a direct credit toward any treatment or product purchased.
        </p>
        <p>
          * Exact dosing depends on your unique muscle strength, anatomy, and metabolism. Your injector provides a firm written quote before performing any injection.
        </p>
      </div>
    </div>
  );
}
