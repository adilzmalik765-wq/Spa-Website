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
  const [currentView, setCurrentView] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedTreatment, setPreselectedTreatment] = useState(null);
  
  // Info modal state (privacy, terms, legal)
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

  // Scroll to top on view change
  const navigateTo = (viewId) => {
    setCurrentView(viewId);
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
