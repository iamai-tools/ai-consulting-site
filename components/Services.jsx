import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: "agent",
    title: "Autonomous AI Agents",
    description:
      "Agents that understand context, make decisions and complete tasks across multiple tools on their own. They log into software, fill out forms, move between systems and handle multi-step workflows from start to finish.",
    points: ["Multi-step workflows", "Works across your tools", "Fewer manual errors"],
    price: "From $149",
    cta: "Book",
    featured: true,
  },
  {
    icon: "automation",
    title: "Robotic Process Automation",
    description:
      "Software that handles simple, repetitive tasks the way a person would by clicking, typing and moving data between systems. The right fit when the steps are clear and rarely change.",
    points: ["Routine, predictable work", "Fast to set up", "Runs around the clock"],
    price: "Included in scope",
    cta: "Add to plan",
  },
  {
    icon: "orchestration",
    title: "Intelligent Systems Orchestration",
    description:
      "The layer that oversees everything and keeps it running smoothly. It monitors activity, coordinates AI agents and knows when to adjust, pause or bring in a human.",
    points: ["Agent coordination", "Human in the loop", "Improves over time"],
    price: "From $199",
    cta: "Book",
  },
  {
    icon: "model",
    title: "Custom Language Models",
    description:
      "Language models trained on your data, terminology, policies and workflows so they understand how your company actually operates. More accurate than generic AI tools and you stay in control of your data.",
    points: ["Trained on your data", "Your terminology", "You own the data"],
    price: "Included in scope",
    cta: "Add to plan",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Platform & Services"
            title="Built for how your business"
            accent="actually runs."
            body="Four ways we put AI to work, from quick automations to fully autonomous systems, tailored to where you are today."
          />
          <a
            href="#contact"
            className="mb-14 hidden md:inline-flex items-center gap-2 text-[0.93rem] font-medium text-brand-700 hover:text-brand-900"
          >
            Talk to us about scope <Icon name="arrow" className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative flex flex-col p-8 md:p-9 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                s.featured
                  ? "bg-brand-800 text-white border-brand-800"
                  : "bg-white border-ink-900/[0.08] hover:border-brand-300 hover:shadow-[0_30px_70px_-35px_rgba(22,22,20,0.14)]"
              }`}
            >
              
              <div className="relative flex items-start justify-between mb-8">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    s.featured ? "bg-white/10 border border-white/20 text-white" : "bg-brand-50 border border-brand-100 text-brand-700"
                  }`}
                >
                  <Icon name={s.icon} className="w-6 h-6" />
                </div>
                <span className={`text-[0.8rem] font-semibold tabular-nums ${s.featured ? "text-brand-200" : "text-ink-300"}`}>
                  0{i + 1}
                </span>
              </div>

              <h3 className="relative text-[1.45rem] font-semibold tracking-[-0.02em] mb-3">{s.title}</h3>
              <p className={`relative text-[0.98rem] leading-relaxed mb-6 ${s.featured ? "text-brand-100/90" : "text-ink-500"}`}>
                {s.description}
              </p>

              <ul className="relative flex flex-wrap gap-2 mb-8">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className={`inline-flex items-center gap-1.5 text-[0.8rem] font-medium px-3 py-1.5 rounded-full ${
                      s.featured ? "bg-white/10 text-white" : "bg-brand-50 text-brand-800"
                    }`}
                  >
                    <Icon name="check" className="w-3.5 h-3.5" />
                    {p}
                  </li>
                ))}
              </ul>

              <div
                className={`relative mt-auto flex items-center justify-between pt-6 border-t ${
                  s.featured ? "border-white/15" : "border-ink-900/[0.07]"
                }`}
              >
                <span
                  className={
                    s.price.startsWith("From")
                      ? `text-[1.15rem] font-semibold ${s.featured ? "text-white" : "text-ink-900"}`
                      : `text-[0.8rem] font-semibold uppercase tracking-[0.1em] ${s.featured ? "text-brand-200" : "text-ink-500"}`
                  }
                >
                  {s.price}
                </span>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-[0.88rem] font-medium px-4 py-2 rounded-full transition-colors ${
                    s.featured
                      ? "bg-white text-brand-900 hover:bg-brand-100"
                      : "bg-ink-900 text-white hover:bg-brand-700"
                  }`}
                >
                  {s.cta}
                  <Icon name="arrow" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
