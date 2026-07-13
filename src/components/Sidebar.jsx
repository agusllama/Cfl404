// Archivo: src/components/Sidebar.jsx
import { BookOpen, Users, Book, GraduationCap, BarChart2 } from "lucide-react";

const navItems = [
  { label: "Profesores", icon: Users, active: true },
  { label: "Cursos", icon: Book, active: false },
  { label: "Alumnos", icon: GraduationCap, active: false },
  { label: "Reportes", icon: BarChart2, active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200/60 flex flex-col h-full shrink-0">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-slate-100 shrink-0 gap-2.5">
        <BookOpen className="text-[#166193]" size={22} strokeWidth={2.5} />
        <span className="text-lg font-bold text-[#166193] font-roboto tracking-tight">
          CFL 404
        </span>
      </div>

      {/* Navegación */}
      <nav className="flex-1 py-4 flex flex-col gap-0.5 overflow-y-auto">
        <p className="px-6 mb-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-nunito">
          Menú
        </p>
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`mx-3 px-3 py-2 rounded-lg flex items-center gap-3 text-sm font-nunito transition-colors
              ${
                item.active
                  ? "bg-slate-100 text-[#166193] font-medium"
                  : "text-slate-500 hover:bg-slate-50 font-normal"
              }`}
          >
            <item.icon size={18} strokeWidth={item.active ? 2.2 : 1.8} />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
