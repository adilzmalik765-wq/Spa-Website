import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { JOURNAL_POSTS } from '../data/spaData';

export default function JournalView({ onOpenArticle, onOpenBooking }) {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#6B3A5D] font-bold">
          Sorrel Journal & Clinical Essays
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl text-[#1C1C1C]">
          Notes from Swann Avenue.
        </h1>
        <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed max-w-xl">
          Honest discussions on aesthetic medicine, dermal anatomy, and why restraint creates the most enduring outcomes.
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {JOURNAL_POSTS.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E3DED6] space-y-4 shadow-sm hover:border-[#6B3A5D] transition-all group"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#5C5852]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B3A5D]">
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              {post.author && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                </>
              )}
            </div>

            <div className="space-y-2">
              <h2
                onClick={() => onOpenArticle(post)}
                className="font-serif-display text-2xl sm:text-3xl text-[#1C1C1C] group-hover:text-[#6B3A5D] transition-colors cursor-pointer"
              >
                {post.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onOpenArticle(post)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B3A5D] hover:text-[#552D4A] cursor-pointer"
              >
                <span>Read full reflection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bottom Newsletter / Consultation CTA */}
      <div className="bg-[#F2EFEA]/60 border border-[#E3DED6] rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4">
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1C1C1C]">
          Have questions about your skin?
        </h3>
        <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
          The best conversations happen in person over good light on Swann Avenue. Reserve your dedicated consultation chair.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onOpenBooking}
            className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full shadow transition-all cursor-pointer"
          >
            Schedule a 60-Minute Consultation ($50)
          </button>
        </div>
      </div>
    </div>
  );
}
