import React, { useState } from 'react';
import { PageTab } from '../types';
import { PETA_JALUR_FAQS } from '../data/faqData';

interface PetaJalurViewProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const PetaJalurView: React.FC<PetaJalurViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  // Pathway filter tabs: 'all' | 'snbp' | 'snbt' | 'mandiri' | 'iup'
  const [activePathwayFilter, setActivePathwayFilter] = useState<'all' | 'snbp' | 'snbt' | 'mandiri' | 'iup'>('all');

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Diagnostic Quiz State
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleQuizAnswer = (step: number, answerKey: string) => {
    const updated = { ...quizAnswers, [step]: answerKey };
    setQuizAnswers(updated);

    if (step < 5) {
      setQuizStep(step + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setQuizAnswers({});
    setQuizCompleted(false);
    setLeadSubmitted(false);
  };

  // Compute recommendation
  const computeRecommendation = () => {
    const q1 = quizAnswers[1] || '';
    const q2 = quizAnswers[2] || '';
    const q4 = quizAnswers[4] || '';
    const q5 = quizAnswers[5] || '';

    if (q5 === 'iup_yes' || (q4 === 'open_all_budget' && q5 !== 'not_ready_eng')) {
      return {
        main: 'IUP Medicine (International Class)',
        mainDesc: 'Kemampuan bahasa Inggris aktif dan kesiapan seleksi MMI & SJT memberikan keunggulan kompetitif tinggi.',
        sub: 'SNBT UTBK + Mandiri Reguler',
        subDesc: 'Amankan intake gelombang awal IUP di bulan Januari-Februari untuk rasa aman maksimal.',
      };
    }

    if ((q1 === 'snbp_potential' || q1 === 'all_path') && (q2 === 'snbp_high' || q2 === 'snbp_mid')) {
      return {
        main: 'SNBP Prestasi Rapor + Portofolio Riset',
        mainDesc: 'Tren rapormu memenuhi kualifikasi eligible sekolah. Fokus pada stabilitas nilai semester berjalan.',
        sub: 'SNBT UTBK Target 720+ (Plan B)',
        subDesc: 'Mulai drilling soal UTBK sejak dini sebagai jaring pengaman utama jika kuota sekolah terbatas.',
      };
    }

    return {
      main: 'SNBT UTBK + Seleksi Mandiri Prestasi',
      mainDesc: 'Fokus memaksimalkan target skor 715+ dengan penyiapan subtes Penalaran Matematika & Literasi.',
      sub: 'SIMAK UI / UTUL UGM / Mandiri CBT',
      subDesc: 'Kombinasikan dengan ujian mandiri PTN regional bereputasi untuk memperlebar rasio kelulusan.',
    };
  };

  const recommendation = computeRecommendation();

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    const message = `Halo Lavender FK, saya ${studentName} (${studentPhone}). Saya baru saja menyelesaikan Kuis Peta Jalur dengan rekomendasi utama: "${recommendation.main}". Mohon kirimkan Roadmap 90 Hari & jadwal audit nilai rapor.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Breadcrumb & Strategic Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
            <button
              onClick={() => onNavigate('beranda')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Lavender FK
            </button>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary font-bold">Peta Jalur Masuk FK 2025/2026</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span>Analisis Kuota SNBP &amp; SNBT Terupdate 2025</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-xs">
              <span className="text-base">🧭</span>
              <span className="font-label-lg text-label-lg text-primary font-bold tracking-tight">
                Panduan Strategis Calon Dokter Spesialis &amp; Umum
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
              Empat pintu menuju FK.
              <br />
              <span className="bg-gradient-to-r from-primary via-tertiary-container to-secondary bg-clip-text text-transparent">
                Mana yang tepat untukmu?
              </span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Setiap jalur punya syarat, jadwal, dan strategi tersendiri. Pahami petanya sebelum memilih, ukur peluang lewat audit data, lalu rancang langkah akselerasi bersama tim dokter mentor Lavender.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#kuis-jalur"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                <span>Mulai Kuis Jalur (2 Menit)</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>

              <a
                href="#linimasa-tahunan"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-lg text-label-lg font-bold shadow-xs hover:bg-surface-container-low transition-all"
              >
                <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                <span>Lihat Kalender Seleksi FK 2025</span>
              </a>
            </div>

            {/* Quick Metrics Bento Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 max-w-xl">
              <div className="p-3.5 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xs shadow-xs">
                <div className="font-label-stat text-label-stat text-primary font-bold">92.4%</div>
                <div className="font-label-md text-label-md text-on-surface-variant mt-0.5">Lolos Pilihan Utama FK</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xs shadow-xs">
                <div className="font-label-stat text-label-stat text-secondary font-bold">1 : 48</div>
                <div className="font-label-md text-label-md text-on-surface-variant mt-0.5">Rasio Seleksi FK Nasional</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xs shadow-xs">
                <div className="font-label-stat text-label-stat text-tertiary font-bold">4 Pintu</div>
                <div className="font-label-md text-label-md text-on-surface-variant mt-0.5">Peta Jalur Terintegrasi</div>
              </div>
            </div>
          </div>

          {/* Hero Graphic Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto p-6 rounded-3xl bg-surface-container-lowest/85 backdrop-blur-xl shadow-xl flex flex-col justify-between border border-primary-fixed/40">
              {/* Floating Specular Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
                  <span className="material-symbols-outlined text-sm">stethoscope</span>
                  <span>Audit Diagnostik FK</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant font-medium">Batch 2025 Aktif</span>
              </div>

              {/* Central Data Visual Graphic */}
              <div className="relative py-4 flex flex-col items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-secondary-container via-primary-fixed to-tertiary-fixed-dim/40 flex items-center justify-center shadow-inner relative">
                  <div className="w-36 h-36 rounded-full bg-surface-container-lowest flex flex-col items-center justify-center text-center p-3 shadow-md">
                    <span className="material-symbols-outlined text-primary text-3xl mb-1">psychology_alt</span>
                    <span className="font-label-md text-label-md font-bold text-on-surface">Target Skor UTBK</span>
                    <span className="font-headline-sm text-headline-sm text-primary font-black">715+</span>
                  </div>
                  <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-md font-bold">
                    FK UI / UGM
                  </div>
                </div>
              </div>

              {/* Bottom Live Tracker Pill */}
              <div className="p-3 rounded-2xl bg-surface-container-low flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-lg">verified</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md font-bold text-on-surface truncate">90 Hari Menuju Pendaftaran Pertama</span>
                  <span className="font-body-sm text-body-sm text-outline truncate">Simulasi MMI &amp; Pembobotan Rapor Aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Peta Interaktif 4 Kartu Jalur */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-label-md text-label-md font-bold text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary-fixed/60">
            Arsitektur Jalur Masuk
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Karakteristik &amp; Strategi 4 Pintu Seleksi FK
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Pilihlah jalur dengan pemahaman penuh atas variabel seleksinya. Lavender membimbing setiap kandidat sesuai kekuatan portofolio dan profil akademiknya.
          </p>
        </div>

        {/* Tab Buttons for Rapid View Filtering */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-surface-container-low backdrop-blur-md shadow-xs gap-1 flex-wrap justify-center">
            <button
              onClick={() => setActivePathwayFilter('all')}
              className={`px-4 py-2 rounded-full font-label-lg text-label-lg transition-all cursor-pointer ${
                activePathwayFilter === 'all'
                  ? 'bg-surface-container-lowest text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant font-semibold hover:text-on-surface'
              }`}
            >
              Semua Jalur (4)
            </button>
            <button
              onClick={() => setActivePathwayFilter('snbp')}
              className={`px-4 py-2 rounded-full font-label-lg text-label-lg transition-all cursor-pointer ${
                activePathwayFilter === 'snbp'
                  ? 'bg-surface-container-lowest text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant font-semibold hover:text-on-surface'
              }`}
            >
              SNBP Prestasi
            </button>
            <button
              onClick={() => setActivePathwayFilter('snbt')}
              className={`px-4 py-2 rounded-full font-label-lg text-label-lg transition-all cursor-pointer ${
                activePathwayFilter === 'snbt'
                  ? 'bg-surface-container-lowest text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant font-semibold hover:text-on-surface'
              }`}
            >
              SNBT Tes UTBK
            </button>
            <button
              onClick={() => setActivePathwayFilter('mandiri')}
              className={`px-4 py-2 rounded-full font-label-lg text-label-lg transition-all cursor-pointer ${
                activePathwayFilter === 'mandiri'
                  ? 'bg-surface-container-lowest text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant font-semibold hover:text-on-surface'
              }`}
            >
              Ujian Mandiri
            </button>
            <button
              onClick={() => setActivePathwayFilter('iup')}
              className={`px-4 py-2 rounded-full font-label-lg text-label-lg transition-all cursor-pointer ${
                activePathwayFilter === 'iup'
                  ? 'bg-surface-container-lowest text-primary font-bold shadow-xs'
                  : 'text-on-surface-variant font-semibold hover:text-on-surface'
              }`}
            >
              IUP / Kelas Internasional
            </button>
          </div>
        </div>

        {/* 4 Pathways Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARD 1: SNBP */}
          {(activePathwayFilter === 'all' || activePathwayFilter === 'snbp') && (
            <div className="flex flex-col justify-between p-7 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-surface-container-high/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold">
                    Jalur 01 • Prestasi Rapor
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Kuota: ~20% Kuota PTN
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    SNBP Kedokteran
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Seleksi tanpa tes tertulis berbasis konsistensi nilai rapor semester 1-5, peringkat paralel sekolah, dan prestasi kejuaraan ilmiah.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Waktu Ideal Persiapan</span>
                    <span className="text-on-surface font-bold">Mulai Kelas 10 Semester 1</span>
                  </div>
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Dasar Seleksi</span>
                    <span className="text-on-surface font-bold">Nilai Rapor &amp; Kurasi Sertifikat</span>
                  </div>
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Indeks Sekolah</span>
                    <span className="text-on-surface font-bold">Sangat Berpengaruh</span>
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
                    Peran Mentor Lavender:
                  </span>
                  <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Pengawalan dan intervensi nilai akademik tiap semester agar grafik nilai naik konsisten.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Rasionalisasi kuota alumni sekolah di FK target dengan database historis 8 tahun.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Kurasi portofolio sertifikat olimpiade sains (OSN, KSN, LKTIN) yang diakui panitia SNPMB.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-primary-fixed/50 text-on-primary-fixed font-label-md text-label-md font-bold">
                  💡 Persiapannya dimulai di kelas 10, bukan kelas 12
                </span>
                <button
                  onClick={() => onOpenConsultation('Konsultasi Jalur SNBP Kedokteran')}
                  className="p-2.5 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
                  title="Konsultasi SNBP"
                >
                  <span className="material-symbols-outlined">north_east</span>
                </button>
              </div>
            </div>
          )}

          {/* CARD 2: SNBT */}
          {(activePathwayFilter === 'all' || activePathwayFilter === 'snbt') && (
            <div className="flex flex-col justify-between p-7 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-surface-container-high/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
                    Jalur 02 • Tes UTBK Nasional
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Kuota: ~40% Kuota PTN
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    SNBT UTBK Target 700+
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Ujian kompetisi terbuka nasional berbasis TPS, Penalaran Matematika, dan Literasi Bahasa Indonesia &amp; Inggris.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Waktu Ideal Persiapan</span>
                    <span className="text-on-surface font-bold">Mulai Kelas 11 Akhir / Kelas 12</span>
                  </div>
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Standar Skor Lolos FK UI/UGM</span>
                    <span className="text-primary font-bold">Skor Rata-rata 710 - 745</span>
                  </div>
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Dasar Penilaian</span>
                    <span className="text-on-surface font-bold">Murni Nilai Komputer (IRT Scoring)</span>
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
                    Peran Mentor Lavender:
                  </span>
                  <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Diagnostic test berulang menggunakan model pembobotan Item Response Theory (IRT).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Bedah titik lemah per subtes (Penalaran Kuantitatif vs Penalaran Induktif).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Strategi score-margin placement: penentuan PTN lapis 1 &amp; lapis 2 saat pendaftaran.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-md text-label-md font-bold">
                  💡 Skor tinggi dibangun dari evaluasi, bukan jumlah soal
                </span>
                <button
                  onClick={() => onOpenConsultation('Konsultasi Jalur SNBT UTBK FK')}
                  className="p-2.5 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
                  title="Konsultasi SNBT"
                >
                  <span className="material-symbols-outlined">north_east</span>
                </button>
              </div>
            </div>
          )}

          {/* CARD 3: Seleksi Mandiri PTN */}
          {(activePathwayFilter === 'all' || activePathwayFilter === 'mandiri') && (
            <div className="flex flex-col justify-between p-7 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-surface-container-high/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                    Jalur 03 • Ujian Mandiri PTN
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Kuota: ~30-40% Kuota
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    Ujian Mandiri (SIMAK UI, UTUL, SMUP)
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Ujian tes tulis mandiri yang diselenggarakan langsung oleh universitas atau penggabungan nilai skor UTBK dan nilai rapor.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Waktu Ideal Persiapan</span>
                    <span className="text-on-surface font-bold">Mulai Semester 2 Kelas 12</span>
                  </div>
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Skema Pembiayaan</span>
                    <span className="text-on-surface font-bold">UKT Berkeadilan + IPI (Uang Pangkal)</span>
                  </div>
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Tipe Ujian</span>
                    <span className="text-on-surface font-bold">Soal Akademik Mendalam (TKA Saintek)</span>
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
                    Peran Mentor Lavender:
                  </span>
                  <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Drilling soal spesifik karakter universitas (Logika Biologi SIMAK vs Esai Matematika UGM).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Kalender linimasa lintas kampus agar jadwal ujian tidak saling bertabrakan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Konsultasi mitigasi financial safety plan &amp; kalkulasi IPI yang rasional bagi orang tua.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md font-bold">
                  💡 Rencana cadangan terkuat pasca pengumuman SNBT
                </span>
                <button
                  onClick={() => onOpenConsultation('Konsultasi Jalur Mandiri PTN FK')}
                  className="p-2.5 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
                  title="Konsultasi Mandiri"
                >
                  <span className="material-symbols-outlined">north_east</span>
                </button>
              </div>
            </div>
          )}

          {/* CARD 4: IUP / KKI */}
          {(activePathwayFilter === 'all' || activePathwayFilter === 'iup') && (
            <div className="flex flex-col justify-between p-7 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-surface-container-high/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">
                    Jalur 04 • Kelas Internasional
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Intake Bergelombang (3 Intake)
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    IUP Medicine / KKI UI
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Program dokter bertaraf global dengan kurikulum Bahasa Inggris, pertukaran universitas mitra luar negeri, dan gelar ganda.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Waktu Ideal Persiapan</span>
                    <span className="text-on-surface font-bold">Kelas 11 atau awal Kelas 12</span>
                  </div>
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Tahapan Seleksi</span>
                    <span className="text-on-surface font-bold">Basic Sciences, SJT, MMI &amp; Psikotes</span>
                  </div>
                  <div className="flex items-center justify-between font-label-md text-label-md">
                    <span className="text-outline">Sertifikat Syarat</span>
                    <span className="text-on-surface font-bold">IELTS (min 6.0 - 6.5) / TOEFL ITP (min 550)</span>
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
                    Peran Mentor Lavender:
                  </span>
                  <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Simulasi eksklusif MMI (Multiple Mini Interview) dengan dokter alumni KKI UI &amp; IUP UGM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Bedah soal Situational Judgement Test (SJT) dan etika klinis kedokteran dalam bahasa Inggris.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>Fast-track penguatan skor sertifikasi IELTS &amp; tes psikometri kepribadian dokter (MMPI).</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-tertiary-fixed-dim/40 text-on-tertiary-fixed font-label-md text-label-md font-bold">
                  💡 Buka lebih awal di Januari tanpa gugurkan SNBT
                </span>
                <button
                  onClick={() => onOpenConsultation('Konsultasi IUP Kelas Internasional FK')}
                  className="p-2.5 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
                  title="Konsultasi IUP"
                >
                  <span className="material-symbols-outlined">north_east</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: Tabel Perbandingan Ringkas 4 Jalur */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="p-8 lg:p-10 rounded-3xl bg-surface-container-lowest/90 backdrop-blur-md shadow-sm border border-surface-container-high/40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                Matriks Komparasi
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold mt-1">
                Perbandingan Lengkap 4 Jalur FK
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Gunakan tabel ini untuk melihat keselarasan kualifikasi anak dengan parameter seleksi kampus.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md">
              <span className="material-symbols-outlined text-base text-primary">info</span>
              <span>Data resmi SNPMB &amp; Universitas 2024/2025</span>
            </div>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-left font-body-sm text-body-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-surface-container-low text-on-surface font-label-lg text-label-lg">
                  <th className="p-4 rounded-l-2xl font-bold">Kriteria Parameter</th>
                  <th className="p-4 font-bold text-primary">SNBP (Prestasi)</th>
                  <th className="p-4 font-bold text-secondary">SNBT (UTBK)</th>
                  <th className="p-4 font-bold text-tertiary">Seleksi Mandiri</th>
                  <th className="p-4 rounded-r-2xl font-bold text-on-surface">IUP / Internasional</th>
                </tr>
              </thead>
              <tbody className="divide-y-0">
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-4 font-bold text-on-surface">Dasar Penilaian Utama</td>
                  <td className="p-4 text-on-surface-variant">Nilai Rapor Sem 1-5 + Sertifikat</td>
                  <td className="p-4 text-on-surface-variant">Skor Tes UTBK IRT Nasional</td>
                  <td className="p-4 text-on-surface-variant">Tes Mandiri / Nilai UTBK + Rapor</td>
                  <td className="p-4 text-on-surface-variant">Sains Bahasa Inggris, MMPI &amp; MMI</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors bg-surface-container-low/20">
                  <td className="p-4 font-bold text-on-surface">Waktu Persiapan Ideal</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-md text-label-md font-bold">
                      Kelas 10
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-primary-fixed/60 text-on-primary-fixed font-label-md text-label-md font-bold">
                      Kelas 11 - 12
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                      Kelas 12 Sem 2
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">
                      Kelas 11 - 12
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-4 font-bold text-on-surface">Skema Biaya Pendidikan</td>
                  <td className="p-4 text-on-surface-variant">Hanya UKT (Tanpa Uang Pangkal)</td>
                  <td className="p-4 text-on-surface-variant">Hanya UKT (Tanpa Uang Pangkal)</td>
                  <td className="p-4 text-on-surface-variant">UKT + IPI (Uang Pangkal Mandiri)</td>
                  <td className="p-4 text-on-surface-variant">Tuition Fee Internasional + Dana Mitra</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors bg-surface-container-low/20">
                  <td className="p-4 font-bold text-on-surface">Tingkat Keketatan Rasio</td>
                  <td className="p-4 text-on-surface-variant">Ekstrem (1:60 s.d 1:110)</td>
                  <td className="p-4 text-on-surface-variant">Tinggi &amp; Terbuka (1:45 s.d 1:85)</td>
                  <td className="p-4 text-on-surface-variant">Menengah-Tinggi (1:25 s.d 1:50)</td>
                  <td className="p-4 text-on-surface-variant">Terukur &amp; Terfokus (1:8 s.d 1:18)</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-4 font-bold text-on-surface">Profil Siswa Paling Cocok</td>
                  <td className="p-4 text-on-surface-variant font-medium">Rangking 1-5 paralel, konsisten sejak kelas 10, ada riwayat alumni</td>
                  <td className="p-4 text-on-surface-variant font-medium">Logika penalaran tajam, konsisten latihan rutin berbobot tinggi</td>
                  <td className="p-4 text-on-surface-variant font-medium">Siswa gigih dengan readiness finansial &amp; penguasaan TKA Saintek</td>
                  <td className="p-4 text-on-surface-variant font-medium">Fasih Bahasa Inggris aktif, ekspresif saat interview, wawasan global</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: Kuis Interaktif: Jalur Mana yang Cocok Untukmu? */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-16" id="kuis-jalur">
        <div className="relative p-8 md:p-12 rounded-3xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-xl border border-primary-fixed/40">
          {/* Header Kuis */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-surface-container-high/40">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold mb-2">
                <span className="material-symbols-outlined text-sm">quiz</span>
                <span>Interactive Diagnostic Engine</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
                Kuis Jalur Masuk FK (2 Menit)
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Jawab 5 pertanyaan strategis untuk mengetahui peta prioritas jalur masuk terbaikmu.
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="shrink-0 flex flex-col items-end">
              <span className="font-label-md text-label-md text-outline">
                {quizCompleted ? 'Hasil Siap' : `Langkah ${quizStep} dari 5`}
              </span>
              <div className="w-36 h-2 rounded-full bg-surface-container-high mt-1.5 overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300 rounded-full"
                  style={{ width: quizCompleted ? '100%' : `${(quizStep / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Quiz Container Form */}
          <div className="py-6">
            {!quizCompleted ? (
              <div>
                {/* QUESTION 1 */}
                {quizStep === 1 && (
                  <div className="space-y-5">
                    <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                      Pertanyaan 01
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      Kamu sekarang berada di jenjang pendidikan apa?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => handleQuizAnswer(1, 'snbp_potential')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Kelas 10 SMA</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(1, 'all_path')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Kelas 11 SMA</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(1, 'snbt_mandiri')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Kelas 12 SMA</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(1, 'snbt_focus')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Gap Year / Alumni</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* QUESTION 2 */}
                {quizStep === 2 && (
                  <div className="space-y-5">
                    <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                      Pertanyaan 02
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      Bagaimana rekam jejak tren nilai rapormu sampai saat ini?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => handleQuizAnswer(2, 'snbp_high')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Naik konsisten tiap semester &amp; ranking 1-5</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(2, 'snbp_mid')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Stabil tinggi rata-rata di atas 88-90</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(2, 'snbt_mid')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Ada naik turun pada mata pelajaran tertentu</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(2, 'snbt_priority')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Belum konsisten, lebih yakin lewat jalur ujian tes</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* QUESTION 3 */}
                {quizStep === 3 && (
                  <div className="space-y-5">
                    <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                      Pertanyaan 03
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      Seberapa nyaman kamu dengan soal penalaran kuantitatif &amp; logika abstrak?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => handleQuizAnswer(3, 'snbt_ready')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Sangat nyaman &amp; senang eksplorasi soal HOTS</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(3, 'snbt_need_drill')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Cukup paham, namun butuh pembiasaan waktu ujian</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(3, 'tka_strong')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Lebih menyukai Biologi &amp; Kimia mendalam daripada logika umum</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(3, 'full_guidance')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Perlu bimbingan intensif dari pondasi konsep dasar</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* QUESTION 4 */}
                {quizStep === 4 && (
                  <div className="space-y-5">
                    <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                      Pertanyaan 04
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      Bagaimana kesiapan rencana biaya pendidikan FK bersama keluarga?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => handleQuizAnswer(4, 'open_all_budget')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Siap untuk jalur apa pun termasuk IPI Mandiri &amp; IUP</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(4, 'subsidy_ok')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Mengutamakan jalur UKT (SNBP/SNBT), tapi ada cadangan Mandiri</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(4, 'ukt_pure')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Hanya fokus pada jalur reguler tanpa uang pangkal (SNBP/SNBT)</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(4, 'need_scholarship')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Perlu bantuan skema KIP-Kuliah atau beasiswa penuh</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* QUESTION 5 */}
                {quizStep === 5 && (
                  <div className="space-y-5">
                    <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                      Pertanyaan 05
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      Apakah kamu berminat kuliah FK dengan Bahasa Inggris &amp; peluang rotasi klinik luar negeri?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => handleQuizAnswer(5, 'iup_yes')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Ya, sangat tertarik! Menguasai Bahasa Inggris dengan baik</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(5, 'iup_consider')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Tertarik sebagai opsi tambahan jika persaingannya rasional</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(5, 'reguler_focus')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Lebih nyaman dengan bahasa pengantar Indonesia (Kelas Reguler)</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                      <button
                        onClick={() => handleQuizAnswer(5, 'not_ready_eng')}
                        className="text-left p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/40 transition-all font-body-md text-body-md font-semibold text-on-surface flex items-center justify-between cursor-pointer"
                      >
                        <span>Belum memiliki sertifikasi kemampuan bahasa Inggris</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward_ios</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* RESULT & LEAD CAPTURE ENGINE */
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-secondary-container/20 space-y-4 border border-primary/20">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl">auto_graph</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Rekomendasi Strategis Awal Berhasil Digenerate
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Berdasarkan kombinasi jenjang, profil nilai rapor, dan kesiapan ujianmu, sistem mendeteksi keselarasan portofolio sebagai berikut:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-xs space-y-1">
                      <span className="font-label-md text-label-md text-primary font-bold">
                        JALUR UTAMA REKOMENDASI
                      </span>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                        {recommendation.main}
                      </div>
                      <p className="font-body-sm text-body-sm text-outline">
                        {recommendation.mainDesc}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-xs space-y-1">
                      <span className="font-label-md text-label-md text-secondary font-bold">
                        JALUR PELAPIS CADANGAN
                      </span>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                        {recommendation.sub}
                      </div>
                      <p className="font-body-sm text-body-sm text-outline">
                        {recommendation.subDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lead Capture to Unlock Detailed 90-Day Plan */}
                <div className="p-6 rounded-3xl bg-surface-container-low space-y-4">
                  <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Kirim Roadmap 90 Hari &amp; Konseling Nilai Gratis
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Dapatkan rincian bab krusial UTBK, batas ambang passing grade FK kampus impian, dan konsultasi 1-on-1 dengan dokter mentor Lavender.
                  </p>

                  {leadSubmitted ? (
                    <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-2">
                      <span className="material-symbols-outlined text-emerald-600 text-3xl">check_circle</span>
                      <p className="font-bold text-emerald-900">Roadmap Terkirim ke WhatsApp!</p>
                      <p className="text-body-sm text-emerald-700">
                        Dokter mentor kami akan segera menghubungi nomor {studentPhone} untuk pembahasan audit rapor Anda.
                      </p>
                      <button
                        onClick={resetQuiz}
                        className="text-primary font-bold text-label-md hover:underline pt-2 block mx-auto"
                      >
                        Ulangi Kuis
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-label-md text-label-md text-on-surface font-bold mb-1.5 block">
                            Nama Lengkap Siswa / Orang Tua
                          </label>
                          <input
                            className="w-full px-4 py-3 rounded-2xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                            placeholder="Contoh: Keisya Amanda"
                            required
                            type="text"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="font-label-md text-label-md text-on-surface font-bold mb-1.5 block">
                            Nomor WhatsApp (Aktif)
                          </label>
                          <input
                            className="w-full px-4 py-3 rounded-2xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                            placeholder="Contoh: 08123456789"
                            required
                            type="tel"
                            value={studentPhone}
                            onChange={(e) => setStudentPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          defaultChecked
                          className="w-4 h-4 rounded text-primary focus:ring-primary"
                          id="consent"
                          required
                          type="checkbox"
                        />
                        <label className="font-body-sm text-body-sm text-outline" htmlFor="consent">
                          Saya bersedia dihubungi oleh Tim Akademik Kedokteran Lavender untuk sesi review nilai rapor &amp; strategi FK.
                        </label>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          className="flex-1 py-4 rounded-2xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-primary-container hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                          type="submit"
                        >
                          <span className="material-symbols-outlined">send</span>
                          <span>Klaim Analisis Strategis &amp; Terhubung dengan Mentor Medis</span>
                        </button>
                        <button
                          type="button"
                          onClick={resetQuiz}
                          className="py-4 px-6 rounded-2xl bg-surface-container-lowest text-outline hover:text-on-surface font-label-lg text-label-lg font-semibold transition-all cursor-pointer"
                        >
                          Ulangi Kuis
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                <div className="text-center font-body-sm text-body-sm text-outline">
                  *Hasil kuis adalah gambaran awal strategis berdasarkan model analitik Lavender, bukan jaminan penerimaan resmi oleh universitas atau panitia SNPMB.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5: Linimasa Seleksi Setahun */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12" id="linimasa-tahunan">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-label-md text-label-md font-bold text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary-fixed/60">
            Siklus Seleksi Kedokteran
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Linimasa Seleksi FK Sepanjang Tahun
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Jangan terlambat melangkah. Setiap fase memiliki jendela krusial yang menentukan status kelulusanmu di fakultas kedokteran impian.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Jan - Feb */}
          <div className="p-6 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs space-y-3 border border-surface-container-high/40">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm font-extrabold text-primary">Jan - Feb</span>
              <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
                Fase 1
              </span>
            </div>
            <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Registrasi Akun &amp; SNBP</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Pembuatan akun SNPMB, finalisasi PDSS nilai rapor oleh sekolah, dan pembukaan IUP Intake 1 (IUP UGM / UI).
            </p>
            <div className="pt-2">
              <span className="font-label-md text-label-md text-secondary font-semibold">Agenda Lavender:</span>
              <p className="font-body-sm text-body-sm text-outline mt-0.5">
                Audit rasionalisasi SNBP &amp; Bootcamp MMI Kelas Internasional.
              </p>
            </div>
          </div>

          {/* Mar - Apr */}
          <div className="p-6 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs space-y-3 border border-surface-container-high/40">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm font-extrabold text-secondary">Mar - Apr</span>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold">
                Fase 2
              </span>
            </div>
            <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Pengumuman SNBP &amp; UTBK</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Pengumuman kelulusan jalur prestasi. Pendaftaran dan pelaksanaan Ujian Tulis Berbasis Komputer (UTBK Gelombang 1).
            </p>
            <div className="pt-2">
              <span className="font-label-md text-label-md text-secondary font-semibold">Agenda Lavender:</span>
              <p className="font-body-sm text-body-sm text-outline mt-0.5">
                Supercamp Karantina Hotel &amp; Try Out IRT Harian 700+.
              </p>
            </div>
          </div>

          {/* Mei - Jun */}
          <div className="p-6 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs space-y-3 border border-surface-container-high/40">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm font-extrabold text-tertiary">Mei - Jun</span>
              <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">
                Fase 3
              </span>
            </div>
            <h4 className="font-label-lg text-label-lg font-bold text-on-surface">UTBK Gel. 2 &amp; Ujian Mandiri</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Pengumuman skor resmi SNBT UTBK. Pembukaan pendaftaran SIMAK UI, UM UGM CBT, SMUP Unpad, dan IUP Intake 2.
            </p>
            <div className="pt-2">
              <span className="font-label-md text-label-md text-secondary font-semibold">Agenda Lavender:</span>
              <p className="font-body-sm text-body-sm text-outline mt-0.5">
                Pencegahan burnout, simulasi TKA Mandiri, dan financial mapping.
              </p>
            </div>
          </div>

          {/* Jul - Agu */}
          <div className="p-6 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs space-y-3 border border-surface-container-high/40">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Jul - Agu</span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                Fase 4
              </span>
            </div>
            <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Finalisasi Mandiri &amp; Daftar Ulang</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Ujian mandiri gelombang penutup, pengumuman hasil tes kesehatan &amp; MMPI, verifikasi dokumen, dan proses registrasi dokter muda.
            </p>
            <div className="pt-2">
              <span className="font-label-md text-label-md text-secondary font-semibold">Agenda Lavender:</span>
              <p className="font-body-sm text-body-sm text-outline mt-0.5">
                Pre-Med Mentoring: Orientasi kurikulum anatomi kedokteran tahun pertama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
        <div className="text-center mb-10 space-y-2">
          <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
            Pusat Jawaban
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
            Pertanyaan Kerap Ditanyakan Calon Dokter &amp; Orang Tua
          </h2>
        </div>

        <div className="space-y-3">
          {PETA_JALUR_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xs shadow-xs overflow-hidden transition-all border border-surface-container-high/40"
              >
                <button
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm font-bold text-on-surface cursor-pointer"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-outline transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-on-surface-variant font-body-md text-body-md animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Strategic CTA Box */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 mb-8">
        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-primary via-tertiary-container to-secondary text-on-primary shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-md text-label-md font-bold">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>Konseling Eksklusif Batch 2025</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg font-extrabold text-on-primary leading-tight">
              Ingin Memeriksa Peluang Nilai Rapor &amp; Target FK Impianmu?
            </h3>
            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              Duduk bersama dokter mentor Lavender untuk audit nilai rapormu secara mendalam tanpa dipungut biaya. Dapatkan gambaran realistis dan rencana studi 90 hari ke depan.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenConsultation('Jadwalkan Audit Rapor & Target FK via WA')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold shadow-lg hover:bg-surface-container-low transition-all text-center cursor-pointer hover:scale-105"
            >
              Jadwalkan Audit Rapor via WA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
