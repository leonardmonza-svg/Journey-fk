import React from 'react';
import { Alumni } from '../types';

interface AlumniDetailModalProps {
  alumni: Alumni | null;
  onClose: () => void;
  onConsult: (campus: string) => void;
}

export const AlumniDetailModal: React.FC<AlumniDetailModalProps> = ({
  alumni,
  onClose,
  onConsult,
}) => {
  if (!alumni) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-surface-container-lowest p-6 sm:p-8 shadow-2xl border border-primary-fixed/60 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors"
          aria-label="Tutup"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="flex items-start gap-4 mb-6">
          <img
            src={alumni.avatarUrl}
            alt={alumni.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-md ring-2 ring-primary-fixed"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-label-md px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold">
                {alumni.pathwayLabel}
              </span>
              <span className="text-label-md px-2.5 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-semibold">
                Lulusan {alumni.year}
              </span>
            </div>
            <h3 className="text-headline-sm text-on-surface font-bold leading-tight">
              {alumni.name}
            </h3>
            <p className="text-body-sm text-outline">{alumni.school}</p>
            <div className="flex items-center gap-1.5 text-primary text-label-md font-bold mt-1">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>{alumni.campusName}</span>
            </div>
          </div>
        </div>

        {/* Verification banner */}
        <div className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container-highest/60 flex items-center justify-between text-body-sm mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">fact_check</span>
            <span className="text-on-surface font-mono text-xs">{alumni.details?.nimVerified || 'Status: Mahasiswa Aktif'}</span>
          </div>
          <span className="text-label-md text-primary font-bold">Resmi Terverifikasi</span>
        </div>

        {/* Quote Block */}
        <div className="p-4 rounded-2xl bg-secondary-container/20 mb-6 italic text-on-surface-variant text-body-md leading-relaxed border-l-0">
          {alumni.quote}
        </div>

        {/* Breakdown story */}
        <div className="space-y-4 text-body-md text-on-surface mb-6">
          <h4 className="text-label-lg font-bold text-on-surface uppercase tracking-wider">
            Rekam Jejak Pendampingan
          </h4>
          <p className="text-body-sm text-on-surface-variant leading-relaxed">
            {alumni.details?.storyFull || alumni.quote}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-surface-container-low">
              <span className="text-body-sm text-outline block">{alumni.metrics.label1}</span>
              <span className="text-headline-sm text-primary font-bold">{alumni.metrics.val1}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low">
              <span className="text-body-sm text-outline block">{alumni.metrics.label2}</span>
              <span className="text-headline-sm text-on-surface font-bold">{alumni.metrics.val2}</span>
            </div>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-surface-container-highest">
          <button
            onClick={() => {
              onClose();
              onConsult(alumni.campusName);
            }}
            className="flex-1 py-3 px-5 rounded-xl bg-primary text-on-primary text-label-lg font-bold shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">medical_services</span>
            <span>Konsultasi Peluang {alumni.campus}</span>
          </button>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl bg-surface-container-low text-on-surface-variant text-label-lg font-semibold hover:bg-surface-container transition-all"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
