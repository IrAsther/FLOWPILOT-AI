import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Local enterprise curated assets from src/styles/Images
import heroWorkspaceImg from '../../styles/Images/executive-office.jfif';
import heroPhoneImg from '../../styles/Images/hero-workspace.jfif';
import stepEmailImg from '../../styles/Images/email-continuity.jfif';
import stepAnalysisImg from '../../styles/Images/operations-dashboard.jpg';
import stepMobileImg from '../../styles/Images/whatsapp-messaging-screen.jfif';
import stepApprovalImg from '../../styles/Images/sales-calendar.jfif';
import stepSuccessImg from '../../styles/Images/logistics-center.jfif';
import showcaseWorkspaceImg from '../../styles/Images/executive-office.jfif';
import solSupportImg from '../../styles/Images/logistics-center.jfif';
import solSalesImg from '../../styles/Images/sales-calendar.jfif';
import solOpsImg from '../../styles/Images/executive-office.jfif';
import testimonialJonathanImg from '../../styles/Images/testimonial-director.jpg';
import testimonialAriaImg from '../../styles/Images/digital-agency-team.jfif';

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
   Refined with multi-device product composition inspired by reference
───────────────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '96px',
        paddingBottom: '120px',
        paddingLeft: '24px',
        paddingRight: '24px',
        backgroundImage: `url('${heroWorkspaceImg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="hero-section"
    >
      {/* Semi-transparent overlay to ensure readability */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          zIndex: 1
        }} 
      />
      
      <div
        style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '48px',
          borderRadius: '12px',
          boxShadow: '0 24px 64px -12px rgba(0,70,66,0.15), 0 12px 32px -8px rgba(0,0,0,0.08)',
          border: `1px solid ${C.outlineVariant}50`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '24px',
        }}
        className="hero-content-container"
      >
        {/* Pill Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '9999px',
            backgroundColor: C.surfaceContainerHigh,
            color: C.primary,
            border: `1px solid ${C.outlineVariant}40`,
            ...T.labelSm,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
          <span>Next-Gen Autonomous Workflow Engine</span>
        </div>

        {/* H1 */}
        <h1 style={{ ...T.headlineXl, color: C.onSurface, margin: 0 }}>
          STOP MANAGING YOUR INBOX.<br />
          <span style={{ color: C.primaryContainer }}>START RUNNING YOUR BUSINESS.</span>
        </h1>

        {/* Subheading */}
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, maxWidth: '600px', margin: 0 }}>
          FlowPilot AI intercepts, parses, and resolves complex operational requests across Gmail and WhatsApp instantly, orchestrating your tools without human friction.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            paddingTop: '8px',
            flexWrap: 'wrap',
            width: '100%',
          }}
          className="hero-cta-group"
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
              borderRadius: '8px',
              ...T.labelMd,
              fontWeight: 700,
              boxShadow: '0 8px 20px rgba(254,133,44,0.3)',
              textDecoration: 'none',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            className="btn-primary"
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
              borderRadius: '8px',
              ...T.labelMd,
              fontWeight: 500,
              backgroundColor: C.surfaceContainerLowest,
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: C.primary }}>play_circle</span>
            Watch Product Tour
          </Link>
        </div>

        {/* Trust Checks */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', paddingTop: '16px', ...T.bodySm, color: C.outline, flexWrap: 'wrap' }}>
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
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 2: METRICS BAR
   Enhanced with subtle card containers and soft elevation
───────────────────────────────────────────────────────────────────────────── */
function MetricsBar() {
  const metrics = [
    { value: '99.4%', label: 'Inbox Zero Achievement', color: C.primaryContainer, icon: 'mark_email_read' },
    { value: '14.2 hrs', label: 'Saved Per User / Week', color: C.secondary, icon: 'schedule' },
    { value: '< 1.5s', label: 'Average Response Latency', color: C.primaryContainer, icon: 'bolt' },
    { value: '$42M+', label: 'Transactions Automated', color: C.secondary, icon: 'payments' },
  ];

  return (
    <section
      style={{
        borderTop: `1px solid ${C.outlineVariant}30`,
        borderBottom: `1px solid ${C.outlineVariant}30`,
        backgroundColor: C.surfaceContainerLowest,
        paddingTop: '40px',
        paddingBottom: '40px',
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
          gap: '24px',
          textAlign: 'center',
        }}
        className="metrics-grid"
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{
              padding: '20px 16px',
              borderRadius: '8px',
              backgroundColor: C.surfaceBright,
              border: `1px solid ${C.outlineVariant}25`,
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ ...T.headlineLg, color: m.color, marginBottom: '6px', fontWeight: 800 }}>{m.value}</div>
            <div style={{ ...T.bodySm, color: C.onSurfaceVariant, fontWeight: 500 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 3: 5-STEP WORKFLOW
   Enhanced with image treatments for tangible visual comprehension
───────────────────────────────────────────────────────────────────────────── */
const WORKFLOW_STEPS = [
  {
    step: 'STEP 01',
    title: 'Email Received',
    desc: 'Client drops a complex multi-part request into your primary support or sales inbox.',
    icon: 'mail',
    source: 'Gmail / Outlook',
    img: stepEmailImg,
    imgAlt: 'Client email landing in company inbox',
  },
  {
    step: 'STEP 02',
    title: 'AI Understands',
    desc: 'Deep semantic parsing extracts intent, sentiment, entity data, and priority levels.',
    icon: 'analytics',
    source: 'FlowPilot Core',
    img: stepAnalysisImg,
    imgAlt: 'Operations team performing data analysis and semantic parsing',
    isTelemetry: true,
  },
  {
    step: 'STEP 03',
    title: 'WhatsApp Alert',
    desc: 'A concise operational brief is dispatched instantly to your team\'s secure WhatsApp group.',
    icon: 'chat',
    source: 'WhatsApp API',
    img: stepMobileImg,
    imgAlt: 'Professional receiving mobile communication via WhatsApp alert',
  },
  {
    step: 'STEP 04',
    title: 'User Replies',
    desc: 'Approve suggested actions with a single click or reply with voice notes or simple text.',
    icon: 'thumb_up',
    source: 'Instant Command',
    img: stepApprovalImg,
    imgAlt: 'Executive reviewing and approving operational prompt on laptop',
  },
  {
    step: 'STEP 05',
    title: 'Response Sent',
    desc: 'Polished, context-aware correspondence and backend updates execute autonomously.',
    icon: 'done_all',
    source: 'Fully Resolved',
    img: stepSuccessImg,
    imgAlt: 'Successful execution of enterprise customer workflow',
    isSuccess: true,
  },
];

function WorkflowSection() {
  return (
    <section
      id="features"
      style={{
        position: 'relative',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        backgroundImage: `url('${showcaseWorkspaceImg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Semi-transparent overlay to ensure readability */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(253, 249, 244, 0.85)',
          zIndex: 1
        }} 
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1320px', margin: '0 auto' }}>
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
            gap: '20px',
          }}
          className="steps-grid"
        >
          {WORKFLOW_STEPS.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, title, desc, icon, source, isTelemetry, isSuccess }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '8px',
        border: `1px solid ${hovered ? C.primary : `${C.outlineVariant}35`}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'all 200ms ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(0,70,66,0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
        overflow: 'hidden',
        cursor: 'default',
        padding: '24px',
        height: '100%',
        gap: '24px',
      }}
    >
      {/* Step Badge Overlaid */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span
          style={{
            ...T.labelSm,
            fontSize: '11px',
            color: C.onSecondaryContainer,
            backgroundColor: 'rgba(254,133,44,0.15)',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '9999px',
          }}
        >
          {step}
        </span>

        {/* Telemetry Parsing Overlay for Step 02 */}
        {isTelemetry && (
          <div
            style={{
              padding: '4px 8px',
              backgroundColor: 'rgba(1, 56, 53, 0.08)',
              borderRadius: '6px',
              color: C.primary,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>analytics</span>
          </div>
        )}

        {/* Verified Execution Overlay for Step 05 */}
        {isSuccess && (
          <div
            style={{
              padding: '4px 8px',
              backgroundColor: 'rgba(1, 96, 90, 0.08)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '14px', color: C.primary }}>task_alt</span>
          </div>
        )}
      </div>

      {/* Step Text Body */}
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
        <h3 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: '12px', fontSize: '18px' }}>{title}</h3>
        <p style={{ ...T.bodySm, color: C.onSurfaceVariant, margin: 0, lineHeight: '22px' }}>{desc}</p>
      </div>

      {/* Step Footer with Channel Source */}
      <div
        style={{
          paddingTop: '16px',
          borderTop: `1px solid ${C.outlineVariant}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: C.outline,
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px', color: C.primaryContainer }}>{icon}</span>
        <span style={{ ...T.bodySm, fontSize: '11px', fontFamily: 'monospace', fontWeight: 600, color: C.onSurfaceVariant }}>{source}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 4: PRODUCT DEMONSTRATION SHOWCASE
   Multi-device preview inspired by reference composition
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
          gridTemplateColumns: '5.5fr 6.5fr',
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
          <h2 style={{ ...T.headlineLg, color: C.onSurface, margin: 0 }}>
            Integrated AI Command Center for Modern Teams
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, margin: 0 }}>
            Switch effortlessly between full Gmail threat management, live WhatsApp thread monitoring, and our visual workflow automation canvas.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
            {[
              'Automatic context merging across disparate communication channels',
              'Customizable guardrails and tone settings for every brand voice',
              'Enterprise-grade encryption protecting every message and payload',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: C.primary, marginTop: '2px', fontSize: '20px' }}>check_circle</span>
                <span style={{ ...T.bodyMd, color: C.onSurface, fontWeight: 500 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Tangible Dual-Device & Active Automations Card */}
        <div style={{ position: 'relative' }} className="showcase-card-wrapper">
          {/* Hardware & Software Display Card */}
          <div
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderRadius: '12px',
              border: `1px solid ${C.outlineVariant}35`,
              boxShadow: '0 24px 64px rgba(0,0,0,0.08)',
              overflow: 'hidden',
            }}
          >
            {/* Visual Header Window: Enterprise workstation display image */}
            <div
              style={{
                position: 'relative',
                height: '250px',
                width: '100%',
                overflow: 'hidden',
                backgroundColor: C.primary,
              }}
            >
              <img
                src={showcaseWorkspaceImg}
                alt="FlowPilot integrated command center and enterprise modern workstation"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 38%',
                  filter: 'brightness(0.95) contrast(1.05)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,32,30,0.25) 0%, rgba(0,70,66,0.2) 40%, rgba(253,249,244,0.95) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  backgroundColor: 'rgba(1,96,90,0.9)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  ...T.labelSm,
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
                <span>Multi-Channel Sync</span>
              </div>
            </div>

            {/* Active Automations Content */}
            <div style={{ padding: '24px' }}>
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '20px',
                  borderBottom: `1px solid ${C.outlineVariant}25`,
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: `${C.primaryContainer}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: '24px' }}>dashboard</span>
                  </div>
                  <div>
                    <h4 style={{ ...T.headlineSm, color: C.onSurface, margin: 0 }}>Active Automations</h4>
                    <p style={{ ...T.bodySm, color: C.outline, margin: 0 }}>Real-time telemetry</p>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Row 1 */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    backgroundColor: C.surfaceContainerLow,
                    border: `1px solid ${C.outlineVariant}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: '#25D366',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        ...T.labelMd,
                        flexShrink: 0,
                      }}
                    >
                      W
                    </div>
                    <div>
                      <div style={{ ...T.labelMd, fontWeight: 700, color: C.onSurface }}>VIP Client Lead Capture</div>
                      <div style={{ ...T.bodySm, color: C.outline }}>WhatsApp → CRM Sync → Calendar Invite</div>
                    </div>
                  </div>
                  <span
                    style={{
                      ...T.bodySm,
                      color: C.primary,
                      fontWeight: 700,
                      backgroundColor: `${C.primaryContainer}15`,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      flexShrink: 0,
                    }}
                  >
                    Active
                  </span>
                </div>

                {/* Row 2 */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    backgroundColor: C.surfaceContainerLow,
                    border: `1px solid ${C.outlineVariant}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
                        flexShrink: 0,
                      }}
                    >
                      G
                    </div>
                    <div>
                      <div style={{ ...T.labelMd, fontWeight: 700, color: C.onSurface }}>Invoice Discrepancy Resolution</div>
                      <div style={{ ...T.bodySm, color: C.outline }}>Gmail Parser → Stripe API → Slack Notify</div>
                    </div>
                  </div>
                  <span
                    style={{
                      ...T.bodySm,
                      color: C.primary,
                      fontWeight: 700,
                      backgroundColor: `${C.primaryContainer}15`,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      flexShrink: 0,
                    }}
                  >
                    Active
                  </span>
                </div>
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
   Image-led cards inspired by reference's "Our Collections" presentation
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
    img: solSupportImg,
    imgAlt: 'Professional customer support specialist with laptop in modern enterprise office',
  },
  {
    icon: 'payments',
    iconColor: C.secondary,
    title: 'Executive Sales Assistant',
    desc: 'Qualify inbound leads, schedule meetings directly into executive calendars, and draft custom proposals.',
    linkText: 'Explore Sales Module',
    linkColor: C.secondary,
    href: '/services',
    img: solSalesImg,
    imgAlt: 'Executive workspace laptop showing modern calendar and pipeline management',
  },
  {
    icon: 'account_tree',
    iconColor: C.primary,
    title: 'Operations & Logistics',
    desc: 'Coordinate supply chain communications, track vendor deliveries, and handle exception alerts in real-time.',
    linkText: 'Explore Ops Module',
    linkColor: C.primary,
    href: '/services',
    img: solOpsImg,
    imgAlt: 'Enterprise modern office operations and logistics headquarters',
  },
];

function SolutionsSection() {
  return (
    <section
      id="solutions"
      style={{
        position: 'relative',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        backgroundImage: `url('${solOpsImg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Semi-transparent overlay to ensure readability */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(253, 249, 244, 0.85)',
          zIndex: 1
        }} 
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto' }}>
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
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '12px',
        border: `1px solid ${hovered ? C.primary : `${C.outlineVariant}35`}`,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 200ms ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 40px rgba(0,70,66,0.1)' : '0 4px 16px rgba(0,0,0,0.03)',
        padding: '32px',
        gap: '24px',
      }}
    >
      {/* Category Icon Badge */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          backgroundColor: `${iconColor}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '32px', color: iconColor }}>
          {icon}
        </span>
      </div>

      {/* Card Content */}
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ ...T.headlineMd, color: C.onSurface, marginBottom: '12px' }}>{title}</h3>
          <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, marginBottom: '24px', lineHeight: '24px' }}>{desc}</p>
        </div>
        <Link
          to={href}
          style={{
            ...T.labelMd,
            color: linkColor,
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            paddingTop: '8px',
          }}
        >
          {linkText}
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 6: TESTIMONIALS
   Executive portrait presentation preserving verbatim quotes
───────────────────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: '"FlowPilot AI completely transformed our client onboarding pipeline. We went from taking 4 hours to reply to new enterprise leads to an average response time of 45 seconds."',
    initials: 'JS',
    avatarBg: C.secondaryContainer,
    avatarColor: C.onSecondaryContainer,
    avatarImg: testimonialJonathanImg,
    name: 'Jonathan Sterling',
    role: 'Chief Operating Officer, Veloce Global',
  },
  {
    quote: '"The WhatsApp integration is an absolute game-changer. I manage all critical vendor exceptions from my phone while traveling without ever opening a laptop."',
    initials: 'AM',
    avatarBg: C.primaryContainer,
    avatarColor: C.onPrimaryContainer,
    avatarImg: testimonialAriaImg,
    name: 'Aria Montgomery',
    role: 'Managing Director, Nexus Capital',
  },
];

function TestimonialsSection() {
  return (
    <section
      id="enterprise"
      style={{
        position: 'relative',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        backgroundImage: `url('${testimonialJonathanImg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Semi-transparent overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 46, 42, 0.78)',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 64px' }}>
          <h2 style={{ ...T.headlineLg, color: '#ffffff', marginBottom: '16px' }}>
            Trusted by Industry Leaders
          </h2>
          <p style={{ ...T.bodyLg, color: 'rgba(255,255,255,0.75)' }}>
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
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                padding: '36px',
                borderRadius: '12px',
                border: `1px solid rgba(255,255,255,0.6)`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
              }}
            >
              <div>
                {/* 5-Star Rating Row */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: '#f59e0b' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p style={{ ...T.bodyLg, color: C.onSurface, fontStyle: 'italic', lineHeight: '26px', margin: 0 }}>
                  {t.quote}
                </p>
              </div>

              {/* Author Row with Executive Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '12px', borderTop: `1px solid ${C.outlineVariant}30` }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `2px solid ${C.primaryContainer}`,
                    flexShrink: 0,
                    backgroundColor: t.avatarBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                  }}
                >
                  {t.avatarImg ? (
                    <img
                      src={t.avatarImg}
                      alt={t.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <span style={{ fontWeight: 700, color: t.avatarColor, ...T.labelMd }}>
                      {t.initials}
                    </span>
                  )}
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
   Preserved 100% verbatim with clean card styling
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
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section
      id="pricing"
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        maxWidth: '840px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        {/* Orange Accent Bar */}
        <div
          style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#FE852C',
            borderRadius: '2px',
            margin: '0 auto 24px',
          }}
        />
        <h2
          style={{
            ...T.headlineLg,
            color: '#004642',
            fontWeight: 700,
            marginBottom: '16px',
          }}
        >
          Frequently Asked Questions
        </h2>
        <p style={{ ...T.bodyLg, color: 'rgba(1, 96, 90, 0.75)', margin: 0 }}>
          Everything you need to know about setting up FlowPilot AI.
        </p>
      </div>

      {/* Accordion Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.q}
              style={{
                backgroundColor: C.surfaceContainerLowest,
                borderRadius: '8px',
                border: `1px solid ${isOpen ? '#FE852C' : `${C.outlineVariant}40`}`,
                boxShadow: isOpen
                  ? '0 4px 20px rgba(254,133,44,0.08)'
                  : '0 2px 8px rgba(0,0,0,0.02)',
                overflow: 'hidden',
                transition: 'border-color 200ms ease, box-shadow 200ms ease',
              }}
            >
              {/* Accordion Toggle Button */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 28px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '16px',
                }}
              >
                <h3
                  style={{
                    ...T.headlineSm,
                    fontSize: '18px',
                    fontWeight: 600,
                    color: isOpen ? '#FE852C' : '#004642',
                    margin: 0,
                    transition: 'color 200ms ease',
                    flex: 1,
                  }}
                >
                  {item.q}
                </h3>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '22px',
                    color: isOpen ? '#FE852C' : '#01605A',
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'color 200ms ease, transform 200ms ease',
                  }}
                >
                  expand_more
                </span>
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div
                  style={{
                    padding: '0 28px 24px',
                    borderTop: `1px solid rgba(254,133,44,0.15)`,
                  }}
                >
                  <p
                    style={{
                      ...T.bodyMd,
                      color: C.onSurfaceVariant,
                      margin: '20px 0 0',
                      lineHeight: '26px',
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 8: FINAL CTA
   Preserved 100% verbatim with rich enterprise styling
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
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(165,240,232,0.18) 0%, rgba(1,96,90,0) 70%)',
          pointerEvents: 'none',
        }}
      />
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
        <h2 style={{ ...T.headlineXl, color: '#ffffff', margin: 0 }}>
          YOUR BUSINESS. ON AUTOPILOT.
        </h2>
        <p style={{ ...T.bodyLg, opacity: 0.9, maxWidth: '672px', margin: 0, color: '#e8f7f5' }}>
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
            width: '100%',
          }}
          className="final-cta-btn-group"
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
              boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
              minWidth: '220px',
              textAlign: 'center',
            }}
          >
            Start 14-Day Free Trial
          </Link>
          <Link
            to="/contact"
            style={{
              backgroundColor: 'rgba(253,249,244,0.12)',
              color: '#ffffff',
              border: `1px solid rgba(255,255,255,0.25)`,
              padding: '16px 32px',
              borderRadius: '12px',
              ...T.labelMd,
              fontWeight: 500,
              textDecoration: 'none',
              minWidth: '220px',
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
   PAGE ASSEMBLY & COMPREHENSIVE RESPONSIVE STYLES
───────────────────────────────────────────────────────────────────────────── */
export function HomePage() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <style>{`
        /* Responsive Breakpoints from 320px to 1440px+ */
        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-mockup-wrapper {
            max-width: 680px;
            margin: 0 auto;
          }
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .steps-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 36px !important;
            padding-bottom: 60px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-cta-group a {
            width: 100% !important;
          }
          .hero-floating-phone {
            width: 140px !important;
            bottom: -20px !important;
            right: -10px !important;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .solutions-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .final-cta-btn-group {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .final-cta-btn-group a {
            width: 100% !important;
            min-width: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .hero-floating-phone {
            display: none !important;
          }
          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Interactive Micro-Interactions */
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(254,133,44,0.4) !important;
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
    </div>
  );
}
export default HomePage;
