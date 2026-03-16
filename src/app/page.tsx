import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import ProductPreview from "@/components/ProductPreview";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <ProductPreview />
      <Benefits />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}