import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "iamai.tools — Intelligence, engineered",
  description:
    "We turn AI into practical results. We build LLM-powered agents and intelligent systems that simplify complexity, unlock productivity, and scale with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
