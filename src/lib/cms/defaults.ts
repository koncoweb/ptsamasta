// Default content registry per page slug. Used by "Seed Data" action.
// Add new slugs here as more CMS pages are wired up.

export const CMS_DEFAULTS: Record<string, unknown> = {};

export function registerDefaults(slug: string, defaults: unknown) {
  CMS_DEFAULTS[slug] = defaults;
}

export function getDefaults<T = unknown>(slug: string): T | undefined {
  return CMS_DEFAULTS[slug] as T | undefined;
}