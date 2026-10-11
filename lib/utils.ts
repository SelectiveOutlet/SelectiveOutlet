import { CURRENCY } from "./config";

export function money(n: number): string {
  n = Number(n) || 0;
  const s = Math.abs(n - Math.round(n)) > 0.004 ? n.toFixed(2) : String(Math.round(n));
  return `${s} ${CURRENCY}`;
}

export function sampleImg(a: string, b: string): string {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><path d="M70 205 C70 170 100 120 140 118 C165 118 172 140 195 146 C230 156 270 160 318 192 C335 204 336 218 318 222 L88 222 C74 222 70 216 70 205 Z" fill="#0b0c0d" opacity=".85"/><rect x="74" y="222" width="250" height="16" rx="8" fill="#d0d1d2" opacity=".8"/></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

export function starStr(n: number): string {
  n = Math.max(1, Math.min(5, Math.round(n) || 5));
  let s = "";
  for (let i = 0; i < 5; i++) s += i < n ? "★" : "☆";
  return s;
}

export async function copyText(t: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(t);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}
