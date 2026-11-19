import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

const principles = [
  { title: "Tailored, not templated", body: "Personalized insights and solutions built around your needs instead of generic playbooks." },
  { title: "Hands-on from scope to production", body: "We scope the opportunity, design the system and make sure it holds up once it is live." },
  { title: "Humans stay in control", body: "Every system knows when to pause and bring a person in, so you never lose oversight." },
];

const deliverables = [
  { title: "A map of where AI helps", body: "A clear look at your workflows, data and tools, and where automation will actually pay off." },
  { title: "A working system in your tools", body: "Agents and automation built into the software your team already uses." },
  { title: "Ongoing tuning and support", body: "We monitor, adjust and scale the system as your business changes." },
];

export default function About() {
  return (
    <section id="about" className="px-4 md:px-6 scroll-mt-16">
      <div className="relative max-w-[1280px] mx-auto rounded-[36px] bg-night-900 overflow-hidden py-24 md:py-28 px-6 md:px-14">

        <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
          <div>
            <SectionHeader
              dark
              eyebrow="Who we are"
              title="Expert AI consultation,"
              accent="tailored to your business."
              body="Work directly with seasoned specialists who are dedicated to giving you personalized insights and solutions. From the first conversation to a deployed system we stay hands-on."
            />

            <div className="space-y-px rounded-2xl overflow-hidden border border-white/10">
              {principles.map((p) => (
                <div key={p.title} className="flex gap-4 p-5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                  <span className="mt-0.5 w-7 h-7 flex-shrink-0 rounded-full bg-brand-600/30 border border-brand-400/40 text-brand-200 flex items-center justify-center">
                    <Icon name="check" className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <div className="font-semibold text-white">{p.title}</div>
                    <div className="text-ink-300 text-[0.93rem] mt-0.5">{p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-paper text-ink-900 p-8 md:p-10 max-w-[460px] w-full mx-auto">
            <div className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-700 mb-6">
              What you get
            </div>
            <ol className="divide-y divide-ink-900/10">
              {deliverables.map((d, i) => (
                <li key={d.title} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                  <span className="font-serif italic text-[1.6rem] leading-none text-brand-700 w-7">{i + 1}</span>
                  <div>
                    <div className="font-semibold">{d.title}</div>
                    <div className="text-ink-500 text-[0.93rem] mt-1 leading-relaxed">{d.body}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
