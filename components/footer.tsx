

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050d08] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center lg:flex-row lg:px-10 lg:text-left">
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tight">
            G1M Gardening
          </h3>
          <p className="mt-2 text-sm text-white/60">
            Professional gardening, landscaping and grounds maintenance.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold uppercase tracking-wide text-white/70">
          <a href="#services" className="hover:text-lime-300">
            Services
          </a>
          <a href="#gallery" className="hover:text-lime-300">
            Gallery
          </a>
          <a href="#testimonials" className="hover:text-lime-300">
            Reviews
          </a>
          <a href="#contact" className="hover:text-lime-300">
            Contact
          </a>
        </div>

        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} G1M Gardening. All rights reserved.
        </div>
      </div>
    </footer>
  );
}