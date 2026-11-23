import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

const team = [
  {
    name: "Brian Basiliere, CFA, CAIA",
    title: "Co-Founder",
    photo: "/team/brian.png",
    bio: "Co-founder of iamai.tools. Technology executive who builds and scales AI products, engineering organizations and enterprise delivery. Has led AI platform development and enterprise deployment across healthcare products, and built and scaled a 100+ person engineering and implementation team.",
    linkedin: "https://www.linkedin.com/in/brian-basiliere-cfa-caia/",
    github: null,
    website: null,
  },
  {
    name: "Aryan Mathur",
    title: "Co-Founder",
    photo: "/team/aryan.png",
    bio: "Co-founder of iamai.tools and a forward deployed software engineer, working directly with customers to build and deploy software in their environments. Computer science background from Purdue, graduate study in AI at Georgia Tech, and earlier founding experience and software engineering internships. He pairs engineering depth with business sense and ties each system to the outcome it needs to drive.",
    linkedin: "https://www.linkedin.com/in/aryan-mathur/",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 px-6 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          eyebrow="Team"
          title="Founders who stay"
          accent="hands-on."
          body="You work directly with the people who scope, build and run your systems."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col p-8 md:p-9 rounded-3xl bg-white border border-ink-900/[0.08]">
              <img src={person.photo} alt={person.name} className="w-full aspect-square object-cover rounded-2xl mb-6" />
              <div className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-700 mb-2">{person.title}</div>
              <h3 className="text-[1.45rem] font-semibold tracking-[-0.02em] mb-3">{person.name}</h3>
              <p className="text-ink-500 text-[0.98rem] leading-relaxed mb-6">{person.bio}</p>
              <div className="mt-auto pt-6 border-t border-ink-900/[0.07] flex flex-wrap gap-2">
                {[
                  { label: "LinkedIn", href: person.linkedin },
                  { label: "GitHub", href: person.github },
                  { label: "Website", href: person.website },
                ]
                  .filter((link) => link.href)
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.88rem] font-medium px-4 py-2 rounded-full bg-ink-900 text-white hover:bg-brand-700 transition-colors"
                    >
                      {link.label}
                      <Icon name="arrowUpRight" className="w-3.5 h-3.5" />
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
