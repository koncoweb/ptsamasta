import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";

const serviceData: Record<string, { title: string; description: string; points: string[] }> = {
  pemeliharaan: {
    title: "Pemeliharaan, Perawatan, dan Pembuatan Lingkungan",
    description:
      "Layanan terpadu dalam perawatan taman, pembersihan gedung, dan manajemen kebersihan lingkungan untuk memastikan fasilitas Anda selalu dalam kondisi optimal dan nyaman.",
    points: [
      "Perawatan taman dan lanskap profesional",
      "Pembersihan gedung dan fasilitas umum",
      "Manajemen kebersihan lingkungan terjadwal",
      "Pendeteksian dini potensi kerusakan fasilitas",
      "Pemeliharaan rutin dan perbaikan terjadwal",
    ],
  },
  "jasa-profesional": {
    title: "Jasa Profesional & Pengembangan SDM",
    description:
      "Solusi pelatihan berbasis kompetensi, sertifikasi profesi, konsultasi hukum, dan pendampingan teknis untuk meningkatkan kapasitas sumber daya manusia organisasi Anda.",
    points: [
      "Pelatihan berbasis kompetensi dan kurikulum industri",
      "Sertifikasi profesi kolektif sesuai standar nasional",
      "Pendampingan sertifikasi halal",
      "Konsultasi dan implementasi legalitas",
      "Pendampingan teknis arsitektur dan perencanaan",
    ],
  },
  perdagangan: {
    title: "Pengolahan dan Perdagangan Besar",
    description:
      "Layanan distribusi dan perdagangan besar berbagai macam barang dengan sistem rantai pasok terkontrol, termasuk manufaktur konveksi untuk kebutuhan seragam dan atribut.",
    points: [
      "Distribusi dan perdagangan besar berbagai macam barang",
      "Rantai pasok manufaktur terkontrol",
      "Produksi konveksi mandiri untuk seragam dan atribut",
      "Jaminan kualitas bahan dan ketepatan waktu",
      "Manajemen logistik dan pengiriman terintegrasi",
    ],
  },
  "event-organizer": {
    title: "Event Organizer, Kreatif & Media",
    description:
      "Penyelenggaraan event profesional (MICE), jasa desain komunikasi visual, dan layanan catering dalam satu koordinasi terpadu untuk memaksimalkan pengalaman acara Anda.",
    points: [
      "Penyelenggaraan acara (Event Organizer) profesional",
      "Layanan MICE (Meeting, Incentive, Convention, Exhibition)",
      "Jasa desain komunikasi visual untuk promosi",
      "Penyediaan jasa boga (catering) berkualitas",
      "Produksi konten video, desain, dan publikasi media",
    ],
  },
};

const LayananDetail = ({ serviceKey }: { serviceKey: string }) => {
  const data = serviceData[serviceKey];

  if (!data) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted-foreground">Layanan tidak ditemukan.</p>
        <Link to="/layanan/overview" className="text-primary underline mt-4 inline-block">
          Kembali ke Layanan
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/layanan/overview"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8"
        >
          <ArrowLeft size={16} />
          Kembali ke Semua Layanan
        </Link>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{data.title}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-10">{data.description}</p>

        <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-6">Lingkup Layanan</h3>
          <ul className="space-y-4">
            {data.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LayananDetail;
