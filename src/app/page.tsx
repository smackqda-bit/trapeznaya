import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { About, Delivery, Footer, Lunches, Reviews, Services } from "@/components/Sections";

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
        <Lunches />
        <Delivery />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
