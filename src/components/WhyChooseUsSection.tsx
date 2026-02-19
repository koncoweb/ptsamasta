import { CheckCircle, Users, BookOpen, Settings, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Pendampingan Manajemen & Teknis Terpadu",
    description: "Kami memberikan jasa konsultasi dan pendampingan di setiap lini bisnis untuk meningkatkan efisiensi operasional klien, yang meliputi:",
    points: [
      "Konsultasi & Implementasi Legalitas: Pendampingan dalam persiapan dokumen hukum, pendirian badan hukum, hingga penyiapan akta notaris untuk memastikan keamanan fundamental bisnis klien.",
      "Manajemen Kebersihan & Lingkungan: Pendeteksian dini (early warning signal) terhadap potensi kerusakan fasilitas melalui sistem perawatan taman dan pembersihan bangunan yang terjadwal secara teknis.",
      "Pendampingan Teknis Arsitektur: Melayani konsultasi arsitektur, peninjauan teknis bangunan, penyusunan konsep dan pradesain arsitektural, serta kajian awal perencanaan ruang dan fasilitas guna mendukung pengembangan, pemeliharaan, dan optimalisasi fungsi bangunan secara efisien dan berkelanjutan.",
    ],
  },
  {
    icon: Users,
    title: "Pengembangan Kapasitas Sumber Daya Manusia (Capacity Building)",
    description: "Sebagai pemegang izin di bidang sertifikasi, kami fokus pada peningkatan kualitas SDM melalui:",
    points: [
      "Pelatihan Berbasis Kompetensi: Penyelenggaraan pelatihan yang disusun berdasarkan kurikulum industri untuk memastikan personel klien memiliki keahlian yang bersertifikat dan diakui.",
      "Sertifikasi Profesi Kolektif: Memberikan dampingan kepada asosiasi atau profesi dalam mengukur dan mensertifikasi kompetensi pekerja agar sesuai dengan standar nasional.",
      "Pendampingan Sertifikasi Halal: Kami memfasilitasi peningkatan pemahaman personel mengenai standar dan regulasi halal di Indonesia.",
    ],
  },
  {
    icon: BookOpen,
    title: "Integrasi Solusi Kreatif & Operasional",
    description: "Kami menawarkan efisiensi melalui sinergi antar unit bisnis yang sulit ditemukan di perusahaan lain:",
    points: [
      "Satu Atap untuk Event & MICE: Integrasi antara penyelenggaraan acara (EO), jasa desain komunikasi visual untuk promosi, hingga penyediaan jasa boga (catering) yang dikelola secara profesional dalam satu koordinasi.",
      "Rantai Pasok Manufaktur Terkontrol: Melalui unit industri konveksi mandiri, kami menjamin kualitas bahan dan ketepatan waktu produksi seragam serta atribut organisasi tanpa ketergantungan pada pihak ketiga.",
    ],
  },
  {
    icon: BarChart3,
    title: "Monitoring & Supervisi Berkelanjutan",
    description: "Kami melakukan supervisi berkelanjutan untuk semua aspek operasional yang dipercayakan kepada kami. Hal ini mencakup pelaporan berkala dan tindakan korektif cepat untuk setiap layanan, mulai dari proyek manajemen distribusi perdagangan besar serta berbagai macam barang dan lainnya.",
    points: [],
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
                  {s.points.length > 0 && (
                    <ul className="space-y-1.5">
                      {s.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
