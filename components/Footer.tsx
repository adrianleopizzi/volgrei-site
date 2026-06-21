export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 mt-32">
      <div className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
        <p className="font-mono text-[10px] text-zinc-700 tracking-wide">
          © 2026 Volgrei · built by{" "}
          <a href="https://adrianleopizzi.com" className="hover:text-zinc-500 transition-colors">
            Adrian Leopizzi
          </a>
        </p>
        <div className="flex gap-6">
          {[
            { label: "X", href: "https://x.com/volgrei" },
            { label: "Instagram", href: "https://instagram.com/volgrei" },
            { label: "Support", href: "/support" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="font-mono text-[10px] text-zinc-700 hover:text-zinc-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}