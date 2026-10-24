import React, { useState, useMemo } from 'react';
import { PageTab, Alumni } from '../types';
import { ALUMNI_LIST, CAMPUS_DISTRIBUTION } from '../data/alumniData';

interface AlumniDanBuktiViewProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (topic?: string) => void;
  onSelectAlumni: (alumni: Alumni) => void;
}

export const AlumniDanBuktiView: React.FC<AlumniDanBuktiViewProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectAlumni,
}) => {
  const [selectedCampus, setSelectedCampus] = useState<string>('all');
  const [selectedPathway, setSelectedPathway] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const campusFilters = [
    { id: 'all', label: 'Semua Kampus' },
    { id: 'UI', label: 'FK UI' },
    { id: 'UGM', label: 'FK UGM' },
    { id: 'UNAIR', label: 'FK UNAIR' },
    { id: 'UNDIP', label: 'FK UNDIP' },
    { id: 'UNPAD', label: 'FK UNPAD' },
    { id: 'UNS', label: 'FK UNS' },
  ];

  const pathwayFilters = [
    { id: 'all', label: 'Semua Jalur' },
    { id: 'SNBP', label: 'SNBP Rapor' },
    { id: 'SNBT', label: 'SNBT UTBK' },
    { id: 'Mandiri', label: 'Ujian Mandiri' },
    { id: 'IUP', label: "IUP Kelas Int'l" },
  ];

  const filteredAlumni = useMemo(() => {
    return ALUMNI_LIST.filter((item) => {
      // Campus filter
      if (selectedCampus !== 'all' && item.campus !== selectedCampus) {
        return false;
      }
      // Pathway filter
      if (selectedPathway !== 'all' && item.pathway !== selectedPathway) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchSchool = item.school.toLowerCase().includes(query);
        const matchCampus = item.campusName.toLowerCase().includes(query);
        if (!matchName && !matchSchool && !matchCampus) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCampus, selectedPathway, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCampus('all');
    setSelectedPathway('all');
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Subtle Ambient Glow Orbs */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-24 overflow-hidden">
        {/* Top Hero Section */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 pt-4 pb-12">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low/90 shadow-xs backdrop-blur-md border border-primary-fixed/40">
            <span className="text-primary font-label-md text-label-md font-semibold tracking-wide flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base">school</span>
              Jejak Nyata Alumni Bimbel Lavender
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display-hero text-display-hero text-on-surface font-extrabold tracking-tight leading-tight">
            Bukan Janji Manis. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary-container to-secondary">
              Ini Cerita Mereka
            </span>{' '}
            yang Kini Berjas Putih.
          </h1>

          {/* Subheadline */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Ratusan siswa dari Sabang sampai Merauke membuktikan: persiapan terarah sejak awal menghasilkan tiket masuk Fakultas Kedokteran impian tanpa spekulasi.
          </p>

          {/* Metric Pills Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4 max-w-2xl">
            <div className="p-3.5 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs text-center border border-surface-container-high/40">
              <div className="font-headline-sm text-headline-sm text-primary font-bold">420+</div>
              <div className="font-label-md text-label-md text-on-surface-variant font-medium">Dokter Muda Lolos</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs text-center border border-surface-container-high/40">
              <div className="font-headline-sm text-headline-sm text-primary font-bold">94.2%</div>
              <div className="font-label-md text-label-md text-on-surface-variant font-medium">Tingkat Kelulusan FK</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs text-center border border-surface-container-high/40">
              <div className="font-headline-sm text-headline-sm text-primary font-bold">748.5</div>
              <div className="font-label-md text-label-md text-on-surface-variant font-medium">Skor Tertinggi UTBK</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs text-center border border-surface-container-high/40">
              <div className="font-headline-sm text-headline-sm text-primary font-bold">1:1</div>
              <div className="font-label-md text-label-md text-on-surface-variant font-medium">Dokter Mentor Rasio</div>
            </div>
          </div>
        </div>

        {/* Search & Interactive Multi-Filter Bar */}
        <div className="relative z-10 w-full max-w-4xl mx-auto mb-16">
          <div className="bg-surface-container-lowest/90 backdrop-blur-xl p-5 md:p-6 rounded-3xl shadow-xl space-y-4 border border-primary-fixed/40">
            {/* Campus Selector Tabs */}
            <div>
              <div className="flex items-center justify-between pb-2">
                <span className="font-label-md text-label-md text-outline uppercase tracking-wider font-bold">
                  Filter Kampus Tujuan:
                </span>
                <span className="font-label-md text-label-md text-primary font-semibold bg-primary-fixed/50 px-2 py-0.5 rounded-full">
                  {selectedCampus === 'all'
                    ? `Semua Kampus (${filteredAlumni.length})`
                    : `${selectedCampus} (${filteredAlumni.length} siswa)`}
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {campusFilters.map((cf) => {
                  const isActive = selectedCampus === cf.id;
                  return (
                    <button
                      key={cf.id}
                      onClick={() => setSelectedCampus(cf.id)}
                      className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-primary text-on-primary font-semibold shadow-md'
                          : 'font-medium text-on-surface-variant bg-surface-container-low hover:bg-surface-container'
                      }`}
                    >
                      {cf.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pathway Segmented Selector & Search Input */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-surface-container-low w-full sm:w-auto">
                {pathwayFilters.map((pf) => {
                  const isActive = selectedPathway === pf.id;
                  return (
                    <button
                      key={pf.id}
                      onClick={() => setSelectedPathway(pf.id)}
                      className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-xl font-label-md text-label-md transition-all cursor-pointer ${
                        isActive
                          ? 'font-semibold bg-surface-container-lowest text-on-surface shadow-xs'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {pf.label}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">
                  search
                </span>
                <input
                  className="w-full pl-9 pr-3 py-1.5 bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all"
                  placeholder="Cari nama atau asal sekolah..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Stories Bento Grid */}
        {filteredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mb-20">
            {filteredAlumni.map((alumni) => (
              <article
                key={alumni.id}
                onClick={() => onSelectAlumni(alumni)}
                className="group flex flex-col justify-between p-6 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-surface-container-high/40 cursor-pointer text-left"
              >
                <div>
                  {/* Header Card Info */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <img
                        className="w-14 h-14 rounded-2xl object-cover shadow-xs ring-2 ring-primary-fixed"
                        alt={alumni.name}
                        src={alumni.avatarUrl}
                      />
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                          {alumni.name}
                        </h2>
                        <p className="font-body-sm text-body-sm text-outline">
                          {alumni.school}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full font-label-md text-label-md font-semibold shrink-0 ${
                        alumni.pathway === 'SNBP'
                          ? 'bg-secondary-container/40 text-on-secondary-container'
                          : alumni.pathway === 'SNBT'
                          ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant'
                          : alumni.pathway === 'IUP'
                          ? 'bg-primary-fixed text-on-primary-fixed'
                          : 'bg-secondary-fixed text-on-secondary-fixed'
                      }`}
                    >
                      {alumni.pathwayLabel}
                    </span>
                  </div>

                  {/* Highlight Faculty Tag */}
                  <div className="flex items-center gap-2 mb-4 p-2 rounded-xl bg-surface-container-low/70">
                    <span
                      className="material-symbols-outlined text-primary text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface font-bold">
                      Lolos {alumni.campusName}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="font-body-md text-body-md text-on-surface-variant italic mb-6 leading-relaxed">
                    “{alumni.quote}”
                  </blockquote>
                </div>

                {/* Metric Footer */}
                <div className="pt-4 mt-auto bg-surface-container-low/50 rounded-2xl p-3 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-outline">
                      {alumni.metrics.label1}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      {alumni.metrics.val1}
                    </span>
                  </div>
                  <div className="text-right flex flex-col">
                    <span className="font-label-md text-label-md text-outline">
                      {alumni.metrics.label2}
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                      {alumni.metrics.val2}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-surface-container-lowest/70 backdrop-blur-md rounded-3xl mb-20 border border-surface-container-high/40">
            <span className="material-symbols-outlined text-outline text-5xl mb-3">
              manage_search
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Belum Ada Cerita untuk Filter Ini
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mt-1 mb-4">
              Coba atur ulang kriteria kampus atau jalur seleksi untuk melihat riwayat alumni lainnya.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-semibold shadow-md hover:bg-primary-container transition-all cursor-pointer"
            >
              Reset Semua Filter
            </button>
          </div>
        )}

        {/* Section: Transparansi Statistik Kelulusan */}
        <div className="relative z-10 mb-24">
          <div className="bg-surface-container-lowest/85 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-xl border border-primary-fixed/40">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md font-bold mb-3">
                  <span className="material-symbols-outlined text-sm">bar_chart</span>
                  Data Terverifikasi TA 2022 - 2024
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  Rekapitulasi Sebaran Alumni di FK Terbaik
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2">
                  Setiap nama yang kami cantumkan memiliki Nomor Induk Mahasiswa aktif dan bukti tanda kelulusan resmi.
                </p>
              </div>

              <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-2xl border border-surface-container-high/40">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary font-bold text-xl">
                  <span className="material-symbols-outlined">thumb_up</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-none">
                    98.7%
                  </div>
                  <div className="font-label-md text-label-md text-outline mt-1">
                    Kepuasan Orang Tua Siswa
                  </div>
                </div>
              </div>
            </div>

            {/* Custom SVG Chart & Distribution Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Bar Chart Component */}
              <div className="lg:col-span-7 bg-surface-container-low/60 rounded-2xl p-6 border border-surface-container-high/40">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Distribusi Kelulusan per Kampus
                  </span>
                  <span className="font-label-md text-label-md text-outline">
                    Total 287 Alumni Tercatat
                  </span>
                </div>

                <div className="w-full flex flex-col space-y-4">
                  {CAMPUS_DISTRIBUTION.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between font-label-md text-label-md">
                        <span className="font-semibold text-on-surface">
                          {item.campus}
                        </span>
                        <span className={`font-bold ${idx === 5 ? 'text-outline' : 'text-primary'}`}>
                          {item.students} Siswa ({item.percentage}%)
                        </span>
                      </div>
                      <div className="w-full h-3.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            idx === 5
                              ? 'bg-outline opacity-50'
                              : 'bg-gradient-to-r from-primary to-primary-container'
                          }`}
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight Pathway Breakdown Tiles */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs flex flex-col justify-between border border-surface-container-high/40">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2">
                    assignment_turned_in
                  </span>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                      34%
                    </div>
                    <div className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Jalur Rapor SNBP
                    </div>
                    <p className="font-body-sm text-body-sm text-outline mt-1">
                      Dampingan sejak semester 1 SMA dengan audit berkala.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs flex flex-col justify-between border border-surface-container-high/40">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-2">
                    military_tech
                  </span>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                      47%
                    </div>
                    <div className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Jalur UTBK SNBT
                    </div>
                    <p className="font-body-sm text-body-sm text-outline mt-1">
                      Metode drill soal IRT dan latihan kecepatan mental.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs flex flex-col justify-between border border-surface-container-high/40">
                  <span className="material-symbols-outlined text-tertiary text-3xl mb-2">
                    stars
                  </span>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                      12%
                    </div>
                    <div className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Mandiri Ujian Tulis
                    </div>
                    <p className="font-body-sm text-body-sm text-outline mt-1">
                      Spesialisasi SIMAK UI, CBT UGM, &amp; SMUP UNPAD.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs flex flex-col justify-between border border-surface-container-high/40">
                  <span className="material-symbols-outlined text-surface-tint text-3xl mb-2">
                    public
                  </span>
                  <div>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                      7%
                    </div>
                    <div className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Kelas Internasional (IUP)
                    </div>
                    <p className="font-body-sm text-body-sm text-outline mt-1">
                      Bimbingan MMI interview, essay portofolio &amp; SJT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Testimoni Mendalam dari Orang Tua */}
        <div className="relative z-10 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-md text-label-md font-bold mb-3">
              <span className="material-symbols-outlined text-sm">favorite</span>
              Suara Hati Orang Tua
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
              Ketenangan Pikiran Orang Tua Selama 3 Tahun Pendampingan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Perjalanan masuk Kedokteran adalah komitmen keluarga. Kami hadir sebagai mitra terpercaya ayah dan bunda dalam setiap proses penentuan masa depan anak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Parent Card 1 */}
            <div className="p-7 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl shadow-md flex flex-col justify-between border border-surface-container-high/40">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  “Yang paling saya apresiasi adalah <strong>laporan perkembangan mingguan via portal orang tua</strong>. Nilai simulasi, kelemahan konsep materi, hingga kondisi psikologis anak kami diinfokan secara transparan. Tidak ada rasa cemas buta seperti pengalaman di les konvensional.”
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center gap-3.5 bg-surface-container-low/60 p-3.5 rounded-2xl border border-surface-container-high/30">
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-fixed"
                  alt="Ir. Hj. Nurul Widyaningsih"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuXBb6fNbrq7UqRlpmWaBEeJTjFQGZ6gJL_8bgoXwMGbrF1BdRorHQj2CMxTHGMOLX87L8XM5V8njUTO7lAcYJV39V8QiazKKr-svObVdZz5o73IIsvc91QrkaOzJWDCEziB1PJ_ekNug8ARK6iNKmDk8yFhyBQFuegmwVcNrVPxKPaF6uedBNG7skTchcIdnoQwg09-guyto8Pfpk__Cv7GA0Fn_4P-XGIMtH2Eud4ksBKN50VPE"
                />
                <div>
                  <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">
                    Ir. Hj. Nurul Widyaningsih
                  </div>
                  <div className="font-body-sm text-body-sm text-outline">
                    Ibunda Nadira (FK UI 2024)
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Card 2 */}
            <div className="p-7 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl shadow-md flex flex-col justify-between border border-surface-container-high/40">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  “Farhan sempat down drastis ketika tryout pertama nilainya hanya 520. Mentor dokternya tidak menghakimi, justru <strong>mengundang saya berdiskusi untuk memperbaiki jam tidur dan pola belajarnya</strong>. Sentuhan humanis ini luar biasa bernilai bagi mental remaja.”
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center gap-3.5 bg-surface-container-low/60 p-3.5 rounded-2xl border border-surface-container-high/30">
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-fixed"
                  alt="Drs. Hendro Wibowo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVZ790I8wkZJ_kAh4hOmwU8e-pfT_pt9NRkONJ90enC-FPZC3dgsdYTeisN-ypoWt2HB13BaPyHUY-V8X4s8V6BI-6nb5LC0QrsbRPDaB-k0oLe_TaOHCfisd4UckQU9kylMxUI05pO3nFIGrdZUFLQ_T9V7VgrUnMh1v9q-6FEhWXlv4JmHKBz_S8YxGuPJIGVkio4Y4sHlqnSeKF77e71vd0eMVbG7s0tvUeHfIRJj7rT3iV-G4"
                />
                <div>
                  <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">
                    Drs. Hendro Wibowo, M.Si
                  </div>
                  <div className="font-body-sm text-body-sm text-outline">
                    Ayahanda Farhan (FK UGM 2024)
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Card 3 */}
            <div className="p-7 rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl shadow-md flex flex-col justify-between border border-surface-container-high/40">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  “Biaya IUP kedokteran itu bukan investasi kecil. Lavender membantu kami <strong>membedah prospek double degree</strong> dan melatih Keisha hingga lulus wawancara panel dokter internasional dalam sekali coba. Sangat kami rekomendasikan!”
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center gap-3.5 bg-surface-container-low/60 p-3.5 rounded-2xl border border-surface-container-high/30">
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-fixed"
                  alt="Drg. Meutia Farida"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4PVIfHylwNmcqff9CuBLa0M0ZKadQdeiKjX2SqNqppcxWrJ8IoBR7ZDe5QqqMhdJ8Ya3N6zj8HpkvjauPtN0ZIt6xYJj1Q0n2KJnHCZ5LPkaCOSqK_F72WIx-g_Ppr8r_qZiaKGE2HgTBorf-n8D7kMxXkezbmqRVnH0t0_AvqluT4dfp9Akj_CE3geW6CI16iVXQLwC911GiG-FT8QoJBk_5m-l7fH1Erm8T0FQ2N-iRa6bjSOs"
                />
                <div>
                  <div className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">
                    Drg. Meutia Farida
                  </div>
                  <div className="font-body-sm text-body-sm text-outline">
                    Ibunda Keisha (IUP UNAIR 2024)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="text-center bg-gradient-to-r from-primary to-primary-container p-8 lg:p-12 rounded-3xl text-on-primary shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-2">
            <h3 className="font-headline-lg text-headline-lg font-bold text-white">
              Siap Bergabung dengan Jejak Para Calon Dokter?
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed">
              Konsultasikan portofolio nilai rapor anak Anda bersama dokter mentor Lavender secara gratis.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Konsultasi via Halaman Alumni')}
            className="shrink-0 px-8 py-4 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold shadow-md hover:bg-surface-container-low transition-all cursor-pointer hover:scale-105"
          >
            Mulai Diskusi via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};
