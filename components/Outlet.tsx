"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { IG } from "@/lib/config";
import ProductCard from "./ProductCard";
import OrderModal from "./OrderModal";

export default function Outlet({ products }: { products: Product[] }) {
  const [sizeFilter, setSizeFilter] = useState("");
  const [open, setOpen] = useState<Product | null>(null);

  const sizes = useMemo(() => {
    const m = new Set<string>();
    products.forEach((p) => { if (!p.sold) p.sizes.forEach((s) => m.add(s)); });
    return [...m].sort((a, b) => parseFloat(a) - parseFloat(b));
  }, [products]);

  const active = sizes.includes(sizeFilter) ? sizeFilter : "";
  const list = products
    .filter((p) => !active || p.sizes.includes(active))
    .sort((a, b) => Number(a.sold) - Number(b.sold));
  const avail = products.filter((p) => !p.sold).length;

  return (
    <section id="outlet">
      <div className="sec-head">
        <h2>Outlet</h2>
        <span className="count">{avail}{avail === 1 ? " модел наличен" : " модела налични"}</span>
      </div>
      <div className="sizes">
        {sizes.length > 0 && (
          <>
            <span className="lab">Размер EU</span>
            <span className="chip">
              <button type="button" aria-pressed={active === ""} onClick={() => setSizeFilter("")}>Всички</button>
            </span>
            {sizes.map((s) => (
              <span className="chip" key={s}>
                <button type="button" aria-pressed={active === s} onClick={() => setSizeFilter(s)}>{s}</button>
              </span>
            ))}
          </>
        )}
      </div>
      <div className="grid">
        {list.length ? (
          list.map((p) => <ProductCard key={p.id} product={p} onOpen={() => !p.sold && setOpen(p)} />)
        ) : (
          <div className="empty" style={{ gridColumn: "1/-1" }}>
            В момента няма налични модели. Последвай @{IG} за нови бройки.
          </div>
        )}
      </div>
      {open && <OrderModal product={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
