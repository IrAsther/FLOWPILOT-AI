import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
};

export const AuthPage = ({ initialView = 'login' }) => {
  const [view, setView] = useState(initialView);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      {/* View Switcher Sub-header for interactive demo */}
      <div style={{ backgroundColor: C.surfaceContainer, padding: '8px 24px', borderBottom: `1px solid ${C.borderLight}`, display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { id: 'login', label: 'Login' },
          { id: 'signup', label: 'Sign Up' },
          { id: 'forgot', label: 'Forgot Password' },
          { id: 'verify', label: 'Verify 2FA' },
          { id: 'onboarding', label: 'Onboarding Wizard' },
          { id: 'completion', label: 'Success' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setView(tab.id)}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              backgroundColor: view === tab.id ? C.primaryContainer : 'transparent',
              color: view === tab.id ? '#ffffff' : C.onSurfaceVariant,
              transition: 'all 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* 1. LOGIN VIEW */}
        {view === 'login' && (
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
            <div style={{ padding: '64px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: C.surfaceContainerLowest, maxWidth: '520px', margin: '0 auto', width: '100%' }}>
              <div style={{ marginBottom: '32px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, backgroundColor: C.surfaceContainer, color: C.primary, marginBottom: '16px' }}>
                  ⚡ Welcome Back
                </span>
                <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800, color: C.onSurface, margin: '0 0 8px 0' }}>
                  Log in to FlowPilot
                </h1>
                <p style={{ fontSize: '14px', color: C.onSurfaceVariant, margin: 0 }}>
                  Enter your credentials to manage your autonomous AI operations team.
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setView('onboarding'); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    defaultValue="alex@northlinestudio.com"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: `1px solid ${C.outlineVariant}`, fontSize: '14px', outline: 'none', backgroundColor: C.surface }}
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600 }}>Password</label>
                    <button type="button" onClick={() => setView('forgot')} style={{ background: 'none', border: 'none', color: C.primary, fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}>
                      Forgot password?
                    </button>
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    defaultValue="password123"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: `1px solid ${C.outlineVariant}`, fontSize: '14px', outline: 'none', backgroundColor: C.surface }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" id="rem" defaultChecked style={{ accentColor: C.primaryContainer }} />
                  <label htmlFor="rem" style={{ fontSize: '12px', color: C.onSurfaceVariant }}>Remember this device for 30 days</label>
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: C.primaryContainer,
                    color: '#ffffff',
                    padding: '14px',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(1, 96, 90, 0.2)',
                  }}
                >
                  Sign In to Dashboard →
                </button>
              </form>

              <div style={{ margin: '24px 0', textAlign: 'center', position: 'relative' }}>
                <span style={{ backgroundColor: C.surfaceContainerLowest, padding: '0 12px', fontSize: '12px', color: C.onSurfaceVariant }}>
                  or continue with
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button onClick={() => setView('onboarding')} style={{ padding: '10px', borderRadius: '10px', border: `1px solid ${C.borderLight}`, backgroundColor: '#ffffff', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                  Google Workspace
                </button>
                <button onClick={() => setView('onboarding')} style={{ padding: '10px', borderRadius: '10px', border: `1px solid ${C.borderLight}`, backgroundColor: '#ffffff', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                  Microsoft 365
                </button>
              </div>

              <p style={{ textAlign: 'center', fontSize: '13px', color: C.onSurfaceVariant, marginTop: '28px' }}>
                Don't have an account?{' '}
                <button onClick={() => setView('signup')} style={{ background: 'none', border: 'none', color: C.primary, fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>
                  Start free trial
                </button>
              </p>
            </div>

            {/* Right: Live Telemetry preview */}
            <div style={{ backgroundColor: C.surfaceContainerLow, padding: '48px', borderLeft: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '32px', borderRadius: '20px', border: `1px solid ${C.borderLight}`, boxShadow: '0 8px 24px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 800, margin: '0 0 4px 0' }}>
                      Live Autonomous Operations
                    </h3>
                    <p style={{ fontSize: '12px', color: C.onSurfaceVariant, margin: 0 }}>
                      Real-time telemetry across connected enterprise nodes
                    </p>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: '#d1fae5', color: '#065f46', padding: '4px 10px', borderRadius: '9999px' }}>
                    99.98% uptime
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ backgroundColor: C.surfaceContainerLow, padding: '14px', borderRadius: '12px' }}>
                    <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Active Workflows</span>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: C.primary, marginTop: '2px' }}>1,428</div>
                    <span style={{ fontSize: '10px', color: '#059669' }}>+12% this week</span>
                  </div>
                  <div style={{ backgroundColor: C.surfaceContainerLow, padding: '14px', borderRadius: '12px' }}>
                    <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Tasks Automated</span>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: C.secondaryContainer, marginTop: '2px' }}>84.2K</div>
                    <span style={{ fontSize: '10px', color: '#059669' }}>99.4% accuracy</span>
                  </div>
                  <div style={{ backgroundColor: C.surfaceContainerLow, padding: '14px', borderRadius: '12px' }}>
                    <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Hours Saved</span>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: C.primary, marginTop: '2px' }}>3,190h</div>
                    <span style={{ fontSize: '10px', color: '#059669' }}>18 FTEs</span>
                  </div>
                </div>

                <div style={{ backgroundColor: '#1c1c19', color: '#8ad4cc', padding: '16px', borderRadius: '12px', fontFamily: 'monospace', fontSize: '11px', lineHeight: 1.6 }}>
                  <div>[11:42:04] INBOX_STREAM: Received email from Acme Partners</div>
                  <div>[11:42:05] COGNITION: Intent scored priority=HIGH (0.98)</div>
                  <div>[11:42:05] WHATSAPP: Alert dispatched to Director ✓</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. SIGN UP VIEW */}
        {view === 'signup' && (
          <div style={{ flex: 1, padding: '64px 32px', maxWidth: '540px', margin: '0 auto', width: '100%' }}>
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '36px', borderRadius: '24px', border: `1px solid ${C.borderLight}`, boxShadow: '0 12px 32px rgba(0,0,0,0.04)' }}>
              <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700, color: C.secondaryContainer, textTransform: 'uppercase', marginBottom: '8px' }}>
                14-Day Free Trial
              </span>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '28px', fontWeight: 800, color: C.onSurface, margin: '0 0 8px 0' }}>
                Create your FlowPilot Workspace
              </h2>
              <p style={{ fontSize: '14px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                No credit card required. Set up your AI operations team in under 3 minutes.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setView('verify'); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Full Name</label>
                  <input type="text" required placeholder="Alex Martin" defaultValue="Alex Martin" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Work Email</label>
                  <input type="email" required placeholder="alex@company.com" defaultValue="alex@northlinestudio.com" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Company / Agency Name</label>
                  <input type="text" required placeholder="Northline Studio" defaultValue="Northline Studio" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Create Secure Password</label>
                  <input type="password" required placeholder="••••••••••••" defaultValue="secretpassword" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: C.secondaryContainer,
                    color: '#ffffff',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginTop: '8px',
                  }}
                >
                  Create Account &amp; Verify →
                </button>
              </form>

              <p style={{ textAlign: 'center', fontSize: '13px', color: C.onSurfaceVariant, marginTop: '20px' }}>
                Already registered?{' '}
                <button onClick={() => setView('login')} style={{ background: 'none', border: 'none', color: C.primary, fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>
                  Sign in
                </button>
              </p>
            </div>
          </div>
        )}

        {/* 3. FORGOT PASSWORD VIEW */}
        {view === 'forgot' && (
          <div style={{ flex: 1, padding: '64px 32px', maxWidth: '480px', margin: '0 auto', width: '100%' }}>
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '36px', borderRadius: '24px', border: `1px solid ${C.borderLight}`, boxShadow: '0 12px 32px rgba(0,0,0,0.04)' }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 800, color: C.onSurface, margin: '0 0 8px 0' }}>
                Reset Your Password
              </h2>
              <p style={{ fontSize: '13px', color: C.onSurfaceVariant, marginBottom: '20px' }}>
                Enter your registered work email and we will send you a secure magic recovery link.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Recovery email sent! Check your inbox.'); setView('login'); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Work Email</label>
                  <input type="email" required placeholder="alex@company.com" defaultValue="alex@northlinestudio.com" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <button type="submit" style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                  Send Recovery Link
                </button>
              </form>
              <button onClick={() => setView('login')} style={{ width: '100%', background: 'none', border: 'none', color: C.primary, fontSize: '13px', fontWeight: 600, marginTop: '16px', cursor: 'pointer' }}>
                ← Back to Login
              </button>
            </div>
          </div>
        )}

        {/* 4. VERIFY 2FA VIEW */}
        {view === 'verify' && (
          <div style={{ flex: 1, padding: '64px 32px', maxWidth: '480px', margin: '0 auto', width: '100%' }}>
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '36px', borderRadius: '24px', border: `1px solid ${C.borderLight}`, textAlign: 'center', boxShadow: '0 12px 32px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🔐</div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 800, color: C.onSurface, margin: '0 0 8px 0' }}>
                Two-Factor Verification
              </h2>
              <p style={{ fontSize: '13px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                We sent a 6-digit code to your WhatsApp and email. Enter it below to confirm access.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
                {['8', '4', '2', '0', '9', '1'].map((val, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength="1"
                    defaultValue={val}
                    style={{ width: '42px', height: '48px', textAlign: 'center', fontSize: '20px', fontWeight: 700, borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, backgroundColor: C.surface }}
                  />
                ))}
              </div>
              <button onClick={() => setView('onboarding')} style={{ width: '100%', backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                Verify &amp; Continue →
              </button>
            </div>
          </div>
        )}

        {/* 5. ONBOARDING WIZARD */}
        {view === 'onboarding' && (
          <div style={{ flex: 1, padding: '48px 32px', maxWidth: '780px', margin: '0 auto', width: '100%' }}>
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '36px', borderRadius: '24px', border: `1px solid ${C.borderLight}`, boxShadow: '0 12px 32px rgba(0,0,0,0.04)' }}>
              {/* Progress Steps */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', borderBottom: `1px solid ${C.borderLight}`, paddingBottom: '16px' }}>
                {[
                  { step: 1, name: 'Connect Gmail' },
                  { step: 2, name: 'Connect WhatsApp' },
                  { step: 3, name: 'Calendar Sync' },
                  { step: 4, name: 'Activate Team' },
                ].map((s) => (
                  <div key={s.step} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: onboardingStep >= s.step ? C.primaryContainer : C.surfaceContainer,
                        color: onboardingStep >= s.step ? '#ffffff' : C.onSurfaceVariant,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 700,
                        margin: '0 auto 6px auto',
                      }}
                    >
                      {onboardingStep > s.step ? '✓' : s.step}
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: onboardingStep === s.step ? C.primary : C.onSurfaceVariant }}>
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Connect Gmail */}
              {onboardingStep === 1 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 1: Link your Primary Business Email
                  </h3>
                  <p style={{ fontSize: '14px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                    FlowPilot reads incoming client requests and drafts AI responses without touching existing folders.
                  </p>
                  <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}`, marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '24px' }}>✉</span>
                      <div>
                        <strong>Google Workspace (Gmail)</strong>
                        <div style={{ fontSize: '12px', color: C.onSurfaceVariant }}>alex@northlinestudio.com</div>
                      </div>
                    </div>
                    <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700 }}>✓ OAuth Connected</span>
                  </div>
                  <button onClick={() => setOnboardingStep(2)} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                    Continue to WhatsApp Setup →
                  </button>
                </div>
              )}

              {/* Step 2: Connect WhatsApp */}
              {onboardingStep === 2 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 2: Connect WhatsApp Business Number
                  </h3>
                  <p style={{ fontSize: '14px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                    Receive real-time alerts and reply with text or voice notes to approve dispatched emails.
                  </p>
                  <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '24px' }}>💬</span>
                      <div>
                        <strong>WhatsApp Business API</strong>
                        <div style={{ fontSize: '12px', color: '#166534' }}>+1 (555) 234-9811 (Verified)</div>
                      </div>
                    </div>
                    <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700 }}>✓ Encrypted Sync</span>
                  </div>
                  <button onClick={() => setOnboardingStep(3)} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                    Continue to Calendar Setup →
                  </button>
                </div>
              )}

              {/* Step 3: Calendar Sync */}
              {onboardingStep === 3 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 3: Synchronize Calendars
                  </h3>
                  <p style={{ fontSize: '14px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                    Allow FlowPilot to auto-book slots and resolve conflicts automatically.
                  </p>
                  <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}`, marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '24px' }}>📅</span>
                      <div>
                        <strong>Google Calendar</strong>
                        <div style={{ fontSize: '12px', color: C.onSurfaceVariant }}>2 connected calendars (Work + Executive Focus)</div>
                      </div>
                    </div>
                    <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700 }}>✓ Auto-synced</span>
                  </div>
                  <button onClick={() => setOnboardingStep(4)} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                    Review &amp; Finalize →
                  </button>
                </div>
              )}

              {/* Step 4: Activate Team */}
              {onboardingStep === 4 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 4: Ready to Launch Your Operations Team
                  </h3>
                  <p style={{ fontSize: '14px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                    Your autonomous loop (Gmail → FlowPilot AI → WhatsApp → Human Approval → Gmail) is fully validated.
                  </p>
                  <div style={{ backgroundColor: C.surfaceContainerLow, padding: '20px', borderRadius: '12px', marginBottom: '24px', fontSize: '13px', lineHeight: 1.6 }}>
                    <div>✓ Inbound: <strong>Gmail</strong> active</div>
                    <div>✓ Outbound: <strong>WhatsApp Alerts</strong> enabled</div>
                    <div>✓ Security: <strong>SOC2 / End-to-End Encryption</strong> enforced</div>
                  </div>
                  <button onClick={() => setView('completion')} style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', padding: '14px 32px', borderRadius: '10px', border: 'none', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
                    Launch FlowPilot AI Workspace 🚀
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 6. COMPLETION SUCCESS VIEW */}
        {view === 'completion' && (
          <div style={{ flex: 1, padding: '64px 32px', maxWidth: '540px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '48px 36px', borderRadius: '24px', border: `1px solid ${C.borderLight}`, boxShadow: '0 12px 32px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '32px' }}>
                ✓
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '28px', fontWeight: 800, color: C.onSurface, marginBottom: '12px' }}>
                Your AI Operations Team is Live!
              </h2>
              <p style={{ fontSize: '15px', color: C.onSurfaceVariant, lineHeight: 1.6, marginBottom: '32px' }}>
                Northline Studio's workspace is initialized. FlowPilot is now monitoring your inbox and ready to triage client communications.
              </p>
              <Link
                to="/dashboard"
                style={{
                  backgroundColor: C.primaryContainer,
                  color: '#ffffff',
                  padding: '16px 36px',
                  borderRadius: '12px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 4px 14px rgba(1, 96, 90, 0.25)',
                }}
              >
                Go to Command Center Dashboard →
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
