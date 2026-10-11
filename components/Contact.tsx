import { IG, SITE_NAME } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <div className="contact-copy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-lg" alt={SITE_NAME} src="/logo.webp" width={150} height={150} />
          <p className="big">Последни бройки. Специални цени.</p>
          <p>Подбрани модели, налични за незабавна поръчка.</p>
          <p className="soft">Не намираш своя модел или размер? Открий го и го поръчай през основната ни страница.</p>
        </div>
        <a className="ig-card" href={`https://instagram.com/${IG}`} target="_blank" rel="noopener">
          <span className="k">Последвай ни</span>
          <span className="h">Instagram: @{IG}</span>
          <span className="f">Следвай страницата, за да не пропуснеш новите бройки и размери.</span>
        </a>
      </div>
    </section>
  );
}
