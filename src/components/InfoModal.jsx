import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';

export default function InfoModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#1C1C1C]/50 backdrop-blur-sm -z-10"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-[#F9F8F6] border border-[#E3DED6] rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 my-auto"
      >
        <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-[#E3DED6]">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#6B3A5D] font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Sorrel Aesthetics
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1C1C1C]">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full border border-[#E3DED6] flex items-center justify-center text-[#5C5852] hover:text-[#1C1C1C] hover:bg-[#F2EFEA] shrink-0 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="text-sm text-[#5C5852] leading-relaxed space-y-3">
          {content && content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E3DED6] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#1C1C1C] hover:bg-[#6B3A5D] text-white text-xs font-medium px-5 py-2 rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
