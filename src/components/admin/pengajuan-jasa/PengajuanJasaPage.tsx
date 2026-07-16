import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, RefreshCw, Mail, Phone, Calendar, Search, Building2, User, FileText, X, Clock, Settings, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface Pengajuan {
  id: string;
  nama_lengkap: string;
  nama_perusahaan: string;
  email: string;
  whatsapp: string;
  category_slug: string;
  scope_slug: string;
  selected_services: string[];
  deskripsi: string;
  estimasi_waktu?: string;
  status: string;
  notes?: string;
  created_at: string;
}

const categoryMap: Record<string, string> = {
  "pemeliharaan": "Pemeliharaan & Lingkungan",
  "jasa-sdm": "Jasa Profesional & SDM",
  "perdagangan": "Pengolahan & Perdagangan Besar",
  "event-organizer": "Event Organizer & Media",
};

export function PengajuanJasaPage() {
  const [list, setList] = useState<Pengajuan[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<Pengajuan | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("pengajuan_penawaran")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      
      const mapped = (data || []).map((x) => ({
        ...x,
        selected_services: Array.isArray(x.selected_services) ? x.selected_services : [],
      }));
      setList(mapped);
    } catch (e: any) {
      toast.error("Gagal memuat data pengajuan: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
  }, []);

  const filteredList = list.filter(
    (p) =>
      p.nama_lengkap.toLowerCase().includes(search.toLowerCase()) ||
      (p.nama_perusahaan || "").toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      (categoryMap[p.category_slug] || p.category_slug).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-6xl relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Pengajuan Penawaran Jasa</h1>
          <p className="text-sm text-slate-500 mt-1">
            Daftar formulir penawaran masuk dari calon mitra dan klien PT Samasta Nusantara Digdaya
          </p>
        </div>
        <Button onClick={loadData} variant="outline" className="gap-2 shrink-0">
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Segarkan
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div className="flex items-center gap-3 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Cari nama, perusahaan, atau layanan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-slate-50 border-slate-200"
            />
          </div>
        </div>

        {loading ? (
          <div className="min-h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-slate-500">Memuat data pengajuan...</p>
            </div>
          </div>
        ) : filteredList.length === 0 ? (
          <div className="min-h-[300px] flex items-center justify-center border-2 border-dashed rounded-xl p-8 text-center text-slate-500">
            <div>
              <FileText className="mx-auto h-8 w-8 text-slate-300 mb-2" />
              <p className="text-sm">Tidak ada data pengajuan penawaran ditemukan</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-slate-100">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-slate-500">
                  <th className="px-6 py-4 font-semibold">Pengaju / Perusahaan</th>
                  <th className="px-6 py-4 font-semibold">Kontak</th>
                  <th className="px-6 py-4 font-semibold">Layanan Diminta</th>
                  <th className="px-6 py-4 font-semibold">Kebutuhan Ringkas</th>
                  <th className="px-6 py-4 font-semibold">Tanggal Masuk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredList.map((p) => (
                  <tr
                    key={p.id}
                    onClick={() => setSelectedItem(p)}
                    className="hover:bg-slate-50/50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{p.nama_lengkap}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <Building2 className="h-3 w-3 text-slate-400" />
                        {p.nama_perusahaan || "Personal / Perorangan"}
                      </div>
                    </td>
                    <td className="px-6 py-4 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Mail className="h-3.5 w-3.5 text-slate-400" />
                        <span>{p.email}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Phone className="h-3.5 w-3.5 text-slate-400" />
                        <span>{p.whatsapp}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800 border border-blue-100">
                        {categoryMap[p.category_slug] || p.category_slug}
                      </span>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {p.deskripsi}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        <span>
                          {new Date(p.created_at).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl border border-slate-200 shadow-xl w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-slate-900">Rincian Pengajuan Penawaran</h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Nama Pengaju</span>
                    <div className="flex items-center gap-2 text-slate-900 font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <User className="h-4 w-4 text-slate-400" />
                      {selectedItem.nama_lengkap}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Nama Perusahaan</span>
                    <div className="flex items-center gap-2 text-slate-900 font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Building2 className="h-4 w-4 text-slate-400" />
                      {selectedItem.nama_perusahaan || "Personal / Perorangan"}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
                    <div className="flex items-center gap-2 text-slate-900 font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <a href={`mailto:${selectedItem.email}`} className="text-primary hover:underline">
                        {selectedItem.email}
                      </a>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Nomor Telepon / WA</span>
                    <div className="flex items-center gap-2 text-slate-900 font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Phone className="h-4 w-4 text-slate-400" />
                      <a href={`https://wa.me/${selectedItem.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {selectedItem.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Kategori Layanan Utama</span>
                  <div className="bg-blue-50/50 text-blue-900 font-semibold p-3 rounded-lg border border-blue-100">
                    {categoryMap[selectedItem.category_slug] || selectedItem.category_slug}
                  </div>
                </div>

                {selectedItem.selected_services.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Layanan Spesifik yang Dipilih</span>
                    <div className="flex flex-wrap gap-1.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                      {selectedItem.selected_services.map((srv, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white border-slate-200 text-slate-700">
                          {srv}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedItem.estimasi_waktu && (
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Estimasi Waktu Pelaksanaan</span>
                    <div className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Clock className="h-4 w-4 text-slate-400" />
                      {selectedItem.estimasi_waktu}
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Deskripsi Kebutuhan Detail</span>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-700 whitespace-pre-line leading-relaxed max-h-60 overflow-y-auto">
                    {selectedItem.deskripsi}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Diterima pada: {new Date(selectedItem.created_at).toLocaleString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <Button variant="outline" size="sm" onClick={() => setSelectedItem(null)}>
                    Tutup
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
