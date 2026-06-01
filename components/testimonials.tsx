const testimonials = [
  {
    quote:
      "Reliable, friendly and the garden looked brilliant once the work was finished.",
    name: "Local customer",
  },
  {
    quote:
      "Great attention to detail and everything was left clean and tidy afterwards.",
    name: "Domestic client",
  },
  {
    quote:
      "Helpful, professional and easy to deal with from the first message.",
    name: "G1M customer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-lime-600">
            Reviews
          </p>

          <h2 className="text-4xl font-black uppercase text-slate-900 md:text-5xl">
            Trusted By Local Customers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Placeholder reviews until live customer testimonials are ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.quote}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="mb-5 text-lg font-black text-lime-500">★★★★★</p>
              <p className="text-lg leading-8 text-slate-700">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-sm font-black uppercase tracking-wide text-slate-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
