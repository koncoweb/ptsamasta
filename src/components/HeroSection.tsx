import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy/40 to-navy-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          Solusi Terpadu Dalam Pelayanan{" "}
          <span className="text-gradient-gold italic">One-Stop Solution</span>
          <br />
          Untuk Membangun Pertumbuhan Bisnis Secara Profesional Dan Berkelanjutan
        </h1>
        <a
          href="#tentang"
          className="inline-block mt-4 px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary-foreground hover:text-navy transition-all duration-300"
        >
          PELAJARI TENTANG KAMI
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
