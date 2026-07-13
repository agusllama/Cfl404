// Archivo: src/pages/Instructores.jsx
import { useState, useMemo } from "react";
import { BookOpen, User } from "lucide-react";
import { instructores as mockInstructores } from "../components/instructores/mockData";
import TopBar from "../components/instructores/TopBar";
import InstructoresTabla from "../components/instructores/InstructoresTabla";
import InstructorDrawer from "../components/instructores/InstructorDrawer";

export default function Instructores() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [seleccionado, setSeleccionado] = useState(null);

  const filtrados = useMemo(() => {
    let lista = [...mockInstructores];
    if (filtroEstado !== "todos") {
      lista = lista.filter((i) => i.estado === filtroEstado);
    }
    if (busqueda.trim()) {
      const q = busqueda.toLowerCase();
      lista = lista.filter(
        (i) =>
          i.nombre.toLowerCase().includes(q) ||
          i.apellido.toLowerCase().includes(q) ||
          i.email.toLowerCase().includes(q) ||
          i.dni.includes(q)
      );
    }
    return lista;
  }, [busqueda, filtroEstado]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-nunito">
      
      {/* Header Superior (Navegación y Logo) */}
      <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <BookOpen className="text-[#166193]" size={24} strokeWidth={2.5} />
          <span className="text-xl font-bold text-[#166193] font-roboto tracking-tight">
            CFL 404
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
            <User size={18} className="text-gray-500" />
          </div>
        </div>
      </header>

      {/* Contenedor Principal (Main Canvas) */}
      <main className="flex-1 p-8 max-w-[1400px] w-full mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1D1E1C] font-roboto">Cuerpo Docente</h1>
          <p className="text-sm text-[#585856] mt-1">Gestión de instructores y asignaciones</p>
        </div>

        {/* La Tarjeta de la Tabla (Card Wrapper) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <TopBar
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            filtroEstado={filtroEstado}
            setFiltroEstado={setFiltroEstado}
            totalResultados={filtrados.length}
          />
          <div className="mt-4">
            <InstructoresTabla
              instructores={filtrados}
              onSeleccionar={setSeleccionado}
            />
          </div>
        </div>
      </main>

      <InstructorDrawer
        instructor={seleccionado}
        onClose={() => setSeleccionado(null)}
      />
    </div>
  );
}
