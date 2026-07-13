// Archivo: src/components/instructores/TopBar.jsx
import { Search, Plus } from "lucide-react";

export default function TopBar({ busqueda, setBusqueda, filtroEstado, setFiltroEstado, totalResultados }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
      <div className="flex items-center gap-3 flex-1">
        <div className="relative w-64">
          <Search size={15} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar instructores..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full h-9 pl-8 pr-3 text-sm font-nunito text-slate-900 placeholder:text-slate-400 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37A6DE]/40 focus:border-[#37A6DE] transition-all"
          />
        </div>

        <select
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
          className="h-9 pl-3 pr-7 text-sm font-nunito text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37A6DE]/40 focus:border-[#37A6DE] transition-all appearance-none cursor-pointer"
          style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .6em top 50%', backgroundSize: '.6em auto' }}
        >
          <option value="todos">Todos los estados</option>
          <option value="activo">Activos</option>
          <option value="inactivo">Inactivos</option>
          <option value="licencia">En Licencia</option>
        </select>

        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider ml-1 font-nunito">
          {totalResultados} {totalResultados === 1 ? 'resultado' : 'resultados'}
        </span>
      </div>

      <button className="flex items-center gap-1.5 h-9 px-4 bg-[#166193] hover:bg-[#1a74aa] text-white rounded-md text-sm font-medium font-nunito transition-all cursor-pointer shadow-sm">
        <Plus size={15} strokeWidth={2.5} />
        Nuevo Instructor
      </button>
    </div>
  );
}
