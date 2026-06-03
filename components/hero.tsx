export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_28%,rgba(132,204,22,0.28),transparent_38%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-lime-50/80 to-transparent" />

      <div className="mx-auto flex min-h-[86vh] w-full max-w-7xl flex-col items-center px-5 pb-14 pt-24 text-center sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-28">
        <p className="mb-4 inline-flex rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-lime-700 shadow-sm sm:mb-5 sm:text-sm">
          Lawn Maintenance • Strimming • Free Quotes
        </p>

        <div className="relative w-full max-w-6xl overflow-visible rounded-[1.75rem] border border-lime-100 bg-slate-900 shadow-2xl shadow-lime-900/10 sm:rounded-[2rem]">
          <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
            <img
              src="/grass.jpg"
              alt="Freshly cut striped lawn"
              className="h-[500px] w-full object-cover sm:h-[560px] md:h-[620px] lg:h-[560px] xl:h-[600px]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/70 md:bg-gradient-to-l md:from-black/70 md:via-black/35 md:to-transparent" />

            <div className="absolute inset-x-5 top-7 z-30 text-left md:inset-x-auto md:right-8 md:top-1/2 md:w-[44%] md:max-w-[32rem] md:-translate-y-1/2 lg:right-12 xl:right-16">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-lime-300 sm:text-sm">
                G1M Gardening
              </p>

              <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                Performance Gardening.
                <span className="block text-lime-300">Powered by G1M.</span>
              </h1>

              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row md:flex-col lg:flex-row">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center rounded-full bg-lime-500 px-7 py-3 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-lime-950/20 transition hover:bg-lime-600"
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

          <div className="pointer-events-none absolute -bottom-6 left-[58%] z-40 w-[82vw] max-w-[390px] -translate-x-1/2 sm:-bottom-8 sm:left-[58%] sm:w-[70vw] sm:max-w-[430px] md:-bottom-16 md:left-[28%] md:w-[48vw] md:max-w-[520px] lg:-bottom-24 lg:left-[27%] lg:w-[46vw] lg:max-w-[680px] xl:-bottom-28 xl:left-[28%] xl:w-[48vw] xl:max-w-[820px]">
            <img
              src="/flame2.png"
              alt=""
              className="animate-flame absolute left-[-18%] top-[42%] z-0 w-[52%] max-w-[260px] opacity-100 sm:left-[-16%] sm:top-[44%] sm:w-[50%] md:left-[-10%] md:top-[46%] md:max-w-[280px] lg:left-[-12%] lg:top-[48%] lg:max-w-[340px] xl:left-[-10%] xl:max-w-[390px]"
            />

            <img
              src="/mower2.png"
              alt="G1M racing lawn mower"
              className="animate-mower relative z-20 w-full drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-3 text-left sm:mt-24 sm:grid-cols-3 md:mt-28 lg:mt-36">
          <div className="rounded-2xl border border-lime-100 bg-white/90 px-4 py-3 shadow-lg shadow-lime-900/5 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-700">Local</p>
            <p className="mt-1 text-sm font-bold text-slate-800">Reliable garden care</p>
          </div>
          <div className="rounded-2xl border border-lime-100 bg-white/90 px-4 py-3 shadow-lg shadow-lime-900/5 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-700">Fast</p>
            <p className="mt-1 text-sm font-bold text-slate-800">Online lawn estimates</p>
          </div>
          <div className="rounded-2xl border border-lime-100 bg-white/90 px-4 py-3 shadow-lg shadow-lime-900/5 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-700">Clean</p>
            <p className="mt-1 text-sm font-bold text-slate-800">Professional finish</p>
          </div>
        </div>
      </div>
    </section>
  );
}