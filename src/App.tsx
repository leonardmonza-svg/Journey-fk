/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageTab, Alumni } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';
import { AlumniDetailModal } from './components/AlumniDetailModal';

// Views
import { BerandaView } from './views/BerandaView';
import { PetaJalurView } from './views/PetaJalurView';
import { Perjalanan3TahunView } from './views/Perjalanan3TahunView';
import { AlumniDanBuktiView } from './views/AlumniDanBuktiView';
import { UntukOrangTuaView } from './views/UntukOrangTuaView';
import { BiayaDanProgramView } from './views/BiayaDanProgramView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('beranda');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('Konsultasi Masuk FK');
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);

  // Sync title and smooth scroll on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleOpenConsultation = (topic?: string) => {
    if (topic) {
      setConsultationTopic(topic);
    } else {
      setConsultationTopic('Konsultasi Masuk FK');
    }
    setConsultationModalOpen(true);
  };

  const handleNavigate = (tab: PageTab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container relative min-h-screen flex flex-col">
      {/* Ambient background glow fields */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-96 h-96 rounded-full bg-secondary-container/30 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] rounded-full bg-primary-fixed/40 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-[26rem] h-[26rem] rounded-full bg-tertiary-fixed/30 blur-3xl"></div>
      </div>

      {/* Main Top Header Navigation */}
      <Header
        currentTab={currentTab}
        onTabChange={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content Area */}
      <main className="relative z-10 w-full pt-20 bg-transparent min-h-[calc(100vh-80px)] flex-1">
        {currentTab === 'beranda' && (
          <BerandaView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentTab === 'peta-jalur-fk' && (
          <PetaJalurView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentTab === 'perjalanan-3-tahun' && (
          <Perjalanan3TahunView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentTab === 'alumni-dan-bukti' && (
          <AlumniDanBuktiView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectAlumni={(alumni) => setSelectedAlumni(alumni)}
          />
        )}

        {currentTab === 'untuk-orang-tua' && (
          <UntukOrangTuaView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentTab === 'biaya-dan-program' && (
          <BiayaDanProgramView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultTopic={consultationTopic}
      />

      {/* Alumni Detail Verification Modal */}
      <AlumniDetailModal
        alumni={selectedAlumni}
        onClose={() => setSelectedAlumni(null)}
        onConsult={(campus) => handleOpenConsultation(`Konsultasi Masuk ${campus}`)}
      />
    </div>
  );
}
