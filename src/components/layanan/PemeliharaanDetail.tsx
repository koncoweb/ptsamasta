import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import buildingBg from "@/assets/building-bg.jpg";
import { Leaf, Building2, Landmark, BriefcaseBusiness, Heart, Users } from "lucide-react";

// Partner logos
import siplah from "@/assets/partners/siplah.png";
import eCatalogue from "@/assets/partners/e-catalogue.png";
import lkpp from "@/assets/partners/lkpp.png";
import mbizmarket from "@/assets/partners/mbizmarket.png";
import padiUmkm from "@/assets/partners/padi-umkm.png";

const partners = [
  { name: "SIPLah", src: siplah },
  { name: "e-Catalogue", src: eCatalogue },
  { name: "LKPP", src: lkpp },
  { name: "Mbizmarket", src: mbizmarket },
  { name: "PaDi UMKM", src: padiUmkm },
];

const clients = [
  { icon: Landmark, label: "Pemerintah" },
  { icon: BriefcaseBusiness, label: "Swasta" },
  { icon: Heart, label: "Yayasan" },
  { icon: Users, label: "Perusahaan" },
];

const PemeliharaanDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative bg-gradient-to-r from-emerald-600 to-green-500 min-h-[360px] flex items-end">
          {/* Breadcrumb */}
          <div className="absolute top-20 left-0 right-0 z-10">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Link to="/" className="hover:text-white transition-colors">🏠 Beranda</Link>
                <span>&gt;</span>
                <Link to="/layanan/overview" className="hover:text-white transition-colors">Layanan</Link>
                <span>&gt;</span>
                <span className="text-white">Pemeliharaan, Perawatan, dan Pembuatan Lingkungan</span>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-12 pt-32 flex flex-col md:flex-row items-end gap-8">
            <div className="flex-1 z-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Layanan Pemeliharaan,<br />Perawatan, dan<br />Pembuatan Lingkungan
              </h1>
              <p className="text-white/80 text-sm max-w-md">
                Solusi perawatan lingkungan secara menyeluruh untuk area perumahan, perkantoran, dan fasilitas publik.
              </p>
            </div>
            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop"
                alt="Perawatan Lingkungan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center h-12 w-28">
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
            PT Samasta Nusantara Digdaya menyediakan layanan pemeliharaan lingkungan secara menyeluruh
            yang mencakup perawatan ruang hijau dan kebersihan bangunan. Layanan ini dirancang untuk
            menciptakan lingkungan yang bersih, tertata, dan nyaman guna mendukung aktivitas operasional klien
            secara berkelanjutan.
          </p>
        </div>
      </section>

      {/* Ruang Lingkup Layanan */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Ruang Lingkup Layanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Perawatan Taman */}
            <div className="bg-card rounded-xl border border-border p-8 text-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Perawatan Taman</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Jasa penataan dan pemeliharaan ruang hijau untuk area perumahan, perkantoran, hingga fasilitas publik.
              </p>
              <Link
                to="/layanan/pemeliharaan/perawatan-taman/penawaran"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                Ajukan Penawaran →
              </Link>
            </div>

            {/* Kebersihan Bangunan */}
            <div className="bg-card rounded-xl border border-border p-8 text-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-[#1E3A8A]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Kebersihan Bangunan</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Pembersihan eksterior gedung, kantor, area industri, serta pembersihan teknis khusus seperti ventilasi dan saluran.
              </p>
              <Link
                to="/layanan/pemeliharaan/kebersihan-bangunan/penawaran"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                Ajukan Penawaran →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Our Clients</h2>
          <p className="text-muted-foreground text-sm mb-10">Kami telah dipercaya oleh berbagai mitra dan institusi</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <c.icon className="w-8 h-8 text-foreground/70" />
                </div>
                <span className="text-sm font-medium text-foreground">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portofolio */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Portofolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=400&fit=crop",
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=400&fit=crop",
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=400&fit=crop",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=400&fit=crop",
            ].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm aspect-[3/4]">
                <img src={src} alt={`Portofolio ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PemeliharaanDetail;
