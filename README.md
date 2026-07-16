# PT Samasta Nusantara Digdaya - Corporate Portal & Admin Panel

Portal utama dan dashboard administrasi terpadu untuk PT Samasta Nusantara Digdaya, penyedia solusi terintegrasi di Indonesia untuk industri pengolahan, perdagangan besar, logistik, jasa profesional, dan event organizer.

---

## 🚀 Fitur Utama

### 1. Website Publik (Public Website)
* **Beranda Dinamis**: Banner hero yang dapat dikustomisasi, pameran keunggulan perusahaan, dan integrasi artikel berita.
* **Profil Perusahaan**: Informasi terstruktur mengenai Sejarah, Filosofi, Struktur Manajemen, dan Dokumen Legalitas resmi.
* **Katalog Layanan**: Halaman komprehensif yang menampilkan 4 kategori utama dan sub-layanan spesifik.
* **Formulir Penawaran Mandiri**: Alur interaktif bagi calon klien untuk memilih ruang lingkup layanan, memberikan deskripsi kebutuhan, dan mengirimkan pengajuan jasa.

### 2. Dashboard Admin Panel (`/admin`)
* **CMS Beranda & Halaman**: Kelola layout teks, urutan, gambar, dan tautan di semua halaman utama secara real-time.
* **CRM Pengajuan Jasa**: Terima, telusuri detail, filter pencarian, dan hubungi langsung calon klien via shortcut WhatsApp.
* **Manajemen Pengguna**: Kelola hak akses (Admin, Editor, User), hapus akun, dan tambahkan pengguna baru langsung dari dashboard.
* **Pengaturan Sistem Global**: Atur visibilitas situs (mode pemeliharaan), pendaftaran admin baru, serta data kontak utama.

---

## 🛠️ Tech Stack & Integrasi

* **Frontend**: React.js, TypeScript, Vite, Tailwind CSS, shadcn/ui.
* **Database & Auth**: Supabase (PostgreSQL), Row Level Security (RLS), Supabase Auth SDK.
* **Animasi**: Framer Motion.

---

## 💻 Cara Menjalankan Lokal

### 1. Prasyarat
Pastikan Node.js (versi terbaru) sudah terpasang.

### 2. Kloning & Jalankan
```sh
# 1. Kloning repositori
git clone https://github.com/koncoweb/ptsamasta.git
cd ptsamasta

# 2. Pasang dependensi
npm install

# 3. Buat berkas .env.local di direktori root dan masukkan kredensial Supabase Anda:
# VITE_SUPABASE_URL=https://<PROJECT_ID>.supabase.co
# VITE_SUPABASE_ANON_KEY=<ANON_PUBLIC_KEY>

# 4. Jalankan server dev lokal
npm run dev
```
Aplikasi akan dapat diakses secara lokal di **[http://localhost:8080](http://localhost:8080)**.

---

## 📄 Catatan Rilis & Pelajaran Penting
Seluruh detail riwayat pengembangan, perbaikan crash, hak izin RLS database, serta pelajaran penting yang kami ambil selama pengembangan terdokumentasi lengkap di berkas **[CHANGELOG.md](CHANGELOG.md)**.
