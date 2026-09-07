import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────────────────────
   SHARED TOKENS (mirroring Stitch Tailwind config exactly)
   primary-container  = #01605a   (deep teal)
   secondary-container= #fe852c   (orange)
   on-secondary-container = #632c00
   surface-bright     = #fdf9f4
   surface-container-low = #f7f3ee
   surface-container-lowest = #ffffff
   on-surface         = #1c1c19
   on-surface-variant = #3f4947
   outline            = #6f7977
   secondary          = #994700
   primary            = #004642
───────────────────────────────────────────────────────────────────────────── */

const C = {
  primaryContainer: '#01605a',
  onPrimaryContainer: '#8ed8d0',
  secondaryContainer: '#fe852c',
  onSecondaryContainer: '#632c00',
  surfaceBright: '#fdf9f4',
  surfaceContainerLow: '#f7f3ee',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerHigh: '#ebe8e3',
  outlineVariant: '#bec9c6',
  onSurface: '#1c1c19',
  onSurfaceVariant: '#3f4947',
  outline: '#6f7977',
  secondary: '#994700',
  primary: '#004642',
  primaryFixed: '#a5f0e8',
  onPrimaryFixed: '#00201e',
  error: '#ba1a1a',
  tertiary: '#55371a',
};

/* ─────────────────────────────────────────────────────────────────────────────
   TYPOGRAPHY SCALE (from Stitch font config)
───────────────────────────────────────────────────────────────────────────── */
const T = {
  headlineXl: { fontFamily: "'Plus Jakarta Sans'", fontSize: '48px', lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: 700 },
  headlineLg: { fontFamily: "'Plus Jakarta Sans'", fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: 600 },
  headlineMd: { fontFamily: "'Plus Jakarta Sans'", fontSize: '24px', lineHeight: '32px', fontWeight: 600 },
  headlineSm: { fontFamily: "'Plus Jakarta Sans'", fontSize: '18px', lineHeight: '24px', fontWeight: 600 },
  labelMd: { fontFamily: "'Plus Jakarta Sans'", fontSize: '14px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 500 },
  labelSm: { fontFamily: "'Plus Jakarta Sans'", fontSize: '12px', lineHeight: '16px', letterSpacing: '0.01em', fontWeight: 500 },
  bodyLg: { fontFamily: "'Inter'", fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
  bodyMd: { fontFamily: "'Inter'", fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
  bodySm: { fontFamily: "'Inter'", fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
};

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 1: HERO
───────────────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '64px',
        paddingBottom: '96px',
        paddingLeft: '48px',
        paddingRight: '48px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gap: '48px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' }}>
          {/* Pill Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '9999px',
              backgroundColor: C.surfaceContainerHigh,
              color: C.primary,
              ...T.labelSm,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
            <span>Next-Gen Autonomous Workflow Engine</span>
          </div>

          {/* H1 */}
          <h1 style={{ ...T.headlineXl, color: C.onSurface }}>
            STOP MANAGING YOUR INBOX.{' '}
            <span style={{ color: C.primaryContainer }}>START RUNNING YOUR BUSINESS.</span>
          </h1>

          {/* Subheading */}
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, maxWidth: '672px' }}>
            FlowPilot AI intercepts, parses, and resolves complex operational requests across Gmail and WhatsApp instantly, orchestrating your tools without human friction.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '16px',
              paddingTop: '16px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/book-a-demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: C.secondaryContainer,
                color: C.onSecondaryContainer,
                padding: '16px 32px',
                borderRadius: '12px',
                ...T.labelMd,
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(254,133,44,0.25)',
                textDecoration: 'none',
              }}
            >
              Start Free Workflow
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
            <Link
              to="#tour"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                border: `1px solid ${C.outlineVariant}60`,
                color: C.onSurface,
                padding: '16px 24px',
                borderRadius: '12px',
                ...T.labelMd,
                fontWeight: 500,
                backgroundColor: 'transparent',
                textDecoration: 'none',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>play_circle</span>
              Watch Product Tour
            </Link>
          </div>

          {/* Trust Checks */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingTop: '24px', ...T.bodySm, color: C.outline }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: C.primary }}>check_circle</span>
              <span>Zero configuration required</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: C.primary }}>check_circle</span>
              <span>SOC2 Type II Certified</span>
            </div>
          </div>
        </div>

        {/* Right Column — Product UI Mockup */}
        <div>
          <div
            style={{
              backgroundColor: C.surfaceContainerLowest,
              padding: '24px',
              borderRadius: '16px',
              border: `1px solid ${C.outlineVariant}30`,
              boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
              position: 'relative',
            }}
          >
            {/* Browser Chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: `1px solid ${C.outlineVariant}20`,
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: `${C.error}80` }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: `${C.tertiary}60` }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: `${C.primary}60` }} />
              </div>
              <span style={{ ...T.bodySm, fontFamily: 'monospace', color: C.outline }}>flowpilot-active-session.ai</span>
            </div>

            {/* Content Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Incoming Email Card */}
              <div
                style={{
                  backgroundColor: C.surfaceContainerLow,
                  padding: '16px',
                  borderRadius: '12px',
                  border: `1px solid ${C.outlineVariant}20`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ ...T.labelSm, fontWeight: 700, color: C.onSurface }}>Incoming Email #4092</span>
                  <span
                    style={{
                      padding: '2px 8px',
                      backgroundColor: C.primaryFixed,
                      color: C.onPrimaryFixed,
                      borderRadius: '4px',
                      ...T.bodySm,
                    }}
                  >
                    AI Handled
                  </span>
                </div>
                <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>
                  "Can we upgrade our enterprise seat license to 250 users by Friday? Need custom invoicing."
                </p>
              </div>

              {/* AI Action Card */}
              <div
                style={{
                  backgroundColor: C.primaryContainer,
                  color: C.onPrimaryContainer,
                  padding: '16px',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      ...T.labelSm,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>smart_toy</span>
                    FlowPilot Autonomous Action
                  </span>
                  <span style={{ ...T.bodySm, opacity: 0.8 }}>Just now</span>
                </div>
                <p style={{ ...T.bodySm }}>
                  Generated custom quote #INV-8892, updated Stripe subscription tier, and sent WhatsApp confirmation to CFO.
                </p>
              </div>

              {/* Footer row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '8px',
                  paddingLeft: '4px',
                  paddingRight: '4px',
                  ...T.bodySm,
                  color: C.outline,
                }}
              >
                <span>Execution speed: 1.2s</span>
                <span style={{ color: C.secondary, fontWeight: 600 }}>100% Automated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 2: METRICS BAR
───────────────────────────────────────────────────────────────────────────── */
function MetricsBar() {
  const metrics = [
    { value: '99.4%', label: 'Inbox Zero Achievement', color: C.primaryContainer },
    { value: '14.2 hrs', label: 'Saved Per User / Week', color: C.secondary },
    { value: '< 1.5s', label: 'Average Response Latency', color: C.primaryContainer },
    { value: '$42M+', label: 'Transactions Automated', color: C.secondary },
  ];

  return (
    <section
      style={{
        borderTop: `1px solid ${C.outlineVariant}30`,
        borderBottom: `1px solid ${C.outlineVariant}30`,
        backgroundColor: C.surfaceContainerLowest,
        paddingTop: '48px',
        paddingBottom: '48px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          textAlign: 'center',
        }}
        className="metrics-grid"
      >
        {metrics.map((m) => (
          <div key={m.label}>
            <div style={{ ...T.headlineLg, color: m.color, marginBottom: '4px' }}>{m.value}</div>
            <div style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 3: 5-STEP WORKFLOW
───────────────────────────────────────────────────────────────────────────── */
const WORKFLOW_STEPS = [
  {
    step: 'STEP 01',
    title: 'Email Received',
    desc: 'Client drops a complex multi-part request into your primary support or sales inbox.',
    icon: 'mail',
    source: 'Gmail / Outlook',
  },
  {
    step: 'STEP 02',
    title: 'AI Understands',
    desc: 'Deep semantic parsing extracts intent, sentiment, entity data, and priority levels.',
    icon: 'psychology',
    source: 'FlowPilot Core',
  },
  {
    step: 'STEP 03',
    title: 'WhatsApp Alert',
    desc: 'A concise operational brief is dispatched instantly to your team\'s secure WhatsApp group.',
    icon: 'chat',
    source: 'WhatsApp API',
  },
  {
    step: 'STEP 04',
    title: 'User Replies',
    desc: 'Approve suggested actions with a single click or reply with voice notes or simple text.',
    icon: 'thumb_up',
    source: 'Instant Command',
  },
  {
    step: 'STEP 05',
    title: 'Response Sent',
    desc: 'Polished, context-aware correspondence and backend updates execute autonomously.',
    icon: 'done_all',
    source: 'Fully Resolved',
  },
];

function WorkflowSection() {
  return (
    <section
      id="features"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 64px' }}>
        <h2 style={{ ...T.headlineLg, color: C.onSurface, marginBottom: '16px' }}>
          Autonomous Orchestration in 5 Cinematic Steps
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
          Watch how raw chaotic communications transform into structured enterprise executions without manual input.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '24px',
        }}
        className="steps-grid"
      >
        {WORKFLOW_STEPS.map((s) => (
          <StepCard key={s.step} {...s} />
        ))}
      </div>
    </section>
  );
}

function StepCard({ step, title, desc, icon, source }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: C.surfaceContainerLowest,
        padding: '24px',
        borderRadius: '16px',
        border: `1px solid ${hovered ? C.primary : `${C.outlineVariant}30`}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'border-color 200ms',
        cursor: 'default',
      }}
    >
      <div>
        <span style={{ ...T.labelMd, color: C.secondary, fontWeight: 700, display: 'block', marginBottom: '8px' }}>
          {step}
        </span>
        <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: '8px' }}>{title}</h3>
        <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{desc}</p>
      </div>
      <div
        style={{
          marginTop: '24px',
          paddingTop: '16px',
          borderTop: `1px solid ${C.outlineVariant}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: C.outline,
        }}
      >
        <span className="material-symbols-outlined">{icon}</span>
        <span style={{ ...T.bodySm, fontFamily: 'monospace' }}>{source}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 4: PRODUCT DEMONSTRATION SHOWCASE
───────────────────────────────────────────────────────────────────────────── */
function ProductShowcase() {
  return (
    <section
      style={{
        backgroundColor: C.surfaceContainerLow,
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '6fr 6fr',
          gap: '48px',
          alignItems: 'center',
        }}
        className="showcase-grid"
      >
        {/* Left text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span style={{ ...T.labelMd, color: C.primary, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Live Software Preview
          </span>
          <h2 style={{ ...T.headlineLg, color: C.onSurface }}>
            Integrated AI Command Center for Modern Teams
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
            Switch effortlessly between full Gmail threat management, live WhatsApp thread monitoring, and our visual workflow automation canvas.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px' }}>
            {[
              'Automatic context merging across disparate communication channels',
              'Customizable guardrails and tone settings for every brand voice',
              'Enterprise-grade encryption protecting every message and payload',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: C.primary, marginTop: '2px' }}>check_circle</span>
                <span style={{ ...T.bodyMd, color: C.onSurface, fontWeight: 500 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Active Automations Card */}
        <div>
          <div
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderRadius: '16px',
              border: `1px solid ${C.outlineVariant}30`,
              padding: '24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            }}
          >
            {/* Card Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '24px',
                borderBottom: `1px solid ${C.outlineVariant}20`,
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: '28px' }}>dashboard</span>
                <div>
                  <h4 style={{ ...T.headlineSm, color: C.onSurface }}>Active Automations</h4>
                  <p style={{ ...T.bodySm, color: C.outline }}>Real-time telemetry</p>
                </div>
              </div>
              <span
                style={{
                  padding: '4px 12px',
                  backgroundColor: C.primaryContainer,
                  color: C.onPrimaryContainer,
                  borderRadius: '9999px',
                  ...T.labelSm,
                  fontWeight: 600,
                }}
              >
                Running 24/7
              </span>
            </div>

            {/* Automation Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Row 1 */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: C.surfaceContainerLow,
                  border: `1px solid ${C.outlineVariant}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: C.secondaryContainer,
                      color: C.onSecondaryContainer,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      ...T.labelMd,
                    }}
                  >
                    W
                  </div>
                  <div>
                    <div style={{ ...T.labelMd, fontWeight: 700, color: C.onSurface }}>VIP Client Lead Capture</div>
                    <div style={{ ...T.bodySm, color: C.outline }}>WhatsApp → CRM Sync → Calendar Invite</div>
                  </div>
                </div>
                <span style={{ ...T.bodySm, color: C.primary, fontWeight: 700 }}>Active</span>
              </div>

              {/* Row 2 */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: C.surfaceContainerLow,
                  border: `1px solid ${C.outlineVariant}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: C.primaryContainer,
                      color: C.onPrimaryContainer,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      ...T.labelMd,
                    }}
                  >
                    G
                  </div>
                  <div>
                    <div style={{ ...T.labelMd, fontWeight: 700, color: C.onSurface }}>Invoice Discrepancy Resolution</div>
                    <div style={{ ...T.bodySm, color: C.outline }}>Gmail Parser → Stripe API → Slack Notify</div>
                  </div>
                </div>
                <span style={{ ...T.bodySm, color: C.primary, fontWeight: 700 }}>Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 5: SERVICES & SOLUTIONS GRID
───────────────────────────────────────────────────────────────────────────── */
const SOLUTIONS = [
  {
    icon: 'support_agent',
    iconColor: C.primary,
    title: 'Customer Support Copilot',
    desc: 'Resolve Tier-1 inquiries automatically with zero drop in CSAT scores, escalating complex edge cases instantly.',
    linkText: 'Explore Support Module',
    linkColor: C.primary,
    href: '/services',
  },
  {
    icon: 'payments',
    iconColor: C.secondary,
    title: 'Executive Sales Assistant',
    desc: 'Qualify inbound leads, schedule meetings directly into executive calendars, and draft custom proposals.',
    linkText: 'Explore Sales Module',
    linkColor: C.secondary,
    href: '/services',
  },
  {
    icon: 'hub',
    iconColor: C.primary,
    title: 'Operations & Logistics',
    desc: 'Coordinate supply chain communications, track vendor deliveries, and handle exception alerts in real-time.',
    linkText: 'Explore Ops Module',
    linkColor: C.primary,
    href: '/services',
  },
];

function SolutionsSection() {
  return (
    <section
      id="solutions"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 64px' }}>
        <h2 style={{ ...T.headlineLg, color: C.onSurface, marginBottom: '16px' }}>
          Tailored Solutions for High-Growth Enterprises
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
          Deploy purpose-built AI agents across your core operational pillars.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
        }}
        className="solutions-grid"
      >
        {SOLUTIONS.map((sol) => (
          <SolutionCard key={sol.title} {...sol} />
        ))}
      </div>
    </section>
  );
}

function SolutionCard({ icon, iconColor, title, desc, linkText, linkColor, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: C.surfaceContainerLowest,
        padding: '32px',
        borderRadius: '16px',
        border: `1px solid ${hovered ? C.primary : `${C.outlineVariant}30`}`,
        transition: 'border-color 200ms',
      }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '36px', color: iconColor, display: 'block', marginBottom: '16px' }}>
        {icon}
      </span>
      <h3 style={{ ...T.headlineMd, color: C.onSurface, marginBottom: '12px' }}>{title}</h3>
      <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginBottom: '24px' }}>{desc}</p>
      <Link
        to={href}
        style={{
          ...T.labelMd,
          color: linkColor,
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          textDecoration: 'none',
        }}
      >
        {linkText}
        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 6: TESTIMONIALS
───────────────────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: '"FlowPilot AI completely transformed our client onboarding pipeline. We went from taking 4 hours to reply to new enterprise leads to an average response time of 45 seconds."',
    initials: 'JS',
    avatarBg: C.secondaryContainer,
    avatarColor: C.onSecondaryContainer,
    name: 'Jonathan Sterling',
    role: 'Chief Operating Officer, Veloce Global',
  },
  {
    quote: '"The WhatsApp integration is an absolute game-changer. I manage all critical vendor exceptions from my phone while traveling without ever opening a laptop."',
    initials: 'AM',
    avatarBg: C.primaryContainer,
    avatarColor: C.onPrimaryContainer,
    name: 'Aria Montgomery',
    role: 'Managing Director, Nexus Capital',
  },
];

function TestimonialsSection() {
  return (
    <section
      id="enterprise"
      style={{
        backgroundColor: C.surfaceContainerLow,
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 64px' }}>
          <h2 style={{ ...T.headlineLg, color: C.onSurface, marginBottom: '16px' }}>
            Trusted by Industry Leaders
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
            See how modern executives reclaim their time with FlowPilot AI.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}
          className="testimonials-grid"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                backgroundColor: C.surfaceContainerLowest,
                padding: '32px',
                borderRadius: '16px',
                border: `1px solid ${C.outlineVariant}30`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
              }}
            >
              <p style={{ ...T.bodyLg, color: C.onSurface, fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: t.avatarBg,
                    color: t.avatarColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    ...T.labelMd,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ ...T.bodyMd, fontWeight: 700, color: C.onSurface }}>{t.name}</div>
                  <div style={{ ...T.bodySm, color: C.outline }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 7: FAQ
───────────────────────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: 'How secure is my inbox and customer data?',
    a: 'FlowPilot AI is SOC2 Type II certified and GDPR compliant. All messages are encrypted in transit and at rest, and we never use your proprietary data to train foundational public models.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams are fully operational within 5 minutes. Simply connect your Google Workspace or Microsoft 365 account, configure your tone preferences, and activate your first workflow.',
  },
  {
    q: 'Can I review AI-generated responses before they send?',
    a: 'Yes! You can choose between full autopilot mode or human-in-the-loop review mode where every outgoing message requires a single tap on your phone or dashboard.',
  },
];

function FAQSection() {
  return (
    <section
      id="pricing"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        maxWidth: '768px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 style={{ ...T.headlineLg, color: C.onSurface, marginBottom: '16px' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
          Everything you need to know about setting up FlowPilot AI.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {FAQ_ITEMS.map((item) => (
          <div
            key={item.q}
            style={{
              backgroundColor: C.surfaceContainerLowest,
              padding: '24px',
              borderRadius: '16px',
              border: `1px solid ${C.outlineVariant}30`,
            }}
          >
            <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: '8px' }}>{item.q}</h3>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 8: FINAL CTA
───────────────────────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section
      style={{
        backgroundColor: C.primaryContainer,
        color: C.onPrimaryContainer,
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '896px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          alignItems: 'center',
        }}
      >
        <h2 style={{ ...T.headlineXl, color: C.onPrimaryContainer }}>
          YOUR BUSINESS. ON AUTOPILOT.
        </h2>
        <p style={{ ...T.bodyLg, opacity: 0.9, maxWidth: '672px' }}>
          Join hundreds of high-performing executives who have eliminated email noise and accelerated operational velocity.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.secondaryContainer,
              color: C.onSecondaryContainer,
              padding: '16px 32px',
              borderRadius: '12px',
              ...T.labelMd,
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
              minWidth: '200px',
              textAlign: 'center',
            }}
          >
            Start 14-Day Free Trial
          </Link>
          <Link
            to="/contact"
            style={{
              backgroundColor: 'rgba(253,249,244,0.1)',
              color: C.onPrimaryContainer,
              border: `1px solid ${C.onPrimaryContainer}30`,
              padding: '16px 32px',
              borderRadius: '12px',
              ...T.labelMd,
              fontWeight: 500,
              textDecoration: 'none',
              minWidth: '200px',
              textAlign: 'center',
            }}
          >
            Talk to Enterprise Sales
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────────────────────────────────────── */
export function HomePage() {
  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .showcase-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .solutions-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
      <HeroSection />
      <MetricsBar />
      <WorkflowSection />
      <ProductShowcase />
      <SolutionsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
