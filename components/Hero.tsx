export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-14">
      <div className="max-w-3xl">
        <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-8">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7c3aed] mr-2 align-middle" />
          in development · iOS · launching soon
        </p>

        <h1 className="text-6xl font-light tracking-tighter leading-none mb-6">
          Your work,<br />
          <span className="text-[#7c3aed]">finally</span><br />
          under control.
        </h1>

        <p className="text-base text-zinc-500 leading-relaxed max-w-lg mb-10">
          Volgrei is the execution workspace built for freelancers — task management, smart notes, and an AI agent that actually understands your workflow.
        </p>

        <div className="flex gap-3">
          <a href="#" className="font-mono text-sm px-6 py-3 bg-[#7c3aed] text-white rounded-md hover:bg-[#6d28d9] transition-colors">
            Download on App Store ↗
          </a>
          <a href="#features" className="font-mono text-sm px-6 py-3 text-zinc-600 border border-zinc-900 rounded-md hover:border-zinc-700 hover:text-zinc-400 transition-colors">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}