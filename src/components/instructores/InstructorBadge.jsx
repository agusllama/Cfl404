// Archivo: src/components/instructores/InstructorBadge.jsx

const estadoConfig = {
  activo: {
    label: "Activo",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
  },
  inactivo: {
    label: "Inactivo",
    bg: "bg-red-100",
    text: "text-red-700",
  },
  licencia: {
    label: "Licencia",
    bg: "bg-amber-100",
    text: "text-amber-700",
  },
};

export default function InstructorBadge({ estado }) {
  const cfg = estadoConfig[estado] ?? estadoConfig.inactivo;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold font-nunito ${cfg.bg} ${cfg.text}`}
    >
      {cfg.label}
    </span>
  );
}
