import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Mail,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Sliders,
  Play,
  CheckCheck,
  FileText,
  Calendar,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const C = {
  surface: '#fdf9f4',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f7f3ee',
  surfaceContainer: '#f1ede8',
  surfaceContainerHigh: '#ebe8e3',
  onSurface: '#1c1c19',
  onSurfaceVariant: '#3f4947',
  primary: '#004642',
  primaryContainer: '#01605a',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#8ed8d0',
  secondary: '#994700',
  secondaryContainer: '#fe852c',
  onSecondaryContainer: '#ffffff',
  outlineVariant: 'rgba(190, 201, 198, 0.4)',
  borderLight: 'rgba(111, 121, 119, 0.2)',
  brandPeach: '#ffdcc0',
};

export const WhatsAppAgentPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState('Pending Approval');
  const [activeStep, setActiveStep] = useState(1);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'How does FlowPilot connect to my business email?',
      a: 'FlowPilot establishes read/write synchronization via official Google Workspace (Gmail API) or Microsoft 365 (Microsoft Graph API) OAuth2 integrations. Credentials and passwords are never stored.',
    },
    {
      q: 'How is WhatsApp communication secured?',
      a: 'All WhatsApp notifications and actions route through the official WhatsApp Business Cloud API with TLS 1.3 encryption and dedicated webhook validation adhering to SOC 2 Type II standards.',
    },
    {
      q: 'Can I require human approval before any email is dispatched?',
      a: 'Yes. You can enforce a mandatory approval gate for all replies or scope it to high-stakes accounts, financial inquiries, or contract negotiations.',
    },
    {
      q: 'How are WhatsApp voice notes processed?',
      a: 'Incoming voice notes are transcribed with contextual punctuation, matched against the active client email thread, and formulated into a complete, professional email draft.',
    },
    {
      q: 'How long does onboarding take?',
      a: 'Standard workspace deployment takes under three minutes: authenticate your business inbox via OAuth2, scan the WhatsApp Business pairing QR code, and your assistant is operational.',
    },
    {
      q: 'Does it support multi-lingual client correspondence?',
      a: 'FlowPilot supports over 30 languages. You can speak or reply in English or French, and FlowPilot generates precise responses in the client’s preferred language.',
    },
  ];

  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', paddingTop: '72px', paddingBottom: '88px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto 56px auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: C.surfaceContainerHigh,
                border: `1px solid ${C.outlineVariant}`,
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: C.secondaryContainer,
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '12px',
                  fontWeight: 700,
                  color: C.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                WHATSAPP OPERATIONS AGENT
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(34px, 4.8vw, 54px)',
                fontWeight: 800,
                color: C.onSurface,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              YOUR INBOX COMES TO YOU.
            </h1>

            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.6,
                color: C.onSurfaceVariant,
                maxWidth: '680px',
                margin: '0 auto 36px auto',
              }}
            >
              Manage high-priority client communication directly from WhatsApp. FlowPilot analyzes incoming messages, surfaces structured briefings, and prepares polished responses ready for one-tap approval.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <Link
                to="/book-a-demo"
                style={{
                  backgroundColor: C.primaryContainer,
                  color: C.onPrimary,
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(1, 96, 90, 0.2)',
                }}
              >
                Planifier un rendez-vous
                <ArrowRight size={16} />
              </Link>
              <a
                href="#how-it-works"
                style={{
                  backgroundColor: C.surfaceContainer,
                  color: C.onSurface,
                  padding: '14px 24px',
                  borderRadius: '10px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  border: `1px solid ${C.borderLight}`,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Play size={14} fill={C.onSurface} />
                Voir comment ça marche
              </a>
            </div>
          </div>

          {/* REAL PRODUCT COMPOSITION (Gmail -> FlowPilot Engine -> WhatsApp) */}
          <div style={{ position: 'relative', maxWidth: '1120px', margin: '32px auto 0 auto' }}>
            <div
              style={{
                backgroundColor: C.surfaceContainerLowest,
                border: `1px solid ${C.outlineVariant}`,
                borderRadius: '18px',
                padding: '28px',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.05)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              {/* GMAIL INBOX MOCKUP */}
              <div
                style={{
                  backgroundColor: C.surfaceContainerLow,
                  borderRadius: '14px',
                  padding: '18px',
                  border: `1px solid ${C.borderLight}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                    paddingBottom: '10px',
                    borderBottom: `1px solid ${C.borderLight}`,
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f87171' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#fbbf24' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#34d399' }} />
                  </div>
                  <span style={{ fontSize: '12px', color: C.onSurfaceVariant, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Mail size={13} /> Gmail Work Inbox
                  </span>
                </div>
                <div
                  style={{
                    backgroundColor: C.surfaceContainerLowest,
                    padding: '14px',
                    borderRadius: '10px',
                    border: `1px solid ${C.borderLight}`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>Acme Services</span>
                    <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>10:42 AM</span>
                  </div>
                  <p style={{ fontSize: '12px', fontWeight: 600, color: C.onSurface, marginBottom: '4px' }}>
                    Meeting confirmation — Thursday
                  </p>
                  <p style={{ fontSize: '11px', color: C.onSurfaceVariant, lineHeight: 1.5, margin: 0 }}>
                    Hi team, following up on our proposal sync for next Thursday at 3 PM to review the deliverables. Does that slot still hold?
                  </p>
                </div>
              </div>

              {/* FLOWPILOT ORCHESTRATOR */}
              <div
                style={{
                  backgroundColor: 'rgba(1, 96, 90, 0.04)',
                  borderRadius: '14px',
                  padding: '18px',
                  border: '1px solid rgba(1, 96, 90, 0.2)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid rgba(1, 96, 90, 0.12)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: C.primary, fontWeight: 700, fontSize: '13px' }}>
                    <Sliders size={14} /> FlowPilot Orchestrator
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      backgroundColor: C.primaryContainer,
                      color: C.onPrimary,
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      fontWeight: 600,
                    }}
                  >
                    Active
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.borderLight}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: C.onSurfaceVariant, marginBottom: '4px' }}>
                      <span>Classification Confidence</span>
                      <strong style={{ color: C.primary }}>99.8%</strong>
                    </div>
                    <div style={{ width: '100%', backgroundColor: C.surfaceContainer, height: '5px', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ backgroundColor: C.primaryContainer, height: '100%', width: '99.8%' }} />
                    </div>
                  </div>
                  <div style={{ padding: '10px 12px', backgroundColor: C.surfaceContainerLowest, borderRadius: '8px', border: `1px solid ${C.borderLight}` }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: C.secondaryContainer, marginBottom: '2px' }}>
                      Priority Tag: High Client Engagement
                    </div>
                    <p style={{ fontSize: '11px', color: C.onSurfaceVariant, margin: 0, lineHeight: 1.4 }}>
                      Verified calendar slot Thursday 15:00. Generated instant WhatsApp executive summary.
                    </p>
                  </div>
                </div>
              </div>

              {/* WHATSAPP MOBILE ALERT */}
              <div
                style={{
                  backgroundColor: '#f0fdf4',
                  borderRadius: '14px',
                  padding: '18px',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid rgba(16, 185, 129, 0.15)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#047857', fontWeight: 700, fontSize: '13px' }}>
                    <MessageSquare size={14} /> WhatsApp Verified Desk
                  </div>
                  <span style={{ fontSize: '10px', backgroundColor: '#d1fae5', color: '#065f46', padding: '2px 6px', borderRadius: '9999px', fontWeight: 600 }}>
                    10:42 AM
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.15)', fontSize: '11px' }}>
                    <div style={{ fontWeight: 700, color: C.primary, marginBottom: '2px' }}>FlowPilot Operations Desk</div>
                    <p style={{ color: C.onSurface, margin: '0 0 4px 0', lineHeight: 1.4 }}>
                      New email from Acme Services: "Meeting confirmation — Thursday". Calendar confirms 3 PM is open.
                    </p>
                    <span style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Reply with voice note or text to dispatch</span>
                  </div>
                  <div style={{ backgroundColor: '#059669', color: '#ffffff', padding: '10px 12px', borderRadius: '8px', fontSize: '11px', marginLeft: '16px' }}>
                    <p style={{ margin: '0 0 2px 0' }}>Thursday at 3 PM works perfectly. Confirm.</p>
                    <div style={{ textAlign: 'right', fontSize: '9px', opacity: 0.85, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2px' }}>
                      10:43 AM <CheckCheck size={11} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS BAR */}
      <section
        style={{
          padding: '48px 0',
          backgroundColor: C.surfaceContainerLow,
          borderTop: `1px solid ${C.borderLight}`,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '42px', fontWeight: 800, color: C.primary, marginBottom: '4px' }}>
              15+ hrs
            </div>
            <div style={{ fontSize: '14px', color: C.onSurfaceVariant, fontWeight: 500 }}>Saved weekly per executive</div>
          </div>
          <div style={{ borderLeft: `1px solid ${C.borderLight}`, borderRight: `1px solid ${C.borderLight}` }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '42px', fontWeight: 800, color: C.secondaryContainer, marginBottom: '4px' }}>
              92%
            </div>
            <div style={{ fontSize: '14px', color: C.onSurfaceVariant, fontWeight: 500 }}>Faster initial response turnaround</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '42px', fontWeight: 800, color: C.primary, marginBottom: '4px' }}>
              24/7
            </div>
            <div style={{ fontSize: '14px', color: C.onSurfaceVariant, fontWeight: 500 }}>Continuous email triage and scheduling</div>
          </div>
        </div>
      </section>

      {/* 3. THE RETURN JOURNEY */}
      <section id="how-it-works" style={{ padding: '80px 0', backgroundColor: C.surface }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto 56px auto', textAlign: 'center' }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                color: C.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
                display: 'block',
              }}
            >
              THE RETURN JOURNEY
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 3.6vw, 38px)',
                fontWeight: 800,
                color: C.onSurface,
                marginBottom: '14px',
              }}
            >
              YOU REPLY ONCE. FLOWPILOT TAKES IT FROM THERE.
            </h2>
            <p style={{ fontSize: '16px', color: C.onSurfaceVariant, lineHeight: 1.6 }}>
              No need to switch between tabs or type on a keyboard. A quick text or voice message on WhatsApp completes the interaction.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Step 1 */}
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '28px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(254, 133, 44, 0.1)', color: C.secondary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', marginBottom: '20px' }}>
                  01
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>
                  Reply on WhatsApp
                </h3>
                <p style={{ fontSize: '13px', color: C.onSurfaceVariant, lineHeight: 1.5 }}>
                  Send a brief text or voice memo directly in your dedicated WhatsApp thread with instructions.
                </p>
              </div>
              <div style={{ marginTop: '24px', backgroundColor: C.surfaceContainerLow, padding: '12px 14px', borderRadius: '10px', border: `1px solid ${C.borderLight}`, fontSize: '12px', color: C.onSurfaceVariant, fontStyle: 'italic' }}>
                "Send them the revised scope and hold Thursday 3 PM."
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '28px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(1, 96, 90, 0.1)', color: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', marginBottom: '20px' }}>
                  02
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>
                  FlowPilot Formulates Draft
                </h3>
                <p style={{ fontSize: '13px', color: C.onSurfaceVariant, lineHeight: 1.5 }}>
                  The engine matches your intent against tone guidelines, attachments, and scheduling details.
                </p>
              </div>
              <div style={{ marginTop: '24px', backgroundColor: C.surfaceContainerLow, padding: '12px 14px', borderRadius: '10px', border: `1px solid ${C.borderLight}`, fontSize: '12px', color: C.primary, fontWeight: 600 }}>
                Synthesized client reply ready for review
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '28px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', marginBottom: '20px' }}>
                  03
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>
                  Dispatched via Gmail
                </h3>
                <p style={{ fontSize: '13px', color: C.onSurfaceVariant, lineHeight: 1.5 }}>
                  The email is delivered straight from your authenticated inbox with calendar invitations attached.
                </p>
              </div>
              <div style={{ marginTop: '24px', backgroundColor: C.surfaceContainerLow, padding: '12px 14px', borderRadius: '10px', border: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600 }}>
                <span>Delivered &amp; Calendar Held</span>
                <CheckCircle2 size={16} color="#059669" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HUMAN IN THE LOOP SECTION */}
      <section style={{ padding: '80px 0', backgroundColor: C.surfaceContainerLow, borderTop: `1px solid ${C.borderLight}`, borderBottom: `1px solid ${C.borderLight}` }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                color: C.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
                display: 'block',
              }}
            >
              TOTAL GOVERNANCE
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 3.6vw, 38px)',
                fontWeight: 800,
                color: C.onSurface,
                marginBottom: '18px',
                lineHeight: 1.2,
              }}
            >
              OPERATIONS RUN FAST. YOU RETAIN CONTROL.
            </h2>
            <p style={{ fontSize: '16px', color: C.onSurfaceVariant, lineHeight: 1.6, marginBottom: '28px' }}>
              Ensure every outgoing message complies with strict brand and legal standards. FlowPilot provides configurable autonomy levels, with single-tap approval directly on WhatsApp.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Mandatory sign-offs for enterprise contract discussions',
                'One-tap revision and inline draft editing from your phone',
                'Firm boundaries: sensitive financial terms never dispatched autonomously',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color={C.primaryContainer} />
                  <span style={{ fontSize: '14px', color: C.onSurface, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: C.surfaceContainerLowest,
              padding: '28px',
              borderRadius: '20px',
              border: `1px solid ${C.borderLight}`,
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: C.secondaryContainer, backgroundColor: C.brandPeach, padding: '3px 8px', borderRadius: '6px' }}>
                Executive Approval Required
              </span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: approvalStatus === 'Approved' ? '#059669' : approvalStatus === 'Rejected' ? '#dc2626' : C.onSurfaceVariant }}>
                Status: {approvalStatus}
              </span>
            </div>
            <div style={{ backgroundColor: C.surfaceContainerLow, padding: '16px', borderRadius: '12px', border: `1px solid ${C.borderLight}`, marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', color: C.onSurfaceVariant, marginBottom: '6px' }}>
                <strong>Proposed Email:</strong> To Sarah Jenkins &lt;s.jenkins@acme.com&gt;
              </div>
              <p style={{ fontSize: '13px', color: C.onSurface, lineHeight: 1.5, margin: 0 }}>
                "Confirmed for Thursday at 3:00 PM EST. The updated statement of work is attached. Looking forward to our discussion."
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setApprovalStatus('Approved & Dispatched ✓')}
                style={{
                  backgroundColor: C.primaryContainer,
                  color: C.onPrimary,
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Approve &amp; Send
              </button>
              <button
                onClick={() => setApprovalStatus('Opened in Editor')}
                style={{
                  backgroundColor: C.surfaceContainer,
                  color: C.onSurface,
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: `1px solid ${C.borderLight}`,
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Edit Draft
              </button>
              <button
                onClick={() => setApprovalStatus('Rejected')}
                style={{
                  backgroundColor: '#fee2e2',
                  color: '#991b1b',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section style={{ padding: '80px 0', backgroundColor: C.surface }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                color: C.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px',
                display: 'block',
              }}
            >
              FAQ
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800, color: C.onSurface, margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((f, idx) => (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                style={{
                  backgroundColor: C.surfaceContainerLowest,
                  borderRadius: '14px',
                  border: `1px solid ${C.borderLight}`,
                  padding: '20px 24px',
                  cursor: 'pointer',
                  boxShadow: openFaq === idx ? '0 4px 14px rgba(0,0,0,0.03)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 700, color: C.onSurface, margin: 0 }}>
                    {f.q}
                  </h4>
                  {openFaq === idx ? <ChevronUp size={18} color={C.primary} /> : <ChevronDown size={18} color={C.primary} />}
                </div>
                {openFaq === idx && (
                  <p style={{ fontSize: '13px', color: C.onSurfaceVariant, lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section style={{ padding: '88px 32px', backgroundColor: C.primaryContainer, color: C.onPrimary, textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(30px, 4.4vw, 44px)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            STOP MANAGING YOUR INBOX. START RUNNING YOUR BUSINESS.
          </h2>
          <p style={{ fontSize: '17px', color: C.onPrimaryContainer, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 36px auto' }}>
            Join operations leaders who have reclaimed 15+ hours weekly with FlowPilot.
          </p>
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.secondaryContainer,
              color: '#ffffff',
              padding: '16px 36px',
              borderRadius: '10px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            }}
          >
            Planifier un rendez-vous
          </Link>
        </div>
      </section>
    </div>
  );
};
