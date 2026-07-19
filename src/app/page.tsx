import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DataHighlights from "@/components/DataHighlights";
import About from "@/components/About";
import WhyJoin from "@/components/WhyJoin";
import Departments from "@/components/Departments";
import Activities from "@/components/Activities";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DataHighlights />
      <About />
      <WhyJoin />
      <Departments />
      <Activities />
      <Gallery />
      <Process />
      <FAQ />
      <Apply />
      <Footer />
    </main>
  );
}