import { IG, SITE_NAME } from "@/lib/config";
import { sampleImg } from "@/lib/utils";

export default function Hero({ image }: { image?: string }) {
  return (
    <div className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Последни бройки</p>
        <h1>Специални цени.</h1>
        <p className="lede">Подбрани модели, налични за незабавна поръчка.</p>
        <div className="cta">
          <a className="btn primary" href="#outlet">Виж моделите</a>
          <a className="btn" href={`https://instagram.com/${IG}`} target="_blank" rel="noopener">
            Instagram @{IG}
          </a>
        </div>
      </div>
      <div className="stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={image ? SITE_NAME : ""} src={image || sampleImg("#2b2d31", "#141517")} />
      </div>
    </div>
  );
}
