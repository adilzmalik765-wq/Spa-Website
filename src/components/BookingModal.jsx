import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, CheckCircle2, ChevronRight, ChevronLeft, MapPin, Sparkles, Shield } from 'lucide-react';
import { BOOKING_OPTIONS } from '../data/spaData';

export default function BookingModal({ isOpen, onClose, preselectedServiceId }) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: BOOKING_OPTIONS.services[0].name,
    servicePrice: BOOKING_OPTIONS.services[0].price,
    provider: BOOKING_OPTIONS.providers[0].name,
    date: BOOKING_OPTIONS.dates[0].label,
    time: BOOKING_OPTIONS.times[1],
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If preselected service is passed
  useEffect(() => {
    if (preselectedServiceId) {
      const match = BOOKING_OPTIONS.services.find(s => s.id === preselectedServiceId);
      if (match) {
        setBookingData(prev => ({
          ...prev,
          service: match.name,
          servicePrice: match.price
        }));
      }
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(5); // Confirmation step
    }, 700);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={resetAndClose}
        className="fixed inset-0 bg-[#1C1C1C]/60 backdrop-blur-sm -z-10"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        className="bg-[#F9F8F6] border border-[#E3DED6] rounded-3xl max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto"
      >
        {/* Modal Header */}
        <div className="bg-[#F9F8F6] border-b border-[#E3DED6] px-6 py-5 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#6B3A5D] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>1720 W Swann Ave · Tampa</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1C1C1C] mt-0.5">
              {step === 5 ? 'Consultation Confirmed' : 'Book a Consultation'}
            </h3>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-full border border-[#E3DED6] flex items-center justify-center text-[#5C5852] hover:text-[#1C1C1C] hover:bg-[#F2EFEA] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wizard Step Progress Indicator */}
        {step < 5 && (
          <div className="bg-[#F2EFEA]/60 px-6 py-2.5 border-b border-[#E3DED6] flex items-center justify-between text-xs text-[#5C5852]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-full bg-[#6B3A5D] text-white">
                Step {step} of 4
              </span>
              <span className="font-medium text-[#1C1C1C]">
                {step === 1 && 'Select Treatment'}
                {step === 2 && 'Select Provider'}
                {step === 3 && 'Choose Date & Time'}
                {step === 4 && 'Your Information'}
              </span>
            </div>
            <span className="text-[11px] text-[#5C5852] hidden sm:inline-block">
              $50 deposit credited toward care
            </span>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          <AnimatePresence mode="wait">
            {/* STEP 1: SERVICE */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="font-serif-display text-xl text-[#1C1C1C]">What would you like to address?</h4>
                  <p className="text-xs text-[#5C5852] mt-1">
                    First visit? We recommend our comprehensive 60-minute consultation.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {BOOKING_OPTIONS.services.map((srv) => {
                    const isSelected = bookingData.service === srv.name;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setBookingData(prev => ({ ...prev, service: srv.name, servicePrice: srv.price }))}
                        className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#F4ECF1] border-[#6B3A5D] shadow-sm'
                            : 'bg-white border-[#E3DED6] hover:border-[#6B3A5D]/50 hover:bg-[#F2EFEA]/40'
                        }`}
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-[#1C1C1C] flex items-center gap-2">
                            {srv.name}
                            {srv.id === 'consult' && (
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#6B3A5D] text-white">
                                Popular
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-[#5C5852]">Duration: {srv.duration}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-semibold text-[#6B3A5D]">{srv.price}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: PROVIDER */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="font-serif-display text-xl text-[#1C1C1C]">Choose your clinical provider</h4>
                  <p className="text-xs text-[#5C5852] mt-1">
                    Every injector is a licensed medical practitioner under Dr. Delacorte's supervision.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {BOOKING_OPTIONS.providers.map((p) => {
                    const isSelected = bookingData.provider === p.name;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setBookingData(prev => ({ ...prev, provider: p.name }))}
                        className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#F4ECF1] border-[#6B3A5D] shadow-sm'
                            : 'bg-white border-[#E3DED6] hover:border-[#6B3A5D]/50 hover:bg-[#F2EFEA]/40'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium text-[#1C1C1C]">{p.name}</p>
                          <p className="text-xs text-[#5C5852]">{p.title}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-[#6B3A5D] bg-[#6B3A5D] text-white' : 'border-[#E3DED6]'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs text-[#5C5852] hover:text-[#1C1C1C] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div>
                  <h4 className="font-serif-display text-xl text-[#1C1C1C]">Select an unhurried appointment</h4>
                  <p className="text-xs text-[#5C5852] mt-1">
                    We reserve 60 minutes for every new consultation.
                  </p>
                </div>

                {/* Date selection pills */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                    Available Dates
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {BOOKING_OPTIONS.dates.map((d) => {
                      const isSelected = bookingData.date === d.label;
                      return (
                        <button
                          key={d.date}
                          type="button"
                          onClick={() => setBookingData(prev => ({ ...prev, date: d.label }))}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#6B3A5D] text-white border-[#6B3A5D] shadow-sm'
                              : 'bg-white border-[#E3DED6] text-[#1C1C1C] hover:bg-[#F2EFEA]'
                          }`}
                        >
                          <span className="block text-[11px] opacity-80 uppercase">{d.day}</span>
                          <span className="block text-sm font-semibold">{d.date.split(' ')[1]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1C] mb-2 uppercase tracking-wider">
                    Available Times
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BOOKING_OPTIONS.times.map((t) => {
                      const isSelected = bookingData.time === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setBookingData(prev => ({ ...prev, time: t }))}
                          className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#6B3A5D] text-white border-[#6B3A5D] shadow-sm'
                              : 'bg-white border-[#E3DED6] text-[#1C1C1C] hover:bg-[#F2EFEA]'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs text-[#5C5852] hover:text-[#1C1C1C] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: CONTACT & NOTES */}
            {step === 4 && (
              <motion.form
                key="step4"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="font-serif-display text-xl text-[#1C1C1C]">Your Information</h4>
                  <p className="text-xs text-[#5C5852] mt-1">
                    Cormac at our front desk will text your medical history intake link before you arrive.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-[#1C1C1C] mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Clara Henderson"
                      value={bookingData.clientName}
                      onChange={(e) => setBookingData(prev => ({ ...prev, clientName: e.target.value }))}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#E3DED6] rounded-xl focus:outline-none focus:border-[#6B3A5D] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#1C1C1C] mb-1">
                        Mobile Phone (for SMS intake) *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(813) 555-0199"
                        value={bookingData.clientPhone}
                        onChange={(e) => setBookingData(prev => ({ ...prev, clientPhone: e.target.value }))}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#E3DED6] rounded-xl focus:outline-none focus:border-[#6B3A5D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#1C1C1C] mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="clara@example.com"
                        value={bookingData.clientEmail}
                        onChange={(e) => setBookingData(prev => ({ ...prev, clientEmail: e.target.value }))}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#E3DED6] rounded-xl focus:outline-none focus:border-[#6B3A5D] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1C1C1C] mb-1">
                      Anything specific you’d like us to know? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. First time getting injectables, sensitive skin, wedding in two months..."
                      value={bookingData.notes}
                      onChange={(e) => setBookingData(prev => ({ ...prev, notes: e.target.value }))}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#E3DED6] rounded-xl focus:outline-none focus:border-[#6B3A5D] transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Summary Box */}
                <div className="p-3.5 rounded-xl bg-[#F2EFEA] border border-[#E3DED6] text-xs space-y-1 text-[#5C5852]">
                  <p className="flex justify-between">
                    <span>Selected:</span>
                    <strong className="text-[#1C1C1C]">{bookingData.service}</strong>
                  </p>
                  <p className="flex justify-between">
                    <span>Provider:</span>
                    <strong className="text-[#1C1C1C]">{bookingData.provider}</strong>
                  </p>
                  <p className="flex justify-between">
                    <span>Date & Time:</span>
                    <strong className="text-[#1C1C1C]">{bookingData.date} at {bookingData.time}</strong>
                  </p>
                  <p className="flex justify-between pt-1 border-t border-[#E3DED6]">
                    <span>Deposit Due:</span>
                    <strong className="text-[#6B3A5D] font-bold">$50.00 (Credited in full to treatment)</strong>
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs text-[#5C5852] hover:text-[#1C1C1C] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-sm font-medium px-6 py-2.5 rounded-full shadow transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Reserving...</span>
                    ) : (
                      <>
                        <Shield className="w-4 h-4" />
                        <span>Confirm Consultation</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}

            {/* STEP 5: CONFIRMATION SUCCESS */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-5 py-2 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4ECF1] text-[#6B3A5D] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#F4ECF1] text-[#6B3A5D] text-xs font-semibold mb-2">
                    Appointment Reserved
                  </span>
                  <h4 className="font-serif-display text-3xl text-[#1C1C1C]">
                    We’ll see you soon, {bookingData.clientName || 'guest'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C5852] max-w-md mx-auto mt-2 leading-relaxed">
                    Cormac at our Swann Avenue front desk has reserved your 60-minute consultation. We have sent your secure medical health intake link to{' '}
                    <span className="text-[#1C1C1C] font-semibold">{bookingData.clientPhone || 'your phone'}</span>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E3DED6] text-xs text-left space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between py-1 border-b border-[#E3DED6]">
                    <span className="text-[#5C5852]">Service</span>
                    <span className="font-semibold text-[#1C1C1C]">{bookingData.service}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E3DED6]">
                    <span className="text-[#5C5852]">Provider</span>
                    <span className="font-semibold text-[#1C1C1C]">{bookingData.provider}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E3DED6]">
                    <span className="text-[#5C5852]">Date & Time</span>
                    <span className="font-semibold text-[#1C1C1C]">{bookingData.date} · {bookingData.time}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#5C5852]">Location</span>
                    <span className="font-semibold text-[#1C1C1C]">1720 W Swann Ave, Tampa</span>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={resetAndClose}
                    className="w-full max-w-md bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-sm font-medium py-3 rounded-full shadow transition-all cursor-pointer"
                  >
                    Done · Return to Site
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
