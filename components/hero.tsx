

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/hero.PNG"
          alt="G1M Gardening lawn mower logo"
          fill
          priority
          className="object-contain object-center opacity-[0.08] md:object-right md:opacity-[0.12]"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.15),transparent_35%)]" />

      <div className="mx-auto flex min-h-[92vh] w-full max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-lime-700">
            Premium Gardening & Grounds Care
          </p>

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
            Green Spaces.
            <span className="block text-lime-600">Done Right.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            G1M delivers professional lawn care, garden maintenance, hedge
            trimming and landscaping with a clean, reliable and high-standard
            service from start to finish.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-lime-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-lime-600"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-slate-800 transition hover:border-lime-500 hover:text-lime-600"
            >
              View Services
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              "Lawn Care",
              "Hedge Trimming",
              "Landscaping",
              "Free Quotes",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
              >
                <p className="text-sm font-bold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}