export function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 text-center text-slate-500">
        Halaman {title} — siap dikembangkan.
      </div>
    </div>
  );
}