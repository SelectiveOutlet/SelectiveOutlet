import type { Product } from "@/lib/types";
import { money } from "@/lib/utils";

export default function ProductCard({ product: p, onOpen }: { product: Product; onOpen: () => void }) {
  const off = p.oldPrice > p.price ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return (
    <article className={`card${p.sold ? " sold" : ""}`}>
      <button className="card-img" onClick={onOpen} aria-label={`Отвори ${p.name}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={p.name} loading="lazy" src={p.images[0] || ""} />
        {off > 0 && <span className="off">−{off}%</span>}
        {p.example && <span className="ex">Пример</span>}
        {p.sold && <span className="soldtag">Продадена</span>}
      </button>
      <div className="card-body">
        <h3>{p.name}</h3>
        <p className="sz">EU <b>{p.sizes.join(" · ")}</b></p>
        <p className="price">
          {p.oldPrice > p.price && <s>{money(p.oldPrice)}</s>}
          <strong>{money(p.price)}</strong>
        </p>
        {!p.sold && (
          <button className="btn small primary" onClick={onOpen}>Поръчай</button>
        )}
      </div>
    </article>
  );
}
