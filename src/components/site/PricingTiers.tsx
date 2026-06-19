import { Check } from "lucide-react";

type Tier = {
  name: string;
  tag: string;
  price: string;
  unit: string;
  specs: string[];
  accent: "cyan" | "purple" | "green";
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Standard",
    tag: "ENTRY",
    price: "$4",
    unit: "/ hour",
    specs: ["Intel i5 / Ryzen 5", "RTX 3060 / 4060", "16GB RAM", "144Hz Monitors"],
    accent: "cyan",
  },
  {
    name: "VIP / Pro",
    tag: "MOST POPULAR",
    price: "$7",
    unit: "/ hour",
    specs: ["Intel i7 / Ryzen 7", "RTX 4070 Ti / 4080", "32GB RAM", "240Hz Zowie Monitors"],
    accent: "purple",
    featured: true,
  },
  {
    name: "Bootcamp / Stream",
    tag: "ELITE",
    price: "$12",
    unit: "/ hour",
    specs: ["Intel i9", "RTX 4090", "Dual Monitor Setup", "Pro Mic / Cam"],
    accent: "green",
  },
];

const accentMap = {
  cyan: { card: "glass-card-cyan", text: "text-glow-cyan", color: "var(--neon-cyan)" },
  purple: { card: "glass-card-purple", text: "text-glow-purple", color: "var(--neon-purple)" },
  green: { card: "glass-card-green", text: "text-glow-green", color: "var(--neon-green)" },
} as const;

export function PricingTiers() {
  return (
    <section id="tiers" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-pixel text-[10px] tracking-widest text-glow-cyan mb-4">// HARDWARE</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pick Your <span className="text-glow-purple">Loadout</span>
          </h2>
          <p className="max-w-xl mx-auto text-foreground/70">
            Three tiers. Each one built for a different level of play. Zero throttling, ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t) => {
            const a = accentMap[t.accent];
            return (
              <div
                key={t.name}
                className={`glass-card ${a.card} p-8 flex flex-col relative ${
                  t.featured ? "md:-translate-y-4 md:scale-[1.03]" : ""
                }`}
              >
                <div
                  className="absolute -top-3 left-6 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest border"
                  style={{
                    borderColor: `oklch(from ${a.color} l c h / 0.5)`,
                    background: "var(--background)",
                    color: `var(--${t.accent === "cyan" ? "neon-cyan" : t.accent === "purple" ? "neon-purple" : "neon-green"})`,
                  }}
                >
                  {t.tag}
                </div>

                <h3 className={`font-display text-3xl font-bold mb-2 ${a.text}`}>{t.name}</h3>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-5xl font-bold text-white">{t.price}</span>
                  <span className="font-mono text-sm text-muted-foreground">{t.unit}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {t.specs.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: `var(--${t.accent === "cyan" ? "neon-cyan" : t.accent === "purple" ? "neon-purple" : "neon-green"})` }}
                        strokeWidth={2.5}
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className={`btn-neon ${t.featured ? "btn-neon-primary" : "btn-neon-ghost"} glitch w-full`}
                  data-text="Book This Tier"
                >
                  Book This Tier
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
