import heroBg from "@/assets/hero-building.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/80 via-[#1D4ED8]/60 to-[#1E3A8A]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-6">
          Solusi Terpadu Dalam Pelayanan{" "}
          <span className="text-gradient-gold italic">One-Stop Solution</span>
          <br />
          Untuk Membangun Pertumbuhan Bisnis Secara Profesional Dan Berkelanjutan
        </h1>
        <a
          href="#tentang"
          className="inline-block mt-4 px-8 py-3 bg-[#2563EB] text-primary-foreground font-semibold text-sm rounded-lg hover:bg-[#1D4ED8] transition-all duration-300"
        >
          PELAJARI TENTANG KAMI
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
