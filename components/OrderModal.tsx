"use client";

import { useState, type FormEvent } from "react";
import type { Product } from "@/lib/types";
import { IG } from "@/lib/config";
import { copyText, money } from "@/lib/utils";
import Modal from "./Modal";
import AfterCopy from "./AfterCopy";

export default function OrderModal({ product: p, onClose }: { product: Product; onClose: () => void }) {
  const [img, setImg] = useState(0);
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [note, setNote] = useState("");
  const [err, setErr] = useState("");
  const [after, setAfter] = useState<{ msg: string; ok: boolean } | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!size) return setErr("Избери размер.");
    if (!name.trim()) return setErr("Напиши име.");
    if (phone.replace(/\D/g, "").length < 7) return setErr("Напиши телефон за връзка.");
    setErr("");
    const msg = [
      "Здравей! Искам да поръчам от Selective Outlet:",
      `Модел: ${p.name}`,
      `Размер: EU ${size}`,
      `Цена: ${money(p.price)}`,
      `Име: ${name.trim()}`,
      `Телефон: ${phone.trim()}`,
      addr.trim() ? `Град/адрес: ${addr.trim()}` : "",
      note.trim() ? `Бележка: ${note.trim()}` : "",
    ].filter(Boolean).join("\n");
    setAfter({ msg, ok: await copyText(msg) });
  }

  return (
    <Modal onClose={onClose} label="Поръчка">
      <div className="sheet-grid">
        <div className="gal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="main" alt={p.name} src={p.images[img] || ""} />
          {p.images.length > 1 && (
            <div className="thumbs">
              {p.images.map((s, i) => (
                <button key={i} type="button" aria-pressed={i === img} aria-label={`Снимка ${i + 1}`} onClick={() => setImg(i)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src={s} />
                </button>
              ))}
            </div>
          )}
        </div>
        <form onSubmit={submit} noValidate>
          <h3>{p.name}</h3>
          <p className="price">
            {p.oldPrice > p.price && <s>{money(p.oldPrice)}</s>}
            <strong>{money(p.price)}</strong>
          </p>
          <fieldset>
            <legend>Размер (EU)</legend>
            <div className="sizes" style={{ margin: 0 }}>
              {p.sizes.map((s) => (
                <label className="chip" key={s}>
                  <input type="radio" name="size" value={s} checked={size === s} onChange={() => setSize(s)} />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="lbl" htmlFor="f-name">Име</label>
          <input type="text" id="f-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label className="lbl" htmlFor="f-phone">Телефон</label>
          <input type="tel" id="f-phone" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label className="lbl" htmlFor="f-addr">Град / адрес (по желание)</label>
          <input type="text" id="f-addr" autoComplete="street-address" value={addr} onChange={(e) => setAddr(e.target.value)} />
          <label className="lbl" htmlFor="f-note">Бележка (по желание)</label>
          <input type="text" id="f-note" value={note} onChange={(e) => setNote(e.target.value)} />
          <p className="err" role="alert">{err}</p>
          <button type="submit" className="btn primary" style={{ width: "100%" }}>Копирай поръчката</button>
          {after && <AfterCopy msg={after.msg} ok={after.ok} />}
          <p className="note">
            Поръчката се праща като съобщение в Instagram към @{IG}. Ще ти отговорим там за получаването и плащането.
          </p>
        </form>
      </div>
    </Modal>
  );
}
