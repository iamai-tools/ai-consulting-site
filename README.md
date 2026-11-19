# iamai.tools — Next.js site

AI consulting marketing site built with Next.js (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/layout.jsx` — root layout, global metadata
- `app/page.jsx` — assembles the page from section components
- `app/globals.css` — Tailwind directives + a few custom effects (background glow, gradient text, orbit glow)
- `components/` — `Nav`, `Hero`, `Marquee`, `Services`, `About`, `Process`, `CtaBand`, `Contact`, `ContactForm`, `Footer`, plus shared `Icon` and `SectionHeader`
- `tailwind.config.js` — custom purple palette (brand/night/ink/paper) and fonts (Inter + Instrument Serif via next/font)
