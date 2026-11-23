import { Logo } from "./Nav";

const cols = [
  { title: "Services", links: [["Autonomous AI Agents", "#services"], ["Process Automation", "#services"], ["Systems Orchestration", "#services"], ["Custom Language Models", "#services"]] },
  { title: "Company", links: [["About", "#about"], ["Approach", "#process"], ["Contact", "#contact"]] },
  { title: "Get in touch", links: [["aryan@iamai.tools", "mailto:aryan@iamai.tools"], ["briian@iamai.tools", "mailto:briian@iamai.tools"], ["(408) 673-9357", "tel:+14086739357"]] },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/[0.07] bg-white">
      <div className="max-w-[1248px] mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-[1.4fr_repeat(3,1fr)] gap-10 mb-14">
          <div>
            <Logo />
            <p className="text-ink-500 text-[0.92rem] mt-4 max-w-[280px]">
              Intelligence, engineered. AI agents and intelligent systems that scale with confidence.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-900 mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-ink-500 text-[0.92rem] hover:text-brand-700 transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-ink-900/[0.07] flex flex-wrap items-center justify-between gap-4 text-ink-500 text-[0.85rem]">
          <span>© 2026 iamai.tools. All rights reserved.</span>
          <span>Based in The Cloud</span>
        </div>
      </div>
    </footer>
  );
}
