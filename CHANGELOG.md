# Changelog & Development Lessons Learned

Documenting the development iterations, system improvements, and key technical lessons learned during the PT Samasta Nusantara Digdaya admin dashboard integration and database stabilization.

---

## 📅 Changelog (Recent Session Highlights)

### 🔧 Core System & Security Stabilizations
* **Database Switch**: Transitioned all connection endpoints to the new Supabase Project ID `mpoycxmvbsqqyrblwsvw` (`.env` and `supabase/config.toml`).
* **RLS/Authorization Privilege Fix**: Restored `EXECUTE` rights on the `public.has_role(uuid, app_role)` function to `anon` and `authenticated` roles to avoid RLS lookup blocks (HTTP 403).
* **Smart User Roles Trigger**: Corrected `handle_new_user_role` DB trigger to run only on public registrations (checking `auth.uid() IS NULL`), avoiding duplicate key constraint conflicts when admins create user accounts.

### 🛡️ Crash Prevention & Hooks Improvements
* **Deep Merge (useCmsPage Hook)**: Built a recursive `mergeDeep` helper in [useCmsPage.ts](src/hooks/useCmsPage.ts) for both `load()` and `seed()` methods.
* **Fallback Resolution**: Ensured that when database rows loaded or seeded are empty (`{}`), they are automatically merged with the page's default schema, preventing React render-blocking crashes on missing nested properties like `hero.title` or `hero.judul`.

### 👥 User Management (`/admin/dashboard/pengguna`)
* **Interactive Panel**: Created `PenggunaPage.tsx` with sorting, search, role editing dropdowns (Admin, Editor, User), and account deletion actions.
* **Instant Creation**: Integrated a modal form for immediate admin-led user registration, bypassing the standard email confirmation flow.

### 📈 Service Submissions (`/admin/dashboard/pengajuan-jasa`)
* **Table Search**: Added live search filtering by name, client, email, and service category.
* **CRM Detail Overlay**: Built an interactive modal displaying detailed client descriptions, listing specific service checkboxes, and supporting WhatsApp Click-to-Chat shortcuts.
* **Column Correction**: Aligned binding variables to match the database migrations schema (e.g. `whatsapp`, `category_slug`, `deskripsi`).

### ⚙️ System Settings (`/admin/dashboard/pengaturan`)
* **Branding Metadata**: Added site title, copyright texts, tagline configurations, and support for logo image uploads.
* **Administrative Toggles**: Integrated toggles to enable/disable new admin registrations and control maintenance mode.
* **Dynamic Login Screen**: Configured the admin login component to read the registration status from database settings and hide/disable registration buttons automatically.

---

## 💡 Lessons Learned & Best Practices

### 1. RLS Execution Permissions
* **Lesson**: Revoking `EXECUTE` privilege from functions utilized in RLS policies (such as `has_role`) blocks the database from executing the policy checking queries, resulting in silent RLS denials (403 Forbidden).
* **Best Practice**: Always grant `EXECUTE` on lookup functions called by RLS to `anon` and `authenticated` roles. Implement internal authentication checks inside the function body for granular security.

### 2. Defensive JSON Rendering in React
* **Lesson**: Storing dynamic layout structures in JSON columns (like PostgreSQL `jsonb`) opens the risk of partial/empty schemas if users save empty configurations. Simple checks like `{c && ...}` only check if the root is non-null, but will crash if accessing nested keys (e.g. `c.hero.title`).
* **Best Practice**: Never bind raw DB JSON fields directly to form inputs. Always perform a deep recursive merge (`mergeDeep`) with default properties before assigning them to React states.

### 3. PostgreSQL Triggers in Admin Flows
* **Lesson**: Database triggers designed to assign defaults to newly registered users (`auth.users`) will fire during admin-led user creation as well. If the admin function also inserts a role, it causes unique constraint violations.
* **Best Practice**: Use conditional trigger logic like `IF auth.uid() IS NULL` (verifying no logged-in user is initiating the request) to differentiate public registration flows from administrator actions.
