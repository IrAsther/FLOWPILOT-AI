import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Send,
  ShieldCheck,
  Mail,
  Smartphone,
  CalendarCheck,
  FileText,
  Layers,
  Clock,
  Lock,
} from 'lucide-react';

// Curated local enterprise imagery
import heroWorkspaceImg from '../../styles/Images/executive-office.jfif';
import step01EmailImg from '../../styles/Images/email-continuity.jfif';
import step02AnalysisImg from '../../styles/Images/operations-dashboard.jpg';
import step03MobileImg from '../../styles/Images/whatsapp-messaging-screen.jfif';
import step04ApprovalImg from '../../styles/Images/testimonial-director.jpg';
import step05DispatchImg from '../../styles/Images/logistics-center.jfif';
import step06LedgerImg from '../../styles/Images/sales-calendar.jfif';
import archTriggerImg from '../../styles/Images/google-workspace-provider.jfif';
import archActionImg from '../../styles/Images/conference-room.jfif';
import archApprovalImg from '../../styles/Images/digital-agency-team.jfif';

/* ─────────── BRAND DESIGN TOKENS (MATCHING FAQ & HOMEPAGE) ─────────── */
const C = {
  primary: '#004642',             // Primary Dark Teal
  primaryLight: '#01605A',        // Mid Teal
  primaryTint: 'rgba(0, 70, 66, 0.06)',
  primaryTintMedium: 'rgba(0, 70, 66, 0.12)',
  accent: '#FE852C',              // Brand Orange Accent
  accentHover: '#e57220',
  secondaryText: 'rgba(0, 70, 66, 0.78)',
  surfaceCream: '#FDF9F4',        // Soft Cream
  surfaceAlt: '#F7F3EE',
  surfaceWhite: '#FFFFFF',
  borderLight: '#EAEAEA',
  borderTeal: 'rgba(0, 70, 66, 0.14)',
  cardRadius: '8px',
};

const faqItems = [
  {
    question: 'How secure is my company data?',
    answer:
      'FlowPilot is designed around strict enterprise security and privacy principles. Business data is encrypted in transit using TLS 1.3 and at rest with AES-256. Proprietary communications and operational records are processed in memory and are never used to train public AI models.',
  },
  {
    question: 'Can I override automated actions?',
    answer:
      'Yes. Every workflow is governed by strict human-in-the-loop approval gates. Critical communications, invoice entries, and scheduling proposals pause automatically until you explicitly approve or adjust them directly from your mobile device via WhatsApp.',
  },
  {
    question: 'How long does integration take?',
    answer:
      'Most standard integrations connect in under 10 minutes via secure Google Workspace and Microsoft 365 OAuth. No complex code installations or server configurations are required to begin automated inbox monitoring.',
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    label: 'STEP 01',
    title: 'Inbound email arrives in your corporate inbox',
    subtitle: 'Zero-latency monitoring with OAuth security',
    description:
      'A high-value enterprise client sends a comprehensive Request For Proposal (RFP) or urgent operational inquiry directly to your executive inbox. FlowPilot instantly detects the message via secure OAuth without altering your email clients or requiring complex IMAP bridges.',
    image: step01EmailImg,
    tag: 'Inbound Trigger • Instant Detection',
    highlights: [
      'Native Google Workspace & Microsoft 365 OAuth',
      'Zero change to your existing email client habits',
      'Automatic spam and marketing newsletter filtering',
    ],
    reverse: false,
  },
  {
    step: '02',
    label: 'STEP 02',
    title: 'Operations engine evaluates request parameters',
    subtitle: 'Contextual analysis & deal-size classification',
    description:
      'FlowPilot reads the incoming payload, extracts key project parameters, evaluates historical deal sizing, checks calendar availability, and drafts an initial high-converting response tailored to your brand tone.',
    image: step02AnalysisImg,
    tag: 'Contextual Triage • Intent Confidence 99.4%',
    highlights: [
      'Intent recognition and project timeline extraction',
      'Tone-matched draft generation in your company voice',
      'Instant calendar conflict analysis and slot generation',
    ],
    reverse: true,
  },
  {
    step: '03',
    label: 'STEP 03',
    title: 'Encrypted mobile alert dispatched to WhatsApp',
    subtitle: 'Real-time operational briefs in your pocket',
    description:
      'An encrypted operations brief is transmitted directly to your verified WhatsApp thread. You receive a structured summary including the client identity, urgency, extracted parameters, and an editable draft response preview.',
    image: step03MobileImg,
    tag: 'Mobile Alert • Official WhatsApp API',
    highlights: [
      'Structured operational brief delivered in < 15 seconds',
      'End-to-end encrypted notification delivery',
      'Zero app downloads: operates in your existing WhatsApp',
    ],
    reverse: false,
  },
  {
    step: '04',
    label: 'STEP 04',
    title: 'Human-in-the-loop executive sign-off',
    subtitle: 'You maintain 100% control over outbound actions',
    description:
      'With a single tap on WhatsApp, you authorize the proposed response or send custom revisions. FlowPilot guarantees that high-stakes outbound communication never dispatches without your explicit human verification.',
    image: step04ApprovalImg,
    tag: 'Human Verification • 1-Tap Authorization',
    highlights: [
      'One-tap "Approve & Dispatch" or quick reply editing',
      'Deterministic escalation if confidence falls below 98%',
      'Audit log tracks who approved each action and when',
    ],
    reverse: true,
  },
  {
    step: '05',
    label: 'STEP 05',
    title: 'Autonomous execution & deliverable dispatch',
    subtitle: 'Flawless execution via verified mail servers',
    description:
      'Upon receiving your authorization, FlowPilot immediately dispatches the email response through your verified SMTP server, attaches required proposals or PDFs, and confirms the meeting hold on your calendar.',
    image: step05DispatchImg,
    tag: 'Automated Dispatch • Verified SMTP',
    highlights: [
      'Dispatched directly from your email address (SPF/DKIM preserved)',
      'Calendar invites synchronized with Zoom / Google Meet links',
      'Client receives professional response within minutes of inquiry',
    ],
    reverse: false,
  },
  {
    step: '06',
    label: 'STEP 06',
    title: 'Real-time CRM & financial ledger synchronization',
    subtitle: 'Zero data entry for your sales and ops teams',
    description:
      'All interaction details, client notes, deal sizes, and scheduled milestones are automatically logged into your CRM (HubSpot, Salesforce) and accounting ledger with complete audit trails for total transparency.',
    image: step06LedgerImg,
    tag: 'System Sync • Immutable Audit Trail',
    highlights: [
      'Automatic CRM deal creation and contact enrichment',
      'Accounting pipeline provisional revenue logging',
      'SOC2-compliant immutable event log for compliance',
    ],
    reverse: true,
  },
];

const ARCHITECTURE_BLOCKS = [
  {
    number: '01',
    title: 'Enterprise Inbound Triggers',
    desc: 'Inbound emails, secure webhooks, customer form submissions, and calendar scheduling requests instantly initiate the automated execution pipeline.',
    icon: Mail,
    image: archTriggerImg,
    badge: 'Real-Time Ingestion',
  },
  {
    number: '02',
    title: 'Intelligent Operations Processing',
    desc: 'Enterprise language models extract parameters, formulate response drafts, calculate deal priority, and coordinate backend database actions.',
    icon: Layers,
    image: archActionImg,
    badge: 'Sub-Second Analysis',
  },
  {
    number: '03',
    title: 'Human-in-the-Loop Validation',
    desc: 'High-stakes dispatches and contract commitments pause safely until authorized via WhatsApp push notification or administrative dashboard sign-off.',
    icon: ShieldCheck,
    image: archApprovalImg,
    badge: '100% Human Governed',
  },
];

export function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <div style={{ backgroundColor: C.surfaceWhite, color: C.primary, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* ════════════════════════════════════════════════════════════════════
          1. HERO SECTION WITH ENTERPRISE WORKSPACE IMAGE & FROSTED OVERLAY
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          backgroundImage: `url("${heroWorkspaceImg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '110px 24px 90px',
          overflow: 'hidden',
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        {/* Frosted Glass Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Eyebrow Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: C.cardRadius,
              backgroundColor: C.primaryTintMedium,
              border: `1px solid ${C.borderTeal}`,
              color: C.primary,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            <ShieldCheck size={14} color={C.primaryLight} />
            Transparent Operations Engine
          </div>

          {/* Orange Accent Bar */}
          <div
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: C.accent,
              margin: '0 auto 22px auto',
              borderRadius: '2px',
            }}
          />

          {/* Main Title */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: C.primary,
              margin: '0 0 20px 0',
            }}
          >
            HOW FLOWPILOT MAKES YOUR BUSINESS RUN.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.6vw, 20px)',
              lineHeight: 1.55,
              color: C.secondaryText,
              maxWidth: '680px',
              margin: '0 auto 36px auto',
            }}
          >
            A simple, transparent look at how AI and human judgment work together to automate your core operations with absolute reliability.
          </p>

          {/* Hero Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '44px',
            }}
          >
            <Link
              to="/contact"
              style={{
                backgroundColor: C.accent,
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
                boxShadow: '0 4px 14px rgba(254, 133, 44, 0.35)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.accentHover;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.accent;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Plan a Demo <ArrowRight size={16} />
            </Link>

            <a
              href="#workflow"
              style={{
                backgroundColor: C.surfaceWhite,
                color: C.primary,
                border: `1.5px solid ${C.borderLight}`,
                padding: '14px 28px',
                borderRadius: C.cardRadius,
                fontWeight: 700,
                fontSize: '15px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 6px rgba(0, 70, 66, 0.04)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.primaryLight;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.borderLight;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Explore the Workflow
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '20px',
              borderTop: `1px solid ${C.borderLight}`,
            }}
          >
            {[
              { icon: ShieldCheck, text: 'SOC2 Type II Certified' },
              { icon: Lock, text: 'GDPR & Privacy Compliant' },
              { icon: CheckCircle2, text: '100% Human-Governed' },
              { icon: Clock, text: 'Sub-Minute Response Speed' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: C.primaryLight,
                  }}
                >
                  <Icon size={16} color={C.accent} />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. VISUAL WORKFLOW TIMELINE (6 STEPS, ALTERNATING 65% IMAGE LAYOUT)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        id="workflow"
        style={{
          padding: '100px 24px',
          backgroundColor: C.surfaceCream,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          {/* Section Heading */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 72px auto' }}>
            <div
              style={{
                width: '40px',
                height: '3px',
                backgroundColor: C.accent,
                margin: '0 auto 14px auto',
                borderRadius: '2px',
              }}
            />
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 800,
                color: C.primary,
                letterSpacing: '-0.02em',
                margin: '0 0 12px 0',
              }}
            >
              The 6-Step Automated Workflow
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: C.secondaryText,
                margin: 0,
              }}
            >
              Watch how an incoming client request moves seamlessly through automated processing, intelligence extraction, and executive sign-off.
            </p>
          </div>

          {/* Timeline Steps List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '70px', position: 'relative' }}>
            {WORKFLOW_STEPS.map((item, idx) => {
              const isReverse = item.reverse;
              return (
                <div key={item.step} style={{ position: 'relative' }}>
                  {/* Step Card Container */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '40px',
                      alignItems: 'center',
                      backgroundColor: C.surfaceWhite,
                      padding: '36px',
                      borderRadius: C.cardRadius,
                      border: `1px solid ${C.borderLight}`,
                      boxShadow: '0 6px 20px rgba(0, 70, 66, 0.04)',
                    }}
                  >
                    {/* Visual Column (65% dominance feel) */}
                    <div
                      style={{
                        order: isReverse ? 2 : 1,
                        position: 'relative',
                        borderRadius: C.cardRadius,
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0, 70, 66, 0.08)',
                        border: `1px solid ${C.borderLight}`,
                        height: '320px',
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      {/* Overlay Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '14px',
                          left: '14px',
                          right: '14px',
                          backgroundColor: 'rgba(255, 255, 255, 0.94)',
                          backdropFilter: 'blur(6px)',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: `1px solid ${C.borderLight}`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: C.primary,
                        }}
                      >
                        <div
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: C.accent,
                          }}
                        />
                        {item.tag}
                      </div>
                    </div>

                    {/* Copy Column */}
                    <div style={{ order: isReverse ? 1 : 2 }}>
                      {/* Step Pill */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 12px',
                          borderRadius: C.cardRadius,
                          backgroundColor: 'rgba(254, 133, 44, 0.1)',
                          border: '1px solid rgba(254, 133, 44, 0.3)',
                          color: C.accent,
                          fontSize: '12px',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          marginBottom: '14px',
                        }}
                      >
                        {item.label}
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: 'clamp(20px, 2.5vw, 26px)',
                          fontWeight: 700,
                          color: C.primary,
                          lineHeight: 1.3,
                          margin: '0 0 8px 0',
                        }}
                      >
                        {item.title}
                      </h3>

                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: C.primaryLight,
                          marginBottom: '16px',
                        }}
                      >
                        {item.subtitle}
                      </div>

                      <p
                        style={{
                          fontSize: '15px',
                          lineHeight: 1.6,
                          color: C.secondaryText,
                          margin: '0 0 20px 0',
                        }}
                      >
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {item.highlights.map((h, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '13px',
                              fontWeight: 500,
                              color: C.primary,
                            }}
                          >
                            <CheckCircle2 size={16} color={C.accent} style={{ flexShrink: 0 }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Vertical Flow Connector (shown between steps) */}
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '18px 0 -18px',
                      }}
                    >
                      <div
                        style={{
                          width: '2px',
                          height: '34px',
                          backgroundColor: 'rgba(0, 70, 66, 0.2)',
                        }}
                      />
                      <div
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: C.accent,
                          boxShadow: '0 0 0 4px rgba(254, 133, 44, 0.2)',
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. ARCHITECTURE PREVIEW (3 PREMIUM FEATURE BLOCKS)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        id="architecture"
        style={{
          padding: '100px 24px',
          backgroundColor: C.surfaceWhite,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
            <div
              style={{
                width: '40px',
                height: '3px',
                backgroundColor: C.accent,
                margin: '0 auto 14px auto',
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
              Real-Time Architecture Preview
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: C.secondaryText,
                margin: 0,
              }}
            >
              Explore how triggers, operations actions, and human-in-the-loop validation gates connect together cleanly.
            </p>
          </div>

          {/* 3 Architecture Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {ARCHITECTURE_BLOCKS.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.number}
                  style={{
                    backgroundColor: C.surfaceWhite,
                    borderRadius: C.cardRadius,
                    border: `1px solid ${C.borderLight}`,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0, 70, 66, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 70, 66, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 70, 66, 0.04)';
                  }}
                >
                  {/* Card Image Header */}
                  <div style={{ height: '170px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={block.image}
                      alt={block.title}
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
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,70,66,0.1) 0%, rgba(0,70,66,0.65) 100%)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(6px)',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: C.primary,
                      }}
                    >
                      <Icon size={14} color={C.accent} />
                      {block.badge}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: C.accent,
                        letterSpacing: '0.08em',
                        marginBottom: '6px',
                      }}
                    >
                      STAGE {block.number}
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '18px',
                        fontWeight: 700,
                        color: C.primary,
                        margin: '0 0 10px 0',
                      }}
                    >
                      {block.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: C.secondaryText,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {block.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. EMBEDDED FAQ SECTION (MATCHING FAQ PAGE ENTERPRISE STYLING)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '90px 24px',
          backgroundColor: C.surfaceCream,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
                fontSize: 'clamp(26px, 3vw, 34px)',
                fontWeight: 800,
                color: C.primary,
                margin: '0 0 10px 0',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '15px', color: C.secondaryText, margin: 0 }}>
              Everything you need to know about security, control, and integration timelines.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  style={{
                    backgroundColor: C.surfaceWhite,
                    borderRadius: C.cardRadius,
                    border: `1px solid ${C.borderLight}`,
                    borderLeft: isOpen ? `4px solid ${C.accent}` : `4px solid ${C.primaryLight}`,
                    boxShadow: isOpen
                      ? '0 8px 24px rgba(0, 70, 66, 0.08)'
                      : '0 1px 3px rgba(0, 70, 66, 0.02)',
                    transition: 'all 0.25s ease',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      padding: '22px 24px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '16px',
                        fontWeight: 600,
                        color: isOpen ? C.accent : C.primary,
                        transition: 'color 0.15s ease',
                      }}
                    >
                      {item.question}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: isOpen ? 'rgba(254, 133, 44, 0.12)' : C.surfaceCream,
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown size={17} color={isOpen ? C.accent : C.primaryLight} />
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? '300px' : '0',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
                    }}
                  >
                    <div
                      style={{
                        padding: '0 24px 22px 24px',
                        borderTop: `1px solid ${C.borderLight}`,
                        paddingTop: '16px',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '15px',
                          lineHeight: 1.65,
                          color: C.secondaryText,
                          margin: 0,
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. FINAL CTA SECTION (DEEP TEAL GRADIENT WITH STANDOUT BUTTONS)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, #002e2b 100%)`,
          padding: '95px 24px',
          color: '#FFFFFF',
          borderTop: `1px solid ${C.borderLight}`,
        }}
      >
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Subtle Orange Accent Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
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
            Streamline Operations Today
          </div>

          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
            }}
          >
            READY TO MAKE YOUR BUSINESS FLOW?
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.82)',
              maxWidth: '580px',
              margin: '0 auto 36px auto',
            }}
          >
            Join high-performing operations teams saving 20+ hours every week with FlowPilot's human-governed automation.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <Link
              to="/contact"
              style={{
                backgroundColor: C.accent,
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
                boxShadow: '0 4px 14px rgba(254, 133, 44, 0.35)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.accentHover;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.accent;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Plan a Demo <ArrowRight size={16} />
            </Link>

            <Link
              to="/book-demo"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1.5px solid rgba(255, 255, 255, 0.45)',
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
              Book Enterprise Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Named export for router compatibility
export default HowItWorksPage;