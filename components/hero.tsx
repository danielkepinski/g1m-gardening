export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900">
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
              className="h-[460px] w-full object-cover sm:h-[560px] md:h-[620px] lg:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/65 sm:bg-gradient-to-r sm:from-black/65 sm:via-black/25 sm:to-transparent" />

            <div className="absolute inset-x-5 top-7 z-20 text-left sm:inset-x-auto sm:left-10 sm:top-1/2 sm:max-w-md sm:-translate-y-1/2 lg:left-14 lg:max-w-xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-lime-300 sm:text-sm">
                G1M Gardening
              </p>
              <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Performance Gardening.
                <span className="block text-lime-300">Powered by G1M.</span>
              </h1>

              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
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

          <div className="pointer-events-none absolute -bottom-8 left-1/2 z-30 w-[80vw] max-w-[440px] -translate-x-1/2 sm:-bottom-12 sm:w-[82vw] sm:max-w-[520px] md:-bottom-8 md:w-[76vw] md:max-w-[560px] max-[900px]:left-[64%] max-[900px]:-bottom-20 max-[900px]:w-[60vw] max-[900px]:max-w-[470px] max-[700px]:left-[68%] max-[700px]:-bottom-28 max-[700px]:w-[54vw] max-[700px]:max-w-[390px] max-[640px]:left-[64%] max-[640px]:-bottom-8 max-[640px]:w-[66vw] max-[640px]:max-w-[360px] lg:-bottom-36 lg:left-[68%] lg:w-[56vw] lg:max-w-5xl">
            <img
              src="/flame2.png"
              alt=""
              className="animate-flame absolute right-[-18%] top-[38%] z-0 w-[55%] max-w-[420px] opacity-100 sm:right-[-10%] sm:top-[45%] sm:w-[50%] lg:max-w-[500px]"
            />

            <img
              src="/mower2.png"
              alt="G1M racing lawn mower"
              className="animate-mower relative z-10 w-full scale-85 sm:scale-90 md:scale-95 max-[900px]:scale-90 max-[700px]:scale-85 lg:scale-100 drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-24 grid w-full max-w-3xl grid-cols-1 gap-3 text-left sm:mt-32 sm:grid-cols-3 lg:mt-40">
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