import Icon from "./Icon";

export default function CtaBand() {
  return (
    <div className="px-4 md:px-6">
      <div className="relative max-w-[1200px] mx-auto overflow-hidden rounded-[32px] bg-brand-800 px-6 md:px-16 py-20 text-center">
        <div className="relative">
          <h2 className="text-[clamp(2rem,4.4vw,3.6rem)] font-semibold tracking-[-0.035em] leading-[1.05] text-white mb-5">
            Ready to put AI <span className="font-serif italic font-normal">to work?</span>
          </h2>
          <p className="text-brand-100 text-[1.08rem] max-w-[520px] mx-auto mb-10">
            Tell us what you are trying to solve. We will be in touch shortly and we cannot wait to hear from you.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium bg-white text-brand-900 hover:bg-brand-50 transition-colors"
          >
            Start the conversation
            <Icon name="arrow" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
