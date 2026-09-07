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
  CreditCard,
  Calendar,
  HelpCircle,
} from 'lucide-react';

/* ─────────── DESIGN TOKENS ─────────── */
const C = {
  surface: '#fdf9f4',
  surfaceLowest: '#ffffff',
  surfaceLow: '#f7f3ee',
  surfaceMid: '#f1ede8',
  surfaceHigh: '#ebe8e3',
  onSurface: '#1c1c19',
  onSurfaceVariant: '#3f4947',
  outline: '#6f7977',
  outlineVariant: 'rgba(190,201,198,0.40)',
  outlineVariantSolid: '#bec9c6',
  primary: '#004642',
  primaryContainer: '#01605a',
  onPrimary: '#ffffff',
  primaryTint: 'rgba(1,96,90,0.08)',
  primaryTintStrong: 'rgba(1,96,90,0.14)',
  secondary: '#994700',
  secondaryContainer: '#fe852c',
  onSecondary: '#ffffff',
  peach: '#FFD0A8',
  peachLight: '#fff4eb',
};

const T = {
  displayXl: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 'clamp(36px, 5vw, 60px)',
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
    fontWeight: 800,
  },
  displayLg: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 'clamp(28px, 3.5vw, 44px)',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    fontWeight: 800,
  },
  headlineLg: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '28px',
    lineHeight: '36px',
    letterSpacing: '-0.01em',
    fontWeight: 700,
  },
  headlineMd: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '22px',
    lineHeight: '30px',
    letterSpacing: '-0.008em',
    fontWeight: 700,
  },
  headlineSm: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  labelLg: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '13px',
    letterSpacing: '0.08em',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  labelMd: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '12px',
    letterSpacing: '0.06em',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  bodyLg: { fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: '26px', fontWeight: 400 },
  bodyMd: { fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: '22px', fontWeight: 400 },
  bodySm: { fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: '20px', fontWeight: 400 },
};

/* ─────────── FAQ DATA ─────────── */
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

const FEATURED_CARDS = [
  {
    icon: Rocket,
    category: 'Getting Started',
    title: 'Getting Started',
    desc: 'Account setup, workspace configuration, and team onboarding workflows.',
    color: C.primaryContainer,
    bg: C.primaryTint,
  },
  {
    icon: Zap,
    category: 'Automation',
    title: 'Automation',
    desc: 'Building autonomous AI triggers, multi-step agent flows, and logic gates.',
    color: '#994700',
    bg: C.peachLight,
  },
  {
    icon: ShieldCheck,
    category: 'Security',
    title: 'Security & Compliance',
    desc: 'SOC2 Type II, GDPR readiness, data encryption, and row-based permissions.',
    color: '#1a5276',
    bg: '#eaf3fb',
  },
  {
    icon: Layers,
    category: 'Integrations',
    title: 'Integrations',
    desc: 'Connecting WhatsApp, Gmail, Google Calendar, CRMs, and custom webhooks.',
    color: '#4a235a',
    bg: '#f5eefa',
  },
];

/* ─────────── FEATURED CARD ─────────── */
function FeaturedCard({ card, onClick }) {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

  return (
    <button
      onClick={() => onClick(card.category)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '24px',
        borderRadius: '16px',
        border: `1px solid ${hovered ? card.color + '40' : C.outlineVariant}`,
        backgroundColor: hovered ? card.bg : C.surfaceLowest,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? `0 8px 24px ${card.color}14` : '0 1px 4px rgba(0,0,0,0.04)',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          backgroundColor: card.bg,
          border: `1px solid ${card.color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={20} color={card.color} />
      </div>
      <div>
        <div style={{ ...T.headlineSm, color: C.onSurface, marginBottom: '6px' }}>{card.title}</div>
        <p style={{ ...T.bodySm, color: C.onSurfaceVariant, margin: 0 }}>{card.desc}</p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          ...T.labelMd,
          color: card.color,
          marginTop: 'auto',
        }}
      >
        Explore <ArrowRight size={12} />
      </div>
    </button>
  );
}

/* ─────────── ACCORDION ITEM ─────────── */
function AccordionItem({ item, isOpen, onToggle, idx }) {
  return (
    <div
      style={{
        borderBottom: `1px solid ${C.outlineVariant}`,
        overflow: 'hidden',
      }}
    >
      <button
        aria-expanded={isOpen}
        onClick={onToggle}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <span
          style={{
            ...T.headlineSm,
            color: isOpen ? C.primaryContainer : C.onSurface,
            transition: 'color 0.15s',
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
            borderRadius: '50%',
            backgroundColor: isOpen ? C.primaryTintStrong : C.surfaceMid,
            flexShrink: 0,
            transition: 'all 0.2s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <ChevronDown size={16} color={isOpen ? C.primaryContainer : C.outline} />
        </span>
      </button>

      {/* Animated answer */}
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <p
          style={{
            ...T.bodyMd,
            color: C.onSurfaceVariant,
            paddingBottom: '20px',
            margin: 0,
            lineHeight: '24px',
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/* ─────────── MAIN PAGE ─────────── */
export function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const [openIdx, setOpenIdx] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
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

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setOpenIdx(null);
  };

  const handleFeaturedClick = (cat) => {
    setActiveCategory(cat);
    setOpenIdx(null);
    // Scroll to accordion
    document.getElementById('faq-accordion')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      style={{
        backgroundColor: C.surface,
        color: C.onSurface,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '64px',
          textAlign: 'center',
          borderBottom: `1px solid ${C.outlineVariant}`,
          backgroundColor: C.surfaceLowest,
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '9999px',
              border: `1px solid ${C.outlineVariant}`,
              backgroundColor: C.surface,
              ...T.labelMd,
              color: C.primaryContainer,
              marginBottom: '28px',
            }}
          >
            <HelpCircle size={12} />
            FLOWPILOT KNOWLEDGE CENTER
          </div>

          {/* Headline */}
          <h1
            style={{
              ...T.displayXl,
              color: C.onSurface,
              margin: '0 0 20px 0',
            }}
          >
            ANSWERS FOR MODERN
            <br />
            OPERATIONS TEAMS.
          </h1>

          {/* Sub */}
          <p
            style={{
              ...T.bodyLg,
              color: C.onSurfaceVariant,
              maxWidth: '540px',
              margin: '0 auto 40px auto',
            }}
          >
            Everything you need to know about FlowPilot, automation, integrations, security, and
            human-controlled AI operations.
          </p>

          {/* Search */}
          <div
            style={{
              position: 'relative',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: C.outline,
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search questions, integrations, security..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveCategory('All Topics');
                setOpenIdx(null);
              }}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              style={{
                width: '100%',
                padding: '16px 60px 16px 52px',
                borderRadius: '14px',
                border: `1.5px solid ${searchFocused ? C.primaryContainer : C.outlineVariantSolid}`,
                backgroundColor: C.surfaceLowest,
                fontSize: '15px',
                fontFamily: "'Inter', sans-serif",
                color: C.onSurface,
                outline: 'none',
                boxShadow: searchFocused
                  ? `0 0 0 3px ${C.primaryTint}`
                  : '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.2s',
                boxSizing: 'border-box',
              }}
            />
            <span
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                ...T.labelMd,
                color: C.outline,
                backgroundColor: C.surfaceMid,
                padding: '3px 7px',
                borderRadius: '6px',
                fontSize: '11px',
              }}
            >
              ⌘K
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. CATEGORIES
      ══════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: C.surfaceLowest,
          borderBottom: `1px solid ${C.outlineVariant}`,
          position: 'sticky',
          top: '64px',
          zIndex: 20,
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            gap: '4px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '0',
                  border: 'none',
                  borderBottom: isActive ? `2px solid ${C.primaryContainer}` : '2px solid transparent',
                  backgroundColor: 'transparent',
                  fontSize: '14px',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: isActive ? C.primaryContainer : C.onSurfaceVariant,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s',
                  marginBottom: '-1px',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. FEATURED HELP CARDS
      ══════════════════════════════════════ */}
      {!searchQuery && activeCategory === 'All Topics' && (
        <section style={{ padding: '60px 24px', backgroundColor: C.surface }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '32px' }}>
              <p style={{ ...T.labelLg, color: C.primaryContainer, margin: '0 0 8px 0' }}>
                BROWSE BY TOPIC
              </p>
              <h2 style={{ ...T.headlineLg, color: C.onSurface, margin: 0 }}>
                Featured Help Topics
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
              }}
            >
              {FEATURED_CARDS.map((card) => (
                <FeaturedCard key={card.title} card={card} onClick={handleFeaturedClick} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          4. FAQ ACCORDION
      ══════════════════════════════════════ */}
      <section
        id="faq-accordion"
        style={{
          padding: '60px 24px 80px',
          backgroundColor: searchQuery || activeCategory !== 'All Topics' ? C.surface : C.surfaceLowest,
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* Section label when filtered */}
          {(searchQuery || activeCategory !== 'All Topics') && (
            <div style={{ marginBottom: '32px' }}>
              {searchQuery ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <p style={{ ...T.bodySm, color: C.onSurfaceVariant, margin: 0 }}>
                    {filtered.length} result{filtered.length !== 1 ? 's' : ''} for{' '}
                    <strong style={{ color: C.onSurface }}>"{searchQuery}"</strong>
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('All Topics'); }}
                    style={{
                      ...T.labelMd,
                      color: C.primaryContainer,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    Clear search ×
                  </button>
                </div>
              ) : (
                <div>
                  <p style={{ ...T.labelLg, color: C.primaryContainer, margin: '0 0 8px 0' }}>
                    {activeCategory.toUpperCase()}
                  </p>
                  <h2 style={{ ...T.headlineLg, color: C.onSurface, margin: 0 }}>
                    {activeCategory} Questions
                  </h2>
                </div>
              )}
            </div>
          )}

          {/* Accordion list */}
          {filtered.length > 0 ? (
            <div>
              {filtered.map((item, idx) => (
                <AccordionItem
                  key={`${item.category}-${idx}`}
                  item={item}
                  idx={idx}
                  isOpen={openIdx === idx}
                  onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '64px 24px',
                backgroundColor: C.surfaceLowest,
                borderRadius: '20px',
                border: `1px solid ${C.outlineVariant}`,
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: C.primaryTint,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                }}
              >
                <Search size={22} color={C.primaryContainer} />
              </div>
              <h3 style={{ ...T.headlineSm, color: C.onSurface, margin: '0 0 8px 0' }}>
                No results found
              </h3>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, margin: '0 0 20px 0' }}>
                No questions match "{searchQuery}". Try a different keyword or browse by category.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All Topics'); }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: C.primaryContainer,
                  color: '#fff',
                  ...T.labelMd,
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. SUPPORT CALLOUT
      ══════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', backgroundColor: C.surface }}>
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            backgroundColor: C.surfaceLowest,
            border: `1px solid ${C.outlineVariant}`,
            borderRadius: '24px',
            padding: 'clamp(32px, 5vw, 60px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: C.primaryTint,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <Mail size={24} color={C.primaryContainer} />
            </div>
            <h2 style={{ ...T.headlineLg, color: C.onSurface, margin: '0 0 12px 0' }}>
              STILL HAVE QUESTIONS?
            </h2>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, margin: 0, lineHeight: '24px' }}>
              Our dedicated customer support and solutions architecture team is available 24/7 to assist with your custom workflow needs.
            </p>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link
              to="/contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: '12px',
                backgroundColor: C.primaryContainer,
                color: '#ffffff',
                textDecoration: 'none',
                ...T.headlineSm,
                fontWeight: 700,
                fontSize: '15px',
                transition: 'opacity 0.15s',
              }}
            >
              <Mail size={16} />
              Contact the Team
            </Link>
            <Link
              to="/book-a-demo"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: '12px',
                border: `1.5px solid ${C.outlineVariantSolid}`,
                backgroundColor: 'transparent',
                color: C.onSurface,
                textDecoration: 'none',
                ...T.headlineSm,
                fontWeight: 600,
                fontSize: '15px',
                transition: 'all 0.15s',
              }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. FINAL CTA
      ══════════════════════════════════════ */}
      <section
        style={{
          padding: 'clamp(60px, 8vw, 100px) 24px',
          backgroundColor: C.primaryContainer,
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2
            style={{
              ...T.displayLg,
              color: '#ffffff',
              margin: '0 0 20px 0',
            }}
          >
            READY TO MAKE YOUR BUSINESS FLOW?
          </h2>
          <p
            style={{
              ...T.bodyLg,
              color: 'rgba(255,255,255,0.80)',
              margin: '0 0 40px 0',
            }}
          >
            Automate repetitive operations while keeping people in control.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/book-a-demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '15px 28px',
                borderRadius: '12px',
                backgroundColor: C.secondaryContainer,
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '15px',
                fontWeight: 700,
                boxShadow: '0 4px 16px rgba(254,133,44,0.35)',
                transition: 'opacity 0.15s',
              }}
            >
              Book a Demo <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '15px 28px',
                borderRadius: '12px',
                border: '1.5px solid rgba(255,255,255,0.30)',
                backgroundColor: 'rgba(255,255,255,0.10)',
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '15px',
                fontWeight: 600,
                transition: 'all 0.15s',
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
