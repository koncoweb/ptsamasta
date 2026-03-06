import { Link } from "react-router-dom";
import { Wrench, GraduationCap, ShoppingCart, Sparkles } from "lucide-react";

const services = [
  {
    key: "pemeliharaan",
    icon: Wrench,
    title: "Pemeliharaan, Perawatan, dan Pembuatan Lingkungan",
    description:
      "Layanan terpadu dalam perawatan taman, pembersihan gedung, dan manajemen kebersihan lingkungan untuk memastikan fasilitas Anda selalu dalam kondisi optimal dan nyaman.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    key: "jasa-profesional",
    icon: GraduationCap,
    title: "Jasa Profesional & Pengembangan SDM",
    description:
      "Solusi pelatihan berbasis kompetensi, sertifikasi profesi, konsultasi hukum, dan pendampingan teknis untuk meningkatkan kapasitas sumber daya manusia organisasi Anda.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    key: "perdagangan",
    icon: ShoppingCart,
    title: "Pengolahan dan Perdagangan Besar",
    description:
      "Layanan distribusi dan perdagangan besar berbagai macam barang dengan sistem rantai pasok terkontrol, termasuk manufaktur konveksi untuk kebutuhan seragam dan atribut.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    key: "event-organizer",
    icon: Sparkles,
    title: "Event Organizer, Kreatif & Media",
    description:
      "Penyelenggaraan event profesional (MICE), jasa desain komunikasi visual, dan layanan catering dalam satu koordinasi terpadu untuk memaksimalkan pengalaman acara Anda.",
    gradient: "from-pink-500 to-purple-600",
  },
];

const LayananOverview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Bidang Usaha Kami</h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-2xl mx-auto">
            PT Samasta Nusantara Digdaya menyediakan berbagai layanan terintegrasi untuk mendukung kebutuhan bisnis Anda dengan standar profesional dan kualitas terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.key} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${s.gradient} p-6`}>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{s.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{s.description}</p>
                <Link
                  to={`/layanan/${s.key}`}
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-[#1E3A8A] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors text-sm"
                >
                  Lihat Detail Layanan →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayananOverview;
