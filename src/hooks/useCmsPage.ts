import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { showError, friendlyError } from "@/lib/errors";

type Status = "idle" | "loading" | "ready" | "empty" | "error";

export interface UseCmsPageResult<T> {
  status: Status;
  content: T | null;
  error: string | null;
  updatedAt: string | null;
  isEmpty: boolean;
  loading: boolean;
  saving: boolean;
  setContent: (next: T | ((prev: T) => T)) => void;
  save: () => Promise<void>;
  seed: (defaults: T) => Promise<void>;
  reload: () => Promise<void>;
}

export function useCmsPage<T>(slug: string): UseCmsPageResult<T> {
  const [status, setStatus] = useState<Status>("loading");
  const [content, setContentState] = useState<T | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setStatus("loading");
    setError(null);
    try {
      const { data, error: err } = await supabase
        .from("cms_pages")
        .select("content, updated_at")
        .eq("slug", slug)
        .maybeSingle();
      if (err) throw err;
      if (!data) {
        setContentState(null);
        setUpdatedAt(null);
        setStatus("empty");
        return;
      }
      setContentState((data.content ?? null) as T | null);
      setUpdatedAt(data.updated_at);
      setStatus("ready");
    } catch (e) {
      const msg = friendlyError(e, "Gagal memuat data");
      setError(msg);
      setStatus("error");
      setContentState(null);
      setUpdatedAt(null);
    }
  }, [slug]);

  useEffect(() => {
    void load();
  }, [load]);

  const setContent: UseCmsPageResult<T>["setContent"] = useCallback((next) => {
    setContentState((prev) => {
      const base = prev as T;
      const value = typeof next === "function" ? (next as (p: T) => T)(base) : next;
      return value;
    });
  }, []);

  const save = useCallback(async () => {
    if (content === null) {
      toast.warning("Tidak ada perubahan untuk disimpan");
      return;
    }
    setSaving(true);
    try {
      const { data: userData, error: authErr } = await supabase.auth.getUser();
      if (authErr || !userData.user) {
        throw new Error("Sesi Anda telah berakhir. Silakan masuk kembali.");
      }
      const { error: err, data } = await supabase
        .from("cms_pages")
        .upsert(
          {
            slug,
            content: content as never,
            updated_by: userData.user.id,
          },
          { onConflict: "slug" },
        )
        .select("updated_at")
        .single();
      if (err) throw err;
      setUpdatedAt(data?.updated_at ?? new Date().toISOString());
      setStatus("ready");
      toast.success("Perubahan tersimpan");
    } catch (e) {
      showError(e, "Gagal menyimpan perubahan");
    } finally {
      setSaving(false);
    }
  }, [content, slug]);

  const seed = useCallback(
    async (defaults: T) => {
      setSaving(true);
      try {
        const { data: userData, error: authErr } = await supabase.auth.getUser();
        if (authErr || !userData.user) {
          throw new Error("Sesi Anda telah berakhir. Silakan masuk kembali.");
        }
        const { error: err, data } = await supabase
          .from("cms_pages")
          .upsert(
            {
              slug,
              content: defaults as never,
              updated_by: userData.user.id,
            },
            { onConflict: "slug" },
          )
          .select("content, updated_at")
          .single();
        if (err) throw err;
        setContentState(data.content as T);
        setUpdatedAt(data.updated_at);
        setStatus("ready");
        toast.success("Data awal berhasil dibuat");
      } catch (e) {
        showError(e, "Gagal membuat data awal");
      } finally {
        setSaving(false);
      }
    },
    [slug],
  );

  return {
    status,
    content,
    error,
    updatedAt,
    isEmpty: status === "empty",
    loading: status === "loading",
    saving,
    setContent,
    save,
    seed,
    reload: load,
  };
}