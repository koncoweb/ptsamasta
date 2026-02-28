import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, Award, BadgeCheck, Compass, Building2, Users, Heart, Landmark } from "lucide-react";

import siplah from "@/assets/partners/siplah.png";
import eCatalogue from "@/assets/partners/e-catalogue.png";
import lkpp from "@/assets/partners/lkpp.png";
import mbizmarket from "@/assets/partners/mbizmarket.png";
import padiUmkm from "@/assets/partners/padi-umkm.png";
import belaPengadaan from "@/assets/partners/bela-pengadaan.png";

const partners = [
  { name: "PaDi UMKM", src: padiUmkm },
  { name: "Bela Pengadaan", src: belaPengadaan },
  { name: "SIPLah", src: siplah },
  { name: "e-Catalogue", src: eCatalogue },
  { name: "LKPP", src: lkpp },
  { name: "Mbizmarket", src: mbizmarket },
];

const doubled = [...partners, ...partners];

const services = [
  {
    icon: Scale,
    title: "Konsultan Hukum",
    description: "Penyiapan dokumen badan hukum, akta notaris, kontrak bisnis, serta administrasi hukum lainnya.",
    color: "bg-blue-100 text-[#1E3A8A]",
  },
  {
    icon: Award,
    title: "Sertifikasi Kompetensi",
    description: "Penyelenggaraan sertifikasi hasil pendidikan dan pelatihan serta uji kompetensi melalui LSP Pihak Ketiga bagi tenaga kerja profesional.",
    color: "bg-blue-100 text-[#1E3A8A]",
  },
  {
    icon: BadgeCheck,
    title: "Sertifikasi Halal",
    description: "Asistensi dan konsultasi dalam penyiapan dokumen serta pendaftaran sertifikasi halal untuk produk industri dan jasa makanan.",
    color: "bg-blue-100 text-[#1E3A8A]",
  },
  {
    icon: Compass,
    title: "Arsitektur",
    description: "Jasa konsultasi arsitektur, desain arsitektural, studi awal, dan penyusunan prodesain arsitektural.",
    color: "bg-blue-100 text-[#1E3A8A]",
  },
];

const clients = [
  { icon: Building2, label: "Perusahaan Swasta" },
  { icon: Users, label: "UMKM" },
  { icon: Heart, label: "Yayasan" },
  { icon: Landmark, label: "Instansi Pemerintah" },
];

const katalogImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=300&h=400&fit=crop",
];

const JasaProfesionalDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] min-h-[360px] flex items-end">
          <div className="absolute top-20 left-0 right-0 z-10">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Link to="/" className="hover:text-white transition-colors">🏠 Beranda</Link>
                <span>&gt;</span>
                <Link to="/layanan/overview" className="hover:text-white transition-colors">Layanan</Link>
                <span>&gt;</span>
                <span className="text-white">Jasa Profesional & Pengembangan SDM</span>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-12 pt-32 flex flex-col md:flex-row items-end gap-8">
            <div className="flex-1 z-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Jasa Profesional &<br />Pengembangan SDM
              </h1>
              <p className="text-white/80 text-sm max-w-md">
                Solusi layanan profesional untuk mendukung legalitas usaha, sertifikasi, dan peningkatan kompetensi sumber daya manusia.
              </p>
            </div>
            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop"
                alt="Jasa Profesional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-8 bg-background border-b border-border">
        <div className="overflow-hidden">
          <div className="flex items-center animate-marquee w-max gap-16 px-8">
            {doubled.map((p, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center h-12 w-28">
                <img src={p.src} alt={p.name} className="max-h-10 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Layanan */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Tentang Layanan</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            PT Samasta Nusantara Digdaya menyediakan layanan jasa profesional dan pengembangan sumber daya
            manusia yang dirancang untuk mendukung aspek legalitas usaha, kepatuhan regulasi, serta peningkatan
            kompetensi tenaga kerja. Layanan ini membantu organisasi dan perusahaan dalam membangun fondasi
            bisnis yang kuat dan berkelanjutan.
          </p>
        </div>
      </section>

      {/* Ruang Lingkup Layanan */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Ruang Lingkup Layanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-xl border border-border p-8 text-center shadow-sm">
                <div className={`w-14 h-14 rounded-full ${s.color.split(" ")[0]} flex items-center justify-center mx-auto mb-4`}>
                  <s.icon className={`w-7 h-7 ${s.color.split(" ")[1]}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
                <Link
                  to="/layanan/jasa-profesional"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1E3A8A] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors text-sm"
                >
                  Ajukan Penawaran →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Our Clients</h2>
          <p className="text-muted-foreground text-sm mb-10">Mitra dan klien yang telah mempercayakan layanan profesional kepada kami</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <c.icon className="w-8 h-8 text-foreground/70" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Katalog */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Katalog</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {katalogImages.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm aspect-[3/4]">
                <img src={src} alt={`Katalog ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JasaProfesionalDetail;
