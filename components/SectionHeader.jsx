export default function SectionHeader({ eyebrow, title, accent, body, dark = false, center = false }) {
  return (
    <div className={`max-w-[720px] mb-14 ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] mb-5 ${
          dark ? "text-brand-300" : "text-brand-700"
        }`}
      >
        <span className={`w-6 h-px ${dark ? "bg-brand-300" : "bg-brand-700"}`} />
        {eyebrow}
      </span>
      <h2
        className={`text-[clamp(2rem,4vw,3.3rem)] font-semibold tracking-[-0.035em] leading-[1.05] mb-5 ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}{" "}
        {accent && (
          <span className={`font-serif italic font-normal tracking-[-0.01em] ${dark ? "text-brand-300" : "text-brand-700"}`}>
            {accent}
          </span>
        )}
      </h2>
      {body && <p className={`text-[1.08rem] leading-relaxed ${dark ? "text-ink-300" : "text-ink-500"}`}>{body}</p>}
    </div>
  );
}
