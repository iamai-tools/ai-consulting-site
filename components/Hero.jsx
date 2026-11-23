import Icon from "./Icon";

const tracks = [
  { label: "Autonomous AI Agents", desc: "Agents that reason, decide and finish multi-step work across your tools." },
  { label: "Process Automation", desc: "Reliable automation for routine, predictable, repetitive tasks." },
  { label: "Systems Orchestration", desc: "One layer that coordinates agents and knows when to bring in a human." },
  { label: "Custom Language Models", desc: "Models trained on your data, terminology and workflows." },
];

const stats = [
  { value: "8", label: "Service lines" },
  { value: "24/7", label: "Agent uptime by design" },
  { value: "100%", label: "Remote-first delivery" },
];

export default function Hero() {
  return (
    <section className="relative -mt-[72px] pt-[72px] overflow-hidden">

      <div className="relative max-w-[1248px] mx-auto px-6 pt-20 md:pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-16 items-end">
          <div>
            <span className="block text-[0.9rem] font-medium text-ink-500 mb-8">
              AI strategy &amp; implementation partner
            </span>

            <h1 className="text-[clamp(3rem,7.2vw,6.2rem)] font-medium tracking-[-0.045em] leading-[0.95] mb-8">
              Intelligence,
              <br />
              <span className="font-serif italic font-normal tracking-[-0.02em] text-brand-700 pr-2">engineered.</span>
            </h1>

            <p className="text-[clamp(1.05rem,1.5vw,1.25rem)] text-ink-700 max-w-[540px] leading-relaxed mb-10">
              We turn AI into practical results. We build LLM-powered agents and intelligent
              systems that simplify complexity, unlock productivity and scale with confidence.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium bg-ink-900 text-white hover:bg-brand-800 transition-colors"
              >
                Book a consultation
                <Icon name="arrow" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium bg-white border border-ink-900/10 text-ink-900 hover:border-ink-900/25 transition-colors"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-ink-900/[0.08] p-2">
            {tracks.map((t, i) => (
              <a
                key={t.label}
                href="#services"
                className={`group flex items-center gap-5 px-5 py-5 rounded-2xl hover:bg-brand-50 transition-colors ${
                  i < tracks.length - 1 ? "border-b border-ink-900/[0.06] hover:border-transparent" : ""
                }`}
              >
                <span className="text-[0.75rem] font-semibold text-ink-300 tabular-nums w-5">0{i + 1}</span>
                <div className="flex-1">
                  <div className="font-semibold text-[1.02rem] text-ink-900">{t.label}</div>
                  <div className="text-[0.9rem] text-ink-500 leading-snug mt-0.5">{t.desc}</div>
                </div>
                <span className="w-9 h-9 flex-shrink-0 rounded-full border border-ink-900/10 flex items-center justify-center text-ink-700 group-hover:bg-brand-700 group-hover:border-brand-700 group-hover:text-white transition-colors">
                  <Icon name="arrowUpRight" className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 border-t border-ink-900/10">
          {stats.map((s, i) => (
            <div key={s.label} className={`pt-7 ${i > 0 ? "pl-6 md:pl-10 border-l border-ink-900/10" : ""}`}>
              <div className="text-[clamp(2rem,4.5vw,3.4rem)] font-semibold tracking-[-0.04em] leading-none text-ink-900">
                {s.value}
              </div>
              <div className="text-ink-500 text-[0.88rem] mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
