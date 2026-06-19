import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#tiers", label: "Tiers" },
  { href: "#membership", label: "Membership" },
  { href: "#benchmarks", label: "Benchmarks" },
  { href: "#booking", label: "Book" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-background/20 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-widest text-glow-cyan">
            VCORE
          </span>
          <span className="hidden sm:inline font-mono text-[10px] tracking-[0.3em] text-muted-foreground border-l border-border pl-2">
            ZOUK MOSBEH
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/70 hover:text-glow-cyan transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#booking" className="hidden md:inline-flex btn-neon btn-neon-primary glitch" data-text="Book Now">
          Book Now
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden font-mono text-xs uppercase tracking-widest text-glow-cyan border border-border px-3 py-2 rounded-md"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm uppercase tracking-[0.18em] text-foreground/80 py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="btn-neon btn-neon-primary w-full mt-2"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
