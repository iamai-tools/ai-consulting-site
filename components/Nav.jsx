"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function Logo({ dark = false }) {
  return (
    <a href="#" className="flex items-center gap-2.5 font-semibold text-[1.05rem] tracking-tight">
      <span className="relative w-8 h-8 rounded-[10px] bg-brand-800 flex items-center justify-center text-[0.8rem] font-bold text-white shadow-[0_6px_18px_-6px_rgba(22,22,20,0.25)]">
        ai
      </span>
      <span className={dark ? "text-white" : "text-ink-900"}>
        iamai<span className={dark ? "text-brand-300" : "text-brand-600"}>.tools</span>
      </span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/80 backdrop-blur-xl border-b border-ink-900/[0.06]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1248px] mx-auto flex items-center justify-between px-6 h-[72px]">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-700 text-[0.93rem] font-medium px-4 py-2 rounded-full hover:text-ink-900 hover:bg-ink-900/[0.04] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:aryan@iamai.tools" className="text-[0.93rem] font-medium text-ink-700 hover:text-ink-900 px-3 py-2">
            Email us
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-ink-900 text-white font-medium text-[0.9rem] px-5 py-2.5 rounded-full hover:bg-brand-700 transition-colors"
          >
            Book a consultation
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full border border-ink-900/10 flex items-center justify-center text-ink-900"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-900/[0.06] bg-paper px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-ink-700 text-lg font-medium">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-ink-900 text-white font-medium text-center px-5 py-3 rounded-full"
          >
            Book a consultation
          </a>
        </div>
      )}
    </header>
  );
}
