import { ArrowRight } from "lucide-react";

interface Article {
  id: number;
  category: string;
  categoryColor: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: "Kerjasama Bisnis",
    categoryColor: "bg-gold text-accent-foreground",
    date: "28 Januari 2025",
    title: "Menjajaki Potensi Peluang Kerjasama Strategis dengan Kamar Dagang dan Industri",
    excerpt: "PT Samasta Nusantara Digdaya membuka peluang kerjasama strategis dengan berbagai stakeholder untuk mengembangkan layanan bisnis yang komprehensif.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    category: "Teknologi",
    categoryColor: "bg-navy text-primary-foreground",
    date: "15 Februari 2025",
    title: "Strategi Transformasi Digital untuk Meningkatkan Efisiensi Bisnis",
    excerpt: "Melalui transformasi digital yang terencana, perusahaan dapat meningkatkan efisiensi operasional dan memperluas jangkauan pasar secara signifikan.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    category: "Hukum & Regulasi",
    categoryColor: "bg-navy-light text-primary-foreground",
    date: "17 Januari 2025",
    title: "Pentingnya Kepatuhan Hukum dan Regulasi dalam Bisnis B2B",
    excerpt: "Regulasi yang tepat akan memberikan fondasi kuat bagi perusahaan dalam menjalankan operasi bisnis B2B yang berkelanjutan dan terpercaya.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
  },
];

const ArticlesSection = () => {
  return (
    <section id="berita" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Informasi Perusahaan</h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Ketahui lebih jauh tentang insight perusahaan kami dengan detail terkini mengenai layanan kami secara detail.
            Dengan idam-idama yang jelas sebagai pelayanan terbaik, PT Samasta Nusantara Digdaya Terdepan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.id} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${a.categoryColor}`}>
                  {a.category}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">{a.date}</p>
                <h3 className="font-bold text-foreground text-base mb-2 line-clamp-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{a.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold transition-colors">
                  Baca Selengkapnya <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-block px-8 py-3 border-2 border-foreground text-foreground font-semibold text-sm rounded-lg hover:bg-foreground hover:text-background transition-all duration-300">
            LIHAT SEMUA ARTIKEL
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
