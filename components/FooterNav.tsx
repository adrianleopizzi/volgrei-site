const links = [
  {
    category: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    category: "Developer",
    items: [
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
      { label: "Status", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    category: "Contact",
    items: [
      { label: "X (Twitter)", href: "https://x.com/volgrei" },
      { label: "Instagram", href: "https://instagram.com/volgrei" },
      { label: "YouTube", href: "https://youtube.com/@volgrei" },
      { label: "Reddit", href: "https://reddit.com/r/volgrei" },
    ],
  },
  {
    category: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "DPA", href: "/dpa" },
      { label: "AUP", href: "/aup" },
    ],
  },
];

export default function FooterNav() {
  return (
    <footer className="mt-32 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-4 gap-8">
          {links.map((col) => (
            <div key={col.category} className="flex flex-col gap-4">
              <p className="text-[10px] tracking-widest uppercase" style={{ color: "var(--text-category)" }}>
                {col.category}
              </p>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs transition-opacity hover:opacity-80"
                      style={{ color: "var(--text-secondary)" }}
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