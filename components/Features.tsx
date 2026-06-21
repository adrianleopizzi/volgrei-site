const features = [
  {
    tag: "01",
    title: "Task management",
    desc: "Deadline-aware tasks built for freelance workflows. Priorities, deadlines, and projects — all in one view.",
    detail: "Stop losing track of client deliverables. Volgrei keeps your work structured so you always know what to do next.",
  },
  {
    tag: "02",
    title: "Smart notes",
    desc: "Contextual notes that live alongside your tasks, not in a separate app.",
    detail: "Capture ideas, meeting notes, and client briefs exactly where they belong — next to the work they relate to.",
  },
  {
    tag: "03",
    title: "Grei — AI agent",
    desc: "An AI assistant built into your workspace that understands your projects and helps you move faster.",
    detail: "Ask Grei to summarize your week, draft a client update, or find what you were working on last Tuesday.",
  },
  {
    tag: "04",
    title: "Social layer",
    desc: "Connect with other freelancers, share progress, and stay accountable.",
    detail: "Freelancing is isolating. Volgrei brings a community layer so you can share wins and stay motivated.",
  },
];

export default function Features() {
  return (
    <section id="features" className="max-w-5xl mx-auto px-6 py-32">
      <p className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-3">Features</p>
      <h2 className="text-3xl font-light tracking-tight text-zinc-100 mb-16 max-w-md">
        Everything a freelancer needs.<br />
        <span className="text-zinc-600">Nothing they don&apos;t.</span>
      </h2>

      <div className="grid grid-cols-2 gap-px bg-zinc-900">
        {features.map((f) => (
          <div key={f.tag} className="bg-[#0a0a0a] p-8 flex flex-col gap-4">
            <span className="font-mono text-[10px] text-[#7c3aed] tracking-widest">{f.tag}</span>
            <h3 className="text-base font-medium text-zinc-100">{f.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            <p className="text-xs text-zinc-700 leading-relaxed">{f.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}