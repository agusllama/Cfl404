// Archivo: src/components/instructores/InstructorDrawer.jsx
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail, MapPin, Cake, Calendar, BookOpen } from "lucide-react";
import InstructorAvatar from "./InstructorAvatar";

export default function InstructorDrawer({ instructor, onClose }) {
  if (!instructor) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
      />

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 350, damping: 35 }}
        className="fixed top-0 right-0 h-full w-[480px] z-50 bg-white shadow-2xl flex flex-col border-l border-gray-200"
      >
        {/* Header */}
        <div className="px-8 py-8 flex items-start justify-between border-b border-gray-100">
          <div className="flex items-center gap-5">
            <div className="shadow-sm rounded-full bg-white p-1 border border-gray-100">
               <InstructorAvatar src={instructor.avatar} nombre={instructor.nombre} size="xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1D1E1C] font-roboto leading-none">
                {instructor.nombre} {instructor.apellido}
              </h2>
              <p className="text-sm text-gray-500 font-nunito mt-2 font-medium bg-slate-100 inline-block px-2.5 py-0.5 rounded-md">
                {instructor.rol}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6">
          
          {/* Bloque: Datos de Contacto */}
          <div className="bg-slate-50 rounded-xl p-5 border border-gray-100 shadow-sm">
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 font-nunito flex items-center gap-2">
                 Datos de Contacto
             </h3>
             <div className="space-y-4">
                 <DetailRow icon={Phone} label="Teléfono" value={instructor.telefono} />
                 <DetailRow icon={Mail} label="Email alternativo" value={instructor.emailAlt} />
                 <DetailRow icon={MapPin} label="Dirección" value={instructor.direccion} />
             </div>
          </div>

          {/* Bloque: Información Personal */}
          <div className="bg-slate-50 rounded-xl p-5 border border-gray-100 shadow-sm">
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 font-nunito flex items-center gap-2">
                 Información Personal
             </h3>
             <div className="space-y-4">
                 <DetailRow icon={Cake} label="Fecha de nacimiento" value={formatFecha(instructor.fechaNacimiento)} />
                 <DetailRow icon={Calendar} label="Fecha de ingreso" value={formatFecha(instructor.fechaIngreso)} />
             </div>
          </div>

          {/* Bloque: Cursos */}
          <div className="bg-slate-50 rounded-xl p-5 border border-gray-100 shadow-sm">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 font-nunito flex items-center gap-2">
              <BookOpen size={14} /> Cursos asignados
            </h3>
            <div className="flex flex-wrap gap-2">
              {instructor.cursos?.map((curso) => (
                <span
                  key={curso}
                  className="px-3 py-1.5 text-sm text-[#1D1E1C] font-nunito font-medium bg-white border border-gray-200 rounded-lg shadow-sm"
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

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0">
        <Icon size={14} className="text-[#166193]/70" strokeWidth={2} />
      </div>
      <div className="flex-1 pt-0.5">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider font-nunito">{label}</p>
        <p className="text-sm text-[#1D1E1C] font-nunito font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function formatFecha(isoStr) {
  if (!isoStr) return "—";
  const [year, month, day] = isoStr.split("-");
  return `${day}/${month}/${year}`;
}
