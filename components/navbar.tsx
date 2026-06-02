import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-lime-100 bg-white/90 text-slate-900 shadow-sm shadow-lime-900/5 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:h-28 sm:px-8 lg:px-10">
        <a href="#home" className="group flex items-center" aria-label="G1M home">
          <span className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden bg-white transition group-hover:scale-105 sm:h-24 sm:w-24">
            <Image
              src="/navlogo1.png"
              alt="G1M Gardening"
              fill
              priority
              sizes="96px"
              className="object-contain"
            />
          </span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-lime-100 bg-lime-50/60 p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-600 transition hover:bg-white hover:text-lime-700 hover:shadow-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-lime-500 px-6 py-3 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-lime-950/10 transition hover:bg-lime-600 sm:inline-flex"
        >
          Get Quote
        </a>

        <a
          href="#contact"
          className="inline-flex rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-lime-700 shadow-sm shadow-lime-900/5 md:hidden"
        >
          Quote
        </a>
      </nav>
    </header>
  );
}