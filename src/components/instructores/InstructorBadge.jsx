// Archivo: src/components/instructores/InstructorBadge.jsx

const estadoConfig = {
  activo: {
    label: "Activo",
    classes: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/10",
  },
  inactivo: {
    label: "Inactivo",
    classes: "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10",
  },
  licencia: {
    label: "Licencia",
    classes: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/10",
  },
};

export default function InstructorBadge({ estado }) {
  const cfg = estadoConfig[estado] ?? estadoConfig.inactivo;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium font-nunito ${cfg.classes}`}
    >
      {cfg.label}
    </span>
  );
}
