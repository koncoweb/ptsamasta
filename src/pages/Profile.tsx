import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TentangKami from "@/components/profile/TentangKami";
import StrukturManajemen from "@/components/profile/StrukturManajemen";
import SejarahPage from "@/components/profile/SejarahPage";
import LegalitasPage from "@/components/profile/LegalitasPage";
import KeunggulanPage from "@/components/profile/KeunggulanPage";

const subPages = [
{ key: "tentang-kami", label: "Tentang Kami" },
{ key: "struktur-manajemen", label: "Struktur Manajemen" },
{ key: "sejarah", label: "Sejarah" },
{ key: "legalitas", label: "Legalitas & Perizinan" },
{ key: "keunggulan", label: "Keunggulan" }];


const Profile = () => {
  const { subPage } = useParams();

  // Default redirect to tentang-kami
  if (!subPage) {
    return <Navigate to="/profil/tentang-kami" replace />;
  }

  const activeTab = subPage;

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

      {/* Hero Banner */}
      





















      {/* Sub-navigation tabs */}
      <div className="bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-1 scrollbar-hide">
            {subPages.map((tab) => {}











            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <main>{renderContent()}</main>

      <Footer />
    </div>);

};

export default Profile;