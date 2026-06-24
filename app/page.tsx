import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FooterNav from "@/components/FooterNav";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <Hero />
      <Features />
      <Pricing />
      <FooterNav />
    </div>
  );
}