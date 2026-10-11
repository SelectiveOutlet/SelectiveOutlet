import { prisma } from "@/lib/prisma";
import { products as mockProducts, hero as mockHero } from "@/lib/data";

/** Shape expected by <Outlet />, inferred from the existing mock data. */
export type Product = (typeof mockProducts)[number];

/** Raw row from the `shoesad` table, JSON-safe (BigInt → string, Date → ISO). */
export type ShoeDTO = {
  id: string;
  created_at: string;
  size: number[];
  price: number | null;
  discount: number | null;
  title: string | null;
  image: string | null;
  is_available: boolean | null;
};

export async function getShoes(): Promise<ShoeDTO[]> {
  const rows = await prisma.shoesad.findMany({
    orderBy: { created_at: "desc" },
  });

  return rows.map((r) => ({
    id: r.id.toString(),
    created_at: r.created_at.toISOString(),
    size: r.size,
    price: r.price,
    discount: r.discount,
    title: r.title,
    image: r.image,
    is_available: r.is_available,
  }));
}

/** Maps a `shoesad` row to the `Product` shape used by the <Outlet /> component. */
export function toProduct(shoe: ShoeDTO): Product {
  const price = shoe.price ?? 0;
  const discount = shoe.discount ?? 0;
  const finalPrice =
    discount > 0 ? Math.round(price * (1 - discount / 100)) : price;

  return {
    id: shoe.id,
    name: shoe.title ?? "",
    price: finalPrice,
    oldPrice: discount > 0 ? price : finalPrice,
    sizes: shoe.size.map(String),
    images: shoe.image ? [shoe.image] : [],
    sold: shoe.is_available === false,
  };
}

export async function getProducts(): Promise<Product[]> {
  const shoes = await getShoes();
  return shoes.map(toProduct);
}

/** Row from the `mainpicture` table, JSON-safe. */
export type MainPictureDTO = {
  id: string;
  created_at: string;
  picture: string | null;
};

/** Returns the most recently added main picture, or null if the table is empty. */
export async function getMainPicture(): Promise<MainPictureDTO | null> {
  const row = await prisma.mainpicture.findFirst({
    orderBy: { created_at: "desc" },
  });
  if (!row) return null;

  return {
    id: row.id.toString(),
    created_at: row.created_at.toISOString(),
    picture: row.picture,
  };
}

/** Hero image URL for the site, falling back to the static mock if none in DB. */
export async function getHeroImage(): Promise<typeof mockHero> {
  const main = await getMainPicture();
  return main?.picture ? (main.picture as typeof mockHero) : mockHero;
}
