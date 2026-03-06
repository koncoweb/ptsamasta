const CTASection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Ingin Tahu Lebih Lanjut tentang Kami?
        </h2>
        <p className="text-muted-foreground text-sm mb-8">
          Tim kami siap menjawab pertanyaan Anda dan membantu menemukan solusi terbaik untuk kebutuhan bisnis Anda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontak"
            className="px-8 py-3 bg-navy text-primary-foreground font-semibold text-sm rounded-lg hover:bg-navy-light transition-colors duration-300"
          >
            Hubungi Tim Kami
          </a>
          <a
            href="/layanan"
            className="px-8 py-3 border-2 border-navy text-navy font-semibold text-sm rounded-lg hover:bg-navy hover:text-primary-foreground transition-all duration-300"
          >
            Lihat Layanan Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
