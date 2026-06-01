

const services = [
  {
    title: "Lawn Maintenance",
    description:
      "Regular lawn mowing, edging and tidy-ups to keep your grass looking clean and well cared for.",
  },
  {
    title: "General Gardening",
    description:
      "Reliable garden maintenance including weeding, pruning, planting, clearing and seasonal upkeep.",
  },
  {
    title: "Strimming",
    description:
      "Neat strimming for borders, edges, overgrown areas and hard-to-reach parts of the garden.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-600">
            Our Services
          </p>
          <h2 className="text-4xl font-black uppercase text-slate-900 md:text-5xl">
            Everything Your Garden Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Professional gardening and grounds maintenance delivered with care,
            reliability and attention to detail.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-xl"
            >
              <div className="mb-6 h-1.5 w-16 rounded-full bg-lime-400 transition-all group-hover:w-24" />

              <h3 className="mb-4 text-2xl font-black text-slate-900">
                {service.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}