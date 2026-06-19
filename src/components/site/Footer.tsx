import { MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6">
      <div className="neon-divider mb-12" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div>
          <p className="font-display text-3xl font-bold text-glow-cyan tracking-widest">VCORE</p>
          <p className="font-pixel text-[10px] tracking-widest text-muted-foreground mt-2">
            ZOUK MOSBEH BRANCH
          </p>
          <p className="mt-4 text-sm text-foreground/70 max-w-xs">
            Premium esports lounge built for players who refuse compromise.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <a
            href="https://maps.google.com/?q=VCore+Zouk+Mosbeh"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 font-display text-lg font-semibold text-glow-purple hover:text-glow-cyan transition-colors"
          >
            <MapPin className="w-5 h-5" strokeWidth={1.8} />
            <span className="underline-offset-4 group-hover:underline">
              Get Directions — Zouk Mosbeh Highway
            </span>
          </a>

          <div className="flex items-center gap-3 mt-6">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: DiscordIcon, label: "Discord" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-border bg-background/40 flex items-center justify-center text-foreground/70 hover:text-glow-cyan hover:border-[color:var(--neon-cyan)]/60 hover:scale-110 transition-all"
                style={{ boxShadow: "0 0 0 transparent" }}
              >
                <Icon className="w-5 h-5" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <a href="#booking" className="btn-neon btn-neon-primary glitch" data-text="Book Your Station">
            Book Your Station
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} VCORE · ZOUK MOSBEH BRANCH · ALL RIGHTS RESERVED
        </p>
        <p className="font-pixel text-[8px] tracking-widest text-muted-foreground">
          SYSTEM v1.0 · ONLINE
        </p>
      </div>
    </footer>
  );
}

function DiscordIcon({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 6a16 16 0 0 0-4-1l-.3.6a12 12 0 0 0-5.4 0L9 5a16 16 0 0 0-4 1C2 10 1.5 14 2 18c1.6 1.2 3.2 2 4.7 2.5l1-1.5a8 8 0 0 1-1.5-.8M19 6c3 4 3.5 8 3 12-1.6 1.2-3.2 2-4.7 2.5l-1-1.5c.5-.2 1-.5 1.5-.8M9 14c.7.5 1.6.8 2.5.8h1c.9 0 1.8-.3 2.5-.8" />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
      <circle cx="15" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}
