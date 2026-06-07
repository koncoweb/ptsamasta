import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function getIcon(name?: string | null, fallback: LucideIcon = Icons.Sparkles): LucideIcon {
  if (!name) return fallback;
  const Comp = (Icons as unknown as Record<string, LucideIcon>)[name];
  return Comp ?? fallback;
}
