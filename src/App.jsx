import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import InfoModal from './components/InfoModal';
import ArticleModal from './components/ArticleModal';

import HomeView from './views/HomeView';
import ConcernsView from './views/ConcernsView';
import ConsultationView from './views/ConsultationView';
import TreatmentsView from './views/TreatmentsView';
import PricingView from './views/PricingView';
import TeamView from './views/TeamView';
import JournalView from './views/JournalView';

export default function App() {
  // Parse initial view from URL query (?view=...) or hash (#...)
  const getInitialView = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const queryView = params.get('view');
      if (queryView) return queryView.toLowerCase();

      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash) return hash;
    }
    return 'home';
  };

  const [currentView, setCurrentView] = useState(getInitialView);
  const [isBookingOpen, setIsBookingOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('booking') === 'true' || params.get('view') === 'booking';
    }
    return false;
  });
  const [preselectedTreatment, setPreselectedTreatment] = useState(null);
  
  // Info modal state
  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    title: '',
    content: ''
  });

  // Journal article modal
  const [articleModal, setArticleModal] = useState({
    isOpen: false,
    article: null
  });

  // Listen to popstate / hashchange
  useEffect(() => {
    const handleUrlChange = () => {
      const newView = getInitialView();
      setCurrentView(newView);
      if (newView === 'booking') {
        setIsBookingOpen(true);
      }
    };
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Navigate handler that updates URL hash
  const navigateTo = (viewId) => {
    setCurrentView(viewId);
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${viewId}`);
    } else {
      window.location.hash = `#${viewId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceCode = null) => {
    setPreselectedTreatment(serviceCode);
    setIsBookingOpen(true);
  };

  const handleOpenInfoModal = (title, content) => {
    setInfoModal({
      isOpen: true,
      title,
      content
    });
  };

  const handleOpenArticle = (article) => {
    setArticleModal({
      isOpen: true,
      article
    });
  };

  // If view is 'all', render ALL views sequentially for Figma design capture
  if (currentView === 'all') {
    return (
      <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans selection:bg-[#6B3A5D] selection:text-white space-y-24 pb-24">
        {/* Figma Artboard Navigator Header */}
        <div className="sticky top-0 z-50 bg-[#1C1C1C] text-white px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-lg text-xs">
          <div className="flex items-center gap-2">
            <span className="font-serif-display text-lg tracking-tight font-medium">Sorrel Aesthetics</span>
            <span className="px-2 py-0.5 rounded bg-[#6B3A5D] text-white font-mono text-[10px] uppercase tracking-wider font-semibold">
              Figma Complete Design Board
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-stone-300">
            <a href="#screen-home" className="hover:text-white transition-colors">1. Home</a>
            <span>·</span>
            <a href="#screen-concerns" className="hover:text-white transition-colors">2. Concerns</a>
            <span>·</span>
            <a href="#screen-consultation" className="hover:text-white transition-colors">3. Consultation</a>
            <span>·</span>
            <a href="#screen-treatments" className="hover:text-white transition-colors">4. Treatments</a>
            <span>·</span>
            <a href="#screen-pricing" className="hover:text-white transition-colors">5. Pricing</a>
            <span>·</span>
            <a href="#screen-team" className="hover:text-white transition-colors">6. Team</a>
            <span>·</span>
            <a href="#screen-journal" className="hover:text-white transition-colors">7. Journal</a>
            <span>·</span>
            <button onClick={() => navigateTo('home')} className="bg-[#6B3A5D] hover:bg-[#552D4A] text-white px-3 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer">
              Exit Board View
            </button>
          </div>
        </div>

        {/* SCREEN 1: HOME */}
        <div id="screen-home" className="space-y-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1C1C1C] text-white text-xs font-mono font-medium">
              Frame 01 · Home & Landing Screen
            </div>
          </div>
          <Navbar currentView="home" setCurrentView={navigateTo} onOpenBooking={() => handleOpenBooking()} />
          <HomeView onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} onSelectTreatment={(code) => handleOpenBooking(code)} />
          <Footer onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} onOpenInfoModal={handleOpenInfoModal} />
        </div>

        <div className="border-t-4 border-dashed border-[#E3DED6] my-12" />

        {/* SCREEN 2: CONCERNS */}
        <div id="screen-concerns" className="space-y-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1C1C1C] text-white text-xs font-mono font-medium">
              Frame 02 · Aesthetic Concerns & Targets Screen
            </div>
          </div>
          <Navbar currentView="concerns" setCurrentView={navigateTo} onOpenBooking={() => handleOpenBooking()} />
          <ConcernsView onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} onSelectTreatment={(code) => handleOpenBooking(code)} />
          <Footer onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} onOpenInfoModal={handleOpenInfoModal} />
        </div>

        <div className="border-t-4 border-dashed border-[#E3DED6] my-12" />

        {/* SCREEN 3: CONSULTATION */}
        <div id="screen-consultation" className="space-y-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1C1C1C] text-white text-xs font-mono font-medium">
              Frame 03 · 60-Minute Consultation Protocol Screen
            </div>
          </div>
          <Navbar currentView="consultation" setCurrentView={navigateTo} onOpenBooking={() => handleOpenBooking()} />
          <ConsultationView onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} />
          <Footer onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} onOpenInfoModal={handleOpenInfoModal} />
        </div>

        <div className="border-t-4 border-dashed border-[#E3DED6] my-12" />

        {/* SCREEN 4: TREATMENTS */}
        <div id="screen-treatments" className="space-y-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1C1C1C] text-white text-xs font-mono font-medium">
              Frame 04 · Complete Treatment Portfolio Screen
            </div>
          </div>
          <Navbar currentView="treatments" setCurrentView={navigateTo} onOpenBooking={() => handleOpenBooking()} />
          <TreatmentsView onOpenBooking={() => handleOpenBooking()} onSelectTreatment={(code) => handleOpenBooking(code)} />
          <Footer onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} onOpenInfoModal={handleOpenInfoModal} />
        </div>

        <div className="border-t-4 border-dashed border-[#E3DED6] my-12" />

        {/* SCREEN 5: PRICING */}
        <div id="screen-pricing" className="space-y-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1C1C1C] text-white text-xs font-mono font-medium">
              Frame 05 · Transparent Pricing Schedule & Cost Estimator Screen
            </div>
          </div>
          <Navbar currentView="pricing" setCurrentView={navigateTo} onOpenBooking={() => handleOpenBooking()} />
          <PricingView onOpenBooking={() => handleOpenBooking()} />
          <Footer onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} onOpenInfoModal={handleOpenInfoModal} />
        </div>

        <div className="border-t-4 border-dashed border-[#E3DED6] my-12" />

        {/* SCREEN 6: TEAM */}
        <div id="screen-team" className="space-y-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1C1C1C] text-white text-xs font-mono font-medium">
              Frame 06 · Clinical Medical Team & Physician Oversight Screen
            </div>
          </div>
          <Navbar currentView="team" setCurrentView={navigateTo} onOpenBooking={() => handleOpenBooking()} />
          <TeamView onOpenBooking={() => handleOpenBooking()} />
          <Footer onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} onOpenInfoModal={handleOpenInfoModal} />
        </div>

        <div className="border-t-4 border-dashed border-[#E3DED6] my-12" />

        {/* SCREEN 7: JOURNAL */}
        <div id="screen-journal" className="space-y-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1C1C1C] text-white text-xs font-mono font-medium">
              Frame 07 · Sorrel Journal & Editorial Reflections Screen
            </div>
          </div>
          <Navbar currentView="journal" setCurrentView={navigateTo} onOpenBooking={() => handleOpenBooking()} />
          <JournalView onOpenArticle={handleOpenArticle} onOpenBooking={() => handleOpenBooking()} />
          <Footer onNavigate={navigateTo} onOpenBooking={() => handleOpenBooking()} onOpenInfoModal={handleOpenInfoModal} />
        </div>
      </div>
    );
  }

  // Standard interactive view mode
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] flex flex-col font-sans selection:bg-[#6B3A5D] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main View Router with Framer Motion Page Transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentView === 'home' && (
              <HomeView
                onNavigate={navigateTo}
                onOpenBooking={() => handleOpenBooking()}
                onSelectTreatment={(code) => handleOpenBooking(code)}
              />
            )}

            {currentView === 'concerns' && (
              <ConcernsView
                onNavigate={navigateTo}
                onOpenBooking={() => handleOpenBooking()}
                onSelectTreatment={(code) => handleOpenBooking(code)}
              />
            )}

            {currentView === 'consultation' && (
              <ConsultationView
                onNavigate={navigateTo}
                onOpenBooking={() => handleOpenBooking()}
              />
            )}

            {currentView === 'treatments' && (
              <TreatmentsView
                onOpenBooking={() => handleOpenBooking()}
                onSelectTreatment={(code) => handleOpenBooking(code)}
              />
            )}

            {currentView === 'pricing' && (
              <PricingView
                onOpenBooking={() => handleOpenBooking()}
              />
            )}

            {currentView === 'team' && (
              <TeamView
                onOpenBooking={() => handleOpenBooking()}
              />
            )}

            {currentView === 'journal' && (
              <JournalView
                onOpenArticle={handleOpenArticle}
                onOpenBooking={() => handleOpenBooking()}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
        onOpenInfoModal={handleOpenInfoModal}
      />

      {/* Booking Wizard Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            preselectedServiceId={preselectedTreatment}
          />
        )}
      </AnimatePresence>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {articleModal.isOpen && (
          <ArticleModal
            isOpen={articleModal.isOpen}
            onClose={() => setArticleModal({ isOpen: false, article: null })}
            article={articleModal.article}
            onBookConsult={() => handleOpenBooking()}
          />
        )}
      </AnimatePresence>

      {/* Legal & Information Modal */}
      <AnimatePresence>
        {infoModal.isOpen && (
          <InfoModal
            isOpen={infoModal.isOpen}
            onClose={() => setInfoModal({ isOpen: false, title: '', content: '' })}
            title={infoModal.title}
            content={infoModal.content}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
