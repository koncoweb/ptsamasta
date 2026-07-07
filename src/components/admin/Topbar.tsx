import { Bell, Search, Menu, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200">
      <div className="flex items-center gap-4 px-4 md:px-6 py-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-slate-100"
        >
          <Menu className="h-5 w-5 text-slate-600" />
        </button>

        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Cari..."
            className="pl-10 bg-slate-50 border-slate-200 h-10 rounded-full"
          />
        </div>

        <div className="flex items-center gap-3 md:gap-5 ml-auto">
          <button className="relative p-2 rounded-full hover:bg-slate-100 transition-colors">
            <Bell className="h-5 w-5 text-slate-600" />
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white font-semibold flex items-center justify-center">
              3
            </span>
          </button>

          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div className="hidden md:block leading-tight">
              <p className="text-sm font-semibold text-slate-900">Admin Utama</p>
              <p className="text-xs text-slate-500">admin@snd.co.id</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}