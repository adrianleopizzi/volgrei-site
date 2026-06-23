const links = [
  {
    category: "Product",
    items: [
      { label: "Features", href: "#features", external: false },
      { label: "Pricing", href: "#pricing", external: false },
      { label: "Changelog", href: "#", external: false },
      { label: "Roadmap", href: "#", external: false },
    ],
  },
  {
    category: "Developer",
    items: [
      { label: "Documentation", href: "#", external: false },
      { label: "API", href: "#", external: false },
      { label: "Status", href: "#", external: false },
      { label: "GitHub", href: "#", external: false },
    ],
  },
  {
    category: "Contact",
    items: [
      { label: "X (Twitter)", href: "https://x.com/volgrei", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/company/volgrei", external: true },
      { label: "Instagram", href: "https://instagram.com/volgrei", external: true },
      { label: "YouTube", href: "https://youtube.com/@volgrei", external: true },
      { label: "Reddit", href: "https://reddit.com/r/volgrei", external: true },
    ],
  },
  {
    category: "Legal",
    items: [
      { label: "Privacy", href: "/legal/privacy", external: false },
      { label: "Terms", href: "/legal/terms", external: false },
      { label: "DPA", href: "/legal/dpa", external: false },
      { label: "AUP", href: "/legal/aup", external: false },
    ],
  },
];

export default function FooterNav() {
  return (
    <footer className="mt-32">
      <div style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "clamp(32px, 4vw, 64px)",
        paddingRight: "clamp(32px, 4vw, 64px)",
      }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "clamp(24px, 4vw, 64px)",
        }}>
          {links.map((col) => (
            <div key={col.category} className="flex flex-col" style={{ minWidth: "100px" }}>
              <p style={{ fontSize: "13px", color: "var(--text-category)", marginBottom: "8px" }}>
                {col.category}
              </p>
              <ul className="flex flex-col" style={{ gap: "6px" }}>
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition-colors hover:text-white"
                      style={{ fontSize: "13px", color: "var(--text-secondary)" }}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}