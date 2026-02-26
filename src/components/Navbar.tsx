import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoSamasta from "@/assets/logo-samasta.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const profilSubPages = [
  { label: "Tentang Kami", href: "/profil/tentang-kami" },
  { label: "Struktur Manajemen", href: "/profil/struktur-manajemen" },
  { label: "Sejarah", href: "/profil/sejarah" },
  { label: "Legalitas & Perizinan", href: "/profil/legalitas" },
  { label: "Keunggulan", href: "/profil/keunggulan" },
];

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil", hasDropdown: true },
  { label: "Layanan", href: "/layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Berita", href: "#berita" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profilOpen, setProfilOpen] = useState(false);
  const location = useLocation();

  const isRoute = (href: string) => href.startsWith("/");
  const isProfilActive = location.pathname.startsWith("/profil");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoSamasta} alt="PT Samasta Nusantara Digdaya" className="h-10 w-auto object-contain" />
          <span className="text-primary-foreground font-bold text-sm hidden sm:block leading-tight">
            PT SAMASTA NUSANTARA DIGDAYA
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              {l.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isProfilActive
                          ? "text-gold"
                          : "text-primary-foreground/80 hover:text-gold"
                      }`}
                    >
                      {l.label}
                      <ChevronDown size={14} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-52">
                    {profilSubPages.map((sub) => (
                      <DropdownMenuItem key={sub.href} asChild>
                        <Link
                          to={sub.href}
                          className={`w-full cursor-pointer ${
                            location.pathname === sub.href ? "font-semibold text-[#1E3A8A]" : ""
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : isRoute(l.href) ? (
                <Link
                  to={l.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === l.href
                      ? "text-gold"
                      : "text-primary-foreground/80 hover:text-gold"
                  }`}
                >
                  {l.label}
                </Link>
              ) : (
                <a href={l.href} className="text-primary-foreground/80 hover:text-gold text-sm font-medium transition-colors">
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-dark/95 backdrop-blur-md border-t border-primary-foreground/10">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setProfilOpen(!profilOpen)}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isProfilActive ? "text-gold" : "text-primary-foreground/80 hover:text-gold"
                      }`}
                    >
                      {l.label}
                      <ChevronDown size={14} className={`transition-transform ${profilOpen ? "rotate-180" : ""}`} />
                    </button>
                    {profilOpen && (
                      <ul className="ml-4 mt-2 flex flex-col gap-2">
                        {profilSubPages.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              to={sub.href}
                              onClick={() => { setOpen(false); setProfilOpen(false); }}
                              className="text-primary-foreground/70 hover:text-gold text-sm transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : isRoute(l.href) ? (
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-primary-foreground/80 hover:text-gold text-sm font-medium transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-gold text-sm font-medium transition-colors">
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
