import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Mail, Phone, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ServiceOption {
  name: string;
  description: string;
  image: string;
  details: string[];
}

const serviceConfigs: Record<string, {
  badge: string;
  title: string;
  parentPath: string;
  services: ServiceOption[];
}> = {
  "perawatan-taman": {
    badge: "Perawatan Taman",
    title: "Ajukan Permintaan Penawaran",
    parentPath: "/layanan/pemeliharaan",
    services: [
      {
        name: "Pemeliharaan Rutin (Routine Maintenance)",
        description: "Mencakup penyiraman untuk menjaga kelembaban tanah, pemupukan untuk nutrisi tanah optimal, pemangkasan & penataan ranting dan rumput, pembersihan area dari daun kering dan sampah, serta penyiangan gulma atau rumput liar.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
        details: [
          "Penyiraman: Memastikan kelembaban tanah terjaga sesuai kebutuhan jenis tanaman",
          "Pemupukan: Pemberian nutrisi tanah untuk pertumbuhan optimal",
          "Pemangkasan & Penataan: Memangkas ranting, dahan, atau rumput agar taman terlihat rapi",
          "Pembersihan Area (Garden Cleaning): Mengumpulkan daun kering, sampah, dan membersihkan jalur setapak",
          "Penyiangan: Menghilangkan gulma atau rumput liar yang mengganggu",
        ],
      },
      {
        name: "Pemeliharaan Teknis dan Khusus",
        description: "Mencakup pengendalian hama & penyakit dengan pestisida organik atau kimia aman, penggantian tanaman yang rusak (replanting), penggemburan tanah dan pemasangan mulsa, serta pembersihan kolam, air mancur, dan sistem drainase taman.",
        image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=300&h=200&fit=crop",
        details: [
          "Pengendalian Hama & Penyakit: Penanganan dengan pestisida organik atau kimia aman",
          "Penggantian Tanaman (Replanting): Mengganti tanaman yang sudah mati atau rusak",
          "Perawatan Tanah: Penggemburan tanah dan pemasangan mulsa untuk menjaga kelembaban",
          "Perawatan Fitur Air: Pembersihan kolam, air mancur, atau sistem drainase taman",
        ],
      },
      {
        name: "Penataan (Landscaping Services)",
        description: "Mencakup desain ulang atau penataan taman untuk mengatur ulang tata letak tanaman dan dekorasi, perawatan tanaman dalam ruangan (indoor plants) khusus untuk tanaman hias di kantor atau rumah, serta perawatan khusus taman vertikal dan atap hijau (vertical garden & green roof).",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&h=200&fit=crop",
        details: [
          "Desain Ulang/Penataan Taman: Mengatur ulang tata letak tanaman atau menambah dekorasi",
          "Perawatan Tanaman Dalam Ruangan (Indoor Plants): Khusus untuk tanaman hias di dalam kantor atau rumah",
          "Vertical Garden & Green Roof: Perawatan khusus taman vertikal dan atap hijau",
        ],
      },
      {
        name: "Dekorasi Panggung Acara",
        description: "Layanan dekorasi panggung profesional untuk berbagai kegiatan, mencakup dekorasi untuk seminar & konferensi, wisuda, acara kenegaraan/pemerintahan, hiburan & festival, serta backdrop panggung dengan desain custom sesuai kebutuhan acara Anda.",
        image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=300&h=200&fit=crop",
        details: [
          "Dekorasi panggung seminar & konferensi",
          "Dekorasi panggung wisuda",
          "Dekorasi panggung kenegaraan / pemerintahan",
          "Dekorasi panggung hiburan & festival",
          "Backdrop panggung custom design",
        ],
      },
    ],
  },
  "kebersihan-bangunan": {
    badge: "Kebersihan Bangunan",
    title: "Ajukan Permintaan Penawaran",
    parentPath: "/layanan/pemeliharaan",
    services: [
      {
        name: "Kebersihan Area Dalam Gedung (Indoor Cleaning)",
        description: "Layanan pembersihan menyeluruh untuk area dalam gedung mencakup pembersihan lantai dengan berbagai metode (sapu, pel, vacuum, polishing), pembersihan karpet & permadani, kaca & partisi, furniture, plafon & dinding, lift & eskalator, area resepsionis & lobby, serta ruang rapat & aula untuk menciptakan lingkungan kerja yang bersih dan nyaman.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop",
        details: [
          "Pembersihan lantai (sapu, pel, vacuum, polishing)",
          "Pembersihan karpet & permadani",
          "Pembersihan kaca & partisi",
          "Pembersihan meja, kursi, lemari & furniture",
          "Pembersihan plafon & dinding",
          "Pembersihan lift & eskalator",
          "Pembersihan area resepsionis & lobby",
          "Pembersihan ruang rapat & aula",
        ],
      },
      {
        name: "Kebersihan Area Luar Gedung (Outdoor Cleaning)",
        description: "Layanan pembersihan area luar gedung mencakup penyapuan halaman & area parkir, pembersihan selokan & drainase untuk mencegah banjir, pembersihan taman & landscape ringan, pembersihan kanopi & fasad gedung agar tampak bersih dan terawat, serta pembersihan pagar & gerbang untuk menjaga estetika dan kebersihan eksterior bangunan.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=200&fit=crop",
        details: [
          "Penyapuan halaman & area parkir",
          "Pembersihan selokan & drainase",
          "Pembersihan taman & landscape ringan",
          "Pembersihan kanopi & fasad gedung",
          "Pembersihan pagar & gerbang",
          "Pembersihan kloset, washtafel, urinal",
          "Pengisian sabun, tisu, pengharum",
          "Desinfeksi lantai & dinding",
          "Penghitungan karbol & kocek membersihkol",
          "Desinfeksi area sensitif tinggi",
        ],
      },
      {
        name: "General Cleaning Berkala",
        description: "Layanan pembersihan menyeluruh dan mendalam yang dilakukan secara berkala mencakup deep cleaning seluruh ruangan untuk kebersihan maksimal, cuci karpet & sofa dengan teknik profesional, poles lantai marmer/granit/vinyl untuk tampilan mengkilap dan terawat, serta fogging desinfektan untuk sterilisasi ruangan dan mencegah penyebaran kuman.",
        image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&h=200&fit=crop",
        details: [
          "Deep cleaning seluruh ruangan",
          "Cuci karpet & sofa",
          "Poles lantai marmer/granit/vinyl",
          "Fogging desinfektan",
        ],
      },
      {
        name: "Post Construction Cleaning",
        description: "Layanan pembersihan pasca konstruksi untuk menyiapkan gedung yang baru selesai dibangun atau direnovasi, mencakup pembersihan sisa material bangunan, pengangkatan debu semen & cat, pembersihan menyeluruh kaca, lantai, dan kusen, sehingga gedung siap untuk serah terima dan ditempati dengan kondisi bersih sempurna.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
        details: [
          "Pembersihan sisa material bangunan",
          "Pengangkatan debu semen & cat",
          "Pembersihan kaca, lantai, kusen",
          "Siap serah terima gedung",
        ],
      },
    ],
  },
};

const AjukanPenawaran = () => {
  const { serviceType } = useParams();
  const config = serviceConfigs[serviceType || ""];
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    nama_lengkap: "",
    nama_perusahaan: "",
    email: "",
    whatsapp: "",
    deskripsi: "",
    estimasi_waktu: "",
  });

  if (!config) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="py-32 text-center">
          <p className="text-muted-foreground">Halaman tidak ditemukan.</p>
          <Link to="/layanan/pemeliharaan" className="text-primary underline mt-4 inline-block">
            Kembali ke Layanan
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from("pengajuan_penawaran").insert({
        nama_lengkap: form.nama_lengkap.trim(),
        nama_perusahaan: form.nama_perusahaan.trim(),
        email: form.email.trim(),
        whatsapp: form.whatsapp.trim(),
        category_slug: "pemeliharaan",
        scope_slug: serviceType,
        selected_services: selectedServices,
        deskripsi: form.deskripsi.trim(),
        estimasi_waktu: form.estimasi_waktu.trim(),
      });
      if (error) throw error;
      toast({
        title: "Permintaan terkirim!",
        description: "Tim kami akan menghubungi Anda dalam waktu 1×24 jam.",
      });
      setForm({ nama_lengkap: "", nama_perusahaan: "", email: "", whatsapp: "", deskripsi: "", estimasi_waktu: "" });
      setSelectedServices([]);
    } catch (err: any) {
      toast({
        title: "Gagal mengirim permintaan",
        description: err?.message ?? "Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <Link
            to={config.parentPath}
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8"
          >
            <ArrowLeft size={16} />
            Kembali
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#1E3A8A] text-white text-xs font-semibold rounded-full mb-4">
              {config.badge}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">{config.title}</h1>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Isi formulir di bawah ini untuk mendapatkan penawaran terbaik dari kami. Tim profesional kami akan menghubungi Anda dalam waktu 1×24 jam untuk membahas kebutuhan proyek Anda secara detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Masukkan nama lengkap Anda"
                    required
                    value={form.nama_lengkap}
                    onChange={(e) => setForm({ ...form, nama_lengkap: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nama Perusahaan / Instansi / Lembaga <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Masukkan nama perusahaan / instansi / lembaga Anda"
                    required
                    value={form.nama_perusahaan}
                    onChange={(e) => setForm({ ...form, nama_perusahaan: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="nama@perusahaan.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="+62 812-3456-7890"
                    required
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Our Service <span className="text-red-500">*</span>
                    <span className="text-muted-foreground font-normal ml-1">(Dapat memilih lebih dari satu)</span>
                  </label>
                  <div className="space-y-4 mt-4">
                    {config.services.map((service) => (
                      <div
                        key={service.name}
                        className={`rounded-xl border-2 p-5 transition-colors cursor-pointer ${
                          selectedServices.includes(service.name)
                            ? "border-[#1E3A8A] bg-blue-50/50"
                            : "border-border"
                        }`}
                        onClick={() => toggleService(service.name)}
                      >
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-2">
                              <Checkbox
                                checked={selectedServices.includes(service.name)}
                                onCheckedChange={() => toggleService(service.name)}
                                className="mt-1"
                              />
                              <h4 className="font-bold text-foreground text-sm">{service.name}</h4>
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed ml-7 mb-3">
                              {service.description}
                            </p>
                            <div className="ml-7">
                              <p className="text-xs font-semibold text-foreground mb-1">Ruang Lingkup:</p>
                              <ul className="space-y-1">
                                {service.details.map((d, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                                    <span className="mt-0.5">•</span>
                                    <span>{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="flex-shrink-0 w-full md:w-40 h-28 rounded-lg overflow-hidden">
                            <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Deskripsi Kebutuhan / Proyek <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    placeholder="Jelaskan kebutuhan dan detail proyek Anda secara lengkap..."
                    rows={4}
                    required
                    value={form.deskripsi}
                    onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Estimasi Waktu Pengerjaan <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Contoh: 3 bulan"
                    required
                    value={form.estimasi_waktu}
                    onChange={(e) => setForm({ ...form, estimasi_waktu: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white py-6 text-sm font-semibold"
                >
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {submitting ? "Mengirim..." : "Kirim Permintaan"}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Proses Selanjutnya */}
              <div className="bg-[#1E3A8A] rounded-xl p-6 text-white">
                <h3 className="font-bold text-base mb-4">Proses Selanjutnya</h3>
                <div className="space-y-4">
                  {[
                    "Tim kami akan menghubungi Anda dalam waktu 1×24 jam",
                    "Diskusi kebutuhan dan spesifikasi proyek secara detail",
                    "Kami akan menyusun proposal dan penawaran harga",
                    "Mulai pengerjaan setelah kesepakatan tercapai",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-white/90 text-xs leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mengapa Memilih Kami */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold text-base text-foreground mb-4">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  {[
                    { label: "Profesional", desc: "Tim ahli dengan pengalaman bertahun-tahun" },
                    { label: "Responsif", desc: "Respon cepat dalam 1×24 jam" },
                    { label: "Terpercaya", desc: "Dipercaya oleh ratusan perusahaan" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Butuh Bantuan */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-bold text-base text-foreground mb-3">Butuh Bantuan?</h3>
                <p className="text-xs text-muted-foreground mb-4">Hubungi tim kami jika Anda memiliki pertanyaan</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Mail size={14} />
                    <span>info@snd.co.id</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Phone size={14} />
                    <span>+62 858-1397-4229</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AjukanPenawaran;
