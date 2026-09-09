import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Lock,
  MessageSquare,
  Mail,
  Calendar,
  Layers,
  BarChart3,
  UserCheck,
  Clock,
  Sparkles,
} from 'lucide-react';

// Local curated enterprise photography
import heroBg from '../../styles/Images/executive-office.jfif';
import svcWhatsappImg from '../../styles/Images/whatsapp-messaging-screen.jfif';
import svcEmailImg from '../../styles/Images/email-continuity.jfif';
import svcAnalyticsImg from '../../styles/Images/operations-dashboard.jpg';
import svcCalendarImg from '../../styles/Images/sales-calendar.jfif';
import svcWorkflowsImg from '../../styles/Images/conference-room.jfif';
import svcConciergeImg from '../../styles/Images/logistics-center.jfif';
import showcaseImg from '../../styles/Images/executive-office.jfif';
import statsBg from '../../styles/Images/google-workspace-provider.jfif';
import ctaBg from '../../styles/Images/conference-room.jfif';
import avatarJonathan from '../../styles/Images/testimonial-director.jpg';
import avatarAria from '../../styles/Images/digital-agency-team.jfif';

/* ─────────── STRICT BRAND COLOR SYSTEM ─────────── */
const C = {
  primary: '#004642',             // Primary Dark Teal
  primaryLight: '#01605A',        // Secondary Mid Teal
  accent: '#FE852C',              // Brand Orange Accent
  accentLight: '#FFD0A8',         // Light Peach
  surfaceCream: '#FDF9F4',        // Background Cream
  surfaceWhite: '#FFFFFF',        // White
  secondaryText: 'rgba(0, 70, 66, 0.76)',
  borderLight: '#EAEAEA',
  cardRadius: '8px',              // Strict 8px radius
};

/* ─────────────────────────────────────────────────────────────────────────────
   SERVICES DATA (PRESERVING ALL EXISTING TITLES, COPY, AND ROUTING)
───────────────────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'whatsapp-agent',
    number: '01',
    category: 'Customer Support',
    title: 'WhatsApp AI Agent',
    description:
      'Immersive conversational operations preview with real-time AI summaries and instant action triggers. Handle high-volume client engagement natively through secure messaging protocols.',
    image: svcWhatsappImg,
    route: '/whatsapp-ai-agent',
    ctaText: 'Explore WhatsApp Agent',
    features: [
      'Sub-second natural language response processing',
      'Automated CRM record creation and lead scoring',
      'Secure end-to-end encryption for executive comms',
    ],
  },
  {
    id: 'email-automation',
    number: '02',
    category: 'Automation',
    title: 'Email Automation & Triage',
    description:
      'Split-screen zero-inbox triage interface showing incoming executive correspondence instantly transformed into context-aware, professionally verified responses.',
    image: svcEmailImg,
    route: '/email-automation',
    ctaText: 'Explore Email Automation',
    features: [
      'Context-aware drafting matching executive tone',
      'Automatic attachment verification & parsing',
      'One-click human-in-the-loop override controls',
    ],
  },
  {
    id: 'email-intelligence',
    number: '03',
    category: 'Analytics',
    title: 'Weekly Email Intelligence',
    description:
      'Executive analytics and trend visualization showcasing time-recovery metrics, sentiment trajectories, and prioritized strategic digests delivered every Monday at 6:00 AM.',
    image: svcAnalyticsImg,
    route: '/contact',
    ctaText: 'Explore Analytics',
    features: [
      'Hours recovered tracking and time-audit charts',
      'Stakeholder sentiment index across threads',
      'Automated weekly executive digest PDF exports',
    ],
  },
  {
    id: 'calendar-automation',
    number: '04',
    category: 'Sales & Scheduling',
    title: 'Calendar Automation & Buffer Detection',
    description:
      'Interactive calendar week view highlighting intelligent meeting scheduling, automatic buffer zone protection, and contextual conflict resolution.',
    image: svcCalendarImg,
    route: '/calendar-automation',
    ctaText: 'Explore Calendar Automation',
    features: [
      'Dynamic focus-time block preservation',
      'Smart rescheduling based on priority matrix',
      'Cross-timezone alignment algorithms',
    ],
  },
  {
    id: 'custom-workflows',
    number: '05',
    category: 'Operations',
    title: 'Custom AI Workflows',
    description:
      'Visual node-based automation builder preview. Seamlessly chain Triggers, AI Analysis, Conditional Routing, and Enterprise Actions without writing a single line of code.',
    image: svcWorkflowsImg,
    route: '/custom-ai-workflows',
    ctaText: 'Explore Custom Workflows',
    features: [
      'Visual multi-step conditional route builder',
      'Bi-directional CRM & webhook synchronization',
      'Deterministic fallback logic and manual gates',
    ],
  },
  {
    id: 'executive-concierge',
    number: '06',
    category: 'AI Assistant',
    title: 'Executive Operations Concierge',
    description:
      'Dedicated operational assistant bridging communications between mobile chat, corporate inboxes, and internal project suites with guaranteed human-in-the-loop oversight.',
    image: svcConciergeImg,
    route: '/book-a-demo',
    ctaText: 'Schedule Architecture Review',
    features: [
      'Cross-platform operational bridging',
      'Continuous executive tone fine-tuning',
      '24/7 dedicated solutions engineering support',
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────────────────────────────────────────── */
function ServicesHero() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: `url("${heroBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '110px 24px 100px',
        overflow: 'hidden',
        borderBottom: `1px solid ${C.borderLight}`,
      }}
    >
      {/* Dark Teal Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 70, 66, 0.65)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '850px',
          margin: '0 auto',
        }}
      >
        {/* Glass panel */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: C.cardRadius,
            padding: 'clamp(28px, 4vw, 48px)',
            boxShadow: '0 16px 36px rgba(0, 70, 66, 0.18)',
            border: `1px solid rgba(255, 255, 255, 0.8)`,
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: C.cardRadius,
              backgroundColor: 'rgba(1, 96, 90, 0.1)',
              border: `1px solid rgba(1, 96, 90, 0.25)`,
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: C.accent,
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: C.primary,
                textTransform: 'uppercase',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Enterprise Services Overview
            </span>
          </div>

          {/* Accent Line */}
          <div
            style={{
              width: '50px',
              height: '4px',
              backgroundColor: C.accent,
              margin: '0 auto 20px auto',
              borderRadius: '2px',
            }}
          />

          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              color: C.primary,
              margin: '0 0 18px 0',
            }}
          >
            Autonomous Capabilities Engineered for Enterprise Scale
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              lineHeight: 1.6,
              color: C.secondaryText,
              maxWidth: '680px',
              margin: '0 auto 36px auto',
            }}
          >
            Transform unstructured operational workflows into autonomous execution loops. Precision intelligence designed for executive leadership demanding absolute reliability.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <a
              href="#services-grid"
              style={{
                backgroundColor: C.primaryLight,
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: C.cardRadius,
                fontWeight: 700,
                fontSize: '15px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(1, 96, 90, 0.25)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.primary;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.primaryLight;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Explore Capabilities <ArrowRight size={16} />
            </a>

            <Link
              to="/book-a-demo"
              style={{
                backgroundColor: '#FFFFFF',
                border: `1.5px solid ${C.primaryLight}`,
                color: C.primary,
                padding: '14px 28px',
                borderRadius: C.cardRadius,
                fontWeight: 700,
                fontSize: '15px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.surfaceCream;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Schedule Architecture Review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 3 — VISUAL FEATURE STRIP ("WHAT YOU GET")
───────────────────────────────────────────────────────────────────────────── */
function FeatureStrip() {
  const features = [
    {
      icon: Zap,
      title: 'Sub-Second Autonomous Triage',
      text: 'Incoming client emails and RFP requests are classified, parsed, and drafted in under 1.5 seconds.',
    },
    {
      icon: ShieldCheck,
      title: '100% Human Approval Gate',
      text: 'No critical external communication or document dispatches without explicit WhatsApp or dashboard sign-off.',
    },
    {
      icon: Lock,
      title: 'Enterprise SOC2 & OAuth Security',
      text: 'Direct Google Workspace and Microsoft 365 OAuth with TLS 1.3 encryption and zero public model training.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: C.surfaceCream,
        padding: '54px 24px',
        borderBottom: `1px solid ${C.borderLight}`,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: C.cardRadius,
                    backgroundColor: 'rgba(1, 96, 90, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={C.primaryLight} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '17px',
                      fontWeight: 700,
                      color: C.primary,
                      margin: '0 0 6px 0',
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      lineHeight: 1.55,
                      color: C.secondaryText,
                      margin: 0,
                    }}
                  >
                    {f.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 2 — SERVICES GRID
───────────────────────────────────────────────────────────────────────────── */
function ServicesGrid() {
  return (
    <section
      id="services-grid"
      style={{
        padding: '90px 24px 100px',
        backgroundColor: C.surfaceWhite,
        borderBottom: `1px solid ${C.borderLight}`,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <div
            style={{
              width: '40px',
              height: '3px',
              backgroundColor: C.accent,
              margin: '0 auto 12px auto',
              borderRadius: '2px',
            }}
          />
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 38px)',
              fontWeight: 800,
              color: C.primary,
              letterSpacing: '-0.02em',
              margin: '0 0 12px 0',
            }}
          >
            Specialized Enterprise Capabilities
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              lineHeight: 1.6,
              color: C.secondaryText,
              margin: 0,
            }}
          >
            Deploy modular, human-in-the-loop autonomous services purpose-built for high-volume corporate operations.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))',
            gap: '32px',
          }}
        >
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              style={{
                backgroundColor: C.surfaceWhite,
                borderRadius: C.cardRadius,
                border: `1px solid ${C.borderLight}`,
                borderTop: `4px solid ${C.primaryLight}`,
                overflow: 'hidden',
                boxShadow: '0 10px 25px -5px rgba(0, 70, 66, 0.08), 0 8px 10px -6px rgba(0, 70, 66, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 70, 66, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 70, 66, 0.08), 0 8px 10px -6px rgba(0, 70, 66, 0.04)';
              }}
            >
              {/* Image banner: 220px, no rounded corners */}
              <div style={{ height: '220px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(4px)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: C.primary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {svc.category}
                </div>
              </div>

              {/* Body Content */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: C.accent,
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}
                >
                  SERVICE {svc.number}
                </span>

                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '21px',
                    fontWeight: 700,
                    color: C.primary,
                    margin: '0 0 10px 0',
                  }}
                >
                  {svc.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: C.secondaryText,
                    margin: '0 0 20px 0',
                    flex: 1,
                  }}
                >
                  {svc.description}
                </p>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {svc.features.map((f, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: C.primary,
                      }}
                    >
                      <CheckCircle2 size={16} color={C.primaryLight} style={{ flexShrink: 0 }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  to={svc.route}
                  style={{
                    backgroundColor: C.surfaceCream,
                    color: C.primary,
                    border: `1.5px solid ${C.primaryLight}`,
                    padding: '12px 20px',
                    borderRadius: C.cardRadius,
                    fontWeight: 700,
                    fontSize: '14px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = C.primaryLight;
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = C.surfaceCream;
                    e.currentTarget.style.color = C.primary;
                  }}
                >
                  {svc.ctaText} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 4 — LARGE SHOWCASE (55% IMAGE, 45% CONTENT)
───────────────────────────────────────────────────────────────────────────── */
function LargeShowcase() {
  return (
    <section
      style={{
        padding: '95px 24px',
        backgroundColor: C.surfaceCream,
        borderBottom: `1px solid ${C.borderLight}`,
        overflowX: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          {/* Image (55% desktop width) */}
          <div
            style={{
              flex: '1 1 520px',
              maxWidth: '650px',
              borderRadius: C.cardRadius,
              overflow: 'hidden',
              boxShadow: '0 16px 36px rgba(0, 70, 66, 0.12)',
              border: `1px solid ${C.borderLight}`,
              position: 'relative',
            }}
          >
            <img
              src={showcaseImg}
              alt="Enterprise Operations Center"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Overlay badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '12px 18px',
                borderRadius: '6px',
                border: `1px solid ${C.borderLight}`,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '13px',
                fontWeight: 700,
                color: C.primary,
              }}
            >
              <ShieldCheck size={18} color={C.accent} />
              Enterprise-Grade Process Governance
            </div>
          </div>

          {/* Content (45% desktop width) */}
          <div style={{ flex: '1 1 400px' }}>
            <div
              style={{
                width: '40px',
                height: '3px',
                backgroundColor: C.accent,
                marginBottom: '14px',
                borderRadius: '2px',
              }}
            />
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontWeight: 800,
                color: C.primary,
                lineHeight: 1.25,
                margin: '0 0 16px 0',
              }}
            >
              Engineered for Leadership Requiring Absolute Operational Certainty
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                lineHeight: 1.7,
                color: C.secondaryText,
                margin: '0 0 24px 0',
              }}
            >
              FlowPilot eliminates administrative communication bottlenecks without ever compromising your authority. When high-value vendor requests or critical inquiries emerge, our system prepares an actionable brief straight to your verified mobile thread.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                'Under 10-minute setup with native Google Workspace & Microsoft 365 OAuth',
                'Encrypted WhatsApp approval loops — zero new applications to master',
                'Preserves your domain authority, email sender score, and SPF/DKIM records',
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: C.primary,
                  }}
                >
                  <CheckCircle2 size={18} color={C.accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/book-a-demo"
              style={{
                backgroundColor: C.primary,
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: C.cardRadius,
                fontWeight: 700,
                fontSize: '15px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0, 70, 66, 0.25)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.primaryLight;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.primary;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Book Enterprise Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 5 — WHY FLOWPILOT (BACKGROUND IMAGE, OVERLAY, 4 STATS CARDS)
───────────────────────────────────────────────────────────────────────────── */
function WhyFlowPilot() {
  const stats = [
    { value: '99.4%', label: 'Automation Accuracy', desc: 'Deterministic intent recognition & confidence scoring' },
    { value: '24/7', label: 'Availability', desc: 'Continuous operations monitoring & queue triage' },
    { value: '<1.5s', label: 'Response Time', desc: 'Real-time event processing and trigger activation' },
    { value: '100%', label: 'Human Approval Control', desc: 'High-stakes dispatches require executive authorization' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: `url("${statsBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '95px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 70, 66, 0.88)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}>
          <div
            style={{
              width: '40px',
              height: '3px',
              backgroundColor: C.accent,
              margin: '0 auto 12px auto',
              borderRadius: '2px',
            }}
          />
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 38px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              margin: '0 0 12px 0',
            }}
          >
            Why Leading Enterprises Choose FlowPilot
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              margin: 0,
            }}
          >
            Proven operational metrics measured across Fortune 500 leadership deployments.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {stats.map((s, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: C.surfaceWhite,
                borderRadius: C.cardRadius,
                padding: '32px 24px',
                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.18)',
                textAlign: 'center',
                borderTop: `4px solid ${C.accent}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(36px, 4vw, 48px)',
                  fontWeight: 800,
                  color: C.primary,
                  lineHeight: 1.1,
                  marginBottom: '8px',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 700,
                  color: C.primaryLight,
                  marginBottom: '8px',
                }}
              >
                {s.label}
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: C.secondaryText,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SECTION 6 — TESTIMONIALS (REAL PHOTOS 72X72 CIRCLE AVATARS)
───────────────────────────────────────────────────────────────────────────── */
function ServicesTestimonials() {
  const testimonials = [
    {
      quote:
        '"FlowPilot reduced our executive response latency by 85%. Our partners receive immediate, context-accurate updates while our leadership team stays focused on strategic acquisitions."',
      name: 'Jonathan Sterling',
      role: 'Chief Operating Officer, Veloce Global',
      avatar: avatarJonathan,
    },
    {
      quote:
        '"The WhatsApp integration is an absolute game-changer. I manage all critical vendor exceptions from my phone while traveling without ever opening a laptop."',
      name: 'Aria Montgomery',
      role: 'Managing Director, Nexus Capital',
      avatar: avatarAria,
    },
  ];

  return (
    <section
      style={{
        padding: '95px 24px',
        backgroundColor: C.surfaceCream,
        borderBottom: `1px solid ${C.borderLight}`,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 54px auto' }}>
          <div
            style={{
              width: '40px',
              height: '3px',
              backgroundColor: C.accent,
              margin: '0 auto 12px auto',
              borderRadius: '2px',
            }}
          />
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(26px, 3vw, 36px)',
              fontWeight: 800,
              color: C.primary,
              margin: '0 0 10px 0',
            }}
          >
            Endorsed by Operations Leadership
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              color: C.secondaryText,
              margin: 0,
            }}
          >
            See how enterprise leaders eliminate communication latency with FlowPilot.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))',
            gap: '32px',
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: C.surfaceWhite,
                borderRadius: C.cardRadius,
                padding: '36px 32px',
                border: `1px solid ${C.borderLight}`,
                boxShadow: '0 6px 20px rgba(0, 70, 66, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: C.primary,
                  fontStyle: 'italic',
                  margin: '0 0 24px 0',
                }}
              >
                {t.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* 72x72 Circle Avatar */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0,
                    border: `2px solid ${C.accent}`,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '17px',
                      fontWeight: 700,
                      color: C.primary,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      color: C.secondaryText,
                      marginTop: '2px',
                    }}
                  >
                    {t.role}
                  </div>
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
   SECTION 7 — FINAL CTA
───────────────────────────────────────────────────────────────────────────── */
function ServicesCTA() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: `url("${ctaBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 24px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0, 70, 66, 0.94) 0%, rgba(0, 46, 43, 0.97) 100%)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '820px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: C.cardRadius,
            backgroundColor: 'rgba(254, 133, 44, 0.15)',
            border: '1px solid rgba(254, 133, 44, 0.3)',
            color: C.accent,
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          <Sparkles size={14} color={C.accent} />
          Enterprise Deployment
        </div>

        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            lineHeight: 1.22,
            color: '#FFFFFF',
            margin: '0 0 16px 0',
          }}
        >
          Ready to Engineer Autonomous Operations for Your Enterprise?
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '620px',
            margin: '0 auto 36px auto',
          }}
        >
          Join Fortune 500 leadership teams leveraging FlowPilot AI to eliminate administrative overhead and accelerate strategic execution.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.accent,
              color: '#FFFFFF',
              padding: '15px 32px',
              borderRadius: C.cardRadius,
              fontWeight: 700,
              fontSize: '15px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(254, 133, 44, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e57220';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = C.accent;
              e.currentTarget.style.transform = 'none';
            }}
          >
            Start Free Enterprise Trial <ArrowRight size={16} />
          </Link>

          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: 'transparent',
              border: '1.5px solid rgba(255, 255, 255, 0.5)',
              color: '#FFFFFF',
              padding: '15px 32px',
              borderRadius: C.cardRadius,
              fontWeight: 700,
              fontSize: '15px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FFFFFF';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Schedule Architecture Review
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────────────────────────────────────── */
export function ServicesPage() {
  return (
    <div style={{ backgroundColor: C.surfaceWhite, color: C.primary, minHeight: '100vh', overflowX: 'hidden' }}>
      <ServicesHero />
      <FeatureStrip />
      <ServicesGrid />
      <LargeShowcase />
      <WhyFlowPilot />
      <ServicesTestimonials />
      <ServicesCTA />
    </div>
  );
}

export default ServicesPage;
