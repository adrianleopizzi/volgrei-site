export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-14">
      <div className="max-w-3xl">
        <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "var(--text-muted)" }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle" style={{ background: "var(--accent)" }} />
          in development · iOS · launching soon
        </p>

        <h1 className="text-6xl font-light tracking-tighter leading-none mb-6" style={{ color: "var(--text-primary)" }}>
          Your work,<br />
          <span style={{ color: "var(--accent)" }}>finally</span><br />
          under control.
        </h1>

        <p className="text-base leading-relaxed max-w-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          Volgrei is the execution workspace built for freelancers — task management, smart notes, and an AI agent that actually understands your workflow.
        </p>

        <div className="flex gap-3">
          <a href="#" className="text-sm px-6 py-3 rounded-md transition-opacity hover:opacity-80 text-white" style={{ background: "var(--accent)" }}>
            Download on App Store ↗
          </a>
          <a href="#features" className="text-sm px-6 py-3 rounded-md border transition-opacity hover:opacity-70" style={{ color: "var(--text-secondary)", borderColor: "var(--border)" }}>
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}