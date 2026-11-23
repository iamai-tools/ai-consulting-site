import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

const aiServices = [
  {
    icon: "agent",
    title: "Autonomous AI Agents",
    description:
      "Agents that understand context, make decisions and complete tasks across multiple tools on their own. They log into software, fill out forms, move between systems and handle multi-step workflows from start to finish.",
    points: ["Multi-step workflows", "Works across your tools", "Fewer manual errors"],
    featured: true,
  },
  {
    icon: "automation",
    title: "Robotic Process Automation",
    description:
      "Software that handles simple, repetitive tasks the way a person would by clicking, typing and moving data between systems. The right fit when the steps are clear and rarely change.",
    points: ["Routine, predictable work", "Fast to set up", "Runs around the clock"],
  },
  {
    icon: "orchestration",
    title: "Intelligent Systems Orchestration",
    description:
      "The layer that oversees everything and keeps it running smoothly. It monitors activity, coordinates AI agents and knows when to adjust, pause or bring in a human.",
    points: ["Agent coordination", "Human in the loop", "Improves over time"],
  },
  {
    icon: "model",
    title: "Custom Language Models",
    description:
      "Language models trained on your data, terminology, policies and workflows so they understand how your company actually operates. More accurate than generic AI tools and you stay in control of your data.",
    points: ["Trained on your data", "Your terminology", "You own the data"],
  },
];

const gtmServices = [
  {
    icon: "agent",
    title: "Paid Media & Demand Generation",
    description:
      "AI-managed ad campaigns that bring qualified buyers to the top of your funnel. We build, test and optimize campaigns across search and social, and send every lead into your CRM. You pay for ad spend directly to the platforms; our fee covers the work.",
    points: ["Campaign setup and testing", "Budget optimization", "Leads flow into your CRM"],
  },
  {
    icon: "automation",
    title: "Lead Sync & CRM Rebuild",
    description:
      "One clean view of every lead. We connect inbound and outbound lead sources, rebuild your CRM around how your team actually sells, and keep the data accurate.",
    points: ["Inbound and outbound in one place", "Clean, routed lead data", "Built around your sales process"],
  },
  {
    icon: "orchestration",
    title: "Sales Action Layer",
    description:
      "Tells your reps what to do next. Each lead gets a recommended action, such as a demo, a call or a follow-up, and a live pipeline dashboard shows where every deal stands.",
    points: ["Next-best actions for reps", "Live pipeline dashboard", "Automated follow-ups"],
  },
  {
    icon: "phone",
    title: "AI Call Center",
    description:
      "We design and build your call center. It answers inbound calls and leads around the clock, qualifies them, and routes the right ones to open opportunities for your reps.",
    points: ["24/7 inbound answers", "Qualifies every lead", "Hands off to reps"],
  },
];

const groups = [
  { label: "AI Systems", services: aiServices },
  { label: "Revenue & Go-to-Market", services: gtmServices },
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
            body="We put AI to work across your operations and your revenue engine, from quick automations to fully autonomous systems, tailored to where you are today."
          />
          <a
            href="#contact"
            className="mb-14 hidden md:inline-flex items-center gap-2 text-[0.93rem] font-medium text-brand-700 hover:text-brand-900"
          >
            Talk to us about scope <Icon name="arrow" className="w-4 h-4" />
          </a>
        </div>

        {groups.map((group) => (
          <div key={group.label} className="mb-14 last:mb-0">
            <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-700 mb-6">{group.label}</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {group.services.map((s, i) => (
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
                    className={`relative mt-auto flex items-center justify-end pt-6 border-t ${
                      s.featured ? "border-white/15" : "border-ink-900/[0.07]"
                    }`}
                  >
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-1.5 text-[0.88rem] font-medium px-4 py-2 rounded-full transition-colors ${
                        s.featured
                          ? "bg-white text-brand-900 hover:bg-brand-100"
                          : "bg-ink-900 text-white hover:bg-brand-700"
                      }`}
                    >
                      Book a consultation
                      <Icon name="arrow" className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 md:p-9 rounded-3xl bg-white border border-ink-900/[0.08]">
          <div>
            <h3 className="text-[1.3rem] font-semibold tracking-tight">Don&apos;t see what you need?</h3>
            <p className="text-ink-500 text-[0.98rem] mt-1">
              Every engagement is scoped to your business. Tell us the problem and we will shape the right mix of services.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium bg-ink-900 text-white hover:bg-brand-800 transition-colors flex-shrink-0"
          >
            Book a consultation
            <Icon name="arrow" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
