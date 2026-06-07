import { useEffect, useState } from "react";
import { Eye, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Section = { section_key: string; title: string | null; body: string | null };

const renderMarkdown = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );

const TentangKami = () => {
  const [sections, setSections] = useState<Record<string, Section>>({});
  const [partners, setPartners] = useState<{ name: string; logo_url: string }[]>([]);

  useEffect(() => {
    supabase
      .from("about_us")
      .select("section_key,title,body,sort_order")
      .order("sort_order")
      .then(({ data }) => {
        const map: Record<string, Section> = {};
        (data ?? []).forEach((s) => (map[s.section_key] = s));
        setSections(map);
      });
    supabase
      .from("partners")
      .select("name,logo_url")
      .eq("is_active", true)
      .order("sort_order")
      .then(({ data }) => setPartners(data ?? []));
  }, []);

  const profil = sections["profil"];
  const highlight = sections["highlight"];
  const visi = sections["visi"];
  const misi = sections["misi"];

  const misiPoints = (misi?.body ?? "")
    .split("\n")
    .map((s) => s.replace(/^[-•]\s*/, "").trim())
    .filter(Boolean);

  return (
    <div>
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((p) => (
              <img key={p.name} src={p.logo_url} alt={p.name} className="h-10 md:h-12 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-block bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Profil Perusahaan
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{profil?.title ?? "Profil Perusahaan"}</h2>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            {(profil?.body ?? "").split(/\n\n+/).map((para, i) => (
              <p key={i}>{renderMarkdown(para)}</p>
            ))}
          </div>

          {highlight && (
            <div className="mt-8 bg-gradient-to-r from-[#1E3A8A] to-[#1D4ED8] rounded-xl p-6 text-primary-foreground">
              <p className="text-sm leading-relaxed italic">{highlight.body}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Visi & Misi Kami</h2>
          <p className="text-sm text-muted-foreground mb-10">
            Panduan strategis yang mengarahkan langkah kami dalam melayani mitra bisnis
          </p>

          {visi && (
            <div className="bg-card border border-border rounded-xl p-8 mb-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center">
                  <Eye size={20} className="text-[#1E3A8A]" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{visi.title ?? "Visi"}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{renderMarkdown(visi.body ?? "")}</p>
              <div className="flex items-center justify-center gap-8 mt-6">
                <div className="flex flex-col items-center gap-1"><Shield size={20} className="text-[#1E3A8A]" /><span className="text-xs text-muted-foreground">Unggul</span></div>
                <div className="flex flex-col items-center gap-1"><Eye size={20} className="text-[#1E3A8A]" /><span className="text-xs text-muted-foreground">Terpercaya</span></div>
                <div className="flex flex-col items-center gap-1"><TrendingUp size={20} className="text-[#1E3A8A]" /><span className="text-xs text-muted-foreground">Berdaya Saing</span></div>
              </div>
            </div>
          )}

          {misi && (
            <div className="bg-card border border-border rounded-xl p-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center">
                  <TrendingUp size={20} className="text-[#1E3A8A]" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{misi.title ?? "Misi"}</h3>
              </div>
              {misiPoints.length > 1 ? (
                <ul className="space-y-3">
                  {misiPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span>{renderMarkdown(p)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed">{renderMarkdown(misi.body ?? "")}</p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
