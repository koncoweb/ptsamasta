import { Briefcase, GraduationCap, Users, Heart, Target, BookOpen, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ahmadPhoto from "@/assets/komisaris/ahmad-shaleh.png";

const KomisarisDetail = () => {
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
            <span className="text-primary-foreground">Komisaris</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: sidebar card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center flex-shrink-0 w-64">
              <div className="text-primary-foreground/60 text-xs mb-3">Profil Kepemimpinan</div>
              <div className="w-40 h-40 rounded-xl mx-auto mb-4 overflow-hidden">
                <img src={ahmadPhoto} alt="H. Dr. Ahmad Shaleh Amin" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-primary-foreground font-bold text-sm">H. Dr. Ahmad Shaleh Amin, Lc., MA</h4>
              <Link
                to="/profil/struktur-manajemen"
                className="inline-block mt-3 border border-primary-foreground/30 text-primary-foreground text-xs px-4 py-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                ← Komisaris
              </Link>
            </div>

            {/* Right: main info */}
            <div className="text-primary-foreground flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-1">
                H. Dr. Ahmad Shaleh Amin, Lc., MA
              </h2>
              <span className="text-primary-foreground/70 text-sm font-medium">Komisaris</span>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mt-4 max-w-xl">
                H. Dr. Ahmad Shaleh Amin, Lc., MA, adalah seorang tokoh multidisiplin dengan landasan akademik dan pengalaman strategis yang sangat mendalam di ranah pendidikan, keagamaan, dan tata kelola organisasi. Beliau memiliki kapasitas dan jaringan yang luas untuk mendorong kemajuan strategis organisasi.
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
            <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center">
              <Briefcase size={18} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Jabatan & Pengalaman Profesional</h3>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>H. Dr. Ahmad Shaleh Amin, Lc., MA, telah aktif dengan kariernya sebagai tokoh religi Muhammadiyah dan Nahdlatul Ulama di Jember. Beliau juga sebagai pengurus pusat NU di Jakarta serta anggota pengurus perwakilan operasional di berbagai yayasan keagamaan Islam Indonesia termasuk asosiasi dan forum dakwah berskala besar yang mempunyai afiliasi di seluruh provinsi.</p>
            <p>Beliau memegang Gelar Doktor (DR) dan telah diverifikasi pada Fakultas Tarbiyah dan Ilmu Pendidikan dan ini memvalidasi profesionalnya sebagai akademisi dan advokat pendidikan Islam. Selaku Majelis Ulama Indonesia (MUI), beliau menunjukkan kompetensi legal religiusnya.</p>
            <p>Beliau aktif sebagai Pengelola Ponpes Nurul Huda di Jember II dan dalam lingkungan pondok keislaman dan pendidikan strategis formal dan informal. Beliau secara aktif menentukan arah strategis organisasi ponpes dan kelompok dakwah serta mempertahankan standar akademik tinggi.</p>
          </div>
        </div>
      </section>

      {/* Latar Belakang Pendidikan */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center">
              <GraduationCap size={18} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Latar Belakang Pendidikan</h3>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>H. Dr. Ahmad Shaleh Amin, Lc., telah menempuh pendidikan di sejumlah pusat intelektual terkemuka di Timur Tengah dan dalam ranah Syariah dan Tarbiyah. Pendidikan di 2 benua lengkap memberikan beliau kapabilitas komparatif dan kritis serta kemampuan implementasi dari aspek keagamaan dan kajian Islamologis untuk menerapkan konteks multikultural dan multidisipliner Islam. Klaim akreditasi beliau mencakup beberapa institusi utama dari dunia Arab dan Eropa.</p>
            <p>Beliau memulai pendidikan konvensional Studi (S1) Majering di Islamic Aqidah (Al-Aqidah) Jurnas Faculty dan kemudian meneruskan kembali dan memperoleh gelar pasca Magister Agama (S2 MA/Mgr) bidang Tarbiyah. Pendidikan beliau kemudian berlanjut pada jenjang paling tinggi Doktoral dengan disertasi yang sangat berbobot dan relivan terhadap bidang. Pasalnya beliau memperoleh keahlian religius akhlak akidah ilmu dan edukasi yang sangat diperkuat oleh sistem perikatan doktrinal dan analisis keilmuan Islam.</p>
          </div>
        </div>
      </section>

      {/* Organisasi & Kepemimpinan */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center">
              <Users size={18} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Organisasi & Kepemimpinan</h3>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>H. Dr. Ahmad Shaleh Amin, Lc., MA, telah berkecimpung aktif di berbagai organisasi keagamaan yang bertujuan memperkuat dan memadukan dakwah serta pendidikan masyarakat Islam.</p>
            <p>Beliau juga berperan sebagai Pengurus Pusat Jum'ah Pelajar Islam Ahlus Sunnah wal Jama'ah bersama memegang menguatkan doktrin utuh berintegritas, dan beliau konsisten dalam berkontribusi dan membantu langkah nyata untuk menciptakan dan mencerdaskan umat Islam.</p>
            <p>Kontribusi beliau sebagai Pengurus Yayasan Pondes Nurul Huda Jatim sendiri mewakili komitmen nyata dan dalam keyakinan agama Islam terhadap pendidikan dan dakwah. Program "Ponpes" dari segi filosofis dan kurikulum sangat fokus dalam membaca Al-Quran dan mempelajari ilmu fiqh, akidah, muamalah, serta peningkatan di intelektualitas semesta dan usrah yang ada.</p>
          </div>
        </div>
      </section>

      {/* Kontribusi & Nilai yang Dibawa */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center">
              <Heart size={18} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Kontribusi & Nilai yang Dibawa</h3>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>Sebagai Komisaris PT Samasta Nusantara Digdaya, H. Dr. Ahmad Shaleh Amin, Lc., MA, membawa perspektif unik yang mengedepankan nilai-nilai etika dan keagamaan dalam tata kelola perusahaan, dengan basis ilmu syariah dan governance yang mendukung integritas operasional perusahaan.</p>
            <p>Pendidikan beliau yang multikultural dari berbagai negara Arab memberikan visi yang luas serta kedalaman filosofi governance untuk perusahaan yang bersinergi dengan standar tata kelola yang baik dan etis.</p>
            <p>Dengan keterlibatan beliau yang aktif dalam organisasi kemasyarakatan Islam dan yayasan pendidikan, H. Dr. Ahmad Shaleh Amin membawa jaringan strategis yang luas dan nilai-nilai sosial yang tinggi ke dalam perusahaan, meningkatkan portofolio relasi stakeholder dan memperluas cakupan tanggung jawab sosial korporat.</p>
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
                <Target size={18} className="text-[#F59E0B]" />
                <h4 className="font-bold text-foreground text-sm">Posisi Strategis</h4>
              </div>
              <p className="text-xs text-muted-foreground">Tokoh LB Muhamadiyah dan Dewan Pakar Pimpinan Pondok Nurul Huda Jember</p>
            </div>
            <div className="bg-muted rounded-xl p-5 text-left">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={18} className="text-[#F59E0B]" />
                <h4 className="font-bold text-foreground text-sm">Pendidikan</h4>
              </div>
              <p className="text-xs text-muted-foreground">Doktor (DR) dari Fakultas Tarbiyah, Magister Agama (MA), Sarjana (Lc.)</p>
            </div>
            <div className="bg-muted rounded-xl p-5 text-left">
              <div className="flex items-center gap-2 mb-2">
                <Users size={18} className="text-[#F59E0B]" />
                <h4 className="font-bold text-foreground text-sm">Afiliasi Organisasi</h4>
              </div>
              <p className="text-xs text-muted-foreground">Pengurus Pusat di berbagai organisasi keagamaan dan dakwah nasional</p>
            </div>
            <div className="bg-muted rounded-xl p-5 text-left">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={18} className="text-[#F59E0B]" />
                <h4 className="font-bold text-foreground text-sm">Keahlian</h4>
              </div>
              <p className="text-xs text-muted-foreground">Syariah, Tata Kelola Islami, Pendidikan, Dakwah Internasional</p>
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

export default KomisarisDetail;
