"use client";

import { useState, type FormEvent } from "react";
import { constructionCatalog } from "@/shared/config/construction-catalog";
import { remodelingCatalog } from "@/shared/config/remodeling-catalog";
import { serviceCatalog } from "@/shared/config/service-catalog";
import { site } from "@/shared/config/site";
import "../styles/contact.css";

// Quote request form. There is no server-side mail service yet, so submitting opens the visitor's
// email app with the message pre-filled and addressed to the business.
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Quote request: ${get("project") || "General inquiry"}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "—"}`,
      `Project: ${get("project") || "General inquiry"}`,
      "",
      get("message"),
    ].join("\n");

    setStatus("opening");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="cf" onSubmit={onSubmit}>
      <div className="cf-row">
        <label>
          <span>Name *</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
        </label>
      </div>

      <div className="cf-row">
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-5555" />
        </label>
        <label>
          <span>Project type</span>
          <select name="project" defaultValue="">
            <option value="">General inquiry</option>
            <optgroup label="Services">
              {serviceCatalog.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
            </optgroup>
            <optgroup label="Remodeling">
              {remodelingCatalog.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
            </optgroup>
            <optgroup label="Construction">
              {constructionCatalog.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
            </optgroup>
          </select>
        </label>
      </div>

      <label>
        <span>Message *</span>
        <textarea name="message" required rows={6} placeholder="Tell us about your project…" />
      </label>

      <button type="submit" className="cf-submit">
        Send message <span aria-hidden="true">→</span>
      </button>

      <p className="cf-note" role="status" aria-live="polite">
        {status === "opening"
          ? "Opening your email app… If nothing happens, email us at "
          : "This opens your email app with your message ready to send to "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </form>
  );
}
