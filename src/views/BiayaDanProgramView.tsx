import React, { useState } from 'react';
import { PageTab } from '../types';

interface BiayaDanProgramViewProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const BiayaDanProgramView: React.FC<BiayaDanProgramViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'lunas' | 'cicilan'>('lunas');

  const programs = [
    {
      id: 'lpp-3year',
      title: 'LPP 3-Year Companion',
      tagline: 'Medical Future-Ready Ecosystem',
      badge: 'Program Unggulan',
      targetGrade: 'Kelas 10 & 11 SMA',
      ratio: '1 Mentor : 5 Siswa',
      duration: '36 Bulan Berkelanjutan',
      priceLunas: 'Rp 68.000.000',
      priceCicil: 'Rp 12.500.000 / termin (6x)',
      popular: true,
      features: [
        'Pendampingan penuh dari Kelas 10 sampai lulus seleksi PTN',
        'Audit & stabilisasi nilai rapor semester 1-5 (SNBP Guard)',
        'Diagnostic test gaya belajar & kurasi portofolio olimpiade',
        'Drill berkala UTBK TPS & Literasi berbasis sistem IRT',
        'Laporan mingguan WhatsApp & akses portal orang tua 24/7',
        'Konseling triwulan 3 arah (Orang Tua, Siswa, Dokter Mentor)',
        'Termasuk tiket prioritas Supercamp di kelas 12',
      ],
      ctaLabel: 'Daftar LPP 3 Tahun',
    },
    {
      id: 'supercamp',
      title: 'Supercamp Karantina Hotel',
      tagline: '30-Day Intensive Quarantine',
      badge: 'Spesialis UTBK & Mandiri',
      targetGrade: 'Kelas 12 & Alumni Gap Year',
      ratio: '1 Mentor : 4 Siswa',
      duration: '30 Hari Menginap di Hotel Bintang 4',
      priceLunas: 'Rp 48.500.000',
      priceCicil: 'Rp 13.000.000 / termin (4x)',
      popular: false,
      features: [
        'Akomodasi hotel bintang 4 (kamar twin-sharing, 3x makan & snack)',
        'Sesi belajar terpadu 10-12 jam sehari dengan dokter & dosen UI/UGM',
        'Simulasi UTBK harian dengan analisis prediktif Lavender AI',
        'Dokter jaga 24 jam untuk klinik tanya soal larut malam',
        'Workshop mental resilience, sleep optimization & anti-burnout',
        'Rasionalisasi final pilihan SNBT & ujian mandiri PTN',
        'Kuis adaptif dengan passing grade target 720+',
      ],
      ctaLabel: 'Amankan Kuota Supercamp',
    },
    {
      id: 'iup-international',
      title: 'IUP Medicine Track',
      tagline: 'Global Doctor Class & MMI Specialist',
      badge: 'Kelas Internasional',
      targetGrade: 'Kelas 11 & 12 SMA',
      ratio: '1 Mentor : 3 Siswa',
      duration: '12 Bulan / Fast-Track Intake',
      priceLunas: 'Rp 39.000.000',
      priceCicil: 'Rp 10.500.000 / termin (4x)',
      popular: false,
      features: [
        'Persiapan terpadu IUP UGM, KKI UI, IUP Unair, & IUP Undip',
        'Simulasi 6 stasiun MMI (Multiple Mini Interview) bersama dokter alumni',
        'Situational Judgement Test (SJT) & latihan penalaran etika klinis',
        'English for Academic Medicine & coaching sertifikasi IELTS 7.0+',
        'Personal statement & portfolio review oleh alumni Cambridge/Melbourne',
        'Simulasi tes psikometri kepribadian dokter (MMPI-2)',
        'Akses bank soal Basic Medical Sciences berbahasa Inggris',
      ],
      ctaLabel: 'Konsultasi Program IUP',
    },
    {
      id: 'private-vip',
      title: 'Private 1-on-1 Dokter Spesialis',
      tagline: 'Tailored Medical Admissions Mentorship',
      badge: 'Eksklusif Privat',
      targetGrade: 'Semua Jenjang SMA / Gap Year',
      ratio: '1 Mentor : 1 Siswa',
      duration: 'Jadwal Fleksibel (Online / Home-visit)',
      priceLunas: 'Mulai Rp 28.000.000 / paket',
      priceCicil: 'Dapat disesuaikan jumlah sesi',
      popular: false,
      features: [
        'Kurikulum 100% dipersonalisasi sesuai kecepatan belajar siswa',
        'Mentor dokter spesialis yang dipilihkan sesuai target kampus anak',
        'Fleksibilitas jadwal belajar (bisa offline di rumah atau privat Zoom)',
        'Bedah total mata pelajaran terlemah (Biologi Molekuler/Matematika)',
        'Konseling langsung eksklusif bersama dokter mentor kapan saja',
        'Termasuk seluruh modul eksklusif & bank soal 10 tahun terakhir',
      ],
      ctaLabel: 'Kustomisasi Sesi Privat',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span>Transparansi Investasi Pendidikan Dokter</span>
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface font-extrabold tracking-tight">
            Pilihan Program &amp; Biaya Investasi
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Pilih ekosistem pendampingan yang selaras dengan jenjang kelas dan target fakultas kedokteran impian anak Anda. Seluruh program didukung skema cicilan resmi bebas bunga.
          </p>

          {/* Billing Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-surface-container-low border border-primary-fixed/40">
              <button
                onClick={() => setBillingPeriod('lunas')}
                className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                  billingPeriod === 'lunas'
                    ? 'bg-primary text-on-primary font-bold shadow-md'
                    : 'text-on-surface-variant font-semibold hover:text-on-surface'
                }`}
              >
                Pembayaran Lunas (Diskon 10%)
              </button>
              <button
                onClick={() => setBillingPeriod('cicilan')}
                className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                  billingPeriod === 'cicilan'
                    ? 'bg-primary text-on-primary font-bold shadow-md'
                    : 'text-on-surface-variant font-semibold hover:text-on-surface'
                }`}
              >
                Skema Cicilan Bertahap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                prog.popular
                  ? 'bg-surface-container-lowest/95 shadow-xl border-primary ring-2 ring-primary/20 hover:-translate-y-1'
                  : 'bg-surface-container-lowest/80 backdrop-blur-xl shadow-sm hover:shadow-lg hover:-translate-y-1 border-surface-container-high/60'
              }`}
            >
              {prog.popular && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm">
                  {prog.badge}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  {!prog.popular && (
                    <span className="inline-block px-3 py-0.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md font-semibold mb-2">
                      {prog.badge}
                    </span>
                  )}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                    {prog.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-outline mt-1">
                    {prog.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-surface-container-low space-y-1 border border-surface-container-high/40">
                  <span className="font-label-md text-label-md text-outline">Investasi Pendidikan</span>
                  <div className="font-headline-sm text-headline-sm text-primary font-extrabold">
                    {billingPeriod === 'lunas' ? prog.priceLunas : prog.priceCicil}
                  </div>
                  <div className="font-body-sm text-body-sm text-outline">
                    {prog.duration}
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">group</span>
                    <span>{prog.ratio}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">school</span>
                    <span>{prog.targetGrade}</span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="pt-2 border-t border-surface-container-high/40 space-y-2.5">
                  <span className="font-label-md text-label-md text-on-surface font-bold block uppercase tracking-wider">
                    Fasilitas Termasuk:
                  </span>
                  <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    {prog.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-surface-container-high/40">
                <button
                  onClick={() => onOpenConsultation(`Daftar Program: ${prog.title}`)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-label-lg text-label-lg font-bold transition-all text-center cursor-pointer ${
                    prog.popular
                      ? 'bg-primary text-on-primary shadow-md hover:bg-primary-container hover:shadow-lg'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {prog.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Guarantee Strip */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="rounded-3xl bg-surface-container-lowest/90 backdrop-blur-xl p-8 lg:p-12 shadow-md border border-primary-fixed/40">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Jaminan Kualitas &amp; Keamanan Transaksi
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Setiap pendaftaran dilindungi oleh kontrak resmi berbadan hukum PT Lavender Bina Cendikia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-low space-y-3 border border-surface-container-high/40">
              <span className="material-symbols-outlined text-primary text-3xl">contract</span>
              <h4 className="font-label-lg text-label-lg text-on-surface font-bold">MoU Bergaransi Mutu</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Surat perjanjian tertulis mencantumkan hak siswa atas modul, sesi bimbingan 1-on-1, serta pendampingan sampai pengumuman mandiri terakhir selesai.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low space-y-3 border border-surface-container-high/40">
              <span className="material-symbols-outlined text-secondary text-3xl">credit_card</span>
              <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Cicilan 0% Bank Mitra</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Bekerjasama dengan BCA, Mandiri, BNI, dan CIMB Niaga untuk opsi cicilan hingga 12 bulan bebas bunga.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low space-y-3 border border-surface-container-high/40">
              <span className="material-symbols-outlined text-tertiary text-3xl">restart_alt</span>
              <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Jaminan Belajar Ulang</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Siswa Supercamp yang belum lolos FK di tahun pertama berhak mengikuti program tahun berikutnya dengan subsidi biaya hingga 60%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 mb-8">
        <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-container p-8 lg:p-12 text-on-primary shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-headline-lg text-headline-lg font-bold text-white">
              Butuh Penjelasan Paket Lebih Detail?
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed max-w-xl">
              Hubungi staf administrasi kami untuk perincian invoice, jadwal kelas terdekat, dan jadwal kunjungan hotel Supercamp.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Pertanyaan Biaya & Program')}
            className="shrink-0 px-8 py-4 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-surface-container-low transition-all cursor-pointer hover:scale-105"
          >
            Hubungi Customer Care via WA
          </button>
        </div>
      </section>
    </div>
  );
};
