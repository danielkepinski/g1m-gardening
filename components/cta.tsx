export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-lime-50/40 py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-lime-200/25 blur-3xl" />
      <div className="absolute right-[-10rem] bottom-10 h-96 w-96 rounded-full bg-green-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <p className="mb-4 inline-flex rounded-full border border-lime-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-lime-700 shadow-sm">
          Get Your Garden Sorted
        </p>

        <h2 className="mx-auto max-w-4xl text-3xl font-black uppercase leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Ready to transform your outdoor space?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Contact G1M today for a free quote on gardening, lawn care, strimming, hedge trimming and regular grounds maintenance.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:matt.galloway84@gmail.com?subject=G1M%20Gardening%20Quote%20Request"
            className="inline-flex w-full justify-center rounded-full bg-lime-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-lime-950/10 transition hover:bg-lime-600 sm:w-auto"
          >
            Get a Free Quote
          </a>

          <a
            href="#calculator"
            className="inline-flex w-full justify-center rounded-full border border-lime-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-lime-700 shadow-lg shadow-lime-900/5 transition hover:border-lime-400 hover:bg-lime-50 sm:w-auto"
          >
            Online Estimate
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 text-left md:grid-cols-3">
          <div className="rounded-[2rem] border border-lime-100 bg-white p-6 shadow-xl shadow-lime-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-900/10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500 text-xl font-black text-white">
              @
            </div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-700">
              Email
            </p>
            <a
              href="mailto:matt.galloway84@gmail.com"
              className="mt-3 block break-all text-lg font-black text-slate-950 hover:text-lime-700"
            >
              matt.galloway84@gmail.com
            </a>
          </div>

          <div className="rounded-[2rem] border border-lime-100 bg-white p-6 shadow-xl shadow-lime-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-900/10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500 text-xl font-black text-white">
              ✓
            </div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-700">
              Quotes
            </p>
            <p className="mt-3 text-lg font-black text-slate-950">
              Free, no-obligation quotes
            </p>
          </div>

          <div className="rounded-[2rem] border border-lime-100 bg-white p-6 shadow-xl shadow-lime-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-900/10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500 text-xl font-black text-white">
              ★
            </div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-700">
              Work Type
            </p>
            <p className="mt-3 text-lg font-black text-slate-950">
              Domestic & commercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}