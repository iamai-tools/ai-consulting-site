"use client";

import { useState } from "react";
import Icon from "./Icon";

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-paper border border-ink-900/10 text-ink-900 text-[0.95rem] placeholder:text-ink-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100 focus:bg-white transition";
const labelCls = "text-[0.82rem] font-medium text-ink-700 mb-1.5 block";

const serviceOptions = [
  "Autonomous AI Agents",
  "Robotic Process Automation",
  "Intelligent Systems Orchestration",
  "Custom Language Models",
  "Paid Media & Demand Generation",
  "Lead Sync & CRM Rebuild",
  "Sales Action Layer",
  "AI Call Center",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h3 className="text-[1.3rem] font-semibold tracking-tight">Book a consultation</h3>
        <p className="text-ink-500 text-[0.92rem] mt-1">Tell us a little about your team and what you need.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelCls}>Name</label>
          <input id="name" name="name" type="text" placeholder="Jane Doe" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Work email</label>
          <input id="email" name="email" type="email" placeholder="jane@company.com" required className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelCls}>Company</label>
        <input id="company" name="company" type="text" placeholder="Company name" className={inputCls} />
      </div>

      <div>
        <label htmlFor="service" className={labelCls}>What are you interested in?</label>
        <select id="service" name="service" required defaultValue="" className={inputCls}>
          <option value="" disabled>Choose a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>What are you trying to solve?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us a bit about your workflow or challenge..."
          required
          rows={4}
          className={`${inputCls} resize-y`}
        />
      </div>

      {/* Honeypot: hidden from people, often filled in by spam bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {status === "error" && (
        <p className="text-[0.9rem] text-red-600">
          Something went wrong and your message was not sent. Please email briian@iamai.tools directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium bg-ink-900 text-white hover:bg-brand-800 disabled:bg-emerald-600 disabled:shadow-none transition-colors"
      >
        {status === "sent" ? (
          <>
            <Icon name="check" className="w-4 h-4" /> Thanks, we will be in touch
          </>
        ) : status === "sending" ? (
          "Sending..."
        ) : (
          <>
            Send message <Icon name="arrow" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
