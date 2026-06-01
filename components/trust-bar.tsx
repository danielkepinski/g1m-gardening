const items = [
  "Fully Insured",
  "Free Quotes",
  "Reliable Service",
  "Domestic & Commercial",
  "5-Star Reviews",
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 sm:gap-8 lg:px-10">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-full border border-lime-200 bg-lime-50 px-5 py-3"
          >
            <span className="text-sm font-bold uppercase tracking-wide text-slate-800">
              ✓ {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
