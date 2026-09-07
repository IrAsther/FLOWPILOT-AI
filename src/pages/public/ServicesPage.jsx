import React from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────────────────────
   DESIGN TOKENS — exact Stitch color map
───────────────────────────────────────────────────────────────────────────── */
const C = {
  background: '#fdf9f4',
  surface: '#fdf9f4',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f7f3ee',
  surfaceContainer: '#f1ede8',
  surfaceContainerHigh: '#ebe8e3',
  surfaceContainerHighest: '#e6e2dd',
  onSurface: '#1c1c19',
  onSurfaceVariant: '#3f4947',
  outline: '#6f7977',
  outlineVariant: '#bec9c6',
  primary: '#004642',
  primaryContainer: '#01605a',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#8ed8d0',
  primaryFixed: '#a5f0e8',
  onPrimaryFixed: '#00201e',
  secondary: '#994700',
  secondaryContainer: '#fe852c',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#632c00',
  secondaryFixed: '#ffdbc8',
  secondaryFixedVariant: '#743500',
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
};

/* ─────────────────────────────────────────────────────────────────────────────
   TYPOGRAPHY — exact Stitch type scale
───────────────────────────────────────────────────────────────────────────── */
const T = {
  headlineXl:  { fontFamily: "'Plus Jakarta Sans'", fontSize: '48px', lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: 700 },
  headlineLg:  { fontFamily: "'Plus Jakarta Sans'", fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: 600 },
  headlineMd:  { fontFamily: "'Plus Jakarta Sans'", fontSize: '24px', lineHeight: '32px', fontWeight: 600 },
  headlineSm:  { fontFamily: "'Plus Jakarta Sans'", fontSize: '18px', lineHeight: '24px', fontWeight: 600 },
  labelMd:     { fontFamily: "'Plus Jakarta Sans'", fontSize: '14px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 500 },
  labelSm:     { fontFamily: "'Plus Jakarta Sans'", fontSize: '12px', lineHeight: '16px', letterSpacing: '0.01em', fontWeight: 500 },
  bodyLg:      { fontFamily: "'Inter'", fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
  bodyMd:      { fontFamily: "'Inter'", fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
  bodySm:      { fontFamily: "'Inter'", fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
};

/* ─────────────────────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────────────────────── */
function ServicesHero() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 32px 112px',
        maxWidth: '1280px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '-96px', right: 0,
        width: '384px', height: '384px',
        backgroundColor: `${C.primaryFixed}33`,
        borderRadius: '50%', filter: 'blur(64px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '25%',
        width: '320px', height: '320px',
        backgroundColor: `${C.secondaryFixed}33`,
        borderRadius: '50%', filter: 'blur(64px)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ maxWidth: '768px', position: 'relative', zIndex: 10 }}>
        {/* Pill badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '4px 12px', borderRadius: '9999px',
          backgroundColor: C.surfaceContainer,
          border: `1px solid ${C.outlineVariant}66`,
          marginBottom: '24px',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            backgroundColor: C.secondaryContainer,
            display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{ ...T.labelSm, color: C.primary, fontWeight: 600 }}>
            Enterprise Services Overview
          </span>
        </div>

        <h1 style={{ ...T.headlineXl, color: C.onSurface, marginBottom: '24px' }}>
          Autonomous Capabilities Engineered for Enterprise Scale
        </h1>

        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginBottom: '40px', lineHeight: '1.75' }}>
          Transform unstructured operational workflows into autonomous execution loops. Precision intelligence designed for executive leadership demanding absolute reliability.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
          <a
            href="#solutions"
            style={{
              backgroundColor: C.primaryContainer,
              color: C.onPrimaryContainer,
              padding: '14px 24px',
              borderRadius: '8px',
              ...T.labelMd,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            }}
          >
            Explore Capabilities
          </a>
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.surfaceContainer,
              border: `1px solid ${C.outlineVariant}99`,
              color: C.onSurface,
              padding: '14px 24px',
              borderRadius: '8px',
              ...T.labelMd,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Schedule Architecture Review
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SERVICE 01: WHATSAPP AI AGENT
───────────────────────────────────────────────────────────────────────────── */
function ServiceWhatsApp() {
  return (
    <section
      id="solutions"
      style={{
        paddingTop: '96px', paddingBottom: '96px',
        backgroundColor: C.surfaceContainerLow,
        borderTop: `1px solid ${C.outlineVariant}4D`,
        borderBottom: `1px solid ${C.outlineVariant}4D`,
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '48px', alignItems: 'center' }}
          className="svc-grid">
          {/* Left — Text */}
          <div>
            <span style={{ ...T.labelSm, color: C.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Service 01
            </span>
            <h2 style={{ ...T.headlineLg, color: C.onSurface, marginTop: '8px', marginBottom: '16px' }}>
              WhatsApp AI Agent
            </h2>
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginBottom: '24px', lineHeight: '1.75' }}>
              Immersive conversational operations preview with real-time AI summaries and instant action triggers. Handle high-volume client engagement natively through secure messaging protocols.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {[
                'Sub-second natural language response processing',
                'Automated CRM record creation and lead scoring',
                'Secure end-to-end encryption for executive comms',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', ...T.bodyMd, color: C.onSurface }}>
                  <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: '18px', flexShrink: 0 }}>check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Chat Mockup */}
          <div>
            <div style={{
              backgroundColor: C.surface,
              borderRadius: '12px',
              padding: '24px',
              border: `1px solid ${C.outlineVariant}66`,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Card Header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingBottom: '16px', borderBottom: `1px solid ${C.outlineVariant}4D`,
                marginBottom: '24px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    backgroundColor: C.primaryContainer, color: C.onPrimaryContainer,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700,
                    ...T.labelMd,
                  }}>FP</div>
                  <div>
                    <h4 style={{ ...T.headlineSm, color: C.onSurface }}>FlowPilot Concierge</h4>
                    <span style={{ ...T.bodySm, color: C.onSurfaceVariant }}>Active • WhatsApp Business API</span>
                  </div>
                </div>
                <span style={{
                  padding: '4px 12px',
                  backgroundColor: `${C.primaryFixed}4D`,
                  color: C.onPrimaryFixed,
                  borderRadius: '9999px',
                  ...T.labelSm, fontWeight: 600,
                }}>Live Feed</span>
              </div>

              {/* Chat Messages */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                {/* VIP incoming */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', maxWidth: '448px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    backgroundColor: C.surfaceContainerHigh, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    ...T.bodySm, fontWeight: 700, color: C.onSurface,
                  }}>VIP</div>
                  <div style={{
                    backgroundColor: C.surfaceContainer, padding: '16px',
                    borderRadius: '12px', borderTopLeftRadius: '0',
                    border: `1px solid ${C.outlineVariant}4D`,
                  }}>
                    <p style={{ ...T.bodyMd, color: C.onSurface }}>
                      "Can you review Q3 logistics variance reports and schedule an emergency sync with regional partners?"
                    </p>
                    <span style={{ fontSize: '10px', color: C.onSurfaceVariant, marginTop: '4px', display: 'block' }}>10:42 AM</span>
                  </div>
                </div>

                {/* AI reply */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', maxWidth: '448px', marginLeft: 'auto', flexDirection: 'row-reverse' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    backgroundColor: C.primary, color: C.onPrimary, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    ...T.bodySm, fontWeight: 700,
                  }}>AI</div>
                  <div style={{
                    backgroundColor: C.primaryContainer, color: C.onPrimaryContainer,
                    padding: '16px', borderRadius: '12px', borderTopRightRadius: '0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  }}>
                    <p style={{ ...T.bodyMd, fontWeight: 500 }}>
                      Analysis Complete: Q3 variance is +4.2%. I've flagged 3 bottlenecks and pre-drafted calendar invitations for 2:00 PM EST.
                    </p>
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.2)', display: 'flex', gap: '8px' }}>
                      <button style={{
                        backgroundColor: '#fff', color: C.primary, padding: '6px 12px',
                        borderRadius: '4px', ...T.labelSm, fontWeight: 700, cursor: 'pointer', border: 'none',
                      }}>Send Invites</button>
                      <button style={{
                        backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', padding: '6px 12px',
                        borderRadius: '4px', ...T.labelSm, cursor: 'pointer', border: 'none',
                      }}>Modify Parameters</button>
                    </div>
                    <span style={{ fontSize: '10px', opacity: 0.75, marginTop: '8px', display: 'block' }}>10:42 AM • Action Executed</span>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div style={{
                backgroundColor: C.surfaceContainerLow, padding: '12px',
                borderRadius: '8px', border: `1px solid ${C.outlineVariant}4D`,
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <span className="material-symbols-outlined" style={{ color: C.onSurfaceVariant }}>lock</span>
                <span style={{ ...T.bodySm, color: C.onSurfaceVariant, flex: 1 }}>
                  Encrypted enterprise session active. Type a command or prompt...
                </span>
                <span className="material-symbols-outlined" style={{ color: C.primary, cursor: 'pointer' }}>send</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SERVICE 02: EMAIL AUTOMATION — reversed layout
───────────────────────────────────────────────────────────────────────────── */
function ServiceEmail() {
  return (
    <section style={{ paddingTop: '96px', paddingBottom: '96px', maxWidth: '1280px', margin: '0 auto', padding: '96px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '48px', alignItems: 'center' }}
        className="svc-grid">
        {/* Left — Triage UI (order 2 on mobile → order 1 on desktop) */}
        <div className="svc-order-first">
          <div style={{
            backgroundColor: C.surfaceContainerLowest, borderRadius: '12px', padding: '24px',
            border: `1px solid ${C.outlineVariant}66`, boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: '24px', paddingBottom: '16px', borderBottom: `1px solid ${C.outlineVariant}4D`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: C.secondary }}>bolt</span>
                <h3 style={{ ...T.headlineSm, color: C.onSurface }}>Zero-Inbox Triage Engine</h3>
              </div>
              <span style={{
                ...T.labelSm, padding: '4px 10px', fontWeight: 600,
                backgroundColor: `${C.secondaryFixed}66`,
                color: C.secondaryFixedVariant,
                borderRadius: '6px',
              }}>99.4% Autonomous</span>
            </div>

            {/* 2-col card grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {/* Incoming */}
              <div style={{
                backgroundColor: C.surfaceContainerLow, padding: '16px',
                borderRadius: '8px', border: `1px solid ${C.outlineVariant}4D`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ ...T.labelSm, fontWeight: 700, color: C.onSurface }}>Incoming Email</span>
                  <span style={{
                    fontSize: '10px', color: C.error, fontWeight: 500,
                    backgroundColor: C.errorContainer, padding: '2px 8px', borderRadius: '4px',
                  }}>High Priority</span>
                </div>
                <p style={{ ...T.bodySm, fontWeight: 600, color: C.onSurface, marginBottom: '4px' }}>Contract Amendment #8834</p>
                <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>
                  "Please review updated compliance clauses regarding data residency requirements prior to the board hearing tomorrow morning..."
                </p>
              </div>

              {/* AI Draft */}
              <div style={{
                backgroundColor: `${C.primaryFixed}33`, padding: '16px',
                borderRadius: '8px', border: `1px solid ${C.primary}33`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ ...T.labelSm, fontWeight: 700, color: C.primary }}>AI Generated Draft</span>
                  <span style={{
                    fontSize: '10px', color: C.primary, fontWeight: 500,
                    backgroundColor: C.primaryFixed, padding: '2px 8px', borderRadius: '4px',
                  }}>Ready to Send</span>
                </div>
                <p style={{ ...T.bodySm, fontWeight: 600, color: C.onSurface, marginBottom: '4px' }}>Response dispatched</p>
                <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>
                  "Thank you. Our legal team has verified clause 4.2 against EU GDPR standards. Attached is the countersigned execution copy."
                </p>
              </div>
            </div>

            {/* Time Saved Row */}
            <div style={{
              marginTop: '24px', padding: '16px', backgroundColor: C.surfaceContainer,
              borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: C.primary }}>schedule</span>
                <div>
                  <p style={{ ...T.bodySm, fontWeight: 600, color: C.onSurface }}>Time Saved Today</p>
                  <p style={{ ...T.labelSm, color: C.onSurfaceVariant }}>4 hours 20 minutes across 84 threads</p>
                </div>
              </div>
              <button style={{
                backgroundColor: C.primary, color: C.onPrimary,
                padding: '8px 16px', borderRadius: '8px',
                ...T.labelSm, fontWeight: 700, cursor: 'pointer', border: 'none',
              }}>Review Log</button>
            </div>
          </div>
        </div>

        {/* Right — Text */}
        <div className="svc-order-second">
          <span style={{ ...T.labelSm, color: C.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            Service 02
          </span>
          <h2 style={{ ...T.headlineLg, color: C.onSurface, marginTop: '8px', marginBottom: '16px' }}>
            Email Automation & Triage
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginBottom: '24px', lineHeight: '1.75' }}>
            Split-screen zero-inbox triage interface showing incoming executive correspondence instantly transformed into context-aware, professionally verified responses.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Context-aware drafting matching executive tone',
              'Automatic attachment verification & parsing',
              'One-click human-in-the-loop override controls',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', ...T.bodyMd, color: C.onSurface }}>
                <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: '18px', flexShrink: 0 }}>check_circle</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SERVICE 03: WEEKLY EMAIL INTELLIGENCE
───────────────────────────────────────────────────────────────────────────── */
function ServiceIntelligence() {
  return (
    <section style={{
      paddingTop: '96px', paddingBottom: '96px',
      backgroundColor: C.surfaceContainerLow,
      borderTop: `1px solid ${C.outlineVariant}4D`,
      borderBottom: `1px solid ${C.outlineVariant}4D`,
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ maxWidth: '768px', marginBottom: '64px' }}>
          <span style={{ ...T.labelSm, color: C.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            Service 03
          </span>
          <h2 style={{ ...T.headlineLg, color: C.onSurface, marginTop: '8px', marginBottom: '16px' }}>
            Weekly Email Intelligence
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, lineHeight: '1.75' }}>
            Executive analytics and trend visualization showcasing time-recovery metrics, sentiment trajectories, and prioritized strategic digests delivered every Monday at 6:00 AM.
          </p>
        </div>

        {/* 3 Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}
          className="stat-grid">
          {[
            { label: 'Hours Recovered', value: '18.5', badge: '+14% vs last week', badgeColor: C.primary, desc: 'Equivalent to 2.3 standard executive working days reclaimed.' },
            { label: 'Sentiment Index', value: '94%', badge: 'Optimal', badgeColor: C.primary, desc: 'Stakeholder satisfaction measured across 340 parsed interactions.' },
            { label: 'Action Items Cleared', value: '129', badge: 'Zero Backlog', badgeColor: C.secondary, desc: 'Fully automated resolutions requiring zero manual intervention.' },
          ].map((s) => (
            <div key={s.label} style={{
              backgroundColor: C.surface, padding: '24px', borderRadius: '12px',
              border: `1px solid ${C.outlineVariant}66`, boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            }}>
              <span style={{ ...T.labelSm, color: C.onSurfaceVariant, fontWeight: 500 }}>{s.label}</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
                <span style={{ ...T.headlineXl, color: C.onSurface }}>{s.value}</span>
                <span style={{ ...T.labelSm, fontWeight: 600, color: s.badgeColor }}>{s.badge}</span>
              </div>
              <p style={{ ...T.bodySm, color: C.onSurfaceVariant, marginTop: '16px' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Digest Preview Widget */}
        <div style={{
          backgroundColor: C.surface, borderRadius: '12px', padding: '32px',
          border: `1px solid ${C.outlineVariant}66`, boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: '24px', paddingBottom: '16px', borderBottom: `1px solid ${C.outlineVariant}4D`,
            flexWrap: 'wrap', gap: '12px',
          }}>
            <div>
              <h4 style={{ ...T.headlineSm, color: C.onSurface }}>Executive Weekly Digest #42</h4>
              <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>Prepared by FlowPilot Intelligence Core • Oct 12 - Oct 18</p>
            </div>
            <span style={{
              padding: '4px 12px', backgroundColor: C.primaryContainer, color: C.onPrimaryContainer,
              borderRadius: '8px', ...T.labelSm, fontWeight: 700,
            }}>Secure PDF Export</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="digest-grid">
            <div style={{
              backgroundColor: C.surfaceContainerLow, padding: '20px',
              borderRadius: '8px', border: `1px solid ${C.outlineVariant}4D`,
            }}>
              <h5 style={{
                ...T.labelMd, fontWeight: 700, color: C.onSurface, marginBottom: '8px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: '18px' }}>trending_up</span>
                Top Strategic Priority
              </h5>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                Q4 budget reallocations for APAC expansion finalized following automated thread consensus with regional directors.
              </p>
            </div>
            <div style={{
              backgroundColor: C.surfaceContainerLow, padding: '20px',
              borderRadius: '8px', border: `1px solid ${C.outlineVariant}4D`,
            }}>
              <h5 style={{
                ...T.labelMd, fontWeight: 700, color: C.onSurface, marginBottom: '8px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span className="material-symbols-outlined" style={{ color: C.secondary, fontSize: '18px' }}>warning</span>
                Potential Bottleneck
              </h5>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                Vendor security audit pending sign-off from compliance. Automated reminder scheduled for tomorrow at 9:00 AM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SERVICE 04: CALENDAR AUTOMATION
───────────────────────────────────────────────────────────────────────────── */
const CALENDAR_DAYS = [
  { day: 'MON', meetingBg: C.primaryContainer, meetingColor: C.onPrimaryContainer, meetingLabel: 'Board Sync (10am)', bufferBg: `${C.secondaryFixed}4D`, bufferColor: C.secondaryFixedVariant, bufferLabel: 'Buffer Zone' },
  { day: 'TUE', meetingBg: C.surfaceContainerHigh, meetingColor: C.onSurface, meetingLabel: 'Strategy (2pm)', bufferBg: `${C.primaryFixed}4D`, bufferColor: C.onPrimaryFixed, bufferLabel: 'AI Focus Block' },
  { day: 'WED', meetingBg: C.primaryContainer, meetingColor: C.onPrimaryContainer, meetingLabel: 'Partner Review', bufferBg: `${C.secondaryFixed}4D`, bufferColor: C.secondaryFixedVariant, bufferLabel: 'Buffer Zone' },
  { day: 'THU', meetingBg: C.surfaceContainerHigh, meetingColor: C.onSurface, meetingLabel: 'All-Hands (11am)', bufferBg: `${C.primaryFixed}4D`, bufferColor: C.onPrimaryFixed, bufferLabel: 'AI Focus Block' },
  { day: 'FRI', meetingBg: C.secondaryContainer, meetingColor: '#fff', meetingLabel: 'Q4 Review', bufferBg: `${C.secondaryFixed}4D`, bufferColor: C.secondaryFixedVariant, bufferLabel: 'Buffer Zone' },
];

function ServiceCalendar() {
  return (
    <section style={{ paddingTop: '96px', paddingBottom: '96px', maxWidth: '1280px', margin: '0 auto', padding: '96px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '48px', alignItems: 'center' }}
        className="svc-grid">
        {/* Left — Text */}
        <div>
          <span style={{ ...T.labelSm, color: C.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            Service 04
          </span>
          <h2 style={{ ...T.headlineLg, color: C.onSurface, marginTop: '8px', marginBottom: '16px' }}>
            Calendar Automation & Buffer Detection
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginBottom: '24px', lineHeight: '1.75' }}>
            Interactive calendar week view highlighting intelligent meeting scheduling, automatic buffer zone protection, and contextual conflict resolution.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Dynamic focus-time block preservation',
              'Smart rescheduling based on priority matrix',
              'Cross-timezone alignment algorithms',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', ...T.bodyMd, color: C.onSurface }}>
                <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: '18px', flexShrink: 0 }}>check_circle</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Calendar Card */}
        <div>
          <div style={{
            backgroundColor: C.surfaceContainerLowest, borderRadius: '12px', padding: '24px',
            border: `1px solid ${C.outlineVariant}66`, boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: '24px', paddingBottom: '16px', borderBottom: `1px solid ${C.outlineVariant}4D`,
              flexWrap: 'wrap', gap: '8px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: C.primary }}>calendar_month</span>
                <h3 style={{ ...T.headlineSm, color: C.onSurface }}>Executive Schedule Optimization</h3>
              </div>
              <span style={{
                ...T.labelSm, color: C.primary, fontWeight: 700,
                backgroundColor: `${C.primaryFixed}4D`, padding: '4px 12px', borderRadius: '9999px',
              }}>+4.5 Hours Buffer Added</span>
            </div>

            {/* Calendar Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', textAlign: 'center', marginBottom: '24px' }}>
              {CALENDAR_DAYS.map((d) => (
                <div key={d.day} style={{
                  backgroundColor: C.surfaceContainer, padding: '12px',
                  borderRadius: '8px', border: `1px solid ${C.outlineVariant}4D`,
                }}>
                  <span style={{ ...T.labelSm, fontWeight: 700, color: C.onSurface, display: 'block', marginBottom: '4px' }}>{d.day}</span>
                  <div style={{
                    backgroundColor: d.meetingBg, color: d.meetingColor,
                    fontSize: '11px', padding: '8px', borderRadius: '4px', fontWeight: 500, marginBottom: '8px',
                  }}>{d.meetingLabel}</div>
                  <div style={{
                    backgroundColor: d.bufferBg, color: d.bufferColor,
                    fontSize: '11px', padding: '8px', borderRadius: '4px', fontWeight: 500,
                  }}>{d.bufferLabel}</div>
                </div>
              ))}
            </div>

            {/* Conflict resolved row */}
            <div style={{
              backgroundColor: C.surfaceContainerLow, padding: '16px', borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
            }}>
              <span style={{ ...T.bodySm, color: C.onSurface, fontWeight: 500 }}>
                Conflict Auto-Resolved: Moved external vendor sync to Thursday afternoon.
              </span>
              <span className="material-symbols-outlined" style={{ color: C.primary, flexShrink: 0 }}>check_circle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SERVICE 05: CUSTOM AI WORKFLOWS
───────────────────────────────────────────────────────────────────────────── */
const WORKFLOW_NODES = [
  { num: '01', title: 'Trigger Event', desc: 'Incoming high-value client email or WhatsApp message.', bg: C.primary, color: C.onPrimary },
  { num: '02', title: 'AI Analysis', desc: 'Sentiment scoring, intent classification, and urgency rating.', bg: C.primaryContainer, color: C.onPrimaryContainer },
  { num: '03', title: 'Conditional Route', desc: 'Branch logic based on deal size and executive availability.', bg: C.secondary, color: C.onSecondary },
  { num: '04', title: 'Action Execution', desc: 'Automated reply sent, calendar synced, and CRM updated.', bg: C.secondaryContainer, color: C.onSecondaryContainer },
];

function ServiceWorkflows() {
  return (
    <section style={{
      paddingTop: '96px', paddingBottom: '96px',
      backgroundColor: C.surfaceContainerLow,
      borderTop: `1px solid ${C.outlineVariant}4D`,
      borderBottom: `1px solid ${C.outlineVariant}4D`,
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ maxWidth: '768px', marginBottom: '64px' }}>
          <span style={{ ...T.labelSm, color: C.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            Service 05
          </span>
          <h2 style={{ ...T.headlineLg, color: C.onSurface, marginTop: '8px', marginBottom: '16px' }}>
            Custom AI Workflows
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, lineHeight: '1.75' }}>
            Visual node-based automation builder preview. Seamlessly chain Triggers, AI Analysis, Conditional Routing, and Enterprise Actions without writing a single line of code.
          </p>
        </div>

        {/* Builder Visual */}
        <div style={{
          backgroundColor: C.surface, borderRadius: '12px', padding: '32px',
          border: `1px solid ${C.outlineVariant}66`, boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Version badge */}
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '24px' }}>
            <span style={{
              padding: '4px 12px', backgroundColor: `${C.primaryFixed}4D`,
              color: C.onPrimaryFixed, borderRadius: '9999px', ...T.labelSm, fontWeight: 700,
            }}>Visual Builder v4.2</span>
          </div>

          {/* 4 Nodes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', position: 'relative', zIndex: 10, margin: '24px 0' }}
            className="nodes-grid">
            {WORKFLOW_NODES.map((node, i) => (
              <div key={node.num} style={{
                backgroundColor: C.surfaceContainerLow, padding: '20px',
                borderRadius: '12px', border: `1px solid ${C.outlineVariant}4D`,
                position: 'relative',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  backgroundColor: node.bg, color: node.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '12px', marginBottom: '12px',
                }}>{node.num}</div>
                <h4 style={{ ...T.headlineSm, color: C.onSurface, marginBottom: '4px' }}>{node.title}</h4>
                <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>{node.desc}</p>
                {/* Connector line (not last) */}
                {i < WORKFLOW_NODES.length - 1 && (
                  <div style={{
                    position: 'absolute', right: '-12px', top: '50%',
                    width: '24px', height: '2px',
                    backgroundColor: C.outlineVariant,
                    display: 'none', // shown via className on wider screens
                  }} className="node-connector" />
                )}
              </div>
            ))}
          </div>

          {/* Footer row */}
          <div style={{
            marginTop: '32px', paddingTop: '24px',
            borderTop: `1px solid ${C.outlineVariant}4D`,
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="material-symbols-outlined" style={{ color: C.primary }}>check_circle</span>
              <span style={{ ...T.bodyMd, fontWeight: 500, color: C.onSurface }}>
                Flow validation passed with 0 compilation errors.
              </span>
            </div>
            <button style={{
              backgroundColor: C.primary, color: C.onPrimary,
              padding: '10px 24px', borderRadius: '8px',
              ...T.labelMd, fontWeight: 700, cursor: 'pointer', border: 'none',
            }}>
              Launch Custom Workflow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FINAL CTA
───────────────────────────────────────────────────────────────────────────── */
function ServicesCTA() {
  return (
    <section style={{
      paddingTop: '96px', paddingBottom: '96px',
      maxWidth: '1280px', margin: '0 auto', padding: '96px 32px',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Gradient BG */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${C.primaryFixed}33 0%, ${C.secondaryFixed}33 100%)`,
        borderRadius: '24px', zIndex: 0,
      }} />
      <div style={{ maxWidth: '768px', margin: '0 auto', paddingTop: '48px', paddingBottom: '48px', paddingLeft: '24px', paddingRight: '24px', position: 'relative', zIndex: 1 }}>
        <h2 style={{ ...T.headlineLg, color: C.onSurface, marginBottom: '24px' }}>
          Ready to Engineer Autonomous Operations for Your Enterprise?
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant, marginBottom: '40px', lineHeight: '1.75' }}>
          Join Fortune 500 leadership teams leveraging FlowPilot AI to eliminate administrative overhead and accelerate strategic execution.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.secondaryContainer, color: C.onSecondaryContainer,
              padding: '16px 32px', borderRadius: '8px',
              ...T.labelMd, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            }}
          >
            Start Free Enterprise Trial
          </Link>
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.surface, border: `1px solid ${C.outlineVariant}`,
              color: C.onSurface, padding: '16px 32px', borderRadius: '8px',
              ...T.labelMd, fontWeight: 600, textDecoration: 'none',
            }}
          >
            Schedule Architecture Review
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────────────────────────────────────── */
export function ServicesPage() {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 1024px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-order-first { order: 1; }
          .svc-order-second { order: 2; }
        }
        @media (max-width: 768px) {
          .stat-grid { grid-template-columns: 1fr !important; }
          .nodes-grid { grid-template-columns: 1fr 1fr !important; }
          .digest-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .nodes-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) {
          .node-connector { display: block !important; }
        }
      `}</style>
      <ServicesHero />
      <ServiceWhatsApp />
      <ServiceEmail />
      <ServiceIntelligence />
      <ServiceCalendar />
      <ServiceWorkflows />
      <ServicesCTA />
    </>
  );
}
