import { SITE_NAME } from "@/lib/config";

export default function Header() {
  return (
    <header className="top">
      <a className="brand" href="#top" aria-label={SITE_NAME}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="logo" alt="" src="/logo.webp" width={52} height={52} />
        <span className="bt">
          SELECTIVE <span>OUTLET</span>
        </span>
      </a>
      <nav>
        <a href="#outlet">Outlet</a>
        <a href="#reviews" className="hide-s">Отзиви</a>
        <a href="#contact">Контакт</a>
      </nav>
    </header>
  );
}
