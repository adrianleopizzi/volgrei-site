import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 80%, transparent)" }}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-tight" style={{ color: "var(--text-primary)" }}>
          Volgrei
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/support" className="text-xs transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
            Support
          </Link>
          <a href="#" className="text-xs px-4 py-2 rounded-md transition-opacity hover:opacity-80 text-white" style={{ background: "var(--accent)" }}>
            App Store ↗
          </a>
        </div>
      </div>
    </nav>
  );
}