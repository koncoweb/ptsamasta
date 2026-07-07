import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TentangKami from "@/components/profile/TentangKami";
import StrukturManajemen from "@/components/profile/StrukturManajemen";
import SejarahPage from "@/components/profile/SejarahPage";
import LegalitasPage from "@/components/profile/LegalitasPage";
import KeunggulanPage from "@/components/profile/KeunggulanPage";
import LeadershipDetail from "@/components/profile/LeadershipDetail";
import buildingBg from "@/assets/building-bg.jpg";

const subPages = [
  { key: "tentang-kami", label: "Tentang Kami" },
  { key: "struktur-manajemen", label: "Struktur Manajemen" },
  { key: "sejarah", label: "Sejarah" },
  { key: "legalitas", label: "Legalitas & Perizinan" },
  { key: "keunggulan", label: "Keunggulan" }
];

const Profile = () => {
  const { subPage } = useParams();

  if (!subPage) {
    return <Navigate to="/profil/tentang-kami" replace />;
  }

  const activeTab = subPage;

  // Render dynamic leadership profile if tab is not a standard subpage
  const isStandardTab = subPages.some(p => p.key === activeTab);
  if (!isStandardTab) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <LeadershipDetail slug={activeTab} />
        </main>
        <Footer />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "tentang-kami":
        return <TentangKami />;
      case "struktur-manajemen":
        return <StrukturManajemen />;
      case "sejarah":
        return <SejarahPage />;
      case "legalitas":
        return <LegalitasPage />;
      case "keunggulan":
        return <KeunggulanPage />;
      default:
        return <TentangKami />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner with building background */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={buildingBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1E3A8A]/85" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-start gap-2 text-sm text-primary-foreground/60 mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Beranda</Link>
            <span>&gt;</span>
            <span className="text-primary-foreground/80">Profil</span>
            <span>&gt;</span>
            <span className="text-primary-foreground">
              {subPages.find((s) => s.key === activeTab)?.label}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            PT Samasta Nusantara Digdaya
          </h1>
          <p className="text-primary-foreground/70 text-sm">
            Dipercaya oleh Platform Pengadaan Terkemuka
          </p>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,80 C360,120 720,0 1440,80 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Sub-navigation tabs */}
      <div className="bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          














        </div>
      </div>

      {/* Content */}
      <main>{renderContent()}</main>

      <Footer />
    </div>);

};

export default Profile;