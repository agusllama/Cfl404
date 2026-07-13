// Archivo: src/components/instructores/TopBar.jsx
import { Search, Plus } from "lucide-react";

export default function TopBar({ busqueda, setBusqueda, filtroEstado, setFiltroEstado, totalResultados }) {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar instructores..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm font-nunito text-[#1D1E1C] placeholder:text-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37A6DE]/50 focus:border-[#37A6DE] transition-all shadow-sm"
          />
        </div>
        
        <select
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
          className="py-2 pl-3 pr-8 text-sm font-nunito text-[#1D1E1C] bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37A6DE]/50 focus:border-[#37A6DE] transition-all appearance-none cursor-pointer shadow-sm"
          style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239ca3af%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7em top 50%', backgroundSize: '.65em auto' }}
        >
          <option value="todos">Todos los estados</option>
          <option value="activo">Activos</option>
          <option value="inactivo">Inactivos</option>
          <option value="licencia">En Licencia</option>
        </select>

        <span className="text-xs font-nunito text-gray-500 ml-2 font-medium">
          {totalResultados} {totalResultados === 1 ? 'instructor' : 'instructores'}
        </span>
      </div>

      <button className="flex items-center gap-1.5 px-4 py-2 bg-[#166193] hover:bg-[#1a74aa] hover:shadow-md hover:-translate-y-0.5 text-white rounded-lg text-sm font-semibold font-nunito transition-all cursor-pointer shadow-sm">
        <Plus size={16} />
        Nuevo Instructor
      </button>
    </div>
  );
}
