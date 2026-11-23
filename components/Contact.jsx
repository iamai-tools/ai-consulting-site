import ContactForm from "./ContactForm";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

const items = [
  { icon: "mail", label: "Email", value: "briian@iamai.tools", href: "mailto:briian@iamai.tools" },
  { icon: "mail", label: "Email", value: "aryan@iamai.tools", href: "mailto:aryan@iamai.tools" },
  { icon: "phone", label: "Phone", value: "(408) 673-9357", href: "tel:+14086739357" },
  { icon: "cloud", label: "Location", value: "The Cloud", href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something"
            accent="intelligent."
            body="Interested in working together? Fill out the form and we will be in touch shortly."
          />

          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((item) => {
              const inner = (
                <>
                  <span className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="w-[18px] h-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.72rem] text-ink-500 uppercase tracking-[0.12em] font-semibold">{item.label}</span>
                    <span className="block text-[0.95rem] font-medium text-ink-900 truncate">{item.value}</span>
                  </span>
                </>
              );
              const cls = "flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-ink-900/[0.07] transition-colors";
              return item.href ? (
                <a key={item.value} href={item.href} className={`${cls} hover:border-brand-300`}>
                  {inner}
                </a>
              ) : (
                <div key={item.value} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[28px] bg-white border border-ink-900/[0.07] shadow-[0_40px_90px_-50px_rgba(22,22,20,0.10)] p-7 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
