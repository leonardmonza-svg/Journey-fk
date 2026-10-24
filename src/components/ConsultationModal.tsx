import React, { useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
  defaultCampus?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'Konsultasi Umum Pendampingan FK',
  defaultCampus = 'FK UI / UGM',
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState<'Orang Tua' | 'Siswa'>('Orang Tua');
  const [grade, setGrade] = useState('Kelas 11 SMA');
  const [targetCampus, setTargetCampus] = useState(defaultCampus);
  const [topic, setTopic] = useState(defaultTopic);
  const [whatsapp, setWhatsapp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Halo Tim Dokter Mentor Lavender FK,\n\nSaya ingin konsultasi mengenai:\n• Topik: ${topic}\n• Nama: ${name} (${role})\n• Jenjang: ${grade}\n• Target Kampus: ${targetCampus}\n• No WA: ${whatsapp}\n\nMohon informasi jadwal sesi audit & konsultasi bersama dokter mentor. Terima kasih.`;

    const encoded = encodeURIComponent(message);
    setTimeout(() => {
      window.open(`https://wa.me/?text=${encoded}`, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-surface-container-lowest p-6 sm:p-8 shadow-2xl border border-primary-fixed/50">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors"
          aria-label="Tutup"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-label-md text-primary font-bold uppercase tracking-wider">
                Konsultasi Bebas Biaya
              </span>
            </div>
            <h3 className="text-headline-sm text-on-surface font-extrabold tracking-tight">
              Hubungkan Diskusi dengan Dokter Mentor
            </h3>
            <p className="text-body-sm text-on-surface-variant mt-1 mb-5">
              Dapatkan arahan objektif seputar rapor, passing grade, atau estimasi biaya tanpa komitmen awal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-label-md text-on-surface font-bold mb-1">
                  Nama Anda & Peran
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Ibu Ratna / Rayhan"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-surface-container-low text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                  />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as 'Orang Tua' | 'Siswa')}
                    className="px-3 py-2.5 rounded-xl bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-medium"
                  >
                    <option value="Orang Tua">Orang Tua</option>
                    <option value="Siswa">Siswa</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-label-md text-on-surface font-bold mb-1">
                    Jenjang Siswa
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Kelas 10 SMA">Kelas 10 SMA</option>
                    <option value="Kelas 11 SMA">Kelas 11 SMA</option>
                    <option value="Kelas 12 SMA">Kelas 12 SMA</option>
                    <option value="Gap Year / Alumni">Gap Year / Alumni</option>
                  </select>
                </div>
                <div>
                  <label className="block text-label-md text-on-surface font-bold mb-1">
                    Target Fakultas
                  </label>
                  <select
                    value={targetCampus}
                    onChange={(e) => setTargetCampus(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="FK UI / UGM">FK UI / UGM</option>
                    <option value="FK UNAIR / UNDIP">FK UNAIR / UNDIP</option>
                    <option value="FK UNPAD / UNS">FK UNPAD / UNS</option>
                    <option value="IUP Medicine (Kelas Internasional)">IUP Medicine (Int'l)</option>
                    <option value="FK Swasta Unggul (Trisakti/YARSI/UPH)">FK Swasta Unggul</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-label-md text-on-surface font-bold mb-1">
                  Fokus Topik Diskusi
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Audit Nilai Rapor & Rasionalisasi SNBP">Audit Nilai Rapor & Rasionalisasi SNBP</option>
                  <option value="Persiapan SNBT UTBK Skor 700+">Persiapan SNBT UTBK Skor 700+</option>
                  <option value="Simulasi Biaya & UKT/IPI FK PTN">Simulasi Biaya & UKT/IPI FK PTN</option>
                  <option value="Kelas Internasional IUP & Simulasi MMI">Kelas Internasional IUP & Simulasi MMI</option>
                  <option value="Program Supercamp Karantina Hotel">Program Supercamp Karantina Hotel</option>
                  <option value="Konseling Karir & Mitigasi Risiko Plan B/C">Konseling Karir & Mitigasi Risiko Plan B/C</option>
                </select>
              </div>

              <div>
                <label className="block text-label-md text-on-surface font-bold mb-1">
                  Nomor WhatsApp Aktif
                </label>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="0812-xxxx-xxxx"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary text-label-lg font-bold shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Buka Percakapan WhatsApp</span>
                </button>
              </div>

              <p className="text-body-sm text-outline text-center pt-1">
                Data keluarga terjaga kerahasiaannya sesuai etika konsultasi pendidikan kedokteran.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="text-headline-sm text-on-surface font-bold">
              WhatsApp Berhasil Dihubungkan!
            </h3>
            <p className="text-body-md text-on-surface-variant max-w-sm mx-auto">
              Tab WhatsApp resmi Lavender telah terbuka. Dokter konsultan kami akan membalas pesan Anda sesegera mungkin.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface text-label-md font-bold hover:bg-surface-container transition-all"
              >
                Kembali ke Situs
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
