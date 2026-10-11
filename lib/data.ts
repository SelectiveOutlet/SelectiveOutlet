import type { Product, Review } from "./types";
import { sampleImg } from "./utils";

/**
 * Catalogue data. Replace the sample products with real ones (or load them
 * from a CMS / API in a server component).
 */
export const products: Product[] = [
  { id: "p1", name: "Примерна обувка 1", sizes: ["41", "42", "43"], oldPrice: 150, price: 99, images: [sampleImg("#3a3d42", "#1b1c1f")], sold: false, example: true },
  { id: "p2", name: "Примерна обувка 2", sizes: ["40", "42", "44", "45"], oldPrice: 130, price: 85, images: [sampleImg("#4a4743", "#201f1d")], sold: false, example: true },
  { id: "p3", name: "Примерна обувка 3", sizes: ["43", "44"], oldPrice: 170, price: 109, images: [sampleImg("#34393f", "#16181a")], sold: false, example: true },
  { id: "p4", name: "Примерна обувка 4", sizes: ["38", "39", "41"], oldPrice: 120, price: 79, images: [sampleImg("#403d3a", "#1a1918")], sold: true, example: true },
];

export const reviews: Review[] = [];

/** Path under /public. Drop the hero JPEG from index.html there as hero.jpg, or leave empty for the placeholder. */
export const hero: string = "/hero.jpg";
