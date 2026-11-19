const items = [
  "Autonomous Agents",
  "Process Automation",
  "Systems Orchestration",
  "Custom Language Models",
  "LLM Integrations",
  "Human in the Loop",
  "Workflow Design",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-ink-900/[0.07] bg-white/60 py-5 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-12">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-ink-500 text-[0.95rem] font-medium whitespace-nowrap">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-ink-300" />
          </span>
        ))}
      </div>
    </div>
  );
}
