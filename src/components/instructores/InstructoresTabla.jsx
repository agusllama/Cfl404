// Archivo: src/components/instructores/InstructoresTabla.jsx
import { motion } from "framer-motion";
import InstructorAvatar from "./InstructorAvatar";
import InstructorBadge from "./InstructorBadge";

const COLS = [
  { label: "Instructor", width: "35%" },
  { label: "DNI", width: "15%" },
  { label: "Email Institucional", width: "35%" },
  { label: "Estado", width: "15%" },
];

export default function InstructoresTabla({ instructores, onSeleccionar }) {
  if (instructores.length === 0) {
    return (
      <div className="py-16 text-center border-t border-gray-100 bg-white">
        <p className="text-gray-500 font-nunito text-sm">No se encontraron instructores.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-200">
      {/* Encabezado */}
      <div className="flex items-center px-4 py-3 bg-slate-50 border-b border-gray-200">
        {COLS.map((col) => (
          <div
            key={col.label}
            style={{ width: col.width }}
            className="text-xs uppercase text-gray-500 font-semibold font-nunito tracking-wider"
          >
            {col.label}
          </div>
        ))}
      </div>

      {/* Filas */}
      <div className="flex flex-col">
        {instructores.map((inst, i) => (
          <motion.div
            key={inst.id}
            onClick={() => onSeleccionar(inst)}
            whileHover={{ backgroundColor: "#f8fafc" }}
            transition={{ duration: 0.15 }}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors group ${
              i !== instructores.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            {/* Instructor */}
            <div style={{ width: COLS[0].width }} className="flex items-center gap-3">
              <InstructorAvatar src={inst.avatar} nombre={inst.nombre} size="sm" />
              <p className="text-sm font-medium text-[#1D1E1C] font-nunito">
                {inst.nombre} {inst.apellido}
              </p>
            </div>

            {/* DNI */}
            <div style={{ width: COLS[1].width }}>
              <span className="text-sm text-gray-500 font-nunito font-light">
                {inst.dni}
              </span>
            </div>

            {/* Email */}
            <div style={{ width: COLS[2].width }}>
              <p className="text-sm text-gray-500 font-nunito font-light">
                {inst.email}
              </p>
            </div>

            {/* Estado */}
            <div style={{ width: COLS[3].width }}>
              <InstructorBadge estado={inst.estado} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
