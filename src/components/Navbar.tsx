import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoSamasta from "@/assets/logo-samasta.png";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Berita", href: "#berita" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isRoute = (href: string) => href.startsWith("/");

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
              {isRoute(l.href) ? (
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
                {isRoute(l.href) ? (
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