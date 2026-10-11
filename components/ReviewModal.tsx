"use client";

import { useState, type FormEvent } from "react";
import { IG } from "@/lib/config";
import { copyText } from "@/lib/utils";
import Modal from "./Modal";
import AfterCopy from "./AfterCopy";

export default function ReviewModal({ onClose }: { onClose: () => void }) {
  const [stars, setStars] = useState(5);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [err, setErr] = useState("");
  const [after, setAfter] = useState<{ msg: string; ok: boolean } | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setErr("Напиши име.");
    if (text.trim().length < 5) return setErr("Напиши поне едно изречение.");
    setErr("");
    const msg = ["Отзив за Selective Outlet", `Оценка: ${stars}/5`, `Отзив: ${text.trim()}`, `Име: ${name.trim()}`].join("\n");
    setAfter({ msg, ok: await copyText(msg) });
  }

  return (
    <Modal narrow onClose={onClose} label="Остави отзив">
      <form onSubmit={submit} noValidate>
        <h3>Остави отзив</h3>
        <fieldset>
          <legend>Оценка</legend>
          <div className="sizes" style={{ margin: 0 }}>
            {[5, 4, 3, 2, 1].map((n) => (
              <label className="chip" key={n}>
                <input type="radio" name="stars" value={n} checked={stars === n} onChange={() => setStars(n)} />
                <span>{n} ★</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="lbl" htmlFor="r-name">Име</label>
        <input type="text" id="r-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label className="lbl" htmlFor="r-text">Твоят отзив</label>
        <textarea id="r-text" rows={4} value={text} onChange={(e) => setText(e.target.value)} />
        <p className="err" role="alert">{err}</p>
        <button type="submit" className="btn primary" style={{ width: "100%" }}>Копирай отзива</button>
        {after && <AfterCopy msg={after.msg} ok={after.ok} />}
        <p className="note">
          Отзивът се праща като съобщение в Instagram към @{IG}. Можеш да прикачиш и снимка в чата. Публикуваме го тук само с твое съгласие.
        </p>
      </form>
    </Modal>
  );
}
