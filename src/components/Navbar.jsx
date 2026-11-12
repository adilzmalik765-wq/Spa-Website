import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Menu, X, Sparkles, MapPin } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'concerns', label: 'Concerns' },
    { id: 'consultation', label: 'Consultation' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'team', label: 'Team' },
    { id: 'journal', label: 'Journal' },
  ];

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F9F8F6]/90 backdrop-blur-md border-b border-[#E3DED6] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="group flex flex-col items-start text-left cursor-pointer focus:outline-none"
        >
          <span className="font-serif-display text-2xl sm:text-3xl tracking-tight text-[#1C1C1C] group-hover:text-[#6B3A5D] transition-colors">
            Sorrel
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#5C5852] font-medium -mt-1 hidden sm:block">
            Aesthetics · Tampa
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-2 text-sm text-[#5C5852]">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full transition-colors font-medium text-[13.5px] cursor-pointer ${
                  isActive ? 'text-[#1C1C1C]' : 'hover:text-[#1C1C1C]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-[#F2EFEA] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="tel:8135550153"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#5C5852] hover:text-[#1C1C1C] transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#6B3A5D]" />
            <span>(813) 555-0153</span>
          </a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#6B3A5D] hover:bg-[#552D4A] text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a consult</span>
          </motion.button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 -mr-1 rounded-lg text-[#1C1C1C] hover:text-[#6B3A5D] hover:bg-[#F2EFEA] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-[#E3DED6] bg-[#F9F8F6] px-5 py-5 overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-2 gap-2 text-sm pb-4">
              {navItems.map((item, index) => {
                const isActive = currentView === item.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-2.5 px-3.5 rounded-xl font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#6B3A5D] text-white'
                        : 'text-[#1C1C1C] hover:bg-[#F2EFEA]'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#E3DED6] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#5C5852]">
              <a href="tel:8135550153" className="flex items-center gap-1.5 hover:text-[#1C1C1C]">
                <Phone className="w-3.5 h-3.5 text-[#6B3A5D]" />
                <span>(813) 555-0153</span>
              </a>
              <span className="flex items-center gap-1 text-[#5C5852]">
                <MapPin className="w-3.5 h-3.5 text-[#6B3A5D]" />
                1720 W Swann Ave, Tampa, FL
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
