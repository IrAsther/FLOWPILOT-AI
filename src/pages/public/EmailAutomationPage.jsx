import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Inbox,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Filter,
  Send,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Sliders,
  Check,
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

export const EmailAutomationPage = () => {
  const [activeCategory, setActiveCategory] = useState('priority');
  const [draftStatus, setDraftStatus] = useState('Ready to Send');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'Is our corporate email data stored or used to train models?',
      a: 'Never. FlowPilot complies strictly with SOC 2 Type II and GDPR requirements. Emails are processed in transient, encrypted memory buffers and never retained for foundation model training.',
    },
    {
      q: 'Which email providers are supported?',
      a: 'We support Google Workspace (Gmail API), Microsoft 365 / Exchange (Graph API), and custom enterprise IMAP/SMTP endpoints with OAuth2 token authentication.',
    },
    {
      q: 'How does tone matching work in client replies?',
      a: 'FlowPilot analyzes approved sent correspondence to match your individual phrasing, greeting formality, sign-offs, and company terminology without sounding robotic.',
    },
    {
      q: 'How quickly does FlowPilot triage new inbound threads?',
      a: 'Incoming emails trigger real-time webhooks. Urgency scoring, action-item extraction, and draft formulation occur within 1.5 to 2 seconds of receipt.',
    },
  ];

  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* 1. HERO SECTION */}
      <section style={{ padding: '72px 32px 56px 32px', maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: C.surfaceContainerHigh,
            color: C.primary,
            fontSize: '12px',
            fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '20px',
          }}
        >
          <Mail size={13} />
          <span>EMAIL OPERATIONS SUITE</span>
        </div>

        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(34px, 4.8vw, 54px)',
            fontWeight: 800,
            color: C.onSurface,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            maxWidth: '850px',
            margin: '0 auto 20px auto',
          }}
        >
          LET AI HANDLE YOUR INBOX.
        </h1>

        <p
          style={{
            fontSize: '17px',
            color: C.onSurfaceVariant,
            maxWidth: '680px',
            margin: '0 auto 36px auto',
            lineHeight: 1.6,
          }}
        >
          FlowPilot reads, categorizes, and summarizes your emails, preparing high-precision drafts so your team responds faster with complete operational oversight.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '56px' }}>
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
              backgroundColor: C.surfaceContainerHigh,
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
            Voir comment ça marche
          </a>
        </div>

        {/* Hero Product Visual - Smart Inbox View */}
        <div
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderRadius: '18px',
            border: `1px solid ${C.outlineVariant}`,
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden',
            padding: '24px',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '14px',
              borderBottom: `1px solid ${C.borderLight}`,
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f87171' }} />
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#fbbf24' }} />
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#34d399' }} />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: C.onSurfaceVariant }}>
                FlowPilot Workspace — Inbox Telemetry
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: C.surfaceContainer,
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 600,
                color: C.primary,
              }}
            >
              <CheckCircle2 size={13} />
              <span>Copilot Active (99.4% intent accuracy)</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {/* Categories sidebar */}
            <div style={{ borderRight: `1px solid ${C.borderLight}`, paddingRight: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: C.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Triage Queues
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div
                  onClick={() => setActiveCategory('priority')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: activeCategory === 'priority' ? C.primaryContainer : 'transparent',
                    color: activeCategory === 'priority' ? C.onPrimary : C.onSurfaceVariant,
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Filter size={13} /> Priority Actions
                  </span>
                  <span style={{ backgroundColor: activeCategory === 'priority' ? C.primary : C.surfaceContainerHigh, color: activeCategory === 'priority' ? '#ffffff' : C.onSurface, padding: '1px 6px', borderRadius: '9999px', fontSize: '10px' }}>
                    4
                  </span>
                </div>
                <div
                  onClick={() => setActiveCategory('handled')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: activeCategory === 'handled' ? C.primaryContainer : 'transparent',
                    color: activeCategory === 'handled' ? C.onPrimary : C.onSurfaceVariant,
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} /> Auto-Resolved
                  </span>
                  <span style={{ backgroundColor: activeCategory === 'handled' ? C.primary : C.surfaceContainerHigh, color: activeCategory === 'handled' ? '#ffffff' : C.onSurface, padding: '1px 6px', borderRadius: '9999px', fontSize: '10px' }}>
                    28
                  </span>
                </div>
                <div
                  onClick={() => setActiveCategory('attention')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: activeCategory === 'attention' ? C.primaryContainer : 'transparent',
                    color: activeCategory === 'attention' ? C.onPrimary : C.onSurfaceVariant,
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={13} /> Follow-Up Needed
                  </span>
                  <span style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', padding: '1px 6px', borderRadius: '9999px', fontSize: '10px' }}>
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Email list preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: C.brandPeach, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: C.secondary, fontSize: '11px' }}>
                      SJ
                    </span>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>Sarah Jenkins (VP Strategy, Acme Corp)</div>
                      <div style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Q4 Enterprise Agreement &amp; Security Addendum</div>
                    </div>
                  </div>
                  <span style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '9999px' }}>
                    High Priority
                  </span>
                </div>
                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '10px 12px', borderRadius: '8px', fontSize: '12px', color: C.onSurfaceVariant, border: `1px solid ${C.borderLight}`, lineHeight: 1.5 }}>
                  <strong style={{ color: C.onSurface }}>Executive Summary:</strong> Sarah is requesting updated SOC 2 compliance documentation and revised pricing for 500 seats. Suggested action: Send pre-approved enterprise bundle.
                </div>
              </div>

              <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: C.surfaceContainerLowest, border: `1px solid ${C.borderLight}`, opacity: 0.85 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: C.surfaceContainerHigh, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: C.onSurface, fontSize: '11px' }}>
                      ML
                    </span>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>Marcus Lee</div>
                      <div style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Engineering Sync Notes</div>
                    </div>
                  </div>
                  <span style={{ backgroundColor: C.primaryContainer, color: C.onPrimary, fontSize: '10px', fontWeight: 600, padding: '3px 8px', borderRadius: '9999px' }}>
                    Auto-Handled
                  </span>
                </div>
                <p style={{ fontSize: '11px', color: C.onSurfaceVariant, margin: '6px 0 0 36px' }}>
                  Auto-replied with confirmed availability and meeting invitation attached.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTANT THREAD INTELLIGENCE SECTION */}
      <section style={{ padding: '72px 32px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto 56px auto', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', display: 'block', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Operational Clarity
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 800, color: C.onSurface, marginBottom: '14px' }}>
            Instant Intelligence From Every Thread
          </h2>
          <p style={{ fontSize: '16px', color: C.onSurfaceVariant, lineHeight: 1.6 }}>
            Eliminate hours spent scrolling through lengthy email chains. FlowPilot extracts core deliverables, timeline expectations, and decision items in seconds.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))', gap: '28px', alignItems: 'center' }}>
          <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '28px', borderRadius: '16px', border: `1px solid ${C.borderLight}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${C.borderLight}`, paddingBottom: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', color: C.onSurfaceVariant, fontWeight: 600, textTransform: 'uppercase' }}>
                Raw Inbound Email Thread (42 lines)
              </span>
              <span style={{ fontSize: '10px', color: '#dc2626', fontWeight: 600, backgroundColor: '#fee2e2', padding: '2px 8px', borderRadius: '4px' }}>
                Unstructured
              </span>
            </div>
            <p style={{ fontSize: '13px', color: C.onSurfaceVariant, lineHeight: 1.6, marginBottom: '8px' }}>
              "Hi team, following up on our sync last Tuesday regarding the API migration. As discussed, there are several edge cases with the authentication gateway that might delay phase 2 rollout. Let's schedule a quick sync tomorrow morning if possible, or alternatively Thursday afternoon. Also, please review the attached PDF spec sheet when you get a chance..."
            </p>
            <div style={{ fontSize: '11px', color: C.onSurfaceVariant, fontStyle: 'italic', opacity: 0.7 }}>
              ...35 more lines of back-and-forth discussion
            </div>
          </div>

          <div style={{ backgroundColor: C.primaryContainer, color: C.onPrimary, padding: '28px', borderRadius: '16px', boxShadow: '0 12px 28px rgba(1, 96, 90, 0.18)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: '12px', marginBottom: '18px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                FlowPilot Structured Briefing
              </span>
              <span style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '9999px' }}>
                Priority Action
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px', lineHeight: 1.5 }}>
              <div>
                <strong style={{ display: 'block', fontSize: '10px', color: C.onPrimaryContainer, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  Core Issue:
                </strong>
                API migration phase 2 delayed due to authentication gateway edge cases.
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '10px', color: C.onPrimaryContainer, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  Recommended Action:
                </strong>
                Hold a 30-minute sync Thursday 15:00 EST with engineering leads.
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '10px', color: C.onPrimaryContainer, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  Context &amp; Attachments:
                </strong>
                Security spec sheet attached; calendar availability verified.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DRAFT REVIEW & APPROVAL SECTION */}
      <section style={{ padding: '72px 32px', backgroundColor: C.surfaceContainerLow, borderTop: `1px solid ${C.borderLight}`, borderBottom: `1px solid ${C.borderLight}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', display: 'block', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Human-in-the-Loop Governance
              </span>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 800, color: C.onSurface, marginBottom: '16px', lineHeight: 1.2 }}>
                AI does the drafting. You make the call.
              </h2>
              <p style={{ fontSize: '16px', color: C.onSurfaceVariant, lineHeight: 1.6, marginBottom: '24px' }}>
                FlowPilot adapts to your specific tone, vocabulary, and business policies. You inspect the drafted reply in one view and authorize dispatch with a single click.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color={C.primaryContainer} />
                  <span style={{ fontSize: '14px', color: C.onSurface, fontWeight: 500 }}>
                    Tone matching calibrated to executive correspondence
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color={C.primaryContainer} />
                  <span style={{ fontSize: '14px', color: C.onSurface, fontWeight: 500 }}>
                    Granular approval rules based on recipient domains
                  </span>
                </div>
              </div>
            </div>

            {/* Draft Review Box */}
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '24px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${C.borderLight}`, paddingBottom: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '11px', color: C.onSurfaceVariant, fontWeight: 700, textTransform: 'uppercase' }}>
                  Draft Review Mode
                </span>
                <span style={{ backgroundColor: draftStatus.includes('✓') ? '#d1fae5' : '#e0f2fe', color: draftStatus.includes('✓') ? '#065f46' : '#0369a1', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
                  {draftStatus}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: C.onSurfaceVariant }}>
                  <strong>To:</strong> Sarah Jenkins &lt;s.jenkins@acme.com&gt;
                </div>
                <div style={{ fontSize: '12px', color: C.onSurfaceVariant }}>
                  <strong>Subject:</strong> Re: Q4 Enterprise Agreement &amp; Security Addendum
                </div>
                <div style={{ backgroundColor: C.surfaceContainerLow, padding: '14px', borderRadius: '10px', fontSize: '13px', color: C.onSurface, lineHeight: 1.5, border: `1px solid ${C.borderLight}` }}>
                  "Hi Sarah, thanks for following up. I've reviewed the updated security addendum with our legal team and we are fully aligned. I have attached the signed copy along with the 500-seat enterprise bundle breakdown. Let me know if you need any additional clarification prior to Friday."
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setDraftStatus('Dispatched via Gmail ✓')}
                  style={{
                    flex: 1,
                    backgroundColor: C.secondaryContainer,
                    color: '#ffffff',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Send size={14} /> Approve &amp; Send
                </button>
                <button
                  onClick={() => setDraftStatus('Editing Draft...')}
                  style={{
                    backgroundColor: C.surfaceContainerHigh,
                    color: C.onSurface,
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: `1px solid ${C.borderLight}`,
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section style={{ padding: '72px 32px', backgroundColor: C.surface }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '30px', fontWeight: 800, color: C.onSurface, margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                style={{
                  backgroundColor: C.surfaceContainerLowest,
                  padding: '20px 24px',
                  borderRadius: '14px',
                  border: `1px solid ${C.borderLight}`,
                  cursor: 'pointer',
                  boxShadow: openFaq === idx ? '0 4px 14px rgba(0,0,0,0.03)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 700, color: C.onSurface, margin: 0 }}>
                    {faq.q}
                  </h4>
                  {openFaq === idx ? <ChevronUp size={18} color={C.primary} /> : <ChevronDown size={18} color={C.primary} />}
                </div>
                {openFaq === idx && (
                  <p style={{ fontSize: '13px', color: C.onSurfaceVariant, lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section style={{ padding: '88px 32px', backgroundColor: C.primaryContainer, color: C.onPrimary, textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(30px, 4.4vw, 44px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            READY TO RECLAIM YOUR INBOX?
          </h2>
          <p style={{ fontSize: '17px', color: C.onPrimaryContainer, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 36px auto' }}>
            Start your 14-day free trial or book an operational walkthrough with our team.
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
