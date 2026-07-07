import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Briefcase, GraduationCap, Users, Heart, BookOpen, ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Member = {
  id: string;
  slug: string;
  name: string;
  position: string;
  photo_url: string | null;
  bio: string | null;
  detail_content: string | null;
};

type Section = {
  title: string;
  content: string;
};

const getSectionIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("jabatan") || t.includes("pengalaman") || t.includes("keahlian")) return Briefcase;
  if (t.includes("pendidikan")) return GraduationCap;
  if (t.includes("organisasi") || t.includes("kepemimpinan") || t.includes("afiliasi")) return Users;
  if (t.includes("kontribusi") || t.includes("nilai") || t.includes("heart")) return Heart;
  return BookOpen;
};

const LeadershipDetail = ({ slug }: { slug: string }) => {
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    supabase
      .from("struktur_manajemen")
      .select("id,slug,name,position,photo_url,bio,detail_content")
      .eq("slug", slug)
      .eq("is_active", true)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!error && data) {
          setMember(data);
        }
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#1E3A8A]" />
      </div>
    );
  }

  if (!member) {
    return (
      <div className="py-20 text-center container mx-auto px-4">
        <p className="text-muted-foreground">Profil tidak ditemukan.</p>
        <Link to="/profil/struktur-manajemen" className="text-[#2563EB] underline mt-4 inline-block">
          Kembali ke Struktur Manajemen
        </Link>
      </div>
    );
  }

  // Parse detail_content by ## header sections
  const sections: Section[] = [];
  if (member.detail_content) {
    const rawSections = member.detail_content.split(/(?=^## )/m);
    rawSections.forEach((s) => {
      const trimmed = s.trim();
      if (trimmed.startsWith("## ")) {
        const lines = trimmed.split("\n");
        const title = lines[0].replace(/^##\s*/, "").trim();
        const content = lines.slice(1).join("\n").trim();
        if (title && content) {
          sections.push({ title, content });
        }
      } else if (trimmed) {
        // If there's content before any ##, make it a general section
        sections.push({ title: "Detail", content: trimmed });
      }
    });
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#1E3A8A] pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-primary-foreground/60 mb-8">
            <Link to="/" className="hover:text-gold transition-colors">Beranda</Link>
            <span>&gt;</span>
            <Link to="/profil/tentang-kami" className="hover:text-gold transition-colors">Profil</Link>
            <span>&gt;</span>
            <Link to="/profil/struktur-manajemen" className="hover:text-gold transition-colors">Struktur Manajemen</Link>
            <span>&gt;</span>
            <span className="text-primary-foreground">{member.position}</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: sidebar card */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center flex-shrink-0 w-64">
              <div className="text-primary-foreground/60 text-xs mb-3">Profil Kepemimpinan</div>
              <div className="w-40 h-40 rounded-xl mx-auto mb-4 overflow-hidden bg-white/20 flex items-center justify-center border-4 border-white/10">
                {member.photo_url ? (
                  <img src={member.photo_url} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <Users size={64} className="text-primary-foreground/60" />
                )}
              </div>
              <h4 className="text-primary-foreground font-bold text-sm leading-snug">{member.name}</h4>
              <Link
                to="/profil/struktur-manajemen"
                className="inline-block mt-3 border border-primary-foreground/30 text-primary-foreground text-xs px-4 py-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                {member.position}
              </Link>
            </div>

            {/* Right: main info */}
            <div className="text-primary-foreground flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-1">
                {member.name}
              </h2>
              <span className="text-primary-foreground/70 text-sm font-medium">{member.position}</span>
              {member.bio && (
                <p className="text-primary-foreground/80 text-sm leading-relaxed mt-4 max-w-xl whitespace-pre-wrap">
                  {member.bio}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,80 C360,120 720,0 1440,80 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Dynamic Sections */}
      <div className="divide-y divide-border">
        {sections.map((sect, i) => {
          const Icon = getSectionIcon(sect.title);
          const isEven = i % 2 === 1;
          return (
            <section key={sect.title} className={`py-12 ${isEven ? "bg-muted/40" : "bg-background"}`}>
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{sect.title}</h3>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-4 whitespace-pre-wrap">
                  {sect.content.split("\n\n").map((para, idx) => {
                    if (para.trim().startsWith("-") || para.trim().startsWith("*")) {
                      const listItems = para
                        .split("\n")
                        .map((item) => item.replace(/^[-*]\s*/, "").trim())
                        .filter(Boolean);
                      return (
                        <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
                          {listItems.map((item, key) => (
                            <li key={key}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={idx}>{para}</p>;
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-12 bg-muted text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Pelajari Lebih Lanjut tentang Tim Kami
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Lihat profil lengkap Dewan Komisaris dan Direksi PT Samasta Nusantara Digdaya
          </p>
          <Link
            to="/profil/struktur-manajemen"
            className="inline-block px-6 py-2.5 bg-[#2563EB] text-primary-foreground text-sm font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors"
          >
            <span className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Kembali ke Struktur Manajemen
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LeadershipDetail;
