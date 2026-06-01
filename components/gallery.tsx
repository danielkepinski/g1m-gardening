const galleryItems = [
  {
    title: "Lawn Maintenance",
    description:
      "Clean mowing, edging and regular upkeep for tidy outdoor spaces.",
  },
  {
    title: "General Gardening",
    description:
      "Reliable garden care including weeding, pruning and seasonal tidy-ups.",
  },
  {
    title: "Strimming",
    description:
      "Sharp edges, borders and overgrown areas brought back under control.",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-600">
            Recent Work
          </p>

          <h2 className="text-4xl font-black uppercase text-slate-900 md:text-5xl">
            Before & After Gallery
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Project photos will be added here once G1M has final images ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-[#07130b] p-8 text-center">
                <span className="text-2xl font-black uppercase text-lime-300">
                  {item.title}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}