import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Outlet from "@/components/Outlet";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { hero, products, reviews } from "@/lib/data";

export default function Page() {
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
