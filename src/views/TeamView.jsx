import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Heart, Stethoscope, CheckCircle2 } from 'lucide-react';
import { TEAM } from '../data/spaData';

export default function TeamView({ onOpenBooking }) {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
          Medical & Clinical Team
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl text-[#1C1C1C]">
          Same injector, every visit.
        </h1>
        <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
          At Sorrel, you will never arrive to discover your appointment has been handed off to an apprentice or rotated provider. You work one-on-one with your chosen medical injector over months and years, developing a personalized understanding of how your face naturally matures.
        </p>
      </div>

      {/* Provider Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TEAM.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="rounded-3xl bg-white border border-[#E3DED6] overflow-hidden grid grid-cols-1 sm:grid-cols-12 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Portrait Image */}
            <div className="sm:col-span-5 aspect-[4/5] sm:aspect-auto bg-[#F2EFEA] overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
              />
            </div>

            {/* Profile Content */}
            <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B3A5D]">
                  {member.role}
                </span>

                <h2 className="font-serif-display text-2xl text-[#1C1C1C]">
                  {member.name}
                </h2>

                <p className="text-xs font-semibold text-[#1C1C1C] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#6B3A5D]" />
                  <span>{member.cred}</span>
                </p>

                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                  {member.bio}
                </p>

                {member.quote && (
                  <blockquote className="pt-2 border-t border-[#F2EFEA] text-xs text-[#5C5852] italic">
                    "{member.quote}"
                  </blockquote>
                )}
              </div>

              <div className="pt-4 border-t border-[#F2EFEA] flex items-center justify-between text-xs">
                <span className="text-[#5C5852] font-medium">{member.experience}</span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-[#6B3A5D] font-semibold hover:text-[#552D4A] cursor-pointer"
                >
                  Book with {member.name.split(' ')[0]} →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clinical Director Standards Card */}
      <div className="bg-[#F2EFEA]/60 border border-[#E3DED6] rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#6B3A5D] uppercase tracking-widest">
            <Stethoscope className="w-4 h-4" />
            Medical Direction & Standards
          </div>
          <h3 className="font-serif-display text-3xl text-[#1C1C1C]">
            How Dr. Philippa Delacorte protects your care.
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
            Florida law requires med spas to have medical oversight; Sorrel treats it as the central pillar of patient safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white border border-[#E3DED6] space-y-2">
            <h4 className="font-semibold text-sm text-[#1C1C1C]">Pre-Treatment Chart Review</h4>
            <p className="text-xs text-[#5C5852] leading-relaxed">
              Dr. Delacorte personally reviews complex medical histories, contraindications, and medications before any procedure.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E3DED6] space-y-2">
            <h4 className="font-semibold text-sm text-[#1C1C1C]">Emergency-Ready Reversals</h4>
            <p className="text-xs text-[#5C5852] leading-relaxed">
              We stock full hospital-grade hyaluronidase reversal kits and maintain standing vascular occlusion emergency protocols.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E3DED6] space-y-2">
            <h4 className="font-semibold text-sm text-[#1C1C1C]">FDA-Direct Sourcing</h4>
            <p className="text-xs text-[#5C5852] leading-relaxed">
              All neurotoxins and hyaluronic gels are procured exclusively through authentic manufacturer channels (Allergan, Galderma, Merz).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
