import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Calendar,
  Layers,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Sparkles,
  Lock,
} from 'lucide-react';

// Local curated enterprise business imagery from src/styles/Images
import heroOfficeImg from '../../styles/Images/executive-office.jfif';
import missionImg from '../../styles/Images/conference-room.jfif';
import humanAiImg from '../../styles/Images/digital-agency-team.jfif';
import avatarAlex from '../../styles/Images/testimonial-director.jpg';
import avatarMaya from '../../styles/Images/digital-agency-team.jfif';
import avatarDaniel from '../../styles/Images/executive-briefing.jpg';
import avatarSofia from '../../styles/Images/logistics-center.jfif';

/* ─────────────────────────────────────────────────────────────────────────────
   STRICT BRAND COLOR SYSTEM & TOKENS
───────────────────────────────────────────────────────────────────────────── */
const C = {
  primary: '#004642',             // Primary Teal
  primaryContainer: '#01605A',    // Deep Mid Teal
  accent: '#FE852C',              // Brand Orange
  peach: '#FFD0A8',               // Peach Accent
  background: '#FDF9F4',          // Soft Cream
  surfaceWhite: '#FFFFFF',        // White
  surfaceLow: '#F7F3EE',          // Off-white / Low Surface
  surfaceMid: '#F1EDE8',          // Mid Surface
  text: '#1A1C1D',                // Primary Text
  textMuted: '#3F4947',           // Muted Text
  borderLight: '#EAEAEA',         // Light Border
  borderTeal: 'rgba(1, 96, 90, 0.16)',
  radiusCard: '8px',              // Strict 8px radius
  radiusButton: '8px',            // Strict 8px radius
  radiusContainer: '12px',        // Max 12px radius
};

/* ─────────────────────────────────────────────────────────────────────────────
   TEAM MEMBERS (REUSING EXISTING TEAM DATA)
───────────────────────────────────────────────────────────────────────────── */
const TEAM_MEMBERS = [
  {
    name: 'Alex Morgan',
    role: 'Founder & AI Operations Lead',
    focus: 'AI strategy · Workflow architecture · Operations',
    image: avatarAlex,
  },
  {
    name: 'Maya Laurent',
    role: 'Automation Engineer',
    focus: 'Integrations · Workflow systems · Reliability',
    image: avatarMaya,
  },
  {
    name: 'Daniel Okoro',
    role: 'AI Systems Engineer',
    focus: 'Agents · Context systems · Process intelligence',
    image: avatarDaniel,
  },
  {
    name: 'Sofia Bennett',
    role: 'Product & Experience',
    focus: 'Product design · UX · Human-AI interaction',
    image: avatarSofia,
  },
];

export function AboutPage() {
  return (
    <div style={{ backgroundColor: C.background, color: C.text, minHeight: '100vh', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      {/* ════════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '70px',
          paddingLeft: '24px',
          paddingRight: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 48px auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '6px',
              backgroundColor: 'rgba(1, 96, 90, 0.08)',
              border: `1px solid ${C.borderTeal}`,
              color: C.primary,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            ABOUT FLOWPILOT
          </div>

          {/* Accent Line */}
          <div
            style={{
              width: '44px',
              height: '3.5px',
              backgroundColor: C.accent,
              margin: '0 auto 18px auto',
              borderRadius: '2px',
            }}
          />

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: C.primary,
              margin: '0 0 18px 0',
            }}
          >
            WE BUILD AI OPERATIONS THAT WORK LIKE YOUR BEST TEAM.
          </h1>

          {/* Supporting copy */}
          <p
            style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              lineHeight: 1.6,
              color: C.textMuted,
              maxWidth: '680px',
              margin: '0 auto 36px auto',
            }}
          >
            FlowPilot removes the repetitive operational friction between people, inboxes, and business software so your team can focus on the work that moves the needle.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <Link
              to="/book-a-demo"
              style={{
                backgroundColor: C.accent,
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: C.radiusButton,
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(254, 133, 44, 0.3)',
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
              Plan a Demo <ArrowRight size={16} />
            </Link>

            <Link
              to="/how-it-works"
              style={{
                backgroundColor: C.surfaceWhite,
                color: C.primary,
                border: `1.5px solid ${C.primaryContainer}`,
                padding: '14px 28px',
                borderRadius: C.radiusButton,
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.surfaceLow;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.surfaceWhite;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Explore How It Works
            </Link>
          </div>
        </div>

        {/* Large Visually Dominant Business Image */}
        <div
          style={{
            borderRadius: C.radiusContainer,
            overflow: 'hidden',
            boxShadow: '0 16px 36px rgba(0, 70, 66, 0.12)',
            border: `1px solid ${C.borderLight}`,
            position: 'relative',
            maxHeight: '480px',
          }}
        >
          <img
            src={heroOfficeImg}
            alt="Modern Enterprise Operations Center"
            style={{
              width: '100%',
              height: '460px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '18px',
              left: '18px',
              backgroundColor: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(8px)',
              padding: '12px 18px',
              borderRadius: C.radiusCard,
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
            Human-Led Operational Certainty
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. OUR MISSION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '90px 24px',
          backgroundColor: C.surfaceWhite,
          borderTop: `1px solid ${C.borderLight}`,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))',
              gap: '50px',
              alignItems: 'center',
            }}
          >
            {/* Left Statement */}
            <div>
              <div
                style={{
                  width: '36px',
                  height: '3px',
                  backgroundColor: C.accent,
                  marginBottom: '14px',
                  borderRadius: '2px',
                }}
              />
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: C.accent,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                OUR MISSION
              </div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(28px, 3.5vw, 38px)',
                  fontWeight: 800,
                  color: C.primary,
                  lineHeight: 1.22,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                BUSINESS OWNERS SHOULD SPEND THEIR TIME BUILDING — NOT REPEATING.
              </h2>
            </div>

            {/* Right Explanation + Contextual Photo */}
            <div>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: C.textMuted,
                  margin: '0 0 24px 0',
                }}
              >
                We founded FlowPilot on the simple conviction that small and mid-sized businesses deserve the same autonomous operational precision as Fortune 500 enterprises—without the bloated headcounts, endless tool fragmentation, or complex setup cycles.
              </p>

              <div
                style={{
                  borderRadius: C.radiusCard,
                  overflow: 'hidden',
                  height: '200px',
                  boxShadow: '0 8px 20px rgba(0, 70, 66, 0.06)',
                  border: `1px solid ${C.borderLight}`,
                  position: 'relative',
                }}
              >
                <img
                  src={missionImg}
                  alt="Executive Strategic Alignment"
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
                    background: 'linear-gradient(180deg, transparent 40%, rgba(0, 70, 66, 0.75) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '16px',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  Autonomous execution built for executive peace of mind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. WHY FLOWPILOT EXISTS (TRANSITION FLOW)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '90px 24px',
          backgroundColor: C.background,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 54px auto' }}>
            <div
              style={{
                width: '36px',
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
              The Operational Shift We Create
            </h2>
            <p style={{ fontSize: '15px', color: C.textMuted, margin: 0 }}>
              Moving business communication from chaotic manual handoffs to unified autonomous orchestration.
            </p>
          </div>

          {/* Transition Flow: Repetitive Work -> Manual Operations -> Lost Time -> FlowPilot Automation */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              alignItems: 'stretch',
            }}
          >
            {[
              { step: '01', title: 'Repetitive Inbound', desc: 'Identical emails, inquiry forms, and customer briefs constantly flooding staff inboxes.' },
              { step: '02', title: 'Manual Hand-Offs', desc: 'Copy-pasting notes between Gmail, WhatsApp, spreadsheets, and disconnected CRMs.' },
              { step: '03', title: 'Lost Growth Time', desc: 'Over 18+ hours wasted weekly per lead simply routing status updates and calendar links.' },
              { step: '04', title: 'FlowPilot Automation', desc: 'Autonomous parsing, drafted responses, and 1-tap WhatsApp executive authorization.', highlight: true },
            ].map((node, i) => (
              <div
                key={node.step}
                style={{
                  backgroundColor: node.highlight ? C.primaryContainer : C.surfaceWhite,
                  color: node.highlight ? '#FFFFFF' : C.text,
                  borderRadius: C.radiusCard,
                  padding: '28px 22px',
                  border: node.highlight ? `2px solid ${C.accent}` : `1px solid ${C.borderLight}`,
                  boxShadow: node.highlight ? '0 8px 24px rgba(0, 70, 66, 0.15)' : '0 2px 8px rgba(0, 70, 66, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: node.highlight ? C.peach : C.accent,
                      letterSpacing: '0.08em',
                      marginBottom: '8px',
                    }}
                  >
                    PHASE {node.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '17px',
                      fontWeight: 700,
                      color: node.highlight ? '#FFFFFF' : C.primary,
                      margin: '0 0 10px 0',
                    }}
                  >
                    {node.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.6,
                      color: node.highlight ? 'rgba(255, 255, 255, 0.88)' : C.textMuted,
                      margin: 0,
                    }}
                  >
                    {node.desc}
                  </p>
                </div>

                {node.highlight && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '20px',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: C.accent,
                    }}
                  >
                    <CheckCircle2 size={15} color={C.accent} />
                    Verified Solution Loop
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. OUR APPROACH (3 FOCUSED PRINCIPLES)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '90px 24px',
          backgroundColor: C.surfaceWhite,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 54px auto' }}>
            <div
              style={{
                width: '36px',
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
              Our Engineering Approach
            </h2>
            <p style={{ fontSize: '15px', color: C.textMuted, margin: 0 }}>
              Three fundamental rules that guide how we build autonomous infrastructure.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                num: '01',
                title: 'SIMPLIFY',
                subtitle: 'Remove unnecessary manual work.',
                desc: 'We eliminate convoluted, multi-step processes by identifying root intents and cutting through operational bureaucracy.',
                icon: Zap,
              },
              {
                num: '02',
                title: 'CONNECT',
                subtitle: 'Bring daily communication channels together.',
                desc: 'Gmail, WhatsApp, Google Calendar, and CRM databases are unified into a single coherent orchestration stream.',
                icon: Layers,
              },
              {
                num: '03',
                title: 'AUTOMATE',
                subtitle: 'Let intelligent systems handle routine tasks.',
                desc: 'High-confidence drafting and scheduling run autonomously, leaving only final approval taps to human judgment.',
                icon: Sparkles,
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  style={{
                    backgroundColor: C.surfaceWhite,
                    borderRadius: C.radiusCard,
                    border: `1px solid ${C.borderLight}`,
                    borderTop: `4px solid ${C.primaryContainer}`,
                    padding: '32px 28px',
                    boxShadow: '0 4px 16px rgba(0, 70, 66, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 800,
                        color: C.accent,
                        letterSpacing: '0.08em',
                      }}
                    >
                      PRINCIPLE {p.num}
                    </span>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(1, 96, 90, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={18} color={C.primaryContainer} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '20px',
                      fontWeight: 800,
                      color: C.primary,
                      margin: '0 0 6px 0',
                    }}
                  >
                    {p.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: C.primaryContainer,
                      marginBottom: '12px',
                    }}
                  >
                    {p.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: C.textMuted,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. HUMAN + AI (SPLIT VISUAL COMPOSITION)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '90px 24px',
          backgroundColor: C.background,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left: Professional People / Collaboration Image */}
            <div
              style={{
                borderRadius: C.radiusCard,
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 70, 66, 0.08)',
                border: `1px solid ${C.borderLight}`,
                position: 'relative',
                height: '380px',
              }}
            >
              <img
                src={humanAiImg}
                alt="Executive Team Working Alongside FlowPilot Intelligence"
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
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.94)',
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
                <Users size={18} color={C.accent} />
                Human Judgment Stays in the Driver's Seat
              </div>
            </div>

            {/* Right: Statement & Philosophy */}
            <div>
              <div
                style={{
                  width: '36px',
                  height: '3px',
                  backgroundColor: C.accent,
                  marginBottom: '14px',
                  borderRadius: '2px',
                }}
              />
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: C.accent,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                HUMAN + AI PHILOSOPHY
              </div>

              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(26px, 3vw, 36px)',
                  fontWeight: 800,
                  color: C.primary,
                  lineHeight: 1.25,
                  margin: '0 0 18px 0',
                }}
              >
                AI SHOULD SUPPORT PEOPLE — NOT REPLACE THE WAY BUSINESS THINKS.
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: C.textMuted,
                  margin: '0 0 24px 0',
                }}
              >
                FlowPilot does not generate opaque black-box actions. Every high-stakes communication, scheduling conflict, and client proposal is routed to your WhatsApp with an instant 1-tap approval gate. The AI prepares the heavy lifting; you make the decision.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  '100% deterministic approval thresholds before external dispatches',
                  'Client-facing communications drafted in your personal brand tone',
                  'Complete audit trail of all approved events for compliance',
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color={C.primaryContainer} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: C.primary, fontWeight: 500 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6. WHAT WE AUTOMATE (4 PRODUCT ECOSYSTEM BLOCKS)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '90px 24px',
          backgroundColor: C.surfaceWhite,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 54px auto' }}>
            <div
              style={{
                width: '36px',
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
              The Everyday Tools We Automate
            </h2>
            <p style={{ fontSize: '15px', color: C.textMuted, margin: 0 }}>
              An intelligent operations layer seamlessly interconnecting your core business software.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                tool: 'Gmail & Outlook',
                icon: Mail,
                headline: 'Inbound Email Triage',
                detail: 'Sub-minute intent analysis, priority ranking, and context-aware responses prepared ready to review.',
              },
              {
                tool: 'WhatsApp Business',
                icon: MessageSquare,
                headline: 'Mobile Operations Desk',
                detail: 'Structured executive briefs delivered straight to your chat with instant 1-tap Approve & Dispatch.',
              },
              {
                tool: 'Google Calendar',
                icon: Calendar,
                headline: 'Conflict-Free Scheduling',
                detail: 'Dynamic focus-time block protection, multi-party time zone alignment, and automated prep slots.',
              },
              {
                tool: 'Custom Workflows',
                icon: Layers,
                headline: 'Multi-Step Logic Gates',
                detail: 'Bi-directional synchronization connecting Hubspot, Notion, spreadsheets, and private webhooks.',
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.tool}
                  style={{
                    backgroundColor: C.surfaceWhite,
                    borderRadius: C.radiusCard,
                    border: `1px solid ${C.borderLight}`,
                    padding: '28px 24px',
                    boxShadow: '0 2px 8px rgba(0, 70, 66, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(1, 96, 90, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '18px',
                      }}
                    >
                      <Icon size={20} color={C.primaryContainer} />
                    </div>

                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: C.accent,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      {card.tool}
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
                      {card.headline}
                    </h3>

                    <p
                      style={{
                        fontSize: '13px',
                        lineHeight: 1.6,
                        color: C.textMuted,
                        margin: 0,
                      }}
                    >
                      {card.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7. OUR VALUES (4 RESTRAINED PILLARS)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '90px 24px',
          backgroundColor: C.background,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 54px auto' }}>
            <div
              style={{
                width: '36px',
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
              The Values That Direct Us
            </h2>
            <p style={{ fontSize: '15px', color: C.textMuted, margin: 0 }}>
              Practical commitments to clarity, dependability, and human leadership.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              { title: 'CLARITY', desc: 'Make complex automation simple and completely understandable to operators.' },
              { title: 'RELIABILITY', desc: 'Workflows must perform consistently under enterprise loads without unexpected failure.' },
              { title: 'HUMAN CONTROL', desc: 'Founders and managers remain in final control of critical business judgment.' },
              { title: 'IMPACT', desc: 'Every automation sequence must deliver tangible, measurable hours saved every single week.' },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  backgroundColor: C.surfaceWhite,
                  borderRadius: C.radiusCard,
                  padding: '28px 24px',
                  border: `1px solid ${C.borderLight}`,
                  boxShadow: '0 2px 8px rgba(0, 70, 66, 0.03)',
                  borderTop: `3px solid ${C.accent}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '17px',
                    fontWeight: 800,
                    color: C.primary,
                    letterSpacing: '0.04em',
                    margin: '0 0 10px 0',
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: C.textMuted, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          8. TEAM / PEOPLE (REUSING EXISTING TEAM WITH REAL PORTRAITS)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '90px 24px',
          backgroundColor: C.surfaceWhite,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 54px auto' }}>
            <div
              style={{
                width: '36px',
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
              The People Behind FlowPilot
            </h2>
            <p style={{ fontSize: '15px', color: C.textMuted, margin: 0 }}>
              Operations architects and AI engineers dedicated to elevating your business productivity.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                style={{
                  backgroundColor: C.surfaceWhite,
                  borderRadius: C.radiusCard,
                  border: `1px solid ${C.borderLight}`,
                  overflow: 'hidden',
                  boxShadow: '0 4px 14px rgba(0, 70, 66, 0.04)',
                }}
              >
                <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '17px',
                      fontWeight: 700,
                      color: C.primary,
                      margin: '0 0 4px 0',
                    }}
                  >
                    {member.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: C.accent,
                      marginBottom: '8px',
                    }}
                  >
                    {member.role}
                  </div>
                  <p
                    style={{
                      fontSize: '12px',
                      lineHeight: 1.5,
                      color: C.textMuted,
                      margin: 0,
                    }}
                  >
                    {member.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA: Meet the Team (routes to /team) */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/team"
              style={{
                backgroundColor: C.surfaceLow,
                color: C.primary,
                border: `1.5px solid ${C.primaryContainer}`,
                padding: '12px 28px',
                borderRadius: C.radiusButton,
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.primaryContainer;
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = C.surfaceLow;
                e.currentTarget.style.color = C.primary;
              }}
            >
              Meet the Full Team <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          9. FINAL CTA SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, #002d2a 100%)`,
          padding: '95px 24px',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '6px',
              backgroundColor: 'rgba(254, 133, 44, 0.18)',
              border: '1px solid rgba(254, 133, 44, 0.35)',
              color: C.accent,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            JOIN HIGH-OUTPUT TEAMS
          </div>

          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
            }}
          >
            READY TO BUILD A BUSINESS THAT RUNS BETTER?
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '580px',
              margin: '0 auto 36px auto',
            }}
          >
            Discover how FlowPilot automates repetitive email triage, WhatsApp approvals, and calendar synchronization with absolute human oversight.
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
              to="/book-a-demo"
              style={{
                backgroundColor: C.accent,
                color: '#FFFFFF',
                padding: '14px 30px',
                borderRadius: C.radiusButton,
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(254, 133, 44, 0.35)',
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
              Plan a Demo <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1.5px solid rgba(255, 255, 255, 0.45)',
                padding: '14px 30px',
                borderRadius: C.radiusButton,
                fontWeight: 700,
                fontSize: '14px',
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
