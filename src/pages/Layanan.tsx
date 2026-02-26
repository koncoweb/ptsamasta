import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayananOverview from "@/components/layanan/LayananOverview";
import LayananDetail from "@/components/layanan/LayananDetail";
import buildingBg from "@/assets/building-bg.jpg";

const subPages = [
  { key: "overview", label: "Bidang Usaha" },
  { key: "pemeliharaan", label: "Pemeliharaan & Lingkungan" },
  { key: "jasa-profesional", label: "Jasa Profesional & SDM" },
  { key: "perdagangan", label: "Perdagangan Besar" },
  { key: "event-organizer", label: "Event Organizer & Media" },
];

const Layanan = () => {
  const { subPage } = useParams();

  if (!subPage) {
    return <Navigate to="/layanan/overview" replace />;
  }

  const activeTab = subPage;
  const currentLabel = subPages.find((s) => s.key === activeTab)?.label || "Layanan";

  const renderContent = () => {
    if (activeTab === "overview") return <LayananOverview />;
    return <LayananDetail serviceKey={activeTab} />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={buildingBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1E3A8A]/85" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-start gap-2 text-sm text-primary-foreground/60 mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Beranda</Link>
            <span>&gt;</span>
            <span className="text-primary-foreground/80">Layanan</span>
            {activeTab !== "overview" && (
              <>
                <span>&gt;</span>
                <span className="text-primary-foreground">{currentLabel}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Layanan Kami
          </h1>
          <p className="text-primary-foreground/70 text-sm max-w-xl mx-auto">
            Solusi Terpadu Dalam Pelayanan <em className="font-semibold">One - Stop Solution</em> Untuk Membangun Pertumbuhan Bisnis Secara Profesional Dan Berkelanjutan
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,80 C360,120 720,0 1440,80 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      <main>{renderContent()}</main>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Butuh layanan sesuai kebutuhan Anda?
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Tim profesional kami siap membantu Anda menemukan solusi terbaik untuk mengembangkan bisnis Anda
          </p>
          <Link
            to="#kontak"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1E3A8A] font-semibold rounded-lg hover:bg-white/90 transition-colors text-sm"
          >
            Ajukan Penawaran →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Layanan;
