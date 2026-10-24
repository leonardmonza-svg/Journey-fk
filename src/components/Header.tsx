import React, { useState } from 'react';
import { PageTab } from '../types';

interface HeaderProps {
  currentTab: PageTab;
  onTabChange: (tab: PageTab) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'peta-jalur-fk', label: 'Peta Jalur FK' },
    { id: 'perjalanan-3-tahun', label: 'Perjalanan 3 Tahun' },
    { id: 'alumni-dan-bukti', label: 'Alumni & Bukti' },
    { id: 'untuk-orang-tua', label: 'Untuk Orang Tua' },
    { id: 'biaya-dan-program', label: 'Biaya & Program' },
  ];

  const handleNavClick = (tab: PageTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(99,14,212,0.06)] border-b border-surface-container-high/40">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <button
          onClick={() => handleNavClick('beranda')}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
        >
          <img
            alt="Lavender FK Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1UK9p-4RJkGZR2acpTCpGxgxPnLRZPnv_qlVESHJ9BomM8AZLl6KSuC22Fd1ZeNPB6ohQ5RmGZAEGpRkmOgQ09bzavt4_FDgEhLbfOW-OSuJfGuQbIq5sL3tuAmXInPq0dEyi6wWYhg_ihbMIbGOMtaSuDPfJm3fVslNcvn2KOlTyfEzZUQqE6dFY6aSzS7IFd31aLki-RfpN386mg1vxlIpCin2kljNzRB2eNRtikJUv4ySHwOjyp-Ug"
          />
          <div className="flex flex-col">
            <span className="text-headline-sm text-on-surface leading-tight tracking-tight font-bold">
              Lavender FK
            </span>
            <span className="text-label-md text-primary font-semibold">
              Pendamping PTN & FK
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-3 2xl:gap-4">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all text-body-md whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-primary font-semibold bg-surface-container-low rounded-full px-3.5 py-1.5 shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface py-1.5 px-2.5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Doctor Mentor Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenConsultation('Konsultasi Cepat via WhatsApp')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary text-label-lg font-bold shadow-[0_4px_16px_rgba(99,14,212,0.25)] hover:bg-primary-container hover:shadow-primary/35 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-pulse"></span>
            <span>Konsultasi WhatsApp</span>
          </button>

          <button
            onClick={() => onOpenConsultation('Sesi dengan Dr. Ratna (Mentor Medis)')}
            className="flex items-center gap-2.5 pl-2 py-1 pr-1.5 rounded-full bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer border border-primary-fixed/40"
            title="Sesi Tanya Dokter Mentor"
          >
            <div className="flex flex-col text-right hidden md:block pl-2">
              <span className="text-label-md text-on-surface font-bold leading-tight">
                Dr. Ratna
              </span>
              <span className="text-label-md text-outline leading-tight">
                Mentor Medis
              </span>
            </div>
            <img
              alt="Dr. Ratna"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-fixed"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWEbBC6Aw4WxzH2pDx4NmzRVR2jIRwJdfLT0HILTU9ZPGSvQp1d5J9AA5kLCeNsWVGpN8zTP7IT8G6Ep0WcyBGmMQa61-ReqCIRP0yiSl3H_qKmOKcfIHPu1-IsZ6yrbnMZngurGyZISoawdLPVgI1mBU0tHkKYshCVtrgkMh-cULzYSZ9Sq9NvlubxZZNK3W_TQ7TcA38eWuSiooHgPP5sU3lmz_BfXEgXGk6wTBCkrPQu2uls3s"
            />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-t border-surface-container-high px-6 py-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-2xl font-semibold text-body-md transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-lg">
                    chevron_right
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-surface-container-high flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('Konsultasi WhatsApp Mobile');
              }}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary text-label-lg font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              <span>Hubungi Dokter Mentor via WA</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
