import mbizmarket from "@/assets/partners/mbizmarket.png";
import padiUmkm from "@/assets/partners/padi-umkm.png";
import belaPengadaan from "@/assets/partners/bela-pengadaan.png";
import siplah from "@/assets/partners/siplah.png";
import eCatalogue from "@/assets/partners/e-catalogue.png";
import lkpp from "@/assets/partners/lkpp.png";

const partners = [
  { name: "Mbizmarket", src: mbizmarket },
  { name: "PaDi UMKM", src: padiUmkm },
  { name: "Bela Pengadaan", src: belaPengadaan },
  { name: "SIPLah", src: siplah },
  { name: "e-Catalogue", src: eCatalogue },
  { name: "LKPP", src: lkpp },
];

const PartnersSection = () => {
  // Double the array for seamless loop
  const doubled = [...partners, ...partners];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mitra Perusahaan</h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
          Dipercaya oleh berbagai platform pengadaan dan institusi terkemuka di Indonesia
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex items-center animate-marquee w-max gap-16 px-8">
          {doubled.map((p, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center h-20 w-40">
              <img src={p.src} alt={p.name} className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
