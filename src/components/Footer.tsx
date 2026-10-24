import React from 'react';
import { PageTab } from '../types';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="relative z-10 w-full bg-surface-container-low/80 backdrop-blur-md mt-16 pt-16 pb-12 shadow-[0_-1px_16px_rgba(99,14,212,0.03)] border-t border-surface-container-high/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          {/* Col 1: Brand & Credibility */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Lavender FK Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UK9p-4RJkGZR2acpTCpGxgxPnLRZPnv_qlVESHJ9BomM8AZLl6KSuC22Fd1ZeNPB6ohQ5RmGZAEGpRkmOgQ09bzavt4_FDgEhLbfOW-OSuJfGuQbIq5sL3tuAmXInPq0dEyi6wWYhg_ihbMIbGOMtaSuDPfJm3fVslNcvn2KOlTyfEzZUQqE6dFY6aSzS7IFd31aLki-RfpN386mg1vxlIpCin2kljNzRB2eNRtikJUv4ySHwOjyp-Ug"
              />
              <span className="text-headline-sm text-on-surface font-bold">Lavender FK</span>
            </div>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Lembaga pendampingan intensif & mentorship spesialis kelulusan Fakultas Kedokteran dan PTN Unggulan di Indonesia.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-label-md px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface font-semibold">
                Akreditasi A
              </span>
              <span className="text-label-md px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-semibold">
                Official PTN Mentor
              </span>
            </div>
          </div>

          {/* Col 2: Peta Jalur */}
          <div className="space-y-3">
            <h4 className="text-headline-sm text-on-surface font-bold">Peta Jalur</h4>
            <ul className="space-y-2 text-body-sm text-on-surface-variant">
              <li>
                <button
                  onClick={() => onNavigate('peta-jalur-fk')}
                  className="hover:text-primary transition-colors text-left"
                >
                  SNBP Kedokteran
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('peta-jalur-fk')}
                  className="hover:text-primary transition-colors text-left"
                >
                  SNBT UTBK FK Target 700+
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('peta-jalur-fk')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Ujian Mandiri Prestasi (SIMAK UI / UTUL UGM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('peta-jalur-fk')}
                  className="hover:text-primary transition-colors text-left"
                >
                  IUP Medicine (International Class)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Program & Fasilitas */}
          <div className="space-y-3">
            <h4 className="text-headline-sm text-on-surface font-bold">Program & Fasilitas</h4>
            <ul className="space-y-2 text-body-sm text-on-surface-variant">
              <li>
                <button
                  onClick={() => onNavigate('perjalanan-3-tahun')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Roadmap 3 Tahun FK
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('biaya-dan-program')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Supercamp Lavender FK
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('untuk-orang-tua')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Konseling Prospek Karir Dokter
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('alumni-dan-bukti')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Audit Riwayat Nilai & Portofolio
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Pusat Informasi & Legalitas */}
          <div className="space-y-3">
            <h4 className="text-headline-sm text-on-surface font-bold">Pusat Informasi & Legalitas</h4>
            <p className="text-body-sm text-on-surface-variant">
              Kantor Akademik Mentorship: Jl. Salemba Raya No. 4, Jakarta Pusat
            </p>
            <p className="text-body-sm text-on-surface-variant">
              Konsultasi Orang Tua: <span className="font-semibold text-primary">0812-8899-7700</span>
            </p>
            <p className="text-body-sm text-outline">
              Izin Operasional Lembaga: SK Kemenkumham No. AHU-0014221.AH.01.04
            </p>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-surface-container-highest flex flex-col md:flex-row items-center justify-between gap-4 text-body-sm text-outline">
          <p>© 2025 Bimbel Lavender - Pendamping Masa Depan Fakultas Kedokteran. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenConsultation('Pertanyaan Kebijakan Privasi')}
              className="hover:text-primary transition-colors"
            >
              Kebijakan Privasi
            </button>
            <button
              onClick={() => onOpenConsultation('Pertanyaan Syarat & Ketentuan')}
              className="hover:text-primary transition-colors"
            >
              Syarat & Ketentuan
            </button>
            <button
              onClick={() => onNavigate('alumni-dan-bukti')}
              className="hover:text-primary transition-colors"
            >
              Verifikasi Kelulusan
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
