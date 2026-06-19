export function Booking() {
  return (
    <section id="booking" className="relative py-28 px-6 grid-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-pixel text-[10px] tracking-widest text-glow-green mb-4">
            // RESERVATION
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Reserve Your <span className="text-glow-cyan">Station</span>
          </h2>
          <p className="font-mono text-sm md:text-base text-foreground/70">
            Pick your slot. Gear up. <span className="text-glow-purple">Dominate.</span>
          </p>
        </div>

        <div className="glass-card glass-card-purple p-3 md:p-4">
          <div className="calendly-wrapper rounded-lg overflow-hidden">
            <iframe
              title="VCore Booking"
              src="https://calendly.com/vcore-zouk-mosbeh/booking"
              width="100%"
              height="720"
              frameBorder={0}
              className="block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
