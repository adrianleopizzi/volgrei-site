const plans = [
  {
    name: "Free",
    price: "€0",
    period: "",
    desc: "Get started with no commitment.",
    features: ["Task management", "Smart notes", "Up to 3 projects", "Community access"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Pro",
    price: "€4.99",
    period: "/mo",
    desc: "For freelancers who are serious about their work.",
    features: ["Everything in Free", "Unlimited projects", "Grei AI agent", "Priority sync"],
    cta: "Download on App Store",
    featured: true,
  },
  {
    name: "Business",
    price: "€9.99",
    period: "/mo",
    desc: "For power users who need more.",
    features: ["Everything in Pro", "Advanced AI usage", "Export & integrations", "Priority support"],
    cta: "Download on App Store",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <p className="text-[10px] tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>Pricing</p>
      <h2 className="text-3xl font-light tracking-tight mb-16 max-w-md" style={{ color: "var(--text-primary)" }}>
        Simple pricing.<br />
        <span style={{ color: "var(--text-muted)" }}>No surprises.</span>
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-xl p-6 flex flex-col gap-4 border"
            style={{
              background: plan.featured ? "var(--card)" : "var(--surface)",
              borderColor: plan.featured ? "var(--accent)" : "var(--border)",
            }}
          >
            {plan.featured && (
              <span className="text-[9px] tracking-widest uppercase" style={{ color: "var(--accent)" }}>most popular</span>
            )}
            <div>
              <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>{plan.name}</p>
              <p className="text-3xl font-light" style={{ color: "var(--text-primary)" }}>
                {plan.price}
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>{plan.period}</span>
              </p>
              <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>{plan.desc}</p>
            </div>

            <ul className="flex flex-col gap-2 mt-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-auto text-xs px-4 py-2.5 rounded-md text-center border transition-colors"
              style={{
                background: plan.featured ? "var(--accent)" : "transparent",
                borderColor: plan.featured ? "var(--accent)" : "var(--border)",
                color: plan.featured ? "#fff" : "var(--text-secondary)",
              }}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}