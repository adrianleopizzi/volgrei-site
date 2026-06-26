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
    <>
      <style>{`
        .pricing-section {
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 80px;
          padding-bottom: 100px;
        }
        @media (min-width: 768px) {
          .pricing-section {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 100px;
            padding-bottom: 120px;
          }
        }
        @media (min-width: 1024px) {
          .pricing-section {
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 120px;
            padding-bottom: 140px;
          }
        }
        @media (min-width: 1280px) {
          .pricing-section {
            padding-left: 80px;
            padding-right: 80px;
            padding-top: 140px;
            padding-bottom: 160px;
          }
        }

        .pricing-eyebrow {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 20px;
          user-select: none;
          -webkit-user-select: none;
        }

        .pricing-heading {
          font-size: 35px;
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 60px;
          max-width: 245px;
          user-select: none;
          -webkit-user-select: none;
        }
        @media (min-width: 768px) {
          .pricing-heading {
            font-size: 45px;
            margin-bottom: 72px;
            max-width: 482px;
          }
        }
        @media (min-width: 1024px) {
          .pricing-heading {
            font-size: 50px;
            margin-bottom: 80px;
            max-width: 633px;
          }
        }
        @media (min-width: 1280px) {
          .pricing-heading {
            font-size: 60px;
            margin-bottom: 96px;
            max-width: 784px;
          }
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: var(--border);
        }
        @media (min-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        .pricing-card {
          background: var(--bg);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          user-select: none;
          -webkit-user-select: none;
        }
        @media (min-width: 768px) {
          .pricing-card {
            padding: 32px 28px;
          }
        }
        @media (min-width: 1024px) {
          .pricing-card {
            padding: 36px 32px;
          }
        }
        @media (min-width: 1280px) {
          .pricing-card {
            padding: 40px 36px;
          }
        }

        .pricing-card-featured {
          background: var(--card, var(--surface));
        }

        .pricing-popular {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .pricing-plan-name {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .pricing-price {
          font-size: 36px;
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        @media (min-width: 1024px) {
          .pricing-price {
            font-size: 40px;
          }
        }
        @media (min-width: 1280px) {
          .pricing-price {
            font-size: 44px;
          }
        }

        .pricing-period {
          font-size: 14px;
          font-weight: 400;
        }

        .pricing-desc {
          font-size: 13px;
          font-weight: 400;
          line-height: 1.5;
          margin-top: 8px;
        }

        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .pricing-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.4;
        }

        .pricing-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .pricing-cta {
          display: block;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          padding: 10px 16px;
          border: 1px solid;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: opacity 0.15s ease;
          margin-top: 8px;
        }
        .pricing-cta:hover {
          opacity: 0.75;
        }
      `}</style>

      <section id="pricing" className="pricing-section">
        <p className="pricing-eyebrow" style={{ color: "var(--text-muted)" }}>
          Pricing
        </p>
        <h2 className="pricing-heading" style={{ color: "var(--text-primary)" }}>
          Simple pricing.{" "}
          <span style={{ color: "var(--text-muted)" }}>No surprises.</span>
        </h2>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card${plan.featured ? " pricing-card-featured" : ""}`}
            >
              {plan.featured && (
                <span className="pricing-popular" style={{ color: "var(--accent)" }}>
                  Most popular
                </span>
              )}

              <div>
                <p className="pricing-plan-name" style={{ color: "var(--text-muted)" }}>
                  {plan.name}
                </p>
                <p className="pricing-price" style={{ color: "var(--text-primary)" }}>
                  {plan.price}
                  <span className="pricing-period" style={{ color: "var(--text-muted)" }}>
                    {plan.period}
                  </span>
                </p>
                <p className="pricing-desc" style={{ color: "var(--text-muted)" }}>
                  {plan.desc}
                </p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing-feature-item" style={{ color: "var(--text-secondary)" }}>
                    <span className="pricing-dot" style={{ background: "var(--accent)" }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="pricing-cta"
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
    </>
  );
}