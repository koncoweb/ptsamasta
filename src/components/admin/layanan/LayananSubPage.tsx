import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon, LayoutGrid, Plus, Trash2, ChevronUp, ChevronDown,
  Users, GalleryHorizontal, FileText, ListChecks, Workflow, Sparkles, Phone, Eye, EyeOff,
} from "lucide-react";
import { SectionCard, Field } from "@/components/admin/tentang-kami/SectionCard";
import { UploadBox } from "@/components/admin/tentang-kami/UploadBox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CmsPageShell } from "@/components/admin/cms/CmsPageShell";
import { useCmsPage } from "@/hooks/useCmsPage";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const nid = () => String(Date.now() + Math.floor(Math.random() * 1000));
const upd = <T extends { id: string }>(a: T[], id: string, p: Partial<T>) =>
  a.map((x) => (x.id === id ? { ...x, ...p } : x));
const rm = <T extends { id: string }>(a: T[], id: string) => a.filter((x) => x.id !== id);
const move = <T,>(a: T[], i: number, d: -1 | 1) => {
  const j = i + d; if (j < 0 || j >= a.length) return a;
  const n = [...a]; [n[i], n[j]] = [n[j], n[i]]; return n;
};

export type SubMeta = {
  slug: string;
  nama: string;
  warnaHero: string;
};

type Lingkup = {
  id: string; nama: string; deskripsi: string; icon: string; gambar: string;
  urutan: number; aktif: boolean;
  form: {
    judul: string; deskripsi: string;
    services: { id: string; nama: string; deskripsi: string; gambar: string; ruangLingkup: string }[];
    proses: { id: string; teks: string }[];
    keunggulan: { id: string; judul: string; deskripsi: string }[];
    bantuanEmail: string;
    bantuanTelepon: string;
  };
};

export function LayananSubPage({ meta }: { meta: SubMeta }) {
  const defaultCard = {
    nama: meta.nama, deskripsi: "", icon: "leaf", warna: "green",
    tombol: "Lihat Detail Layanan", urutan: 1, aktif: true,
  };
  const [card, setCard] = useState(defaultCard);
  const defaultHero = {
    judul: `Layanan ${meta.nama}`,
    subtitle: "Solusi profesional untuk kebutuhan bisnis Anda.",
    gambar: "", warna: meta.warnaHero,
  };
  const [hero, setHero] = useState(defaultHero);
  const [tentang, setTentang] = useState("");
  const defaultPartners = [
    { id: nid(), nama: "IPLah", logo: "" },
    { id: nid(), nama: "Catalogue", logo: "" },
    { id: nid(), nama: "LKPP", logo: "" },
  ];
  const [partners, setPartners] = useState<{ id: string; nama: string; logo: string }[]>(defaultPartners);
  const defaultClients = [
    { id: nid(), nama: "Pemerintah", emoji: "🏛️" },
    { id: nid(), nama: "Swasta", emoji: "🏢" },
    { id: nid(), nama: "Yayasan", emoji: "🎓" },
    { id: nid(), nama: "Perusahaan", emoji: "🏭" },
  ];
  const [clients, setClients] = useState<{ id: string; nama: string; emoji: string }[]>(defaultClients);
  const defaultKatalog = Array.from({ length: 8 }, () => ({ id: nid() }));
  const [katalog, setKatalog] = useState<{ id: string }[]>(defaultKatalog);

  const defaultLingkup: Lingkup[] = [
    {
      id: nid(), nama: "Ruang Lingkup 1", deskripsi: "", icon: "leaf", gambar: "",
      urutan: 1, aktif: true,
      form: {
        judul: "Ajukan Permintaan Penawaran",
        deskripsi: "Isi formulir di bawah ini untuk mendapatkan penawaran terbaik dari kami. Tim profesional kami akan menghubungi Anda dalam waktu 1×24 jam untuk membahas kebutuhan proyek Anda secara detail.",
        services: [
          { id: nid(), nama: "", deskripsi: "", gambar: "", ruangLingkup: "" },
        ],
        proses: [
          { id: nid(), teks: "Tim kami akan menghubungi Anda dalam waktu 1×24 jam" },
          { id: nid(), teks: "Diskusi kebutuhan dan spesifikasi proyek secara detail" },
          { id: nid(), teks: "Kami akan menyusun proposal dan penawaran harga" },
          { id: nid(), teks: "Mulai pengerjaan setelah kesepakatan tercapai" },
        ],
        keunggulan: [
          { id: nid(), judul: "Profesional", deskripsi: "Tim ahli dengan pengalaman bertahun-tahun" },
          { id: nid(), judul: "Responsif", deskripsi: "Respon cepat dalam 1×24 jam" },
          { id: nid(), judul: "Terpercaya", deskripsi: "Dipercaya oleh ratusan perusahaan" },
        ],
        bantuanEmail: "info@snd.co.id",
        bantuanTelepon: "+62 858-1397-4229",
      },
    },
  ];
  const [lingkup, setLingkup] = useState<Lingkup[]>(defaultLingkup);

  const [activeLingkup, setActiveLingkup] = useState(defaultLingkup[0]?.id ?? "");

  // ---- CMS integration (per sub slug) ----
  interface SubContent {
    card: typeof defaultCard;
    hero: typeof defaultHero;
    tentang: string;
    partners: { id: string; nama: string; logo: string }[];
    clients: { id: string; nama: string; emoji: string }[];
    katalog: { id: string }[];
    lingkup: Lingkup[];
  }
  const defaults: SubContent = { card: defaultCard, hero: defaultHero, tentang: "", partners: defaultPartners, clients: defaultClients, katalog: defaultKatalog, lingkup: defaultLingkup };
  const cms = useCmsPage<SubContent>(`layanan-${meta.slug}`);
  useEffect(() => {
    const fetchDbData = async () => {
      try {
        // 1. Fetch Category
        const { data: catData } = await supabase
          .from("service_categories")
          .select("*")
          .eq("slug", meta.slug)
          .maybeSingle();

        if (catData) {
          setCard({
            nama: catData.name,
            deskripsi: catData.short_description || "",
            icon: catData.icon || "leaf",
            warna: catData.color_theme || "green",
            tombol: "Lihat Detail Layanan",
            urutan: catData.sort_order || 1,
            aktif: catData.is_active,
          });

          setHero({
            judul: catData.name,
            subtitle: catData.short_description || "",
            gambar: catData.hero_image_url || "",
            warna: catData.color_theme || meta.warnaHero,
          });

          setTentang(catData.long_description || "");

          // 2. Fetch Scopes
          const { data: scopesData } = await supabase
            .from("service_scopes")
            .select("*")
            .eq("category_id", catData.id)
            .order("sort_order");

          if (scopesData && scopesData.length > 0) {
            const parsedScopes: Lingkup[] = [];
            for (const scope of scopesData) {
              // 3. Fetch scope items
              const { data: itemsData } = await supabase
                .from("service_scope_items")
                .select("*")
                .eq("scope_id", scope.id)
                .order("sort_order");

              const services = (itemsData ?? []).map((item) => {
                const details = item.details as any;
                return {
                  id: item.id,
                  nama: item.name,
                  deskripsi: item.description || "",
                  gambar: item.image_url || "",
                  ruangLingkup: details?.ruangLingkup || "",
                };
              });

              parsedScopes.push({
                id: scope.id,
                nama: scope.name,
                deskripsi: scope.description || "",
                icon: "leaf",
                gambar: scope.image_url || "",
                urutan: scope.sort_order || 1,
                aktif: scope.is_active,
                form: {
                  judul: "Ajukan Permintaan Penawaran",
                  deskripsi: "Isi formulir di bawah ini untuk mendapatkan penawaran terbaik dari kami.",
                  services,
                  proses: [],
                  keunggulan: [],
                  bantuanEmail: "info@samastanusantara.com",
                  bantuanTelepon: "+62 812-3456-7890",
                },
              });
            }
            setLingkup(parsedScopes);
            setActiveLingkup(parsedScopes[0]?.id ?? "");
          }
        }
      } catch (e: any) {
        console.error("Gagal memuat detail sub-layanan: " + e.message);
      }
    };
    if (cms.status === "ready" || cms.status === "empty") {
      void fetchDbData();
    }
  }, [cms.status, meta.slug]);

  const handleSave = async () => {
    try {
      // 1. Get Category ID
      const { data: catData } = await supabase
        .from("service_categories")
        .select("id")
        .eq("slug", meta.slug)
        .single();

      if (!catData) throw new Error("Kategori layanan tidak ditemukan di database");

      // 2. Update service_categories
      await supabase
        .from("service_categories")
        .update({
          name: card.nama,
          short_description: card.deskripsi,
          long_description: tentang,
          icon: card.icon,
          color_theme: card.warna,
          hero_image_url: hero.gambar,
          is_active: card.aktif,
          sort_order: card.urutan,
        })
        .eq("id", catData.id);

      // 3. Sync service_scopes table
      const { data: existingScopes } = await supabase
        .from("service_scopes")
        .select("id")
        .eq("category_id", catData.id);
      const currentScopeIds = lingkup.map((l) => l.id);
      const toDeleteScopes = (existingScopes ?? []).map((s) => s.id).filter((id) => !currentScopeIds.includes(id));

      if (toDeleteScopes.length > 0) {
        await supabase.from("service_scopes").delete().in("id", toDeleteScopes);
      }

      for (const l of lingkup) {
        const isNewScope = !existingScopes?.some((s) => s.id === l.id);
        const scopeSlug = l.nama
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");

        const scopePayload = {
          category_id: catData.id,
          name: l.nama,
          slug: scopeSlug || "scope-" + l.id.slice(0, 8),
          description: l.deskripsi,
          image_url: l.gambar,
          sort_order: l.urutan,
          is_active: l.aktif,
        };

        let finalScopeId = l.id;
        if (isNewScope) {
          const { data: insertedScope } = await supabase
            .from("service_scopes")
            .insert([scopePayload])
            .select("id")
            .single();
          if (insertedScope) finalScopeId = insertedScope.id;
        } else {
          await supabase.from("service_scopes").update(scopePayload).eq("id", l.id);
        }

        // 4. Sync service_scope_items for this scope
        const { data: existingItems } = await supabase
          .from("service_scope_items")
          .select("id")
          .eq("scope_id", finalScopeId);
        const currentItemIds = l.form.services.map((s) => s.id);
        const toDeleteItems = (existingItems ?? []).map((item) => item.id).filter((id) => !currentItemIds.includes(id));

        if (toDeleteItems.length > 0) {
          await supabase.from("service_scope_items").delete().in("id", toDeleteItems);
        }

        const upsertItemsData = l.form.services.map((item, idx) => {
          const isNewItem = typeof item.id === "number" || !item.id.includes("-");
          return {
            id: isNewItem ? undefined : item.id,
            scope_id: finalScopeId,
            name: item.nama || "Layanan",
            description: item.deskripsi,
            image_url: item.gambar,
            details: { ruangLingkup: item.ruangLingkup } as any,
            sort_order: idx,
            is_active: true,
          };
        });

        if (upsertItemsData.length > 0) {
          await supabase.from("service_scope_items").upsert(upsertItemsData);
        }
      }

      // 5. Save layouts to cms_pages
      cms.setContent({ card, hero, tentang, partners, clients, katalog, lingkup: [] });
      setTimeout(async () => {
        await cms.save();
      }, 0);

      toast.success("Sub-layanan berhasil disimpan");
    } catch (e: any) {
      toast.error("Gagal menyimpan sub-layanan: " + e.message);
    }
  };

  const patchL = (id: string, patch: Partial<Lingkup>) =>
    setLingkup((arr) => arr.map(x => x.id === id ? { ...x, ...patch } : x));
  const patchForm = (id: string, patch: Partial<Lingkup["form"]>) =>
    setLingkup((arr) => arr.map((x) => x.id === id ? { ...x, form: { ...x.form, ...patch } } : x));

  return (
    <CmsPageShell
      title={`Kelola Layanan — ${meta.nama}`}
      description="Kelola seluruh konten sub-layanan, ruang lingkup, dan form penawaran."
      status={cms.status}
      error={cms.error}
      updatedAt={cms.updatedAt}
      saving={cms.saving}
      defaults={defaults}
      seed={cms.seed}
      save={handleSave}
      reload={cms.reload}
    >
      <div className="space-y-6">
      <Tabs defaultValue="detail" className="space-y-4">
        <TabsList className="bg-white border border-slate-200 p-1">
          <TabsTrigger value="card">Card Layanan</TabsTrigger>
          <TabsTrigger value="detail">Halaman Detail</TabsTrigger>
          <TabsTrigger value="lingkup">Ruang Lingkup</TabsTrigger>
          <TabsTrigger value="form">Form Penawaran</TabsTrigger>
        </TabsList>

        {/* CARD */}
        <TabsContent value="card" className="space-y-6 mt-0">
          <SectionCard title="Card pada Halaman Layanan" icon={<LayoutGrid className="h-4 w-4 text-blue-600" />}>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Nama Layanan">
                <Input value={card.nama} onChange={(e) => setCard({ ...card, nama: e.target.value })} />
              </Field>
              <Field label="Teks Tombol">
                <Input value={card.tombol} onChange={(e) => setCard({ ...card, tombol: e.target.value })} />
              </Field>
            </div>
            <Field label="Deskripsi Singkat">
              <Textarea rows={3} value={card.deskripsi} onChange={(e) => setCard({ ...card, deskripsi: e.target.value })} />
            </Field>
            <div className="grid md:grid-cols-3 gap-4">
              <Field label="Urutan">
                <Input type="number" value={card.urutan} onChange={(e) => setCard({ ...card, urutan: Number(e.target.value) })} />
              </Field>
              <Field label="Warna Card"><Input value={card.warna} onChange={(e) => setCard({ ...card, warna: e.target.value })} /></Field>
              <Field label="Status Tampil">
                <div className="flex items-center gap-2 h-9">
                  <Switch checked={card.aktif} onCheckedChange={(v) => setCard({ ...card, aktif: v })} />
                  <span className="text-xs text-slate-500">{card.aktif ? "Aktif" : "Disembunyikan"}</span>
                </div>
              </Field>
            </div>
          </SectionCard>
        </TabsContent>

        {/* DETAIL */}
        <TabsContent value="detail" className="space-y-6 mt-0">
          <SectionCard title="Hero Halaman Detail" icon={<ImageIcon className="h-4 w-4 text-blue-600" />}>
            <Field label="Judul">
              <Input value={hero.judul} onChange={(e) => setHero({ ...hero, judul: e.target.value })} />
            </Field>
            <Field label="Subtitle">
              <Textarea rows={2} value={hero.subtitle} onChange={(e) => setHero({ ...hero, subtitle: e.target.value })} />
            </Field>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Gambar Hero"><UploadBox height="h-40" /></Field>
              <Field label="Warna Background Hero">
                <Input type="color" value={hero.warna} onChange={(e) => setHero({ ...hero, warna: e.target.value })} className="h-10 w-24 p-1" />
              </Field>
            </div>
          </SectionCard>

          <SectionCard title="Tentang Layanan" icon={<FileText className="h-4 w-4 text-blue-600" />}>
            <Field label="Deskripsi Tentang Layanan">
              <Textarea rows={5} value={tentang} onChange={(e) => setTentang(e.target.value)} />
            </Field>
          </SectionCard>

          <SectionCard title="Logo Partner / Marketplace" icon={<LayoutGrid className="h-4 w-4 text-blue-600" />}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {partners.map((p) => (
                <div key={p.id} className="rounded-md border border-slate-200 bg-white p-3 space-y-2">
                  <Input value={p.nama} placeholder="Nama partner"
                    onChange={(e) => setPartners(upd(partners, p.id, { nama: e.target.value }))} />
                  <UploadBox height="h-20" label="Upload logo" />
                  <Button size="sm" variant="ghost" className="w-full"
                    onClick={() => setPartners(rm(partners, p.id))}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full"
              onClick={() => setPartners([...partners, { id: nid(), nama: "", logo: "" }])}>
              <Plus className="h-4 w-4 mr-1" /> Tambah Partner
            </Button>
          </SectionCard>

          <SectionCard title="Kategori Client" icon={<Users className="h-4 w-4 text-blue-600" />}>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {clients.map((c) => (
                <div key={c.id} className="rounded-md border border-slate-200 bg-white p-3 space-y-2">
                  <Input value={c.emoji} placeholder="🏢" maxLength={4}
                    onChange={(e) => setClients(upd(clients, c.id, { emoji: e.target.value }))} />
                  <Input value={c.nama} placeholder="Nama kategori"
                    onChange={(e) => setClients(upd(clients, c.id, { nama: e.target.value }))} />
                  <Button size="sm" variant="ghost" className="w-full" onClick={() => setClients(rm(clients, c.id))}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full"
              onClick={() => setClients([...clients, { id: nid(), nama: "", emoji: "🏢" }])}>
              <Plus className="h-4 w-4 mr-1" /> Tambah Kategori
            </Button>
          </SectionCard>

          <SectionCard title="Galeri / Katalog" icon={<GalleryHorizontal className="h-4 w-4 text-blue-600" />}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {katalog.map((k) => (
                <div key={k.id} className="space-y-2">
                  <UploadBox height="h-28" />
                  <Button size="sm" variant="ghost" className="w-full" onClick={() => setKatalog(katalog.filter((x) => x.id !== k.id))}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full" onClick={() => setKatalog([...katalog, { id: nid() }])}>
              <Plus className="h-4 w-4 mr-1" /> Tambah Gambar
            </Button>
          </SectionCard>
        </TabsContent>

        {/* LINGKUP */}
        <TabsContent value="lingkup" className="space-y-6 mt-0">
          <SectionCard title="Ruang Lingkup Layanan" icon={<ListChecks className="h-4 w-4 text-blue-600" />}
            description="Setiap ruang lingkup tampil sebagai card di halaman detail dan memiliki Form Penawaran sendiri.">
            <AnimatePresence>
              {lingkup.map((l, i) => (
                <motion.div key={l.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="rounded-lg border border-slate-200 bg-white p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col gap-0.5 mt-1">
                      <button onClick={() => setLingkup(move(lingkup, i, -1))}><ChevronUp className="h-4 w-4 text-slate-400" /></button>
                      <button onClick={() => setLingkup(move(lingkup, i, 1))}><ChevronDown className="h-4 w-4 text-slate-400" /></button>
                    </div>
                    <div className="flex-1 grid md:grid-cols-[1fr_auto_auto] gap-3 items-end">
                      <Field label="Nama Ruang Lingkup">
                        <Input value={l.nama} onChange={(e) => patchL(l.id, { nama: e.target.value })} />
                      </Field>
                      <Field label="Urutan">
                        <Input type="number" value={l.urutan} className="w-24"
                          onChange={(e) => patchL(l.id, { urutan: Number(e.target.value) })} />
                      </Field>
                      <Field label="Status">
                        <div className="flex items-center gap-2 h-9">
                          <Switch checked={l.aktif} onCheckedChange={(v) => patchL(l.id, { aktif: v })} />
                          {l.aktif ? <Eye className="h-4 w-4 text-emerald-600" /> : <EyeOff className="h-4 w-4 text-slate-400" />}
                        </div>
                      </Field>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => setLingkup(rm(lingkup, l.id))}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                  <Field label="Deskripsi">
                    <Textarea rows={2} value={l.deskripsi} onChange={(e) => patchL(l.id, { deskripsi: e.target.value })} />
                  </Field>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Field label="Icon (nama lucide)">
                      <Input value={l.icon} onChange={(e) => patchL(l.id, { icon: e.target.value })} />
                    </Field>
                    <Field label="Gambar"><UploadBox height="h-24" /></Field>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 border border-slate-200">
                    <p className="text-xs text-slate-500">Form Penawaran ruang lingkup ini</p>
                    <Button size="sm" variant="outline" onClick={() => setActiveLingkup(l.id)}>
                      Kelola Form
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <Button variant="outline" className="w-full"
              onClick={() => setLingkup([...lingkup, {
                id: nid(), nama: "Ruang Lingkup Baru", deskripsi: "", icon: "leaf", gambar: "",
                urutan: lingkup.length + 1, aktif: true,
                form: {
                  judul: "Ajukan Permintaan Penawaran", deskripsi: "", services: [],
                  proses: [], keunggulan: [], bantuanEmail: "", bantuanTelepon: "",
                },
              }])}>
              <Plus className="h-4 w-4 mr-1" /> Tambah Ruang Lingkup
            </Button>
          </SectionCard>
        </TabsContent>

        {/* FORM */}
        <TabsContent value="form" className="space-y-6 mt-0">
          <SectionCard title="Pilih Ruang Lingkup" icon={<ListChecks className="h-4 w-4 text-blue-600" />}>
            <div className="flex flex-wrap gap-2">
              {lingkup.map((l) => (
                <button key={l.id} onClick={() => setActiveLingkup(l.id)}
                  className={`px-3 py-1.5 rounded-md text-sm border ${activeLingkup === l.id ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`}>
                  {l.nama || "(tanpa nama)"}
                </button>
              ))}
            </div>
          </SectionCard>

          {lingkup.filter((l) => l.id === activeLingkup).map((l) => (
            <div key={l.id} className="space-y-6">
              <SectionCard title="Header Form" icon={<FileText className="h-4 w-4 text-blue-600" />}>
                <Field label="Judul Form">
                  <Input value={l.form.judul} onChange={(e) => patchForm(l.id, { judul: e.target.value })} />
                </Field>
                <Field label="Deskripsi Form">
                  <Textarea rows={3} value={l.form.deskripsi}
                    onChange={(e) => patchForm(l.id, { deskripsi: e.target.value })} />
                </Field>
              </SectionCard>

              <SectionCard title='Daftar "Our Service"' icon={<LayoutGrid className="h-4 w-4 text-blue-600" />}
                description="Daftar layanan yang dapat dipilih pada form. Setiap item memiliki gambar dan ruang lingkup pekerjaan.">
                {l.form.services.map((s, si) => (
                  <div key={s.id} className="rounded-md border border-slate-200 p-3 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="flex flex-col gap-0.5">
                        <button onClick={() => patchForm(l.id, { services: move(l.form.services, si, -1) })}><ChevronUp className="h-4 w-4 text-slate-400" /></button>
                        <button onClick={() => patchForm(l.id, { services: move(l.form.services, si, 1) })}><ChevronDown className="h-4 w-4 text-slate-400" /></button>
                      </div>
                      <div className="flex-1 grid md:grid-cols-2 gap-3">
                        <Field label="Nama Layanan">
                          <Input value={s.nama} onChange={(e) => patchForm(l.id, { services: upd(l.form.services, s.id, { nama: e.target.value }) })} />
                        </Field>
                        <Field label="Gambar"><UploadBox height="h-20" /></Field>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => patchForm(l.id, { services: rm(l.form.services, s.id) })}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                    <Field label="Deskripsi">
                      <Textarea rows={2} value={s.deskripsi}
                        onChange={(e) => patchForm(l.id, { services: upd(l.form.services, s.id, { deskripsi: e.target.value }) })} />
                    </Field>
                    <Field label="Ruang Lingkup Pekerjaan" hint="Pisahkan tiap poin dengan baris baru">
                      <Textarea rows={4} value={s.ruangLingkup}
                        onChange={(e) => patchForm(l.id, { services: upd(l.form.services, s.id, { ruangLingkup: e.target.value }) })} />
                    </Field>
                  </div>
                ))}
                <Button variant="outline" className="w-full"
                  onClick={() => patchForm(l.id, { services: [...l.form.services, { id: nid(), nama: "", deskripsi: "", gambar: "", ruangLingkup: "" }] })}>
                  <Plus className="h-4 w-4 mr-1" /> Tambah Sub-Lingkup
                </Button>
              </SectionCard>

              <SectionCard title="Proses Selanjutnya" icon={<Workflow className="h-4 w-4 text-blue-600" />}>
                {l.form.proses.map((p, pi) => (
                  <div key={p.id} className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shrink-0">{pi + 1}</span>
                    <Input value={p.teks} onChange={(e) => patchForm(l.id, { proses: upd(l.form.proses, p.id, { teks: e.target.value }) })} />
                    <Button size="sm" variant="ghost" onClick={() => patchForm(l.id, { proses: rm(l.form.proses, p.id) })}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full"
                  onClick={() => patchForm(l.id, { proses: [...l.form.proses, { id: nid(), teks: "" }] })}>
                  <Plus className="h-4 w-4 mr-1" /> Tambah Langkah
                </Button>
              </SectionCard>

              <SectionCard title="Mengapa Memilih Kami" icon={<Sparkles className="h-4 w-4 text-blue-600" />}>
                {l.form.keunggulan.map((k) => (
                  <div key={k.id} className="rounded-md border border-slate-200 p-3 grid md:grid-cols-[1fr_2fr_auto] gap-3 items-end">
                    <Field label="Judul">
                      <Input value={k.judul} onChange={(e) => patchForm(l.id, { keunggulan: upd(l.form.keunggulan, k.id, { judul: e.target.value }) })} />
                    </Field>
                    <Field label="Deskripsi">
                      <Input value={k.deskripsi} onChange={(e) => patchForm(l.id, { keunggulan: upd(l.form.keunggulan, k.id, { deskripsi: e.target.value }) })} />
                    </Field>
                    <Button size="sm" variant="ghost" onClick={() => patchForm(l.id, { keunggulan: rm(l.form.keunggulan, k.id) })}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full"
                  onClick={() => patchForm(l.id, { keunggulan: [...l.form.keunggulan, { id: nid(), judul: "", deskripsi: "" }] })}>
                  <Plus className="h-4 w-4 mr-1" /> Tambah Keunggulan
                </Button>
              </SectionCard>

              <SectionCard title="Butuh Bantuan?" icon={<Phone className="h-4 w-4 text-blue-600" />}>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Email Bantuan">
                    <Input value={l.form.bantuanEmail} onChange={(e) => patchForm(l.id, { bantuanEmail: e.target.value })} />
                  </Field>
                  <Field label="Telepon Bantuan">
                    <Input value={l.form.bantuanTelepon} onChange={(e) => patchForm(l.id, { bantuanTelepon: e.target.value })} />
                  </Field>
                </div>
              </SectionCard>
            </div>
          ))}

          {lingkup.length === 0 && (
            <div className="bg-white border border-dashed border-slate-300 rounded-lg p-8 text-center text-sm text-slate-500">
              Belum ada ruang lingkup. Tambahkan terlebih dahulu pada tab "Ruang Lingkup".
            </div>
          )}
        </TabsContent>
      </Tabs>
      </div>
    </CmsPageShell>
  );
}