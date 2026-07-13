// Archivo: src/pages/Instructores.jsx
import { useState, useMemo } from "react";
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
    <div className="max-w-[1400px] w-full mx-auto font-nunito">
      {/* Encabezado de página — limpio, sin tarjeta */}
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900 font-roboto">
          Cuerpo Docente
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Gestión de instructores y asignaciones
        </p>
      </div>

      {/* Table Card */}
      <div className="bg-white border border-slate-200/60 shadow-sm rounded-xl overflow-hidden">
        <TopBar
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          filtroEstado={filtroEstado}
          setFiltroEstado={setFiltroEstado}
          totalResultados={filtrados.length}
        />
        <InstructoresTabla
          instructores={filtrados}
          onSeleccionar={setSeleccionado}
        />
      </div>

      <InstructorDrawer
        instructor={seleccionado}
        onClose={() => setSeleccionado(null)}
      />
    </div>
  );
}
