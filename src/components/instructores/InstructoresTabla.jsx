// Archivo: src/components/instructores/InstructoresTabla.jsx
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
      <div className="py-20 text-center">
        <p className="text-slate-400 font-nunito text-sm">No se encontraron instructores.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Encabezado */}
      <div className="flex items-center px-5 py-2.5 border-b border-slate-200/60 bg-slate-50/80">
        {COLS.map((col) => (
          <div
            key={col.label}
            style={{ width: col.width }}
            className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold font-nunito"
          >
            {col.label}
          </div>
        ))}
      </div>

      {/* Filas */}
      <div className="flex flex-col">
        {instructores.map((inst) => (
          <div
            key={inst.id}
            onClick={() => onSeleccionar(inst)}
            className="flex items-center px-5 py-3 cursor-pointer border-b border-slate-100 last:border-b-0 hover:bg-slate-50/80 transition-colors"
          >
            {/* Instructor */}
            <div style={{ width: COLS[0].width }} className="flex items-center gap-3">
              <InstructorAvatar src={inst.avatar} nombre={inst.nombre} size="sm" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-900 font-nunito truncate">
                  {inst.nombre} {inst.apellido}
                </p>
                <p className="text-[12px] text-slate-400 font-nunito truncate mt-0.5">
                  {inst.rol}
                </p>
              </div>
            </div>

            {/* DNI */}
            <div style={{ width: COLS[1].width }}>
              <span className="text-sm text-slate-500 font-nunito">
                {inst.dni}
              </span>
            </div>

            {/* Email */}
            <div style={{ width: COLS[2].width }}>
              <p className="text-sm text-slate-500 font-nunito truncate">
                {inst.email}
              </p>
            </div>

            {/* Estado */}
            <div style={{ width: COLS[3].width }}>
              <InstructorBadge estado={inst.estado} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
