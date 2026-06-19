export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute block w-[2px] h-[2px] rounded-full bg-[color:var(--neon-cyan)]"
            style={{
              left: `${(i * 37) % 100}%`,
              bottom: `-${(i * 13) % 40}px`,
              opacity: 0.4 + ((i % 5) * 0.1),
              animation: `particle-drift ${18 + (i % 7) * 4}s linear ${i * 0.6}s infinite`,
              boxShadow: "0 0 8px var(--neon-cyan)",
            }}
          />
        ))}
      </div>

      {/* Hero background placeholder */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80%] max-w-4xl h-[60%] photo-placeholder opacity-30">
          <span>▣ Insert VCore Lounge Hero Photo Here</span>
        </div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-border bg-background/40 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[color:var(--neon-green)] pulse-glow" />
          <span className="font-pixel text-[10px] tracking-widest text-glow-green">
            ZOUK MOSBEH
          </span>
        </div>

        <h1
          data-text="VCORE"
          className="glitch-ambient font-display font-bold tracking-widest text-[clamp(4rem,15vw,11rem)] leading-none text-glow-cyan"
        >
          VCORE
        </h1>

        <p className="mt-6 font-display text-2xl md:text-4xl font-medium text-white">
          Enter the Next Level of <span className="text-glow-purple">Competitive Gaming</span>.
        </p>

        <p className="mt-4 font-mono text-sm md:text-base text-muted-foreground tracking-wide">
          Premium PCs. Pro-grade gear. Zero compromise.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#booking" className="btn-neon btn-neon-primary glitch" data-text="Book Your Station">
            Book Your Station
          </a>
          <a href="#tiers" className="btn-neon btn-neon-ghost glitch" data-text="Explore Our Setup">
            Explore Our Setup
          </a>
        </div>
      </div>

      {/* Bottom scan line */}
      <div className="absolute bottom-0 inset-x-0 neon-divider" />
    </section>
  );
}
