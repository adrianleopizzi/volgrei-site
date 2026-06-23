export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col"
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        paddingLeft: "max(16px, 4.4vw)",
        paddingRight: "max(16px, 4.4vw)",
        paddingTop: "270px",
      }}
    >
      <h1
        style={{
          color: "var(--text-primary)",
          fontSize: "clamp(32px, 4vw, 56px)",
          fontWeight: 500,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        <span
          className="hero-line-1"
          style={{ display: "block", transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)" }}
        >
          One system for tasks,
        </span>
        <span
          className="hero-line-2"
          style={{ display: "block", transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)" }}
        >
          notes, and your AI agent
        </span>
      </h1>

      <style>{`
        h1:hover .hero-line-1 { transform: translateX(-18px); }
        h1:hover .hero-line-2 { transform: translateX(18px); }
      `}</style>
    </section>
  );
}