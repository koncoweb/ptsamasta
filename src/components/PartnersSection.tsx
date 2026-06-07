import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Partner = { name: string; logo_url: string };

const PartnersSection = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    supabase
      .from("partners")
      .select("name,logo_url,sort_order,is_active,group_name")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .then(({ data }) => setPartners(data ?? []));
  }, []);

  const doubled = [...partners, ...partners];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mitra Perusahaan</h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
          Dipercaya oleh berbagai platform pengadaan dan institusi terkemuka di Indonesia
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center animate-marquee w-max gap-16 px-8">
          {doubled.map((p, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center h-20 w-40">
              <img src={p.logo_url} alt={p.name} className="max-h-16 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
