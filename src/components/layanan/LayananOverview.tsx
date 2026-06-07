import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { getIcon } from "@/lib/icons";

type Category = {
  id: string;
  slug: string;
  name: string;
  short_description: string | null;
  icon: string | null;
  color_theme: string | null;
};

const LayananOverview = () => {
  const [services, setServices] = useState<Category[]>([]);

  useEffect(() => {
    supabase
      .from("service_categories")
      .select("id,slug,name,short_description,icon,color_theme,sort_order,is_active")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .then(({ data }) => setServices(data ?? []));
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Bidang Usaha Kami</h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-2xl mx-auto">
            PT Samasta Nusantara Digdaya menyediakan berbagai layanan terintegrasi untuk mendukung kebutuhan bisnis Anda dengan standar profesional dan kualitas terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => {
            const Icon = getIcon(s.icon);
            const gradient = s.color_theme ?? "from-blue-500 to-indigo-600";
            return (
              <div key={s.id} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className={`bg-gradient-to-r ${gradient} p-6`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{s.name}</h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{s.short_description}</p>
                  <Link
                    to={`/layanan/${s.slug}`}
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-[#1E3A8A] text-white font-semibold rounded-lg hover:bg-[#1D4ED8] transition-colors text-sm"
                  >
                    Lihat Detail Layanan →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LayananOverview;
