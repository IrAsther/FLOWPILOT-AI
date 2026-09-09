import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Inbox,
  MessageSquare,
  GitBranch,
  Calendar as CalendarIcon,
  TrendingUp,
  Activity,
  Layers,
  Settings,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Send,
  Plus,
  Play,
  CheckCheck,
  LogOut,
  Sliders,
  Users,
  CreditCard,
  ExternalLink,
  ChevronRight,
  Filter,
  Menu,
  X,
} from 'lucide-react';
import { mockRecentActivities, mockIntegrations, mockDashboardMetrics } from '../../data/dashboard';

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

export const DashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTabFromPath = () => {
    const p = location.pathname.toLowerCase();
    if (p.includes('/inbox')) return 'inbox';
    if (p.includes('/whatsapp')) return 'whatsapp';
    if (p.includes('/builder')) return 'builder';
    if (p.includes('/workflows')) return 'workflows';
    if (p.includes('/calendar')) return 'calendar';
    if (p.includes('/analytics')) return 'analytics';
    if (p.includes('/activity')) return 'activity';
    if (p.includes('/integrations')) return 'integrations';
    if (p.includes('/team')) return 'team';
    if (p.includes('/billing')) return 'billing';
    if (p.includes('/settings')) return 'settings';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState(getTabFromPath);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setActiveTab(getTabFromPath());
  }, [location.pathname]);

  // Lock body scroll on mobile when sidebar drawer is open
  useEffect(() => {
    if (mobileSidebarOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileSidebarOpen]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    navigate(`/dashboard/${tabId === 'overview' ? '' : tabId}`);
    setMobileSidebarOpen(false);
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'inbox', label: 'Inbox Triage', icon: Inbox, badge: 4 },
    { id: 'whatsapp', label: 'WhatsApp Agent', icon: MessageSquare },
    { id: 'workflows', label: 'Workflows', icon: GitBranch },
    { id: 'builder', label: 'Workflow Builder', icon: Sliders },
    { id: 'calendar', label: 'Calendar Sync', icon: CalendarIcon },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'activity', label: 'Activity Feed', icon: Activity },
    { id: 'integrations', label: 'Integrations', icon: Layers },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: C.surface, color: C.onSurface, fontFamily: "'Inter', sans-serif", width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      {/* Scoped CSS for responsive dashboard layout */}
      <style>{`
        .dash-sidebar {
          width: 260px;
          background-color: ${C.surfaceContainerLow};
          border-right: 1px solid ${C.borderLight};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .dash-mobile-hamburger {
          display: none;
        }

        .dash-mobile-close {
          display: none;
        }

        .dash-backdrop {
          display: none;
        }

        .dash-kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .dash-header {
          height: 60px;
          background-color: ${C.surfaceContainerLowest};
          border-bottom: 1px solid ${C.borderLight};
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          gap: 16px;
          position: sticky;
          top: 0;
          z-index: 40;
        }

        .dash-main-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 28px;
          min-width: 0;
        }

        /* ── Tablet Breakpoint (768px - 1024px) ────────────────────────── */
        @media (max-width: 1024px) {
          .dash-sidebar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            bottom: 0 !important;
            height: 100vh !important;
            width: 280px !important;
            max-width: 85vw !important;
            z-index: 9999 !important;
            transform: translateX(-100%);
            transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;
            box-shadow: 0 0 35px rgba(0, 0, 0, 0.25) !important;
          }

          .dash-sidebar.is-open {
            transform: translateX(0) !important;
          }

          .dash-mobile-hamburger {
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: transparent;
            border: 1px solid ${C.borderLight};
            cursor: pointer;
            color: ${C.onSurface};
            flex-shrink: 0;
          }

          .dash-mobile-close {
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 6px;
            background: transparent;
            border: none;
            cursor: pointer;
            color: ${C.onSurface};
            margin-left: auto;
          }

          .dash-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 9998;
            background: rgba(0, 0, 0, 0.45);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
          }

          .dash-header {
            padding: 0 16px !important;
            gap: 12px !important;
          }

          .dash-main-scroll {
            padding: 20px 16px !important;
          }

          .dash-kpi-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        /* ── Mobile Breakpoint (320px - 767px) ─────────────────────────── */
        @media (max-width: 767px) {
          .dash-header {
            padding: 0 12px !important;
            gap: 10px !important;
            height: 56px !important;
          }

          .dash-runtime-badge {
            display: none !important;
          }

          .dash-main-scroll {
            padding: 16px 12px !important;
          }

          .dash-kpi-grid {
            grid-template-columns: 1fr !important;
          }

          .dash-header-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 14px !important;
          }

          .dash-header-banner-actions {
            width: 100% !important;
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
          }

          .dash-header-banner-actions button {
            flex: 1 1 auto !important;
            justify-content: center !important;
            min-height: 44px !important;
          }
        }

        /* ── Ultra-compact Mobile (<= 360px) ───────────────────────────── */
        @media (max-width: 360px) {
          .dash-main-scroll {
            padding: 12px 8px !important;
          }
          .dash-header-banner-actions {
            flex-direction: column !important;
          }
          .dash-header-banner-actions button {
            width: 100% !important;
          }
        }

        /* ── Accessibility: Respect Reduced Motion ─────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .dash-sidebar {
            transition: none !important;
          }
        }
      `}</style>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: C.primaryContainer,
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: 600,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <CheckCircle2 size={16} /> {toastMessage}
        </div>
      )}

      {/* Backdrop for mobile drawer */}
      {mobileSidebarOpen && (
        <div
          className="dash-backdrop"
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* SIDEBAR (Desktop inline sticky / Mobile fixed drawer) */}
      <aside className={`dash-sidebar ${mobileSidebarOpen ? 'is-open' : ''}`}>
        <div>
          {/* Brand header */}
          <div style={{ padding: '20px 20px', borderBottom: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: C.primaryContainer,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '14px',
                flexShrink: 0,
              }}
            >
              FP
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 800, margin: 0, whiteSpace: 'nowrap' }}>
                  FlowPilot AI
                </h1>
              </Link>
              <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Operations Hub</span>
            </div>
            {/* Close button inside mobile drawer */}
            <button
              type="button"
              className="dash-mobile-close"
              onClick={() => setMobileSidebarOpen(false)}
              aria-label="Close Sidebar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav style={{ padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    backgroundColor: isActive ? C.primaryContainer : 'transparent',
                    color: isActive ? '#ffffff' : C.onSurfaceVariant,
                    textAlign: 'left',
                    transition: 'all 0.15s',
                    width: '100%',
                    minHeight: '40px',
                  }}
                >
                  <IconComp size={16} style={{ flexShrink: 0 }} />
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                  {item.badge && (
                    <span
                      style={{
                        marginLeft: 'auto',
                        backgroundColor: isActive ? '#ffffff' : C.secondaryContainer,
                        color: isActive ? C.primaryContainer : '#ffffff',
                        fontSize: '10px',
                        fontWeight: 700,
                        padding: '1px 6px',
                        borderRadius: '9999px',
                        flexShrink: 0,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User profile footer */}
        <div style={{ padding: '16px 20px', borderTop: `1px solid ${C.borderLight}`, backgroundColor: C.surfaceContainer, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: C.primaryContainer,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '12px',
              flexShrink: 0,
            }}
          >
            AM
          </div>
          <div style={{ overflow: 'hidden', minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Alex Martin</div>
            <div style={{ fontSize: '11px', color: C.onSurfaceVariant, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Northline Studio</div>
          </div>
          <Link to="/auth" style={{ marginLeft: 'auto', color: C.onSurfaceVariant, flexShrink: 0 }} title="Sign Out">
            <LogOut size={15} />
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden', width: '100%' }}>
        {/* Top bar */}
        <header className="dash-header">
          {/* Hamburger Menu on Mobile/Tablet */}
          <button
            type="button"
            className="dash-mobile-hamburger"
            onClick={() => setMobileSidebarOpen(true)}
            aria-label="Open Sidebar Menu"
          >
            <Menu size={20} />
          </button>

          <div style={{ flex: 1, maxWidth: '360px', minWidth: 0, position: 'relative' }}>
            <Search size={15} color={C.onSurfaceVariant} style={{ position: 'absolute', left: '12px', top: '10px' }} />
            <input
              type="text"
              placeholder="Search active operations or messages (⌘K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '8px',
                border: `1px solid ${C.borderLight}`,
                backgroundColor: C.surfaceContainerLow,
                fontSize: '13px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            <span
              className="dash-runtime-badge"
              style={{ fontSize: '11px', fontWeight: 700, backgroundColor: '#d1fae5', color: '#065f46', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap' }}
            >
              ● PRODUCTION RUNTIME ACTIVE
            </span>
            <Link to="/" style={{ fontSize: '12px', fontWeight: 600, color: C.onSurfaceVariant, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Back to Site
            </Link>
          </div>
        </header>

        {/* Dynamic content tab */}
        <main className="dash-main-scroll">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px', minWidth: 0 }}>
              {/* Header banner */}
              <div className="dash-header-banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ minWidth: 0 }}>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(20px, 2.8vw, 26px)', fontWeight: 800, color: C.onSurface, margin: '0 0 4px 0' }}>
                    GOOD MORNING, ALEX.
                  </h2>
                  <p style={{ fontSize: '13px', color: C.onSurfaceVariant, margin: 0 }}>
                    FlowPilot is monitoring 14 active communication channels for Northline Studio.
                  </p>
                </div>
                <div className="dash-header-banner-actions" style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleNavClick('builder')}
                    style={{
                      backgroundColor: C.primaryContainer,
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Plus size={14} /> New Workflow
                  </button>
                  <button
                    onClick={() => triggerToast('Telemetry synced with active nodes')}
                    style={{
                      backgroundColor: C.secondaryContainer,
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Play size={13} fill="#ffffff" /> Sync Telemetry
                  </button>
                </div>
              </div>

              {/* 4 Bento Metrics */}
              <div className="dash-kpi-grid">
                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '18px', borderRadius: '14px', border: `1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize: '11px', color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 700 }}>
                    Active Workflows
                  </span>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.onSurface, marginTop: '4px' }}>24</div>
                  <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>+18% this month</span>
                </div>

                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '18px', borderRadius: '14px', border: `1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize: '11px', color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 700 }}>
                    Inbound Emails Triaged
                  </span>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.primary, marginTop: '4px' }}>{mockDashboardMetrics.emailsProcessed}</div>
                  <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>{mockDashboardMetrics.approvalRate} accuracy rate</span>
                </div>

                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '18px', borderRadius: '14px', border: `1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize: '11px', color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 700 }}>
                    Hours Saved
                  </span>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.secondaryContainer, marginTop: '4px' }}>{mockDashboardMetrics.hoursSaved}</div>
                  <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>This week</span>
                </div>

                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '18px', borderRadius: '14px', border: `1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize: '11px', color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 700 }}>
                    Avg Response Speed
                  </span>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.onSurface, marginTop: '4px' }}>{mockDashboardMetrics.avgResponseTime}</div>
                  <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>vs. 4.2h manual benchmark</span>
                </div>
              </div>

              {/* Priority Triage List */}
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '20px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 700, margin: 0 }}>
                    Action Items Awaiting Review (4)
                  </h3>
                  <button onClick={() => handleNavClick('inbox')} style={{ background: 'none', border: 'none', color: C.primary, fontSize: '12px', fontWeight: 700, cursor: 'pointer', padding: 0 }}>
                    Open Smart Inbox →
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { sender: 'Sarah Jenkins (Acme Corp)', subject: 'Q4 Contract Renewal & Security Addendum', time: '10:42 AM', status: 'Draft Ready' },
                    { sender: 'Marcus Vance (Velo Advisory)', subject: 'Consulting Retainer Agreement confirmation', time: '09:15 AM', status: 'Awaiting Authorization' },
                    { sender: 'David Cole (Fintech Scaleup)', subject: 'Demo booking request for 50 seats', time: 'Yesterday', status: 'Auto-Scheduled' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        backgroundColor: C.surfaceContainerLow,
                        border: `1px solid ${C.borderLight}`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '10px',
                        minWidth: 0,
                      }}
                    >
                      <div style={{ minWidth: 0, flex: '1 1 200px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: C.onSurface, overflowWrap: 'break-word' }}>{item.sender}</div>
                        <div style={{ fontSize: '12px', color: C.onSurfaceVariant, overflowWrap: 'break-word' }}>{item.subject}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '11px', color: C.onSurfaceVariant, whiteSpace: 'nowrap' }}>{item.time}</span>
                        <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: C.brandPeach, color: C.secondary, padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                          {item.status}
                        </span>
                        <button
                          onClick={() => triggerToast(`Opened review panel for ${item.sender}`)}
                          style={{
                            backgroundColor: C.primaryContainer,
                            color: '#ffffff',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Review Draft
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INBOX */}
          {activeTab === 'inbox' && (
            <div style={{ maxWidth: '960px', margin: '0 auto', minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, margin: 0 }}>
                  Smart Inbox Triage
                </h2>
                <span style={{ fontSize: '12px', color: C.onSurfaceVariant }}>Showing 4 unreviewed items</span>
              </div>
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '20px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>
                <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}`, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '6px' }}>
                    <strong style={{ fontSize: '13px', overflowWrap: 'break-word' }}>Sarah Jenkins &lt;s.jenkins@acme.com&gt;</strong>
                    <span style={{ color: C.secondaryContainer, fontWeight: 700, fontSize: '11px', whiteSpace: 'nowrap' }}>Priority: Contract Review</span>
                  </div>
                  <p style={{ fontSize: '12px', color: C.onSurfaceVariant, margin: '0 0 12px 0', lineHeight: 1.5, overflowWrap: 'break-word' }}>
                    "Hi Sarah, thanks for following up. I've reviewed the updated security addendum with our legal team and we are fully aligned. The signed documentation is attached along with our 500-seat pricing schedule."
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <button onClick={() => triggerToast('Response sent via Gmail API')} style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', border: 'none', padding: '7px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      Dispatch Response
                    </button>
                    <button onClick={() => triggerToast('Draft opened for editing')} style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, border: `1px solid ${C.borderLight}`, padding: '7px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      Edit Draft
                    </button>
                  </div>
                </div>

                <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}`, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '6px' }}>
                    <strong style={{ fontSize: '13px', overflowWrap: 'break-word' }}>Marcus Vance &lt;m.vance@veloadvisory.com&gt;</strong>
                    <span style={{ color: C.primary, fontWeight: 700, fontSize: '11px', whiteSpace: 'nowrap' }}>Priority: Retainer Confirmation</span>
                  </div>
                  <p style={{ fontSize: '12px', color: C.onSurfaceVariant, margin: '0 0 12px 0', lineHeight: 1.5, overflowWrap: 'break-word' }}>
                    "Hello Marcus, pleased to confirm our quarterly retainer kickoff call for this Friday at 11:00 AM EST. Calendar invites have been generated for both teams."
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <button onClick={() => triggerToast('Response sent via Gmail API')} style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', border: 'none', padding: '7px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      Dispatch Response
                    </button>
                    <button onClick={() => triggerToast('Draft opened for editing')} style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, border: `1px solid ${C.borderLight}`, padding: '7px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      Edit Draft
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WHATSAPP */}
          {activeTab === 'whatsapp' && (
            <div style={{ maxWidth: '780px', margin: '0 auto', minWidth: 0 }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                WhatsApp Operations Stream
              </h2>
              <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '16px', border: '1px solid #bbf7d0', minWidth: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ backgroundColor: '#ffffff', padding: '12px 14px', borderRadius: '10px', border: '1px solid #d1fae5', fontSize: '12px', overflowWrap: 'break-word' }}>
                    <strong style={{ color: C.primaryContainer, display: 'block', marginBottom: '2px' }}>FlowPilot Operations Desk</strong>
                    Client request from Acme Services regarding meeting confirmation. Verified Thursday 3:00 PM EST availability. Reply to approve draft.
                  </div>
                  <div style={{ backgroundColor: '#059669', color: '#ffffff', padding: '10px 14px', borderRadius: '10px', fontSize: '12px', alignSelf: 'flex-end', maxWidth: '85%', display: 'flex', alignItems: 'center', gap: '6px', overflowWrap: 'break-word' }}>
                    <span>Confirmed! Thursday at 3 PM is held.</span>
                    <CheckCheck size={13} style={{ flexShrink: 0 }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: WORKFLOWS */}
          {activeTab === 'workflows' && (
            <div style={{ maxWidth: '1000px', margin: '0 auto', minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, margin: '0 0 4px 0' }}>
                    Active Workflows
                  </h2>
                  <p style={{ fontSize: '13px', color: C.onSurfaceVariant, margin: 0 }}>
                    Deterministic autonomous rules governing client interactions
                  </p>
                </div>
                <button
                  onClick={() => handleNavClick('builder')}
                  style={{
                    backgroundColor: C.primaryContainer,
                    color: '#ffffff',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Plus size={14} /> Create Workflow
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { name: 'Enterprise RFQ Triage & Quote Draft', trigger: 'Gmail (Subject: RFQ/Proposal)', action: 'Parse terms → Draft quotation → WhatsApp alert', active: true },
                  { name: 'Meeting Request Auto-Booking', trigger: 'Gmail (Subject: Demo/Call)', action: 'Scan Google Calendar → Hold slot → Send invite', active: true },
                  { name: 'Urgent Client Escalation Route', trigger: 'Gmail (Sentiment: Negative/Urgent)', action: 'High priority alert to WhatsApp group', active: true },
                  { name: 'Weekly Operational Ledger Sync', trigger: 'Cron (Every Friday 5 PM)', action: 'Summarize processed requests → Push to Slack', active: false },
                ].map((wf, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '16px 20px',
                      backgroundColor: C.surfaceContainerLowest,
                      borderRadius: '12px',
                      border: `1px solid ${C.borderLight}`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '12px',
                      minWidth: 0,
                    }}
                  >
                    <div style={{ minWidth: 0, flex: '1 1 240px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <strong style={{ fontSize: '14px', color: C.onSurface, overflowWrap: 'break-word' }}>{wf.name}</strong>
                        <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', backgroundColor: wf.active ? '#d1fae5' : C.surfaceContainer, color: wf.active ? '#065f46' : C.onSurfaceVariant, whiteSpace: 'nowrap' }}>
                          {wf.active ? 'ACTIVE' : 'PAUSED'}
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', color: C.onSurfaceVariant, marginTop: '4px', overflowWrap: 'break-word' }}>
                        <strong>Trigger:</strong> {wf.trigger} • <strong>Action:</strong> {wf.action}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => triggerToast(`Toggled ${wf.name}`)}
                        style={{
                          backgroundColor: C.surfaceContainerLow,
                          border: `1px solid ${C.borderLight}`,
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {wf.active ? 'Pause' : 'Activate'}
                      </button>
                      <button
                        onClick={() => handleNavClick('builder')}
                        style={{
                          backgroundColor: C.primaryContainer,
                          color: '#ffffff',
                          border: 'none',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Edit in Builder
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: WORKFLOW BUILDER */}
          {activeTab === 'builder' && (
            <div style={{ maxWidth: '900px', margin: '0 auto', minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, margin: '0 0 4px 0' }}>
                    Visual Workflow Builder
                  </h2>
                  <p style={{ fontSize: '13px', color: C.onSurfaceVariant, margin: 0 }}>
                    Construct deterministic logic steps with automated human verification gates
                  </p>
                </div>
                <button
                  onClick={() => triggerToast('Workflow saved and deployed to runtime')}
                  style={{
                    backgroundColor: C.secondaryContainer,
                    color: '#ffffff',
                    padding: '8px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Deploy Workflow →
                </button>
              </div>

              {/* Node graph canvas preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: C.surfaceContainerLowest, padding: '24px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, minWidth: 0 }}>
                {/* Step 1 */}
                <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.primaryContainer}`, minWidth: 0 }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: C.primary, textTransform: 'uppercase' }}>Step 1 • Inbound Trigger</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginTop: '2px', overflowWrap: 'break-word' }}>Gmail: Inbound Email Matches Filter</div>
                  <div style={{ fontSize: '12px', color: C.onSurfaceVariant, marginTop: '4px', overflowWrap: 'break-word' }}>Criteria: Subject contains ("Proposal" OR "RFQ" OR "Quote") from enterprise domains.</div>
                </div>

                <div style={{ textAlign: 'center', color: C.primary }}>↓</div>

                {/* Step 2 */}
                <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.primaryContainer}`, minWidth: 0 }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: C.primary, textTransform: 'uppercase' }}>Step 2 • Cognitive Analysis</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginTop: '2px', overflowWrap: 'break-word' }}>FlowPilot Engine: Extract Budget, Timeline &amp; Scope</div>
                  <div style={{ fontSize: '12px', color: C.onSurfaceVariant, marginTop: '4px', overflowWrap: 'break-word' }}>Confidence threshold required: ≥98.0%. Deterministic contract rate calculation.</div>
                </div>

                <div style={{ textAlign: 'center', color: C.primary }}>↓</div>

                {/* Step 3 */}
                <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#f0fdf4', border: '1px solid #86efac', minWidth: 0 }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>Step 3 • Human Approval Gate</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginTop: '2px', overflowWrap: 'break-word' }}>WhatsApp Alert to Operations Lead</div>
                  <div style={{ fontSize: '12px', color: C.onSurfaceVariant, marginTop: '4px', overflowWrap: 'break-word' }}>Sends one-tap authorization message with executive proposal preview.</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: CALENDAR */}
          {activeTab === 'calendar' && (
            <div style={{ maxWidth: '960px', margin: '0 auto', minWidth: 0 }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                Calendar Sync &amp; Booking Management
              </h2>
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '24px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, minWidth: 0 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
                  <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: C.surfaceContainerLow, minWidth: 0 }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, overflowWrap: 'break-word' }}>Google Calendar (Primary)</div>
                    <div style={{ fontSize: '12px', color: C.onSurfaceVariant, marginTop: '4px', overflowWrap: 'break-word' }}>alex@northlinestudio.com • Status: Active</div>
                    <span style={{ fontSize: '11px', color: '#059669', fontWeight: 700, display: 'block', marginTop: '8px' }}>✓ 18 slots held this week</span>
                  </div>
                  <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: C.surfaceContainerLow, minWidth: 0 }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, overflowWrap: 'break-word' }}>Executive Focus Shield</div>
                    <div style={{ fontSize: '12px', color: C.onSurfaceVariant, marginTop: '4px', overflowWrap: 'break-word' }}>Protects 2h daily deep-work blocks from auto-booking.</div>
                    <span style={{ fontSize: '11px', color: C.primary, fontWeight: 700, display: 'block', marginTop: '8px' }}>Active (Mon-Fri 9:00 AM - 11:00 AM)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div style={{ maxWidth: '1000px', margin: '0 auto', minWidth: 0 }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                Operational Analytics &amp; ROI
              </h2>
              <div className="dash-kpi-grid" style={{ marginBottom: '24px' }}>
                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '18px', borderRadius: '14px', border: `1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize: '11px', color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 700 }}>Time Recovered</span>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.primary, marginTop: '4px' }}>15.4 hrs</div>
                  <span style={{ fontSize: '11px', color: '#059669' }}>Equivalent to 0.4 FTE</span>
                </div>
                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '18px', borderRadius: '14px', border: `1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize: '11px', color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 700 }}>Draft Accuracy</span>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.secondaryContainer, marginTop: '4px' }}>99.2%</div>
                  <span style={{ fontSize: '11px', color: '#059669' }}>Across 482 emails</span>
                </div>
                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '18px', borderRadius: '14px', border: `1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize: '11px', color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 700 }}>Avg Response Lag</span>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.onSurface, marginTop: '4px' }}>2.4 min</div>
                  <span style={{ fontSize: '11px', color: '#059669' }}>-88% vs baseline</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: ACTIVITY FEED */}
          {activeTab === 'activity' && (
            <div style={{ maxWidth: '960px', margin: '0 auto', minWidth: 0 }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                System Activity Feed
              </h2>
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '20px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
                {mockRecentActivities.map((act) => (
                  <div key={act.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '10px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}`, flexWrap: 'wrap', gap: '8px', minWidth: 0 }}>
                    <div style={{ minWidth: 0, flex: '1 1 200px' }}>
                      <strong style={{ fontSize: '13px', overflowWrap: 'break-word' }}>{act.title}</strong>
                      <div style={{ fontSize: '12px', color: C.onSurfaceVariant, overflowWrap: 'break-word' }}>{act.detail}</div>
                    </div>
                    <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>{act.time}</span>
                      <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: act.status === 'success' ? '#059669' : C.secondaryContainer }}>
                        {act.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: INTEGRATIONS */}
          {activeTab === 'integrations' && (
            <div style={{ maxWidth: '960px', margin: '0 auto', minWidth: 0 }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                Connected Integrations
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
                {mockIntegrations.map((item) => (
                  <div key={item.id} style={{ backgroundColor: C.surfaceContainerLowest, padding: '20px', borderRadius: '14px', border: `1px solid ${C.borderLight}`, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                      <strong style={{ fontSize: '15px', overflowWrap: 'break-word' }}>{item.name}</strong>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: item.status === 'Connected' ? '#059669' : C.onSurfaceVariant, whiteSpace: 'nowrap' }}>
                        {item.status}
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: C.onSurfaceVariant, marginBottom: '14px', overflowWrap: 'break-word' }}>{item.account}</div>
                    <button onClick={() => triggerToast(`Configured ${item.name}`)} style={{ backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}`, padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                      Configure Settings
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: TEAM */}
          {activeTab === 'team' && (
            <div style={{ maxWidth: '960px', margin: '0 auto', minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, margin: 0 }}>
                  Team Members &amp; Operators
                </h2>
                <button onClick={() => triggerToast('Invite link generated')} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  + Invite Member
                </button>
              </div>
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '20px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
                {[
                  { name: 'Alex Martin', role: 'Owner & Executive Lead', email: 'alex@northlinestudio.com', badge: 'Admin' },
                  { name: 'Sarah Jenkins', role: 'Operations Director', email: 'sarah@northlinestudio.com', badge: 'Operator' },
                  { name: 'Michael Chen', role: 'Client Solutions Lead', email: 'm.chen@northlinestudio.com', badge: 'Operator' },
                ].map((member, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderRadius: '10px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}`, flexWrap: 'wrap', gap: '8px', minWidth: 0 }}>
                    <div style={{ minWidth: 0, flex: '1 1 200px' }}>
                      <strong style={{ fontSize: '13px', overflowWrap: 'break-word' }}>{member.name}</strong>
                      <div style={{ fontSize: '12px', color: C.onSurfaceVariant, overflowWrap: 'break-word' }}>{member.email} • {member.role}</div>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', backgroundColor: C.surfaceContainer, color: C.primary, whiteSpace: 'nowrap' }}>
                      {member.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 11: BILLING */}
          {activeTab === 'billing' && (
            <div style={{ maxWidth: '960px', margin: '0 auto', minWidth: 0 }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                Subscription &amp; Usage
              </h2>
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '24px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', gap: '20px', minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontSize: '12px', color: C.secondaryContainer, fontWeight: 700, textTransform: 'uppercase' }}>Current Plan</span>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '4px 0 0 0', overflowWrap: 'break-word' }}>Growth Operations ($249/mo)</h3>
                  </div>
                  <button onClick={() => triggerToast('Redirecting to Stripe Billing Portal')} style={{ backgroundColor: C.primaryContainer, color: '#ffffff', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Manage Invoices
                  </button>
                </div>
                <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: C.surfaceContainerLow, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, overflowWrap: 'break-word' }}>Monthly Usage: 1,284 / 5,000 processed messages (25.6%)</div>
                  <div style={{ height: '8px', borderRadius: '9999px', backgroundColor: C.surfaceContainer, marginTop: '8px', overflow: 'hidden' }}>
                    <div style={{ width: '25.6%', height: '100%', backgroundColor: C.secondaryContainer }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 12: SETTINGS */}
          {activeTab === 'settings' && (
            <div style={{ maxWidth: '780px', margin: '0 auto', minWidth: 0 }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                Workspace Settings
              </h2>
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '24px', borderRadius: '16px', border: `1px solid ${C.borderLight}`, display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Workspace Name</label>
                  <input type="text" defaultValue="Northline Studio Operations" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Primary Alert Phone (WhatsApp)</label>
                  <input type="text" defaultValue="+1 (555) 234-9811" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.outlineVariant}`, fontSize: '13px' }} />
                </div>
                <button
                  onClick={() => triggerToast('Workspace settings saved successfully')}
                  style={{
                    backgroundColor: C.primaryContainer,
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
