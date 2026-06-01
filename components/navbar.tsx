

import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-900 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="G1M home">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
            <Image
              src="/hero.PNG"
              alt="G1M Gardening"
              fill
              priority
              className="object-contain p-1.5"
            />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black uppercase tracking-tight">
              G1M
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.25em] text-lime-600">
              Gardening
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-wide text-slate-600 transition hover:text-lime-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-lime-500 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-lime-600 sm:inline-flex"
        >
          Get Quote
        </a>

        <a
          href="#contact"
          className="inline-flex rounded-full border border-lime-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-lime-600 md:hidden"
        >
          Quote
        </a>
      </nav>
    </header>
  );
}