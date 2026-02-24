import { Scale, Users, Briefcase, ClipboardCheck, Lightbulb, Shield, Clock, FileCheck, Eye, Award } from "lucide-react";
import buildingBg from "@/assets/building-bg.jpg";

const keunggulanItems = [
  {
    icon: Scale,
    title: "1. Pengalaman dan Rekam Jejak yang Terpercaya",
    description: "PT Samasta Nusantara Digdaya telah menunjukkan kemampuan dalam mengelola berbagai proyek pengadaan barang dan jasa, baik di sektor pemerintah maupun swasta. Catatan kinerja yang konsisten dan profesional menjadi fondasi kepercayaan dari berbagai mitra dan klien, menjadikan Perseroan sebagai entitas bisnis yang handal dan layak dipertimbangkan dalam setiap proses pengadaan.",
  },
  {
    icon: Briefcase,
    title: "2. Sistem Kerja yang Terstruktur dan Profesional",
    description: "Seluruh proses operasional Perseroan dijalankan berdasarkan standar prosedur yang jelas dan terukur. Dari tahap perencanaan, pelaksanaan, hingga evaluasi, setiap kegiatan dikelola secara sistematis guna menjamin konsistensi mutu, efisiensi waktu, serta akuntabilitas dalam setiap tahap kerja.",
  },
  {
    icon: Users,
    title: "3. Sumber Daya Manusia yang Kompeten",
    description: "Perseroan didukung oleh tenaga profesional yang memiliki latar belakang pendidikan, keahlian teknis, dan pengalaman kerja yang relevan di berbagai bidang usaha. Kompetensi sumber daya manusia ini menjadi modal utama dalam menjalankan proyek secara efektif, adaptif, dan berorientasi pada hasil.",
  },
  {
    icon: ClipboardCheck,
    title: "4. Pemahaman Komprehensif terhadap Kebutuhan Proyek",
    description: "PT Samasta Nusantara Digdaya memiliki kemampuan untuk memahami kebutuhan klien secara menyeluruh, termasuk aspek teknis, administratif, dan regulasi. Pemahaman ini memungkinkan Perseroan untuk menyusun solusi yang tepat sasaran, sesuai kebutuhan, dan dapat dipertanggungjawabkan.",
  },
  {
    icon: Lightbulb,
    title: "5. Solusi yang Disesuaikan dengan Kebutuhan Klien",
    description: "Setiap proyek ditangani dengan pendekatan yang disesuaikan berdasarkan karakteristik kebutuhan klien. Perseroan tidak menggunakan pendekatan satu solusi untuk semua, melainkan merancang strategi pelaksanaan yang spesifik guna mencapai hasil yang optimal dan bernilai tambah bagi setiap pemangku kepentingan.",
  },
  {
    icon: Award,
    title: "6. Komitmen terhadap Kualitas dan Ketepatan Waktu",
    description: "Kualitas hasil kerja dan ketepatan waktu penyelesaian merupakan dua pilar utama yang dijunjung tinggi oleh Perseroan. Setiap proyek dikelola dengan target yang terukur dan mekanisme pengawasan internal yang ketat untuk memastikan bahwa standar mutu dan jadwal pelaksanaan terpenuhi secara konsisten.",
  },
  {
    icon: FileCheck,
    title: "7. Kepatuhan terhadap Regulasi dan Standar yang Berlaku",
    description: "Perseroan berkomitmen untuk menjalankan seluruh kegiatan usahanya sesuai dengan peraturan perundang-undangan yang berlaku, termasuk standar pengadaan barang dan jasa pemerintah, regulasi perpajakan, serta ketentuan administrasi lainnya. Kepatuhan ini mencerminkan integritas dan keseriusan Perseroan dalam menjaga kredibilitas usahanya.",
  },
  {
    icon: Eye,
    title: "8. Transparansi dan Akuntabilitas",
    description: "Dalam setiap proses kerja, PT Samasta Nusantara Digdaya mengedepankan prinsip keterbukaan dan akuntabilitas. Laporan kegiatan, penggunaan anggaran, serta pencapaian target dikomunikasikan secara transparan kepada seluruh pemangku kepentingan sebagai bentuk tanggung jawab profesional.",
  },
];

const sopSections = [
  {
    title: "I. TUJUAN",
    content: "SOP ini disusun sebagai pedoman Standar Operasional Prosedur bagi PT Samasta Nusantara Digdaya dalam menjalankan seluruh kegiatan operasional secara profesional, terstruktur, efisien, dan berorientasi pada hasil yang berkualitas.",
  },
  {
    title: "II. RUANG LINGKUP",
    content: null,
    list: [
      "Perencanaan & registrasi proyek/kontrak",
      "Pengadaan/procurement",
      "Penyediaan jasa konsultansi & tenaga kerja",
      "Pelaksanaan kegiatan MICE & event",
      "Event kreatif & media",
      "Pemeliharaan, perawatan, dan perbaikan lingkungan",
      "Monitoring, evaluasi, & pelaporan",
    ],
  },
  {
    title: "III. DASAR PELAKSANAAN",
    content: null,
    list: [
      "Peraturan perundang-undangan yang berlaku",
      "Regulasi terkait P3DN (Penggunaan Produk Dalam Negeri)",
      "Standar mutu dan K3 (Keselamatan dan Kesehatan Kerja)",
      "Kebijakan internal perusahaan",
    ],
  },
  {
    title: "IV. PRINSIP UMUM PELAKSANAAN",
    content: "Seluruh kegiatan operasional dilaksanakan berdasarkan prinsip:",
    badges: ["Transparansi", "Akuntabilitas", "Efisiensi", "Profesionalisme"],
  },
  {
    title: "V. PROSEDUR OPERASIONAL",
    content: null,
    procedures: [
      {
        name: "1. SOP Perencanaan & Registrasi",
        steps: [
          "Identifikasi peluang proyek atau kebutuhan klien",
          "Penyusunan proposal teknis dan anggaran biaya",
          "Registrasi dan administrasi kontrak kerja",
        ],
      },
      {
        name: "2. SOP Pengadaan/Procurement",
        steps: [
          "Seleksi dan evaluasi vendor/supplier",
          "Pengajuan penawaran dan negosiasi harga",
          "Pembuatan Purchase Order (PO) dan kontrak",
          "Penerimaan, inspeksi, dan distribusi barang",
        ],
      },
      {
        name: "3. SOP Penyediaan Jasa Konsultansi & Tenaga",
        steps: [
          "Identifikasi kebutuhan tenaga kerja/konsultan",
          "Proses rekrutmen, seleksi, dan penempatan",
          "Monitoring kinerja dan evaluasi berkala",
        ],
      },
      {
        name: "4. SOP Jasa Pelatihan & Pengembangan SDM",
        steps: [
          "Analisis kebutuhan pelatihan (Training Need Analysis)",
          "Penyusunan kurikulum dan materi pelatihan",
          "Pelaksanaan pelatihan dan sertifikasi",
          "Evaluasi efektivitas pelatihan",
        ],
      },
      {
        name: "5. SOP Event Kreatif & Media",
        steps: [
          "Perencanaan konsep kreatif dan media",
          "Produksi konten (video, desain, publikasi)",
          "Distribusi dan monitoring dampak media",
        ],
      },
      {
        name: "6. SOP Pemeliharaan, Perawatan, dan Perbaikan Lingkungan",
        steps: [
          "Penjadwalan rutin pemeliharaan",
          "Pelaksanaan pekerjaan perawatan dan perbaikan",
          "Pelaporan hasil dan rekomendasi tindak lanjut",
        ],
      },
      {
        name: "7. SOP Monitoring & Evaluasi",
        steps: [
          "Penetapan indikator kinerja (KPI)",
          "Pelaksanaan monitoring berkala",
          "Penyusunan laporan evaluasi dan rekomendasi",
        ],
      },
    ],
  },
  {
    title: "VI. DOKUMENTASI & PELAPORAN",
    content: "Seluruh kegiatan operasional wajib didokumentasikan dan dilaporkan secara berkala kepada manajemen sebagai bahan evaluasi dan perbaikan berkelanjutan.",
  },
  {
    title: "VII. PENUTUP",
    content: "SOP ini berlaku sejak tanggal ditetapkan dan dapat direvisi sesuai kebutuhan operasional perusahaan. Seluruh jajaran PT Samasta Nusantara Digdaya wajib memahami, menjalankan, dan mematuhi SOP ini demi tercapainya standar kerja yang profesional dan berorientasi pada hasil.",
  },
];

const KeunggulanPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={buildingBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1E3A8A]/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Keunggulan PT Samasta Nusantara Digdaya
            </h1>
            <p className="text-white/70 text-sm">
              Keunggulan kami terletak pada integritas, profesionalisme, dan komitmen terhadap mutu.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm text-muted-foreground leading-relaxed">
            PT Samasta Nusantara Digdaya memiliki sejumlah keunggulan yang menjadikannya mitra strategis yang handal dan terpercaya dalam berbagai sektor pengadaan barang dan jasa. Keunggulan-keunggulan ini mencerminkan komitmen Perseroan terhadap kualitas, profesionalisme, dan keberlanjutan dalam setiap aspek operasionalnya. Berikut adalah keunggulan utama yang dimiliki oleh PT Samasta Nusantara Digdaya:
          </p>
        </div>
      </section>

      {/* Keunggulan List */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Keunggulan Perusahaan
          </h2>
          <div className="space-y-6">
            {keunggulanItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOP Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Standar Operasional Prosedur (SOP)
            </h2>
            <p className="text-muted-foreground text-sm mt-2">PT Samasta Nusantara Digdaya</p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 md:p-10 shadow-sm space-y-8">
            {sopSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-primary mb-3">{section.title}</h3>
                {section.content && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{section.content}</p>
                )}
                {section.list && (
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.badges && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {section.badges.map((badge, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                {section.procedures && (
                  <div className="space-y-6 mt-4">
                    {section.procedures.map((proc, i) => (
                      <div key={i}>
                        <h4 className="text-sm font-bold text-foreground mb-2">{proc.name}</h4>
                        <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 ml-2">
                          {proc.steps.map((step, j) => (
                            <li key={j}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeunggulanPage;
