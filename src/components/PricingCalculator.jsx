import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function PricingCalculator({ onBookConsult }) {
  const [neurotoxinUnits, setNeurotoxinUnits] = useState(30);
  const [fillerSyringes, setFillerSyringes] = useState(1);
  const [laserSessions, setLaserSessions] = useState(0);
  const [includeMembership, setIncludeMembership] = useState(false);

  // Unit prices
  const unitPriceNtx = 13;
  const syringePriceFiller = 725;
  const sessionPriceLaser = 99;

  // Subtotal
  const rawTotal = (neurotoxinUnits * unitPriceNtx) + (fillerSyringes * syringePriceFiller) + (laserSessions * sessionPriceLaser);
  const discountRate = includeMembership ? 0.10 : 0.0;
  const discountAmount = rawTotal * discountRate;
  const estimatedTotal = rawTotal - discountAmount + (includeMembership ? 99 : 0);

  return (
    <div className="bg-white border border-[#E3DED6] rounded-3xl p-6 sm:p-9 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E3DED6]">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#6B3A5D]">
            <Calculator className="w-4 h-4" />
            Interactive Calculator
          </span>
          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1C1C1C] mt-1">
            Personalized Treatment Estimator
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5852] mt-1">
            No surprise add-ons. Dosed by exact unit and syringe, with $50 consult credited.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIncludeMembership(!includeMembership)}
          className={`flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-medium transition-all cursor-pointer ${
            includeMembership
              ? 'bg-[#6B3A5D] text-white border-[#6B3A5D]'
              : 'bg-[#F2EFEA] text-[#1C1C1C] border-[#E3DED6] hover:bg-[#E3DED6]'
          }`}
        >
          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] ${
            includeMembership ? 'bg-white text-[#6B3A5D]' : 'border-stone-400'
          }`}>
            {includeMembership && '✓'}
          </span>
          <span>Apply Membership (10% Off)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders and Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Neurotoxin Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-[#1C1C1C]">Neurotoxin (Botox / Dysport / Xeomin)</span>
              <span className="font-mono text-sm font-semibold text-[#6B3A5D]">
                {neurotoxinUnits} units (${neurotoxinUnits * unitPriceNtx})
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              step="5"
              value={neurotoxinUnits}
              onChange={(e) => setNeurotoxinUnits(Number(e.target.value))}
              className="w-full accent-[#6B3A5D] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#5C5852]">
              <span>0 units (None)</span>
              <span>20–30 units (Average forehead & crows)</span>
              <span>60 units</span>
            </div>
          </div>

          {/* Dermal Fillers Counter */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-[#1C1C1C]">Hyaluronic Acid Filler</span>
              <span className="font-mono text-sm font-semibold text-[#6B3A5D]">
                {fillerSyringes} {fillerSyringes === 1 ? 'syringe' : 'syringes'} (${fillerSyringes * syringePriceFiller})
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFillerSyringes(num)}
                  className={`flex-1 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    fillerSyringes === num
                      ? 'bg-[#6B3A5D] text-white border-[#6B3A5D]'
                      : 'bg-[#F9F8F6] border-[#E3DED6] text-[#1C1C1C] hover:bg-[#F2EFEA]'
                  }`}
                >
                  {num === 0 ? '0' : `${num} Syr`}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-[#5C5852]">
              *We adhere strictly to our conservative 1-syringe starting protocol for subtle, rested outcomes.
            </p>
          </div>

          {/* Laser Sessions */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-[#1C1C1C]">Laser Hair Removal Sessions</span>
              <span className="font-mono text-sm font-semibold text-[#6B3A5D]">
                {laserSessions} {laserSessions === 1 ? 'session' : 'sessions'} (${laserSessions * sessionPriceLaser})
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[0, 1, 3, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setLaserSessions(num)}
                  className={`flex-1 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    laserSessions === num
                      ? 'bg-[#6B3A5D] text-white border-[#6B3A5D]'
                      : 'bg-[#F9F8F6] border-[#E3DED6] text-[#1C1C1C] hover:bg-[#F2EFEA]'
                  }`}
                >
                  {num === 0 ? '0' : `${num} Sessions`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculation Summary Card */}
        <div className="lg:col-span-5 bg-[#F9F8F6] border border-[#E3DED6] rounded-2xl p-6 space-y-4">
          <div className="space-y-2 text-xs text-[#5C5852] pb-4 border-b border-[#E3DED6]">
            <p className="flex justify-between">
              <span>Neurotoxin ({neurotoxinUnits} u @ $13):</span>
              <span className="font-mono text-[#1C1C1C]">${neurotoxinUnits * unitPriceNtx}</span>
            </p>
            <p className="flex justify-between">
              <span>Dermal Filler ({fillerSyringes} syr @ $725):</span>
              <span className="font-mono text-[#1C1C1C]">${fillerSyringes * syringePriceFiller}</span>
            </p>
            {laserSessions > 0 && (
              <p className="flex justify-between">
                <span>Laser Hair Removal ({laserSessions} sessions):</span>
                <span className="font-mono text-[#1C1C1C]">${laserSessions * sessionPriceLaser}</span>
              </p>
            )}
            {includeMembership && (
              <>
                <p className="flex justify-between text-[#6B3A5D]">
                  <span>Member 10% Discount:</span>
                  <span className="font-mono">-${Math.round(discountAmount)}</span>
                </p>
                <p className="flex justify-between">
                  <span>Monthly Membership Credit:</span>
                  <span className="font-mono text-[#1C1C1C]">+$99</span>
                </p>
              </>
            )}
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-wider text-[#5C5852] font-semibold">Estimated Total</span>
              <span className="font-serif-display text-4xl text-[#1C1C1C]">
                ${Math.round(estimatedTotal)}
              </span>
            </div>
            <p className="text-[11px] text-[#5C5852] mt-1">
              $50 deposit reserves appointment and applies 100% to this balance.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onBookConsult}
            className="w-full bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs sm:text-sm font-medium py-3 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <span>Book Consultation ($50 Deposit)</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
