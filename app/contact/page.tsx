export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07130b] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-black uppercase md:text-6xl">
          Get a Free Quote
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
          For gardening, landscaping, lawn care, hedge trimming or grounds
          maintenance enquiries, email Matt directly.
        </p>

        <a
          href="mailto:matt.galloway84@gmail.com?subject=G1M%20Gardening%20Quote%20Request"
          className="mt-10 inline-flex rounded-full bg-lime-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-[#07130b]"
        >
          matt.galloway84@gmail.com
        </a>
      </div>
    </main>
  );
}