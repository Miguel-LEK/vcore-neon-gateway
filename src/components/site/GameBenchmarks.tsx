import { useState } from "react";

type Row = { game: string; std: number; vip: number };

const data: Row[] = [
  { game: "League of Legends", std: 220, vip: 320 },
  { game: "Valorant / CS2", std: 190, vip: 360 },
  { game: "Call of Duty: Warzone", std: 110, vip: 165 },
  { game: "Dota 2", std: 160, vip: 245 },
];

const MAX = 400;

export function GameBenchmarks() {
  const [active, setActive] = useState(0);
  const row = data[active];

  return (
    <section id="benchmarks" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-pixel text-[10px] tracking-widest text-glow-green mb-4">
            // PERFORMANCE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built for <span className="text-glow-cyan">Performance</span>
          </h2>
          <p className="max-w-xl mx-auto text-foreground/70">
            Real FPS, measured at our stations. Pick a title.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Game tabs */}
          <div className="lg:col-span-5 glass-card glass-card-cyan p-2">
            <ul className="flex flex-col">
              {data.map((r, i) => {
                const isActive = i === active;
                return (
                  <li key={r.game}>
                    <button
                      onClick={() => setActive(i)}
                      className={`w-full flex items-center gap-4 px-4 py-4 rounded-md text-left transition-all ${
                        isActive
                          ? "bg-[color:var(--neon-cyan)]/10 border border-[color:var(--neon-cyan)]/40"
                          : "border border-transparent hover:bg-white/5"
                      }`}
                    >
                      <span
                        className="w-10 h-10 shrink-0 rounded-md border border-dashed border-[color:var(--neon-cyan)]/40 flex items-center justify-center text-[8px] font-mono text-[color:var(--neon-cyan)]/70"
                        aria-label="Game icon placeholder"
                      >
                        ICON
                      </span>
                      <div className="flex-1">
                        <p className={`font-display text-lg font-semibold ${isActive ? "text-glow-cyan" : "text-white"}`}>
                          {r.game}
                        </p>
                        <p className="font-mono text-[11px] text-muted-foreground tracking-wider">
                          STD {r.std}+ · VIP {r.vip}+ FPS
                        </p>
                      </div>
                      {isActive && (
                        <span className="font-mono text-[10px] text-glow-green tracking-widest">●</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bar comparison */}
          <div className="lg:col-span-7 glass-card glass-card-purple p-8">
            <p className="font-pixel text-[10px] tracking-widest text-muted-foreground mb-2">
              // FPS_COMPARISON
            </p>
            <h3 className="font-display text-3xl font-bold text-white mb-8">{row.game}</h3>

            <div className="space-y-7">
              <BenchmarkBar label="STANDARD" value={row.std} max={MAX} color="cyan" />
              <BenchmarkBar label="VIP / PRO" value={row.vip} max={MAX} color="purple" />
            </div>

            <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground">DELTA</p>
                <p className="font-display text-2xl font-bold text-glow-green">
                  +{row.vip - row.std} FPS
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground">UPLIFT</p>
                <p className="font-display text-2xl font-bold text-glow-green">
                  {Math.round(((row.vip - row.std) / row.std) * 100)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenchmarkBar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: "cyan" | "purple";
}) {
  const pct = Math.min(100, (value / max) * 100);
  const colorVar = color === "cyan" ? "var(--neon-cyan)" : "var(--neon-purple)";

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-xs tracking-widest text-foreground/70">{label}</span>
        <span
          className="font-display text-2xl font-bold"
          style={{ color: colorVar, textShadow: `0 0 12px ${colorVar}` }}
        >
          {value}+ FPS
        </span>
      </div>
      <div className="h-3 rounded-full bg-white/5 overflow-hidden border border-border">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${colorVar}, oklch(from ${colorVar} l c h / 0.6))`,
            boxShadow: `0 0 20px ${colorVar}, inset 0 0 10px oklch(1 0 0 / 0.2)`,
          }}
        />
      </div>
    </div>
  );
}
