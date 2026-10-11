"use client";

import { useEffect, useRef } from "react";
import { IG } from "@/lib/config";

export default function AfterCopy({ msg, ok }: { msg: string; ok: boolean }) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!ok && ref.current) { ref.current.focus(); ref.current.select(); }
  }, [ok]);
  return (
    <div className="after">
      {ok ? (
        <p className="ok">Копирано.</p>
      ) : (
        <p className="err">Копирането не успя. Маркирай текста и го копирай ръчно.</p>
      )}
      <textarea ref={ref} rows={8} readOnly value={msg} />
      <p style={{ margin: "0 0 10px" }}>Постави го в чата с @{IG} и го изпрати.</p>
      <a className="btn primary" style={{ width: "100%" }} href={`https://ig.me/m/${IG}`} target="_blank" rel="noopener">
        Отвори Instagram съобщения
      </a>
    </div>
  );
}
