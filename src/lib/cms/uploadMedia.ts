import { supabase } from "@/integrations/supabase/client";

const BUCKET = "cms-media";
const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_PREFIXES = ["image/", "video/", "application/pdf"];

export class UploadValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UploadValidationError";
  }
}

export function validateUploadFile(file: File, maxBytes = MAX_FILE_BYTES): void {
  if (file.size === 0) {
    throw new UploadValidationError("File kosong tidak dapat diunggah.");
  }
  if (file.size > maxBytes) {
    const mb = (maxBytes / (1024 * 1024)).toFixed(0);
    throw new UploadValidationError(`Ukuran file melebihi batas ${mb} MB.`);
  }
  const okType = ALLOWED_PREFIXES.some((p) => file.type.startsWith(p));
  if (file.type && !okType) {
    throw new UploadValidationError("Format file tidak didukung.");
  }
}

export async function uploadMedia(file: File, folder = "general"): Promise<string> {
  validateUploadFile(file);
  const ext = (file.name.split(".").pop() ?? "bin").toLowerCase().replace(/[^a-z0-9]/g, "");
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: file.type,
  });
  if (error) throw error;
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function deleteMedia(publicUrl: string): Promise<void> {
  const marker = `/${BUCKET}/`;
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return;
  const path = publicUrl.slice(idx + marker.length);
  const { error } = await supabase.storage.from(BUCKET).remove([path]);
  if (error) throw error;
}