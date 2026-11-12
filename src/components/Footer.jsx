import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onNavigate, onOpenBooking, onOpenInfoModal }) {
  return (
    <footer className="border-t border-[#E3DED6] bg-[#F9F8F6] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E3DED6]">
          {/* Brand & Address */}
          <div className="md:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-left font-serif-display text-3xl text-[#1C1C1C] hover:text-[#6B3A5D] transition-colors cursor-pointer"
            >
              Sorrel
            </button>
            <p className="text-sm text-[#5C5852] max-w-sm">
              An unhurried medical aesthetic practice in Tampa’s historic Hyde Park neighborhood. Look rested, not done.
            </p>
            <div className="text-sm text-[#5C5852] space-y-2 pt-1">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#6B3A5D] shrink-0 mt-0.5" />
                <span>1720 W Swann Ave, Tampa, FL 33606</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6B3A5D] shrink-0" />
                <a href="tel:8135550153" className="hover:text-[#1C1C1C] underline decoration-[#E3DED6] underline-offset-4">
                  (813) 555-0153
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6B3A5D] shrink-0" />
                <a href="mailto:hello@sorrelaesthetics.com" className="hover:text-[#1C1C1C] underline decoration-[#E3DED6] underline-offset-4">
                  hello@sorrelaesthetics.com
                </a>
              </p>
            </div>
          </div>

          {/* Clinical Hours */}
          <div className="md:col-span-3 text-sm text-[#5C5852] space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#6B3A5D]" />
              Clinic Hours
            </p>
            <div className="space-y-1.5">
              <p className="flex justify-between max-w-xs"><span>Mon–Thu</span><span className="text-[#1C1C1C] font-medium">9 AM – 7 PM</span></p>
              <p className="flex justify-between max-w-xs"><span>Friday</span><span className="text-[#1C1C1C] font-medium">9 AM – 5 PM</span></p>
              <p className="flex justify-between max-w-xs"><span>Saturday</span><span className="text-[#1C1C1C] font-medium">9 AM – 3 PM</span></p>
              <p className="flex justify-between max-w-xs text-stone-400"><span>Sunday</span><span>Closed</span></p>
            </div>
            <p className="text-xs text-[#5C5852] pt-2 italic">
              Evening appointments available by prior reservation.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 text-sm space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold mb-3">Explore</p>
            <ul className="space-y-2 text-[#5C5852]">
              <li>
                <button type="button" onClick={() => onNavigate('concerns')} className="hover:text-[#1C1C1C] transition-colors cursor-pointer">
                  Aesthetic Concerns
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('consultation')} className="hover:text-[#1C1C1C] transition-colors cursor-pointer">
                  60-Min Consultation
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('treatments')} className="hover:text-[#1C1C1C] transition-colors cursor-pointer">
                  Full Treatment Menu
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('pricing')} className="hover:text-[#1C1C1C] transition-colors cursor-pointer">
                  Pricing & Memberships
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('team')} className="hover:text-[#1C1C1C] transition-colors cursor-pointer">
                  Medical & Clinical Team
                </button>
              </li>
            </ul>
          </div>

          {/* Clinic & Actions */}
          <div className="md:col-span-2 text-sm space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#1C1C1C] font-semibold mb-3">Appointments</p>
            <ul className="space-y-2.5 text-[#5C5852]">
              <li>
                <button type="button" onClick={() => onNavigate('journal')} className="hover:text-[#1C1C1C] transition-colors cursor-pointer">
                  Sorrel Journal
                </button>
              </li>
              <li>
                <a href="tel:8135550153" className="hover:text-[#1C1C1C] transition-colors block">
                  Call Front Desk
                </a>
              </li>
              <li className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={onOpenBooking}
                  className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-sm transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Book Consult ($50)
                </motion.button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="pt-8 space-y-5">
          <p className="text-xs text-[#5C5852] leading-relaxed max-w-4xl">
            Treatments are performed exclusively by licensed medical providers under the direct supervision of our medical director, Dr. Philippa Delacorte, MD (Board-Certified Dermatologist). Results vary from person to person depending on individual physiology and anatomy. If you experience unexpected severe swelling, visual disturbances, or sudden pain after any injectable treatment, seek immediate medical attention or call 911.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#5C5852] pt-2">
            <p>© 2026 Sorrel Aesthetics LLC · 1720 W Swann Ave, Tampa, Florida</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => onOpenInfoModal('Privacy Policy', 'Sorrel Aesthetics respects your privacy. Health history, medical notes, and contact details submitted during consultation booking are used solely to coordinate your medical aesthetic care and are never sold, shared, or publicized.')}
                className="hover:text-[#1C1C1C] transition-colors cursor-pointer"
              >
                Privacy
              </button>
              <button
                type="button"
                onClick={() => onOpenInfoModal('Terms of Service', 'A $50 consultation fee reserves your dedicated 60-minute appointment and is credited in full toward any treatment booked. We kindly request at least 24 hours notice for rescheduling or cancellations.')}
                className="hover:text-[#1C1C1C] transition-colors cursor-pointer"
              >
                Terms
              </button>
              <button
                type="button"
                onClick={() => onOpenInfoModal('Legal & Medical Disclaimer', 'All medical aesthetic procedures at Sorrel Aesthetics are performed by licensed providers under the oversight of Dr. Philippa Delacorte, MD. Cosmetic treatments are elective and not covered by commercial health insurance.')}
                className="hover:text-[#1C1C1C] transition-colors cursor-pointer"
              >
                Legal & Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
