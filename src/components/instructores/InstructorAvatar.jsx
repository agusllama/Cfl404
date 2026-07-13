// Archivo: src/components/instructores/InstructorAvatar.jsx
import { useState } from "react";

export default function InstructorAvatar({ src, nombre, size = "md" }) {
  const [error, setError] = useState(false);

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-16 h-16 text-xl",
    xl: "w-24 h-24 text-2xl",
  };

  const sizeClass = sizes[size] ?? sizes.md;
  const initials = nombre ? nombre.charAt(0).toUpperCase() : "?";

  if (error || !src) {
    return (
      <div
        className={`${sizeClass} rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-200`}
      >
        <span className="text-[#585856] font-medium font-nunito">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Avatar de ${nombre}`}
      onError={() => setError(true)}
      className={`${sizeClass} rounded-full object-cover flex-shrink-0 border border-gray-200`}
    />
  );
}
