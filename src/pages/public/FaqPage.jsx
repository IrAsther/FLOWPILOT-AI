import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  ArrowRight,
  Zap,
  ShieldCheck,
  MessageSquare,
  Layers,
  Rocket,
  Mail,
  Calendar,
  Headphones,
  CheckCircle2,
} from 'lucide-react';

// Local curated enterprise imagery
import heroOfficeBg from '../../styles/Images/executive-office.jfif';
import supportTeamImg from '../../styles/Images/digital-agency-team.jfif';
import catSecurityImg from '../../styles/Images/email-continuity.jfif';
import catSetupImg from '../../styles/Images/sales-calendar.jfif';
import catAutomationImg from '../../styles/Images/logistics-center.jfif';
import catIntegrationsImg from '../../styles/Images/conference-room.jfif';

/* ─────────── BRAND DESIGN TOKENS ─────────── */
const C = {
  primary: '#004642',            // Primary Dark Teal
  primaryLight: '#01605A',       // Section Titles / Mid Teal
  primaryTint: 'rgba(0, 70, 66, 0.06)',
  primaryTintMedium: 'rgba(0, 70, 66, 0.12)',
  accent: '#FE852C',             // Brand Orange Accent
  accentHover: '#e57220',
  secondaryText: 'rgba(0, 70, 66, 0.75)', // Branded secondary text
  surfaceCream: '#FDF9F4',       // Soft Cream
  surfaceAlt: '#F7F3EE',
  surfaceWhite: '#FFFFFF',
  borderLight: '#EAEAEA',
  borderTeal: 'rgba(0, 70, 66, 0.14)',
  cardRadius: '8px',
};

/* ─────────── FAQ DATA (PRESERVED EXACTLY) ─────────── */
const FAQ_ITEMS = [
  {
    category: 'Getting Started',
    question: 'How do I get started with FlowPilot AI in my operations team?',
    answer:
      'Getting started takes under 10 minutes. Connect your Google Workspace or Microsoft 365 account via OAuth, link your WhatsApp Business number, and FlowPilot immediately starts monitoring your inbox. Our onboarding wizard guides you through every step with zero technical configuration required.',
  },
  {
    category: 'Getting Started',
    question: 'How does human-controlled AI operation work?',
    answer:
      'FlowPilot never acts without your authorization. When an important email arrives, our AI parses intent, drafts a response, and sends a brief to your WhatsApp with a one-tap "Approve & Send" or "Edit Draft" option. You remain the decision-maker — the AI handles the drafting, analysis, and scheduling.',
  },
  {
    category: 'Getting Started',
    question: 'What types of businesses benefit most from FlowPilot?',
    answer:
      'FlowPilot is built for operations-heavy businesses: consulting agencies, professional services firms, real estate teams, legal practices, and enterprise sales operations. If your team spends more than 3 hours per day managing email and coordinating via chat, FlowPilot typically saves 15–25 hours per week.',
  },
  {
    category: 'Automation',
    question: 'What kinds of workflows can FlowPilot automate?',
    answer:
      'FlowPilot automates inbound email triage and categorization, draft response generation, meeting scheduling and calendar conflict resolution, WhatsApp alert routing with approval gates, and CRM entry updates. You can build deterministic rule chains using our visual Workflow Builder — no code required.',
  },
  {
    category: 'Automation',
    question: 'Can FlowPilot integrate with WhatsApp Business API?',
    answer:
      'Yes. FlowPilot connects directly to the official WhatsApp Business API. You receive structured operational briefs on your WhatsApp with formatted summaries, approval buttons, and draft previews. You can approve, edit, or escalate — all from a single WhatsApp message thread.',
  },
  {
    category: 'Automation',
    question: 'What happens if the AI is not confident about a response?',
    answer:
      'FlowPilot applies strict confidence thresholds. If the AI confidence score falls below your configured threshold (default: 98%), the request is automatically escalated to you via WhatsApp with an "Escalation Required" flag. No ambiguous responses are ever dispatched without your explicit review.',
  },
  {
    category: 'WhatsApp',
    question: 'Can I approve and dispatch emails directly from WhatsApp?',
    answer:
      'Yes. FlowPilot sends you a formatted WhatsApp message with the email summary, the AI-drafted response, and quick-action buttons. One tap approves and dispatches — FlowPilot sends the email via your Gmail or Outlook SMTP. The entire approval loop typically takes under 30 seconds.',
  },
  {
    category: 'WhatsApp',
    question: 'Can multiple team members receive WhatsApp alerts?',
    answer:
      'Yes. On Scale and Enterprise plans, you can configure team-based routing rules. Different types of emails — e.g., client escalations, partnership requests, legal notices — can be routed to specific team members or WhatsApp groups with tailored alert formats.',
  },
  {
    category: 'Integrations',
    question: 'How do Gmail and Google Calendar integrations function?',
    answer:
      'FlowPilot connects via secure Google OAuth. It reads incoming emails in real time, identifies actionable requests, drafts replies using your personal tone profile, and schedules meetings by checking calendar availability automatically. No IMAP access is required — we use Google API scopes.',
  },
  {
    category: 'Integrations',
    question: 'What CRM and third-party tools are supported?',
    answer:
      'FlowPilot currently integrates with HubSpot, Salesforce, Pipedrive, Notion, Slack, and Google Drive out of the box. Custom webhook connections to any REST API are available on Enterprise plans. Our integration library grows with every monthly product release.',
  },
  {
    category: 'Security',
    question: 'Is my company data secure and compliant with GDPR?',
    answer:
      'FlowPilot is SOC2 Type II certified and fully GDPR compliant. All data is encrypted in transit using TLS 1.3 and at rest using AES-256. We use ephemeral processing — email content is processed in memory for analysis and never persistently stored in our infrastructure beyond your defined retention policy.',
  },
  {
    category: 'Security',
    question: 'Does FlowPilot use my business data to train public AI models?',
    answer:
      'No. Your proprietary business communications, client data, and operational records are never used to train any public AI model. Your data is yours exclusively. FlowPilot uses pre-trained enterprise language models that are isolated per tenant with strict data residency controls.',
  },
  {
    category: 'Billing',
    question: 'How does FlowPilot pricing and usage billing work?',
    answer:
      'FlowPilot offers three plans: Starter ($89/mo), Growth ($249/mo), and Enterprise (custom). Usage is measured by the number of AI-processed messages per month. Overage is billed at a flat per-message rate with no surprise spikes. Annual plans receive a 20% discount and dedicated onboarding support.',
  },
  {
    category: 'Billing',
    question: 'Can I invite multiple team members with different permission levels?',
    answer:
      'Yes. On Growth and Enterprise plans, you can invite unlimited operators with role-based access control. Roles include Owner, Admin, Operator, and Viewer. Each role has configurable access to inbox triage, workflow management, billing, and team administration.',
  },
];

const CATEGORIES = ['All Topics', 'Getting Started', 'Automation', 'WhatsApp', 'Integrations', 'Security', 'Billing'];

// 4 Enterprise Category Cards with local photography
const VISUAL_CATEGORIES = [
  {
    id: 'Security',
    category: 'Security',
    title: 'Security & Privacy',
    desc: 'SOC2 Type II, TLS 1.3, GDPR compliance & data governance.',
    icon: ShieldCheck,
    img: catSecurityImg,
  },
  {
    id: 'Getting Started',
    category: 'Getting Started',
    title: 'Onboarding & Setup',
    desc: 'Connect Google Workspace, Microsoft 365 & WhatsApp in minutes.',
    icon: Rocket,
    img: catSetupImg,
  },
  {
    id: 'Automation',
    category: 'Automation',
    title: 'Workflow Automation',
    desc: 'Deterministic rules, AI draft triggers & human approval routing.',
    icon: Zap,
    img: catAutomationImg,
  },
  {
    id: 'Integrations',
    category: 'Integrations',
    title: 'Enterprise Integrations',
    desc: 'Native connectors for WhatsApp, CRMs, Calendars & Webhooks.',
    icon: Layers,
    img: catIntegrationsImg,
  },
];

export function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const [openIdx, setOpenIdx] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'All Topics' || item.category === activeCategory;
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setOpenIdx(null);
    const el = document.getElementById('faq-questions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div style={{ backgroundColor: C.surfaceWhite, color: C.primary, minHeight: '100vh' }}>
      {/* ════════════════════════════════════════════════════════════════════
          1. HERO SECTION WITH LARGE BACKGROUND IMAGE & ENTERPRISE OVERLAY
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          backgroundImage: `url("${heroOfficeBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 24px 80px',
          overflow: 'hidden',
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        {/* Glassmorphism Blur Backdrop */}
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
            maxWidth: '840px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Small Badge */}
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
            <Headphones size={14} color={C.primaryLight} />
            Support Center
          </div>

          {/* Orange Accent Bar */}
          <div
            style={{
              width: '60px',
              height: '4px',
              backgroundColor: C.accent,
              margin: '0 auto 20px auto',
              borderRadius: '2px',
            }}
          />

          {/* Main Title */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: C.primary,
              margin: '0 0 16px 0',
            }}
          >
            Frequently Asked Questions
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(16px, 1.5vw, 19px)',
              lineHeight: 1.5,
              color: C.secondaryText,
              maxWidth: '620px',
              margin: '0 auto 36px auto',
            }}
          >
            Everything you need to know about FlowPilot AI, operations automation, data privacy, and human-in-the-loop workflows.
          </p>

          {/* Search Input */}
          <div
            style={{
              position: 'relative',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: searchFocused ? C.accent : C.primaryLight,
                transition: 'color 0.2s',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search by topic, keyword, or integration..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIdx(null);
              }}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              style={{
                width: '100%',
                padding: '16px 52px 16px 52px',
                borderRadius: C.cardRadius,
                border: `1.5px solid ${searchFocused ? C.primaryLight : C.borderLight}`,
                backgroundColor: C.surfaceWhite,
                fontSize: '15px',
                fontFamily: "'Inter', sans-serif",
                color: C.primary,
                outline: 'none',
                boxShadow: searchFocused
                  ? `0 0 0 4px ${C.primaryTintMedium}`
                  : '0 4px 16px rgba(0, 70, 66, 0.05)',
                transition: 'all 0.2s ease',
                boxSizing: 'border-box',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: C.secondaryText,
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. HOW CAN WE HELP? — DEDICATED HUMAN-CENTERED SUPPORT SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: C.surfaceCream,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
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
                fontSize: 'clamp(24px, 3vw, 34px)',
                fontWeight: 700,
                color: C.primary,
                margin: '0 0 10px 0',
              }}
            >
              How Can We Help You Today?
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                color: C.secondaryText,
                maxWidth: '540px',
                margin: '0 auto',
              }}
            >
              Our dedicated enterprise support specialists and solutions engineers are here to assist your deployment.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), 1fr))',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            {/* Left: Professional Support Image */}
            <div
              style={{
                position: 'relative',
                borderRadius: C.cardRadius,
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(0, 70, 66, 0.08)',
                border: `1px solid ${C.borderLight}`,
                backgroundColor: C.surfaceWhite,
                minHeight: '340px',
              }}
            >
              <img
                src={supportTeamImg}
                alt="FlowPilot Operations and Customer Success Team"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '340px',
                  maxHeight: '400px',
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
                  padding: '14px 18px',
                  borderRadius: C.cardRadius,
                  border: `1px solid ${C.borderLight}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: C.cardRadius,
                    backgroundColor: C.primaryTintMedium,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={20} color={C.primaryLight} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: C.primary }}>
                    Live Human Support Guaranteed
                  </div>
                  <div style={{ fontSize: '12px', color: C.secondaryText }}>
                    Average response time: &lt; 5 minutes on WhatsApp & Email
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 3 Support Channel Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Card 1: Live Chat */}
              <div
                style={{
                  backgroundColor: C.surfaceWhite,
                  borderRadius: C.cardRadius,
                  border: `1px solid ${C.borderLight}`,
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0, 70, 66, 0.03)',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: C.cardRadius,
                    backgroundColor: C.primaryTint,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MessageSquare size={22} color={C.primary} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '17px',
                      fontWeight: 700,
                      color: C.primary,
                      margin: '0 0 6px 0',
                    }}
                  >
                    Direct WhatsApp Support
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.5, color: C.secondaryText, margin: '0 0 12px 0' }}>
                    Connect directly with our operations desk from your verified WhatsApp account for real-time triage.
                  </p>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: C.accent,
                      textDecoration: 'none',
                    }}
                  >
                    Open Support Thread <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Card 2: Email Support */}
              <div
                style={{
                  backgroundColor: C.surfaceWhite,
                  borderRadius: C.cardRadius,
                  border: `1px solid ${C.borderLight}`,
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0, 70, 66, 0.03)',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
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
                    flexShrink: 0,
                  }}
                >
                  <Mail size={22} color={C.accent} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '17px',
                      fontWeight: 700,
                      color: C.primary,
                      margin: '0 0 6px 0',
                    }}
                  >
                    Enterprise Email Desk
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.5, color: C.secondaryText, margin: '0 0 12px 0' }}>
                    Send complex architectural queries or compliance verification requests to our engineering team.
                  </p>
                  <a
                    href="mailto:support@flowpilot.ai"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: C.primaryLight,
                      textDecoration: 'none',
                    }}
                  >
                    support@flowpilot.ai <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Card 3: Enterprise Assistance */}
              <div
                style={{
                  backgroundColor: C.surfaceWhite,
                  borderRadius: C.cardRadius,
                  border: `1px solid ${C.borderLight}`,
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0, 70, 66, 0.03)',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: C.cardRadius,
                    backgroundColor: C.primaryTintMedium,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Calendar size={22} color={C.primaryLight} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '17px',
                      fontWeight: 700,
                      color: C.primary,
                      margin: '0 0 6px 0',
                    }}
                  >
                    Dedicated Solutions Engineer
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.5, color: C.secondaryText, margin: '0 0 12px 0' }}>
                    Schedule a 1-on-1 workflow architecture review tailored to your company's existing CRM & stack.
                  </p>
                  <Link
                    to="/book-a-demo"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: C.primary,
                      textDecoration: 'none',
                    }}
                  >
                    Book Consultation <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. VISUAL FAQ CATEGORIES (4 TOPIC CARDS WITH IMAGES & ICONS)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '80px 24px 40px',
          backgroundColor: C.surfaceWhite,
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 700,
                color: C.primary,
                margin: '0 0 8px 0',
              }}
            >
              Explore by Knowledge Area
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                color: C.secondaryText,
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              Select a core category below to immediately filter relevant operational guides.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {VISUAL_CATEGORIES.map((item) => {
              const Icon = item.icon;
              const isSelected = activeCategory === item.category;
              return (
                <button
                  key={item.id}
                  onClick={() => handleCategorySelect(item.category)}
                  style={{
                    backgroundColor: isSelected ? C.primaryTintMedium : C.surfaceWhite,
                    border: isSelected ? `2px solid ${C.accent}` : `1px solid ${C.borderLight}`,
                    borderRadius: C.cardRadius,
                    overflow: 'hidden',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                    boxShadow: isSelected
                      ? '0 8px 24px rgba(254, 133, 44, 0.15)'
                      : '0 2px 8px rgba(0, 70, 66, 0.04)',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 70, 66, 0.09)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = isSelected
                      ? '0 8px 24px rgba(254, 133, 44, 0.15)'
                      : '0 2px 8px rgba(0, 70, 66, 0.04)';
                  }}
                >
                  {/* Category Image Header */}
                  <div style={{ height: '120px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={item.img}
                      alt={item.title}
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
                        background: 'linear-gradient(180deg, rgba(0,70,66,0.1) 0%, rgba(0,70,66,0.6) 100%)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(255,255,255,0.92)',
                        backdropFilter: 'blur(6px)',
                        padding: '6px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={16} color={C.primary} />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '16px',
                        fontWeight: 700,
                        color: C.primary,
                        marginBottom: '6px',
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        fontSize: '13px',
                        lineHeight: 1.5,
                        color: C.secondaryText,
                        margin: '0 0 16px 0',
                        flex: 1,
                      }}
                    >
                      {item.desc}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: isSelected ? C.accent : C.primaryLight,
                      }}
                    >
                      {isSelected ? 'Currently Selected' : 'View Questions'} <ArrowRight size={12} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. CATEGORY FILTER BAR & FAQ ACCORDION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        id="faq-questions-section"
        style={{
          padding: '40px 24px 100px',
          backgroundColor: C.surfaceWhite,
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '16px',
              marginBottom: '36px',
              borderBottom: `1px solid ${C.borderLight}`,
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIdx(null);
                  }}
                  style={{
                    padding: '8px 18px',
                    borderRadius: C.cardRadius,
                    border: active ? `1.5px solid ${C.primary}` : `1px solid ${C.borderLight}`,
                    backgroundColor: active ? C.primary : C.surfaceCream,
                    color: active ? '#FFFFFF' : C.primary,
                    fontSize: '13px',
                    fontWeight: active ? 700 : 500,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Results Counter / Title */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '24px',
            }}
          >
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                color: C.primary,
                margin: 0,
              }}
            >
              {activeCategory} ({filtered.length})
            </h2>
            {searchQuery && (
              <span style={{ fontSize: '13px', color: C.secondaryText }}>
                Matching "{searchQuery}"
              </span>
            )}
          </div>

          {/* Accordion Container */}
          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 24px',
                backgroundColor: C.surfaceCream,
                borderRadius: C.cardRadius,
                border: `1px solid ${C.borderLight}`,
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: C.primaryTintMedium,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                }}
              >
                <Search size={24} color={C.primaryLight} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: C.primary, margin: '0 0 8px 0' }}>
                No matching questions found
              </h3>
              <p style={{ fontSize: '14px', color: C.secondaryText, margin: '0 0 20px 0' }}>
                We couldn't find an exact answer for "{searchQuery}". You can browse all topics or speak directly to our team.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All Topics');
                }}
                style={{
                  padding: '10px 20px',
                  borderRadius: C.cardRadius,
                  backgroundColor: C.primary,
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filtered.map((item, idx) => {
                const isOpen = openIdx === idx;
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
                      aria-expanded={isOpen}
                      onClick={() => toggleAccordion(idx)}
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
                      onMouseEnter={(e) => {
                        const qSpan = e.currentTarget.querySelector('.faq-question-text');
                        if (qSpan && !isOpen) qSpan.style.color = C.primaryLight;
                      }}
                      onMouseLeave={(e) => {
                        const qSpan = e.currentTarget.querySelector('.faq-question-text');
                        if (qSpan && !isOpen) qSpan.style.color = C.primary;
                      }}
                    >
                      <span
                        className="faq-question-text"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: '16px',
                          fontWeight: 600,
                          lineHeight: 1.4,
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

                    {/* Animated Answer Box */}
                    <div
                      style={{
                        maxHeight: isOpen ? '500px' : '0',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
                      }}
                    >
                      <div
                        style={{
                          padding: '0 24px 24px 24px',
                          borderTop: `1px solid ${C.borderLight}`,
                          paddingTop: '16px',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
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
          )}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. FINAL CTA SECTION — DEEP ENTERPRISE TEAL WITH ORANGE ACCENTS
      ════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, #002e2b 100%)`,
          padding: '90px 24px',
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
            Still Have Questions?
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
            Speak Directly with an Operations Engineer
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.82)',
              maxWidth: '580px',
              margin: '0 auto 36px auto',
            }}
          >
            Whether you have custom security compliance requirements or want to see a live demo of human-in-the-loop WhatsApp actions, our team is ready.
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
              Contact Support Desk <ArrowRight size={16} />
            </Link>

            <Link
              to="/book-a-demo"
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

export default FaqPage;
