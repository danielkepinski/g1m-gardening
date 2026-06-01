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

        <div className="mx-auto max-w-4xl px-6 py-16 text-slate-700">
          <h2 className="mb-6 text-3xl font-black text-slate-900">
            Professional Gardening Services in Worcestershire
          </h2>

          <p className="leading-8">
            G1M Gardening provides professional lawn maintenance, strimming and
            garden care services throughout Worcester and the surrounding areas.
            Whether you need regular lawn cutting, seasonal garden maintenance or a
            one-off tidy-up, we deliver reliable, affordable and professional
            gardening services tailored to your property.
          </p>

          <p className="mt-6 leading-8">
            Our goal is simple: keep your outdoor space looking neat, healthy and
            enjoyable all year round. From small residential gardens to larger
            outdoor areas, G1M Gardening offers dependable service, attention to
            detail and straightforward pricing.
          </p>
        </div>
      </section>

      <section id="calculator" className="scroll-mt-24">
        <GardenCalculator />
      </section>

      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>

      <section id="faq" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-600">
              Frequently Asked Questions
            </p>
            <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                How does the garden quote calculator work?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Search for your property, draw around your lawn area and the calculator will estimate the garden size and provide a guide price.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                Do you provide free quotations?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. All quotations are provided free of charge with no obligation.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                Do you offer one-off garden visits?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. Whether you need a one-off tidy-up or regular maintenance, G1M Gardening can help.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                Which services do you provide?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We currently provide lawn maintenance and strimming services for residential and commercial outdoor spaces.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                Is the online estimate a final quotation?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                No. The calculator provides a guide price only. Final quotations may vary depending on access, condition and any additional work required.
              </p>
            </div>
          </div>
        </div>
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