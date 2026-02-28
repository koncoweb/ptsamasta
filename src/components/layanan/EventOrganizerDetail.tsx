import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, UtensilsCrossed, Palette, BookOpen, Building2, Landmark, GraduationCap, Users } from "lucide-react";

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
    icon: CalendarDays,
    title: "Penyelenggara Event (MICE)",
    description: "Pengelolaan pameran, konferensi, rapat, perjalanan insentif, serta event khusus lainnya secara profesional dan terorganisir.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: UtensilsCrossed,
    title: "Jasa Boga (Catering)",
    description: "Penyediaan makanan dan minuman untuk acara kantor, seminar, pesta, rapat, dan berbagai kegiatan lainnya.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Palette,
    title: "Desain Komunikasi Visual",
    description: "Jasa desain grafis, logo, materi promosi digital, identitas jenama (branding), hingga pengembangan website dan aplikasi.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BookOpen,
    title: "Penerbitan",
    description: "Penerbitan buku, brosur, jurnal, hingga perangkat lunak (software) untuk kebutuhan edukasi, promo, dan dokumentasi.",
    color: "bg-purple-100 text-purple-600",
  },
];

const clients = [
  { icon: Building2, label: "Perusahaan Swasta" },
  { icon: Landmark, label: "Instansi Pemerintah" },
  { icon: GraduationCap, label: "Lembaga Pendidikan" },
  { icon: Users, label: "Komunitas & EO" },
];

const katalogImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=300&h=400&fit=crop",
];

const EventOrganizerDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 min-h-[360px] flex items-end">
          <div className="absolute top-20 left-0 right-0 z-10">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Link to="/" className="hover:text-white transition-colors">🏠 Beranda</Link>
                <span>&gt;</span>
                <Link to="/layanan/overview" className="hover:text-white transition-colors">Layanan</Link>
                <span>&gt;</span>
                <span className="text-white">Event Organizer, Kreatif & Media</span>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-12 pt-32 flex flex-col md:flex-row items-end gap-8">
            <div className="flex-1 z-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Event Organizer, Kreatif<br />& Media
              </h1>
              <p className="text-white/80 text-sm max-w-md">
                Mendukung aktivitas komunikasi, promosi, dan penyelenggaraan acara untuk memperkuat brand Anda.
              </p>
            </div>
            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop"
                alt="Event Organizer"
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
            PT Samasta Nusantara Digdaya menyediakan layanan Event Organizer, Kreatif, dan Media yang
            dirancang untuk membantu perusahaan dan institusi dalam menyelenggarakan kegiatan profesional
            serta membangun komunikasi dan citra merek yang kuat melalui pendekatan kreatif dan terintegrasi.
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
                  to="/layanan/event-organizer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors text-sm"
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
          <p className="text-muted-foreground text-sm mb-10">Dipercaya oleh berbagai organisasi dan institusi</p>
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

export default EventOrganizerDetail;
