import { toast } from "sonner";

/**
 * Map raw Supabase / network / storage errors to friendly Indonesian messages.
 * Falls back to the original message when no specific mapping exists.
 */
export function friendlyError(err: unknown, fallback = "Terjadi kesalahan tak terduga"): string {
  if (!err) return fallback;

  const raw =
    typeof err === "string"
      ? err
      : err instanceof Error
        ? err.message
        : typeof err === "object" && err !== null && "message" in err
          ? String((err as { message: unknown }).message)
          : fallback;

  const code =
    typeof err === "object" && err !== null && "code" in err
      ? String((err as { code: unknown }).code)
      : "";
  const status =
    typeof err === "object" && err !== null && "status" in err
      ? Number((err as { status: unknown }).status)
      : 0;

  const msg = raw.toLowerCase();

  // Network / fetch
  if (msg.includes("failed to fetch") || msg.includes("networkerror") || msg.includes("network request failed")) {
    return "Koneksi internet bermasalah. Coba periksa jaringan Anda.";
  }
  if (msg.includes("timeout") || msg.includes("timed out")) {
    return "Permintaan terlalu lama. Silakan coba lagi.";
  }

  // Auth
  if (msg.includes("invalid login credentials") || msg.includes("invalid_credentials")) {
    return "Email atau password salah.";
  }
  if (msg.includes("email not confirmed")) {
    return "Email belum diverifikasi. Periksa kotak masuk Anda.";
  }
  if (msg.includes("user already registered") || msg.includes("already been registered")) {
    return "Email ini sudah terdaftar. Silakan masuk.";
  }
  if (msg.includes("password should be at least") || msg.includes("weak password") || msg.includes("password is too weak")) {
    return "Password terlalu lemah. Gunakan minimal 6 karakter dan kombinasi yang lebih kuat.";
  }
  if (msg.includes("pwned") || msg.includes("breached")) {
    return "Password ini pernah bocor di internet. Gunakan password lain.";
  }
  if (msg.includes("rate limit") || msg.includes("too many requests") || status === 429) {
    return "Terlalu banyak percobaan. Tunggu beberapa saat sebelum mencoba lagi.";
  }
  if (msg.includes("jwt expired") || msg.includes("invalid token") || msg.includes("not authenticated")) {
    return "Sesi Anda telah berakhir. Silakan masuk kembali.";
  }

  // PostgREST / RLS
  if (msg.includes("row-level security") || msg.includes("violates row-level security")) {
    return "Anda tidak memiliki izin untuk melakukan aksi ini.";
  }
  if (msg.includes("permission denied")) {
    return "Akses ditolak. Hubungi administrator jika berlanjut.";
  }
  if (code === "23505" || msg.includes("duplicate key")) {
    return "Data dengan nilai unik yang sama sudah ada.";
  }
  if (code === "23503" || msg.includes("foreign key")) {
    return "Data ini terkait dengan data lain dan tidak dapat dihapus.";
  }
  if (code === "23502" || msg.includes("not-null") || msg.includes("null value")) {
    return "Ada kolom wajib yang belum diisi.";
  }

  // Storage
  if (msg.includes("payload too large") || msg.includes("exceeded the maximum")) {
    return "Ukuran file terlalu besar.";
  }
  if (msg.includes("invalid mime") || msg.includes("mime type")) {
    return "Format file tidak didukung.";
  }
  if (msg.includes("bucket not found")) {
    return "Penyimpanan media belum dikonfigurasi.";
  }
  if (msg.includes("already exists")) {
    return "File dengan nama tersebut sudah ada.";
  }

  if (status === 401 || status === 403) {
    return "Anda tidak memiliki izin untuk melakukan aksi ini.";
  }
  if (status >= 500) {
    return "Server sedang bermasalah. Silakan coba beberapa saat lagi.";
  }

  return raw || fallback;
}

/**
 * Show a standardized error toast.
 */
export function showError(err: unknown, title = "Terjadi kesalahan"): void {
  const description = friendlyError(err);
  // eslint-disable-next-line no-console
  console.error(`[${title}]`, err);
  toast.error(title, { description });
}