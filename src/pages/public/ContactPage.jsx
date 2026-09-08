import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  Globe,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';

// ── Images from src/styles/Images (using fresh images suited for communication/office) ──
import heroBg          from '../../styles/Images/contact-hero-operations.jpg';
import salesImg        from '../../styles/Images/sales-consultation.jpeg';
import supportImg      from '../../styles/Images/support-agent.jfif';
import partnerImg      from '../../styles/Images/partnership-handshake.jpeg';
import generalImg      from '../../styles/Images/office-desk.jfif';
import officeAnchorImg from '../../styles/Images/operations-anchor.jpg';
import whyCard1Img     from '../../styles/Images/enterprise-platform.jpeg';
import whyCard2Img     from '../../styles/Images/testimonial-director.jpg';
import whyCard3Img     from '../../styles/Images/hero-workspace.jfif';
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
    q: 'How quickly can I expect a response?',
    a: 'For sales inquiries and general contact requests, our team responds within 2 to 4 business hours. For existing enterprise clients with priority SLA agreements, our technical operations hotline responds in under 15 minutes.',
  },
  {
    q: 'Do you offer enterprise support?',
    a: 'Yes. Enterprise tiers include a dedicated Technical Account Manager (TAM), guaranteed 99.99% uptime SLA, custom ERP/CRM integration assistance, proactive workflow health monitoring, and 24/7 critical incident response.',
  },
  {
    q: 'Can I schedule a personalized demo?',
    a: 'Absolutely. You can schedule a 30-minute tailored walkthrough directly with our automation engineers. We will analyze your actual communication workflows and demonstrate live WhatsApp and email dispatch pipelines.',
  },
  {
    q: 'Is technical support available?',
    a: 'Yes. We provide continuous technical support across multi-channel endpoints including direct email ticketing, private Slack Connect bridges, WhatsApp emergency channels, and scheduled technical review video sessions.',
  },
];

// ── FAQ Accordion Item Component ──────────────────────────────────────────────
function FaqAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.outlineVariant}`, overflow: 'hidden' }}>
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '22px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '17px',
            fontWeight: 600,
            color: C.onSurface,
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: isOpen ? C.primaryContainer : C.surfaceContainer,
            color: isOpen ? C.onPrimary : C.onSurfaceVariant,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '18px',
            fontWeight: 500,
            transition: 'all 0.25s ease',
          }}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? '320px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            color: C.onSurfaceVariant,
            lineHeight: 1.7,
            paddingBottom: '22px',
            margin: 0,
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

// ── Main ContactPage Component ────────────────────────────────────────────────
export function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    subject: 'Sales Inquiry',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  // FAQ open index state
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Active contact card selected
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate reliable enterprise API dispatch
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
    }, 900);
  };

  const scrollToForm = (subjectCategory) => {
    if (subjectCategory) {
      setFormData((prev) => ({ ...prev, subject: subjectCategory }));
      setSelectedChannel(subjectCategory);
    }
    const formEl = document.getElementById('contact-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        backgroundColor: C.surface,
        color: C.onSurface,
        fontFamily: "'Inter', sans-serif",
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* ── Component CSS Styles ────────────────────────────────────────── */}
      <style>{`
        .contact-input {
          width: 100%;
          padding: 13px 16px;
          border-radius: 8px;
          border: 1px solid ${C.outlineVariant};
          background-color: ${C.surfaceContainerLowest};
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: ${C.onSurface};
          transition: all 0.2s ease;
          box-sizing: border-box;
          outline: none;
        }
        .contact-input:focus {
          border-color: ${C.primaryContainer};
          box-shadow: 0 0 0 3px rgba(1, 96, 90, 0.12);
        }
        .contact-input::placeholder {
          color: #9aa5a3;
        }

        .channel-card {
          background-color: ${C.surfaceContainerLowest};
          border: 1px solid ${C.outlineVariant};
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .channel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(0, 70, 66, 0.12);
          border-color: ${C.primaryContainer};
        }
        .channel-card:hover .channel-img {
          transform: scale(1.04);
        }
        .channel-img {
          transition: transform 0.4s ease;
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .why-card {
          background-color: ${C.surfaceContainerLowest};
          border: 1px solid ${C.outlineVariant};
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(0, 70, 66, 0.12);
          border-color: ${C.primaryContainer};
        }
        .why-card:hover .why-img {
          transform: scale(1.04);
        }
        .why-img {
          transition: transform 0.4s ease;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .info-card {
          background-color: ${C.surfaceContainerLowest};
          border: 1px solid ${C.outlineVariant};
          border-radius: 10px;
          padding: 24px;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .info-card:hover {
          transform: translateY(-2px);
          border-color: ${C.primaryContainer};
          box-shadow: 0 10px 24px -6px rgba(0, 70, 66, 0.08);
        }

        .btn-primary {
          background-color: ${C.primary};
          color: #ffffff;
          padding: 13px 26px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-primary:hover {
          background-color: ${C.primaryContainer};
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 70, 66, 0.25);
        }

        .btn-secondary {
          background-color: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          padding: 13px 26px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-1px);
        }

        .btn-accent {
          background-color: ${C.secondaryContainer};
          color: #ffffff;
          padding: 13px 26px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-accent:hover {
          background-color: ${C.secondary};
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .channels-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-grid {
            grid-template-columns: 1fr !important;
          }
          .location-grid {
            grid-template-columns: 1fr !important;
          }
          .availability-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .channels-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-buttons a, .hero-buttons button {
            width: 100% !important;
            text-align: center !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 1 — HERO
          Large full-width background image with dark overlay.
      ─────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '84vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
          padding: '120px 24px 80px',
        }}
      >
        {/* Dark Enterprise Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0, 30, 28, 0.88) 0%, rgba(0, 48, 44, 0.82) 55%, rgba(0, 70, 66, 0.94) 100%)',
            backdropFilter: 'blur(2px)',
          }}
        />

        {/* Hero Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: 'rgba(1, 96, 90, 0.45)',
              border: '1px solid rgba(142, 216, 208, 0.35)',
              backdropFilter: 'blur(8px)',
              marginBottom: '24px',
            }}
          >
            <Sparkles size={15} color={C.secondaryContainer} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: C.onPrimaryContainer,
              }}
            >
              Get In Touch
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(34px, 5.2vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '20px',
              color: '#ffffff',
            }}
          >
            Let's Talk About Your Operations
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: '720px',
              margin: '0 auto 36px',
            }}
          >
            Whether you have questions, need support, or want to explore how FlowPilot can help your organization, our team is ready to assist.
          </p>

          {/* Action Buttons */}
          <div
            className="hero-buttons"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={() => scrollToForm('Sales Inquiry')}
              className="btn-accent"
              style={{ padding: '14px 30px', fontSize: '16px' }}
            >
              Contact Sales
              <ArrowRight size={18} />
            </button>
            <Link
              to="/book-a-demo"
              className="btn-secondary"
              style={{ padding: '14px 30px', fontSize: '16px' }}
            >
              Book a Demo
            </Link>
          </div>

          {/* Quick SLA Reassurance Highlights */}
          <div
            style={{
              marginTop: '56px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(16px, 4vw, 40px)',
              flexWrap: 'wrap',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.78)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} color={C.secondaryContainer} /> Average Response: &lt; 2 Hours
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color={C.secondaryContainer} /> SOC2 Type II Certified
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={16} color={C.secondaryContainer} /> Global Coverage 24/7
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 2 — CONTACT OPTIONS
          4 professional contact cards with image, icon, description, hover
      ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '88px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: C.primaryContainer,
              display: 'block',
              marginBottom: '10px',
            }}
          >
            Channels &amp; Access
          </span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: C.onSurface,
              letterSpacing: '-0.02em',
              marginBottom: '14px',
            }}
          >
            Dedicated Channels For Every Inquiry
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              color: C.onSurfaceVariant,
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Connect directly with specialized domain experts to fast-track your resolution or operational implementation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="channels-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {/* Card 1: Sales Team */}
          <div className="channel-card">
            <div style={{ overflow: 'hidden', height: '180px', position: 'relative' }}>
              <img
                src={salesImg}
                alt="Sales Team"
                className="channel-img"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  backgroundColor: C.primaryContainer,
                  color: '#ffffff',
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                <Users size={20} />
              </div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: C.onSurface,
                  marginBottom: '10px',
                }}
              >
                Sales Team
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: C.onSurfaceVariant,
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  flex: 1,
                }}
              >
                Speak with our experts about pricing, implementation, and enterprise solutions.
              </p>
              <button
                type="button"
                onClick={() => scrollToForm('Sales Inquiry')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: C.primaryContainer,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textAlign: 'left',
                }}
              >
                Contact Sales
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Card 2: Customer Support */}
          <div className="channel-card">
            <div style={{ overflow: 'hidden', height: '180px', position: 'relative' }}>
              <img
                src={supportImg}
                alt="Customer Support"
                className="channel-img"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  backgroundColor: C.primaryContainer,
                  color: '#ffffff',
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                <Headphones size={20} />
              </div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: C.onSurface,
                  marginBottom: '10px',
                }}
              >
                Customer Support
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: C.onSurfaceVariant,
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  flex: 1,
                }}
              >
                Get assistance with technical issues and platform usage.
              </p>
              <button
                type="button"
                onClick={() => scrollToForm('Technical Support')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: C.primaryContainer,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textAlign: 'left',
                }}
              >
                Open Support Ticket
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Card 3: Partnerships */}
          <div className="channel-card">
            <div style={{ overflow: 'hidden', height: '180px', position: 'relative' }}>
              <img
                src={partnerImg}
                alt="Partnerships"
                className="channel-img"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  backgroundColor: C.primaryContainer,
                  color: '#ffffff',
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                <Building2 size={20} />
              </div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: C.onSurface,
                  marginBottom: '10px',
                }}
              >
                Partnerships
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: C.onSurfaceVariant,
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  flex: 1,
                }}
              >
                Explore strategic partnerships and collaboration opportunities.
              </p>
              <button
                type="button"
                onClick={() => scrollToForm('Strategic Partnerships')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: C.primaryContainer,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textAlign: 'left',
                }}
              >
                Explore Partnering
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Card 4: General Inquiries */}
          <div className="channel-card">
            <div style={{ overflow: 'hidden', height: '180px', position: 'relative' }}>
              <img
                src={generalImg}
                alt="General Inquiries"
                className="channel-img"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  backgroundColor: C.primaryContainer,
                  color: '#ffffff',
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                <MessageSquare size={20} />
              </div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: C.onSurface,
                  marginBottom: '10px',
                }}
              >
                General Inquiries
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: C.onSurfaceVariant,
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  flex: 1,
                }}
              >
                Reach out for any other questions or information.
              </p>
              <button
                type="button"
                onClick={() => scrollToForm('General Inquiry')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: C.primaryContainer,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textAlign: 'left',
                }}
              >
                General Request
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 3 — CONTACT FORM
          Two-column layout on desktop: Left Side (Benefits) + Right Side (Form)
      ─────────────────────────────────────────────────────────────────── */}
      <section
        id="contact-form-section"
        style={{
          padding: '88px 24px',
          backgroundColor: C.surfaceContainerLow,
          borderTop: `1px solid ${C.outlineVariant}`,
          borderBottom: `1px solid ${C.outlineVariant}`,
        }}
      >
        <div
          className="contact-form-grid"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.25fr',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* LEFT SIDE */}
          <div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.primaryContainer,
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Direct Message
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 800,
                color: C.onSurface,
                letterSpacing: '-0.02em',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}
            >
              How Can We Help?
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                color: C.onSurfaceVariant,
                lineHeight: 1.65,
                marginBottom: '36px',
              }}
            >
              Whether you are automating WhatsApp business pipelines, modernizing enterprise email triage, or integrating custom API workflows, our operational architects are ready to map out your solution.
            </p>

            {/* Display: 3 Benefit Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Fast Response Times */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  backgroundColor: C.surfaceContainerLowest,
                  padding: '20px',
                  borderRadius: '10px',
                  border: `1px solid ${C.borderLight}`,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(1, 96, 90, 0.1)',
                    color: C.primaryContainer,
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '16px',
                      fontWeight: 700,
                      color: C.onSurface,
                      marginBottom: '4px',
                    }}
                  >
                    Fast Response Times
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      color: C.onSurfaceVariant,
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    Guaranteed initial triage within 2 to 4 hours during business days, with immediate escalations for urgent enterprise requests.
                  </p>
                </div>
              </div>

              {/* Dedicated Support */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  backgroundColor: C.surfaceContainerLowest,
                  padding: '20px',
                  borderRadius: '10px',
                  border: `1px solid ${C.borderLight}`,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(1, 96, 90, 0.1)',
                    color: C.primaryContainer,
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Headphones size={22} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '16px',
                      fontWeight: 700,
                      color: C.onSurface,
                      marginBottom: '4px',
                    }}
                  >
                    Dedicated Support
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      color: C.onSurfaceVariant,
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    Work directly with dedicated integration leads and workflow engineers who understand your exact system topology.
                  </p>
                </div>
              </div>

              {/* Enterprise Expertise */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  backgroundColor: C.surfaceContainerLowest,
                  padding: '20px',
                  borderRadius: '10px',
                  border: `1px solid ${C.borderLight}`,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(1, 96, 90, 0.1)',
                    color: C.primaryContainer,
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Zap size={22} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '16px',
                      fontWeight: 700,
                      color: C.onSurface,
                      marginBottom: '4px',
                    }}
                  >
                    Enterprise Expertise
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      color: C.onSurfaceVariant,
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    Architected to satisfy rigorous security criteria, SOC2 Type II compliance, zero model data leakage, and high throughput.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Modern Contact Form) */}
          <div
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderRadius: '12px',
              border: `1px solid ${C.outlineVariant}`,
              boxShadow: '0 20px 40px -12px rgba(0, 70, 66, 0.08)',
              padding: '36px',
            }}
          >
            {formStatus.submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '48px 16px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(1, 96, 90, 0.12)',
                    color: C.primaryContainer,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <Check size={32} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '24px',
                    fontWeight: 700,
                    color: C.onSurface,
                    marginBottom: '10px',
                  }}
                >
                  Message Dispatched
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    color: C.onSurfaceVariant,
                    lineHeight: 1.6,
                    maxWidth: '440px',
                    margin: '0 auto 28px',
                  }}
                >
                  Thank you, <strong>{formData.fullName}</strong>. Your inquiry regarding <em>{formData.subject}</em> has been securely logged. An enterprise specialist will contact you shortly at <strong>{formData.businessEmail}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormStatus({ submitting: false, submitted: false, error: null });
                    setFormData({
                      fullName: '',
                      companyName: '',
                      businessEmail: '',
                      phone: '',
                      subject: 'Sales Inquiry',
                      message: '',
                    });
                  }}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ marginBottom: '4px' }}>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '20px',
                      fontWeight: 700,
                      color: C.onSurface,
                      marginBottom: '4px',
                    }}
                  >
                    Send Us a Message
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.onSurfaceVariant, margin: 0 }}>
                    Fill out the parameters below and our operations desk will route your request directly.
                  </p>
                </div>

                {/* Row 1: Full Name & Company Name */}
                <div
                  className="form-row-2"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="fullName"
                      style={{
                        display: 'block',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '13px',
                        fontWeight: 600,
                        color: C.onSurface,
                        marginBottom: '6px',
                      }}
                    >
                      Full Name <span style={{ color: C.secondaryContainer }}>*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      style={{
                        display: 'block',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '13px',
                        fontWeight: 600,
                        color: C.onSurface,
                        marginBottom: '6px',
                      }}
                    >
                      Company Name <span style={{ color: C.secondaryContainer }}>*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Logistics"
                      className="contact-input"
                    />
                  </div>
                </div>

                {/* Row 2: Business Email & Phone Number */}
                <div
                  className="form-row-2"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="businessEmail"
                      style={{
                        display: 'block',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '13px',
                        fontWeight: 600,
                        color: C.onSurface,
                        marginBottom: '6px',
                      }}
                    >
                      Business Email <span style={{ color: C.secondaryContainer }}>*</span>
                    </label>
                    <input
                      id="businessEmail"
                      name="businessEmail"
                      type="email"
                      required
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      placeholder="s.jenkins@apexlogistics.com"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      style={{
                        display: 'block',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '13px',
                        fontWeight: 600,
                        color: C.onSurface,
                        marginBottom: '6px',
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 019-2834"
                      className="contact-input"
                    />
                  </div>
                </div>

                {/* Row 3: Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: 'block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '13px',
                      fontWeight: 600,
                      color: C.onSurface,
                      marginBottom: '6px',
                    }}
                  >
                    Subject / Department <span style={{ color: C.secondaryContainer }}>*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="contact-input"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="Sales Inquiry">Sales &amp; Enterprise Pricing</option>
                    <option value="Technical Support">Platform &amp; Technical Support</option>
                    <option value="Strategic Partnerships">Strategic Partnerships</option>
                    <option value="Custom Integration">Custom ERP / WhatsApp Integration</option>
                    <option value="General Inquiry">General Inquiries</option>
                  </select>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '13px',
                      fontWeight: 600,
                      color: C.onSurface,
                      marginBottom: '6px',
                    }}
                  >
                    Message <span style={{ color: C.secondaryContainer }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your team size, key workflow bottlenecks, or specific systems you want to automate..."
                    className="contact-input"
                    style={{ resize: 'vertical', minHeight: '110px' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '15px',
                    marginTop: '6px',
                    opacity: formStatus.submitting ? 0.75 : 1,
                    cursor: formStatus.submitting ? 'wait' : 'pointer',
                  }}
                >
                  {formStatus.submitting ? (
                    'Transmitting Request...'
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    color: '#84918e',
                    textAlign: 'center',
                    margin: 0,
                  }}
                >
                  By submitting, you agree to our privacy standards. No marketing spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 4 — OFFICE & AVAILABILITY
          Visual anchor: large business image + Informative cards
      ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '88px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: C.primaryContainer,
              display: 'block',
              marginBottom: '10px',
            }}
          >
            Operational Infrastructure
          </span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: C.onSurface,
              letterSpacing: '-0.02em',
              marginBottom: '14px',
            }}
          >
            Office &amp; Availability
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              color: C.onSurfaceVariant,
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Our global operational footprint ensures persistent system reliability, active workflow supervision, and around-the-clock escalation pathways.
          </p>
        </div>

        {/* Large Visual Anchor Image */}
        <div
          style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '36px',
            border: `1px solid ${C.outlineVariant}`,
            height: 'clamp(300px, 40vw, 440px)',
          }}
        >
          <img
            src={officeAnchorImg}
            alt="FlowPilot Executive Operations Center"
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
              background:
                'linear-gradient(180deg, rgba(0, 40, 37, 0.1) 0%, rgba(0, 40, 37, 0.75) 100%)',
            }}
          />
          {/* Status Badge overlay on visual anchor */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(10px)',
              padding: '12px 20px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.25)',
              }}
            />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                color: C.onSurface,
              }}
            >
              Platform Operations: 100% Operational Status
            </span>
          </div>
        </div>

        {/* Informative Cards Grid (3 cards) */}
        <div
          className="availability-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {/* Card 1: Business Hours */}
          <div className="info-card">
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(1, 96, 90, 0.1)',
                color: C.primaryContainer,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <Clock size={22} />
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: C.onSurface,
                marginBottom: '8px',
              }}
            >
              Business Hours
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: C.onSurfaceVariant,
                lineHeight: 1.6,
                marginBottom: '12px',
              }}
            >
              <strong>Monday – Friday:</strong> 8:00 AM – 8:00 PM EST / CET<br />
              <strong>Weekend Escalations:</strong> Continuous coverage for Tier-1 enterprise accounts.
            </p>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: C.primaryContainer,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <CheckCircle2 size={15} /> Active Regional Teams
            </div>
          </div>

          {/* Card 2: Support Availability */}
          <div className="info-card">
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(1, 96, 90, 0.1)',
                color: C.primaryContainer,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <Headphones size={22} />
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: C.onSurface,
                marginBottom: '8px',
              }}
            >
              Support Availability
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: C.onSurfaceVariant,
                lineHeight: 1.6,
                marginBottom: '12px',
              }}
            >
              <strong>24/7/365 Monitoring:</strong> Automated pipeline health tracking with proactive failover triggers and immediate engineer dispatch.
            </p>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: C.primaryContainer,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <CheckCircle2 size={15} /> Sub-15m Critical SLA
            </div>
          </div>

          {/* Card 3: Global Operations */}
          <div className="info-card">
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(1, 96, 90, 0.1)',
                color: C.primaryContainer,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <Globe size={22} />
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: C.onSurface,
                marginBottom: '8px',
              }}
            >
              Global Operations
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: C.onSurfaceVariant,
                lineHeight: 1.6,
                marginBottom: '12px',
              }}
            >
              Distributed operational centers across North America, Europe, and Asia-Pacific ensuring local compliance, low-latency APIs, and cross-border support.
            </p>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: C.primaryContainer,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <CheckCircle2 size={15} /> Multi-Region High Availability
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 5 — WHY COMPANIES CHOOSE FLOWPILOT
          Three visually rich cards:
          - Trusted Enterprise Platform
          - Secure Communications
          - Fast Deployment
      ─────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '88px 24px',
          backgroundColor: C.surfaceContainerLow,
          borderTop: `1px solid ${C.outlineVariant}`,
          borderBottom: `1px solid ${C.outlineVariant}`,
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.primaryContainer,
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Proven Capability
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 700,
                color: C.onSurface,
                letterSpacing: '-0.02em',
                marginBottom: '14px',
              }}
            >
              Why Companies Choose FlowPilot
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                color: C.onSurfaceVariant,
                maxWidth: '640px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Enterprise leaders count on FlowPilot to modernize mission-critical operations with uncompromised stability and precision.
            </p>
          </div>

          {/* 3 Rich Cards Grid */}
          <div
            className="why-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '28px',
            }}
          >
            {/* Card 1: Trusted Enterprise Platform */}
            <div className="why-card">
              <div style={{ overflow: 'hidden', height: '210px' }}>
                <img
                  src={whyCard1Img}
                  alt="Trusted Enterprise Platform"
                  className="why-img"
                />
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '12px',
                    fontWeight: 700,
                    color: C.secondaryContainer,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px',
                  }}
                >
                  <ShieldCheck size={16} /> Enterprise Grade
                </div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    color: C.onSurface,
                    marginBottom: '12px',
                  }}
                >
                  Trusted Enterprise Platform
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: C.onSurfaceVariant,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Engineered with strict workspace isolation, dedicated compute containers, and automated health checks designed for high-stakes operational environments.
                </p>
              </div>
            </div>

            {/* Card 2: Secure Communications */}
            <div className="why-card">
              <div style={{ overflow: 'hidden', height: '210px' }}>
                <img
                  src={whyCard2Img}
                  alt="Secure Communications"
                  className="why-img"
                />
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '12px',
                    fontWeight: 700,
                    color: C.secondaryContainer,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px',
                  }}
                >
                  <ShieldCheck size={16} /> Data Governance
                </div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    color: C.onSurface,
                    marginBottom: '12px',
                  }}
                >
                  Secure Communications
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: C.onSurfaceVariant,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  End-to-end encrypted protocol adapters for WhatsApp, Gmail, and Microsoft 365 with localized data residency and zero model retraining on client data.
                </p>
              </div>
            </div>

            {/* Card 3: Fast Deployment */}
            <div className="why-card">
              <div style={{ overflow: 'hidden', height: '210px' }}>
                <img
                  src={whyCard3Img}
                  alt="Fast Deployment"
                  className="why-img"
                />
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '12px',
                    fontWeight: 700,
                    color: C.secondaryContainer,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px',
                  }}
                >
                  <Zap size={16} /> Turnkey Rollout
                </div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    color: C.onSurface,
                    marginBottom: '12px',
                  }}
                >
                  Fast Deployment
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: C.onSurfaceVariant,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Launch fully compliant operational automations in days rather than quarters. Pre-built connectors and intelligent playbooks reduce engineering overhead to zero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 6 — MAP / LOCATION AREA
          Premium location-style layout with 3 Info Cards:
          - Office Information Card
          - Contact Information Card
          - Business Hours Card
      ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '88px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: C.primaryContainer,
              display: 'block',
              marginBottom: '10px',
            }}
          >
            Corporate Coordinates
          </span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: C.onSurface,
              letterSpacing: '-0.02em',
              marginBottom: '14px',
            }}
          >
            Global Presence &amp; Coordination
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              color: C.onSurfaceVariant,
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Our leadership, solution architects, and engineering pods coordinate across premier international hubs.
          </p>
        </div>

        {/* Premium Location Visual Representation */}
        <div
          style={{
            backgroundColor: C.primary,
            borderRadius: '12px',
            padding: '36px',
            marginBottom: '36px',
            position: 'relative',
            overflow: 'hidden',
            color: '#ffffff',
            boxShadow: '0 16px 36px -10px rgba(0, 70, 66, 0.3)',
          }}
        >
          {/* Subtle Grid Ambient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(1, 96, 90, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(254, 133, 44, 0.15) 0%, transparent 40%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: C.onPrimaryContainer,
                  marginBottom: '12px',
                }}
              >
                <MapPin size={14} color={C.secondaryContainer} /> Primary Operational Hubs
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(20px, 2.5vw, 26px)',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                San Francisco • New York • London • Singapore
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '540px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Connecting clients across 14 time zones with direct routing to enterprise automation specialists and regional compliance teams.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => scrollToForm('Sales Inquiry')}
                className="btn-accent"
              >
                Schedule Virtual Meeting
              </button>
            </div>
          </div>
        </div>

        {/* 3 Location Detail Cards */}
        <div
          className="location-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {/* Card 1: Office Information Card */}
          <div className="info-card">
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(1, 96, 90, 0.1)',
                color: C.primaryContainer,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <Building2 size={22} />
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: C.onSurface,
                marginBottom: '12px',
              }}
            >
              Office Information
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: C.onSurfaceVariant,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              <strong>FlowPilot AI Technologies</strong><br />
              500 Howard Street, Suite 400<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>

          {/* Card 2: Contact Information Card */}
          <div className="info-card">
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(1, 96, 90, 0.1)',
                color: C.primaryContainer,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <Phone size={22} />
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: C.onSurface,
                marginBottom: '12px',
              }}
            >
              Contact Information
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: C.onSurfaceVariant,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              <strong>Direct Sales:</strong> sales@flowpilot.ai<br />
              <strong>General Desk:</strong> contact@flowpilot.ai<br />
              <strong>Enterprise Line:</strong> +1 (800) 582-4190<br />
              <strong>Security Inquiries:</strong> security@flowpilot.ai
            </p>
          </div>

          {/* Card 3: Business Hours Card */}
          <div className="info-card">
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(1, 96, 90, 0.1)',
                color: C.primaryContainer,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <Clock size={22} />
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: C.onSurface,
                marginBottom: '12px',
              }}
            >
              Business Hours
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: C.onSurfaceVariant,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              <strong>Monday – Friday:</strong> 8:00 AM – 8:00 PM EST<br />
              <strong>European Desk:</strong> 8:00 AM – 6:00 PM CET<br />
              <strong>Weekend Support:</strong> Continuous active monitoring for enterprise accounts with dedicated on-call engineers.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 7 — FAQ PREVIEW
          3–4 common questions with premium accordion matching FAQ page
      ─────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '88px 24px',
          backgroundColor: C.surfaceContainerLowest,
          borderTop: `1px solid ${C.outlineVariant}`,
        }}
      >
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.primaryContainer,
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Quick Clarifications
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 700,
                color: C.onSurface,
                letterSpacing: '-0.02em',
                marginBottom: '14px',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                color: C.onSurfaceVariant,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Common answers to help accelerate your team's evaluation before you get in touch.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div style={{ borderTop: `1px solid ${C.outlineVariant}` }}>
            {FAQ_ITEMS.map((item, index) => (
              <FaqAccordionItem
                key={index}
                item={item}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
              />
            ))}
          </div>

          {/* Link to full FAQ page */}
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link
              to="/faq"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: C.primaryContainer,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              View All Platform FAQs
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 8 — FINAL CTA
          Large background image section with dark overlay
          Title: Ready To Improve Your Operations?
          Description: Connect with our team and discover how FlowPilot can help streamline communication, workflows, and business operations.
          Buttons: Contact Our Team, Schedule a Demo
      ─────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '110px 24px',
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Dark Teal Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(0, 40, 37, 0.94) 0%, rgba(1, 96, 90, 0.88) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: C.peach,
              display: 'block',
              marginBottom: '14px',
            }}
          >
            Start Streamlining Today
          </span>

          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(30px, 4.5vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              marginBottom: '20px',
              color: '#ffffff',
            }}
          >
            Ready To Improve Your Operations?
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: '660px',
              margin: '0 auto 36px',
            }}
          >
            Connect with our team and discover how FlowPilot can help streamline communication, workflows, and business operations.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={() => scrollToForm('General Inquiry')}
              className="btn-accent"
              style={{ padding: '14px 30px', fontSize: '16px' }}
            >
              Contact Our Team
              <ArrowRight size={18} />
            </button>
            <Link
              to="/book-a-demo"
              className="btn-secondary"
              style={{ padding: '14px 30px', fontSize: '16px' }}
            >
              Schedule a Demo
            </Link>
          </div>

          <div
            style={{
              marginTop: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.72)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color={C.secondaryContainer} /> Dedicated Enterprise Onboarding
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color={C.secondaryContainer} /> Zero Model Training On Your Data
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color={C.secondaryContainer} /> 99.9% Uptime Guarantee
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

