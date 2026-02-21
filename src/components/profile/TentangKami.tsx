import { Eye, Shield, TrendingUp, CheckCircle } from "lucide-react";
import logoSamasta from "@/assets/logo-samasta.png";
import partnersLkpp from "@/assets/partners/lkpp.png";
import partnersSiplah from "@/assets/partners/siplah.png";
import partnersPadi from "@/assets/partners/padi-umkm.png";
import partnersBela from "@/assets/partners/bela-pengadaan.png";
import partnersEcat from "@/assets/partners/e-catalogue.png";
import partnersMbiz from "@/assets/partners/mbizmarket.png";

const partners = [
  { src: partnersLkpp, alt: "LKPP" },
  { src: partnersSiplah, alt: "SIPLah" },
  { src: partnersPadi, alt: "PaDi UMKM" },
  { src: partnersBela, alt: "Bela Pengadaan" },
  { src: partnersEcat, alt: "E-Catalogue" },
  { src: partnersMbiz, alt: "MBizmarket" },
];

const misiPoints = [
  "Menyediakan produk dan layanan yang berkualitas tinggi melalui penerapan standar profesionalisme, efisiensi, dan kepatuhan terhadap peraturan perundang-undangan yang berlaku.",
  "Membangun sistem kerja dan manajemen yang terintegrasi, adaptif, serta berorientasi pada peningkatan kinerja dan kepuasan pelanggan/kooperasinya.",
  "Menjunjung tinggi nilai integritas, transparansi, dan akuntabilitas sebagai landasan utama dalam setiap aktivitas usaha.",
  "Membangun dan memperkuat kemitraan strategis dengan pemerintah, sektor swasta, dan pemangku kepentingan lainnya secara berkelanjutan.",
  "Meningkatkan kapasitas sumber daya manusia secara berkesinambungan guna mendukung daya saing dan keberlanjutan perusahaan.",
  "Memberikan nilai tambah dan dampak positif bagi masyarakat, lingkungan, serta pembangunan nasional.",
];

const TentangKami = () => {
  return (
    <div>
      {/* Partners logos */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((p) => (
              <img key={p.alt} src={p.src} alt={p.alt} className="h-10 md:h-12 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Profil Perusahaan */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-block bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Profil Perusahaan
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Profil Perusahaan</h2>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">PT SAMASTA NUSANTARA DIGDAYA</strong> berdiri sebagai entitas bisnis yang progresif dan multi-disiplin, berdedikasi penuh untuk menjadi garda terdepan dalam penyediaan solusi terintegrasi bagi berbagai sektor industri strategis di Indonesia, mencakup industri pengolahan, perdagangan besar, logistik, penyediaan jasa, serta aktivitas profesional dan teknis. Kami lahir dari visi untuk menyatukan berbagai keahlian operasional di bawah satu payung manajemen yang profesional, transparan, dan berorientasi pada hasil yang memiliki kapasitas menyeluruh dan pendekatan terintegrasi, dengan fokus pada penyediaan solusi yang efektif, efisien, dan berorientasi pada kualitas serta keberlanjutan. Seiring dengan dinamika pasar yang kian kompleks, kami terus melakukan transformasi dan ekspansi portofolio bisnis guna menjawab kebutuhan mitra kerja kami secara holistik.
            </p>
            <p>
              Didirikan berdasarkan hukum Negara Republik Indonesia dan berkedudukan di <strong className="text-foreground">Kota Administrasi Jakarta Pusat</strong>, PT Samasta Nusantara Digdaya berkomitmen untuk menjalankan kegiatan usaha secara profesional dengan menetapkan standar operasional yang tingkat, sistem manajemen yang adaptif, serta tata kelola perusahaan yang baik. Dalam setiap lini operasional, Perseroan menjunjung tinggi prinsip <strong className="text-foreground">integritas, akuntabilitas, dan kepatuhan</strong> terhadap peraturan perundang-undangan yang berlaku sebagai fondasi utama dalam membangun kepercayaan dan kredibilitas.
            </p>
            <p>
              Dengan dukungan sumber daya manusia yang kompeten, jaringan kerja yang luas, serta portofolio bidang usaha yang beragam, PT Samasta Nusantara Digdaya hadir sebagai <strong className="text-foreground">mitra strategis</strong> bagi sektor pemerintah maupun swasta. Perseroan secara berkelanjutan mengembangkan kapasitas dan kapabilitasnya untuk merespons kebutuhan pasar yang dinamis, sekaligus menghadirkan nilai tambah melalui layanan yang terukur dan responsif. Melalui komitmen tersebut, PT Samasta Nusantara Digdaya optimis dapat berkontribusi secara nyata dalam mendukung pembangunan nasional dan menciptakan dampak positif yang berkelanjutan bagi seluruh pemangku kepentingan.
            </p>
          </div>

          {/* Highlight quote */}
          <div className="mt-8 bg-gradient-to-r from-[#1E3A8A] to-[#1D4ED8] rounded-xl p-6 text-primary-foreground">
            <p className="text-sm leading-relaxed italic">
              Kami percaya bahwa manifestasi dan konsep <strong>One-Stop Solution</strong> yang efisien. Dengan dukungan tim ahli yang kompeten dan integritas yang tak tergoyahkan, kami tidak hanya menyajikan layanan, tetapi kami memberikan jaminan bahwa setiap layanan yang dipercayakan kepada kami akan dikelola dengan standar operasional terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Visi & Misi Kami</h2>
          <p className="text-sm text-muted-foreground mb-10">
            Panduan strategis yang mengarahkan langkah kami dalam melayani mitra bisnis
          </p>

          {/* Visi */}
          <div className="bg-card border border-border rounded-xl p-8 mb-8 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center">
                <Eye size={20} className="text-[#1E3A8A]" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Visi</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Menjadi <strong className="text-foreground">perusahaan nasional yang unggul, terpercaya, dan berdaya saing tinggi</strong> dalam menyediakan solusi usaha terintegrasi yang berkelanjutan serta memberikan kontribusi nyata bagi pembangunan dan kemajuan Nusantara.
            </p>
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex flex-col items-center gap-1">
                <Shield size={20} className="text-[#1E3A8A]" />
                <span className="text-xs text-muted-foreground">Unggul</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Eye size={20} className="text-[#1E3A8A]" />
                <span className="text-xs text-muted-foreground">Terpercaya</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <TrendingUp size={20} className="text-[#1E3A8A]" />
                <span className="text-xs text-muted-foreground">Berdaya Saing</span>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="bg-card border border-border rounded-xl p-8 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center">
                <TrendingUp size={20} className="text-[#1E3A8A]" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Misi</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Dalam upaya mewujudkan visi besar perusahaan, <strong className="text-foreground">PT Samasta Nusantara Digdaya</strong> berkomitmen untuk:
            </p>
            <ul className="space-y-3">
              {misiPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
