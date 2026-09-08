import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  CheckCircle2,
  Mail,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Database,
  Layers,
} from 'lucide-react';

// Local curated enterprise photography from src/styles/Images
import heroWorkspaceBg from '../../styles/Images/executive-office.jfif';
import problemOpsImg from '../../styles/Images/email-continuity.jfif';
import supportImg from '../../styles/Images/digital-agency-team.jfif';
import salesExecutiveImg from '../../styles/Images/testimonial-director.jpg';
import operationsLogisticsImg from '../../styles/Images/logistics-center.jfif';
import ctaBg from '../../styles/Images/conference-room.jfif';

/* ── COLOR SYSTEM & TOKENS ── */
const C = {
  background: '#FDF9F4',
  surface: '#FDF9F4',
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: '#F7F3EE',
  surfaceContainer: '#F1EDE8',
  surfaceContainerHigh: '#EBE8E3',
  onSurface: '#1C1C19',
  onSurfaceVariant: '#3F4947',
  outline: '#6F7977',
  outlineVariant: '#BEC9C6',
  primary: '#004642',             // Primary Dark Teal
  primaryContainer: '#01605A',    // Primary Teal
  onPrimary: '#FFFFFF',
  onPrimaryContainer: '#8ED8D0',
  primaryFixed: '#A5F0E8',
  primaryFixedDim: '#8AD4CC',
  onPrimaryFixed: '#00201E',
  secondary: '#994700',
  secondaryContainer: '#FE852C',   // Brand Orange
  onSecondary: '#FFFFFF',
  onSecondaryContainer: '#632C00',
  secondaryFixed: '#FFDBC8',
  tertiary: '#55371A',
  tertiaryFixed: '#FFDCC0',
  borderLight: '#EAEAEA',
  cardRadius: '8px',              // Strict 8px border radius
};

const T = {
  headlineXl: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.16, letterSpacing: '-0.02em', fontWeight: 800 },
  headlineLg: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(26px, 3.5vw, 36px)', lineHeight: 1.22, letterSpacing: '-0.01em', fontWeight: 700 },
  headlineMd: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(20px, 2.5vw, 24px)', lineHeight: 1.3, fontWeight: 700 },
  headlineSm: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', lineHeight: '24px', fontWeight: 600 },
  labelMd:    { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 600 },
  labelSm:    { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '12px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 },
  bodyLg:     { fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: '26px', fontWeight: 400 },
  bodyMd:     { fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: '22px', fontWeight: 400 },
  bodySm:     { fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: '18px', fontWeight: 400 },
};

/* ── HERO ── */
function SolutionsHero() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: `url("${heroWorkspaceBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '80px',
        paddingBottom: '96px',
        overflow: 'hidden',
        borderBottom: `1px solid ${C.borderLight}`,
      }}
    >
      {/* Subtle Light Frosted Overlay (keeping existing design recognizable) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(253, 249, 244, 0.90) 0%, rgba(253, 249, 244, 0.96) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 1,
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 64px' }}>
          {/* Eyebrow Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: C.cardRadius,
              backgroundColor: C.surfaceContainerLowest,
              border: `1px solid ${C.outlineVariant}66`,
              marginBottom: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: C.secondaryContainer,
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }}
            />
            <span style={{ ...T.labelSm, color: C.primary, textTransform: 'uppercase' }}>
              SOLUTIONS FOR OPERATIONAL VELOCITY
            </span>
          </div>

          {/* Main Title (Existing wording) */}
          <h1 style={{ ...T.headlineXl, color: C.primary, marginBottom: '20px' }}>
            YOUR BUSINESS HAS <span style={{ color: C.secondaryContainer }}>BETTER THINGS</span> TO DO.
          </h1>

          {/* Subtitle (Existing wording) */}
          <p
            style={{
              ...T.bodyLg,
              color: C.onSurfaceVariant,
              marginBottom: '36px',
              maxWidth: '640px',
              margin: '0 auto 36px',
            }}
          >
            FlowPilot automates the repetitive work behind your business so your team can focus on the work that actually moves it forward.
          </p>

          {/* Actions (Existing wording & routes) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <Link
              to="/book-a-demo"
              style={{
                padding: '14px 28px',
                borderRadius: C.cardRadius,
                backgroundColor: C.secondaryContainer,
                color: C.onSecondary,
                ...T.labelMd,
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(254, 133, 44, 0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E57220';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.secondaryContainer;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Plan a Demo
              <Calendar size={18} />
            </Link>

            <a
              href="#pipeline"
              style={{
                padding: '14px 28px',
                borderRadius: C.cardRadius,
                backgroundColor: C.surfaceContainerLowest,
                border: `1.5px solid ${C.primaryContainer}`,
                color: C.primary,
                ...T.labelMd,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.surfaceContainer;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.surfaceContainerLowest;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Explore Automation
            </a>
          </div>
        </div>

        {/* Topology Mockup (Existing layout preserved, restrained 12px max radius) */}
        <div
          id="pipeline"
          style={{
            maxWidth: '1024px',
            margin: '0 auto',
            backgroundColor: C.surfaceContainerLowest,
            padding: '32px',
            borderRadius: '12px',
            border: `1px solid ${C.borderLight}`,
            boxShadow: '0 8px 24px rgba(0, 70, 66, 0.06)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '24px',
              borderBottom: `1px solid ${C.borderLight}`,
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: C.primaryContainer }} />
              <span style={{ ...T.bodySm, color: C.outline, fontFamily: 'monospace' }}>
                orchestration.flowpilot.internal // active-stream: 12ms latency
              </span>
            </div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                ...T.labelSm,
                color: C.primary,
                fontWeight: 600,
                backgroundColor: `${C.primaryFixed}4D`,
                padding: '4px 12px',
                borderRadius: C.cardRadius,
              }}
            >
              <CheckCircle2 size={14} color={C.primary} />
              All Nodes Operational
            </span>
          </div>

          {/* 5-col topology */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr auto 1fr',
              gap: '16px',
              alignItems: 'center',
            }}
            className="topology-grid"
          >
            {/* Left inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: Mail, label: 'Gmail Inbound', title: 'Nova Studio #4092', sub: 'Scope Revision Inquiry' },
                { icon: MessageSquare, label: 'WhatsApp VIP', title: '+1 (415) 890-2100', sub: 'Urgent signature query' },
              ].map((n) => {
                const Icon = n.icon;
                return (
                  <div
                    key={n.label}
                    style={{
                      padding: '16px',
                      borderRadius: C.cardRadius,
                      backgroundColor: C.surfaceContainerLow,
                      border: `1px solid ${C.borderLight}`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: C.primary, ...T.bodySm, fontWeight: 600 }}>
                      <Icon size={16} color={C.primary} />
                      {n.label}
                    </div>
                    <div style={{ ...T.bodySm, color: C.onSurface, fontWeight: 600 }}>{n.title}</div>
                    <div style={{ ...T.labelSm, color: C.onSurfaceVariant }}>{n.sub}</div>
                  </div>
                );
              })}
            </div>

            {/* Connector L */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', color: C.secondaryContainer }}>
              {[0, 1].map((i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ height: '2px', width: '28px', backgroundColor: `${C.secondaryContainer}66` }} />
                  <ArrowRight size={18} color={C.secondaryContainer} />
                </div>
              ))}
            </div>

            {/* Core Hub (Replaced neurology icon with enterprise Layers hub) */}
            <div
              style={{
                backgroundColor: C.surfaceContainer,
                padding: '24px',
                borderRadius: C.cardRadius,
                border: `1px solid rgba(1, 96, 90, 0.25)`,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 70, 66, 0.05)',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  margin: '0 auto 14px',
                  borderRadius: C.cardRadius,
                  backgroundColor: C.primaryContainer,
                  color: C.onPrimary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0, 70, 66, 0.2)',
                }}
              >
                <Layers size={24} color="#FFFFFF" />
              </div>
              <div style={{ ...T.labelMd, fontWeight: 700, color: C.primary }}>FlowPilot Core</div>
              <div style={{ ...T.bodySm, color: C.primaryContainer, fontWeight: 600, marginTop: '2px' }}>Semantic Triage</div>
              <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: `1px solid ${C.borderLight}`, ...T.labelSm, color: C.secondaryText }}>
                99.8% precision score
              </div>
            </div>

            {/* Connector R */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', color: C.secondaryContainer }}>
              {[0, 1].map((i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ArrowRight size={18} color={C.secondaryContainer} />
                  <span style={{ height: '2px', width: '28px', backgroundColor: `${C.secondaryContainer}66` }} />
                </div>
              ))}
            </div>

            {/* Right outputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: Database, label: 'HubSpot / CRM', title: 'Stage: Deal Active', sub: 'Values synced (100%)' },
                { icon: Calendar, label: 'Google Calendar', title: 'Slot Booked: 14:30', sub: 'Auto-conflict resolved' },
              ].map((n) => {
                const Icon = n.icon;
                return (
                  <div
                    key={n.label}
                    style={{
                      padding: '16px',
                      borderRadius: C.cardRadius,
                      backgroundColor: C.surfaceContainerLow,
                      border: `1px solid ${C.borderLight}`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: C.primary, ...T.bodySm, fontWeight: 600 }}>
                      <Icon size={16} color={C.primary} />
                      {n.label}
                    </div>
                    <div style={{ ...T.bodySm, color: C.onSurface, fontWeight: 600 }}>{n.title}</div>
                    <div style={{ ...T.labelSm, color: C.onSurfaceVariant }}>{n.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROBLEM ── */
function ProblemSection() {
  const pains = [
    { icon: Mail, title: 'Email Overload', desc: 'Hours per day spent triaging, categorizing, and manually responding to identical incoming requests.' },
    { icon: Clock, title: 'Scheduling Chaos', desc: 'Back-and-forth communications consuming executive bandwidth before any meeting ever happens.' },
    { icon: Database, title: 'Disconnected Tools', desc: 'Data silos between your CRM, calendar, inbox, and communication platforms creating manual bridges.' },
    { icon: Zap, title: 'Delayed Decisions', desc: 'Approvals and escalations blocked by slow human relay chains that AI can resolve in seconds.' },
  ];

  return (
    <section style={{ padding: '96px 32px', backgroundColor: C.surface, borderBottom: `1px solid ${C.borderLight}` }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '48px', alignItems: 'center' }} className="problem-grid">
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: C.cardRadius,
                backgroundColor: C.surfaceContainer,
                border: `1px solid ${C.outlineVariant}66`,
                marginBottom: '16px',
                ...T.labelSm,
                color: C.primary,
                fontWeight: 700,
              }}
            >
              THE PROBLEM
            </div>

            <h2 style={{ ...T.headlineLg, color: C.primary, marginBottom: '16px' }}>
              Repetitive Operations Are Costing You Strategic Time
            </h2>

            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginBottom: '24px', lineHeight: '1.75' }}>
              The average executive wastes 2.6 hours daily on routine communications that could be fully automated. FlowPilot eliminates that waste entirely.
            </p>

            <div
              style={{
                padding: '18px 20px',
                backgroundColor: C.surfaceContainerLowest,
                borderRadius: C.cardRadius,
                border: `1px solid ${C.borderLight}`,
                borderLeft: `4px solid ${C.secondaryContainer}`,
                boxShadow: '0 2px 8px rgba(0, 70, 66, 0.04)',
                ...T.bodyMd,
                color: C.primary,
                fontWeight: 600,
              }}
            >
              "We recovered 18+ hours per week per team lead within the first month." — Enterprise Client
            </div>
          </div>

          {/* Pain cards with photographic visual enhancement */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="pains-grid">
            {pains.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  style={{
                    padding: '24px',
                    borderRadius: C.cardRadius,
                    backgroundColor: C.surfaceContainerLowest,
                    border: `1px solid ${C.borderLight}`,
                    boxShadow: '0 2px 8px rgba(0, 70, 66, 0.03)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 70, 66, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 70, 66, 0.03)';
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: C.cardRadius,
                      backgroundColor: 'rgba(254, 133, 44, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                    }}
                  >
                    <Icon size={22} color={C.secondaryContainer} />
                  </div>
                  <h4 style={{ ...T.headlineSm, color: C.primary, marginBottom: '8px' }}>{p.title}</h4>
                  <p style={{ ...T.bodySm, color: C.onSurfaceVariant, margin: 0 }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── USE CASES (INTEGRATING LARGE VISUAL IMAGES FOR EACH SOLUTION) ── */
const USE_CASES = [
  {
    segment: 'Growing SMEs',
    badge: 'Scale Operations',
    badgeBg: `${C.primaryFixed}4D`,
    badgeColor: C.primary,
    heading: 'Automate Customer Operations Without Hiring',
    desc: 'Handle the volume of a 10-person team with a 2-person operation. FlowPilot manages inbound inquiries, qualifies leads, and keeps your CRM current 24/7.',
    features: [
      'Automated lead qualification and routing',
      'Customer inquiry triage and response',
      'Real-time CRM and pipeline synchronization',
    ],
    image: supportImg,
    stat: '85%',
    statLabel: 'Average reduction in manual communication overhead',
    tag: 'Customer Support Copilot',
  },
  {
    segment: 'Consultants & Agencies',
    badge: 'Client Excellence',
    badgeBg: `${C.secondaryFixed}66`,
    badgeColor: C.secondary,
    heading: 'Deliver Premium Client Experience at Scale',
    desc: 'Respond to every client within minutes not hours. Automate project briefings, meeting prep, and follow-ups so you focus on strategy and delivery.',
    features: [
      'Sub-60 second client response guarantee',
      'Automated meeting prep and agenda generation',
      'Intelligent follow-up and deadline reminders',
    ],
    image: salesExecutiveImg,
    stat: 'Sub-60s',
    statLabel: 'Guaranteed executive inquiry response time',
    tag: 'Executive Sales Assistant',
  },
  {
    segment: 'Solopreneurs',
    badge: 'Personal Efficiency',
    badgeBg: `${C.tertiaryFixed}66`,
    badgeColor: C.tertiary,
    heading: 'Operate Like a Team of One With AI Leverage',
    desc: 'Never miss a lead. Never let a client wait. FlowPilot gives you the operational bandwidth of a full business development team in your pocket.',
    features: [
      '24/7 automated inquiry handling',
      'Smart scheduling and calendar protection',
      'Personalized AI responses matching your voice',
    ],
    image: operationsLogisticsImg,
    stat: '24/7',
    statLabel: 'Autonomous operations and client triage coverage',
    tag: 'Operations & Logistics',
  },
];

function UseCasesSection() {
  return (
    <section style={{ padding: '96px 32px', backgroundColor: C.surfaceCream }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 64px' }}>
          <div
            style={{
              width: '40px',
              height: '3px',
              backgroundColor: C.secondaryContainer,
              margin: '0 auto 14px auto',
              borderRadius: '2px',
            }}
          />
          <h2 style={{ ...T.headlineLg, color: C.primary, marginBottom: '16px' }}>
            Built For Every Growth Stage
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
            Whether you're a solo consultant or a scaling enterprise, FlowPilot adapts to your operational reality.
          </p>
        </div>

        {/* Use Cases Cards with Dominant Visual Images (IMAGE → TITLE → DESCRIPTION → CTA) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {USE_CASES.map((uc, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={uc.segment}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isEven ? '7fr 5fr' : '5fr 7fr',
                  gap: '40px',
                  alignItems: 'center',
                  backgroundColor: C.surfaceContainerLowest,
                  border: `1px solid ${C.borderLight}`,
                  borderRadius: C.cardRadius,
                  padding: ' clamp(24px, 3.5vw, 44px)',
                  boxShadow: '0 8px 24px rgba(0, 70, 66, 0.05)',
                  transition: 'box-shadow 0.25s ease',
                }}
                className="usecase-grid"
              >
                {/* Content Side */}
                <div style={{ order: isEven ? 0 : 1 }}>
                  {/* Badge & Segment */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: C.cardRadius,
                        backgroundColor: uc.badgeBg,
                        color: uc.badgeColor,
                        ...T.labelSm,
                        fontWeight: 700,
                      }}
                    >
                      {uc.badge}
                    </span>
                    <span
                      style={{
                        ...T.labelSm,
                        color: C.secondaryContainer,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontWeight: 700,
                      }}
                    >
                      {uc.segment}
                    </span>
                  </div>

                  <h3 style={{ ...T.headlineMd, color: C.primary, marginBottom: '14px' }}>
                    {uc.heading}
                  </h3>

                  <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginBottom: '22px', lineHeight: '1.7' }}>
                    {uc.desc}
                  </p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', padding: 0, listStyle: 'none' }}>
                    {uc.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', ...T.bodyMd, color: C.onSurface }}>
                        <CheckCircle2 size={18} color={C.primaryContainer} style={{ flexShrink: 0 }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Existing CTA */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <Link
                      to="/book-a-demo"
                      style={{
                        backgroundColor: C.primary,
                        color: '#FFFFFF',
                        padding: '12px 24px',
                        borderRadius: C.cardRadius,
                        ...T.labelMd,
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 2px 8px rgba(0, 70, 66, 0.15)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = C.primaryContainer;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = C.primary;
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Plan a Demo <ArrowRight size={15} />
                    </Link>

                    <Link
                      to="/pricing"
                      style={{
                        color: C.primary,
                        ...T.labelMd,
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      See Pricing
                    </Link>
                  </div>
                </div>

                {/* Dominant Image Side (Visual image area 240px–300px height, 8px radius) */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: C.cardRadius,
                      overflow: 'hidden',
                      height: '280px',
                      boxShadow: '0 8px 24px rgba(0, 70, 66, 0.08)',
                      border: `1px solid ${C.borderLight}`,
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.transform = 'scale(1.03)';
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.transform = 'scale(1)';
                    }}
                  >
                    <img
                      src={uc.image}
                      alt={uc.heading}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                    />

                    {/* Gradient overlay for readability */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0, 70, 66, 0.05) 0%, rgba(0, 70, 66, 0.75) 100%)',
                      }}
                    />

                    {/* Integrated Stat Card Overlay on Image */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '16px',
                        right: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(6px)',
                        padding: '14px 18px',
                        borderRadius: C.cardRadius,
                        border: `1px solid ${C.borderLight}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                      }}
                    >
                      <div>
                        <div style={{ ...T.headlineSm, color: C.primary, fontWeight: 800, lineHeight: 1.1 }}>
                          {uc.stat}
                        </div>
                        <div style={{ ...T.bodySm, color: C.onSurfaceVariant, fontSize: '12px', marginTop: '2px' }}>
                          {uc.statLabel}
                        </div>
                      </div>
                      <span
                        style={{
                          padding: '4px 10px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(254, 133, 44, 0.12)',
                          color: C.secondaryContainer,
                          fontSize: '11px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                        }}
                      >
                        {uc.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── CTA (WITH SUBTLE CONFERENCE ROOM PHOTOGRAPHY OVERLAY) ── */
function SolutionsCTA() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: `url("${ctaBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '96px 32px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dark Overlay (High contrast, keeping existing text exactly) */}
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
          maxWidth: '768px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h2 style={{ ...T.headlineLg, color: '#FFFFFF', margin: 0 }}>
          Start Automating Your Operations Today
        </h2>

        <p style={{ ...T.bodyLg, color: 'rgba(255, 255, 255, 0.88)', maxWidth: '560px', margin: 0 }}>
          Join the growing network of businesses running leaner, faster, and smarter with FlowPilot AI.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '12px' }}>
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.secondaryContainer,
              color: '#FFFFFF',
              padding: '15px 32px',
              borderRadius: C.cardRadius,
              ...T.labelMd,
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(254, 133, 44, 0.35)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E57220';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = C.secondaryContainer;
              e.currentTarget.style.transform = 'none';
            }}
          >
            Plan a Demo
          </Link>

          <Link
            to="/contact"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: `1.5px solid rgba(255, 255, 255, 0.45)`,
              padding: '15px 32px',
              borderRadius: C.cardRadius,
              ...T.labelMd,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FFFFFF';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Contact Team
          </Link>
          <Link
            to="/pricing"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: `1.5px solid rgba(255, 255, 255, 0.45)`,
              padding: '15px 32px',
              borderRadius: C.cardRadius,
              ...T.labelMd,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FFFFFF';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'none';
            }}
          >
            See Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SolutionsPage() {
  return (
    <>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @media(max-width:1024px){
          .problem-grid{grid-template-columns:1fr!important}
          .topology-grid{grid-template-columns:1fr!important}
          .usecase-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:640px){.pains-grid{grid-template-columns:1fr!important}}
      `}</style>
      <SolutionsHero />
      <ProblemSection />
      <UseCasesSection />
      <SolutionsCTA />
    </>
  );
}

export default SolutionsPage;
