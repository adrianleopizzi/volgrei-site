import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FooterNav from "@/components/FooterNav";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FooterNav />
    </div>
  );
}