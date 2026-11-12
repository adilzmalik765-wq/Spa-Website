import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, BookOpen } from 'lucide-react';

export default function ArticleModal({ isOpen, onClose, article, onBookConsult }) {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#1C1C1C]/60 backdrop-blur-sm -z-10"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-[#F9F8F6] border border-[#E3DED6] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 my-auto"
      >
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-[#E3DED6]">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs text-[#5C5852]">
              <span className="text-[11px] uppercase tracking-widest text-[#6B3A5D] font-bold">
                {article.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              {article.author && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </span>
                </>
              )}
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl text-[#1C1C1C] leading-tight">
              {article.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close article"
            className="w-9 h-9 rounded-full border border-[#E3DED6] flex items-center justify-center text-[#5C5852] hover:text-[#1C1C1C] hover:bg-[#F2EFEA] shrink-0 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none text-sm sm:text-base text-[#5C5852] leading-relaxed space-y-4 font-sans">
          {article.body.split('\n\n').map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-8 pt-6 border-t border-[#E3DED6] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F2EFEA]/50 p-4 rounded-2xl">
          <div className="text-xs text-[#5C5852]">
            <p className="font-semibold text-[#1C1C1C]">Have questions regarding your facial anatomy?</p>
            <p>Schedule a 60-minute unhurried medical consultation.</p>
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onBookConsult) onBookConsult();
            }}
            className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full shadow-sm transition-all whitespace-nowrap cursor-pointer self-start sm:self-auto"
          >
            Book a Consult ($50)
          </button>
        </div>
      </motion.div>
    </div>
  );
}
