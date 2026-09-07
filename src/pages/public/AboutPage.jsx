import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  MessageSquare,
  Calendar as CalendarIcon,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Database,
  X,
  AlertCircle,
  Play,
  Zap,
  Sliders,
  TrendingUp,
} from 'lucide-react';

const C = {
  surface: '#fdf9f4',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f7f3ee',
  surfaceContainer: '#f1ede8',
  surfaceContainerHigh: '#ebe8e3',
  onSurface: '#1c1c19',
  onSurfaceVariant: '#3f4947',
  outline: '#6f7977',
  outlineVariant: '#bec9c6',
  primary: '#004642',
  primaryContainer: '#01605a',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#8ed8d0',
  primaryFixed: '#a5f0e8',
  onPrimaryFixed: '#00201e',
  inversePrimary: '#8ad4cc',
  secondary: '#994700',
  secondaryContainer: '#fe852c',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#632c00',
  orange: '#FF862D',
  peach: '#FFD0A8',
  error: '#ba1a1a',
};

const T = {
  headlineXl: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '48px', lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: 800 },
  headlineLg: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: 700 },
  headlineMd: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', lineHeight: '32px', fontWeight: 700 },
  headlineSm: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', lineHeight: '24px', fontWeight: 600 },
  labelMd: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 600 },
  labelSm: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '12px', lineHeight: '16px', letterSpacing: '0.01em', fontWeight: 600 },
  bodyLg: { fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
  bodyMd: { fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
  bodySm: { fontFamily: "'Inter', sans-serif", fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
};

/* ── 1. HERO ── */
function AboutHero() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '72px 32px 96px',
        backgroundColor: C.surface,
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: C.surfaceContainerHigh,
            border: `1px solid ${C.outlineVariant}66`,
            marginBottom: '28px',
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: C.orange, display: 'inline-block' }} />
          <span style={{ ...T.labelSm, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em' }}>FlowPilot AI</span>
          <span style={{ color: C.outlineVariant }}>•</span>
          <span style={{ ...T.labelSm, color: C.onSurfaceVariant }}>Your AI Operations Team</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <h1 style={{ ...T.headlineXl, color: C.onSurface, marginBottom: '20px', textTransform: 'uppercase', fontSize: 'clamp(36px, 4.5vw, 54px)', lineHeight: 1.15 }}>
              WE BELIEVE BUSINESS SHOULD <span style={{ color: C.orange, fontWeight: 800 }}>FLOW</span>.
            </h1>
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, maxWidth: '560px', marginBottom: '36px', lineHeight: '1.7' }}>
              FlowPilot removes the repetitive glue work between people, information, and software. We build connected autonomous operations that let founders and high-output teams reclaim their focus.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
              <Link
                to="/book-a-demo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  backgroundColor: C.secondaryContainer,
                  color: C.onSecondary,
                  ...T.labelMd,
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(254,133,44,0.25)',
                }}
              >
                Meet FlowPilot
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  backgroundColor: C.surfaceContainerLowest,
                  border: `1px solid ${C.outlineVariant}66`,
                  color: C.primary,
                  ...T.labelMd,
                  textDecoration: 'none',
                }}
              >
                <Play size={14} fill={C.primary} />
                See How It Works
              </Link>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', paddingTop: '32px', borderTop: `1px solid ${C.outlineVariant}4D` }}>
              {[
                { value: '14.2 hrs', label: 'Saved per executive / wk' },
                { value: '< 90 sec', label: 'Average triage turnaround' },
                { value: '99.4%', label: 'Intent execution accuracy' },
              ].map((m) => (
                <div key={m.label}>
                  <div style={{ ...T.headlineMd, color: C.primary, fontWeight: 800 }}>{m.value}</div>
                  <div style={{ ...T.bodySm, color: C.onSurfaceVariant, marginTop: '2px' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Operational Telemetry Card */}
          <div>
            <div
              style={{
                backgroundColor: C.surfaceContainer,
                borderRadius: '18px',
                padding: '24px',
                border: `1px solid ${C.outlineVariant}80`,
                boxShadow: '0 16px 40px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', marginBottom: '16px', borderBottom: `1px solid ${C.outlineVariant}4D` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span style={{ ...T.labelSm, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    FlowPilot Orchestrator v4.2
                  </span>
                </div>
                <span style={{ ...T.bodySm, color: C.secondary, fontWeight: 700, padding: '2px 8px', backgroundColor: `${C.orange}26`, borderRadius: '4px', fontSize: '11px' }}>
                  Autonomous Triage
                </span>
              </div>

              {/* Real Operational Nodes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '14px', borderRadius: '12px', border: `1px solid ${C.outlineVariant}66` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', ...T.bodySm, fontWeight: 700, color: C.onSurface }}>
                      <Mail size={14} color={C.primary} />
                      Client: Enterprise SOW Renewal
                    </div>
                    <span style={{ fontSize: '10px', color: C.outline, fontFamily: 'monospace' }}>10:42 AM</span>
                  </div>
                  <p style={{ ...T.bodySm, color: C.onSurfaceVariant, margin: '0 0 6px 0', fontSize: '12px' }}>
                    "Ready to move forward with Q3 scope. Can we sync tomorrow afternoon?"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: `${C.primaryContainer}1A`, padding: '4px 8px', borderRadius: '6px', fontSize: '11px', color: C.primary, fontWeight: 600 }}>
                    <Zap size={12} /> Auto-classified intent: Contract Signing + Calendar Booking
                  </div>
                </div>

                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '14px', borderRadius: '12px', border: `1px solid ${C.outlineVariant}66` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', ...T.bodySm, fontWeight: 700, color: C.onSurface }}>
                      <MessageSquare size={14} color="#166534" />
                      VIP Executive Desk (WhatsApp)
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: 700, backgroundColor: C.primaryFixed, color: '#00504b', padding: '2px 8px', borderRadius: '9999px' }}>
                      Auto-Drafted
                    </span>
                  </div>
                  <p style={{ ...T.bodySm, color: C.onSurfaceVariant, margin: 0, fontSize: '12px' }}>
                    "Proposal v2 sent via secure vault. Calendar slot held for 2:30 PM EST."
                  </p>
                </div>

                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '14px', borderRadius: '12px', border: `1px solid ${C.outlineVariant}66`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: `${C.peach}80`, color: C.secondary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CalendarIcon size={16} />
                    </div>
                    <div>
                      <div style={{ ...T.bodySm, fontWeight: 700, color: C.onSurface }}>Calendar Hold Confirmed</div>
                      <div style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Tomorrow, 2:30 PM – 3:00 PM EST • Zoom</div>
                    </div>
                  </div>
                  <CheckCircle2 size={18} color={C.primaryContainer} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 2. BELIEF CONTRAST ── */
function BeliefSection() {
  return (
    <section style={{ padding: '88px 32px', backgroundColor: C.surfaceContainerLow, borderTop: `1px solid ${C.outlineVariant}4D`, borderBottom: `1px solid ${C.outlineVariant}4D` }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <div style={{ ...T.labelSm, color: C.orange, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>
            OUR CORE PHILOSOPHY
          </div>
          <h2 style={{ ...T.headlineLg, color: C.onSurface, textTransform: 'uppercase', marginBottom: '14px' }}>
            OPERATIONS SHOULD MAKE BUSINESS FEEL LIGHTER.
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
            Software should remove friction, not create another layer of fragmented micro-tasks for your team.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {/* Legacy Friction */}
          <div style={{ backgroundColor: C.surfaceContainerLowest, borderRadius: '16px', padding: '32px', border: `1px solid ${C.outlineVariant}66` }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: C.error, ...T.labelSm, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              <X size={16} />
              The Disconnected Hand-Off Trap
            </div>
            <h3 style={{ ...T.headlineMd, color: C.onSurface, marginBottom: '10px' }}>The Drag of Manual Micro-Tasks</h3>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginBottom: '28px' }}>
              Operating without unified orchestration turns skilled knowledge workers into repetitive human routers.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                '1. Inbound email arrives unnoticed',
                '2. Manual copy-paste into CRM / spreadsheet',
                '3. Follow-up ping on Slack or WhatsApp',
                '4. Manual calendar cross-check & timezone back-and-forth',
              ].map((step, idx) => (
                <div key={idx} style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: C.surfaceContainer, ...T.bodySm, color: C.outline }}>
                  {step}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '28px', paddingTop: '14px', borderTop: `1px solid ${C.outlineVariant}4D`, display: 'flex', alignItems: 'center', gap: '6px', ...T.labelSm, color: C.error, fontWeight: 600 }}>
              <AlertCircle size={15} />
              Result: Slow client turnaround and constant context-switching fatigue.
            </div>
          </div>

          {/* FlowPilot Way */}
          <div style={{ backgroundColor: C.primaryContainer, borderRadius: '16px', padding: '32px', border: `1px solid ${C.primary}66`, boxShadow: '0 12px 36px rgba(0,70,66,0.18)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: C.peach, ...T.labelSm, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              <CheckCircle2 size={16} color={C.orange} />
              FlowPilot Autonomous Orchestration
            </div>
            <h3 style={{ ...T.headlineMd, color: C.onPrimary, marginBottom: '10px' }}>Seamless Cross-Tool Continuity</h3>
            <p style={{ ...T.bodyMd, color: C.onPrimaryContainer, marginBottom: '28px' }}>
              Intelligent agents read context, follow pre-set rules, formulate materials, and notify you only when critical judgment is required.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { step: '1. Understand', desc: 'Parses intent and urgency in < 90 seconds' },
                { step: '2. Decide', desc: 'Applies operational guardrails and company policies' },
                { step: '3. Formulate', desc: 'Prepares professional email draft and holds calendar slot' },
              ].map((s, idx) => (
                <div key={idx} style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: 'rgba(0,70,66,0.5)', border: `1px solid ${C.inversePrimary}33`, display: 'flex', justifyContent: 'space-between', ...T.bodySm, color: C.onPrimary }}>
                  <span style={{ fontWeight: 600 }}>{s.step}</span>
                  <span style={{ fontSize: '11px', color: C.inversePrimary }}>{s.desc}</span>
                </div>
              ))}
              <div style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: C.secondaryContainer, color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...T.bodySm, fontWeight: 700 }}>
                <span>4. Approve &amp; Dispatch</span>
                <CheckCircle2 size={15} />
              </div>
            </div>
            <div style={{ marginTop: '28px', paddingTop: '14px', borderTop: `1px solid ${C.inversePrimary}33`, display: 'flex', alignItems: 'center', gap: '6px', ...T.labelSm, color: C.peach, fontWeight: 600 }}>
              <TrendingUp size={15} />
              Result: Zero manual lag and instant clarity for clients.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 3. THE PROBLEM WE SOLVE ── */
function WhySection() {
  const oldWay = ['Customer', 'Email Inbox', 'Human Router', 'Spreadsheet', 'WhatsApp', 'Calendar', 'Customer (Delayed)'];
  const newWay = [
    { label: 'Email / WhatsApp', icon: <Mail size={15} /> },
    { label: 'FlowPilot Core Orchestrator', icon: <Layers size={15} />, highlight: true },
    { label: 'CRM + Calendar Sync', icon: <Database size={15} /> },
    { label: 'Resolved ✓', icon: <CheckCircle2 size={15} />, badge: true },
  ];

  return (
    <section style={{ padding: '88px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ maxWidth: '768px', marginBottom: '48px' }}>
          <div style={{ ...T.labelSm, color: C.primaryContainer, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>
            THE PROBLEM WE SOLVE
          </div>
          <h2 style={{ ...T.headlineXl, color: C.onSurface, textTransform: 'uppercase', marginBottom: '14px', fontSize: 'clamp(28px, 3.8vw, 42px)' }}>
            TOO MUCH WORK HAPPENS <span style={{ color: C.orange }}>BETWEEN</span> THE TOOLS.
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, lineHeight: '1.7' }}>
            Most businesses do not suffer from a lack of software. They suffer from the invisible glue work—copying data, confirming availability, following up—that occupies 60% of an executive's workday.
          </p>
        </div>

        <div style={{ backgroundColor: C.surfaceContainerLowest, borderRadius: '16px', border: `1px solid ${C.outlineVariant}66`, padding: '32px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
          {/* Old way */}
          <div style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', ...T.labelSm, color: C.error, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
              <AlertCircle size={15} />
              The Disconnected Hand-Off Trap
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              {oldWay.map((n, i) => (
                <React.Fragment key={n}>
                  <div
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      backgroundColor: C.surfaceContainer,
                      border: `1px solid ${n.includes('Delayed') ? `${C.error}66` : `${C.outlineVariant}80`}`,
                      ...T.bodySm,
                      color: n.includes('Delayed') ? C.error : C.onSurfaceVariant,
                      fontWeight: n.includes('Delayed') ? 700 : 500,
                    }}
                  >
                    {n}
                  </div>
                  {i < oldWay.length - 1 && <ArrowRight size={14} color={C.outline} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: `${C.outlineVariant}4D`, marginBottom: '36px' }} />

          {/* New way */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', ...T.labelSm, color: C.primary, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
              <CheckCircle2 size={15} />
              FlowPilot Unified Execution Loop
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
              {newWay.map((n, i) => (
                <React.Fragment key={n.label}>
                  <div
                    style={{
                      padding: '10px 18px',
                      borderRadius: '8px',
                      backgroundColor: n.highlight ? C.primaryContainer : n.badge ? `${C.primaryFixed}4D` : C.surfaceContainerLow,
                      border: `1px solid ${n.highlight ? C.primary : C.outlineVariant}4D`,
                      color: n.highlight ? C.onPrimaryContainer : n.badge ? C.primary : C.onSurface,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      ...T.labelMd,
                      fontWeight: n.highlight || n.badge ? 700 : 500,
                    }}
                  >
                    {n.icon}
                    {n.label}
                  </div>
                  {i < newWay.length - 1 && <ArrowRight size={16} color={C.secondaryContainer} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 4. CTA ── */
function AboutCTA() {
  return (
    <section style={{ backgroundColor: C.primaryContainer, padding: '88px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <h2 style={{ ...T.headlineLg, color: '#ffffff' }}>Ready to Make Your Business Flow?</h2>
        <p style={{ ...T.bodyLg, color: C.onPrimaryContainer, opacity: 0.95 }}>
          Join high-output founders and teams that have eliminated manual glue work.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.secondaryContainer,
              color: C.onSecondary,
              padding: '14px 32px',
              borderRadius: '8px',
              ...T.labelMd,
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            Plan a Demo
          </Link>
          <Link
            to="/services"
            style={{
              backgroundColor: 'rgba(253,249,244,0.1)',
              color: '#ffffff',
              border: `1px solid ${C.onPrimaryContainer}4D`,
              padding: '14px 28px',
              borderRadius: '8px',
              ...T.labelMd,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <BeliefSection />
      <WhySection />
      <AboutCTA />
    </>
  );
}
