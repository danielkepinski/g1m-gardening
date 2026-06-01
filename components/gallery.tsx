const galleryItems = [
  {
    title: "Lawn Maintenance",
    image: "/lawn1.png",
    description:
      "Clean mowing, edging and regular upkeep for tidy outdoor spaces.",
    tag: "Fresh Finish",
  },
  {
    title: "General Gardening",
    image: "/lawn2.jpg",
    description:
      "Reliable garden care including weeding, pruning and seasonal tidy-ups.",
    tag: "Garden Care",
  },
  {
    title: "Strimming",
    image: "/lawn3.jpg",
    description:
      "Sharp edges, borders and overgrown areas brought back under control.",
    tag: "Sharp Edges",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-lime-50/40 py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute left-[-8rem] top-32 h-80 w-80 rounded-full bg-lime-200/25 blur-3xl" />
      <div className="absolute right-[-10rem] bottom-10 h-96 w-96 rounded-full bg-green-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 inline-flex rounded-full border border-lime-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-lime-700 shadow-sm">
            Recent Work
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight text-slate-950 sm:text-5xl">
            Fresh lawns. Clean edges. Tidy gardens.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A snapshot of the kind of finish G1M delivers, from regular lawn maintenance to garden tidy-ups and strimming.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-lime-100 bg-white shadow-xl shadow-lime-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-900/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover object-bottom transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-80" />
                <span className="absolute left-4 top-4 rounded-full bg-lime-500 px-3 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-lime-950/20">
                  {item.tag}
                </span>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur">
                  <h3 className="text-xl font-black uppercase text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-lime-100 bg-white p-6 text-center shadow-xl shadow-lime-900/5 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:text-left">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-700">
              Want your garden looking like this?
            </p>
            <p className="mt-2 text-xl font-black text-slate-950">
              Get a quick estimate online or request a free quote.
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