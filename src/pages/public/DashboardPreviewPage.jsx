import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  Filter,
  Globe,
  Inbox,
  Layers,
  Mail,
  MessageCircle,
  MessageSquare,
  Play,
  RefreshCw,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  User,
  Users,
  Zap,
  Bell,
} from 'lucide-react';

// ── Images: 9 Distinct Local Assets ──────────────────────────────────────────
import heroBg          from '../../styles/Images/executive-briefing.jpg';
import kpiOverviewBg   from '../../styles/Images/operations-anchor.jpg';
import gmailAnchorImg  from '../../styles/Images/workspace-email-limits.jfif';
import whatsappBg      from '../../styles/Images/whatsapp-messaging-screen.jfif';
import workflowBg      from '../../styles/Images/demo-workflow.jpg';
import calendarBg      from '../../styles/Images/sales-calendar.jfif';
import analyticsBg     from '../../styles/Images/demo-analytics.jpg';
import integrationsBg  from '../../styles/Images/demo-integration.jpg';
import ctaBg           from '../../styles/Images/enterprise-meeting.jpg';

// ── Brand Color Palette ──────────────────────────────────────────────────────
const C = {
  darkTeal:        '#004642',
  primaryTeal:     '#01605A',
  tealContainer:   '#027a73',
  tealLight:       'rgba(1, 96, 90, 0.08)',
  tealBorder:      'rgba(1, 96, 90, 0.18)',
  orange:          '#FE852C',
  orangeLight:     'rgba(254, 133, 44, 0.12)',
  cream:           '#FDF9F4',
  creamDark:       '#F4EFEA',
  white:           '#FFFFFF',
  ink:             '#1C1C19',
  inkLight:        '#4A5553',
  border:          'rgba(190, 201, 198, 0.45)',
  borderSolid:     '#D5DEDC',
  success:         '#0F9D58',
  pending:         '#E37400',
};

// ── Gmail Preview Mock Data ──────────────────────────────────────────────────
const GMAIL_EMAILS = [
  {
    id: 1,
    sender: 'Marcus Vance',
    company: 'Vance Global Logistics',
    email: 'm.vance@vancelogistics.com',
    subject: 'Urgent Client Request — API Rate Limits & Contract Renewal',
    preview: 'Hi team, our order ingestion pipeline hit rate limits during peak morning hours. Can we immediately upgrade our tier...',
    time: '10:42 AM',
    badge: 'Processed',
    badgeColor: '#0F9D58',
    badgeBg: 'rgba(15, 157, 88, 0.12)',
    aiAction: 'FlowPilot extracted client tier, escalated to Slack, and drafted contract amendment.',
  },
  {
    id: 2,
    sender: 'Sarah Lin',
    company: 'Northstar Financial',
    email: 'slin@northstarfin.io',
    subject: 'Invoice Review Needed — Batch #8492 Dispatch Clearance',
    preview: 'Please confirm approval on batch billing reconciliation before automated settlement trigger at 12:00 PM EST...',
    time: '09:15 AM',
    badge: 'Pending',
    badgeColor: '#E37400',
    badgeBg: 'rgba(227, 116, 0, 0.12)',
    aiAction: 'Parsed ledger line items against QuickBooks. Awaiting manual supervisor confirmation.',
  },
  {
    id: 3,
    sender: 'Elena Rostova',
    company: 'AeroGroup Global',
    email: 'elena@aerogroup.com',
    subject: 'Meeting Confirmation — Executive Operations Architecture Briefing',
    preview: 'Confirmed for Thursday 2:00 PM EST. Attendees will include VP Operations and Lead Solutions Architect...',
    time: '08:30 AM',
    badge: 'Automated',
    badgeColor: '#01605A',
    badgeBg: 'rgba(1, 96, 90, 0.12)',
    aiAction: 'Calendar event generated, Google Meet link dispatched, attendees synchronized in CRM.',
  },
  {
    id: 4,
    sender: 'David Chen',
    company: 'Chen Advisory & Partners',
    email: 'dchen@chenadvisory.com',
    subject: 'Contract Approval — Master Service Agreement Addendum Signed',
    preview: 'Enclosed is the signed addendum countersigned by our managing partner. Looking forward to go-live...',
    time: 'Yesterday',
    badge: 'Processed',
    badgeColor: '#0F9D58',
    badgeBg: 'rgba(15, 157, 88, 0.12)',
    aiAction: 'Archived to DocuSign vault, tagged customer account as Active Enterprise.',
  },
];

// ── Calendar Appointments Mock Data ──────────────────────────────────────────
const APPOINTMENTS = [
  {
    id: 1,
    time: '10:00 AM – 10:30 AM',
    title: 'Demo Call',
    client: 'Apex Industrial Systems (VP Operations)',
    status: 'Auto-Scheduled via WhatsApp',
    badge: 'Live Meet Link Ready',
  },
  {
    id: 2,
    time: '11:30 AM – 12:15 PM',
    title: 'Sales Meeting',
    client: 'Meridian Health Network (CTO & Procurement)',
    status: 'CRM Deal Pipeline Synchronized',
    badge: 'Proposal Attached',
  },
  {
    id: 3,
    time: '02:00 PM – 02:30 PM',
    title: 'Client Follow-up',
    client: 'Vance Logistics (Integration Sync)',
    status: 'Auto-Rescheduled per WhatsApp Request',
    badge: 'Confirmed',
  },
  {
    id: 4,
    time: '04:00 PM – 05:00 PM',
    title: 'Strategy Session',
    client: 'Internal Operations & Automation Pod Review',
    status: 'Bi-weekly Automated Summary Dispatched',
    badge: 'Team Calendar',
  },
];

// ── Integrations Mock Data ───────────────────────────────────────────────────
const INTEGRATIONS = [
  { name: 'WhatsApp', category: 'Instant Dispatch', status: 'Connected', desc: 'Real-time alert delivery and one-tap action authorization.' },
  { name: 'Gmail', category: 'Email Triage', status: 'Connected', desc: 'Deep thread analysis, draft generation, and zero-inbox routing.' },
  { name: 'Google Calendar', category: 'Scheduling Engine', status: 'Connected', desc: 'Intelligent conflict resolution and autonomous invite sync.' },
  { name: 'Slack', category: 'Team Bridges', status: 'Connected', desc: 'Internal escalations and multi-user approval channel webhooks.' },
  { name: 'Stripe', category: 'Billing Ledger', status: 'Connected', desc: 'Automated invoice receipt verification and reconciliation.' },
  { name: 'HubSpot', category: 'Enterprise CRM', status: 'Connected', desc: 'Continuous timeline sync, lead status updates, and note logging.' },
  { name: 'Zoom', category: 'Video Conferencing', status: 'Connected', desc: 'Dynamic room provisioning and recording ledger indexing.' },
];

export function DashboardPreviewPage() {
  // WhatsApp Mock Interaction State
  const [whatsappStatus, setWhatsappStatus] = useState('pending'); // 'pending' | 'approved' | 'edited'
  const [selectedEmail, setSelectedEmail] = useState(GMAIL_EMAILS[0]);

  return (
    <div
      style={{
        backgroundColor: C.cream,
        color: C.ink,
        fontFamily: "'Inter', sans-serif",
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* ── Scoped CSS Styles ────────────────────────────────────────────── */}
      <style>{`
        .dash-card {
          background: #FFFFFF;
          border: 1px solid ${C.border};
          border-radius: 10px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .dash-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -6px rgba(1, 96, 90, 0.1);
          border-color: ${C.primaryTeal};
        }

        .btn-dash-primary {
          background-color: ${C.primaryTeal};
          color: #FFFFFF;
          padding: 13px 26px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-dash-primary:hover {
          background-color: ${C.darkTeal};
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 70, 66, 0.25);
        }

        .btn-dash-secondary {
          background-color: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          padding: 13px 26px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-dash-secondary:hover {
          background-color: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-1px);
        }

        .btn-dash-orange {
          background-color: ${C.orange};
          color: #FFFFFF;
          padding: 13px 26px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-dash-orange:hover {
          background-color: #e06c19;
          transform: translateY(-1px);
        }

        .email-row {
          padding: 16px 20px;
          border-bottom: 1px solid ${C.border};
          cursor: pointer;
          transition: background-color 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .email-row:hover {
          background-color: ${C.cream};
        }
        .email-row.selected {
          background-color: rgba(1, 96, 90, 0.05);
          border-left: 3px solid ${C.primaryTeal};
        }

        @media (max-width: 1024px) {
          .preview-split-2 {
            grid-template-columns: 1fr !important;
          }
          .kpi-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .analytics-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .integrations-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .kpi-grid-4 {
            grid-template-columns: 1fr !important;
          }
          .analytics-grid-4 {
            grid-template-columns: 1fr !important;
          }
          .integrations-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-group a {
            width: 100% !important;
            text-align: center !important;
          }
          .email-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
      `}</style>

      {/* ─────────────────────────────────────────────────────────────────
          1. HERO SECTION
          Large enterprise workspace background image with dark overlay.
          Title: "See FlowPilot In Action"
          Subtitle: "Experience how Gmail, WhatsApp, Calendar and AI Workflows come together in one intelligent operations center."
          Buttons: Book a Demo, Start Free Trial
      ─────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          padding: '130px 24px 80px',
        }}
      >
        {/* Dark Enterprise Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0, 40, 37, 0.9) 0%, rgba(0, 55, 51, 0.84) 55%, rgba(0, 70, 66, 0.96) 100%)',
            backdropFilter: 'blur(2px)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'center',
            color: C.white,
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
            <Sparkles size={15} color={C.orange} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#8ed8d0',
              }}
            >
              Interactive Product Showcase
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '22px',
              color: C.white,
            }}
          >
            See FlowPilot In Action
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(16px, 2.2vw, 20px)',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '760px',
              margin: '0 auto 38px',
            }}
          >
            Experience how Gmail, WhatsApp, Calendar and AI Workflows come together in one intelligent operations center.
          </p>

          {/* Buttons */}
          <div
            className="hero-cta-group"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/book-a-demo"
              className="btn-dash-orange"
              style={{ padding: '14px 32px', fontSize: '16px' }}
            >
              Book a Demo
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/auth"
              className="btn-dash-secondary"
              style={{ padding: '14px 32px', fontSize: '16px' }}
            >
              Start Free Trial
            </Link>
          </div>

          {/* Reassurance Indicators */}
          <div
            style={{
              marginTop: '50px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(16px, 3vw, 36px)',
              flexWrap: 'wrap',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.78)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color={C.orange} /> Real-time Gmail &amp; WhatsApp Sync
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color={C.orange} /> SOC2 Type II Certified
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} color={C.orange} /> Sub-Second Decision Loops
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          2. LIVE DASHBOARD OVERVIEW
          4 KPI Cards:
          - Inbox Monitored: 247
          - Messages Processed: 1,842
          - Tasks Automated: 398
          - Time Saved: 142 Hours
      ─────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '80px 24px',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        {/* Background Visual Anchor Banner */}
        <div
          style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '40px',
            height: '180px',
            border: `1px solid ${C.border}`,
          }}
        >
          <img
            src={kpiOverviewBg}
            alt="Operations Anchor"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.75)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(0, 70, 66, 0.9) 0%, rgba(1, 96, 90, 0.6) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 32px',
              color: C.white,
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: C.orange,
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Autonomous Operations Engine
              </span>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Live Operations Center
              </h2>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                padding: '8px 18px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.3)',
                }}
              />
              System Live • 4 Pods Active
            </div>
          </div>
        </div>

        {/* 4 KPI Cards Grid */}
        <div
          className="kpi-grid-4"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {/* Card 1: Inbox Monitored */}
          <div className="dash-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: C.inkLight, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Inbox Monitored
              </span>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: C.tealLight,
                  color: C.primaryTeal,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Inbox size={20} />
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '38px',
                fontWeight: 800,
                color: C.darkTeal,
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              247
            </div>
            <div style={{ fontSize: '12px', color: '#0F9D58', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUpRight size={14} /> Active thread supervision
            </div>
          </div>

          {/* Card 2: Messages Processed */}
          <div className="dash-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: C.inkLight, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Messages Processed
              </span>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: C.tealLight,
                  color: C.primaryTeal,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MessageSquare size={20} />
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '38px',
                fontWeight: 800,
                color: C.darkTeal,
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              1,842
            </div>
            <div style={{ fontSize: '12px', color: '#0F9D58', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUpRight size={14} /> +24% vs last 7 days
            </div>
          </div>

          {/* Card 3: Tasks Automated */}
          <div className="dash-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: C.inkLight, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Tasks Automated
              </span>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: C.orangeLight,
                  color: C.orange,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Zap size={20} />
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '38px',
                fontWeight: 800,
                color: C.darkTeal,
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              398
            </div>
            <div style={{ fontSize: '12px', color: '#0F9D58', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUpRight size={14} /> 99.4% zero-touch completion
            </div>
          </div>

          {/* Card 4: Time Saved */}
          <div className="dash-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: C.inkLight, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Time Saved
              </span>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: C.tealLight,
                  color: C.primaryTeal,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Clock size={20} />
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '38px',
                fontWeight: 800,
                color: C.darkTeal,
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              142 <span style={{ fontSize: '20px', fontWeight: 600 }}>Hours</span>
            </div>
            <div style={{ fontSize: '12px', color: '#0F9D58', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUpRight size={14} /> 3.5 FTE equivalent capacity
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          3. GMAIL MONITORING PANEL
          Realistic Gmail-style inbox preview.
          Rows: Urgent Client Request, Invoice Review Needed, Meeting Confirmation, Contract Approval.
          Badges: Processed, Pending, Automated.
      ─────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: C.white,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: C.primaryTeal,
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Smart Triage In Action
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 800,
                color: C.darkTeal,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}
            >
              Gmail Monitoring Panel
            </h2>
            <p style={{ fontSize: '16px', color: C.inkLight, maxWidth: '640px', margin: '0 auto' }}>
              FlowPilot reads incoming business messages, extracts operational intent, assigns structured priority badges, and drafts contextual replies.
            </p>
          </div>

          {/* Inbox Container Mockup */}
          <div
            style={{
              backgroundColor: C.white,
              border: `1px solid ${C.borderSolid}`,
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 16px 36px -10px rgba(0, 70, 66, 0.08)',
            }}
          >
            {/* Inbox Top Bar */}
            <div
              style={{
                backgroundColor: C.creamDark,
                padding: '14px 20px',
                borderBottom: `1px solid ${C.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color={C.primaryTeal} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '14px', fontWeight: 700, color: C.darkTeal }}>
                  ops@yourcompany.com — FlowPilot Supervised Inbox
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    backgroundColor: C.tealLight,
                    color: C.primaryTeal,
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  Auto-Triage Active
                </span>
                <span style={{ fontSize: '13px', color: C.inkLight }}>4 unread threads</span>
              </div>
            </div>

            {/* Email Rows List */}
            <div>
              {GMAIL_EMAILS.map((email) => {
                const isSelected = selectedEmail.id === email.id;
                return (
                  <div
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className={`email-row ${isSelected ? 'selected' : ''}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: isSelected ? C.primaryTeal : C.creamDark,
                          color: isSelected ? C.white : C.darkTeal,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {email.sender[0]}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span style={{ fontWeight: 700, fontSize: '14px', color: C.ink }}>
                            {email.sender}
                          </span>
                          <span style={{ fontSize: '12px', color: C.inkLight }}>
                            ({email.company})
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: C.darkTeal,
                            marginTop: '2px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {email.subject}
                        </div>
                        <div
                          style={{
                            fontSize: '13px',
                            color: C.inkLight,
                            marginTop: '2px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {email.preview}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                      <span
                        style={{
                          backgroundColor: email.badgeBg,
                          color: email.badgeColor,
                          fontSize: '12px',
                          fontWeight: 700,
                          padding: '4px 12px',
                          borderRadius: '6px',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {email.badge}
                      </span>
                      <span style={{ fontSize: '12px', color: C.inkLight, width: '70px', textAlign: 'right' }}>
                        {email.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Thread AI Inspector Panel */}
            <div
              style={{
                backgroundColor: C.cream,
                padding: '20px',
                borderTop: `1px solid ${C.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Bot size={20} color={C.primaryTeal} />
                <span style={{ fontSize: '13px', color: C.darkTeal, fontWeight: 600 }}>
                  AI Operations Inspector:
                </span>
                <span style={{ fontSize: '13px', color: C.inkLight }}>
                  {selectedEmail.aiAction}
                </span>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: C.primaryTeal,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Click email row to inspect action <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          4. WHATSAPP COMMAND CENTER
          Smartphone-style panel.
          Messages:
          - New Gmail Alert
          - Client needs pricing update.
          - Approve Reply?
          Buttons: Approve, Edit
      ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '88px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div
          className="preview-split-2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Context Column */}
          <div>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: C.orange,
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Mobile Operational Sovereignty
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                color: C.darkTeal,
                letterSpacing: '-0.02em',
                marginBottom: '18px',
                lineHeight: 1.2,
              }}
            >
              WhatsApp Command Center
            </h2>
            <p style={{ fontSize: '16px', color: C.inkLight, lineHeight: 1.65, marginBottom: '28px' }}>
              Run your business entirely from WhatsApp. When high-priority messages arrive, FlowPilot crafts the response, pulls contract terms, and prompts you with a single interactive tap.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: C.tealLight, color: C.primaryTeal, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={16} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: C.ink }}>
                  Instant WhatsApp notification for critical VIP contacts
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: C.tealLight, color: C.primaryTeal, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={16} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: C.ink }}>
                  One-tap approval dispatches verified email reply instantly
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: C.tealLight, color: C.primaryTeal, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={16} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: C.ink }}>
                  No dashboard login required while traveling or in transit
                </span>
              </div>
            </div>

            <Link to="/book-a-demo" className="btn-dash-primary">
              See Live Demo Call <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column: Smartphone Panel Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                backgroundColor: '#0c1317',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 24px 48px -12px rgba(0, 70, 66, 0.25)',
                border: '1px solid #233138',
              }}
            >
              {/* WhatsApp Phone Header */}
              <div
                style={{
                  backgroundColor: '#1f2c34',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #2a3942',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: C.primaryTeal,
                      color: C.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 700,
                    }}
                  >
                    FP
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#e9edef' }}>
                      FlowPilot AI Operations
                    </div>
                    <div style={{ fontSize: '11px', color: '#8696a0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00a884' }} />
                      Verified Business Bot
                    </div>
                  </div>
                </div>
                <ShieldCheck size={18} color="#00a884" />
              </div>

              {/* Chat Body */}
              <div
                style={{
                  backgroundColor: '#0b141a',
                  padding: '20px 16px',
                  minHeight: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {/* Incoming Alert Bubble */}
                <div
                  style={{
                    backgroundColor: '#202c33',
                    color: '#e9edef',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    borderTopLeftRadius: '2px',
                    maxWidth: '90%',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#00a884', marginBottom: '4px' }}>
                    <Bell size={13} /> New Gmail Alert
                  </div>
                  <div style={{ fontSize: '14px', lineHeight: 1.5, marginBottom: '8px' }}>
                    Client <strong>Marcus Vance</strong> (Vance Logistics) needs urgent pricing update for 50-seat fleet rollout.
                  </div>
                  <div
                    style={{
                      backgroundColor: '#111b21',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: '#aebac1',
                      lineHeight: 1.4,
                      marginBottom: '10px',
                    }}
                  >
                    <em>Suggested Reply:</em> "Hi Marcus, our 50-seat fleet rate is locked at $4,200/mo including dedicated support."
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#e9edef', marginBottom: '10px' }}>
                    Approve Reply?
                  </div>

                  {/* Interactive Action Buttons */}
                  {whatsappStatus === 'pending' ? (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() => setWhatsappStatus('approved')}
                        style={{
                          flex: 1,
                          backgroundColor: '#00a884',
                          color: '#ffffff',
                          border: 'none',
                          padding: '9px 12px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                      >
                        <Check size={14} /> Approve
                      </button>
                      <button
                        type="button"
                        onClick={() => setWhatsappStatus('edited')}
                        style={{
                          flex: 1,
                          backgroundColor: '#2a3942',
                          color: '#e9edef',
                          border: 'none',
                          padding: '9px 12px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  ) : whatsappStatus === 'approved' ? (
                    <div
                      style={{
                        backgroundColor: 'rgba(0, 168, 132, 0.15)',
                        border: '1px solid #00a884',
                        padding: '10px',
                        borderRadius: '6px',
                        textAlign: 'center',
                        fontSize: '12px',
                        color: '#00a884',
                        fontWeight: 700,
                      }}
                    >
                      ✓ Dispatched to Marcus via Gmail (10:43 AM)
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: '#111b21',
                        padding: '10px',
                        borderRadius: '6px',
                        textAlign: 'center',
                        fontSize: '12px',
                        color: '#aebac1',
                      }}
                    >
                      Ready for custom voice note or text adjustment.
                    </div>
                  )}
                  <div style={{ fontSize: '10px', color: '#8696a0', textAlign: 'right', marginTop: '6px' }}>
                    10:42 AM
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div
                style={{
                  backgroundColor: '#202c33',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid #2a3942',
                }}
              >
                <span style={{ fontSize: '13px', color: '#8696a0' }}>Type a reply or command...</span>
                <Send size={16} color="#00a884" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          5. ACTIVE WORKFLOWS
          Timeline Layout:
          Email Received
          ↓
          AI Analysis
          ↓
          WhatsApp Notification
          ↓
          Human Approval
          ↓
          Response Sent
      ─────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '88px 24px',
          backgroundColor: C.creamDark,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: C.primaryTeal,
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Sequential Reliability
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 800,
                color: C.darkTeal,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}
            >
              Active Workflow Pipeline
            </h2>
            <p style={{ fontSize: '16px', color: C.inkLight, maxWidth: '640px', margin: '0 auto' }}>
              How an inbound customer communication seamlessly flows from mailbox to smartphone to closed loop in under 90 seconds.
            </p>
          </div>

          {/* Timeline Visual Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>
            {/* Step 1 */}
            <div className="dash-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: C.tealLight,
                  color: C.primaryTeal,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px',
                  flexShrink: 0,
                }}
              >
                01
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: C.darkTeal, marginBottom: '2px' }}>
                  Email Received
                </div>
                <div style={{ fontSize: '13px', color: C.inkLight }}>
                  Encrypted webhook triggers upon delivery to authenticated Google Workspace or Exchange domain.
                </div>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: C.primaryTeal, backgroundColor: C.tealLight, padding: '4px 10px', borderRadius: '6px' }}>
                Instant (0.1s)
              </span>
            </div>

            {/* Step 2 */}
            <div className="dash-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: C.tealLight,
                  color: C.primaryTeal,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px',
                  flexShrink: 0,
                }}
              >
                02
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: C.darkTeal, marginBottom: '2px' }}>
                  AI Analysis
                </div>
                <div style={{ fontSize: '13px', color: C.inkLight }}>
                  Semantic parsing extracts intent, verifies CRM contact status, and retrieves relevant enterprise rate sheets.
                </div>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: C.primaryTeal, backgroundColor: C.tealLight, padding: '4px 10px', borderRadius: '6px' }}>
                0.4s
              </span>
            </div>

            {/* Step 3 */}
            <div className="dash-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: C.orangeLight,
                  color: C.orange,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px',
                  flexShrink: 0,
                }}
              >
                03
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: C.darkTeal, marginBottom: '2px' }}>
                  WhatsApp Notification
                </div>
                <div style={{ fontSize: '13px', color: C.inkLight }}>
                  High-priority brief generated and delivered directly to operations lead via private WhatsApp channel.
                </div>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: C.orange, backgroundColor: C.orangeLight, padding: '4px 10px', borderRadius: '6px' }}>
                Instant Ping
              </span>
            </div>

            {/* Step 4 */}
            <div className="dash-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: C.tealLight,
                  color: C.primaryTeal,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px',
                  flexShrink: 0,
                }}
              >
                04
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: C.darkTeal, marginBottom: '2px' }}>
                  Human Approval
                </div>
                <div style={{ fontSize: '13px', color: C.inkLight }}>
                  One-tap button authorization ensures human-in-the-loop governance for all sensitive transactions.
                </div>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: C.primaryTeal, backgroundColor: C.tealLight, padding: '4px 10px', borderRadius: '6px' }}>
                One-Tap
              </span>
            </div>

            {/* Step 5 */}
            <div className="dash-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#E6F4EA',
                  color: '#0F9D58',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px',
                  flexShrink: 0,
                }}
              >
                05
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: C.darkTeal, marginBottom: '2px' }}>
                  Response Sent
                </div>
                <div style={{ fontSize: '13px', color: C.inkLight }}>
                  Customized reply sent from executive's authentic email address and activity logged into HubSpot/Salesforce.
                </div>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F9D58', backgroundColor: '#E6F4EA', padding: '4px 10px', borderRadius: '6px' }}>
                Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          6. CALENDAR AUTOMATION
          Large calendar panel.
          Appointments: Demo Call, Sales Meeting, Client Follow-up, Strategy Session.
      ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '88px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: C.primaryTeal,
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Zero Scheduling Friction
          </span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 800,
              color: C.darkTeal,
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            Calendar Automation Panel
          </h2>
          <p style={{ fontSize: '16px', color: C.inkLight, maxWidth: '640px', margin: '0 auto' }}>
            FlowPilot negotiates time slots, checks executive calendar buffers, and issues meeting invites without back-and-forth email friction.
          </p>
        </div>

        {/* Large Calendar Panel Container */}
        <div
          style={{
            backgroundColor: C.white,
            border: `1px solid ${C.borderSolid}`,
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 16px 36px -10px rgba(0, 70, 66, 0.08)',
          }}
        >
          {/* Calendar Header Bar */}
          <div
            style={{
              backgroundColor: C.creamDark,
              padding: '16px 24px',
              borderBottom: `1px solid ${C.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calendar size={20} color={C.primaryTeal} />
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 700, color: C.darkTeal }}>
                Autonomous Booking Ledger — Today's Schedule
              </span>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: C.primaryTeal }}>
              18 meetings booked this week • 0 conflicts
            </div>
          </div>

          {/* Appointments Grid */}
          <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {APPOINTMENTS.map((apt) => (
              <div
                key={apt.id}
                style={{
                  backgroundColor: C.cream,
                  border: `1px solid ${C.border}`,
                  borderRadius: '8px',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: C.primaryTeal, marginBottom: '6px' }}>
                    {apt.time}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: C.darkTeal, marginBottom: '4px' }}>
                    {apt.title}
                  </div>
                  <div style={{ fontSize: '13px', color: C.ink, marginBottom: '10px' }}>
                    {apt.client}
                  </div>
                </div>

                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: '10px', marginTop: '10px' }}>
                  <div style={{ fontSize: '11px', color: C.inkLight, marginBottom: '4px' }}>
                    {apt.status}
                  </div>
                  <span
                    style={{
                      backgroundColor: C.tealLight,
                      color: C.primaryTeal,
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      display: 'inline-block',
                    }}
                  >
                    {apt.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          7. ANALYTICS SECTION
          Cards:
          - 98.7% Automation Accuracy
          - 1.2s Average Response Time
          - 20+ Hours Saved Weekly
          - 24/7 Workflow Monitoring
      ─────────────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '88px 24px',
          backgroundColor: C.white,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: C.primaryTeal,
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Measured Impact
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 800,
                color: C.darkTeal,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}
            >
              Real Operational Performance
            </h2>
            <p style={{ fontSize: '16px', color: C.inkLight, maxWidth: '640px', margin: '0 auto' }}>
              Precision and velocity measured across thousands of high-volume customer touchpoints.
            </p>
          </div>

          <div
            className="analytics-grid-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {/* Metric 1 */}
            <div className="dash-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '44px',
                  fontWeight: 800,
                  color: C.primaryTeal,
                  marginBottom: '8px',
                }}
              >
                98.7%
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: C.darkTeal, marginBottom: '6px' }}>
                Automation Accuracy
              </div>
              <div style={{ fontSize: '13px', color: C.inkLight }}>
                Verified by zero-hallucination semantic constraints
              </div>
            </div>

            {/* Metric 2 */}
            <div className="dash-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '44px',
                  fontWeight: 800,
                  color: C.orange,
                  marginBottom: '8px',
                }}
              >
                1.2s
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: C.darkTeal, marginBottom: '6px' }}>
                Average Response Time
              </div>
              <div style={{ fontSize: '13px', color: C.inkLight }}>
                From inbound webhook to drafted resolution
              </div>
            </div>

            {/* Metric 3 */}
            <div className="dash-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '44px',
                  fontWeight: 800,
                  color: C.primaryTeal,
                  marginBottom: '8px',
                }}
              >
                20+
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: C.darkTeal, marginBottom: '6px' }}>
                Hours Saved Weekly
              </div>
              <div style={{ fontSize: '13px', color: C.inkLight }}>
                Per team lead on repetitive communication triage
              </div>
            </div>

            {/* Metric 4 */}
            <div className="dash-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '44px',
                  fontWeight: 800,
                  color: C.primaryTeal,
                  marginBottom: '8px',
                }}
              >
                24/7
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: C.darkTeal, marginBottom: '6px' }}>
                Workflow Monitoring
              </div>
              <div style={{ fontSize: '13px', color: C.inkLight }}>
                Continuous pipeline health tracking and instant failover
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          8. INTEGRATIONS SECTION
          Integration Grid:
          WhatsApp, Gmail, Google Calendar, Slack, Stripe, HubSpot, Zoom
      ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '88px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: C.orange,
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Connected Ecosystem
          </span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 800,
              color: C.darkTeal,
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            Native Enterprise Integrations
          </h2>
          <p style={{ fontSize: '16px', color: C.inkLight, maxWidth: '640px', margin: '0 auto' }}>
            FlowPilot connects into the core tools your company already uses every single hour.
          </p>
        </div>

        {/* Integrations Grid */}
        <div
          className="integrations-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {INTEGRATIONS.map((intg, idx) => (
            <div key={idx} className="dash-card" style={{ padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 700, color: C.darkTeal, margin: 0 }}>
                  {intg.name}
                </h3>
                <span
                  style={{
                    backgroundColor: '#E6F4EA',
                    color: '#0F9D58',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {intg.status}
                </span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: C.primaryTeal, marginBottom: '6px' }}>
                {intg.category}
              </div>
              <p style={{ fontSize: '13px', color: C.inkLight, lineHeight: 1.5, margin: 0 }}>
                {intg.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          9. FINAL CTA
          Large background image section.
          Title: "Ready to Automate Your Operations?"
          Buttons: Book Demo, Get Started
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
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center',
            color: C.white,
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffd0a8',
              display: 'block',
              marginBottom: '14px',
            }}
          >
            Zero Disruption Deployment
          </span>

          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(32px, 4.8vw, 50px)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              marginBottom: '20px',
              color: C.white,
            }}
          >
            Ready to Automate Your Operations?
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '660px',
              margin: '0 auto 36px',
            }}
          >
            Join modern organizations saving 20+ hours each week with intelligent WhatsApp, Gmail, and Calendar workflows.
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
            <Link
              to="/pricing"
              className="btn-dash-primary"
              style={{ padding: '14px 28px', fontSize: '16px' }}
            >
              View Pricing
            </Link>
            <Link
              to="/book-a-demo"
              className="btn-dash-orange"
              style={{ padding: '14px 28px', fontSize: '16px' }}
            >
              Book Demo
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/auth"
              className="btn-dash-secondary"
              style={{ padding: '14px 28px', fontSize: '16px' }}
            >
              Get Started
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
              color: 'rgba(255, 255, 255, 0.75)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color={C.orange} /> 14-Day Free Evaluation
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color={C.orange} /> No Credit Card Required
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color={C.orange} /> Setup in 15 Minutes
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardPreviewPage;
