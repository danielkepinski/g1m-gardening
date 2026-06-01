import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import FinalCTA from "@/components/cta";
import Footer from "@/components/footer";
import GardenCalculator from "@/components/garden-calculator";

export default function HomePage() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-slate-900">
      <Navbar />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="trust" className="scroll-mt-24">
        <TrustBar />
      </section>

      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <section id="calculator" className="scroll-mt-24">
        <GardenCalculator />
      </section>

      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>

      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>

      <section id="contact" className="scroll-mt-24">
        <FinalCTA />
      </section>

      <Footer />
    </main>
  );
}