import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { About, Delivery, Footer, Kitchen, Lunches, Reviews, Services } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <News />
        <About />
        <Gallery />
        <Services />
        <Kitchen />
        <Lunches />
        <Delivery />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
