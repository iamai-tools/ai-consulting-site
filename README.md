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
- `app/api/contact/route.js` — contact form handler. Validates the submission and sends it by email through Amazon SES

## Hosting, deploys, and email

- **Hosting:** AWS Amplify, app `iamai-website`, region **us-east-2 (Ohio)**. Production branch is `main`.
- **Deploys:** Pushing or merging to `main` triggers an automatic build and deploy to https://iamai.tools.
- **DNS:** Managed in Squarespace for the `iamai.tools` domain.
- **Contact form email:** Amazon SES, region **us-east-2 (Ohio)**. Sender is `noreply@iamai.tools`. Submissions go to the team inboxes listed in `app/api/contact/route.js`.
- **AWS region check:** Before changing anything in the AWS console, confirm the region selector says **US East (Ohio)** for Amplify and SES work. Other AWS resources for other projects may be in us-east-1.
- **SES sandbox:** While the account is in the SES sandbox, recipients must be verified identities in us-east-2. Production access removes that limit.
