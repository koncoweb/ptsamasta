import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, RefreshCw, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Pengajuan {
  id: string;
  nama_lengkap: string;
  nama_perusahaan: string;
  email: string;
  telepon: string;
  kategori_layanan: string;
  deskripsi_kebutuhan: string;
  created_at: string;
}

export function PengajuanJasaPage() {
  const [list, setList] = useState<Pengajuan[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("pengajuan_penawaran")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      setList(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Pengajuan Jasa</h1>
          <p className="text-slate-500 mt-1">Daftar formulir penawaran jasa dari calon klien.</p>
        </div>
        <Button variant="outline" size="icon" onClick={loadData} disabled={loading}>
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </Button>
      </div>

      {loading ? (
        <div className="h-60 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : list.length > 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500 border-b border-slate-200 bg-slate-50/70">
                  <th className="px-6 py-4 font-semibold">Pengaju / Perusahaan</th>
                  <th className="px-6 py-4 font-semibold">Kontak</th>
                  <th className="px-6 py-4 font-semibold">Layanan</th>
                  <th className="px-6 py-4 font-semibold">Kebutuhan</th>
                  <th className="px-6 py-4 font-semibold">Tanggal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {list.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{p.nama_lengkap}</div>
                      <div className="text-xs text-slate-500">{p.nama_perusahaan || "-"}</div>
                    </td>
                    <td className="px-6 py-4 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Mail className="h-3 w-3 text-slate-400" />
                        <span>{p.email}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Phone className="h-3 w-3 text-slate-400" />
                        <span>{p.telepon}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800 border border-blue-100">
                        {p.kategori_layanan}
                      </span>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className="text-xs text-slate-700 whitespace-pre-line line-clamp-3 hover:line-clamp-none transition-all">
                        {p.deskripsi_kebutuhan}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        <span>
                          {new Date(p.created_at).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 text-center text-slate-500">
          Belum ada data pengajuan penawaran.
        </div>
      )}
    </div>
  );
}
