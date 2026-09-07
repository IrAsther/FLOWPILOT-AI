import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

export const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'inbox', label: 'Inbox Triage', icon: Inbox, badge: 4 },
    { id: 'whatsapp', label: 'WhatsApp Agent', icon: MessageSquare },
    { id: 'workflows', label: 'Workflows', icon: GitBranch },
    { id: 'calendar', label: 'Calendar Sync', icon: CalendarIcon },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'activity', label: 'Activity Feed', icon: Activity },
    { id: 'integrations', label: 'Integrations', icon: Layers },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: C.surface, color: C.onSurface, fontFamily: "'Inter', sans-serif" }}>
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
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <CheckCircle2 size={16} /> {toastMessage}
        </div>
      )}

      {/* LEFT SIDEBAR */}
      <aside
        style={{
          width: '260px',
          backgroundColor: C.surfaceContainerLow,
          borderRight: `1px solid ${C.borderLight}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <div>
          {/* Brand header */}
          <div style={{ padding: '20px 24px', borderBottom: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              }}
            >
              FP
            </div>
            <div>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 800, margin: 0 }}>
                  FlowPilot AI
                </h1>
              </Link>
              <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Operations Hub</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav style={{ padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
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
                  }}
                >
                  <IconComp size={16} />
                  <span>{item.label}</span>
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
            }}
          >
            AM
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>Alex Martin</div>
            <div style={{ fontSize: '11px', color: C.onSurfaceVariant }}>Northline Studio</div>
          </div>
          <Link to="/auth" style={{ marginLeft: 'auto', color: C.onSurfaceVariant }} title="Sign Out">
            <LogOut size={15} />
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        {/* Top bar */}
        <header
          style={{
            height: '60px',
            backgroundColor: C.surfaceContainerLowest,
            borderBottom: `1px solid ${C.borderLight}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 28px',
          }}
        >
          <div style={{ width: '360px', position: 'relative' }}>
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
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: '#d1fae5', color: '#065f46', padding: '3px 8px', borderRadius: '6px' }}>
              ● PRODUCTION RUNTIME ACTIVE
            </span>
            <Link to="/" style={{ fontSize: '12px', fontWeight: 600, color: C.onSurfaceVariant, textDecoration: 'none' }}>
              Back to Site
            </Link>
          </div>
        </header>

        {/* Dynamic content tab */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '28px' }}>
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Header banner */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '26px', fontWeight: 800, color: C.onSurface, margin: '0 0 4px 0' }}>
                    GOOD MORNING, ALEX.
                  </h2>
                  <p style={{ fontSize: '13px', color: C.onSurfaceVariant, margin: 0 }}>
                    FlowPilot is monitoring 14 active communication channels for Northline Studio.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => triggerToast('New workflow configured')}
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
                    }}
                  >
                    <Plus size={14} /> New Workflow
                  </button>
                  <button
                    onClick={() => triggerToast('Manual sync executed')}
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
                    }}
                  >
                    <Play size={13} fill="#ffffff" /> Sync Telemetry
                  </button>
                </div>
              </div>

              {/* 4 Bento Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
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
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.primary, marginTop: '4px' }}>482</div>
                  <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>99.2% accuracy rate</span>
                </div>

                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '18px', borderRadius: '14px', border: `1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize: '11px', color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 700 }}>
                    Hours Saved
                  </span>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.secondaryContainer, marginTop: '4px' }}>15.4 hrs</div>
                  <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>This week</span>
                </div>

                <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '18px', borderRadius: '14px', border: `1px solid ${C.borderLight}` }}>
                  <span style={{ fontSize: '11px', color: C.onSurfaceVariant, textTransform: 'uppercase', fontWeight: 700 }}>
                    Avg Response Speed
                  </span>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: C.onSurface, marginTop: '4px' }}>45 sec</div>
                  <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>vs. 4.2h manual benchmark</span>
                </div>
              </div>

              {/* Priority Triage List */}
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '20px', borderRadius: '16px', border: `1px solid ${C.borderLight}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 700, margin: 0 }}>
                    Action Items Awaiting Review (4)
                  </h3>
                  <button onClick={() => setActiveTab('inbox')} style={{ background: 'none', border: 'none', color: C.primary, fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
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
                        gap: '8px',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: C.onSurface }}>{item.sender}</div>
                        <div style={{ fontSize: '12px', color: C.onSurfaceVariant }}>{item.subject}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '11px', color: C.onSurfaceVariant }}>{item.time}</span>
                        <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: C.brandPeach, color: C.secondary, padding: '2px 6px', borderRadius: '4px' }}>
                          {item.status}
                        </span>
                        <button
                          onClick={() => triggerToast(`Opened review panel for ${item.sender}`)}
                          style={{
                            backgroundColor: C.primaryContainer,
                            color: '#ffffff',
                            border: 'none',
                            padding: '5px 12px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 600,
                            cursor: 'pointer',
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
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                Smart Inbox Triage
              </h2>
              <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '20px', borderRadius: '16px', border: `1px solid ${C.borderLight}` }}>
                <div style={{ padding: '14px', borderRadius: '10px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <strong style={{ fontSize: '13px' }}>Sarah Jenkins &lt;s.jenkins@acme.com&gt;</strong>
                    <span style={{ color: C.secondaryContainer, fontWeight: 700, fontSize: '11px' }}>Priority: Contract Review</span>
                  </div>
                  <p style={{ fontSize: '12px', color: C.onSurfaceVariant, margin: '0 0 12px 0', lineHeight: 1.5 }}>
                    "Hi Sarah, thanks for following up. I've reviewed the updated security addendum with our legal team and we are fully aligned. The signed documentation is attached along with our 500-seat pricing schedule."
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => triggerToast('Response sent via Gmail API')} style={{ backgroundColor: C.secondaryContainer, color: '#ffffff', border: 'none', padding: '7px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
                      Dispatch Response
                    </button>
                    <button onClick={() => triggerToast('Draft opened for editing')} style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, border: `1px solid ${C.borderLight}`, padding: '7px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>
                      Edit Draft
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WHATSAPP */}
          {activeTab === 'whatsapp' && (
            <div style={{ maxWidth: '780px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
                WhatsApp Operations Stream
              </h2>
              <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '16px', border: '1px solid #bbf7d0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ backgroundColor: '#ffffff', padding: '12px 14px', borderRadius: '10px', border: '1px solid #d1fae5', fontSize: '12px' }}>
                    <strong style={{ color: C.primaryContainer, display: 'block', marginBottom: '2px' }}>FlowPilot Operations Desk</strong>
                    Client request from Acme Services regarding meeting confirmation. Verified Thursday 3:00 PM EST availability. Reply to approve draft.
                  </div>
                  <div style={{ backgroundColor: '#059669', color: '#ffffff', padding: '10px 14px', borderRadius: '10px', fontSize: '12px', alignSelf: 'flex-end', maxWidth: '78%', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>Confirmed! Thursday at 3 PM is held.</span>
                    <CheckCheck size={13} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SETTINGS / GENERAL */}
          {activeTab !== 'overview' && activeTab !== 'inbox' && activeTab !== 'whatsapp' && (
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', padding: '56px 0' }}>
              <Sliders size={36} color={C.primary} style={{ margin: '0 auto 12px auto' }} />
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 800, color: C.onSurface }}>
                {navItems.find((n) => n.id === activeTab)?.label} Settings
              </h3>
              <p style={{ fontSize: '13px', color: C.onSurfaceVariant }}>
                Active telemetry is running normally across connected endpoints.
              </p>
              <button
                onClick={() => triggerToast(`${navItems.find((n) => n.id === activeTab)?.label} configuration updated`)}
                style={{
                  backgroundColor: C.primaryContainer,
                  color: '#ffffff',
                  padding: '9px 18px',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                Save Configuration
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
