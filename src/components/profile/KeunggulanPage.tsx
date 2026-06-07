import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getIcon } from "@/lib/icons";

type Item = { id: string; title: string; description: string | null; icon: string | null };

const KeunggulanPage = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    supabase
      .from("keunggulan")
      .select("id,title,description,icon,sort_order")
      .order("sort_order")
      .then(({ data }) => setItems(data ?? []));
  }, []);

  return (
    <div>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm text-muted-foreground leading-relaxed">
            PT Samasta Nusantara Digdaya memiliki sejumlah keunggulan yang menjadikannya mitra strategis yang handal dan terpercaya dalam berbagai sektor pengadaan barang dan jasa.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Keunggulan Perusahaan
          </h2>
          <div className="space-y-6">
            {items.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.id} className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeunggulanPage;
