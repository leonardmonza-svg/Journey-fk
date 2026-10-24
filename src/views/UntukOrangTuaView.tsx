import React, { useState } from 'react';
import { PageTab } from '../types';
import { ORANG_TUA_FAQS } from '../data/faqData';

interface UntukOrangTuaViewProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const UntukOrangTuaView: React.FC<UntukOrangTuaViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  // Simulator State
  const [selectedCampus, setSelectedCampus] = useState<'UI' | 'UGM' | 'UNAIR' | 'UNDIP' | 'UNPAD' | 'PTS'>('UI');
  const [selectedPathway, setSelectedPathway] = useState<'SNBT' | 'Mandiri' | 'IUP'>('SNBT');
  const [selectedGroup, setSelectedGroup] = useState<'Menengah' | 'Tinggi'>('Menengah');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Cost calculation matrix
  const calculateCost = () => {
    let ukt = 12500000;
    let ipi = 0;
    let monthlyCost = 3500000;

    if (selectedCampus === 'UI') {
      if (selectedPathway === 'SNBT') {
        ukt = selectedGroup === 'Menengah' ? 12500000 : 20000000;
        ipi = 0;
        monthlyCost = 4500000;
      } else if (selectedPathway === 'Mandiri') {
        ukt = selectedGroup === 'Menengah' ? 18000000 : 25000000;
        ipi = selectedGroup === 'Menengah' ? 100000000 : 160000000;
        monthlyCost = 4500000;
      } else {
        // IUP
        ukt = 52000000;
        ipi = 125000000;
        monthlyCost = 5500000;
      }
    } else if (selectedCampus === 'UGM') {
      if (selectedPathway === 'SNBT') {
        ukt = selectedGroup === 'Menengah' ? 11000000 : 19000000;
        ipi = 0;
        monthlyCost = 3000000;
      } else if (selectedPathway === 'Mandiri') {
        ukt = selectedGroup === 'Menengah' ? 16500000 : 24000000;
        ipi = selectedGroup === 'Menengah' ? 85000000 : 140000000;
        monthlyCost = 3000000;
      } else {
        ukt = 45000000;
        ipi = 110000000;
        monthlyCost = 4000000;
      }
    } else if (selectedCampus === 'UNAIR' || selectedCampus === 'UNDIP' || selectedCampus === 'UNPAD') {
      if (selectedPathway === 'SNBT') {
        ukt = selectedGroup === 'Menengah' ? 10000000 : 18000000;
        ipi = 0;
        monthlyCost = 3200000;
      } else if (selectedPathway === 'Mandiri') {
        ukt = selectedGroup === 'Menengah' ? 15000000 : 22000000;
        ipi = selectedGroup === 'Menengah' ? 75000000 : 130000000;
        monthlyCost = 3200000;
      } else {
        ukt = 42000000;
        ipi = 100000000;
        monthlyCost = 4200000;
      }
    } else {
      // PTS Unggulan (Trisakti, Maranatha, Yarsi, dll)
      ukt = 25000000;
      ipi = 220000000;
      monthlyCost = 4000000;
    }

    // 12 semesters (academic 7-8 + koas 3-4 = approx 11-12)
    const totalSemesters = 11;
    const totalTuition = ukt * totalSemesters + ipi;
    const totalLiving = monthlyCost * 60; // 5 years living

    return {
      ukt,
      ipi,
      monthlyCost,
      totalEstimate: totalTuition + totalLiving,
    };
  };

  const cost = calculateCost();

  const formatIDR = (num: number) => {
    return 'Rp ' + num.toLocaleString('id-ID');
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION: Empathy, Calm, Reassurance */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-surface-container-lowest/90 via-surface-container-low/80 to-primary-fixed/20 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(99,14,212,0.08)] border border-primary-fixed/40">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/2 -bottom-24 w-96 h-96 rounded-full bg-tertiary-fixed/25 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-surface-container-lowest/90 shadow-xs border border-primary-fixed/40">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span className="font-label-md text-label-md text-primary font-bold tracking-wide uppercase">
                  🤝 Ruang Diskusi Terbuka Khusus Orang Tua
                </span>
              </div>

              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight">
                Mendampingi Impian Dokter Anak Anda{' '}
                <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                  Tanpa Rasa Waswas.
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Informasi transparan seputar estimasi biaya kuliah kedokteran, mitigasi risiko kegagalan, dan cara memantau progres akademik anak setiap saat bersama tim dokter konsultan Lavender.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#kalkulator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-lg hover:shadow-xl hover:bg-primary-container transition-all hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                  <span>Simulasi Biaya FK 2025</span>
                </a>
                <button
                  onClick={() => onOpenConsultation('Konsultasi Khusus Orang Tua Calon Dokter')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-xs hover:shadow-md hover:bg-surface-container-low transition-all cursor-pointer border border-primary-fixed/50"
                >
                  <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  <span>Hubungi Education Consultant</span>
                </button>
              </div>

              {/* Trust Badges for Parents */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-2 bg-surface-container-lowest/60 rounded-2xl p-4 backdrop-blur-xs border border-surface-container-high/40">
                <div>
                  <div className="font-headline-sm text-headline-sm text-primary font-bold">14+ Tahun</div>
                  <div className="font-body-sm text-body-sm text-outline">Pengalaman Lolos FK</div>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-primary font-bold">94.2%</div>
                  <div className="font-body-sm text-body-sm text-outline">Kepuasan Orang Tua</div>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-primary font-bold">1-on-1</div>
                  <div className="font-body-sm text-body-sm text-outline">Audit Finansial &amp; Minat</div>
                </div>
              </div>
            </div>

            {/* Right Visual Showcase: Ethereal Parent & Mentor Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest border border-primary-fixed/40">
                <img
                  className="w-full h-full object-cover"
                  alt="Konsultasi Orang Tua bersama Dokter Mentor"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4PVIfHylwNmcqff9CuBLa0M0ZKadQdeiKjX2SqNqppcxWrJ8IoBR7ZDe5QqqMhdJ8Ya3N6zj8HpkvjauPtN0ZIt6xYJj1Q0n2KJnHCZ5LPkaCOSqK_F72WIx-g_Ppr8r_qZiaKGE2HgTBorf-n8D7kMxXkezbmqRVnH0t0_AvqluT4dfp9Akj_CE3geW6CI16iVXQLwC911GiG-FT8QoJBk_5m-l7fH1Erm8T0FQ2N-iRa6bjSOs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>

                {/* Floating Live Status Overlay */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md shadow-lg flex items-center justify-between border border-surface-container-high/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">verified_user</span>
                    </div>
                    <div>
                      <div className="font-label-lg text-label-lg text-on-surface font-bold">Transparansi 100%</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">Data resmi daya tampung &amp; UKT 2025</div>
                    </div>
                  </div>
                  <span className="font-label-md text-label-md px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-bold">
                    Terverifikasi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PANDUAN TRANSPARANSI BIAYA (UKT & IPI) */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12" id="kalkulator">
        <div className="flex flex-col space-y-4 mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md font-bold">
            <span className="material-symbols-outlined text-[16px]">payments</span>
            <span>Aspek Finansial &amp; Perencanaan Dana</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Panduan Transparansi Biaya Masuk FK
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            &quot;Biaya kuliah kedokteran harus direncanakan secara realistis bersamaan dengan pemilihan kampus.&quot; Hindari kepanikan saat pengumuman dengan memahami struktur UKT dan IPI di setiap jalur.
          </p>
        </div>

        {/* Comparison Grid of 3 Major Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* SNBP / SNBT Card */}
          <div className="rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
                  Jalur Nasional
                </span>
                <span className="material-symbols-outlined text-primary text-[24px]">school</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                SNBP &amp; SNBT UTBK
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Jalur paling terjangkau bagi calon mahasiswa berprestasi dan peraih skor tinggi.
              </p>
              <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm text-outline">Uang Pangkal / IPI:</span>
                  <span className="font-label-lg text-label-lg text-primary font-bold">Rp 0 (Tanpa IPI)</span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm text-outline">UKT Semesteran:</span>
                  <span className="font-label-md text-label-md font-bold">Rp 500rb – Rp 25jt</span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm text-outline">Sistem UKT:</span>
                  <span className="font-label-md text-label-md font-semibold">Golongan 1 s.d 8</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                *Penetapan UKT disesuaikan dengan slip gaji &amp; verifikasi kondisi riil keluarga oleh pihak rektorat.
              </p>
            </div>
            <div className="pt-6">
              <div className="w-full py-2.5 px-4 rounded-xl bg-surface-container text-center font-label-md text-label-md text-on-surface-variant">
                Target Nilai UTBK: 710+
              </div>
            </div>
          </div>

          {/* Jalur Mandiri PTN Card */}
          <div className="relative rounded-3xl bg-surface-container-lowest/90 backdrop-blur-xl p-8 shadow-xl flex flex-col justify-between border border-primary/30">
            <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold shadow-md">
              Paling Sering Dipilih
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold">
                  Jalur Mandiri PTN
                </span>
                <span className="material-symbols-outlined text-primary text-[24px]">account_balance</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                SIMAK UI / UTUL UGM / SMUP
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Ujian tertulis mandiri PTN unggulan dengan komponen Iuran Pengembangan Institusi.
              </p>
              <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm text-outline">Uang Pangkal / IPI:</span>
                  <span className="font-label-lg text-label-lg text-primary font-bold">Rp 50jt – Rp 250jt</span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm text-outline">UKT Semesteran:</span>
                  <span className="font-label-md text-label-md font-bold">Rp 15jt – Rp 35jt</span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm text-outline">Pilihan IPI:</span>
                  <span className="font-label-md text-label-md font-semibold">Tersedia 3-5 Level</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                *IPI dibayar hanya 1 kali di awal registrasi semester 1, dapat diajukan skema angsuran institusional.
              </p>
            </div>
            <div className="pt-6">
              <div className="w-full py-2.5 px-4 rounded-xl bg-primary-fixed/50 text-center font-label-md text-label-md text-on-primary-fixed font-bold">
                Lavender Menyediakan Pendampingan Strategi Skor
              </div>
            </div>
          </div>

          {/* IUP / International Card */}
          <div className="rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md text-label-md font-bold">
                  Kelas Internasional
                </span>
                <span className="material-symbols-outlined text-primary text-[24px]">public</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                IUP Medicine (UGM/UI/Unair)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Kurikulum berbahasa Inggris penuh dengan peluang double degree/elective abroad.
              </p>
              <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm text-outline">Registration Fee:</span>
                  <span className="font-label-lg text-label-lg text-primary font-bold">Rp 100jt – Rp 250jt</span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm text-outline">Tuition Fee:</span>
                  <span className="font-label-md text-label-md font-bold">Rp 45jt – Rp 65jt/sem</span>
                </div>
                <div className="flex justify-between items-center text-on-surface">
                  <span className="font-body-sm text-body-sm text-outline">Persyaratan:</span>
                  <span className="font-label-md text-label-md font-semibold">IELTS 6.0+ &amp; MMPI</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                *Cocok bagi keluarga yang telah merencanakan studi lanjut residensi spesialis di luar negeri.
              </p>
            </div>
            <div className="pt-6">
              <div className="w-full py-2.5 px-4 rounded-xl bg-surface-container text-center font-label-md text-label-md text-on-surface-variant">
                Seleksi: GMST / Acept / MMI
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Cost Simulation Calculator Widget */}
        <div className="rounded-3xl bg-surface-container-low/95 p-6 sm:p-8 backdrop-blur-md border border-primary-fixed/40 space-y-6">
          <div className="space-y-2">
            <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Simulasi Budget Pendidikan FK Interaktif
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Atur parameter di bawah ini untuk melihat estimasi rincian biaya kuliah sampai lulus profesi dokter (6 tahun):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Campus Selector */}
            <div>
              <label className="font-label-md text-label-md text-on-surface font-bold mb-1.5 block">
                Target Kampus
              </label>
              <select
                className="w-full p-3 rounded-xl bg-surface-container-lowest font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                value={selectedCampus}
                onChange={(e) => setSelectedCampus(e.target.value as any)}
              >
                <option value="UI">FK Universitas Indonesia (UI)</option>
                <option value="UGM">FK Universitas Gadjah Mada (UGM)</option>
                <option value="UNAIR">FK Universitas Airlangga (UNAIR)</option>
                <option value="UNDIP">FK Universitas Diponegoro (UNDIP)</option>
                <option value="UNPAD">FK Universitas Padjadjaran (UNPAD)</option>
                <option value="PTS">FK Swasta Akreditasi Unggul</option>
              </select>
            </div>

            {/* Pathway Selector */}
            <div>
              <label className="font-label-md text-label-md text-on-surface font-bold mb-1.5 block">
                Jalur Rencana
              </label>
              <select
                className="w-full p-3 rounded-xl bg-surface-container-lowest font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                value={selectedPathway}
                onChange={(e) => setSelectedPathway(e.target.value as any)}
              >
                <option value="SNBT">SNBP / SNBT (Tanpa Uang Pangkal)</option>
                <option value="Mandiri">Seleksi Mandiri (UKT + IPI)</option>
                <option value="IUP">IUP Medicine (International Class)</option>
              </select>
            </div>

            {/* Income tier selector */}
            <div>
              <label className="font-label-md text-label-md text-on-surface font-bold mb-1.5 block">
                Kategori UKT Keluarga
              </label>
              <select
                className="w-full p-3 rounded-xl bg-surface-container-lowest font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value as any)}
              >
                <option value="Menengah">Kelompok Menengah (UKT Gol 4-6)</option>
                <option value="Tinggi">Kelompok Mandiri Atas (UKT Gol 7-8)</option>
              </select>
            </div>
          </div>

          {/* Calculator Output Display */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container-high/60">
            <div>
              <span className="font-label-md text-label-md text-outline block">Estimasi UKT/Semester</span>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {formatIDR(cost.ukt)}
              </span>
            </div>
            <div>
              <span className="font-label-md text-label-md text-outline block">Uang Pangkal (IPI/Reg)</span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                {formatIDR(cost.ipi)}
              </span>
            </div>
            <div>
              <span className="font-label-md text-label-md text-outline block">Biaya Hidup &amp; Buku/Bln</span>
              <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                {formatIDR(cost.monthlyCost)}
              </span>
            </div>
            <div>
              <span className="font-label-md text-label-md text-outline block">Total Est. 6 Thn (Inc Koas)</span>
              <span className="font-headline-sm text-headline-sm text-primary font-extrabold">
                {formatIDR(cost.totalEstimate)}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="font-body-sm text-body-sm text-outline">
              *Estimasi didasarkan pada ketetapan SK Rektor masing-masing PTN tahun ajaran 2024/2025.
            </p>
            <button
              onClick={() => onOpenConsultation(`Kalkulasi Biaya FK ${selectedCampus} (${selectedPathway})`)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">download_for_offline</span>
              <span>Kirim Rincian Lengkap via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: MITIGASI RISIKO & PROTOKOL PLAN B & C */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="rounded-[2.5rem] bg-surface-container-lowest/90 backdrop-blur-xl p-8 sm:p-12 shadow-sm border border-surface-container-high/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Context & Reality */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[16px]">warning</span>
                <span>Rasionalisasi Peluang Masuk</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight">
                Mengapa 70% Siswa Gagal Masuk Kedokteran?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Penyebab utama kegagalan bukanlah kurang pintar, melainkan <strong>terjebak pada ego pilihan tunggal</strong> tanpa strategi proteksi. Banyak siswa hanya memilih FK UI dan FK UGM tanpa menghitung rasio persaingan 1:120.
              </p>
              <div className="p-5 rounded-2xl bg-surface-container-low space-y-3 border border-surface-container-high/40">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[28px]">shield</span>
                  <div className="font-label-lg text-label-lg text-on-surface font-bold">Filosofi Proteksi Lavender</div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  &quot;Kami menolak membiarkan putra-putri Anda kehilangan satu tahun berharga hanya karena kekeliruan memetakan peluang cadangan.&quot;
                </p>
              </div>
            </div>

            {/* Right: The 3-Tier Mitigation Protocol (Plan A, B, C) */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {/* Plan A */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-md flex items-start gap-4 border border-primary/20">
                <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center shrink-0 font-headline-sm text-headline-sm font-bold shadow-md">
                  A
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Plan A: Dream Medical Faculty
                    </h4>
                    <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold">
                      Prioritas 1
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Target impian tertinggi seperti <strong>FK UI, FK UGM, FK Unair, atau FK Unpad</strong>. Dikejar melalui pemaksimalan nilai UTBK (skor 720+) dan persiapan materi ujian mandiri tingkat lanjut.
                  </p>
                </div>
              </div>

              {/* Plan B */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-md flex items-start gap-4 border border-secondary/20">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 font-headline-sm text-headline-sm font-bold shadow-md">
                  B
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Plan B: Regional University with High Acceptance Ratio
                    </h4>
                    <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold">
                      Jaring Pengaman PTN
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Fakultas Kedokteran PTN Terakreditasi Unggul dengan peluang matematis lebih rasional: <strong>FK Undip, UNS, UB, Unhas, atau Unsoed</strong>. Kualitas fasilitas dan RS Pendidikan setara.
                  </p>
                </div>
              </div>

              {/* Plan C */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-md flex items-start gap-4 border border-tertiary/20">
                <div className="w-12 h-12 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0 font-headline-sm text-headline-sm font-bold shadow-md">
                  C
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Plan C: Top Private FK &amp; Biomedical Alternative
                    </h4>
                    <span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-bold">
                      Zero-Gap Year
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    FK Swasta Berpredikat Unggul (misal <strong>FK Trisakti, FK UPH, FK YARSI</strong>) atau jurusan penunjang pra-medis (Sains Biomedis, Farmasi Klinik) agar anak tetap melangkah maju tanpa trauma tahun jeda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CARA ORANG TUA MEMANTAU PROGRES ANAK */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md font-bold">
            <span className="material-symbols-outlined text-[16px]">visibility</span>
            <span>Ketenangan Pikiran Anda</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Cara Orang Tua Memantau Progres Belajar Anak
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Anda tidak perlu menebak-nebak kondisi belajar anak. Sistem pelaporan Lavender dirancang aktif, terbuka, dan rutin menjembatani komunikasi keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: WhatsApp Report */}
          <div className="rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs flex flex-col space-y-6 border border-surface-container-high/40">
            <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[30px]">chat</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Laporan WhatsApp Berkala
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Setiap akhir pekan, mentor dokter mengirimkan ringkasan absensi, ketuntasan bab biologi/kimia, serta skor tryout langsung ke ponsel WhatsApp ayah dan ibu.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-low text-xs text-on-surface font-mono">
              &quot;Pekan ini Ananda Rayhan tuntas 12 modul TPS, akurasi penalaran klinis naik +18%.&quot;
            </div>
          </div>

          {/* Feature 2: Tripartite Consultation */}
          <div className="rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs flex flex-col space-y-6 border border-surface-container-high/40">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined text-[30px]">groups</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Konsultasi Triwulan 3 Arah
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Pertemuan tatap muka privat (Zoom atau di Headquarter Lavender) yang mempertemukan Orang Tua, Siswa, dan Mentor Dokter guna melaraskan ekspektasi dan target kampus.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-low text-xs text-on-surface font-mono">
              &quot;Fokus pembahasan: evaluasi tryout ke-4 &amp; finalisasi pilihan kampus SNBT.&quot;
            </div>
          </div>

          {/* Feature 3: Realtime Portal */}
          <div className="rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl p-8 shadow-xs flex flex-col space-y-6 border border-surface-container-high/40">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[30px]">devices</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Portal Pantau Realtime
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Akun orang tua dengan akses 24/7 untuk melihat kurva kenaikan skor UTBK anak, ranking nasional sesama pejuang FK, dan riwayat presensi sesi drilling soal.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-low text-xs text-on-surface font-mono">
              &quot;Akses via web portal atau aplikasi mobile: aman, akurat, dan transparan.&quot;
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TANYA JAWAB ORANG TUA (ACCORDION FAQ) */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md font-bold">
            <span className="material-symbols-outlined text-[16px]">help</span>
            <span>Pertanyaan Kerap Ditanyakan</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Tanya Jawab Khusus Orang Tua
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Jawaban lugas dan jujur terkait beban mental siswa, skema pembiayaan bimbingan, serta strategi waktu.
          </p>
        </div>

        <div className="space-y-4">
          {ORANG_TUA_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md shadow-xs p-6 border border-surface-container-high/40"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center font-headline-sm text-headline-sm text-on-surface font-bold cursor-pointer text-left gap-4"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: CTA AKHIR KHUSUS ORANG TUA */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 mb-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-primary to-primary-container text-on-primary p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div className="absolute left-10 -top-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-on-primary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span>Konseling Eksklusif &amp; Rahasia</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-white tracking-tight leading-tight">
                Diskusikan Proyeksi Masuk FK untuk Putra/Putri Anda.
              </h2>
              <p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed max-w-2xl">
                Satu sesi diskusi santai bersama Senior Advisor Lavender dapat menghindarkan keluarga Anda dari salah strategi dan investasi dana yang keliru.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenConsultation('Konsultasi Senior Advisor Khusus Orang Tua')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px]">forum</span>
                <span>WhatsApp Senior Advisor</span>
              </button>
              <span className="font-body-sm text-body-sm text-center text-primary-fixed">
                Layanan gratis konsultasi 30 menit (slot terbatas per hari)
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
