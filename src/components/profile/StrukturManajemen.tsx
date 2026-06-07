import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Member = {
  id: string;
  slug: string;
  name: string;
  position: string;
  photo_url: string | null;
  level: number;
  bio: string | null;
};

const StrukturManajemen = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    supabase
      .from("struktur_manajemen")
      .select("id,slug,name,position,photo_url,level,bio,sort_order,is_active")
      .eq("is_active", true)
      .order("level")
      .order("sort_order")
      .then(({ data }) => setMembers(data ?? []));
  }, []);

  const komisaris = members.filter((m) => m.level <= 2);
  const direksi = members.filter((m) => m.level >= 3);

  return (
    <div>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Kepemimpinan yang Visioner dan Berpengalaman
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tim manajemen PT Samasta Nusantara Digdaya terdiri dari para profesional berpengalaman dengan keahlian yang terbukti di berbagai industri.
          </p>
        </div>
      </section>

      {komisaris.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Dewan Komisaris</h3>
            <p className="text-sm text-muted-foreground mb-10">
              Pengawas independen yang memastikan tata kelola perusahaan yang baik
            </p>

            <div className={`grid grid-cols-1 md:grid-cols-${Math.min(komisaris.length, 2)} gap-8`}>
              {komisaris.map((m) => (
                <div key={m.id} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#1E3A8A]/20 bg-muted flex items-center justify-center">
                    {m.photo_url ? (
                      <img src={m.photo_url} alt={m.name} className="w-full h-full object-cover" />
                    ) : (
                      <Users size={40} className="text-[#1E3A8A]" />
                    )}
                  </div>
                  <h4 className="font-bold text-foreground">{m.name}</h4>
                  <Link
                    to={`/profil/${m.slug}`}
                    className="inline-block mt-2 bg-[#1E3A8A] text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full hover:bg-[#1D4ED8] transition-colors cursor-pointer"
                  >
                    {m.position}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {direksi.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Dewan Direksi</h3>
            <p className="text-sm text-muted-foreground mb-10">
              Pemimpin strategis yang menjalankan visi dan misi perusahaan
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {direksi.map((m) => (
                <div key={m.id} className="bg-card border border-border rounded-xl p-8">
                  <div className="w-24 h-24 rounded-full bg-[#1E3A8A]/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {m.photo_url ? (
                      <img src={m.photo_url} alt={m.name} className="w-full h-full object-cover" />
                    ) : (
                      <Users size={40} className="text-[#1E3A8A]" />
                    )}
                  </div>
                  <h4 className="font-bold text-foreground text-lg">{m.name}</h4>
                  <span className="inline-block mt-2 bg-[#2563EB] text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {m.position}
                  </span>
                  {m.bio && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default StrukturManajemen;
