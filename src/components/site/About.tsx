import { Cpu, Monitor, Trophy, Sparkles } from "lucide-react";

const features = [
  { icon: Cpu, label: "Pro-Grade Hardware", desc: "Latest-gen CPUs & GPUs, tuned for max FPS." },
  { icon: Monitor, label: "240Hz Competitive Displays", desc: "Zowie panels built for esports reflexes." },
  { icon: Trophy, label: "Tournament-Ready Setup", desc: "LAN-grade network, dedicated event area." },
  { icon: Sparkles, label: "Premium Lounge Atmosphere", desc: "Acoustic-treated, climate-controlled, elite." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-pixel text-[10px] tracking-widest text-glow-purple mb-4">
            // ABOUT_VCORE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glitch" data-text="Why VCore?">
            Why <span className="text-glow-cyan">VCore?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/75 leading-relaxed">
            VCore is a premium esports lounge brand built for players who refuse compromise.
            The Zouk Mosbeh flagship pairs top-tier hardware with a competitive, community-first
            atmosphere — a home base for ranked grinders, tournament squads, and weekend warriors alike.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="glass-card glass-card-cyan p-6">
              <div className="w-12 h-12 rounded-md flex items-center justify-center border border-[color:var(--neon-cyan)]/30 bg-[color:var(--neon-cyan)]/5 mb-4">
                <Icon className="w-6 h-6 text-[color:var(--neon-cyan)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-white">{label}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="photo-placeholder h-[360px]">
          <span className="text-2xl opacity-60">▣</span>
          <span>Insert VCore Interior / Gaming Floor Photo Here</span>
        </div>
      </div>
    </section>
  );
}
