import React, { useState } from 'react';
import { PageTab } from '../types';

interface Perjalanan3TahunViewProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const Perjalanan3TahunView: React.FC<Perjalanan3TahunViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedStudent, setSelectedStudent] = useState<'Aisyah' | 'Rayhan'>('Aisyah');
  const [bookingName, setBookingName] = useState('');
  const [bookingGrade, setBookingGrade] = useState('Kelas 10 SMA');
  const [bookingSchool, setBookingSchool] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    const msg = `Halo Tim Lavender FK, saya ${bookingName} (${bookingSchool}, ${bookingGrade}, No WA: ${bookingPhone}). Saya ingin menjadwalkan Sesi Pemetaan Potensi Medis & Audit Rapor Siswa.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Ambient glowing backdrop */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[52rem] h-[34rem] rounded-full bg-gradient-to-tr from-primary-fixed/40 via-secondary-container/30 to-tertiary-fixed/20 blur-[110px] -z-10"></div>
        <div className="pointer-events-none absolute top-96 -right-20 w-80 h-80 rounded-full bg-secondary-container/25 blur-3xl -z-10"></div>

        {/* 1. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16 lg:pb-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Program Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-xs border border-primary-fixed/40">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-md text-label-md text-primary font-bold tracking-wide uppercase">
                Program Unggulan: Medical Future-Ready (LPP 3 Tahun)
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
              Bukan Les Semalam Suntuk.
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent">
                Ini Ekosistem Masuk Kedokteran 36 Bulan.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Dari orientasi potensi di kelas 10, penjagaan rapor di kelas 11, hingga eksekusi taktik seleksi di kelas 12 bersama dokter spesialis pendamping dan mentor akademik PTN.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#booking-assessment"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Jadwalkan Konsultasi Pemetaan Siswa</span>
              </a>
              <a
                href="#mockup-dashboard"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md text-on-surface hover:text-primary font-label-lg text-label-lg font-semibold shadow-xs hover:shadow-md transition-all border border-surface-container-high/50"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">analytics</span>
                <span>Lihat Contoh Laporan Rapor &amp; Progres</span>
              </a>
            </div>

            {/* Subtle Trust Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-10 w-full max-w-3xl">
              <div className="flex flex-col items-center p-3 rounded-2xl bg-surface-container-lowest/60 backdrop-blur-xs border border-surface-container-high/40">
                <span className="font-label-stat text-label-stat text-primary font-extrabold">91.4%</span>
                <span className="font-body-sm text-body-sm text-outline font-medium">Lolos FK Target</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-2xl bg-surface-container-lowest/60 backdrop-blur-xs border border-surface-container-high/40">
                <span className="font-label-stat text-label-stat text-on-surface font-extrabold">1 : 5</span>
                <span className="font-body-sm text-body-sm text-outline font-medium">Rasio Mentor : Siswa</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-2xl bg-surface-container-lowest/60 backdrop-blur-xs border border-surface-container-high/40">
                <span className="font-label-stat text-label-stat text-primary font-extrabold">36 Bln</span>
                <span className="font-body-sm text-body-sm text-outline font-medium">Pendampingan Penuh</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-2xl bg-surface-container-lowest/60 backdrop-blur-xs border border-surface-container-high/40">
                <span className="font-label-stat text-label-stat text-on-surface font-extrabold">12x</span>
                <span className="font-body-sm text-body-sm text-outline font-medium">Audit Rapor &amp; Portofolio</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TIMELINE HORIZONTAL 3 FASE */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-md text-label-md font-semibold mb-3">
                <span className="material-symbols-outlined text-[16px]">route</span>
                Roadmap Terukur 36 Bulan
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                Tahapan Presisi Menuju Jas Putih Dokter
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Dirancang sistematis untuk meredam kecemasan sejak awal SMA. Setiap fase memiliki indikator keberhasilan yang transparan.
            </p>
          </div>

          {/* 3 Columns Bento/Timeline Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            {/* CARD FASE 1: KELAS 10 */}
            <div className="group relative rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-surface-container-high/40">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
                    Fase 1 • Kelas 10
                  </span>
                  <span className="font-label-md text-label-md text-outline">Bulan 01 - 12</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                    Fondasi &amp; Penemuan Potensi
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Membangun kebiasaan belajar teratur dan identifikasi kecenderungan intelektual tanpa beban tekanan dini.
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-container-low p-4 space-y-3">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-primary">psychology</span>
                      Diagnostic Test Gaya Belajar
                    </span>
                    <span className="text-primary font-bold">Selesai 100%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full w-full"></div>
                  </div>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">school</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Peran Mentor Medis</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Audit mata pelajaran sains, penguatan nalar IPA dasar, dan pemetaan kelemahan kognitif awal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">flag</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Checkpoint Utama</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Penerbitan Dokumen Profil Akademik &amp; Cetak Biru Roadmap 3 Tahun Siswa.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">diversity_3</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Peran Orang Tua</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Pendampingan ritme istirahat &amp; kebiasaan belajar di rumah tanpa ekspektasi negatif.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-container-high/40">
                <span className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold">
                  <span>Fase Eksplorasi Minat</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>

            {/* CARD FASE 2: KELAS 11 */}
            <div className="group relative rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-surface-container-high/40">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold">
                    Fase 2 • Kelas 11
                  </span>
                  <span className="font-label-md text-label-md text-outline">Bulan 13 - 24</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                    Penguatan &amp; Kurasi Rapor
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Menjaga trajektori nilai rapor sains tetap menanjak stabil demi mengunci eligibility SNBP sekolah.
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-container-low p-4 space-y-2">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-secondary">trending_up</span>
                      Kurva Rapor Rata-Rata Sains
                    </span>
                    <span className="text-secondary font-bold">92.8 / 100</span>
                  </div>
                  {/* Inline SVG Line Graph */}
                  <svg className="w-full h-12 text-secondary" fill="none" viewBox="0 0 200 48">
                    <path
                      d="M0 38 Q 40 32, 70 24 T 140 16 T 200 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                    <circle cx="200" cy="6" fill="currentColor" r="4" />
                  </svg>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">assignment_turned_in</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Peran Mentor Medis</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Supervisi tugas sekolah berkala, drilling konsep Kimia &amp; Biologi tingkat lanjut, serta audit kuota SNBP SMA.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">calculate</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Checkpoint Utama</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Evaluasi Tiap Semester &amp; Simulasi Rasionalisasi Peluang SNBP Pertama lintas PTN.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">handshake</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Peran Orang Tua</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Diskusi terbuka preferensi kota/kampus bersama mentor dalam sesi konseling triwulan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-container-high/40">
                <span className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary font-bold">
                  <span>Fase Proteksi Portofolio</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>

            {/* CARD FASE 3: KELAS 12 */}
            <div className="group relative rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-surface-container-high/40">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">
                    Fase 3 • Kelas 12
                  </span>
                  <span className="font-label-md text-label-md text-outline">Bulan 25 - 36</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                    Eksekusi &amp; Rasionalisasi Taktis
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Penajaman nalar HOTS UTBK berkecepatan tinggi, simulasi wawancara MMI, dan kepastian mitigasi risiko.
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-container-low p-4 space-y-2">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-tertiary">speed</span>
                      Target Skor UTBK SNBT
                    </span>
                    <span className="text-tertiary font-bold">735+ (Aman FK UI/UGM)</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">stethoscope</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Peran Mentor Medis</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Coaching Multiple Mini Interview (MMI), kalkulasi matriks keketatan riil, dan drilling ujian mandiri SIMAK/CBT.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">verified_user</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Checkpoint Utama</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Simulasi Seleksi Nasional Terpadu &amp; Penguncian Strategi Cadangan (Plan A, B, &amp; IUP).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">favorite</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Peran Orang Tua</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Dukungan ketenangan mental, kesiapan logistik tes, dan pendampingan administrasi registrasi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-container-high/40">
                <span className="inline-flex items-center gap-2 font-label-md text-label-md text-tertiary font-bold">
                  <span>Fase Kelulusan Pasti</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Core Value Proposition Banner Under Timeline */}
          <div className="mt-8 p-6 rounded-2xl bg-surface-container-low/90 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 border border-surface-container-high/40">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[26px]">verified</span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Transparansi Tanpa Tebak-Tebakan
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Setiap fase memiliki mentor spesifik, target kuantitatif terukur, dan laporan progres bulanan yang dapat diakses orang tua secara real-time.
                </p>
              </div>
            </div>
            <a
              href="#booking-assessment"
              className="shrink-0 px-6 py-2.5 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md font-bold shadow-xs hover:shadow transition-all"
            >
              Mulai dari Kelas 10 atau 11 →
            </a>
          </div>
        </section>

        {/* 3. CONTOH LAPORAN PROGRES SISWA (Interactive Mockup UI) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16" id="mockup-dashboard">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Explanation & Context */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/50 text-on-primary-fixed font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                Lavender Student Portal
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                Pantau Kesiapan Anak Seperti Membaca Rekam Medis
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Tidak ada lagi teka-teki &quot;apakah anak saya sudah cukup belajar?&quot;. Setiap orang tua mendapatkan akses dasbor progresif yang memetakan skor simulasi, kestabilan emosional saat tes, hingga peluang kelulusan kuota per fakultas.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                      Audit Rapor Semester Otomatis
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Membandingkan indeks nilai siswa dengan batas bawah kelulusan SNBP FK tahun sebelumnya.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                      Catatan Klinis Mentor Dokter
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Evaluasi kualitatif mengenai ketahanan fokus, logika penalaran analitis, dan manajemen stres.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low border border-surface-container-high/40">
                  <img
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-fixed"
                    alt="Dr. Ratna Indrayani"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC87paPW6SGZj-4uBjPHmli-b5dV-KAkFIjMz1HEkQTZkDamLVvXw0ItOVWKOCmc4WW8I9S9qImhjl3IkkpisdcBGCkspsRoO1DWK_eRe8-5qp9ml8matx_kZ3hI7TCivtLLV8ShGCqWjLDNb_iOLAAjUfOeRXcy89piM-ujdRdRLUmDW4KAzUfMm4-UpBqyXdEmvF0qF1i7UyYAiciMfSxrbGCXjuM_WJDw2BCjxTwHejfAl5XIMk"
                  />
                  <div>
                    <p className="font-label-md text-label-md text-on-surface font-bold">
                      Dr. Ratna Indrayani, Sp.A
                    </p>
                    <p className="font-body-sm text-body-sm text-outline">
                      Lead Academic Advisor Bimbel Lavender
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Frosted Dashboard Card Mockup */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl bg-surface-container-lowest/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-primary/10 space-y-6 border border-primary-fixed/40">
                {/* Switch student pill */}
                <div className="flex items-center justify-between pb-4 border-b border-surface-container-high/40">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-bold text-lg shadow-md shadow-primary/30">
                      {selectedStudent === 'Aisyah' ? 'AN' : 'RA'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          {selectedStudent === 'Aisyah' ? 'Aisyah Nurhaliza' : 'Rayhan Al-Ghifari'}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-semibold">
                          {selectedStudent === 'Aisyah' ? 'Kelas 11 SMA' : 'Kelas 12 SMA'}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-outline">
                        Target: <strong className="text-on-surface">{selectedStudent === 'Aisyah' ? 'FK UI (SNBP)' : 'FK UGM (SNBT)'}</strong> • Cadangan: <strong className="text-on-surface">{selectedStudent === 'Aisyah' ? 'FK Unair' : 'FK Undip'}</strong>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-label-md text-label-md text-outline block">Status Kelayakan FK</span>
                    <span className="font-label-lg text-label-lg text-primary font-bold inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                      {selectedStudent === 'Aisyah' ? 'Peluang Sangat Tinggi (87%)' : 'Peluang Aman (92%)'}
                    </span>
                  </div>
                </div>

                {/* Subject Competency Meters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Item 1: Biologi Sel */}
                  <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                    <div className="flex justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold">Biologi Sel &amp; Genetika</span>
                      <span className="text-primary font-bold">94%</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full w-[94%]"></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline block text-right">Tuntas Level Olimpiade</span>
                  </div>

                  {/* Item 2: Kimia Organik */}
                  <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                    <div className="flex justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold">Kimia Organik &amp; Larutan</span>
                      <span className="text-secondary font-bold">88%</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full w-[88%]"></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline block text-right">Di atas rata-rata nasional (72%)</span>
                  </div>

                  {/* Item 3: UTBK Quant Score */}
                  <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                    <div className="flex justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold">Penalaran Kuantitatif &amp; Matematika</span>
                      <span className="text-tertiary font-bold">760 / 1000</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-tertiary h-full rounded-full w-[76%]"></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline block text-right">Passing Grade FK UI 2024: 715</span>
                  </div>

                  {/* Item 4: Psychological Readiness */}
                  <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                    <div className="flex justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold">Kesiapan Mental &amp; Wawancara</span>
                      <span className="text-primary font-bold">Sangat Baik (A)</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full w-[92%]"></div>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline block text-right">MMI Simulation Score: 9.2/10</span>
                  </div>
                </div>

                {/* Mentor's Clinical Assessment Card */}
                <div className="p-5 rounded-2xl bg-primary-fixed/20 space-y-2 border border-primary-fixed/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                      <span className="font-label-md text-label-md font-bold text-primary">
                        Catatan Evaluasi Triwulan • Dr. Ratna (Mentor)
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline">12 Maret 2025</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                    &quot;Konsistensi belajar ananda {selectedStudent === 'Aisyah' ? 'Aisyah' : 'Rayhan'} sangat stabil. Rapor semester 3 aman di ranking 2 paralel sekolah dengan rata-rata 93.4. Target kuota eligible SNBP sekolah terjamin. Fokus 3 bulan ke depan: akselerasi drill soal Penalaran Umum UTBK agar Plan B Mandiri tetap berada di ambang batas tertinggi.&quot;
                  </p>
                </div>

                {/* Dashboard Action Footer */}
                <div className="flex flex-wrap items-center justify-between pt-2 text-outline font-body-sm text-body-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                    Laporan ini diaudit oleh Lembaga Lavender &amp; Dosen FK UI
                  </span>
                  <button
                    onClick={() => onOpenConsultation('Unduh Laporan Portofolio Siswa')}
                    className="text-primary font-label-md text-label-md font-bold hover:underline cursor-pointer"
                  >
                    Konsultasikan Format Lengkap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SIAPA YANG COCOK & CARA BERGABUNG */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-3.5 py-1 rounded-full bg-surface-container-low text-primary font-label-md text-label-md font-bold uppercase tracking-wider">
              Kriteria &amp; Format Bimbingan
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mt-3">
              Dirancang Khusus untuk Keluarga yang Menghargai Kepastian &amp; Ketenangan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3">
              Kami tidak menerima pendaftaran massal. Program LPP 3 Tahun dibatasi per angkatan demi menjaga kualitas bimbingan intensif 1-on-1 bersama para dokter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs hover:shadow-lg transition-all space-y-4 border border-surface-container-high/40">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[30px]">person_check</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Siswa SMA Kelas 10 &amp; 11
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Siswa yang memiliki tekad kuat masuk Fakultas Kedokteran (PTN/Swasta Favorit/IUP) dan ingin membangun rekam jejak nilai tanpa stres sistem kebut semalam di kelas 12.
              </p>
              <div className="pt-2">
                <span className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Prioritas kuota eligible SNBP sekolah
                </span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs hover:shadow-lg transition-all space-y-4 border border-surface-container-high/40">
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[30px]">family_restroom</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Orang Tua Penuh Kepedulian
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Ayah dan Ibu yang menginginkan pendampingan akademik terstruktur, bebas friksi rumah tangga, serta laporan komprehensif tanpa harus menebak kesiapan anak sendiri.
              </p>
              <div className="pt-2">
                <span className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Sesi konseling orang tua berkala
                </span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs hover:shadow-lg transition-all space-y-4 border border-surface-container-high/40">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed/40 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[30px]">groups</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Format Eksklusif Maks 5 Siswa
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Setiap kelompok belajar dibatasi maksimal 5 orang dengan kemampuan seimbang, dikombinasikan dengan sesi bimbingan 1-on-1 privat bersama dokter spesialis pengampu.
              </p>
              <div className="pt-2">
                <span className="font-label-md text-label-md text-tertiary font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Modul Bedah Kasus &amp; Kedokteran Eksklusif
                </span>
              </div>
            </div>
          </div>

          {/* Atmosphere Photo Highlight Strip */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="relative rounded-3xl overflow-hidden shadow-lg h-64 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAk_gOCrclCiATghd5jkWSNt_Dr4wIlourH71ZTD7-ySXchbqBKtD6dQo6vXoob0QSeyAMxZETJvToKn4E-V7fIBPTrYhytbzlNc1p84QUPAE56GrWgvtpPCN4shVlja671Nry4WFGYnM3bR0oh5OVEdZQ5619fUT-Z6ubZXz_jioY0Yg2u9tUmvu3Eqqk8dZ-duJtkmOfY_iZlG8MImSAvIwHI5-sUeFJu5VUHuo0kS8fXk2RDPPU')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="font-label-md text-label-md text-primary-fixed uppercase tracking-wider font-bold">
                    Mentorship Medis
                  </span>
                  <p className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
                    Diskusi Interaktif &amp; Pendampingan 1-on-1
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative rounded-3xl overflow-hidden shadow-lg h-64 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGO-q-b3k41HTIQivv4exegRuPmmv5df9u5dfhAq1ydAQJUjN46G7Jh0-OWzcUgnIAG3WOh18XCsNNFLxxJbg_wsFfqTYhKVorjqSkP2PAvLmkeLqlsRrNSqdu0JEMCzk15Hc9kErMCRjpdFKczLxzdf71mOo75sy4a9nGDP2umCGuzSy9-GERkykxL4qJvBg1A7WrY7G2_-gdm0__Zu4KgFf7W2-pf24JYi1cunXyC34-O52ye2M')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="font-label-md text-label-md text-primary-fixed uppercase tracking-wider font-bold">
                    Fasilitas Lengkap
                  </span>
                  <p className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
                    Akses Modul Soal Kedokteran &amp; Simulasi MMI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA KONSULTASI & BOOKING ASSESSMENT */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 mb-8" id="booking-assessment">
          <div className="rounded-3xl bg-gradient-to-br from-primary-fixed/40 via-surface-container-lowest to-secondary-container/40 p-8 lg:p-14 shadow-2xl relative overflow-hidden border border-primary-fixed/40">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
              <div className="lg:col-span-7 space-y-4">
                <span className="font-label-md text-label-md px-3.5 py-1 rounded-full bg-primary text-on-primary font-bold">
                  Sesi Pemetaan Potensi Medis
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight leading-tight">
                  Jangan Biarkan Potensi Anak Hilang karena Rapor yang Terabaikan.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                  Daftarkan putra-putri Anda untuk mengikuti sesi diagnostik bakat dan audit riwayat nilai rapor bersama Dr. Ratna &amp; tim akademik Lavender secara bebas biaya.
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-6 text-on-surface font-label-md text-label-md">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    <span>Format 1-on-1 Privat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    <span>Durasi 45 Menit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    <span>Tersedia Offline / Zoom</span>
                  </div>
                </div>
              </div>

              {/* Assessment Form */}
              <div className="lg:col-span-5 rounded-2xl bg-surface-container-lowest p-6 lg:p-8 shadow-xl space-y-4 border border-surface-container-high/60">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Jadwalkan Sesi Pemetaan
                </h3>
                <p className="font-body-sm text-body-sm text-outline">
                  Slot dibatasi 10 sesi per minggu untuk menjaga kualitas:
                </p>

                {bookingSubmitted ? (
                  <div className="p-6 rounded-2xl bg-secondary-container/30 border border-primary/20 text-center space-y-3">
                    <span className="material-symbols-outlined text-primary text-4xl">verified</span>
                    <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Jadwal Konsultasi Disiapkan!
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Terima kasih {bookingName}. Education Advisor Lavender akan menghubungi nomor {bookingPhone} dalam 1x24 jam untuk konfirmasi jam dan link Zoom.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                        Nama Calon Siswa / Orang Tua
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                        placeholder="Contoh: Farhan / Ir. Hendro"
                        required
                        type="text"
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Kelas Saat Ini
                        </label>
                        <select
                          className="w-full px-3 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                          value={bookingGrade}
                          onChange={(e) => setBookingGrade(e.target.value)}
                        >
                          <option>Kelas 10 SMA</option>
                          <option>Kelas 11 SMA</option>
                          <option>Kelas 12 SMA</option>
                          <option>Gap Year</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                          Asal Sekolah (SMA)
                        </label>
                        <input
                          className="w-full px-3 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                          placeholder="SMAN 8 / Labschool"
                          required
                          type="text"
                          value={bookingSchool}
                          onChange={(e) => setBookingSchool(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1">
                        Nomor WhatsApp
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                        placeholder="0812-xxxx-xxxx"
                        required
                        type="tel"
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                      />
                    </div>

                    <button
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">event_available</span>
                      <span>Konfirmasi Jadwal Pemetaan</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
