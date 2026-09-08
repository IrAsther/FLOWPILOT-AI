import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ShieldCheck,
  ClipboardList,
  Mail,
  MonitorPlay,
  MapPin,
  Star,
  Play,
  ArrowRight,
  Clock,
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

// ── Images: fresh images not used heavily on other pages ─────────────────────
import heroBg          from '../../styles/Images/executive-briefing.jpg';
import whyCard1Img     from '../../styles/Images/demo-workflow.jpg';
import whyCard2Img     from '../../styles/Images/demo-analytics.jpg';
import whyCard3Img     from '../../styles/Images/demo-integration.jpg';
import testimonial1Img from '../../styles/Images/testimonial-ceo.jpg';
import testimonial2Img from '../../styles/Images/testimonial-vp.jpg';
import ctaBg           from '../../styles/Images/enterprise-meeting.jpg';

// ── Design Tokens ─────────────────────────────────────────────────────────────
const C = {
  surface:                '#fdf9f4',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow:    '#f7f3ee',
  surfaceContainer:       '#f1ede8',
  onSurface:              '#1c1c19',
  onSurfaceVariant:       '#3f4947',
  primary:                '#004642',
  primaryContainer:       '#01605a',
  onPrimary:              '#ffffff',
  onPrimaryContainer:     '#8ed8d0',
  secondary:              '#994700',
  secondaryContainer:     '#fe852c',
  peach:                  '#ffd0a8',
  outlineVariant:         'rgba(190,201,198,0.45)',
  borderLight:            'rgba(111,121,119,0.18)',
  error:                  '#ba1a1a',
};

// ── FAQ Data ──────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'How long does the demo take?',
    a: 'Our personalized demos typically run 30–45 minutes. We cover your specific use case, live product walkthrough, and leave time for Q&A. No slides, no sales pitch — just your workflows in action.',
  },
  {
    q: 'Is the demo completely free?',
    a: 'Yes, absolutely. There is no cost, no obligation, and no credit card required to book or attend a FlowPilot AI demo. Our specialists are here to help you evaluate fit.',
  },
  {
    q: 'Can I bring my whole team to the demo?',
    a: 'Absolutely. We encourage decision-makers, operations leads, and technical stakeholders to join. Simply mention team size in the message field and we will send a multi-attendee calendar invite.',
  },
  {
    q: 'Do I need any technical knowledge to attend?',
    a: 'Not at all. Our demos are designed for business owners, operations managers, and executives — not developers. We speak your language: time saved, decisions automated, operations streamlined.',
  },
  {
    q: 'What happens after the demo?',
    a: 'Within 24 hours you will receive a personalized implementation roadmap, pricing proposal tailored to your team size, and a recording of the session. No pressure, just clarity.',
  },
  {
    q: 'Can I reschedule or cancel my demo?',
    a: 'Yes. Your confirmation email contains a one-click reschedule and cancel link. You can also reach us directly at demo@flowpilot.ai and we will sort it immediately.',
  },
];

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

// ── FAQ Accordion Item ────────────────────────────────────────────────────────
function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.outlineVariant}`, overflow: 'hidden' }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          minHeight: '48px',
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '16px',
            fontWeight: 600,
            color: C.onSurface,
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: isOpen ? C.primaryContainer : C.surfaceContainer,
            color: isOpen ? C.onPrimary : C.onSurfaceVariant,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.25s',
          }}
        >
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            color: C.onSurfaceVariant,
            lineHeight: 1.7,
            paddingBottom: '20px',
            margin: 0,
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function BookDemoPage() {
  const [openFaq, setOpenFaq]         = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    companySize: '',
    demoDate: '',
    demoTime: '10:00 AM',
    message: '',
  });

  const handleFormChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleTimeSelect = (slot) => {
    setForm((prev) => ({ ...prev, demoTime: slot }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const el = document.getElementById('demo-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const INPUT = {
    width: '100%',
    minHeight: '48px',
    padding: '12px 14px',
    borderRadius: '8px',
    border: `1px solid ${C.borderLight}`,
    backgroundColor: '#ffffff',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: C.onSurface,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  };

  const LABEL = {
    display: 'block',
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    fontWeight: 600,
    color: C.onSurface,
    marginBottom: '6px',
  };

  return (
    <>
      <style>{`
        .bdp-root {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          background-color: ${C.surface};
          font-family: 'Inter', sans-serif;
        }
        .bdp-hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 14px 28px;
          border-radius: 8px;
          background-color: #ffffff;
          color: #004642;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s ease;
        }
        .bdp-hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.16);
        }
        .bdp-hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 14px 28px;
          border-radius: 8px;
          background-color: rgba(255,255,255,0.14);
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.32);
          cursor: pointer;
          backdrop-filter: blur(4px);
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bdp-hero-btn-secondary:hover {
          background-color: rgba(255,255,255,0.22);
          transform: translateY(-2px);
        }
        .bdp-why-card {
          background-color: #ffffff;
          border: 1px solid rgba(190,201,198,0.35);
          border-radius: 10px;
          overflow: hidden;
          flex: 1;
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
        }
        .bdp-why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,70,66,0.10);
        }
        .bdp-form-input:focus {
          border-color: #01605A !important;
          box-shadow: 0 0 0 3px rgba(1,96,90,0.10) !important;
        }
        .bdp-submit-btn {
          width: 100%;
          min-height: 48px;
          padding: 14px 24px;
          border-radius: 8px;
          background-color: #004642;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 2px 12px rgba(0,70,66,0.20);
          transition: background-color 0.2s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bdp-submit-btn:hover {
          background-color: #01605A;
          transform: translateY(-1px);
        }
        .bdp-time-chip {
          min-height: 42px;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid ${C.borderLight};
          cursor: pointer;
          transition: all 0.18s cubic-bezier(0.22, 1, 0.36, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          color: ${C.onSurface};
        }
        .bdp-time-chip:hover {
          border-color: #01605a;
          background-color: rgba(1,96,90,0.04);
        }
        .bdp-time-chip.active {
          background-color: #004642;
          color: #ffffff;
          border-color: #004642;
          box-shadow: 0 2px 8px rgba(0,70,66,0.18);
        }
        .bdp-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 16px 32px;
          border-radius: 8px;
          background-color: #ffffff;
          color: #004642;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s ease;
        }
        .bdp-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }
        .bdp-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 16px 32px;
          border-radius: 8px;
          background-color: transparent;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.42);
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bdp-cta-btn-secondary:hover {
          background-color: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }
        .bdp-timeline-step {
          text-align: center;
          flex: 1;
          position: relative;
        }
        .bdp-timeline-step:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 28px;
          left: calc(50% + 30px);
          width: calc(100% - 60px);
          height: 2px;
          background: linear-gradient(90deg, rgba(1,96,90,0.30), rgba(1,96,90,0.06));
        }
        @media(max-width: 1024px) {
          .bdp-why-cards {
            flex-direction: column !important;
          }
          .bdp-form-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .bdp-testimonial-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media(max-width: 768px) {
          .bdp-hero-title {
            font-size: 32px !important;
            line-height: 1.2 !important;
          }
          .bdp-hero-btns {
            flex-direction: column !important;
            width: 100% !important;
          }
          .bdp-hero-btns a {
            width: 100% !important;
          }
          .bdp-section-title {
            font-size: 26px !important;
          }
          .bdp-timeline-row {
            flex-direction: column !important;
            gap: 28px !important;
          }
          .bdp-timeline-step::after {
            display: none !important;
          }
          .bdp-hero-section {
            padding: 72px 18px 56px !important;
          }
          .bdp-section-pad {
            padding: 56px 18px !important;
          }
          .bdp-form-two-col {
            grid-template-columns: 1fr !important;
          }
          .bdp-form-card {
            padding: 28px 18px !important;
          }
          .bdp-cta-section {
            padding: 64px 18px !important;
          }
          .bdp-cta-title {
            font-size: 28px !important;
          }
          .bdp-cta-btns {
            flex-direction: column !important;
            width: 100% !important;
          }
          .bdp-cta-btns a {
            width: 100% !important;
          }
          .bdp-time-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media(max-width: 360px) {
          .bdp-hero-title {
            font-size: 28px !important;
          }
          .bdp-time-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <main className="bdp-root">
        {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
        <section
          className="bdp-hero-section"
          style={{
            position: 'relative',
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            padding: '120px 48px 88px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(145deg, rgba(0,38,36,0.93) 0%, rgba(0,70,66,0.85) 55%, rgba(0,28,26,0.95) 100%)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.20)',
                backdropFilter: 'blur(8px)',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: C.secondaryContainer,
                  boxShadow: '0 0 8px #fe852c',
                }}
              />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: C.peach,
                }}
              >
                Book a Personalized Demo
              </span>
            </div>

            <h1
              className="bdp-hero-title"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '54px',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.14,
                letterSpacing: '-0.025em',
                margin: '0 0 20px',
              }}
            >
              See FlowPilot AI<br />In Action
            </h1>

            <p
              style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.84)',
                lineHeight: 1.65,
                margin: '0 0 36px',
                maxWidth: '560px',
                fontWeight: 400,
              }}
            >
              Discover how FlowPilot automates communication, operations, and workflows across your organization — in one focused, personalized session.
            </p>

            <div className="bdp-hero-btns" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#demo-form" className="bdp-hero-btn-primary">
                Schedule Demo <ArrowRight size={16} />
              </a>
              <a href="#why-demo" className="bdp-hero-btn-secondary">
                <Play size={14} fill="currentColor" /> Watch Product Tour
              </a>
            </div>

            {/* Trust bar */}
            <div
              style={{
                display: 'flex',
                gap: '32px',
                flexWrap: 'wrap',
                marginTop: '52px',
                paddingTop: '28px',
                borderTop: '1px solid rgba(255,255,255,0.13)',
              }}
            >
              {[
                { val: '< 45 min', lbl: 'Average session' },
                { val: 'Free', lbl: 'No cost, ever' },
                { val: '1-on-1', lbl: 'Expert-led session' },
                { val: '24h', lbl: 'Roadmap delivery' },
              ].map((item, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '22px',
                      fontWeight: 800,
                      color: '#ffffff',
                    }}
                  >
                    {item.val}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.55)',
                      fontWeight: 500,
                      marginTop: '2px',
                    }}
                  >
                    {item.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: WHY BOOK A DEMO ──────────────────────────────────── */}
        <section id="why-demo" className="bdp-section-pad" style={{ padding: '88px 48px', backgroundColor: C.surface }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: C.primaryContainer,
                  marginBottom: '12px',
                }}
              >
                Why Book With Us
              </span>
              <h2
                className="bdp-section-title"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '36px',
                  fontWeight: 800,
                  color: C.onSurface,
                  margin: '0 0 14px',
                  letterSpacing: '-0.02em',
                }}
              >
                More Than a Product Demo
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: C.onSurfaceVariant,
                  maxWidth: '520px',
                  margin: '0 auto',
                  lineHeight: 1.65,
                }}
              >
                Every session is tailored to your operations, team size, and automation goals — not a generic slide deck.
              </p>
            </div>

            <div className="bdp-why-cards" style={{ display: 'flex', gap: '24px' }}>
              {[
                {
                  img: whyCard1Img,
                  tag: 'Tailored to you',
                  title: 'Personalized Walkthrough',
                  desc: 'We review your actual workflows — email, WhatsApp, scheduling — and show FlowPilot operating in your exact business context.',
                },
                {
                  img: whyCard2Img,
                  tag: 'Live product',
                  title: 'Real Business Use Cases',
                  desc: 'No hypotheticals. We walk through live automations: inbound triage, push notifications, approval routing, and calendar sync — all running in real time.',
                },
                {
                  img: whyCard3Img,
                  tag: 'Strategic advisory',
                  title: 'Expert Consultation',
                  desc: 'Our AI operations architects analyze your current bottlenecks and present a custom roadmap with precise time-savings and ROI projections for your team.',
                },
              ].map((card, i) => (
                <div key={i} className="bdp-why-card hover-card-elevate">
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(0,70,66,0.88)',
                        color: C.onPrimaryContainer,
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {card.tag}
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '18px',
                        fontWeight: 700,
                        color: C.onSurface,
                        margin: '0 0 10px',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: C.onSurfaceVariant, lineHeight: 1.65, margin: 0 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: DEMO REQUEST FORM & SCHEDULE ───────────────────────── */}
        <section id="demo-form" className="bdp-section-pad" style={{ padding: '88px 48px', backgroundColor: C.surfaceContainerLow }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <div
              className="bdp-form-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.65fr',
                gap: '64px',
                alignItems: 'start',
              }}
            >
              {/* Left: Benefits */}
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: C.primaryContainer,
                    marginBottom: '12px',
                  }}
                >
                  What You Get
                </span>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '32px',
                    fontWeight: 800,
                    color: C.onSurface,
                    margin: '0 0 16px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Book Your<br />Strategy Session
                </h2>
                <p style={{ fontSize: '15px', color: C.onSurfaceVariant, lineHeight: 1.7, margin: '0 0 36px' }}>
                  Join 200+ operations leaders who have transformed their workflows with FlowPilot AI. Your demo is private, tailored, and completely free.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    { title: 'Live product walkthrough', desc: 'See real automations run in your business context.' },
                    { title: 'Custom ROI estimate', desc: 'Quantified hours recovered and cost reduction for your team.' },
                    { title: 'Implementation roadmap', desc: '30-day activation plan tailored to your current stack.' },
                    { title: 'No obligation, ever', desc: 'No pressure, no sales scripts. Just honest expertise.' },
                    { title: 'Team-friendly format', desc: 'Invite your ops lead, founder, or CTO — more context, better session.' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(1,96,90,0.12)',
                          color: C.primaryContainer,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      <div>
                        <div
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '14px',
                            fontWeight: 700,
                            color: C.onSurface,
                            marginBottom: '3px',
                          }}
                        >
                          {item.title}
                        </div>
                        <div style={{ fontSize: '13px', color: C.onSurfaceVariant, lineHeight: 1.55 }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: '36px',
                    padding: '18px',
                    borderRadius: '8px',
                    backgroundColor: C.surface,
                    border: `1px solid ${C.borderLight}`,
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                  }}
                >
                  <ShieldCheck size={22} color={C.primaryContainer} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: C.onSurfaceVariant, lineHeight: 1.55 }}>
                    <strong style={{ color: C.onSurface }}>Enterprise SOC2 Certified.</strong> Your information is encrypted end-to-end and never shared with third parties.
                  </span>
                </div>
              </div>

              {/* Right: Form or Success */}
              {!isSubmitted ? (
                <div
                  className="bdp-form-card"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '10px',
                    border: `1px solid ${C.borderLight}`,
                    padding: '40px 36px',
                    boxShadow: '0 4px 24px rgba(0,70,66,0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: '20px',
                          fontWeight: 800,
                          color: C.onSurface,
                          margin: '0 0 4px',
                        }}
                      >
                        Request Your Demo
                      </h3>
                      <p style={{ fontSize: '13px', color: C.onSurfaceVariant, margin: 0 }}>
                        Select your preferences and an operations engineer will confirm.
                      </p>
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '6px', backgroundColor: 'rgba(1,96,90,0.08)', color: C.primaryContainer, fontSize: '12px', fontWeight: 600 }}>
                      <Clock size={14} /> 45-Min Private Session
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div className="bdp-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div>
                        <label style={LABEL} htmlFor="bd-fullName">Full Name <span style={{ color: C.error }}>*</span></label>
                        <input
                          id="bd-fullName"
                          name="fullName"
                          type="text"
                          required
                          placeholder="Alex Martin"
                          value={form.fullName}
                          onChange={handleFormChange}
                          className="bdp-form-input"
                          style={INPUT}
                        />
                      </div>
                      <div>
                        <label style={LABEL} htmlFor="bd-company">Company <span style={{ color: C.error }}>*</span></label>
                        <input
                          id="bd-company"
                          name="company"
                          type="text"
                          required
                          placeholder="Northline Studio"
                          value={form.company}
                          onChange={handleFormChange}
                          className="bdp-form-input"
                          style={INPUT}
                        />
                      </div>
                    </div>

                    <div className="bdp-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div>
                        <label style={LABEL} htmlFor="bd-jobTitle">Job Title <span style={{ color: C.error }}>*</span></label>
                        <input
                          id="bd-jobTitle"
                          name="jobTitle"
                          type="text"
                          required
                          placeholder="Chief Operations Officer"
                          value={form.jobTitle}
                          onChange={handleFormChange}
                          className="bdp-form-input"
                          style={INPUT}
                        />
                      </div>
                      <div>
                        <label style={LABEL} htmlFor="bd-email">Business Email <span style={{ color: C.error }}>*</span></label>
                        <input
                          id="bd-email"
                          name="email"
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={form.email}
                          onChange={handleFormChange}
                          className="bdp-form-input"
                          style={INPUT}
                        />
                      </div>
                    </div>

                    <div className="bdp-form-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div>
                        <label style={LABEL} htmlFor="bd-phone">Phone Number</label>
                        <input
                          id="bd-phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 234-9811"
                          value={form.phone}
                          onChange={handleFormChange}
                          className="bdp-form-input"
                          style={INPUT}
                        />
                      </div>
                      <div>
                        <label style={LABEL} htmlFor="bd-companySize">Company Size <span style={{ color: C.error }}>*</span></label>
                        <select
                          id="bd-companySize"
                          name="companySize"
                          required
                          value={form.companySize}
                          onChange={handleFormChange}
                          className="bdp-form-input"
                          style={{ ...INPUT, appearance: 'none', cursor: 'pointer' }}
                        >
                          <option value="" disabled>Select size</option>
                          <option value="1-5">1–5 employees</option>
                          <option value="6-20">6–20 employees</option>
                          <option value="21-50">21–50 employees</option>
                          <option value="51-200">51–200 employees</option>
                          <option value="200+">200+ employees</option>
                        </select>
                      </div>
                    </div>

                    {/* Date and Time Selector */}
                    <div>
                      <label style={LABEL} htmlFor="bd-demoDate">
                        Preferred Demo Date <span style={{ color: C.error }}>*</span>
                      </label>
                      <input
                        id="bd-demoDate"
                        name="demoDate"
                        type="date"
                        required
                        value={form.demoDate}
                        onChange={handleFormChange}
                        className="bdp-form-input"
                        style={INPUT}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <label style={{ ...LABEL, marginBottom: 0 }}>
                          Select Preferred Time Slot (EST) <span style={{ color: C.error }}>*</span>
                        </label>
                        <span style={{ fontSize: '12px', color: C.primaryContainer, fontWeight: 600 }}>
                          Selected: {form.demoTime}
                        </span>
                      </div>
                      <div
                        className="bdp-time-grid"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 1fr)',
                          gap: '8px',
                        }}
                      >
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className={`bdp-time-chip ${form.demoTime === slot ? 'active' : ''}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label style={LABEL} htmlFor="bd-message">Tell Us About Your Operations</label>
                      <textarea
                        id="bd-message"
                        name="message"
                        rows={3}
                        placeholder="What does your current email and WhatsApp workflow look like? What is your biggest operational bottleneck?"
                        value={form.message}
                        onChange={handleFormChange}
                        className="bdp-form-input"
                        style={{ ...INPUT, minHeight: '84px', resize: 'vertical', paddingTop: '12px', lineHeight: 1.6 }}
                      />
                    </div>

                    <button type="submit" className="bdp-submit-btn">
                      Book My Demo <ArrowRight size={16} />
                    </button>

                    <p style={{ fontSize: '12px', color: C.onSurfaceVariant, textAlign: 'center', margin: 0 }}>
                      No credit card required. Our operations architects will confirm within 2 business hours.
                    </p>
                  </form>
                </div>
              ) : (
                <div
                  className="bdp-form-card"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '10px',
                    border: `1px solid ${C.borderLight}`,
                    padding: '56px 40px',
                    textAlign: 'center',
                    boxShadow: '0 4px 24px rgba(0,70,66,0.06)',
                  }}
                >
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(1,96,90,0.10)',
                      color: C.primaryContainer,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <Check size={36} color={C.primaryContainer} strokeWidth={2.5} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '24px',
                      fontWeight: 800,
                      color: C.onSurface,
                      margin: '0 0 12px',
                    }}
                  >
                    Demo Requested
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: C.onSurfaceVariant,
                      lineHeight: 1.7,
                      margin: '0 auto 24px',
                      maxWidth: '420px',
                    }}
                  >
                    Thank you, <strong>{form.fullName || 'there'}</strong>. We have reserved your requested session for <strong>{form.demoDate || 'your selected date'}</strong> at <strong>{form.demoTime}</strong>.
                  </p>
                  <div
                    style={{
                      backgroundColor: C.surfaceContainerLow,
                      borderRadius: '8px',
                      padding: '16px',
                      maxWidth: '380px',
                      margin: '0 auto 28px',
                      fontSize: '13px',
                      color: C.onSurfaceVariant,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      textAlign: 'left',
                    }}
                  >
                    <CalendarIcon size={18} color={C.primaryContainer} style={{ flexShrink: 0 }} />
                    <span>A personalized calendar invite was sent to <strong>{form.email}</strong>.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setForm({
                        fullName: '',
                        company: '',
                        jobTitle: '',
                        email: '',
                        phone: '',
                        companySize: '',
                        demoDate: '',
                        demoTime: '10:00 AM',
                        message: '',
                      });
                    }}
                    style={{
                      minHeight: '48px',
                      padding: '12px 28px',
                      borderRadius: '8px',
                      border: `1px solid ${C.borderLight}`,
                      backgroundColor: 'transparent',
                      color: C.onSurface,
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: WHAT HAPPENS NEXT ────────────────────────────────── */}
        <section className="bdp-section-pad" style={{ padding: '88px 48px', backgroundColor: C.surface }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: C.primaryContainer,
                  marginBottom: '12px',
                }}
              >
                The Process
              </span>
              <h2
                className="bdp-section-title"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '36px',
                  fontWeight: 800,
                  color: C.onSurface,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                What Happens Next
              </h2>
            </div>

            <div className="bdp-timeline-row" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              {[
                {
                  step: '01',
                  icon: ClipboardList,
                  title: 'Submit Request',
                  accent: C.primaryContainer,
                  bg: 'rgba(1,96,90,0.10)',
                  desc: 'Fill in the form above with your preferred date, time, and a brief overview of your operations.',
                },
                {
                  step: '02',
                  icon: Mail,
                  title: 'Confirmation Email',
                  accent: C.secondaryContainer,
                  bg: 'rgba(254,133,44,0.10)',
                  desc: 'Receive a calendar invite and a pre-session briefing guide within 2 business hours of submission.',
                },
                {
                  step: '03',
                  icon: MonitorPlay,
                  title: 'Personalized Demo Session',
                  accent: C.primaryContainer,
                  bg: 'rgba(1,96,90,0.10)',
                  desc: 'A 45-minute live walkthrough of FlowPilot in your exact business context, led by an AI operations expert.',
                },
                {
                  step: '04',
                  icon: MapPin,
                  title: 'Implementation Roadmap',
                  accent: C.secondaryContainer,
                  bg: 'rgba(254,133,44,0.10)',
                  desc: 'Within 24 hours of the session, receive a custom 30-day activation plan with ROI projections for your team.',
                },
              ].map((item, i) => {
                const StepIcon = item.icon;
                return (
                  <div key={i} className="bdp-timeline-step">
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: item.bg,
                        border: `2px solid ${item.accent}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                      }}
                    >
                      <StepIcon size={24} color={item.accent} />
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: item.accent,
                        marginBottom: '8px',
                      }}
                    >
                      Step {item.step}
                    </div>
                    <h4
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '15px',
                        fontWeight: 700,
                        color: C.onSurface,
                        margin: '0 0 10px',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: C.onSurfaceVariant, lineHeight: 1.65, margin: '0 auto', maxWidth: '200px' }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: CUSTOMER TRUST / TESTIMONIALS ────────────────────── */}
        <section className="bdp-section-pad" style={{ padding: '88px 48px', backgroundColor: C.surfaceContainerLow }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: C.primaryContainer,
                  marginBottom: '12px',
                }}
              >
                Trusted By Operators
              </span>
              <h2
                className="bdp-section-title"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '36px',
                  fontWeight: 800,
                  color: C.onSurface,
                  margin: '0 0 14px',
                  letterSpacing: '-0.02em',
                }}
              >
                What Our Clients Say
              </h2>
              <p style={{ fontSize: '16px', color: C.onSurfaceVariant, maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}>
                Operations leaders who booked a demo — and never looked back.
              </p>
            </div>

            <div className="bdp-testimonial-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
              {[
                {
                  img: testimonial1Img,
                  name: 'Marcus Okonkwo',
                  role: 'Chief Operations Officer',
                  company: 'Vantage Consulting Group',
                  quote: '"The demo completely changed how I thought about automation. The FlowPilot team showed us exactly how our client email queue could be triaged autonomously in under 15 minutes. We were live within a week."',
                },
                {
                  img: testimonial2Img,
                  name: 'Sophia Andrade',
                  role: 'Head of Client Operations',
                  company: 'Meridian Digital Partners',
                  quote: '"I expected a generic sales pitch. Instead, I got a 40-minute session that mapped every bottleneck in our approval workflow and showed us a live fix. We eliminated 12 hours of manual work per week by month two."',
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="hover-card-elevate"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '10px',
                    border: `1px solid ${C.borderLight}`,
                    overflow: 'hidden',
                    boxShadow: '0 2px 16px rgba(0,70,66,0.05)',
                  }}
                >
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                    />
                  </div>
                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={16} fill={C.secondaryContainer} color={C.secondaryContainer} />
                      ))}
                    </div>
                    <p style={{ fontSize: '15px', color: C.onSurface, lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 20px' }}>
                      {t.quote}
                    </p>
                    <div style={{ borderTop: `1px solid ${C.outlineVariant}`, paddingTop: '16px' }}>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 700, color: C.onSurface }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: '13px', color: C.onSurfaceVariant, marginTop: '3px' }}>
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: FAQ ───────────────────────────────────────────────── */}
        <section className="bdp-section-pad" style={{ padding: '88px 48px', backgroundColor: C.surface }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: C.primaryContainer,
                  marginBottom: '12px',
                }}
              >
                Common Questions
              </span>
              <h2
                className="bdp-section-title"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '36px',
                  fontWeight: 800,
                  color: C.onSurface,
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                Demo FAQ
              </h2>
            </div>
            <div style={{ borderTop: `1px solid ${C.outlineVariant}` }}>
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem
                  key={i}
                  item={item}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '14px', color: C.onSurfaceVariant }}>
              Still have questions?{' '}
              <Link
                to="/contact"
                style={{ color: C.primaryContainer, fontWeight: 700, textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Contact our team →
              </Link>
            </p>
          </div>
        </section>

        {/* ── SECTION 7: FINAL CTA ─────────────────────────────────────────── */}
        <section style={{ position: 'relative', overflow: 'hidden' }}>
          <div
            className="bdp-cta-section"
            style={{
              backgroundImage: `url(${ctaBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              padding: '100px 48px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0,48,44,0.94) 0%, rgba(0,70,66,0.88) 60%, rgba(0,36,34,0.96) 100%)',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.20)',
                  marginBottom: '24px',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: C.secondaryContainer,
                    boxShadow: '0 0 8px #fe852c',
                  }}
                />
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: C.peach,
                  }}
                >
                  Start Today
                </span>
              </div>
              <h2
                className="bdp-cta-title"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '44px',
                  fontWeight: 800,
                  color: '#ffffff',
                  margin: '0 0 18px',
                  letterSpacing: '-0.022em',
                  lineHeight: 1.18,
                }}
              >
                Ready To Transform<br />Your Operations?
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.80)',
                  lineHeight: 1.65,
                  margin: '0 0 40px',
                }}
              >
                Join operations teams eliminating hours of manual work every week. Your 45-minute session could change everything.
              </p>
              <div
                className="bdp-cta-btns"
                style={{
                  display: 'flex',
                  gap: '14px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <a href="#demo-form" className="bdp-cta-btn-primary">
                  Schedule My Demo <ArrowRight size={16} />
                </a>
                <Link to="/contact" className="bdp-cta-btn-secondary">
                  Contact Sales
                </Link>
              </div>
              <div
                style={{
                  marginTop: '48px',
                  paddingTop: '28px',
                  borderTop: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '36px',
                  flexWrap: 'wrap',
                }}
              >
                {['No credit card required', 'Free for all team sizes', 'Response within 2 hours'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} strokeWidth={2.5} color="rgba(255,255,255,0.70)" />
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.72)', fontWeight: 500 }}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
