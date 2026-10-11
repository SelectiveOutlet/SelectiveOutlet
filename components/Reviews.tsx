"use client";

import { useState } from "react";
import type { Review } from "@/lib/types";
import { starStr } from "@/lib/utils";
import Modal from "./Modal";
import ReviewModal from "./ReviewModal";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const [form, setForm] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="reviews">
      <div className="sec-head">
        <h2>Отзиви</h2>
        <button className="btn small" onClick={() => setForm(true)}>Остави отзив</button>
      </div>
      {reviews.length ? (
        <div className="revs">
          {reviews.map((r, i) =>
            typeof r === "string" ? (
              <figure className="rev" key={i}>
                <button className="view" aria-label="Увеличи отзива" onClick={() => setLightbox(r)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Отзив от Instagram" loading="lazy" src={r} />
                </button>
              </figure>
            ) : (
              <figure className="rev text" key={i}>
                <p className="stars" aria-label={`${r.stars} от 5`}>{starStr(r.stars)}</p>
                <p className="rtext">{r.text}</p>
                <figcaption>{r.name}</figcaption>
              </figure>
            ),
          )}
        </div>
      ) : (
        <p className="count" style={{ textTransform: "none", letterSpacing: 0 }}>Още няма публикувани отзиви.</p>
      )}
      {form && <ReviewModal onClose={() => setForm(false)} />}
      {lightbox && (
        <Modal lightbox label="Отзив" onClose={() => setLightbox(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Отзив от Instagram" src={lightbox} />
        </Modal>
      )}
    </section>
  );
}
