export default function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(132,204,22,0.22),transparent_34%)]" />

      <div className="mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col items-center px-6 pb-28 pt-28 text-center sm:px-8 lg:px-10 lg:pb-40">
        <p className="mb-5 inline-flex rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-lime-700 sm:text-sm">
          Lawn Maintenance • Strimming • Free Quotes
        </p>

        <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-lime-100 bg-slate-900 shadow-2xl shadow-lime-900/10">
          <img
            src="/grass.jpg"
            alt="Freshly cut striped lawn"
            className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[430px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

          <div className="absolute left-6 top-1/2 max-w-md -translate-y-1/2 text-left sm:left-10">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-lime-300">
              G1M Gardening
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Performance Gardening.
              <span className="block text-lime-300">Powered by G1M.</span>
            </h1>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center rounded-full bg-lime-500 px-7 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-lime-600"
              >
                Get Online Estimate
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/15 px-7 py-3 text-xs font-black uppercase tracking-wide text-white backdrop-blur transition hover:border-lime-300 hover:text-lime-300"
              >
                View Services
              </a>
            </div>
          </div>
        </div>


        <div className="pointer-events-none absolute bottom-[10px] left-1/2 z-10 w-[82vw] max-w-4xl -translate-x-1/2 sm:bottom-[-10px] lg:bottom-[-30px] lg:left-[63%] lg:w-[48vw]">
          <img
            src="/flame2.png"
            alt=""
            className="animate-flame absolute left-[-8%] top-[52%] z-0 w-[40%] max-w-[260px] opacity-95"
          />

          <img
            src="/mower2.png"
            alt="G1M racing lawn mower"
            className="animate-mower relative z-10 w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}