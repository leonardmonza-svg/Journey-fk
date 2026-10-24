import React, { useState } from 'react';

interface FloatingWhatsAppProps {
  onOpenConsultation: (topic?: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenConsultation }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpenWA = () => {
    onOpenConsultation('Konsultasi Cepat via WhatsApp Widget');
  };

  return (
    <aside className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Pop-up bubble teaser on hover / load */}
      {showTooltip && (
        <div className="mb-2 p-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl shadow-xl border border-primary-fixed/40 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-label-md text-label-md font-bold text-on-surface">Dr. Ratna & Tim Medis</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Ada pertanyaan seputar seleksi atau peluang rapor anak Anda ke FK? Kami siap berdiskusi santai.
          </p>
        </div>
      )}

      {/* Main floating pill */}
      <button
        onClick={handleOpenWA}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_12px_32px_rgba(99,14,212,0.18)] hover:shadow-[0_16px_40px_rgba(99,14,212,0.28)] transition-all hover:-translate-y-1 border border-primary-fixed/50 cursor-pointer text-left"
        aria-label="Tanya Mentor FK via WhatsApp"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary"></span>
        </span>
        <span className="font-label-lg text-label-lg text-on-surface font-bold">
          Tanya Mentor FK via WA
        </span>
        <span className="font-label-md text-label-md bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full font-semibold shadow-xs">
          Online
        </span>
      </button>
    </aside>
  );
};
