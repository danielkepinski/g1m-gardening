const services = [
  {
    title: "Lawn Maintenance",
    icon: "/icon1.png",
    description:
      "Regular mowing, edging and tidy-ups to keep your lawn sharp, healthy and looking freshly finished.",
    features: ["Regular cuts", "Clean edging", "Seasonal care"],
  },
  {
    title: "General Gardening",
    icon: "/icon2.png",
    description:
      "Reliable garden upkeep for busy homeowners, including weeding, pruning, clearing and planting support.",
    features: ["Weeding", "Pruning", "Garden tidy-ups"],
  },
  {
    title: "Strimming",
    icon: "/icon3.png",
    description:
      "Neat strimming for borders, fence lines, awkward corners and overgrown areas that need bringing back under control.",
    features: ["Borders", "Fence lines", "Overgrown areas"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-lime-50/80 to-transparent" />
      <div className="absolute left-1/2 top-24 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 inline-flex rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-lime-700 shadow-sm">
            Our Services
          </p>
          <h2 className="text-3xl font-black uppercase leading-tight text-slate-950 sm:text-5xl">
            Garden care with a clean, professional finish.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From regular lawn maintenance to one-off garden tidy-ups, G1M keeps outdoor spaces looking sharp, reliable and ready to enjoy.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-lime-100 bg-white p-6 shadow-lg shadow-lime-900/5 transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-900/10 sm:p-8"
            >
              <div className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-lime-100 transition duration-300 group-hover:scale-125 group-hover:bg-lime-200" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-lime-400 via-lime-500 to-green-600 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-lime-100 bg-lime-50 shadow-inner shadow-white">
                    <img
                      src={service.icon}
                      alt=""
                      className="h-14 w-14 object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-slate-950">
                  {service.title}
                </h3>

                <p className="min-h-[5.25rem] leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-lime-100 bg-lime-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-lime-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-lime-100 bg-lime-50/70 p-6 text-center shadow-lg shadow-lime-900/5 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:text-left">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-700">
              Not sure what you need?
            </p>
            <p className="mt-2 text-xl font-black text-slate-950">
              Use the online lawn estimator or request a free quote.
            </p>
          </div>
          <a
            href="#calculator"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-lime-500 px-7 py-3 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-lime-950/10 transition hover:bg-lime-600 sm:mt-0"
          >
            Get Online Estimate
          </a>
        </div>
      </div>
    </section>
  );
}