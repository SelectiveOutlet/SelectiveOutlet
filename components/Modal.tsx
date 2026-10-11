"use client";

import { useEffect, type ReactNode } from "react";

export default function Modal({
  children,
  onClose,
  label,
  narrow,
  lightbox,
}: {
  children: ReactNode;
  onClose: () => void;
  label: string;
  narrow?: boolean;
  lightbox?: boolean;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (lightbox) {
    return (
      <div className="overlay lightbox" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <button className="x" onClick={onClose} aria-label="Затвори" style={{ color: "#fff" }}>×</button>
        {children}
      </div>
    );
  }

  return (
    <div className="overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`sheet${narrow ? " narrow" : ""}`} role="dialog" aria-modal="true" aria-label={label}>
        <button className="x" onClick={onClose} aria-label="Затвори">×</button>
        {children}
      </div>
    </div>
  );
}
