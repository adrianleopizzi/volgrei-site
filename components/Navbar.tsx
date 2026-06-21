import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium text-zinc-100 tracking-tight">
          Volgrei
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/support" className="font-mono text-xs text-zinc-600 hover:text-zinc-300 transition-colors">
            Support
          </Link>
          <a href="#" className="font-mono text-xs px-4 py-2 bg-[#7c3aed] text-white rounded-md hover:bg-[#6d28d9] transition-colors">
            App Store ↗
          </a>
        </div>
      </div>
    </nav>
  );
}