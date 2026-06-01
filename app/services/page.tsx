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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-24 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-lime-600">
            G1M Gardening
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
            Services
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Practical, reliable gardening services for keeping outdoor spaces
            neat, healthy and easy to enjoy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-lime-400 hover:shadow-xl"
            >
              <div className="mb-6 h-1.5 w-16 rounded-full bg-lime-400" />
              <h2 className="text-2xl font-black text-slate-900">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
