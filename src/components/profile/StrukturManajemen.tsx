import { Award, ShieldCheck, Users, TrendingUp, Eye, Scale, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import faniPhoto from "@/assets/komisaris/fani-ruusul.png";
import ahmadPhoto from "@/assets/komisaris/ahmad-shaleh.png";

const StrukturManajemen = () => {
  return (
    <div>
      {/* Kepemimpinan Visioner */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Kepemimpinan yang Visioner dan Berpengalaman
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Tim manajemen PT Samasta Nusantara Digdaya terdiri dari para profesional berpengalaman dengan keahlian yang terbukti di berbagai industri. Mereka memegang komitmen yang kuat terhadap efisiensi strategis, governance, dan inovasi kami, mendorong perusahaan menuju pertumbuhan berkelanjutan.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Setiap anggota direksi memiliki perspektif unik dan komitmen kuat untuk memberikan kontribusi terbaik bagi klien, mitra, dan stakeholder kami.
          </p>
        </div>
      </section>

      {/* Dewan Komisaris */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Dewan Komisaris</h3>
          <p className="text-sm text-muted-foreground mb-10">
            Pengawas independen yang memastikan tata kelola perusahaan yang baik
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Komisaris Utama */}
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#1E3A8A]/20">
                <img src={faniPhoto} alt="Fani Ruusul Masail" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-foreground">Fani Ruusul Masail, S.H., M.H.</h4>
              <Link
                to="/profil/komisaris-utama"
                className="inline-block mt-2 bg-[#1E3A8A] text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full hover:bg-[#1D4ED8] transition-colors cursor-pointer"
              >
                Komisaris Utama
              </Link>
            </div>

            {/* Komisaris */}
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#1E3A8A]/20">
                <img src={ahmadPhoto} alt="H. Dr. Ahmad Shaleh Amin" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-foreground">H. Dr. Ahmad Shaleh Amin, Lc., MA</h4>
              <Link
                to="/profil/komisaris"
                className="inline-block mt-2 bg-[#1D4ED8] text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full hover:bg-[#1E3A8A] transition-colors cursor-pointer"
              >
                Komisaris
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dewan Direksi */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Dewan Direksi</h3>
          <p className="text-sm text-muted-foreground mb-10">
            Pemimpin strategis yang menjalankan visi dan misi perusahaan
          </p>

          <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto">
            <div className="w-24 h-24 rounded-full bg-[#1E3A8A]/10 mx-auto mb-4 flex items-center justify-center">
              <Users size={40} className="text-[#1E3A8A]" />
            </div>
            <h4 className="font-bold text-foreground text-lg">JEFRI, S.H.</h4>
            <span className="inline-block mt-2 bg-[#2563EB] text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
              Direktur
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Memimpin perusahaan dengan dedikasi tinggi untuk pertumbuhan dan pengembangan bisnis yang berkelanjutan.
            </p>

            <div className="text-left text-sm space-y-2 border-t border-border pt-4">
              <div>
                <span className="text-muted-foreground">Keahlian:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {["Manajemen Strategis", "Hukum Bisnis", "Pengembangan Bisnis"].map((s) => (
                    <span key={s} className="bg-muted text-xs px-2 py-0.5 rounded-full text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">Pendidikan:</span>
                <p className="text-foreground text-xs">Sarjana Hukum (S.H.)</p>
              </div>
              <div>
                <span className="text-muted-foreground">Pengalaman:</span>
                <p className="text-foreground text-xs">10+ Tahun</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center hover:bg-[#1E3A8A] hover:text-primary-foreground transition-colors text-[#1E3A8A]">
                <Mail size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center hover:bg-[#1E3A8A] hover:text-primary-foreground transition-colors text-[#1E3A8A]">
                <Phone size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pencapaian Perusahaan */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Pencapaian Perusahaan</h3>
          <p className="text-sm text-muted-foreground mb-10">
            Hasil nyata dari kepemimpinan yang efektif dan konsisten terhadap keunggulan
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-left">
              <Award size={24} className="text-[#1E3A8A] mb-3" />
              <h4 className="font-bold text-foreground text-sm">Sertifikasi ISO 9001:2015</h4>
              <p className="text-xs text-muted-foreground mt-1">Standar manajemen mutu internasional</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-left">
              <ShieldCheck size={24} className="text-[#1E3A8A] mb-3" />
              <h4 className="font-bold text-foreground text-sm">Good Corporate Governance</h4>
              <p className="text-xs text-muted-foreground mt-1">Tata kelola perusahaan yang transparan</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-left">
              <TrendingUp size={24} className="text-[#1E3A8A] mb-3" />
              <h4 className="font-bold text-foreground text-sm">Pertumbuhan 45% YoY</h4>
              <p className="text-xs text-muted-foreground mt-1">Strategi finansial yang konsisten</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-left">
              <Users size={24} className="text-[#1E3A8A] mb-3" />
              <h4 className="font-bold text-foreground text-sm">200+ Klien Korporat</h4>
              <p className="text-xs text-muted-foreground mt-1">Kepercayaan dan rekam jejak industri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Good Corporate Governance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Good Corporate Governance</h3>
          <p className="text-sm text-muted-foreground mb-10">
            Komitmen kami terhadap tata kelola perusahaan yang baik
          </p>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              {
                icon: Eye,
                title: "Transparansi",
                desc: "Kami berkomitmen untuk transparansi dalam pengelolaan keuangan, operasional, dan pengambilan keputusan strategis.",
              },
              {
                icon: Scale,
                title: "Akuntabilitas",
                desc: "Setiap keputusan dan tindakan dapat dipertanggungjawabkan kepada seluruh stakeholder dan publik.",
              },
              {
                icon: ShieldCheck,
                title: "Kepatuhan",
                desc: "Konsistensi mematuhi regulasi, standar industri, dan ketentuan hukum yang berlaku di Indonesia.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex-shrink-0 flex items-center justify-center">
                  <item.icon size={18} className="text-[#1E3A8A]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Ingin Tahu Lebih Lanjut tentang Kami?
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Tim kami siap menjawab pertanyaan Anda dan membantu menemukan solusi terbaik untuk kebutuhan bisnis Anda.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#kontak" className="px-6 py-2.5 bg-[#2563EB] text-primary-foreground text-sm font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors">
              Hubungi Tim Kami
            </a>
            <a href="#layanan" className="px-6 py-2.5 border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-muted transition-colors">
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrukturManajemen;
