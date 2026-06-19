import { Check } from "lucide-react";

const plans = [
  {
    name: "Bronze",
    sub: "Walk-In",
    price: "Pay as you go",
    period: "No commitment",
    accent: "cyan" as const,
    perks: [
      "Standard hourly rates",
      "Access to all open stations",
      "Free Wi-Fi & lounge area",
      "Pay per session",
    ],
  },
  {
    name: "Silver",
    sub: "Member",
    price: "$TBD",
    period: "/ month",
    accent: "purple" as const,
    perks: [
      "10% off hourly rates",
      "Priority booking window",
      "Reserved peak-hour slots",
      "Member-only events",
    ],
  },
  {
    name: "Gold",
    sub: "VIP Member",
    price: "$TBD",
    period: "/ month",
    accent: "green" as const,
    perks: [
      "Best hourly discount",
      "Guaranteed VIP tier access",
      "Exclusive tournament invites",
      "Free snacks & drinks",
    ],
  },
];

const map = {
  cyan: { card: "glass-card-cyan", text: "text-glow-cyan", color: "neon-cyan" },
  purple: { card: "glass-card-purple", text: "text-glow-purple", color: "neon-purple" },
  green: { card: "glass-card-green", text: "text-glow-green", color: "neon-green" },
} as const;

export function Membership() {
  return (
    <section id="membership" className="relative py-28 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-pixel text-[10px] tracking-widest text-glow-purple mb-4">
            // ACCESS_PLANS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            VCore <span className="text-glow-purple">Access Plans</span>
          </h2>
          <p className="max-w-xl mx-auto text-foreground/70">
            Play more, pay less. Tiered memberships for every player.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {plans.map((p) => {
            const m = map[p.accent];
            return (
              <div
                key={p.name}
                className={`glass-card ${m.card} p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center`}
              >
                <div className="md:col-span-3">
                  <p className="font-pixel text-[10px] tracking-widest text-muted-foreground mb-2">
                    {p.sub}
                  </p>
                  <h3 className={`font-display text-3xl font-bold ${m.text}`}>{p.name}</h3>
                  <div className="mt-3 font-mono text-sm">
                    <span className="text-white text-lg font-bold">{p.price}</span>
                    <span className="text-muted-foreground"> {p.period}</span>
                  </div>
                </div>

                <ul className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: `var(--${m.color})` }}
                        strokeWidth={2.5}
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="md:col-span-3 md:text-right">
                  <a
                    href="#booking"
                    className="btn-neon btn-neon-ghost glitch w-full md:w-auto"
                    data-text="Get Membership"
                  >
                    Get Membership
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs font-mono text-muted-foreground">
          // Pricing and perks coming soon — contact us for current membership details
        </p>
      </div>
    </section>
  );
}
