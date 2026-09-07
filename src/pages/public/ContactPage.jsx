import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

/* ─────────── DESIGN TOKENS ─────────── */
const C = {
  surface: "#FDF9F4",
  white: "#FFFFFF",
  low: "#F7F3EE",
  container: "#F1EDE8",
  high: "#EBE8E3",

  ink: "#1C1C19",
  muted: "#3F4947",
  outline: "#6F7977",
  border: "rgba(190,201,198,0.55)",
  borderSolid: "#BEC9C6",

  teal: "#004642",
  primary: "#01605A",
  primaryTint: "rgba(1,96,90,0.09)",
  primaryTintStrong: "rgba(1,96,90,0.15)",
  orange: "#FF862D",
  orangeTint: "rgba(255,134,45,0.10)",
  peach: "#FFD0A8",
};

const T = {
  plus: '"Plus Jakarta Sans", sans-serif',
  inter: "Inter, sans-serif",
};

/* ─────────── FORM INPUT ─────────── */
function Field({ label, required, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        style={{
          fontFamily: T.inter,
          fontSize: 13,
          fontWeight: 600,
          color: C.ink,
          letterSpacing: "0.01em",
        }}
      >
        {label}
        {required && (
          <span style={{ color: C.orange, marginLeft: 3 }}>*</span>
        )}
      </label>
      {children}
    </div>
  );
}

function Input({ id, type = "text", placeholder, required, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        padding: "12px 14px",
        borderRadius: 10,
        border: `1.5px solid ${focused ? C.primary : C.borderSolid}`,
        backgroundColor: C.white,
        fontFamily: T.inter,
        fontSize: 14,
        color: C.ink,
        outline: "none",
        boxShadow: focused ? `0 0 0 3px ${C.primaryTint}` : "none",
        transition: "border-color 0.15s, box-shadow 0.15s",
        width: "100%",
        boxSizing: "border-box",
      }}
    />
  );
}

function Textarea({ id, placeholder, required, rows = 4, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      required={required}
      rows={rows}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        padding: "12px 14px",
        borderRadius: 10,
        border: `1.5px solid ${focused ? C.primary : C.borderSolid}`,
        backgroundColor: C.white,
        fontFamily: T.inter,
        fontSize: 14,
        color: C.ink,
        outline: "none",
        boxShadow: focused ? `0 0 0 3px ${C.primaryTint}` : "none",
        transition: "border-color 0.15s, box-shadow 0.15s",
        width: "100%",
        boxSizing: "border-box",
        resize: "vertical",
        minHeight: 110,
      }}
    />
  );
}

function Select({ id, required, value, onChange, children }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      id={id}
      required={required}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        padding: "12px 14px",
        borderRadius: 10,
        border: `1.5px solid ${focused ? C.primary : C.borderSolid}`,
        backgroundColor: C.white,
        fontFamily: T.inter,
        fontSize: 14,
        color: C.ink,
        outline: "none",
        boxShadow: focused ? `0 0 0 3px ${C.primaryTint}` : "none",
        transition: "border-color 0.15s, box-shadow 0.15s",
        width: "100%",
        boxSizing: "border-box",
        cursor: "pointer",
        appearance: "auto",
      }}
    >
      {children}
    </select>
  );
}

/* ─────────── INFO ITEM ─────────── */
function InfoItem({ icon: Icon, label, children }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 11,
          background: C.primaryTint,
          color: C.primary,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
          marginTop: 2,
        }}
      >
        <Icon size={18} />
      </div>
      <div>
        <p
          style={{
            margin: "0 0 4px",
            fontFamily: T.inter,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: C.outline,
          }}
        >
          {label}
        </p>
        <div
          style={{
            fontFamily: T.inter,
            fontSize: 14,
            color: C.ink,
            lineHeight: 1.65,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─────────── PAGE ─────────── */
export function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    purpose: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <main style={{ background: C.surface, color: C.ink }}>

      {/* ══════════════════════════════════
          1. HERO
      ══════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          padding: "clamp(72px, 10vw, 120px) 24px 80px",
          overflow: "hidden",
        }}
      >
        {/* Subtle ambient blob */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.peach} 0%, rgba(255,208,168,0) 65%)`,
            opacity: 0.38,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 14px",
              background: C.white,
              border: `1px solid ${C.border}`,
              borderRadius: 999,
              color: C.primary,
              fontFamily: T.inter,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <Sparkles size={13} />
            Talk to the FlowPilot team
          </div>

          <h1
            style={{
              margin: "0 0 24px",
              fontFamily: T.plus,
              fontSize: "clamp(48px, 8.5vw, 96px)",
              lineHeight: 0.96,
              letterSpacing: "-0.06em",
              fontWeight: 800,
              maxWidth: 960,
            }}
          >
            LET&apos;S BUILD YOUR
            <br />
            NEXT
            <span style={{ color: C.primary }}> AUTOMATION.</span>
          </h1>

          <p
            style={{
              margin: 0,
              fontFamily: T.inter,
              fontSize: 17,
              lineHeight: 1.7,
              color: C.muted,
              maxWidth: 560,
            }}
          >
            Whether you&apos;re automating a single workflow or transforming
            your entire operations stack — our team will help you get there.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          2. CONTACT WORKSPACE — form + info
      ══════════════════════════════════ */}
      <section style={{ padding: "0 24px 100px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)",
            gap: 32,
            alignItems: "start",
          }}
          className="fp-contact-workspace"
        >
          {/* ── LEFT: FORM ── */}
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.border}`,
              borderRadius: 28,
              padding: "clamp(28px, 5vw, 48px)",
            }}
          >
            {submitted ? (
              /* ── SUCCESS STATE ── */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 16,
                  padding: "48px 0",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background: C.primaryTint,
                    color: C.primary,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <CheckCircle2 size={30} />
                </div>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: T.plus,
                    fontSize: 28,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Message received.
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontFamily: T.inter,
                    fontSize: 15,
                    color: C.muted,
                    lineHeight: 1.7,
                    maxWidth: 380,
                  }}
                >
                  We typically respond within one business day. Our team will
                  reach out to the email address you provided.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName:"", lastName:"", email:"", phone:"", company:"", purpose:"", message:"" }); }}
                  style={{
                    marginTop: 8,
                    padding: "11px 22px",
                    borderRadius: 10,
                    border: `1.5px solid ${C.borderSolid}`,
                    background: "transparent",
                    fontFamily: T.inter,
                    fontSize: 14,
                    fontWeight: 700,
                    color: C.ink,
                    cursor: "pointer",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ── FORM ── */
              <form onSubmit={handleSubmit} noValidate>
                <h2
                  style={{
                    margin: "0 0 28px",
                    fontFamily: T.plus,
                    fontSize: "clamp(22px, 3vw, 30px)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Send us a message
                </h2>

                {/* Row 1: first + last */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                  className="fp-form-two-col"
                >
                  <Field label="First name" required>
                    <Input
                      id="firstName"
                      placeholder="Alex"
                      required
                      value={form.firstName}
                      onChange={set("firstName")}
                    />
                  </Field>
                  <Field label="Last name" required>
                    <Input
                      id="lastName"
                      placeholder="Johnson"
                      required
                      value={form.lastName}
                      onChange={set("lastName")}
                    />
                  </Field>
                </div>

                {/* Row 2: email + phone */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                  className="fp-form-two-col"
                >
                  <Field label="Work email" required>
                    <Input
                      id="email"
                      type="email"
                      placeholder="alex@company.com"
                      required
                      value={form.email}
                      onChange={set("email")}
                    />
                  </Field>
                  <Field label="Phone">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={set("phone")}
                    />
                  </Field>
                </div>

                {/* Row 3: company + purpose */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                  className="fp-form-two-col"
                >
                  <Field label="Company">
                    <Input
                      id="company"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={set("company")}
                    />
                  </Field>
                  <Field label="Purpose">
                    <Select
                      id="purpose"
                      value={form.purpose}
                      onChange={set("purpose")}
                    >
                      <option value="">Select a topic…</option>
                      <option value="demo">Request a demo</option>
                      <option value="sales">Sales &amp; pricing</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical support</option>
                      <option value="other">Other</option>
                    </Select>
                  </Field>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 24 }}>
                  <Field label="Message" required>
                    <Textarea
                      id="message"
                      placeholder="Tell us what you're trying to automate and what workflows you'd like to streamline…"
                      required
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: "100%",
                    padding: "15px 24px",
                    borderRadius: 12,
                    border: "none",
                    background: submitting ? C.outline : C.teal,
                    color: C.white,
                    fontFamily: T.inter,
                    fontSize: 15,
                    fontWeight: 800,
                    cursor: submitting ? "not-allowed" : "pointer",
                    transition: "background 0.15s, opacity 0.15s",
                    opacity: submitting ? 0.75 : 1,
                  }}
                >
                  {submitting ? "Sending…" : (
                    <>Send Message <ArrowRight size={17} /></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT: INFO PANEL ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Contact details card */}
            <div
              style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: 24,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: T.plus,
                  fontSize: 19,
                  letterSpacing: "-0.025em",
                }}
              >
                Contact information
              </h3>

              <InfoItem icon={Mail} label="Email">
                <a href="mailto:contact@flowpilot.ai" style={{ color: C.primary, textDecoration: "none" }}>
                  contact@flowpilot.ai
                </a>
                <br />
                <a href="mailto:enterprise@flowpilot.ai" style={{ color: C.muted, textDecoration: "none" }}>
                  enterprise@flowpilot.ai
                </a>
              </InfoItem>

              <InfoItem icon={Phone} label="Phone">
                +1 (415) 555-0190
              </InfoItem>

              <InfoItem icon={Building2} label="Office">
                500 Howard Street, Suite 400
                <br />
                San Francisco, CA 94105
              </InfoItem>

              <InfoItem icon={Clock} label="Support hours">
                Mon – Fri, 8 AM – 6 PM PST
                <br />
                <span style={{ color: C.muted, fontSize: 13 }}>
                  24/7 priority support for Enterprise plans
                </span>
              </InfoItem>
            </div>

            {/* Book a demo card */}
            <div
              style={{
                background: C.teal,
                borderRadius: 24,
                padding: 28,
                color: C.white,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.12)",
                  color: C.peach,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Zap size={20} />
              </div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: T.plus,
                  fontSize: 20,
                  letterSpacing: "-0.025em",
                }}
              >
                Prefer a live walkthrough?
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: T.inter,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                See FlowPilot handle real workflows — WhatsApp approvals,
                inbox triage, calendar scheduling — in a personalized 30-min session.
              </p>
              <Link
                to="/book-a-demo"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 18px",
                  borderRadius: 10,
                  background: C.orange,
                  color: C.white,
                  textDecoration: "none",
                  fontFamily: T.inter,
                  fontSize: 14,
                  fontWeight: 800,
                  alignSelf: "flex-start",
                }}
              >
                Book a Demo <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          3. WHAT HAPPENS NEXT — 3-step process
      ══════════════════════════════════ */}
      <section style={{ padding: "90px 24px 100px", background: C.low }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 52 }}>
            <p
              style={{
                margin: "0 0 10px",
                color: C.orange,
                fontFamily: T.inter,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.09em",
                textTransform: "uppercase",
              }}
            >
              What happens after you submit
            </p>
            <h2
              style={{
                margin: 0,
                fontFamily: T.plus,
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
              }}
            >
              SIMPLE.
              <br />
              FAST. HUMAN.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
            className="fp-steps-grid"
          >
            {[
              {
                step: "01",
                icon: <MessageSquare size={22} />,
                title: "We read your message",
                desc: "A real team member reviews every submission — not a bot. We prioritize by use case and operational fit.",
              },
              {
                step: "02",
                icon: <Users size={22} />,
                title: "We match you to the right person",
                desc: "Depending on your needs, you'll hear from our solutions architecture, enterprise sales, or technical support team.",
              },
              {
                step: "03",
                icon: <Zap size={22} />,
                title: "We respond within 24 hours",
                desc: "Typically faster. Enterprise inquiries receive priority scheduling within the same business day.",
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 22,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: C.primaryTint,
                      color: C.primary,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {s.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: T.plus,
                      fontSize: 13,
                      fontWeight: 800,
                      color: C.high,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.step}
                  </span>
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontFamily: T.plus,
                    fontSize: 19,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontFamily: T.inter,
                    fontSize: 14,
                    color: C.muted,
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          4. FINAL CTA
      ══════════════════════════════════ */}
      <section
        style={{
          padding: "100px 24px",
          background: C.teal,
          color: C.white,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              margin: "0 0 14px",
              color: C.peach,
              fontFamily: T.inter,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
            }}
          >
            Ready to automate?
          </p>

          <h2
            style={{
              margin: "0 0 20px",
              fontFamily: T.plus,
              fontSize: "clamp(38px, 7vw, 72px)",
              lineHeight: 0.98,
              letterSpacing: "-0.055em",
            }}
          >
            READY TO PUT YOUR
            <br />
            BUSINESS IN FLOW?
          </h2>

          <p
            style={{
              margin: "0 0 36px",
              fontFamily: T.inter,
              fontSize: 16,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
            }}
          >
            Join operations leaders automating triage, communications, and
            scheduling — with full human control at every step.
          </p>

          <div
            style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}
          >
            <Link
              to="/book-a-demo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "15px 24px",
                borderRadius: 12,
                background: C.orange,
                color: C.white,
                textDecoration: "none",
                fontFamily: T.inter,
                fontSize: 14,
                fontWeight: 800,
                boxShadow: "0 4px 18px rgba(255,134,45,0.35)",
              }}
            >
              Schedule a Demo <ArrowRight size={16} />
            </Link>
            <Link
              to="/team"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "15px 24px",
                borderRadius: 12,
                border: "1.5px solid rgba(255,255,255,0.28)",
                background: "rgba(255,255,255,0.08)",
                color: C.white,
                textDecoration: "none",
                fontFamily: T.inter,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .fp-contact-workspace {
            grid-template-columns: 1fr !important;
          }
          .fp-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .fp-form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

export default ContactPage;
