import { BookOpen, Globe, Shield, Calendar, Building2, MapPin } from "lucide-react";
import buildingBg from "@/assets/building-bg.jpg";

const SejarahPage = () => {
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
              Sejarah dan Filosofi Perusahaan
            </h1>
            <p className="text-white/70 text-sm">
              Landasan nilai dan perjalanan PT Samasta Nusantara Digdaya
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Sejarah PT Samasta Nusantara Digdaya
            </h2>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 md:p-10 shadow-sm mb-12">
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                PT Samasta Nusantara Digdaya didirikan sebagai respons atas kebutuhan akan entitas usaha nasional yang mampu menghadirkan solusi terintegrasi, profesional, dan berdaya saing dalam berbagai sektor strategis. Perseroan lahir dari gagasan untuk membangun perusahaan yang tidak hanya berorientasi pada pertumbuhan bisnis, tetapi juga pada tata kelola yang baik, kepatuhan hukum, serta keberlanjutan jangka panjang.
              </p>
              <p>
                Sejak awal pendiriannya pada <strong className="text-foreground">tanggal 20 Juni 2022</strong> dengan <strong className="text-foreground">Nomor Akta Pendirian 40220623311060228</strong>, PT Samasta Nusantara Digdaya dirancang dengan cakupan bidang usaha yang komprehensif, meliputi industri pengolahan, konstruksi, perdagangan, logistik, penyediaan jasa, hingga aktivitas profesional dan teknis. Pendekatan ini memungkinkan Perseroan untuk menjawab kebutuhan pasar yang beragam, khususnya dalam mendukung program dan kegiatan sektor pemerintah maupun swasta secara efektif dan terkoordinasi.
              </p>
              <p>
                Dalam perjalanannya, Perseroan terus mengembangkan sistem manajemen, sumber daya manusia, serta jaringan kemitraan strategis guna memastikan setiap kegiatan usaha dilakukan secara terukur, akuntabel, dan berorientasi pada hasil. Dengan mengedepankan profesionalisme dan kemampuan beradaptasi terhadap dinamika lingkungan usaha, PT Samasta Nusantara Digdaya memposisikan diri sebagai perusahaan yang siap tumbuh secara berkelanjutan dan memberikan kontribusi nyata bagi pembangunan nasional.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card rounded-xl border border-border p-6 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">20 Juni 2022</h3>
              <p className="text-xs text-muted-foreground mt-1">Tahun Berdiri</p>
              <p className="text-xs text-muted-foreground">Akta No. 40220623311060228</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Multi-Sektor</h3>
              <p className="text-xs text-muted-foreground mt-1">Bidang Usaha</p>
              <p className="text-xs text-muted-foreground">Pengolahan, Konstruksi, Perdagangan, Jasa</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Nasional</h3>
              <p className="text-xs text-muted-foreground mt-1">Fokus Bisnis</p>
              <p className="text-xs text-muted-foreground">Pemerintah & Swasta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofi Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Filosofi PT Samasta Nusantara Digdaya
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-2xl mx-auto">
              Filosofi perusahaan berlandaskan pada makna dan nilai yang terkandung dalam nama PT Samasta Nusantara Digdaya sebagai identitas dan arah gerak usaha.
            </p>
          </div>

          <div className="space-y-6">
            {/* Samasta */}
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Samasta</h3>
                  <p className="text-sm font-medium text-primary mb-3">(Menyeluruh dan Terintegrasi)</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Samasta</strong> bermakna menyeluruh dan terintegrasi, yang mencerminkan komitmen Perseroan dalam menghadirkan solusi yang komprehensif melalui sinergi antarbidang usaha, sistem kerja, dan sumber daya. Nilai ini menjadi dasar dalam membangun pendekatan yang holistik, terstruktur, dan saling mendukung di setiap lini operasional.
                  </p>
                </div>
              </div>
            </div>

            {/* Nusantara */}
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Nusantara</h3>
                  <p className="text-sm font-medium text-primary mb-3">(Orientasi Nasional dan Kebangsaan)</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Nusantara</strong> merepresentasikan orientasi nasional dan semangat kebangsaan, yang menegaskan peran Perseroan sebagai perusahaan yang berkontribusi bagi pembangunan dan kemajuan di seluruh wilayah Indonesia. Filosofi ini mendorong Perseroan untuk memahami keragaman kebutuhan daerah serta membangun kemitraan yang inklusif dan berkelanjutan.
                  </p>
                </div>
              </div>
            </div>

            {/* Digdaya */}
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Digdaya</h3>
                  <p className="text-sm font-medium text-primary mb-3">(Kekuatan dan Ketangguhan)</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Digdaya</strong> mencerminkan kekuatan, ketangguhan, dan kapasitas nyata dalam menjalankan usaha. Nilai ini diwujudkan melalui profesionalisme, kualitas layanan, serta komitmen terhadap kinerja yang dapat diandalkan dan dipertanggungjawabkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ringkasan Filosofi */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ringkasan Filosofi</h2>
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-white/90 text-sm leading-relaxed">
              Secara utuh, filosofi <strong className="text-white">PT Samasta Nusantara Digdaya</strong> menegaskan tekad Perseroan untuk menjadi perusahaan nasional yang memiliki kapasitas menyeluruh, berdaya saing tinggi, dan berlandaskan integritas, guna menghadirkan nilai tambah dan dampak positif yang berkelanjutan bagi seluruh pemangku kepentingan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SejarahPage;
