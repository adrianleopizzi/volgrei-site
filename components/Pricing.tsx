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
      <p className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-3">Pricing</p>
      <h2 className="text-3xl font-light tracking-tight text-zinc-100 mb-16 max-w-md">
        Simple pricing.<br />
        <span className="text-zinc-600">No surprises.</span>
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={plan.featured ? "rounded-xl p-6 flex flex-col gap-4 bg-[#0f0a1a] border border-[#7c3aed]/40" : "rounded-xl p-6 flex flex-col gap-4 bg-zinc-950 border border-zinc-900"}
          >
            {plan.featured && (
              <span className="font-mono text-[9px] text-[#7c3aed] tracking-widest uppercase">most popular</span>
            )}
            <div>
              <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-2">{plan.name}</p>
              <p className="text-3xl font-light text-zinc-100">
                {plan.price}
                <span className="text-sm text-zinc-600">{plan.period}</span>
              </p>
              <p className="text-xs text-zinc-600 mt-2">{plan.desc}</p>
            </div>

            <ul className="flex flex-col gap-2 mt-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="w-1 h-1 rounded-full bg-[#7c3aed] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={plan.featured ? "mt-auto font-mono text-xs px-4 py-2.5 rounded-md text-center bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-colors" : "mt-auto font-mono text-xs px-4 py-2.5 rounded-md text-center text-zinc-600 border border-zinc-900 hover:border-zinc-700 hover:text-zinc-400 transition-colors"}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}