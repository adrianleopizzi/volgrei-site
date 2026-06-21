export default function Home() {
  const features = [
    { title: "Task management", desc: "Deadline-aware tasks built for freelance workflows. Not a list — a system." },
    { title: "Smart notes", desc: "Contextual notes that live alongside your work, not in a separate app." },
    { title: "Grei — AI agent", desc: "An AI assistant that understands your workspace and helps you move faster." },
    { title: "Social layer", desc: "Connect with other freelancers. Share progress, stay accountable." },
  ];

  const stack = ["Swift", "SwiftUI", "SwiftData", "Supabase", "Anthropic API", "Cloudflare"];

  const links = [
    { label: "x.com/volgrei", href: "https://x.com/volgrei" },
    { label: "instagram.com/volgrei", href: "https://instagram.com/volgrei" },
    { label: "github.com/volgrei", href: "https://github.com/volgrei" },
  ];

  return (
    <main className="max-w-2xl mx-auto px-6 py-20 pb-32">
      <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-8">
        volgrei.com
      </p>

      <h1 className="text-5xl font-light tracking-tighter leading-none mb-2">
        Volgrei<span className="text-[#c8ff00]">.</span>
      </h1>
      <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c8ff00] mr-2 align-middle" />
        in development · iOS · launching soon<br /><br />
        The execution workspace for freelancers.<br />
        Tasks, notes, and AI — in one app.
      </p>

      <div className="flex gap-3 mt-8">
        <button className="font-mono text-xs px-5 py-2.5 bg-[#c8ff00] text-black rounded-md font-medium">
          Get early access ↗
        </button>
        <button className="font-mono text-xs px-5 py-2.5 bg-transparent text-zinc-600 border border-zinc-900 rounded-md">
          Learn more
        </button>
      </div>

      <hr className="border-zinc-900 my-12" />

      <p className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-5">What it is</p>
      <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
        Volgrei is not a generic todo app. It&apos;s a focused execution layer built around how freelancers
        actually work — combining structured task management, contextual notes, and an integrated AI
        agent named Grei. Everything in one place, nothing extra.
      </p>

      <hr className="border-zinc-900 my-12" />

      <p className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-5">Features</p>
      <div className="grid grid-cols-2 gap-3">
        {features.map((f) => (
          <div key={f.title} className="border border-zinc-900 rounded-lg p-5 bg-zinc-950">
            <p className="text-sm font-medium text-zinc-100 mb-2">{f.title}</p>
            <p className="text-xs text-zinc-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <hr className="border-zinc-900 my-12" />

      <p className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-5">Pricing</p>
      <div className="grid grid-cols-3 gap-3">
        <div className="border border-zinc-900 rounded-lg p-5 bg-zinc-950">
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Free</p>
          <p className="text-xl font-light text-zinc-100">€0</p>
          <p className="text-xs text-zinc-700 mt-2 leading-relaxed">Core tasks and notes. No time limit.</p>
        </div>
        <div className="border border-[#2a3a00] rounded-lg p-5 bg-[#0a120a]">
          <p className="font-mono text-[9px] text-[#c8ff00] mb-1">most popular</p>
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Pro</p>
          <p className="text-xl font-light text-zinc-100">€4.99<span className="text-xs text-zinc-600">/mo</span></p>
          <p className="text-xs text-zinc-700 mt-2 leading-relaxed">Full access + Grei AI agent.</p>
        </div>
        <div className="border border-zinc-900 rounded-lg p-5 bg-zinc-950">
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Business</p>
          <p className="text-xl font-light text-zinc-100">€9.99<span className="text-xs text-zinc-600">/mo</span></p>
          <p className="text-xs text-zinc-700 mt-2 leading-relaxed">Everything + priority support.</p>
        </div>
      </div>

      <hr className="border-zinc-900 my-12" />

      <p className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-5">Built with</p>
      <div className="grid grid-cols-4 gap-2">
        {stack.map((s) => (
          <div key={s} className="font-mono text-xs text-zinc-600 px-3 py-2 border border-zinc-900 rounded-md bg-zinc-950">
            {s}
          </div>
        ))}
      </div>

      <hr className="border-zinc-900 my-12" />

      <p className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-5">Links</p>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-200 transition-colors group">
            <span className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-[#c8ff00] transition-colors" />
            {link.label}
          </a>
        ))}
      </div>

      <p className="font-mono text-[10px] text-zinc-800 tracking-wide mt-20">
        © 2026 Volgrei · built by{" "}
        <a href="https://adrianleopizzi.com" className="hover:text-zinc-600 transition-colors">
          Adrian Leopizzi
        </a>
      </p>
    </main>
  );
}