import SectionHeader from "./SectionHeader";

const steps = [
  { num: "01", title: "Discover", description: "We map your workflows, data and tools to find where AI creates real leverage." },
  { num: "02", title: "Design", description: "We design the right mix of agents, automation and orchestration for your scope." },
  { num: "03", title: "Deploy", description: "We build and ship, integrating directly with the systems your team already uses." },
  { num: "04", title: "Operate", description: "We monitor, tune and scale the system as your business and data evolve." },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          eyebrow="How we work"
          title="A clear path from idea to"
          accent="intelligent system."
          body="Every engagement follows the same disciplined approach, scaled to the size of the problem."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {steps.map((step) => (
            <div key={step.num} className="group relative pt-8 border-t border-ink-900/10">
              <span className="absolute -top-px left-0 h-[2px] w-12 bg-brand-600 transition-all duration-500 group-hover:w-full" />
              <span className="block font-serif italic text-[2.6rem] leading-none text-brand-700 mb-5">{step.num}</span>
              <h4 className="text-[1.2rem] font-semibold tracking-tight mb-2">{step.title}</h4>
              <p className="text-ink-500 text-[0.95rem] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
