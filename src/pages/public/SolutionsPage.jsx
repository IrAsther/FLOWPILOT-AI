import React from 'react';
import { Link } from 'react-router-dom';

const C = {
  background: '#fdf9f4', surface: '#fdf9f4',
  surfaceContainerLowest: '#ffffff', surfaceContainerLow: '#f7f3ee',
  surfaceContainer: '#f1ede8', surfaceContainerHigh: '#ebe8e3',
  onSurface: '#1c1c19', onSurfaceVariant: '#3f4947',
  outline: '#6f7977', outlineVariant: '#bec9c6',
  primary: '#004642', primaryContainer: '#01605a',
  onPrimary: '#ffffff', onPrimaryContainer: '#8ed8d0',
  primaryFixed: '#a5f0e8', primaryFixedDim: '#8ad4cc', onPrimaryFixed: '#00201e',
  secondary: '#994700', secondaryContainer: '#fe852c',
  onSecondary: '#ffffff', onSecondaryContainer: '#632c00',
  secondaryFixed: '#ffdbc8', secondaryFixedDim: '#ffb68a',
  tertiary: '#55371a', tertiaryFixed: '#ffdcc0',
  onTertiary: '#ffffff',
};
const T = {
  headlineXl:  { fontFamily:"'Plus Jakarta Sans'", fontSize:'48px', lineHeight:'56px', letterSpacing:'-0.02em', fontWeight:700 },
  headlineLg:  { fontFamily:"'Plus Jakarta Sans'", fontSize:'36px', lineHeight:'44px', letterSpacing:'-0.01em', fontWeight:600 },
  headlineMd:  { fontFamily:"'Plus Jakarta Sans'", fontSize:'24px', lineHeight:'32px', fontWeight:600 },
  headlineSm:  { fontFamily:"'Plus Jakarta Sans'", fontSize:'18px', lineHeight:'24px', fontWeight:600 },
  labelMd:     { fontFamily:"'Plus Jakarta Sans'", fontSize:'14px', lineHeight:'20px', letterSpacing:'0.01em', fontWeight:500 },
  labelSm:     { fontFamily:"'Plus Jakarta Sans'", fontSize:'12px', lineHeight:'16px', letterSpacing:'0.01em', fontWeight:500 },
  bodyLg:      { fontFamily:"'Inter'", fontSize:'16px', lineHeight:'24px', fontWeight:400 },
  bodyMd:      { fontFamily:"'Inter'", fontSize:'14px', lineHeight:'20px', fontWeight:400 },
  bodySm:      { fontFamily:"'Inter'", fontSize:'12px', lineHeight:'16px', fontWeight:400 },
};

/* ── HERO ── */
function SolutionsHero() {
  return (
    <section style={{ position:'relative', paddingTop:'80px', paddingBottom:'96px', overflow:'hidden', borderBottom:`1px solid ${C.outlineVariant}4D` }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 32px' }}>
        <div style={{ textAlign:'center', maxWidth:'768px', margin:'0 auto 64px' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            padding:'4px 12px', borderRadius:'9999px',
            backgroundColor:C.surfaceContainer, border:`1px solid ${C.outlineVariant}66`,
            marginBottom:'24px',
          }}>
            <span style={{ width:'8px',height:'8px',borderRadius:'50%',backgroundColor:C.secondaryContainer,display:'inline-block',animation:'pulse 2s infinite' }}/>
            <span style={{ ...T.labelSm, color:C.onSurfaceVariant }}>SOLUTIONS FOR OPERATIONAL VELOCITY</span>
          </div>
          <h1 style={{ ...T.headlineXl, color:C.onSurface, marginBottom:'24px' }}>
            YOUR BUSINESS HAS <span style={{ color:C.secondaryContainer }}>BETTER THINGS</span> TO DO.
          </h1>
          <p style={{ ...T.bodyLg, color:C.onSurfaceVariant, marginBottom:'40px', maxWidth:'640px', margin:'0 auto 40px' }}>
            FlowPilot automates the repetitive work behind your business so your team can focus on the work that actually moves it forward.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'16px' }}>
            <Link to="/book-a-demo" style={{
              padding:'14px 28px', borderRadius:'8px',
              backgroundColor:C.secondaryContainer, color:C.onSecondary,
              ...T.labelMd, fontWeight:600, textDecoration:'none',
              display:'inline-flex', alignItems:'center', gap:'8px', boxShadow:'0 1px 3px rgba(0,0,0,0.1)',
            }}>
              Plan a Demo
              <span className="material-symbols-outlined" style={{ fontSize:'20px' }}>calendar_today</span>
            </Link>
            <a href="#pipeline" style={{
              padding:'14px 28px', borderRadius:'8px',
              backgroundColor:C.surfaceContainerLowest,
              border:`1px solid ${C.outlineVariant}99`,
              color:C.primary, ...T.labelMd, fontWeight:500, textDecoration:'none',
            }}>Explore Automation</a>
          </div>
        </div>

        {/* Topology Mockup */}
        <div id="pipeline" style={{
          maxWidth:'1024px', margin:'0 auto',
          backgroundColor:C.surfaceContainerLowest, padding:'32px', borderRadius:'12px',
          border:`1px solid ${C.outlineVariant}66`, boxShadow:'0 1px 4px rgba(0,0,0,0.06)',
        }}>
          <div style={{
            display:'flex', alignItems:'center', justifyContent:'space-between',
            paddingBottom:'24px', borderBottom:`1px solid ${C.outlineVariant}4D`, marginBottom:'32px',
            flexWrap:'wrap', gap:'12px',
          }}>
            <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
              <span style={{ width:'12px',height:'12px',borderRadius:'50%',backgroundColor:`${C.primaryFixedDim}` }}/>
              <span style={{ ...T.bodySm, color:C.outline, fontFamily:'monospace' }}>
                orchestration.flowpilot.internal // active-stream: 12ms latency
              </span>
            </div>
            <span style={{
              display:'inline-flex', alignItems:'center', gap:'6px',
              ...T.labelSm, color:C.primary, fontWeight:500,
              backgroundColor:`${C.primaryFixed}4D`, padding:'4px 10px', borderRadius:'9999px',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize:'14px' }}>check_circle</span>
              All Nodes Operational
            </span>
          </div>

          {/* 5-col topology */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr auto 1fr', gap:'16px', alignItems:'center' }} className="topology-grid">
            {/* Left inputs */}
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              {[
                { icon:'mail', label:'Gmail Inbound', title:'Nova Studio #4092', sub:'Scope Revision Inquiry' },
                { icon:'chat', label:'WhatsApp VIP', title:'+1 (415) 890-2100', sub:'Urgent signature query' },
              ].map(n => (
                <div key={n.label} style={{
                  padding:'16px', borderRadius:'8px',
                  backgroundColor:C.surfaceContainerLow,
                  border:`1px solid ${C.outlineVariant}4D`,
                }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px', color:C.primary, ...T.bodySm, fontWeight:500 }}>
                    <span className="material-symbols-outlined" style={{ color:C.primary, fontSize:'18px' }}>{n.icon}</span>
                    {n.label}
                  </div>
                  <div style={{ ...T.bodySm, color:C.onSurface, fontWeight:600 }}>{n.title}</div>
                  <div style={{ ...T.labelSm, color:C.onSurfaceVariant }}>{n.sub}</div>
                </div>
              ))}
            </div>

            {/* Connector L */}
            <div style={{ display:'flex', flexDirection:'column', gap:'32px', alignItems:'center', color:C.secondaryContainer }}>
              {[0,1].map(i => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'4px' }}>
                  <span style={{ height:'2px', width:'32px', backgroundColor:`${C.secondaryContainer}66` }}/>
                  <span className="material-symbols-outlined" style={{ animation:'pulse 2s infinite', fontSize:'20px' }}>fast_forward</span>
                </div>
              ))}
            </div>

            {/* Core Hub */}
            <div style={{
              backgroundColor:C.surfaceContainer, padding:'24px', borderRadius:'12px',
              border:`1px solid ${C.primary}33`, textAlign:'center', position:'relative', overflow:'hidden',
              boxShadow:'0 1px 3px rgba(0,0,0,0.06)',
            }}>
              <div style={{
                width:'56px', height:'56px', margin:'0 auto 16px',
                borderRadius:'12px', backgroundColor:C.primaryContainer, color:C.onPrimary,
                display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 1px 3px rgba(0,0,0,0.1)',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize:'28px' }}>neurology</span>
              </div>
              <div style={{ ...T.labelMd, fontWeight:700, color:C.onSurface }}>FlowPilot AI Core</div>
              <div style={{ ...T.bodySm, color:C.primary, fontWeight:500, marginTop:'4px' }}>Semantic Triage</div>
              <div style={{ marginTop:'16px', paddingTop:'12px', borderTop:`1px solid ${C.outlineVariant}4D`, ...T.labelSm, color:C.onSurfaceVariant }}>
                99.8% precision score
              </div>
            </div>

            {/* Connector R */}
            <div style={{ display:'flex', flexDirection:'column', gap:'32px', alignItems:'center', color:C.secondaryContainer }}>
              {[0,1].map(i => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'4px' }}>
                  <span className="material-symbols-outlined" style={{ animation:'pulse 2s infinite', fontSize:'20px' }}>fast_forward</span>
                  <span style={{ height:'2px', width:'32px', backgroundColor:`${C.secondaryContainer}66` }}/>
                </div>
              ))}
            </div>

            {/* Right outputs */}
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              {[
                { icon:'database', label:'HubSpot / CRM', title:'Stage: Deal Active', sub:'Values synced (100%)' },
                { icon:'calendar_month', label:'Google Calendar', title:'Slot Booked: 14:30', sub:'Auto-conflict resolved' },
              ].map(n => (
                <div key={n.label} style={{
                  padding:'16px', borderRadius:'8px',
                  backgroundColor:C.surfaceContainerLow,
                  border:`1px solid ${C.outlineVariant}4D`,
                }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px', color:C.primary, ...T.bodySm, fontWeight:500 }}>
                    <span className="material-symbols-outlined" style={{ color:C.primary, fontSize:'18px' }}>{n.icon}</span>
                    {n.label}
                  </div>
                  <div style={{ ...T.bodySm, color:C.onSurface, fontWeight:600 }}>{n.title}</div>
                  <div style={{ ...T.labelSm, color:C.onSurfaceVariant }}>{n.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROBLEM ── */
function ProblemSection() {
  const pains = [
    { icon:'inbox', title:'Email Overload', desc:'Hours per day spent triaging, categorizing, and manually responding to identical incoming requests.' },
    { icon:'schedule', title:'Scheduling Chaos', desc:'Back-and-forth communications consuming executive bandwidth before any meeting ever happens.' },
    { icon:'sync_problem', title:'Disconnected Tools', desc:'Data silos between your CRM, calendar, inbox, and communication platforms creating manual bridges.' },
    { icon:'group_off', title:'Delayed Decisions', desc:'Approvals and escalations blocked by slow human relay chains that AI can resolve in seconds.' },
  ];
  return (
    <section style={{ padding:'96px 32px', backgroundColor:C.surface, borderBottom:`1px solid ${C.outlineVariant}4D` }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'5fr 7fr', gap:'48px', alignItems:'center' }} className="problem-grid">
          <div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              padding:'4px 12px', borderRadius:'9999px',
              backgroundColor:C.surfaceContainer, border:`1px solid ${C.outlineVariant}66`,
              marginBottom:'16px', ...T.labelSm, color:C.onSurfaceVariant,
            }}>THE PROBLEM</div>
            <h2 style={{ ...T.headlineLg, color:C.onSurface, marginBottom:'16px' }}>
              Repetitive Operations Are Costing You Strategic Time
            </h2>
            <p style={{ ...T.bodyLg, color:C.onSurfaceVariant, marginBottom:'24px', lineHeight:'1.75' }}>
              The average executive wastes 2.6 hours daily on routine communications that could be fully automated. FlowPilot eliminates that waste entirely.
            </p>
            <div style={{
              padding:'16px 20px', backgroundColor:`${C.primaryFixed}33`,
              borderRadius:'8px', border:`1px solid ${C.primary}20`,
              ...T.bodyMd, color:C.primary, fontWeight:500,
            }}>
              "We recovered 18+ hours per week per team lead within the first month." — Enterprise Client
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px' }} className="pains-grid">
            {pains.map(p => (
              <div key={p.title} style={{
                padding:'24px', borderRadius:'12px',
                backgroundColor:C.surfaceContainerLowest,
                border:`1px solid ${C.outlineVariant}4D`,
                boxShadow:'0 1px 3px rgba(0,0,0,0.04)',
              }}>
                <span className="material-symbols-outlined" style={{ color:C.secondary, fontSize:'28px', display:'block', marginBottom:'12px' }}>{p.icon}</span>
                <h4 style={{ ...T.headlineSm, color:C.onSurface, marginBottom:'8px' }}>{p.title}</h4>
                <p style={{ ...T.bodySm, color:C.onSurfaceVariant }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── USE CASES ── */
const USE_CASES = [
  {
    segment: 'Growing SMEs', badge: 'Scale Operations',
    badgeBg: `${C.primaryFixed}4D`, badgeColor: C.primary,
    heading: 'Automate Customer Operations Without Hiring',
    desc: 'Handle the volume of a 10-person team with a 2-person operation. FlowPilot manages inbound inquiries, qualifies leads, and keeps your CRM current 24/7.',
    features: ['Automated lead qualification and routing', 'Customer inquiry triage and response', 'Real-time CRM and pipeline synchronization'],
    icon: 'storefront', iconBg: C.primaryContainer, iconColor: C.onPrimaryContainer,
  },
  {
    segment: 'Consultants & Agencies', badge: 'Client Excellence',
    badgeBg: `${C.secondaryFixed}66`, badgeColor: C.secondary,
    heading: 'Deliver Premium Client Experience at Scale',
    desc: 'Respond to every client within minutes not hours. Automate project briefings, meeting prep, and follow-ups so you focus on strategy and delivery.',
    features: ['Sub-60 second client response guarantee', 'Automated meeting prep and agenda generation', 'Intelligent follow-up and deadline reminders'],
    icon: 'groups', iconBg: C.secondaryContainer, iconColor: C.onSecondaryContainer,
  },
  {
    segment: 'Solopreneurs', badge: 'Personal Efficiency',
    badgeBg: `${C.tertiaryFixed}66`, badgeColor: C.tertiary,
    heading: 'Operate Like a Team of One With AI Leverage',
    desc: 'Never miss a lead. Never let a client wait. FlowPilot gives you the operational bandwidth of a full business development team in your pocket.',
    features: ['24/7 automated inquiry handling', 'Smart scheduling and calendar protection', 'Personalized AI responses matching your voice'],
    icon: 'person', iconBg: C.tertiaryFixed, iconColor: C.tertiary,
  },
];

function UseCasesSection() {
  return (
    <section style={{ padding:'96px 32px' }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', maxWidth:'768px', margin:'0 auto 64px' }}>
          <h2 style={{ ...T.headlineLg, color:C.onSurface, marginBottom:'16px' }}>Built For Every Growth Stage</h2>
          <p style={{ ...T.bodyLg, color:C.onSurfaceVariant }}>
            Whether you're a solo consultant or a scaling enterprise, FlowPilot adapts to your operational reality.
          </p>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'48px' }}>
          {USE_CASES.map((uc, i) => (
            <div key={uc.segment} style={{
              display:'grid',
              gridTemplateColumns: i % 2 === 0 ? '7fr 5fr' : '5fr 7fr',
              gap:'48px', alignItems:'center',
              backgroundColor:C.surfaceContainerLowest,
              border:`1px solid ${C.outlineVariant}4D`,
              borderRadius:'16px', padding:'48px', boxShadow:'0 1px 4px rgba(0,0,0,0.05)',
            }} className="usecase-grid">
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px' }}>
                  <div style={{
                    width:'48px', height:'48px', borderRadius:'12px',
                    backgroundColor:uc.iconBg, color:uc.iconColor,
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize:'24px' }}>{uc.icon}</span>
                  </div>
                  <span style={{
                    padding:'4px 12px', borderRadius:'9999px',
                    backgroundColor:uc.badgeBg, color:uc.badgeColor,
                    ...T.labelSm, fontWeight:600,
                  }}>{uc.badge}</span>
                </div>
                <div style={{ ...T.labelSm, color:C.secondary, textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:600, marginBottom:'8px' }}>
                  {uc.segment}
                </div>
                <h3 style={{ ...T.headlineMd, color:C.onSurface, marginBottom:'16px' }}>{uc.heading}</h3>
                <p style={{ ...T.bodyLg, color:C.onSurfaceVariant, marginBottom:'24px', lineHeight:'1.75' }}>{uc.desc}</p>
                <ul style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                  {uc.features.map(f => (
                    <li key={f} style={{ display:'flex', alignItems:'center', gap:'12px', ...T.bodyMd, color:C.onSurface }}>
                      <span className="material-symbols-outlined" style={{ color:C.primary, fontSize:'18px', flexShrink:0 }}>check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{
                  backgroundColor:C.surfaceContainerLow,
                  border:`1px solid ${C.outlineVariant}4D`,
                  borderRadius:'12px', padding:'32px', textAlign:'center',
                }}>
                  <div style={{
                    width:'80px', height:'80px', margin:'0 auto 24px',
                    borderRadius:'20px', backgroundColor:uc.iconBg, color:uc.iconColor,
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize:'40px' }}>{uc.icon}</span>
                  </div>
                  <div style={{ ...T.headlineLg, color:C.primaryContainer, marginBottom:'8px' }}>85%</div>
                  <div style={{ ...T.bodyMd, color:C.onSurfaceVariant }}>Average reduction in manual communication overhead</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function SolutionsCTA() {
  return (
    <section style={{ backgroundColor:C.primaryContainer, color:C.onPrimaryContainer, padding:'96px 32px', textAlign:'center' }}>
      <div style={{ maxWidth:'768px', margin:'0 auto', display:'flex', flexDirection:'column', gap:'24px', alignItems:'center' }}>
        <h2 style={{ ...T.headlineLg, color:C.onPrimaryContainer }}>Start Automating Your Operations Today</h2>
        <p style={{ ...T.bodyLg, opacity:0.9, maxWidth:'560px' }}>
          Join the growing network of businesses running leaner, faster, and smarter with FlowPilot AI.
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'16px', justifyContent:'center' }}>
          <Link to="/book-a-demo" style={{
            backgroundColor:C.secondaryContainer, color:C.onSecondaryContainer,
            padding:'16px 32px', borderRadius:'8px', ...T.labelMd, fontWeight:700,
            textDecoration:'none', boxShadow:'0 4px 12px rgba(0,0,0,0.15)',
          }}>Plan a Demo</Link>
          <Link to="/pricing" style={{
            backgroundColor:'rgba(253,249,244,0.15)', color:C.onPrimaryContainer,
            border:`1px solid ${C.onPrimaryContainer}4D`,
            padding:'16px 32px', borderRadius:'8px', ...T.labelMd, fontWeight:500, textDecoration:'none',
          }}>See Pricing</Link>
        </div>
      </div>
    </section>
  );
}

export function SolutionsPage() {
  return (
    <>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @media(max-width:1024px){
          .problem-grid{grid-template-columns:1fr!important}
          .topology-grid{grid-template-columns:1fr!important}
          .usecase-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:640px){.pains-grid{grid-template-columns:1fr!important}}
      `}</style>
      <SolutionsHero />
      <ProblemSection />
      <UseCasesSection />
      <SolutionsCTA />
    </>
  );
}
