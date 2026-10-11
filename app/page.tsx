import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Outlet from "@/components/Outlet";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { reviews } from "@/lib/data";
import { getProducts, getHeroImage } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [products, hero] = await Promise.all([getProducts(), getHeroImage()]);

  return (
    <div className="wrap">
      <Header />
      <main id="top">
        <Hero image={hero} />
        <Outlet products={products} />
        <Reviews reviews={reviews} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
