import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TentangKami from "@/components/profile/TentangKami";
import StrukturManajemen from "@/components/profile/StrukturManajemen";
import SejarahPage from "@/components/profile/SejarahPage";
import LegalitasPage from "@/components/profile/LegalitasPage";
import KeunggulanPage from "@/components/profile/KeunggulanPage";

const subPages = [
  { key: "tentang", label: "Tentang Kami" },
  { key: "struktur", label: "Struktur Manajemen" },
  { key: "sejarah", label: "Sejarah" },
  { key: "legalitas", label: "Legalitas & Perizinan" },
  { key: "keunggulan", label: "Keunggulan" },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("tentang");

  const renderContent = () => {
    switch (activeTab) {
      case "tentang":
        return <TentangKami />;
      case "struktur":
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

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#1E3A8A] pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-start gap-2 text-sm text-primary-foreground/60 mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-primary-foreground/80">Profil Perusahaan</span>
            <span>/</span>
            <span className="text-primary-foreground">
              {subPages.find((s) => s.key === activeTab)?.label}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            PT Samasta Nusantara Digdaya
          </h1>
          <p className="text-primary-foreground/70 text-sm">
            Dipercaya oleh Platform Pengadaan Terkemuka
          </p>
        </div>
      </section>

      {/* Sub-navigation tabs */}
      <div className="bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-1 scrollbar-hide">
            {subPages.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap px-4 py-3 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === tab.key
                    ? "bg-[#1E3A8A] text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main>{renderContent()}</main>

      <Footer />
    </div>
  );
};

export default Profile;
