import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  MessageSquare,
  Mail,
  Calendar,
  Layers,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

// Local enterprise imagery from src/styles/Images
import valueSectionImg from '../../styles/Images/executive-office.jfif';

/* ─────────────────────────────────────────────────────────────────────────────
   STRICT BRAND DESIGN SYSTEM TOKENS
───────────────────────────────────────────────────────────────────────────── */
const C = {
  primary: '#004642',             // Primary Teal
  primaryContainer: '#01605A',    // Deep Mid Teal
  accent: '#FE852C',              // Brand Orange
  peach: '#FFD0A8',               // Peach Accent
  background: '#FDF9F4',          // Soft Cream
  surfaceWhite: '#FFFFFF',        // Pure White
  surfaceLow: '#F7F3EE',          // Off-white / Low Surface
  surfaceMid: '#F1EDE8',          // Mid Surface
  text: '#1A1C1D',                // Primary Text
  textMuted: '#3F4947',           // Muted Text
  borderLight: '#EAEAEA',         // Crisp Light Border
  borderTeal: 'rgba(1, 96, 90, 0.18)',
  radiusCard: '8px',              // Strict 8px card radius
  radiusButton: '8px',            // Strict 8px button radius
  radiusToggle: '6px',            // Strict 6px toggle/input radius
  radiusContainer: '12px',        // Max 12px container radius
};

/* ─────────────────────────────────────────────────────────────────────────────
   PRICING DATA
───────────────────────────────────────────────────────────────────────────── */
const PLANS = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'For solo professionals and small teams starting with automation.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    popular: false,
    ctaText: 'Start with Starter',
    ctaLink: '/book-a-demo',
    features: [
      'Gmail & Outlook automated triage',
      'AI draft generation matching your tone',
      'Direct WhatsApp status notifications',
      'Basic calendar conflict detection',
      'Human-in-the-loop approval gates',
      'Standard email support (24h SLA)',
    ],
  },
  {
    id: 'growth',
    name: 'GROWTH',
    tagline: 'For growing businesses that want AI-powered operations across email, WhatsApp and calendar.',
    monthlyPrice: 149,
    yearlyPrice: 119,
    popular: true,
    ctaText: 'Choose Growth Plan',
    ctaLink: '/book-a-demo',
    features: [
      'Multi-inbox autonomous zero-triage',
      'Interactive WhatsApp AI approval agent',
      'Full calendar buffer & conflict resolution',
      'Weekly executive intelligence summaries',
      'Bi-directional CRM & spreadsheet sync',
      'Priority support with 4h response time',
    ],
  },
  {
    id: 'scale',
    name: 'SCALE',
    tagline: 'For companies requiring advanced workflows, multiple processes and operational automation.',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    popular: false,
    ctaText: 'Schedule Architecture Review',
    ctaLink: '/book-a-demo',
    features: [
      'Unlimited custom multi-step workflows',
      'Multi-department approval hierarchy',
      'Custom LLM fine-tuning & vocabulary',
      'SOC2-compliant audit logs & SSO',
      'Dedicated operations solutions engineer',
      '24/7 emergency phone & Slack channel',
    ],
  },
];

const COMPARISON_ROWS = [
  {
    feature: 'Email Automation & Triage',
    category: 'Core Ingestion',
    starter: 'Up to 2 inboxes',
    growth: 'Up to 10 inboxes',
    scale: 'Unlimited inboxes',
  },
  {
    feature: 'WhatsApp AI Agent',
    category: 'Mobile Control',
    starter: 'Alerts only',
    growth: 'Interactive 1-Tap Approvals',
    scale: 'Multi-agent group routing',
  },
  {
    feature: 'Weekly Email Summary',
    category: 'Intelligence',
    starter: 'Standard Digest',
    growth: 'Executive PDF + Metrics',
    scale: 'Custom Analytics Reports',
  },
  {
    feature: 'Calendar Automation',
    category: 'Scheduling',
    starter: 'Basic Availability',
    growth: 'Smart Buffer & Re-booking',
    scale: 'Multi-executive coordination',
  },
  {
    feature: 'Custom Workflows',
    category: 'Automation',
    starter: '1 active workflow',
    growth: 'Up to 5 active workflows',
    scale: 'Unlimited custom workflows',
  },
  {
    feature: 'Analytics & Time-Saved Tracking',
    category: 'Telemetry',
    starter: '30-day history',
    growth: 'Full annual history',
    scale: 'Real-time API telemetry',
  },
  {
    feature: 'Team Roles & Access Gates',
    category: 'Governance',
    starter: 'Single Operator',
    growth: 'Up to 5 Team Members',
    scale: 'Unlimited with RBAC & SSO',
  },
  {
    feature: 'Priority Support & SLA',
    category: 'Service Level',
    starter: 'Email (24h SLA)',
    growth: 'Priority Email & Chat (4h)',
    scale: 'Dedicated 24/7 Solutions Lead',
  },
];

const PRICING_FAQS = [
  {
    q: 'Can I change plans later?',
    a: 'Yes, you can upgrade, downgrade, or adjust user seats anytime from your account dashboard. Prorated credits apply automatically to your next billing cycle.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, both Starter and Growth plans include a 14-day fully featured trial with zero upfront charge, allowing you to test autonomous triage with your live inbox.',
  },
  {
    q: 'What happens if I need a custom workflow?',
    a: 'Our solutions engineering team can configure bespoke conditional logic, API webhooks, or custom CRM rules on the Scale tier or as an add-on to Growth.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. There are no long-term lock-ins on monthly subscriptions. You can cancel with one click, and you will retain access until the end of your prepaid period.',
  },
  {
    q: 'Do you offer custom enterprise plans?',
    a: 'Yes. For multi-entity corporations, specialized compliance mandates (HIPAA, SOC2 Type II), or on-premise security requirements, we provide tailored enterprise agreements.',
  },
];

export function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div style={{ backgroundColor: C.background, color: C.text, minHeight: '100vh', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      {/* ════════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '48px',
          paddingLeft: '24px',
          paddingRight: '24px',
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 14px',
            borderRadius: C.radiusToggle,
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
          PRICING
        </div>

        {/* Orange Accent Line */}
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
            margin: '0 0 16px 0',
          }}
        >
          AI OPERATIONS THAT PAY FOR THEMSELVES.
        </h1>

        {/* Supporting text */}
        <p
          style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            lineHeight: 1.6,
            color: C.textMuted,
            maxWidth: '620px',
            margin: '0 auto 36px auto',
          }}
        >
          Replace administrative drag with autonomous execution. Predictable pricing with zero hidden fees and full human approval control.
        </p>

        {/* Billing Toggle (Premium, subtle, not oversized) */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: C.surfaceMid,
            padding: '4px',
            borderRadius: C.radiusToggle,
            border: `1px solid ${C.borderLight}`,
          }}
        >
          <button
            type="button"
            onClick={() => setIsYearly(false)}
            style={{
              padding: '8px 20px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              backgroundColor: !isYearly ? C.surfaceWhite : 'transparent',
              color: !isYearly ? C.primary : C.textMuted,
              boxShadow: !isYearly ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.15s ease',
            }}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() => setIsYearly(true)}
            style={{
              padding: '8px 20px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              backgroundColor: isYearly ? C.surfaceWhite : 'transparent',
              color: isYearly ? C.primary : C.textMuted,
              boxShadow: isYearly ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.15s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Annual Billing
            <span
              style={{
                backgroundColor: 'rgba(254, 133, 44, 0.15)',
                color: C.accent,
                fontSize: '11px',
                fontWeight: 700,
                padding: '2px 6px',
                borderRadius: '4px',
              }}
            >
              Save 20%
            </span>
          </button>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. PRICING PLANS (3 CARDS, GROWTH EMPHASIZED)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        id="plans"
        style={{
          padding: '24px 24px 80px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {PLANS.map((plan) => {
            const priceVal = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isGrowth = plan.popular;

            return (
              <div
                key={plan.id}
                style={{
                  backgroundColor: isGrowth ? C.surfaceWhite : C.surfaceWhite,
                  borderRadius: C.radiusCard,
                  border: isGrowth ? `2px solid ${C.primaryContainer}` : `1px solid ${C.borderLight}`,
                  borderTop: isGrowth ? `4px solid ${C.primaryContainer}` : `1px solid ${C.borderLight}`,
                  boxShadow: isGrowth
                    ? '0 12px 32px rgba(0, 70, 66, 0.12)'
                    : '0 2px 8px rgba(0, 70, 66, 0.04)',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transform: isGrowth ? 'scale(1.02)' : 'none',
                  zIndex: isGrowth ? 2 : 1,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                {/* Most Popular Badge for Growth */}
                {isGrowth && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: C.primaryContainer,
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 14px',
                      borderRadius: '4px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '14px',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      color: isGrowth ? C.accent : C.primaryLight,
                      marginBottom: '8px',
                    }}
                  >
                    {plan.name}
                  </div>

                  {/* Short Tagline */}
                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.5,
                      color: C.textMuted,
                      minHeight: '40px',
                      margin: '0 0 24px 0',
                    }}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                      <span
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: typeof priceVal === 'number' ? '44px' : '38px',
                          fontWeight: 800,
                          color: C.primary,
                          lineHeight: 1.1,
                        }}
                      >
                        {typeof priceVal === 'number' ? `$${priceVal}` : priceVal}
                      </span>
                      {typeof priceVal === 'number' && (
                        <span style={{ fontSize: '14px', color: C.textMuted, fontWeight: 500 }}>
                          / month
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '12px', color: C.textMuted, marginTop: '6px' }}>
                      {typeof priceVal === 'number'
                        ? isYearly
                          ? 'Billed annually with 20% savings'
                          : 'Billed monthly, cancel anytime'
                        : 'Custom operational architecture & SLA'}
                    </div>
                  </div>

                  <div style={{ height: '1px', backgroundColor: C.borderLight, marginBottom: '24px' }} />

                  {/* Feature highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {plan.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: isGrowth ? 'rgba(254, 133, 44, 0.15)' : 'rgba(1, 96, 90, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <Check size={11} color={isGrowth ? C.accent : C.primaryContainer} strokeWidth={3} />
                        </div>
                        <span style={{ fontSize: '13px', lineHeight: 1.5, color: C.text }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary CTA */}
                <Link
                  to={plan.ctaLink}
                  style={{
                    backgroundColor: isGrowth ? C.accent : C.surfaceLow,
                    color: isGrowth ? '#FFFFFF' : C.primary,
                    border: isGrowth ? 'none' : `1.5px solid ${C.primaryContainer}`,
                    padding: '13px 20px',
                    borderRadius: C.radiusButton,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '14px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: isGrowth ? '0 4px 12px rgba(254, 133, 44, 0.3)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (isGrowth) {
                      e.currentTarget.style.backgroundColor = '#e57220';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    } else {
                      e.currentTarget.style.backgroundColor = C.primaryContainer;
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isGrowth) {
                      e.currentTarget.style.backgroundColor = C.accent;
                      e.currentTarget.style.transform = 'none';
                    } else {
                      e.currentTarget.style.backgroundColor = C.surfaceLow;
                      e.currentTarget.style.color = C.primary;
                    }
                  }}
                >
                  {plan.ctaText} <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. VALUE SECTION (SPLIT: LARGE PHOTOGRAPHY + SHORT BENEFIT COPY)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: C.surfaceWhite,
          borderTop: `1px solid ${C.borderLight}`,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left: Professional Business Photography */}
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
                src={valueSectionImg}
                alt="Executive Business Operations Center"
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
                <ShieldCheck size={18} color={C.accent} />
                Zero Hallucinations • 100% Deterministic Approvals
              </div>
            </div>

            {/* Right: What You Are Actually Paying For */}
            <div>
              <div
                style={{
                  width: '36px',
                  height: '3.5px',
                  backgroundColor: C.accent,
                  marginBottom: '14px',
                  borderRadius: '2px',
                }}
              />
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  fontWeight: 800,
                  color: C.primary,
                  lineHeight: 1.25,
                  margin: '0 0 16px 0',
                }}
              >
                What You're Actually Investing In
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: C.textMuted,
                  margin: '0 0 24px 0',
                }}
              >
                FlowPilot is not another noisy SaaS tool to monitor. It is an autonomous operations workforce that eliminates administrative friction so your team focuses entirely on high-leverage revenue work.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  {
                    icon: Mail,
                    title: 'Automated Email Ingestion & Drafting',
                    desc: 'Inbound requests parsed and drafted with full context before you open your inbox.',
                  },
                  {
                    icon: MessageSquare,
                    title: 'WhatsApp Operations Briefs',
                    desc: 'One-tap authorization loop for high-value client replies directly from your phone.',
                  },
                  {
                    icon: Calendar,
                    title: 'Conflict-Free Calendar Protection',
                    desc: 'Autonomous meeting scheduling with automated buffer blocks for deep executive focus.',
                  },
                  {
                    icon: Clock,
                    title: '20+ Reclaimed Weekly Hours',
                    desc: 'Measurable time recovery documented in every weekly audit digest.',
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(1, 96, 90, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Icon size={18} color={C.primaryContainer} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '14px', fontWeight: 700, color: C.primary, margin: '0 0 2px 0' }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: '13px', lineHeight: 1.5, color: C.textMuted, margin: 0 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. ROI / VALUE STRIP (CLEAN OUTCOMES, REALISTIC METRICS)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '60px 24px',
          backgroundColor: C.background,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              { stat: '18–24 hrs', label: 'Hours back every week', detail: 'Reclaimed per operations lead' },
              { stat: '85%', label: 'Fewer repetitive tasks', detail: 'Across inbox triage & calendar prep' },
              { stat: '< 30 sec', label: 'Faster customer response', detail: 'Through direct WhatsApp approvals' },
              { stat: 'One Layer', label: 'Single operations brain', detail: 'Connecting Gmail, WhatsApp & CRM' },
            ].map((metric, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: C.surfaceWhite,
                  borderRadius: C.radiusCard,
                  border: `1px solid ${C.borderLight}`,
                  padding: '24px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 70, 66, 0.03)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '32px',
                    fontWeight: 800,
                    color: C.primary,
                    lineHeight: 1.1,
                    marginBottom: '6px',
                  }}
                >
                  {metric.stat}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: C.primaryLight,
                    marginBottom: '4px',
                  }}
                >
                  {metric.label}
                </div>
                <div style={{ fontSize: '12px', color: C.textMuted }}>
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6. COMPARISON / WHAT'S INCLUDED (COMPACT STRUCTURED TABLE)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: C.surfaceWhite,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
                fontSize: 'clamp(24px, 3vw, 34px)',
                fontWeight: 800,
                color: C.primary,
                margin: '0 0 8px 0',
              }}
            >
              Compare Plan Capabilities
            </h2>
            <p style={{ fontSize: '15px', color: C.textMuted, margin: 0 }}>
              Detailed breakdown of features across all three tiers.
            </p>
          </div>

          {/* Structured Responsive Table */}
          <div
            style={{
              backgroundColor: C.surfaceWhite,
              borderRadius: C.radiusCard,
              border: `1px solid ${C.borderLight}`,
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0, 70, 66, 0.04)',
            }}
          >
            {/* Table Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1.2fr 1fr',
                backgroundColor: C.surfaceLow,
                padding: '16px 20px',
                borderBottom: `1px solid ${C.borderLight}`,
                fontSize: '13px',
                fontWeight: 800,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: C.primary,
              }}
            >
              <div>Feature Category</div>
              <div style={{ textAlign: 'center' }}>Starter</div>
              <div style={{ textAlign: 'center', color: C.accent }}>Growth (Popular)</div>
              <div style={{ textAlign: 'center' }}>Scale</div>
            </div>

            {/* Table Rows */}
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1.2fr 1fr',
                  padding: '14px 20px',
                  borderBottom: idx < COMPARISON_ROWS.length - 1 ? `1px solid ${C.borderLight}` : 'none',
                  backgroundColor: idx % 2 === 1 ? C.surfaceLow : C.surfaceWhite,
                  fontSize: '13px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: C.primary }}>{row.feature}</div>
                  <div style={{ fontSize: '11px', color: C.textMuted }}>{row.category}</div>
                </div>
                <div style={{ textAlign: 'center', color: C.textMuted }}>{row.starter}</div>
                <div style={{ textAlign: 'center', fontWeight: 600, color: C.primaryContainer }}>
                  {row.growth}
                </div>
                <div style={{ textAlign: 'center', color: C.primary, fontWeight: 500 }}>
                  {row.scale}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7. FAQ PREVIEW (COMPACT ACCORDION WITH 5 SPECIFIED QUESTIONS)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: C.background,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 800,
                color: C.primary,
                margin: '0 0 8px 0',
              }}
            >
              Frequently Asked Pricing Questions
            </h2>
            <p style={{ fontSize: '14px', color: C.textMuted, margin: 0 }}>
              Need more details? Here are the most common inquiries from operations leaders.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {PRICING_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: C.surfaceWhite,
                    borderRadius: C.radiusCard,
                    border: `1px solid ${C.borderLight}`,
                    borderLeft: isOpen ? `4px solid ${C.accent}` : `4px solid ${C.primaryContainer}`,
                    overflow: 'hidden',
                    boxShadow: isOpen
                      ? '0 6px 18px rgba(0, 70, 66, 0.06)'
                      : '0 1px 3px rgba(0, 70, 66, 0.02)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      padding: '18px 22px',
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
                        fontSize: '15px',
                        fontWeight: 600,
                        color: isOpen ? C.accent : C.primary,
                        transition: 'color 0.15s ease',
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '4px',
                        backgroundColor: isOpen ? 'rgba(254, 133, 44, 0.12)' : C.surfaceLow,
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown size={16} color={isOpen ? C.accent : C.primaryContainer} />
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? '240px' : '0',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        padding: '0 22px 18px 22px',
                        borderTop: `1px solid ${C.borderLight}`,
                        paddingTop: '12px',
                      }}
                    >
                      <p style={{ fontSize: '14px', lineHeight: 1.6, color: C.textMuted, margin: 0 }}>
                        {faq.a}
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
          8. FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, #002d2a 100%)`,
          padding: '90px 24px',
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
              padding: '4px 12px',
              borderRadius: C.radiusToggle,
              backgroundColor: 'rgba(254, 133, 44, 0.18)',
              border: '1px solid rgba(254, 133, 44, 0.35)',
              color: C.accent,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '18px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            START SAVING 20+ HOURS PER WEEK
          </div>

          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
            }}
          >
            READY TO PUT YOUR OPERATIONS ON AUTOPILOT?
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '560px',
              margin: '0 auto 32px auto',
            }}
          >
            Join forward-thinking operations and executive teams deploying FlowPilot AI with guaranteed human oversight.
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
              to="/solutions"
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
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
