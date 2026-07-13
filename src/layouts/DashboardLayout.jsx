// Archivo: src/layouts/DashboardLayout.jsx
import { Outlet } from "react-router";
import { User, Bell } from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-50/50 overflow-hidden font-nunito">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-14 bg-white/80 backdrop-blur-sm border-b border-slate-200/60 flex items-center justify-end px-8 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button className="relative text-slate-400 hover:text-slate-600 transition-colors cursor-pointer p-1">
              <Bell size={18} strokeWidth={1.8} />
              <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-5 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                Admin
              </span>
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                <User size={16} className="text-slate-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Canvas */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
