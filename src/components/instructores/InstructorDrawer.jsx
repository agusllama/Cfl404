// Archivo: src/components/instructores/InstructorDrawer.jsx
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Phone, Mail, Calendar, User as UserIcon, Globe, Clock, BookOpen } from "lucide-react";
import InstructorAvatar from "./InstructorAvatar";
import InstructorBadge from "./InstructorBadge";

export default function InstructorDrawer({ instructor, onClose }) {
  if (!instructor) return null;

  // Adaptación de los datos para coincidir con la estructura solicitada (staff_detail)
  const details = {
    address: instructor.direccion || "—",
    phone: instructor.telefono || "—",
    extra_phone: instructor.extra_phone || "—",
    extra_email: instructor.emailAlt || "—",
    dob: instructor.fechaNacimiento || "—",
    gender: instructor.genero || "No especificado",
    nacionality: instructor.nacionalidad || "Argentina",
    created_at: instructor.fechaIngreso || "—",
  };

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-[450px] z-50 bg-white shadow-2xl border-l border-slate-200 flex flex-col"
      >
        {/* Cabecera del Panel */}
        <div className="bg-white px-8 pt-8 pb-6 border-b border-slate-100 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-[#37A6DE] focus:ring-offset-2 cursor-pointer"
          >
            <X size={20} strokeWidth={2} />
          </button>
          
          <div className="flex items-center gap-5">
            <InstructorAvatar src={instructor.avatar} nombre={instructor.nombre} size="xl" />
            <div>
              <h2 className="text-xl font-semibold text-slate-900 font-roboto leading-tight">
                {instructor.nombre} {instructor.apellido}
              </h2>
              <p className="text-sm text-slate-500 font-nunito mt-1 mb-3">
                {instructor.rol}
              </p>
              <InstructorBadge estado={instructor.estado} />
            </div>
          </div>
        </div>

        {/* Contenido del Panel */}
        <div className="flex-1 overflow-y-auto px-8 pb-8 font-nunito">
          
          <dl>
            {/* Categoría: Contacto */}
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-6 mb-3">
              Contacto
            </dt>
            <div className="space-y-4">
              <DataRow icon={MapPin} label="Dirección" value={details.address} />
              <DataRow icon={Phone} label="Teléfono" value={details.phone} />
              <DataRow icon={Phone} label="Teléfono Secundario" value={details.extra_phone} />
              <DataRow icon={Mail} label="Email Alternativo" value={details.extra_email} />
            </div>

            {/* Categoría: Personal */}
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-8 mb-3">
              Personal
            </dt>
            <div className="space-y-4">
              <DataRow icon={Calendar} label="Fecha de Nac." value={formatFecha(details.dob)} />
              <DataRow icon={UserIcon} label="Género" value={details.gender} />
              <DataRow icon={Globe} label="Nacionalidad" value={details.nacionality} />
              <DataRow icon={Clock} label="Fecha de Ingreso" value={formatFecha(details.created_at)} />
            </div>
          </dl>

          {/* Sección de Cursos (Bottom) */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <BookOpen size={14} className="text-slate-400" /> Cursos asignados
            </h3>
            <div className="flex flex-wrap gap-2">
              {instructor.cursos?.map((curso) => (
                <span
                  key={curso}
                  className="bg-slate-50 text-slate-700 border border-slate-200 rounded-md px-2.5 py-1 text-xs font-medium"
                >
                  {curso}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}

function DataRow({ icon: Icon, label, value }) {
  return (
    <dd className="flex items-start gap-3">
      <Icon className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" strokeWidth={2} />
      <div className="flex-1">
        <p className="text-sm text-slate-500 leading-tight">{label}</p>
        <p className="text-sm font-medium text-slate-900 mt-0.5 leading-tight">{value}</p>
      </div>
    </dd>
  );
}

function formatFecha(isoStr) {
  if (!isoStr || isoStr === "—") return "—";
  const parts = isoStr.split("-");
  if (parts.length !== 3) return isoStr;
  const [year, month, day] = parts;
  return `${day}/${month}/${year}`;
}
