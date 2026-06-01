export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-24 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-lime-600">
            G1M Gardening
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
            Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Examples of lawn maintenance, general gardening and strimming work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Lawn Maintenance",
            "General Gardening",
            "Strimming",
          ].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-[#07130b] p-8">
                <span className="text-center text-2xl font-black uppercase text-lime-300">
                  {item}
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-black">{item}</h2>
                <p className="mt-3 text-slate-600">
                  Project photography placeholder until client images are added.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}