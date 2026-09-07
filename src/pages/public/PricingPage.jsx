import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const C = {
  background:'#fdf9f4', surface:'#fdf9f4',
  surfaceContainerLowest:'#ffffff', surfaceContainerLow:'#f7f3ee',
  surfaceContainer:'#f1ede8', surfaceContainerHigh:'#ebe8e3',
  onSurface:'#1c1c19', onSurfaceVariant:'#3f4947',
  outline:'#6f7977', outlineVariant:'#bec9c6',
  primary:'#004642', primaryContainer:'#01605a',
  onPrimary:'#ffffff', onPrimaryContainer:'#8ed8d0',
  primaryFixed:'#a5f0e8', primaryFixedDim:'#8ad4cc', onPrimaryFixed:'#00201e',
  secondary:'#994700', secondaryContainer:'#fe852c',
  onSecondary:'#ffffff', onSecondaryContainer:'#632c00',
  secondaryFixed:'#ffdbc8',
  tertiary:'#55371a', tertiaryFixed:'#ffdcc0', tertiaryFixedDim:'#ebbe97',
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
function PricingHero() {
  return (
    <section style={{ position:'relative', paddingTop:'64px', paddingBottom:'56px', paddingLeft:'24px', paddingRight:'24px', overflow:'hidden' }}>
      <div style={{ maxWidth:'1024px', margin:'0 auto', textAlign:'center' }}>
        <div style={{
          display:'inline-flex', alignItems:'center', gap:'8px',
          padding:'4px 12px', borderRadius:'9999px',
          backgroundColor:C.tertiaryFixed, color:'#2d1600',
          border:`1px solid ${C.tertiaryFixedDim}66`, marginBottom:'24px',
          ...T.labelSm,
        }}>
          <span className="material-symbols-outlined" style={{ fontSize:'14px' }}>monetization_on</span>
          TRANSPARENT INVESTMENT
        </div>
        <h1 style={{ ...T.headlineXl, color:C.onSurface, marginBottom:'20px', maxWidth:'896px', margin:'0 auto 20px' }}>
          CHOOSE THE RIGHT LEVEL OF <span style={{ color:C.secondaryContainer }}>FLOW</span>.
        </h1>
        <p style={{ ...T.bodyLg, color:C.onSurfaceVariant, maxWidth:'640px', margin:'0 auto 32px' }}>
          Start simple. Automate more as your business grows. No hidden seat fees, no algorithmic usage cliffs, just pure operational freedom.
        </p>
        <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'16px', marginBottom:'64px' }}>
          <Link to="/book-a-demo" style={{
            padding:'14px 32px', borderRadius:'12px',
            backgroundColor:C.secondaryContainer, color:'#fff',
            ...T.labelMd, fontWeight:600, textDecoration:'none',
            display:'inline-flex', alignItems:'center', gap:'8px',
            boxShadow:'0 4px 12px rgba(254,133,44,0.25)',
          }}>
            Plan a Demo
            <span className="material-symbols-outlined" style={{ fontSize:'18px' }}>calendar_today</span>
          </Link>
          <Link to="/book-a-demo" style={{
            padding:'14px 32px', borderRadius:'12px',
            backgroundColor:C.surfaceContainerLowest, color:C.primary,
            border:`1px solid ${C.outlineVariant}`,
            ...T.labelMd, fontWeight:500, textDecoration:'none',
            display:'inline-flex', alignItems:'center', gap:'8px',
          }}>
            Talk to an Expert
            <span className="material-symbols-outlined" style={{ fontSize:'18px' }}>support_agent</span>
          </Link>
        </div>

        {/* Automation Maturity Stepper */}
        <div style={{
          backgroundColor:C.surfaceContainerLowest, border:`1px solid ${C.outlineVariant}66`,
          borderRadius:'16px', padding:'32px', maxWidth:'896px', margin:'0 auto',
          boxShadow:'0 1px 4px rgba(0,0,0,0.06)',
        }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'16px' }}>
            <span style={{ ...T.labelSm, color:C.onSurfaceVariant }}>AUTOMATION MATURITY SPECTRUM</span>
            <span style={{ ...T.labelSm, color:C.primary, fontWeight:600, display:'flex', alignItems:'center', gap:'4px' }}>
              <span style={{ width:'8px',height:'8px',borderRadius:'50%',backgroundColor:C.secondaryContainer,display:'inline-block',animation:'pulse 2s infinite' }}/>
              Orchestrated Execution
            </span>
          </div>
          <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ position:'absolute', left:'24px', right:'24px', top:'50%', transform:'translateY(-50%)', height:'4px', backgroundColor:C.surfaceContainerHigh }} />
            <div style={{ position:'absolute', left:'24px', width:'75%', top:'50%', transform:'translateY(-50%)', height:'4px', backgroundColor:C.primaryContainer }} />
            {[
              { label:'MANUAL', sub:'Fragmented', active:false, icon:'check' },
              { label:'ASSISTED', sub:'Single Task', active:false, icon:'check' },
              { label:'AUTOMATED', sub:'Flow & Grow', active:true, icon:'auto_mode' },
              { label:'ORCHESTRATED', sub:'Enterprise Ops', active:false, icon:'hub', orange:true },
            ].map(step => (
              <div key={step.label} style={{ position:'relative', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center' }}>
                <div style={{
                  width:'32px', height:'32px', borderRadius:'50%',
                  backgroundColor: step.orange ? C.secondaryContainer : C.primaryContainer,
                  color: '#fff',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  boxShadow: step.active ? `0 0 0 4px ${C.primaryFixed}` : 'none',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize:'16px' }}>{step.icon}</span>
                </div>
                <span style={{
                  marginTop:'8px', ...T.labelSm, fontWeight:700,
                  color: step.orange ? C.secondaryContainer : step.active ? C.primary : C.onSurface,
                }}>{step.label}</span>
                <span style={{ fontSize:'11px', color: step.active ? C.primary : C.onSurfaceVariant, fontWeight: step.active ? 500 : 400 }}>{step.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PRICING TIERS ── */
const TIERS = [
  {
    audience:'SOLO OPERATORS', name:'FLOW',
    desc:'Essential autonomous triage for solo consultants and founders seeking automated operational breathing room.',
    price:'$99', priceYear:'$79', subMonthly:'Billed annually ($1,188/yr) or $119 mo',
    featuresLabel:'CORE CAPABILITIES',
    features:[
      '1 core automated workflow',
      'Gmail inbox triage & draft generation',
      'WhatsApp AI autonomous agent',
      'Basic calendar booking reconciliation',
      'Human-in-the-loop approval gates',
      '30-day activity telemetry history',
      'Email support (24h response SLA)',
    ],
    featCheck: C.primary, featCheckFill: true,
    btnLabel:'Start with Flow', btnBg:C.surfaceContainerLow, btnColor:C.primary,
    btnBorder: C.outlineVariant, featured:false, cardBg:C.surfaceContainerLowest,
  },
  {
    audience:'GROWING TEAMS', name:'GROW',
    desc:'The complete operational brain. Seamlessly interconnects communications, scheduling, and multi-step actions.',
    price:'$249', priceYear:'$199', subMonthly:'Billed annually ($2,988/yr) or $299 mo',
    badge:'Most Popular — Operational Core',
    featuresLabel:'ALL IN FLOW, PLUS:',
    features:[
      'Up to 5 high-bandwidth workflows',
      'Gmail multi-account autonomous triage',
      'WhatsApp AI agent with CRM synching',
      'Full calendar orchestration with auto-prep',
      'Weekly email intelligence executive briefing',
      'Custom conditional branching & filters',
      'Deep telemetry & autonomous hours logging',
      'Priority Slack & video architecture review',
    ],
    featCheck:'#ffdbc8', featCheckFill: true,
    btnLabel:'Choose Grow', btnBg:C.secondaryContainer, btnColor:'#fff',
    btnBorder:C.secondaryContainer, featured:true, cardBg:C.primary,
  },
  {
    audience:'ENTERPRISE SCALE', name:'ORCHESTRATE',
    desc:'Bespoke automation infrastructure for high-scale firms requiring SOC2 compliance and ERP integration.',
    price:'Custom', priceYear:'Custom', subMonthly:'Bespoke deployment architecture & SLA',
    featuresLabel:'ENTERPRISE ADVANTAGES',
    features:[
      'Unlimited custom AI workflows',
      'Advanced ERP, SAP, NetSuite & Hubspot synch',
      'Multi-department process orchestration',
      'Bespoke autonomous LLM fine-tuning',
      'Dedicated automation architect',
      'SOC2-ready governance, audit logs & SSO',
      '24/7 dedicated engineering support & 99.9% SLA',
    ],
    featCheck: C.primary, featCheckFill: true,
    btnLabel:'Talk to FlowPilot', btnBg:C.surfaceContainerLowest, btnColor:C.primary,
    btnBorder:C.primary, featured:false, cardBg:C.surfaceContainerLowest,
  },
];

function PricingTiers() {
  const [yearly, setYearly] = useState(true);
  return (
    <>
      {/* Toggle */}
      <section style={{ paddingTop:'24px', paddingBottom:'16px', paddingLeft:'24px', paddingRight:'24px' }} id="tiers">
        <div style={{ maxWidth:'1280px', margin:'0 auto', display:'flex', justifyContent:'center' }}>
          <div style={{
            display:'inline-flex', padding:'6px',
            backgroundColor:C.surfaceContainer, borderRadius:'9999px',
            border:`1px solid ${C.outlineVariant}66`,
          }}>
            <button onClick={() => setYearly(false)} style={{
              padding:'8px 20px', borderRadius:'9999px', border:'none', cursor:'pointer',
              backgroundColor: !yearly ? C.surfaceContainerLowest : 'transparent',
              color: !yearly ? C.primary : C.onSurfaceVariant,
              ...T.labelMd, fontWeight:600,
              boxShadow: !yearly ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}>Monthly</button>
            <button onClick={() => setYearly(true)} style={{
              padding:'8px 20px', borderRadius:'9999px', border:'none', cursor:'pointer',
              backgroundColor: yearly ? C.surfaceContainerLowest : 'transparent',
              color: yearly ? C.primary : C.onSurfaceVariant,
              ...T.labelMd, fontWeight:600,
              display:'inline-flex', alignItems:'center', gap:'6px',
              boxShadow: yearly ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}>
              Yearly
              <span style={{
                padding:'2px 8px', borderRadius:'9999px',
                backgroundColor:C.tertiaryFixed, color:'#2d1600',
                ...T.labelSm, fontWeight:700,
              }}>Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section style={{ padding:'48px 24px' }}>
        <div style={{ maxWidth:'1280px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'32px', alignItems:'stretch' }} className="tiers-grid">
          {TIERS.map((t, i) => (
            <div key={t.name} style={{
              backgroundColor:t.cardBg,
              borderRadius: t.featured ? '24px' : '16px',
              border: t.featured ? `2px solid ${C.primaryContainer}` : `1px solid ${C.outlineVariant}66`,
              padding:'32px', display:'flex', flexDirection:'column', justifyContent:'space-between',
              boxShadow: t.featured ? '0 20px 60px rgba(0,70,66,0.25)' : '0 1px 4px rgba(0,0,0,0.06)',
              position:'relative',
              transform: t.featured ? 'translateY(-8px)' : 'none',
            }}>
              {t.badge && (
                <div style={{
                  position:'absolute', top:'-16px', left:'50%', transform:'translateX(-50%)',
                  padding:'4px 16px', borderRadius:'9999px',
                  backgroundColor:C.secondaryContainer, color:'#fff',
                  ...T.labelSm, fontWeight:700, boxShadow:'0 2px 8px rgba(0,0,0,0.18)',
                  whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:'6px',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize:'14px' }}>verified</span>
                  {t.badge}
                </div>
              )}
              <div>
                <div style={{ marginBottom:'16px', marginTop: t.badge ? '8px' : '0' }}>
                  <span style={{
                    padding:'4px 12px', borderRadius:'9999px',
                    backgroundColor: t.featured ? C.primaryContainer : C.surfaceContainerHigh,
                    color: t.featured ? C.onPrimaryContainer : C.onSurface,
                    ...T.labelSm, fontWeight:600,
                  }}>{t.audience}</span>
                  <h3 style={{ ...T.headlineMd, color: t.featured ? '#fff' : C.onSurface, marginTop:'12px' }}>{t.name}</h3>
                </div>
                <p style={{ ...T.bodyMd, color: t.featured ? C.primaryFixedDim : C.onSurfaceVariant, marginBottom:'24px' }}>{t.desc}</p>
                <div style={{ marginBottom:'32px' }}>
                  <div style={{ display:'flex', alignItems:'baseline', gap:'4px' }}>
                    <span style={{ ...T.headlineXl, color: t.featured ? '#fff' : C.onSurface, fontWeight:800 }}>
                      {t.price === 'Custom' ? 'Custom' : (yearly ? t.priceYear : t.price)}
                    </span>
                    {t.price !== 'Custom' && <span style={{ ...T.bodyMd, color: t.featured ? `${C.primaryFixedDim}CC` : C.onSurfaceVariant }}>/ month</span>}
                  </div>
                  <p style={{ ...T.bodySm, color: t.featured ? `${C.primaryFixedDim}CC` : C.onSurfaceVariant, marginTop:'4px' }}>{t.subMonthly}</p>
                </div>
                <div style={{ height:'1px', backgroundColor: t.featured ? C.primaryContainer : `${C.outlineVariant}4D`, marginBottom:'32px' }}/>
                <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginBottom:'32px' }}>
                  <div style={{ ...T.labelSm, fontWeight:600, color: t.featured ? C.secondaryFixed : C.onSurface }}>{t.featuresLabel}</div>
                  {t.features.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize:'18px', color:t.featCheck, flexShrink:0 }}>check_circle</span>
                      <span style={{ ...T.bodyMd, color: t.featured ? '#fff' : C.onSurface }} dangerouslySetInnerHTML={{ __html: f.replace(/^([\d]+\s+\w+|Up to \d+|Unlimited)/, '<strong>$&</strong>') }}/>
                    </div>
                  ))}
                </div>
              </div>
              <a href={`#${t.name.toLowerCase()}-signup`} style={{
                display:'block', width:'100%', padding:'12px', borderRadius:'12px',
                backgroundColor:t.btnBg, color:t.btnColor,
                border:`1px solid ${t.btnBorder}`,
                ...T.labelMd, fontWeight: t.featured ? 700 : 600,
                textDecoration:'none', textAlign:'center',
                boxShadow: t.featured ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
              }}>{t.btnLabel}</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ── TELEMETRY DASHBOARD ── */
function TelemetrySection() {
  return (
    <section style={{ padding:'64px 24px', backgroundColor:C.surfaceContainerLow, borderTop:`1px solid ${C.outlineVariant}4D`, borderBottom:`1px solid ${C.outlineVariant}4D` }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <div style={{ maxWidth:'768px', marginBottom:'48px' }}>
          <span style={{ ...T.labelSm, fontWeight:600, color:C.secondary, textTransform:'uppercase', letterSpacing:'0.08em' }}>The Return on Autonomous Operations</span>
          <h2 style={{ ...T.headlineLg, color:C.onSurface, marginTop:'8px', lineHeight:'1.2' }}>YOU'RE NOT PAYING FOR ANOTHER TOOL.</h2>
          <p style={{ ...T.bodyLg, color:C.onSurfaceVariant, marginTop:'12px' }}>
            You're investing in fewer manual steps, faster operations, and more time for the work that truly matters.
          </p>
        </div>
        <div style={{ backgroundColor:C.surfaceContainerLowest, borderRadius:'16px', border:`1px solid ${C.outlineVariant}66`, boxShadow:'0 4px 16px rgba(0,0,0,0.06)', overflow:'hidden' }}>
          <div style={{ padding:'16px 24px', backgroundColor:`${C.surfaceContainerHigh}66`, borderBottom:`1px solid ${C.outlineVariant}4D`, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'8px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <span style={{ width:'12px', height:'12px', borderRadius:'50%', backgroundColor:C.primary, display:'inline-block' }}/>
              <span style={{ ...T.labelMd, fontWeight:600, color:C.onSurface }}>Operational Telemetry — Live Fleet</span>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:'8px', ...T.labelSm, color:C.onSurfaceVariant }}>
              <span style={{ width:'8px',height:'8px',borderRadius:'50%',backgroundColor:'#10b981',display:'inline-block',animation:'ping 1s infinite' }}/>
              All systems nominal
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderBottom:`1px solid ${C.outlineVariant}4D` }} className="metrics-dash">
            {[
              { label:'Hours Reclaimed This Month', value:'86.4', unit:'hrs', badge:'+14.2% vs prior month', icon:'trending_up', valueColor:C.primary },
              { label:'Active Workflows Running', value:'14', unit:'', badge:'0 manual intervention faults', icon:'sync', valueColor:C.onSurface },
              { label:'Total Tasks Automated', value:'3,412', unit:'', badge:'420 ms avg response', icon:'bolt', valueColor:C.onSurface },
              { label:'Autonomous Routing Rate', value:'98.2%', unit:'', badge:'1.8% flagged for human approval', icon:'shield', valueColor:C.secondary },
            ].map(m => (
              <div key={m.label} style={{ padding:'24px 32px', borderRight:`1px solid ${C.outlineVariant}4D` }}>
                <span style={{ ...T.bodySm, color:C.onSurfaceVariant }}>{m.label}</span>
                <div style={{ ...T.headlineXl, fontWeight:700, color:m.valueColor, marginTop:'8px' }}>
                  {m.value}{m.unit && <span style={{ ...T.headlineSm, fontWeight:400, color:C.onSurfaceVariant }}> {m.unit}</span>}
                </div>
                <div style={{ marginTop:'8px', fontSize:'12px', color:'#047857', display:'flex', alignItems:'center', gap:'4px', fontWeight:500 }}>
                  <span className="material-symbols-outlined" style={{ fontSize:'14px' }}>{m.icon}</span>
                  {m.badge}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding:'16px 24px', backgroundColor:C.surfaceContainerLow, display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'12px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <span style={{
                padding:'2px 8px', borderRadius:'4px',
                backgroundColor:C.primaryFixed, color:C.onPrimaryFixed,
                ...T.labelSm, fontWeight:500,
              }}>Recent Action</span>
              <span style={{ ...T.bodySm, color:C.onSurface, fontFamily:'monospace', fontSize:'13px' }}>
                Inbound Lead Triage → Gmail reply drafted → Hubspot record updated → Calendar invite generated
              </span>
            </div>
            <span style={{ ...T.bodySm, color:C.onSurfaceVariant }}>2 minutes ago</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 4 PILLARS ── */
const PILLARS = [
  { icon:'psychology', title:'AI-Powered Automation', desc:'Semantic context parsing. Interprets intent, tone, and priority rather than rigid keyword matching.', footer:'Context-Aware', iconBg:`${C.primaryContainer}1A`, iconColor:C.primary },
  { icon:'hub', title:'Connected Tools', desc:'Deep, bi-directional synchronization with your existing stack: Gmail, WhatsApp, Notion, Linear, and CRMs.', footer:'Zero Lock-in', iconBg:`${C.secondaryContainer}1A`, iconColor:C.secondary },
  { icon:'gavel', title:'Absolute Human Control', desc:'Granular approval gates. High-stakes actions require one-click manual confirmation before execution.', footer:'Human-in-the-Loop', iconBg:C.tertiaryFixed, iconColor:C.tertiary },
  { icon:'published_with_changes', title:'Continuous Optimization', desc:'Workflows refine their routing patterns over time, detecting bottlenecks and suggesting structural fixes.', footer:'Self-Refining', iconBg:C.primaryFixed, iconColor:C.primary },
];

function PillarsSection() {
  return (
    <section style={{ padding:'80px 24px' }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <div style={{ textAlign:'center', maxWidth:'768px', margin:'0 auto 64px' }}>
          <span style={{ ...T.labelSm, fontWeight:600, color:C.secondary, textTransform:'uppercase', letterSpacing:'0.08em' }}>Core Engineering</span>
          <h2 style={{ ...T.headlineLg, color:C.onSurface, marginTop:'8px' }}>EVERY PLAN STARTS WITH THE SAME PRINCIPLE</h2>
          <p style={{ ...T.bodyLg, color:C.onSurfaceVariant, marginTop:'12px' }}>
            We do not gate essential security, deterministic logic, or human veto control behind higher paywalls.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'24px' }} className="pillars-grid">
          {PILLARS.map(p => (
            <div key={p.title} style={{
              backgroundColor:C.surfaceContainerLowest, padding:'24px', borderRadius:'16px',
              border:`1px solid ${C.outlineVariant}66`, boxShadow:'0 1px 4px rgba(0,0,0,0.06)',
              display:'flex', flexDirection:'column', justifyContent:'space-between',
            }}>
              <div>
                <div style={{ width:'48px',height:'48px',borderRadius:'12px',backgroundColor:p.iconBg,color:p.iconColor,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize:'24px' }}>{p.icon}</span>
                </div>
                <h3 style={{ ...T.headlineSm, color:C.onSurface, marginBottom:'8px' }}>{p.title}</h3>
                <p style={{ ...T.bodyMd, color:C.onSurfaceVariant }}>{p.desc}</p>
              </div>
              <div style={{ marginTop:'24px', paddingTop:'16px', borderTop:`1px solid ${C.outlineVariant}4D`, display:'flex', alignItems:'center', justifyContent:'space-between', ...T.labelSm, color:p.iconColor, fontWeight:600 }}>
                <span>{p.footer}</span>
                <span className="material-symbols-outlined" style={{ fontSize:'16px' }}>check</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingPage() {
  return (
    <>
      <style>{`
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes ping{75%,100%{transform:scale(2);opacity:0}}
        @media(max-width:1024px){.tiers-grid{grid-template-columns:1fr!important}.pillars-grid{grid-template-columns:repeat(2,1fr)!important}.metrics-dash{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:640px){.pillars-grid{grid-template-columns:1fr!important}.metrics-dash{grid-template-columns:1fr!important}}
      `}</style>
      <PricingHero />
      <PricingTiers />
      <TelemetrySection />
      <PillarsSection />
    </>
  );
}
