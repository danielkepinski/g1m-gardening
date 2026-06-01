const testimonials = [
  {
    quote:
      "Reliable, friendly and the garden looked brilliant once the work was finished.",
    name: "Mrs Ledbury",
    detail: "Residential garden tidy-up",
  },
  {
    quote:
      "Great attention to detail and everything was left clean and tidy afterwards.",
    name: "Mr Smith",
    detail: "Lawn maintenance",
  },
  {
    quote:
      "Helpful, professional and easy to deal with from the first message.",
    name: "Commercial client",
    detail: "Grounds maintenance",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-lime-50/80 to-transparent" />
      <div className="absolute left-[-8rem] bottom-10 h-80 w-80 rounded-full bg-lime-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 inline-flex rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-lime-700 shadow-sm">
            Reviews
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight text-slate-950 sm:text-5xl">
            Trusted by local customers.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Friendly, reliable garden care with a clean finish and clear communication from first message to final tidy-up.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.quote}
              className="group relative overflow-hidden rounded-[2rem] border border-lime-100 bg-white p-6 shadow-xl shadow-lime-900/5 transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-900/10 sm:p-8"
            >
              <div className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-lime-100 transition duration-300 group-hover:scale-125 group-hover:bg-lime-200" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-lime-400 via-lime-500 to-green-600 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <p className="text-lg font-black tracking-widest text-lime-500">
                    ★★★★★
                  </p>
                  <span className="rounded-full border border-lime-100 bg-lime-50 px-3 py-2 text-xs font-black uppercase tracking-wide text-lime-700">
                    Verified
                  </span>
                </div>

                <p className="text-lg font-semibold leading-8 text-slate-700">
                  “{testimonial.quote}”
                </p>

                <div className="mt-8 border-t border-lime-100 pt-5">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-950">
                    {testimonial.name}
                  </p>
                  <p className="mt-2 text-sm font-bold text-lime-700">
                    {testimonial.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-lime-100 bg-lime-50/70 p-6 text-center shadow-xl shadow-lime-900/5 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:text-left">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-700">
              Ready for a tidy garden?
            </p>
            <p className="mt-2 text-xl font-black text-slate-950">
              Get a quick online estimate or request a free quote today.
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
