

export default function Footer() {
  return (
    <footer className="border-t border-lime-100 bg-white py-10 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 lg:flex-row lg:px-10 lg:text-left">
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950">
            G1M Gardening
          </h3>
          <p className="mt-2 max-w-sm text-sm font-medium leading-6 text-slate-500">
            Professional gardening, lawn care, strimming and grounds maintenance.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-lime-100 bg-lime-50/60 p-1 text-xs font-black uppercase tracking-wide text-slate-600">
          <a href="#services" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-lime-700 hover:shadow-sm">
            Services
          </a>
          <a href="#gallery" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-lime-700 hover:shadow-sm">
            Gallery
          </a>
          <a href="#reviews" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-lime-700 hover:shadow-sm">
            Reviews
          </a>
          <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-lime-700 hover:shadow-sm">
            Contact
          </a>
        </div>

        <div className="text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} G1M Gardening. All rights reserved.
        </div>
      </div>
    </footer>
  );
}