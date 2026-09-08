import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from '../../components/common/Logo';
import { Eye, EyeOff, Lock, Mail, Check, Loader2, Calendar, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import loginVisualImg from '../../styles/Images/login-security-workspace.jpg';

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
  peach: '#ffd0a8',
  outlineVariant: 'rgba(190, 201, 198, 0.4)',
  borderLight: 'rgba(111, 121, 119, 0.2)',
};

export const AuthPage = ({ initialView = 'login' }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Form states for login
  const [email, setEmail] = useState('alex@northlinestudio.com');
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

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

  const validateEmail = (val) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(val);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!email || !email.trim()) {
      setEmailError('Work email is required');
      hasError = true;
    } else if (!validateEmail(email.trim())) {
      setEmailError('Please enter a valid work email address');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password || !password.trim()) {
      setPasswordError('Password is required');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 650);
  };

  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    setTimeout(() => {
      setIsGoogleLoading(false);
      navigate('/dashboard');
    }, 650);
  };

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
      <style>{`
        .login-grid-container {
          display: grid;
          grid-template-columns: 52% 48%;
          min-height: 100vh;
          width: 100%;
        }
        .login-form-input:focus {
          border-color: #01605A !important;
          box-shadow: 0 0 0 3px rgba(1, 96, 90, 0.12) !important;
        }
        .login-btn-primary:hover {
          background-color: #01605A !important;
        }
        .login-btn-google:hover {
          background-color: #F7F3EE !important;
          border-color: rgba(1, 96, 90, 0.3) !important;
        }
        @media (max-width: 960px) {
          .login-grid-container {
            grid-template-columns: 1fr !important;
          }
          .login-visual-storytelling {
            display: none !important;
          }
          .login-auth-column {
            padding: 32px 16px !important;
            min-height: 100vh !important;
          }
          .login-auth-card {
            padding: 28px 20px !important;
            border: 1px solid rgba(111, 121, 119, 0.12) !important;
            box-shadow: none !important;
            background-color: #ffffff !important;
          }
        }
        @media (max-width: 480px) {
          .login-auth-card {
            padding: 24px 16px !important;
            border-radius: 8px !important;
          }
        }
      `}</style>

      {/* View Switcher Sub-header for interactive navigation & QA (available for testing secondary auth flows) */}
      {view !== 'login' && (
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
      )}

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* 1. LOGIN VIEW — TWO-COLUMN ENTERPRISE COMPOSITION */}
        {view === 'login' && (
          <div className="login-grid-container">
            {/* LEFT: Brand / Visual Storytelling Area */}
            <div
              className="login-visual-storytelling"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '56px 48px',
                backgroundImage: `url(${loginVisualImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
              }}
            >
              {/* Elegant dark teal enterprise brand overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(155deg, rgba(0, 70, 66, 0.88) 0%, rgba(1, 96, 90, 0.82) 48%, rgba(0, 40, 38, 0.94) 100%)',
                  backdropFilter: 'blur(2px)',
                  zIndex: 1,
                }}
              />

              {/* Top: Restrained brand statement */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: C.secondaryContainer,
                      boxShadow: '0 0 8px #fe852c',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: C.peach,
                    }}
                  >
                    YOUR AI OPERATIONS TEAM
                  </span>
                </div>
              </div>

              {/* Middle: Editorial Value Proposition */}
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '520px', my: 'auto' }}>
                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '34px',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.22,
                    letterSpacing: '-0.025em',
                    margin: '0 0 16px 0',
                  }}
                >
                  Autonomous Operations for High-Performance Teams.
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.86)',
                    lineHeight: 1.6,
                    margin: '0 0 28px 0',
                    fontWeight: 400,
                  }}
                >
                  Intelligent email triage, proactive WhatsApp authorizations, and unified executive workflows — built for businesses where speed and precision matter.
                </p>

                {/* Restrained metrics chips */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {[
                    { label: '99.4% Dispatch Accuracy' },
                    { label: '< 3-Min Setup' },
                    { label: 'Human-in-the-Loop Control' },
                  ].map((chip, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.10)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#ffffff',
                      }}
                    >
                      <Check size={13} color={C.secondaryContainer} strokeWidth={2.5} />
                      <span>{chip.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: SOC2 & Compliance subtle reassurance */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  borderTop: '1px solid rgba(255, 255, 255, 0.14)',
                  paddingTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: C.onPrimaryContainer }} />
                <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.76)', fontWeight: 500 }}>
                  Enterprise SOC2 &amp; OAuth 2.0 Security Architecture
                </span>
              </div>
            </div>

            {/* RIGHT: Clean Authentication Panel */}
            <div
              className="login-auth-column"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '48px 32px',
                backgroundColor: C.surface,
              }}
            >
              <div
                className="login-auth-card"
                style={{
                  width: '100%',
                  maxWidth: '430px',
                  backgroundColor: '#ffffff',
                  padding: '40px 36px',
                  borderRadius: '10px',
                  border: `1px solid ${C.borderLight}`,
                  boxShadow: '0 4px 20px rgba(0, 70, 66, 0.04)',
                }}
              >
                {/* FlowPilot Logo */}
                <div style={{ marginBottom: '24px' }}>
                  <Logo size="md" link={true} />
                </div>

                {/* Header Copy */}
                <div style={{ marginBottom: '28px' }}>
                  <h1
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '26px',
                      fontWeight: 800,
                      color: C.onSurface,
                      margin: '0 0 8px 0',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Welcome back.
                  </h1>
                  <p style={{ fontSize: '14px', color: C.onSurfaceVariant, margin: 0, lineHeight: 1.5 }}>
                    Sign in to continue managing your operations.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleLoginSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Work Email Field */}
                  <div>
                    <label
                      htmlFor="login-email"
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: C.onSurface,
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      Work Email
                    </label>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <Mail
                        size={16}
                        color={focusedField === 'email' ? C.primaryContainer : C.onSurfaceVariant}
                        style={{ position: 'absolute', left: '12px', pointerEvents: 'none', transition: 'color 0.2s' }}
                      />
                      <input
                        id="login-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailError) setEmailError('');
                        }}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => {
                          setFocusedField(null);
                          if (email && !validateEmail(email)) {
                            setEmailError('Please enter a valid work email address');
                          }
                        }}
                        placeholder="alex@company.com"
                        className="login-form-input"
                        style={{
                          width: '100%',
                          height: '42px',
                          padding: '0 14px 0 38px',
                          borderRadius: '6px',
                          border: emailError ? '1px solid #dc2626' : `1px solid ${C.borderLight}`,
                          fontSize: '14px',
                          outline: 'none',
                          color: C.onSurface,
                          backgroundColor: '#ffffff',
                          transition: 'border-color 0.15s, box-shadow 0.15s',
                        }}
                      />
                    </div>
                    {emailError && (
                      <span style={{ fontSize: '12px', color: '#dc2626', marginTop: '4px', display: 'block', fontWeight: 500 }}>
                        {emailError}
                      </span>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <label
                        htmlFor="login-password"
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: C.onSurface,
                        }}
                      >
                        Password
                      </label>
                      <Link
                        to="/forgot-password"
                        onClick={() => setView('forgot')}
                        style={{
                          color: C.primaryContainer,
                          fontSize: '13px',
                          fontWeight: 600,
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <Lock
                        size={16}
                        color={focusedField === 'password' ? C.primaryContainer : C.onSurfaceVariant}
                        style={{ position: 'absolute', left: '12px', pointerEvents: 'none', transition: 'color 0.2s' }}
                      />
                      <input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (passwordError) setPasswordError('');
                        }}
                        onFocus={() => setFocusedField('password')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="••••••••••••"
                        className="login-form-input"
                        style={{
                          width: '100%',
                          height: '42px',
                          padding: '0 40px 0 38px',
                          borderRadius: '6px',
                          border: passwordError ? '1px solid #dc2626' : `1px solid ${C.borderLight}`,
                          fontSize: '14px',
                          outline: 'none',
                          color: C.onSurface,
                          backgroundColor: '#ffffff',
                          transition: 'border-color 0.15s, box-shadow 0.15s',
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          background: 'none',
                          border: 'none',
                          padding: '4px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          color: C.onSurfaceVariant,
                          borderRadius: '4px',
                        }}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {passwordError && (
                      <span style={{ fontSize: '12px', color: '#dc2626', marginTop: '4px', display: 'block', fontWeight: 500 }}>
                        {passwordError}
                      </span>
                    )}
                  </div>

                  {/* Remember me row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="checkbox"
                      id="login-rem"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '4px',
                        accentColor: C.primaryContainer,
                        cursor: 'pointer',
                      }}
                    />
                    <label
                      htmlFor="login-rem"
                      style={{
                        fontSize: '13px',
                        color: C.onSurfaceVariant,
                        cursor: 'pointer',
                        userSelect: 'none',
                        fontWeight: 400,
                      }}
                    >
                      Remember me
                    </label>
                  </div>

                  {/* Primary Button: Sign In */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="login-btn-primary"
                    style={{
                      height: '44px',
                      borderRadius: '8px',
                      backgroundColor: isLoading ? C.primaryContainer : C.primary,
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 2px 8px rgba(0, 70, 66, 0.16)',
                      transition: 'background-color 0.15s, transform 0.1s',
                      marginTop: '4px',
                    }}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                        <span>Signing in...</span>
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </form>

                {/* Divider: OR */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '22px 0' }}>
                  <div style={{ flex: 1, height: '1px', backgroundColor: C.borderLight }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: C.onSurfaceVariant, letterSpacing: '0.08em' }}>
                    OR
                  </span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: C.borderLight }} />
                </div>

                {/* Secondary Option: Continue with Google */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isGoogleLoading}
                  className="login-btn-google"
                  style={{
                    width: '100%',
                    height: '44px',
                    borderRadius: '8px',
                    border: `1px solid ${C.borderLight}`,
                    backgroundColor: '#ffffff',
                    color: C.onSurface,
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: isGoogleLoading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.15s',
                  }}
                >
                  {isGoogleLoading ? (
                    <>
                      <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Connecting to Google...</span>
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                      </svg>
                      <span>Continue with Google</span>
                    </>
                  )}
                </button>

                {/* Footer Switch */}
                <p style={{ textAlign: 'center', fontSize: '13px', color: C.onSurfaceVariant, marginTop: '24px', marginBottom: 0 }}>
                  Don't have an account?{' '}
                  <Link
                    to="/signup"
                    onClick={() => setView('signup')}
                    style={{ color: C.primary, fontWeight: 700, textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    Create an account
                  </Link>
                </p>
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
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(1,96,90,0.1)', color: C.primaryContainer, marginBottom: '12px' }}>
                <Lock size={30} />
              </div>
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
                       <Mail size={22} color={C.primaryContainer} />
                       <div>
                        <strong>Google Workspace (Gmail)</strong>
                        <div style={{ fontSize: '12px', color: C.onSurfaceVariant }}>alex@northlinestudio.com</div>
                      </div>
                    </div>
                     <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><Check size={13} /> OAuth Connected</span>
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
                       <MessageSquare size={22} color='#166534' />
                       <div>
                        <strong>WhatsApp Business API</strong>
                        <div style={{ fontSize: '12px', color: '#166534' }}>+1 (555) 234-9811 (Verified)</div>
                      </div>
                    </div>
                     <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><ShieldCheck size={13} /> Encrypted Sync</span>
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
                       <Calendar size={22} color={C.primaryContainer} />
                       <div>
                        <strong>Google Calendar</strong>
                        <div style={{ fontSize: '12px', color: C.onSurfaceVariant }}>2 connected calendars (Work + Executive Focus)</div>
                      </div>
                    </div>
                     <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><Check size={13} /> Auto-synced</span>
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
                  <div style={{ backgroundColor: C.surfaceContainerLow, padding: '20px', borderRadius: '12px', marginBottom: '24px', fontSize: '13px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color='#059669' /> Inbound: <strong>Gmail</strong> active</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color='#059669' /> Outbound: <strong>WhatsApp Alerts</strong> enabled</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldCheck size={14} color='#059669' /> Security: <strong>SOC2 / End-to-End Encryption</strong> enforced</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color='#059669' /> Approval threshold: <strong>98% confidence</strong> or human sign-off required</div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setOnboardingStep(5)} style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, padding: '12px 20px', borderRadius: '8px', border: 'none', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                      ← Back
                    </button>
                    <button onClick={() => { setView('completion'); navigate('/onboarding/complete'); }} style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', padding: '14px 32px', borderRadius: '10px', border: 'none', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                       Launch FlowPilot AI Workspace <ArrowRight size={18} />
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
