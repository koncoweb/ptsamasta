import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import logoSamasta from "@/assets/logo-samasta.png";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-navy-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoSamasta} alt="PT Samasta" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Perusahaan jasa dan pengadaan yang berpengalaman dalam menyediakan berbagai layanan profesional untuk mendukung pertumbuhan bisnis UMKM, Startup, dan Perusahaan di Indonesia.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-gold transition-colors">Profil Perusahaan</a></li>
              <li><a href="#layanan" className="hover:text-gold transition-colors">Layanan</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Portofolio</a></li>
              <li><a href="#berita" className="hover:text-gold transition-colors">Berita</a></li>
              <li><a href="#kontak" className="hover:text-gold transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-gold" />
                <span>Jl. Tergalent, RT.01/RW.3, Pademangan, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-gold" />
                <span>+62 856-1397-4228</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-gold" />
                <span>info@snd.co.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/50">
          <span>© 2025 PT Samasta Nusantara Digdaya. All rights reserved.</span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
