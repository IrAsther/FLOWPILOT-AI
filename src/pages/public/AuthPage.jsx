import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const navigate = useNavigate();

  // Determine view and step from URL if available
  const getViewFromPath = () => {
    const p = location.pathname.toLowerCase();
    if (p.includes('/forgot-password')) return 'forgot';
    if (p.includes('/reset-password')) return 'reset';
    if (p.includes('/verify-email') || p.includes('/verify')) return 'verify';
    if (p.includes('/signup')) return 'signup';
    if (p.includes('/onboarding')) {
      if (p.includes('/complete')) return 'completion';
      return 'onboarding';
    }
    if (p.includes('/login') || p.includes('/auth')) return 'login';
    return initialView;
  };

  const getStepFromPath = () => {
    const p = location.pathname.toLowerCase();
    if (p.includes('/business-profile')) return 1;
    if (p.includes('/automation-goals')) return 2;
    if (p.includes('/connect-gmail')) return 3;
    if (p.includes('/connect-whatsapp')) return 4;
    if (p.includes('/connect-calendar')) return 5;
    if (p.includes('/first-workflow')) return 6;
    if (p.includes('/complete')) return 7;
    return 1;
  };

  const [view, setView] = useState(getViewFromPath);
  const [onboardingStep, setOnboardingStep] = useState(getStepFromPath);

  useEffect(() => {
    setView(getViewFromPath());
    setOnboardingStep(getStepFromPath());
  }, [location.pathname]);

  const onboardingStepList = [
    { step: 1, id: 'business-profile', label: 'Business Profile' },
    { step: 2, id: 'automation-goals', label: 'Automation Goals' },
    { step: 3, id: 'connect-gmail', label: 'Connect Gmail' },
    { step: 4, id: 'connect-whatsapp', label: 'Connect WhatsApp' },
    { step: 5, id: 'connect-calendar', label: 'Connect Calendar' },
    { step: 6, id: 'first-workflow', label: 'First Workflow' },
  ];

  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      {/* View Switcher Sub-header for quick interactive navigation & QA */}
      <div style={{ backgroundColor: C.surfaceContainer, padding: '8px 24px', borderBottom: `1px solid ${C.borderLight}`, display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { id: 'login', label: 'Login', path: '/login' },
          { id: 'signup', label: 'Sign Up', path: '/signup' },
          { id: 'forgot', label: 'Forgot Password', path: '/forgot-password' },
          { id: 'reset', label: 'Reset Password', path: '/reset-password' },
          { id: 'verify', label: 'Verify Email / 2FA', path: '/verify-email' },
          { id: 'onboarding', label: 'Onboarding Wizard', path: '/onboarding' },
          { id: 'completion', label: 'Onboarding Complete', path: '/onboarding/complete' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setView(tab.id);
              navigate(tab.path);
            }}
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

              <form onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                    <Link to="/forgot-password" onClick={() => setView('forgot')} style={{ color: C.primary, fontSize: '12px', textDecoration: 'underline' }}>
                      Forgot password?
                    </Link>
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
                <button onClick={() => navigate('/onboarding')} style={{ padding: '10px', borderRadius: '10px', border: `1px solid ${C.borderLight}`, backgroundColor: '#ffffff', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                  Google Workspace
                </button>
                <button onClick={() => navigate('/onboarding')} style={{ padding: '10px', borderRadius: '10px', border: `1px solid ${C.borderLight}`, backgroundColor: '#ffffff', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                  Microsoft 365
                </button>
              </div>

              <p style={{ textAlign: 'center', fontSize: '13px', color: C.onSurfaceVariant, marginTop: '28px' }}>
                Don't have an account?{' '}
                <Link to="/signup" onClick={() => setView('signup')} style={{ color: C.primary, fontWeight: 700, textDecoration: 'underline' }}>
                  Start free trial
                </Link>
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

              <form onSubmit={(e) => { e.preventDefault(); navigate('/verify-email'); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
                <Link to="/login" onClick={() => setView('login')} style={{ color: C.primary, fontWeight: 700, textDecoration: 'underline' }}>
                  Sign in
                </Link>
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
              <form onSubmit={(e) => { e.preventDefault(); navigate('/reset-password'); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Work Email</label>
                  <input type="email" required placeholder="alex@company.com" defaultValue="alex@northlinestudio.com" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <button type="submit" style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                  Send Recovery Link →
                </button>
              </form>
              <Link to="/login" onClick={() => setView('login')} style={{ display: 'block', textAlign: 'center', color: C.primary, fontSize: '13px', fontWeight: 600, marginTop: '16px', textDecoration: 'none' }}>
                ← Back to Login
              </Link>
            </div>
          </div>
        )}

        {/* 4. RESET PASSWORD VIEW */}
        {view === 'reset' && (
          <div style={{ flex: 1, padding: '64px 32px', maxWidth: '480px', margin: '0 auto', width: '100%' }}>
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '36px', borderRadius: '24px', border: `1px solid ${C.borderLight}`, boxShadow: '0 12px 32px rgba(0,0,0,0.04)' }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 800, color: C.onSurface, margin: '0 0 8px 0' }}>
                Choose New Password
              </h2>
              <p style={{ fontSize: '13px', color: C.onSurfaceVariant, marginBottom: '20px' }}>
                Your recovery token has been validated. Enter your new strong password below.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); navigate('/login'); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>New Password</label>
                  <input type="password" required placeholder="••••••••••••" defaultValue="NewSecurePass2026!" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Confirm New Password</label>
                  <input type="password" required placeholder="••••••••••••" defaultValue="NewSecurePass2026!" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <button type="submit" style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                  Update Password &amp; Log In →
                </button>
              </form>
              <Link to="/login" onClick={() => setView('login')} style={{ display: 'block', textAlign: 'center', color: C.primary, fontSize: '13px', fontWeight: 600, marginTop: '16px', textDecoration: 'none' }}>
                ← Back to Login
              </Link>
            </div>
          </div>
        )}

        {/* 5. VERIFY 2FA / EMAIL VIEW */}
        {view === 'verify' && (
          <div style={{ flex: 1, padding: '64px 32px', maxWidth: '480px', margin: '0 auto', width: '100%' }}>
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '36px', borderRadius: '24px', border: `1px solid ${C.borderLight}`, textAlign: 'center', boxShadow: '0 12px 32px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>🔐</div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 800, color: C.onSurface, margin: '0 0 8px 0' }}>
                Two-Factor / Email Verification
              </h2>
              <p style={{ fontSize: '13px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                We sent a 6-digit verification code to your WhatsApp and email. Enter it below to confirm access.
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
              <button onClick={() => navigate('/onboarding')} style={{ width: '100%', backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                Verify &amp; Start Onboarding →
              </button>
            </div>
          </div>
        )}

        {/* 6. ONBOARDING WIZARD */}
        {view === 'onboarding' && (
          <div style={{ flex: 1, padding: '48px 32px', maxWidth: '820px', margin: '0 auto', width: '100%' }}>
            <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '36px', borderRadius: '24px', border: `1px solid ${C.borderLight}`, boxShadow: '0 12px 32px rgba(0,0,0,0.04)' }}>
              {/* Progress Steps Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', borderBottom: `1px solid ${C.borderLight}`, paddingBottom: '16px', overflowX: 'auto' }}>
                {onboardingStepList.map((s) => (
                  <div
                    key={s.step}
                    onClick={() => setOnboardingStep(s.step)}
                    style={{ textAlign: 'center', cursor: 'pointer', padding: '0 8px', minWidth: '80px' }}
                  >
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
                        transition: 'all 0.2s',
                      }}
                    >
                      {onboardingStep > s.step ? '✓' : s.step}
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: onboardingStep === s.step ? C.primary : C.onSurfaceVariant, whiteSpace: 'nowrap' }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Business Profile */}
              {onboardingStep === 1 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 1: Set Up Your Business Profile
                  </h3>
                  <p style={{ fontSize: '14px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                    Help FlowPilot understand your business domain, customer base, and operating timezone.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Company Name</label>
                      <input type="text" defaultValue="Northline Studio" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Industry / Sector</label>
                      <input type="text" defaultValue="Consulting & Professional Services" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Operating Timezone</label>
                      <input type="text" defaultValue="America/New_York (EST)" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Team Size</label>
                      <input type="text" defaultValue="10 - 25 members" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                    </div>
                  </div>
                  <button onClick={() => setOnboardingStep(2)} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                    Continue to Automation Goals →
                  </button>
                </div>
              )}

              {/* Step 2: Automation Goals */}
              {onboardingStep === 2 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 2: Choose Your Primary Automation Goals
                  </h3>
                  <p style={{ fontSize: '14px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                    Select the operations workflows you want FlowPilot AI to automate first.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                    {[
                      { title: 'Inbound Email Triage & Drafts', desc: 'Scan RFQs, partner emails, and client questions to draft instant replies.', defaultChecked: true },
                      { title: 'WhatsApp Push & Approval Routing', desc: 'Receive high-priority briefs with 1-tap WhatsApp authorization.', defaultChecked: true },
                      { title: 'Autonomous Calendar Scheduling', desc: 'Resolve scheduling conflicts and hold focus blocks without email ping-pong.', defaultChecked: true },
                      { title: 'Enterprise CRM Sync', desc: 'Log proposals, customer intent, and interaction logs straight to HubSpot/Salesforce.', defaultChecked: false },
                    ].map((item, idx) => (
                      <label key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px', borderRadius: '10px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}`, cursor: 'pointer' }}>
                        <input type="checkbox" defaultChecked={item.defaultChecked} style={{ marginTop: '3px', accentColor: C.primaryContainer }} />
                        <div>
                          <strong style={{ fontSize: '14px', display: 'block' }}>{item.title}</strong>
                          <span style={{ fontSize: '12px', color: C.onSurfaceVariant }}>{item.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setOnboardingStep(1)} style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, padding: '12px 20px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                      ← Back
                    </button>
                    <button onClick={() => setOnboardingStep(3)} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                      Continue to Connect Gmail →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Connect Gmail */}
              {onboardingStep === 3 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 3: Link Your Primary Business Email
                  </h3>
                  <p style={{ fontSize: '14px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                    FlowPilot reads incoming client requests and drafts AI responses without modifying existing folders.
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
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setOnboardingStep(2)} style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, padding: '12px 20px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                      ← Back
                    </button>
                    <button onClick={() => setOnboardingStep(4)} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                      Continue to WhatsApp Setup →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Connect WhatsApp */}
              {onboardingStep === 4 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 4: Connect WhatsApp Business Number
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
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setOnboardingStep(3)} style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, padding: '12px 20px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                      ← Back
                    </button>
                    <button onClick={() => setOnboardingStep(5)} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                      Continue to Calendar Setup →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Connect Calendar */}
              {onboardingStep === 5 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 5: Synchronize Calendars
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
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setOnboardingStep(4)} style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, padding: '12px 20px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                      ← Back
                    </button>
                    <button onClick={() => setOnboardingStep(6)} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                      Continue to First Workflow →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 6: First Workflow */}
              {onboardingStep === 6 && (
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                    Step 6: Activate Your First Workflow
                  </h3>
                  <p style={{ fontSize: '14px', color: C.onSurfaceVariant, marginBottom: '24px' }}>
                    Configure the deterministic threshold for inbound email triage and WhatsApp approval gates.
                  </p>
                  <div style={{ backgroundColor: C.surfaceContainerLow, padding: '20px', borderRadius: '12px', marginBottom: '24px', fontSize: '13px', lineHeight: 1.6 }}>
                    <div>✓ Inbound: <strong>Gmail</strong> active</div>
                    <div>✓ Outbound: <strong>WhatsApp Alerts</strong> enabled</div>
                    <div>✓ Security: <strong>SOC2 / End-to-End Encryption</strong> enforced</div>
                    <div>✓ Approval threshold: <strong>98% confidence</strong> or human sign-off required</div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setOnboardingStep(5)} style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, padding: '12px 20px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                      ← Back
                    </button>
                    <button onClick={() => { setView('completion'); navigate('/onboarding/complete'); }} style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', padding: '14px 32px', borderRadius: '10px', border: 'none', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
                      Launch FlowPilot AI Workspace 🚀
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 7. COMPLETION SUCCESS VIEW */}
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
                Northline Studio's workspace is initialized. FlowPilot is now monitoring your inbox and ready to triage client communications with human approval.
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
