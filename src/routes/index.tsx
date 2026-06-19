import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { PricingTiers } from "@/components/site/PricingTiers";
import { Membership } from "@/components/site/Membership";
import { GameBenchmarks } from "@/components/site/GameBenchmarks";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VCore Zouk Mosbeh — Premium Esports & Gaming Lounge" },
      {
        name: "description",
        content:
          "Premium esports lounge in Zouk Mosbeh. Pro-grade PCs, 240Hz monitors, tournament-ready setups. Book your station now.",
      },
      { property: "og:title", content: "VCore Zouk Mosbeh — Premium Esports Lounge" },
      { property: "og:description", content: "Premium PCs. Pro-grade gear. Zero compromise." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="scanlines relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <div className="neon-divider" />
        <About />
        <div className="neon-divider" />
        <PricingTiers />
        <div className="neon-divider" />
        <Membership />
        <div className="neon-divider" />
        <GameBenchmarks />
        <div className="neon-divider" />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
