import { Briefcase, GraduationCap, Users, Heart, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import faniPhoto from "@/assets/komisaris/fani-ruusul.png";

const KomisarisUtamaDetail = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#1E3A8A] pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-primary-foreground/60 mb-8">
            <Link to="/" className="hover:text-gold transition-colors">Beranda</Link>
            <span>&gt;</span>
            <Link to="/profil/tentang-kami" className="hover:text-gold transition-colors">Profil</Link>
            <span>&gt;</span>
            <Link to="/profil/struktur-manajemen" className="hover:text-gold transition-colors">Struktur Manajemen</Link>
            <span>&gt;</span>
            <span className="text-primary-foreground">Komisaris Utama</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: sidebar card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center flex-shrink-0 w-64">
              <div className="text-primary-foreground/60 text-xs mb-3">Profil Kepemimpinan</div>
              <div className="w-40 h-40 rounded-xl mx-auto mb-4 overflow-hidden">
                <img src={faniPhoto} alt="Fani Ruusul Masail" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-primary-foreground font-bold text-sm">Fani Ruusul Masail, S.H., M.H.</h4>
              <Link
                to="/profil/struktur-manajemen"
                className="inline-block mt-3 border border-primary-foreground/30 text-primary-foreground text-xs px-4 py-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                ← Komisaris Utama
              </Link>
            </div>

            {/* Right: main info */}
            <div className="text-primary-foreground flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-1">
                Fani Ruusul Masail, S.H., M.H.
              </h2>
              <span className="text-primary-foreground/70 text-sm font-medium">Komisaris Utama</span>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mt-4 max-w-xl">
                Fani Ruusul Masail merupakan profesional hukum dengan credibilitas tinggi dalam bidang tata kelola korporat dan pemerintahan masyarakat. Dengan latar belakang pendidikan Sarjana Hukum (S.H.) dan Magister Hukum (M.H.), beliau aktif memberikan pendampingan ahli yang integral di bidang strategis, tata kelola pemerintahan, peradilan, hingga advokasi terkait hukum dan direksi.
              </p>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,80 C360,120 720,0 1440,80 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Jabatan & Pengalaman Profesional */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center">
              <Briefcase size={18} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Jabatan & Pengalaman Profesional</h3>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>Fani Ruusul Masail saat ini menjabat sebagai Tenaga Ahli legislatif di DPRI RI. Ia menjadi pihak yang berperan strategis dalam menyalurkan kebijakan publik, layanan kesejahteraan masyarakat, kesetaraan, dan keberimbangan. Peran ini membantunya memperoleh keahlian beliau serta memperdalam kapabilitas beliau dalam interaksi dengan berbagai lapisan masyarakat.</p>
            <p>Secara kolaboratif, beliau juga berperan sebagai Ketua Lembaga Bantuan Hukum (LBH) Al-Aqidah Jakarta, beliau aktif memberitakan tindakan terkait hukum kepada masyarakat yang membutuhkan keadilan, termasuk Konsultasi, advokasi keadilan, dan bantuan litigasi. Peran ini menambahkan kredibilitas beliau dalam ketatanegaraan dan penegakan hak masyarakat.</p>
            <p>Dalam bidang akademik, Fani terlibat sebagai Dosen di Fakulti Al Hikmah yang berbasis di Jakarta sejak 2017, di mana beliau membagikan pengetahuan secara pragmatis serta kelas kolektif dalam sesi ilmiah. Kolaborasi ilmiah (Studi Kasus) | dengan Yayasan Pendidikan Al-Quraiisi memperkuat implementasi dan penyebaran riset untuk ranah Islam Indonesia melalui pengembangan kurikulum dan pendalaman teori kritis.</p>
            <p>Pengalaman beliau juga mencakup keanggotaan Lembaga Dakwah Pers (LDP) dibawah Badan Urusan Umama, di mana beliau aktif dalam publikasi program pembangunan masyarakat dan penyebarluasan informasi berbasis Islam sosial-edukatif. Kegiatan Rachmat Mesjid Jami, beliau berperan secara religius dan publik di tingkat organisasi yang mengadopsi ketahanan kerumunan dalam berbagai kegiatan sosial keramaian keagamaan.</p>
            <p>Pada Ramadhan 2024, beliau juga mengikuti International di Pakistan, menunjukkan gagasan global islami internasional dari isu-tisu kebangsaan dan memperkenalkan ekspresi kolektif terkait bidang Islam atas dasar taaruf, qaridul dan kolaborasi bangsa-bangsa global.</p>
          </div>
        </div>
      </section>

      {/* Latar Belakang Pendidikan */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center">
              <GraduationCap size={18} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Latar Belakang Pendidikan</h3>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>Fani menempuh pendidikan tinggi di bidang vakum dengan disiplin yang memperluas Beliau memiliki gelar Sarjana Hukum (S.H.) melalui fokus pada Hukum Tata Negara, elemen utama untuk penguasaan aspek hukum, otorisasi serta akulturasi kompetensi berdasarkan asas-asas hukum nasional.</p>
            <p>Ia juga memeroleh gelar Magister Hukum (M.H.) yang memperdalami kerangka berdasar analisis hukum dan peraturan lembaga hingga regulasi kelola pada Perusahaan (Hukum Perdata/Bisnis) dan Hukum Tata Negara/Governance Sistem. Selain Hukum, Fani juga gelar AKTA-4 (Sertifikat Pendidikan Strata Satu) yang memperluas kegiatan belajar mengajar.</p>
          </div>
        </div>
      </section>

      {/* Organisasi & Kepemimpinan */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center">
              <Users size={18} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Organisasi & Kepemimpinan</h3>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>Dari masa muda, Fani telah teruji memoderasi dan berpartisipasi dalam organisasi di berbagai level. Ini termasuk menjadi Wakil Ketua FPII, yang termasuk organisasi kemasyarakatan, serta berbasis rohani religi di bidang Hukum.</p>
            <p>Memegang Ketua Indonesia Taqwim Islamic Center (ITIC/C), sebuah refleksi strategi yang memperkenalkan nilai-nilai masyarakat halaqah ke Indonesia dengan pendekatan yang modern, berisi kreatif, dan berbobot religi/dakwah. Interaksi ini menunjukkan perhatian beliau yang intensif terhadap peningkatan kualitas Masyarakat, dan berbagai aspek sosial-ekonomi.</p>
            <p>Kepemimpinan beliau sebagai masyarakat bisa menyokong bersama di PT Samasta Nusantara, di mana beliau menghadirkan perspektif hukum/governansi yang solid dari hasil pengalaman dan dedikasinya secara konsisten untuk memenuhi standar tertinggi etika dan korporat di dalam perusahaan.</p>
          </div>
        </div>
      </section>

      {/* Kontribusi & Nilai yang Dibawa */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center">
              <Heart size={18} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Kontribusi & Nilai yang Dibawa</h3>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>Sebagai Komisaris Utama PT Samasta Nusantara Digdaya, Fani Ruusul Masail membawa dari karirnya aspek signifikan yang mencakup: tata kelola multidimensional yang komprehensif. Pengetahuan beliau sebagai advokat dan DPR RI menambahkan lapisan unik strategi organisasi dalam konsultasi regulasi perusahaan.</p>
            <p>Keahlian hukum korporat secara luas tidak dapat diragukan, meliputi hukum perdata dan corporate governance. Pendidikan ini akan mendorong menuntun serta meningkatkan struktur perusahaan di berbagai aspek terkait governance regulasi dan kerangka korporat seperti due diligence perusahaan untuk kontrak, nego, serta perumusan risiko dan pemenuhan standar.</p>
            <p>Jaringan strategis yang dibangun di dunia usaha berkaitan dengan perannya, semisal mediasi, menjamin relasi, dan memajukan koneksi strategis yang bermanfaat; serta memperkenalkan efek peradilan hukum bisnis, governance di perusahaan, silaturahmi dan sharing bisnis forum.</p>
            <p>Integritas, Pendidikan, dan dari beliau ini berhasil me-riset buku yang diikuti yang pernah diterbitkan berbagai karya untuk kompetensi beliau sendiri maupun pemberdayaan masyarakat.</p>
            <p>Dengan pemahaman hukum terhadap legalitas dan relasi fungsional pada tata kelola, dan sebagai ketua berbagai inisiatif sosial untuk PT Samasta ini, Fani Ruusul berperan sangat penting memberikan kerangka perspektif strategis. Ia menoktahkan governance yang kuat berdasarkan kreativitas serta bukti-bukti yang benar-benar mendukung tata kelola perusahaan.</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-8">Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-muted rounded-xl p-5 text-left">
              <div className="flex items-center gap-2 mb-2">
                <Target size={18} className="text-[#1E3A8A]" />
                <h4 className="font-bold text-foreground text-sm">Posisi Strategis</h4>
              </div>
              <p className="text-xs text-muted-foreground">Tenaga Ahli Anggota DPR RI, serta Ketua LBH Al-Aqidah di Fakulti Al Hikmah & Taman Al Quranisi</p>
            </div>
            <div className="bg-muted rounded-xl p-5 text-left">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={18} className="text-[#1E3A8A]" />
                <h4 className="font-bold text-foreground text-sm">Pendidikan</h4>
              </div>
              <p className="text-xs text-muted-foreground">Magister atau Hukum (M.H.) Sarjana Hukum (S.H.), Sertifikat AKTA-IV</p>
            </div>
            <div className="bg-muted rounded-xl p-5 text-left">
              <div className="flex items-center gap-2 mb-2">
                <Users size={18} className="text-[#1E3A8A]" />
                <h4 className="font-bold text-foreground text-sm">Kepemimpinan Organisasi</h4>
              </div>
              <p className="text-xs text-muted-foreground">Peran strategis di berbagai perkumpulan Internasional, Nasional dan Asosiasi (FPII/ITIC/LDP)</p>
            </div>
            <div className="bg-muted rounded-xl p-5 text-left">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={18} className="text-[#1E3A8A]" />
                <h4 className="font-bold text-foreground text-sm">Keahlian</h4>
              </div>
              <p className="text-xs text-muted-foreground">Hukum Korporat, Tata Kelola Pemerintahan, Dakwah Internasional, Advokasi Masyarakat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Pelajari Lebih Lanjut tentang Tim Kami
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Lihat profil lengkap Dewan Komisaris dan Direksi PT Samasta Nusantara Digdaya
          </p>
          <Link
            to="/profil/struktur-manajemen"
            className="inline-block px-6 py-2.5 bg-[#2563EB] text-primary-foreground text-sm font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors"
          >
            ← Kembali ke Struktur Manajemen
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KomisarisUtamaDetail;
