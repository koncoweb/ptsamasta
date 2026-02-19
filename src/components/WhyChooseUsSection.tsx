import { CheckCircle, Users, BookOpen, Settings, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Pendampingan Manajemen & Teknis Terpadu",
    description: "Kami memberikan jasa konsultasi dan pendampingan di semua lini bisnis untuk meningkatkan efisiensi operasional dan optimalisasi proses yang masif.",
    points: [
      "Konsultasi & Implementasi Legalitas Perusahaan",
      "Manajemen Keselamatan & Kesehatan Kerja (K3) dan Lingkungan Hidup",
      "Manajemen Mutu, Produktivitas & Standarisasi Sistem",
    ],
  },
  {
    icon: Users,
    title: "Pengembangan Kapasitas Sumber Daya Manusia (Capacity Building)",
    description: "Mendesain dan menyelenggarakan program pelatihan sumber daya manusia yang efektif, terstruktur, dan berdampak nyata bagi pertumbuhan organisasi.",
    points: [
      "Pelatihan Berbasis Kompetensi & Pengembangan Soft Skills",
      "Sertifikasi Profesi dan Keahlian Teknis (BNSP, LSP)",
      "Sertifikasi Produk & Standar Nasional/Internasional",
    ],
  },
  {
    icon: BookOpen,
    title: "Integrasi Solusi Kreatif & Operasional",
    description: "Kami mendukung perusahaan dari sisi kreatif dan operasional, termasuk event management, branding, dan solusi manufaktur terintegrasi.",
    points: [
      "Solusi Event, MICE & Corporate Gathering",
      "Desain Grafis, Branding & Komunikasi Visual",
      "Manufaktur & Pengadaan Barang/Jasa Terintegrasi",
    ],
  },
  {
    icon: BarChart3,
    title: "Monitoring & Supervisi Berkelanjutan",
    description: "Layanan pengawasan dan evaluasi untuk memastikan standar profesional yang berkelanjutan serta kualitas layanan terbaik di setiap lini bisnis.",
    points: [
      "Evaluasi Kinerja Operasional & Pelaporan Berkala",
      "Audit Internal, Compliance Monitoring & Risk Assessment",
      "Pendampingan Perbaikan Berkelanjutan (Continuous Improvement)",
    ],
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="layanan" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mengapa Memilih Kami?</h2>
          <p className="text-lg font-semibold text-navy mt-2">Spesialisasi Oleh PT Samasta Nusantara Digdaya</p>
          <p className="text-muted-foreground mt-3 text-center text-base">
            Kami hadir sebagai mitra strategis yang menyediakan solusi bisnis terintegrasi dengan pendekatan one-stop solution, memastikan setiap kebutuhan perusahaan Anda ditangani secara profesional dan menyeluruh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-navy group-hover:text-primary-foreground transition-colors duration-300">
                  <s.icon size={22} className="text-navy group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{s.description}</p>
                  <ul className="space-y-1.5">
                    {s.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle size={14} className="text-gold flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
