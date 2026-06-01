

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#07130b] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.25),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(132,204,22,0.18),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-lime-300">
          Get Your Garden Sorted
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
          Ready To Transform Your Outdoor Space?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
          Contact G1M today for a free quote on gardening, landscaping, hedge
          trimming, lawn care and regular grounds maintenance.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:matt.galloway84@gmail.com?subject=G1M%20Gardening%20Quote%20Request"
            className="inline-flex rounded-full bg-lime-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-[#07130b] transition hover:bg-white"
          >
            Email For a Free Quote
          </a>

          <a
            href="#services"
            className="inline-flex rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:border-lime-300 hover:text-lime-300"
          >
            View Services
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 text-left sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-wide text-lime-300">
              Email
            </p>
            <a
              href="mailto:matt.galloway84@gmail.com"
              className="mt-2 block break-all text-lg font-bold text-white hover:text-lime-300"
            >
              matt.galloway84@gmail.com
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-wide text-lime-300">
              Quotes
            </p>
            <p className="mt-2 text-lg font-bold text-white">
              Free, no-obligation quotes
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-wide text-lime-300">
              Work Type
            </p>
            <p className="mt-2 text-lg font-bold text-white">
              Domestic & commercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}