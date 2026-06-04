"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xjgdvzpb", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", date: "", guests: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    background: "white",
    border: "1px solid var(--stone)",
    borderRadius: 0,
    color: "var(--charcoal)",
    outline: "none",
    transition: "border-color 0.2s",
    display: "block",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 0",
        background: "var(--cream)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px 80px", alignItems: "start" }} className="contact-grid">
          {/* Left col */}
          <div>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">
              Start Your <em style={{ fontStyle: "italic", color: "var(--sunset)" }}>Berat Journey</em>
            </h2>
            <div className="divider" />
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--charcoal-light)", marginBottom: 40 }}>
              Ready to experience the magic of Berat? Send us a message, and our team will get back to you within 24 hours with a personalised itinerary.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {[
                { label: "Location", value: "Berat, Albania · Near Mangalem Quarter" },
                { label: "Phone", value: "+355 68 421 1666", href: "tel:+355684211666" },
                { label: "Email", value: "oldtowncampingberat@gmail.com", href: "mailto:oldtowncampingberat@gmail.com" },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sunset)", paddingTop: 3, minWidth: 70 }}>
                    {c.label}
                  </span>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: 14, color: "var(--charcoal)", textDecoration: "none" }}>{c.value}</a>
                  ) : (
                    <span style={{ fontSize: 14, color: "var(--charcoal)" }}>{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/355684211666?text=Hello%2C%20I%27d%20like%20to%20book%20at%20Old%20Town%20Camping"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#25D366",
                color: "white",
                padding: "14px 28px",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.25s",
                marginBottom: 40,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#20BA5A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#25D366")}
            >
              <span style={{ fontSize: 18 }}>💬</span>
              Chat on WhatsApp
            </a>

            {/* Map placeholder */}
            <div style={{ background: "var(--stone)", height: 240, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d19.9326706!3d40.7000373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135aa300146df679%3A0x909f7d451d6fb08!2sOld%20Town%20Camping%20Berat!5e0!3m2!1sen!2s!4v1748000000000!5m2!1sen!2s"
                width="100%"
                height="240"
                style={{ border: 0, filter: "sepia(20%) saturate(80%)", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Old Town Camping Location"
              />
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "white", padding: "48px 40px", border: "1px solid var(--stone)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>✉️</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--charcoal)", marginBottom: 12 }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: 14, color: "var(--charcoal-light)", lineHeight: 1.7 }}>
                  Thank you for reaching out. We'll be in touch within 24 hours with your personalised Berat itinerary.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{ marginTop: 24, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sunset)", background: "none", border: "1px solid var(--sunset)", padding: "10px 20px", cursor: "pointer", fontFamily: "var(--font-body)" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: "var(--charcoal)", marginBottom: 32 }}>
                  Book an Enquiry
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label htmlFor="name" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--charcoal-light)", display: "block", marginBottom: 8 }}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--sunset)")}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--stone)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--charcoal-light)", display: "block", marginBottom: 8 }}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--sunset)")}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--stone)")}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label htmlFor="date" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--charcoal-light)", display: "block", marginBottom: 8 }}>
                      Arrival Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--sunset)")}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--stone)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--charcoal-light)", display: "block", marginBottom: 8 }}>
                      No. of Guests
                    </label>
                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min={1}
                      max={20}
                      value={form.guests}
                      onChange={handleChange}
                      placeholder="2"
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--sunset)")}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--stone)")}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label htmlFor="message" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--charcoal-light)", display: "block", marginBottom: 8 }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dream Albanian adventure..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                    onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--sunset)")}
                    onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--stone)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: sending ? "var(--charcoal-light)" : "var(--charcoal)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: sending ? "not-allowed" : "pointer",
                    transition: "background 0.25s",
                  }}
                  onMouseEnter={(e) => { if (!sending) (e.target as HTMLButtonElement).style.background = "var(--sunset)"; }}
                  onMouseLeave={(e) => { if (!sending) (e.target as HTMLButtonElement).style.background = "var(--charcoal)"; }}
                >
                  {sending ? "Sending..." : "Send Enquiry →"}
                </button>

                {error && (
                  <p style={{ fontSize: 12, color: "#e53e3e", textAlign: "center", marginTop: 12 }}>
                    Something went wrong. Please try again or contact us via WhatsApp.
                  </p>
                )}

                <p style={{ fontSize: 11, color: "var(--charcoal-light)", textAlign: "center", marginTop: 16, opacity: 0.7 }}>
                  We respond within 24 hours. No payment required to enquire.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
