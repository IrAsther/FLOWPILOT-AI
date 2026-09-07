import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Video,
  Users,
  User,
  ChevronDown,
  ChevronUp,
  X,
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

export const CalendarAutomationPage = () => {
  const [selectedDay, setSelectedDay] = useState(16);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const calendarDays = [
    { day: 'MON', date: 13 },
    { day: 'TUE', date: 14 },
    { day: 'WED', date: 15 },
    { day: 'THU', date: 16 },
    { day: 'FRI', date: 17 },
  ];

  const faqs = [
    {
      q: 'Which calendar platforms are natively supported?',
      a: 'FlowPilot supports real-time two-way sync with Google Calendar, Microsoft 365 (Outlook), Apple Calendar (via secure CalDAV), and enterprise Exchange deployments.',
    },
    {
      q: 'How does FlowPilot avoid double bookings across multiple calendars?',
      a: 'FlowPilot simultaneously checks all linked personal and corporate calendars in real time. Private appointments block off availability without exposing event titles or descriptions.',
    },
    {
      q: 'How does autonomous timezone negotiation work?',
      a: 'FlowPilot identifies the recipient’s geographic locale, calculates mutual business hours, and proposes times in both parties’ native timezones.',
    },
    {
      q: 'Can we define focus blocks and meeting buffers?',
      a: 'Yes. You can enforce post-call buffers (e.g., 15 or 30 minutes), protect daily lunch hours, and limit total daily meeting hours to prevent schedule fatigue.',
    },
  ];

  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* 1. HERO SECTION */}
      <section style={{ padding: '72px 32px 88px 32px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: C.brandPeach,
                color: C.primaryContainer,
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}
            >
              <CalendarIcon size={13} />
              <span>CALENDAR AUTOMATION</span>
            </div>

            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(34px, 4.8vw, 52px)',
                fontWeight: 800,
                color: C.onSurface,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              YOUR CALENDAR SHOULD WORK FOR YOU.
            </h1>

            <p style={{ fontSize: '17px', color: C.onSurfaceVariant, lineHeight: 1.6, marginBottom: '28px' }}>
              FlowPilot coordinates meetings, checks cross-team availability, and books appointments autonomously without the endless back-and-forth emails.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <Link
                to="/book-a-demo"
                style={{
                  backgroundColor: C.secondaryContainer,
                  color: '#ffffff',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(254, 133, 44, 0.25)',
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

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingTop: '20px', borderTop: `1px solid ${C.borderLight}`, fontSize: '13px', color: C.onSurfaceVariant }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color={C.primaryContainer} /> Zero back-and-forth emails
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color={C.primaryContainer} /> Multi-calendar sync
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color={C.primaryContainer} /> Instant video link injection
              </div>
            </div>
          </div>

          {/* Realistic Product Visual: Meeting Assistant View */}
          <div
            style={{
              backgroundColor: C.surfaceContainerLow,
              border: `1px solid ${C.outlineVariant}`,
              borderRadius: '18px',
              padding: '24px',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: `1px solid ${C.borderLight}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f87171' }} />
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#fbbf24' }} />
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#34d399' }} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 600, color: C.onSurfaceVariant }}>
                  FlowPilot Scheduling Engine
                </span>
              </div>
              <span style={{ padding: '2px 8px', backgroundColor: C.brandPeach, color: C.primaryContainer, borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>
                Active Sync
              </span>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '14px', marginBottom: '14px', border: `1px solid ${C.borderLight}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: C.onSurface, margin: 0 }}>
                  Client Inbound: Sarah Jenkins (Acme Corp)
                </h4>
                <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Just now</span>
              </div>
              <p style={{ fontSize: '12px', color: C.onSurfaceVariant, margin: '0 0 10px 0', lineHeight: 1.5 }}>
                "Are you available Thursday afternoon for our quarterly review?"
              </p>
              <div style={{ backgroundColor: C.surfaceContainerLow, padding: '8px 12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
                <span style={{ color: C.primaryContainer, fontWeight: 600 }}>
                  Scanning availability &amp; focus blocks...
                </span>
                <span style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', padding: '2px 8px', borderRadius: '9999px', fontSize: '10px', fontWeight: 700 }}>
                  Thursday 15:00 Available
                </span>
              </div>
            </div>

            {/* Calendar Week View Grid */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '14px', border: `1px solid ${C.borderLight}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>October 2025 — Week 42</span>
                <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Month / Week view</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', textAlign: 'center' }}>
                {calendarDays.map((d, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedDay(d.date)}
                    style={{
                      padding: '8px 4px',
                      borderRadius: '8px',
                      backgroundColor: selectedDay === d.date ? C.primaryContainer : C.surfaceContainerLow,
                      color: selectedDay === d.date ? '#ffffff' : C.onSurface,
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    <span style={{ display: 'block', fontSize: '10px', opacity: 0.8 }}>{d.day}</span>
                    <span style={{ fontSize: '14px', fontWeight: 700 }}>{d.date}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: `1px solid ${C.borderLight}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
                <span>Proposed Slot: <strong style={{ color: C.onSurface }}>Thursday 15:00 - 16:00 EST</strong></span>
                <span style={{ color: C.secondaryContainer, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Video size={12} /> Google Meet Generated
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REALISTIC CONVERSATION DEMO */}
      <section style={{ padding: '72px 32px', backgroundColor: C.surfaceContainerLow, borderTop: `1px solid ${C.borderLight}`, borderBottom: `1px solid ${C.borderLight}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 800, color: C.onSurface, marginBottom: '16px', lineHeight: 1.2 }}>
                Autonomous Negotiation Dialogue
              </h2>
              <p style={{ fontSize: '16px', color: C.onSurfaceVariant, lineHeight: 1.6, marginBottom: '24px' }}>
                FlowPilot communicates with natural, professional conciseness. It respects mutual calendars, prevents schedule overlap, and injects video conferencing links into calendar invites.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <CheckCircle2 size={16} color={C.primaryContainer} />
                  <div style={{ fontSize: '14px' }}>
                    <strong style={{ color: C.onSurface }}>Timezone Awareness:</strong> Confirms meeting hours in both client and host local time.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <CheckCircle2 size={16} color={C.primaryContainer} />
                  <div style={{ fontSize: '14px' }}>
                    <strong style={{ color: C.onSurface }}>Conflict-Free Routing:</strong> Resolves schedule changes without human intervention.
                  </div>
                </div>
              </div>
            </div>

            {/* Chat thread mockup */}
            <div style={{ backgroundColor: C.surfaceContainerLowest, border: `1px solid ${C.outlineVariant}`, borderRadius: '18px', padding: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', marginBottom: '16px', borderBottom: `1px solid ${C.borderLight}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: C.secondaryContainer, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '11px' }}>
                    FP
                  </span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>FlowPilot Scheduling Assistant</div>
                    <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Active with alex@enterprise.co</div>
                  </div>
                </div>
                <span style={{ padding: '2px 8px', backgroundColor: C.brandPeach, color: C.primaryContainer, borderRadius: '6px', fontSize: '10px', fontWeight: 600 }}>
                  Autonomous Thread
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: C.surfaceContainerHigh, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>A</span>
                  <div style={{ backgroundColor: C.surfaceContainerLow, padding: '10px 12px', borderRadius: '10px', fontSize: '12px', color: C.onSurface, maxWidth: '82%' }}>
                    Hey Alex! We need to finalize the quarterly review. Are you free early next week?
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                  <div style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '10px 12px', borderRadius: '10px', fontSize: '12px', maxWidth: '82%' }}>
                    Hello! Checking Alex's schedule... Tuesday at 2:00 PM EST or Thursday at 3:00 PM EST are open. Which one works better for you?
                  </div>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: C.secondaryContainer, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>FP</span>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: C.surfaceContainerHigh, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>A</span>
                  <div style={{ backgroundColor: C.surfaceContainerLow, padding: '10px 12px', borderRadius: '10px', fontSize: '12px', color: C.onSurface, maxWidth: '82%' }}>
                    Thursday at 3:00 PM EST is perfect. Please send the calendar invite.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                  <div style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '10px 12px', borderRadius: '10px', fontSize: '12px', maxWidth: '82%', border: '1px solid #a7f3d0' }}>
                    <strong>✓ Confirmed &amp; Dispatched</strong>
                    <div style={{ marginTop: '2px', opacity: 0.9 }}>
                      Calendar invitation sent with Google Meet link attached.
                    </div>
                  </div>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: C.secondaryContainer, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>FP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
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

      {/* 4. BOTTOM CTA BANNER */}
      <section style={{ padding: '88px 32px', backgroundColor: C.primaryContainer, color: C.onPrimary, textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(30px, 4.4vw, 44px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            TAKE CONTROL OF YOUR TIME.
          </h2>
          <p style={{ fontSize: '17px', color: C.onPrimaryContainer, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 36px auto' }}>
            Schedule client calls autonomously with guaranteed conflict resolution.
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
