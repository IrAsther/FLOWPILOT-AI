import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const C = {
  surface:'#fdf9f4', surfaceContainerLowest:'#ffffff',
  surfaceContainerLow:'#f7f3ee', surfaceContainer:'#f1ede8',
  surfaceContainerHigh:'#ebe8e3', surfaceContainerHighest:'#e6e2dd',
  onSurface:'#1c1c19', onSurfaceVariant:'#3f4947',
  outline:'#6f7977', outlineVariant:'#bec9c6',
  primary:'#004642', primaryContainer:'#01605a',
  onPrimary:'#ffffff', onPrimaryContainer:'#8ed8d0',
  primaryFixed:'#a5f0e8', onPrimaryFixed:'#00201e',
  secondary:'#994700', secondaryContainer:'#fe852c',
  onSecondary:'#ffffff', onSecondaryContainer:'#632c00',
  error:'#ba1a1a',
};
const T = {
  headlineLg:  { fontFamily:"'Plus Jakarta Sans'", fontSize:'36px', lineHeight:'44px', letterSpacing:'-0.01em', fontWeight:600 },
  headlineMd:  { fontFamily:"'Plus Jakarta Sans'", fontSize:'24px', lineHeight:'32px', fontWeight:600 },
  headlineSm:  { fontFamily:"'Plus Jakarta Sans'", fontSize:'18px', lineHeight:'24px', fontWeight:600 },
  headlineXl:  { fontFamily:"'Plus Jakarta Sans'", fontSize:'48px', lineHeight:'56px', letterSpacing:'-0.02em', fontWeight:700 },
  labelMd:     { fontFamily:"'Plus Jakarta Sans'", fontSize:'14px', lineHeight:'20px', letterSpacing:'0.01em', fontWeight:500 },
  labelSm:     { fontFamily:"'Plus Jakarta Sans'", fontSize:'12px', lineHeight:'16px', letterSpacing:'0.01em', fontWeight:500 },
  bodyLg:      { fontFamily:"'Inter'", fontSize:'16px', lineHeight:'24px', fontWeight:400 },
  bodyMd:      { fontFamily:"'Inter'", fontSize:'14px', lineHeight:'20px', fontWeight:400 },
  bodySm:      { fontFamily:"'Inter'", fontSize:'12px', lineHeight:'16px', fontWeight:400 },
};

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const TIME_SLOTS = ['14:00','15:00','16:00','17:00','18:00','20:00','21:00','22:00'];

function CalendarWidget({ selectedDay, onDaySelect, currentDate, onPrevMonth, onNextMonth }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;
  const totalDays = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDayIndex; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) cells.push(d);

  return (
    <div style={{ marginBottom:'32px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'16px' }}>
        <h4 style={{ ...T.headlineSm, color:C.onSurface }}>{MONTHS[month]} {year}</h4>
        <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
          {[{ id:'prev', icon:'chevron_left', action:onPrevMonth }, { id:'next', icon:'chevron_right', action:onNextMonth }].map(btn => (
            <button key={btn.id} type="button" onClick={btn.action} style={{
              width:'32px', height:'32px', borderRadius:'8px',
              border:`1px solid ${C.outlineVariant}66`,
              display:'flex', alignItems:'center', justifyContent:'center',
              backgroundColor:'transparent', cursor:'pointer', color:C.onSurface,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize:'18px' }}>{btn.icon}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:'8px', textAlign:'center', marginBottom:'8px' }}>
        {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => (
          <span key={d} style={{ ...T.labelSm, color:C.onSurfaceVariant }}>{d}</span>
        ))}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:'8px' }}>
        {cells.map((day, i) => (
          <button key={i} type="button" onClick={() => day && onDaySelect(day)} style={{
            height:'40px', borderRadius:'8px', border:'none', cursor: day ? 'pointer' : 'default',
            backgroundColor: day === selectedDay ? C.primaryContainer : 'transparent',
            color: day === selectedDay ? C.onPrimary : day ? C.onSurface : 'transparent',
            ...T.labelMd, fontWeight: day === selectedDay ? 700 : 400,
            boxShadow: day === selectedDay ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
          }}>{day || ''}</button>
        ))}
      </div>
    </div>
  );
}

export function BookDemoPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1));
  const [selectedDay, setSelectedDay] = useState(15);
  const [selectedTime, setSelectedTime] = useState('15:00');
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState(null);
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', phone:'', company:'', channel:'' });

  const handlePrev = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() - 1);
    if (d.getFullYear() < 2025 || (d.getFullYear() === 2025 && d.getMonth() < 9)) return;
    setCurrentDate(d);
  };
  const handleNext = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() + 1);
    if (d.getFullYear() > 2025 || (d.getFullYear() === 2025 && d.getMonth() > 10)) return;
    setCurrentDate(d);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSummary({
      datetime: `${MONTHS[currentDate.getMonth()]} ${selectedDay}, ${currentDate.getFullYear()} at ${selectedTime}`,
      channel: form.channel,
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
    });
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior:'smooth' });
  };

  const INPUT_STYLE = {
    width:'100%', padding:'12px 16px', borderRadius:'8px',
    border:`1px solid ${C.outlineVariant}66`,
    backgroundColor:C.surfaceContainerLowest, color:C.onSurface,
    ...T.bodyMd, outline:'none', boxSizing:'border-box',
  };

  return (
    <>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}} @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
      <main style={{ flex:1, width:'100%', maxWidth:'1280px', margin:'0 auto', padding:'48px 32px 96px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'5fr 7fr', gap:'64px', alignItems:'start' }} className="demo-grid">

          {/* ── LEFT ── */}
          <div style={{ display:'flex', flexDirection:'column', gap:'32px', position:'sticky', top:'96px' }}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              padding:'6px 12px', borderRadius:'9999px',
              backgroundColor:C.surfaceContainerHighest, border:`1px solid ${C.outlineVariant}4D`,
              width:'max-content',
            }}>
              <span style={{ width:'8px',height:'8px',borderRadius:'50%',backgroundColor:C.secondaryContainer,display:'inline-block',animation:'pulse 2s infinite' }}/>
              <span style={{ ...T.labelSm, color:C.onSurface, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em' }}>Executive Strategy Call</span>
            </div>

            <h1 style={{ ...T.headlineXl, color:C.onSurface }}>
              Schedule Your FlowPilot Strategy Session
            </h1>

            <p style={{ ...T.bodyLg, color:C.onSurfaceVariant, lineHeight:'1.75' }}>
              Our AI operations specialists analyze your current email and WhatsApp workflow to build your bespoke automation pipeline. Discover how autonomous agents reduce manual dispatch times by up to 85%.
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:'16px', paddingTop:'16px', borderTop:`1px solid ${C.outlineVariant}4D` }}>
              {[
                { title:'1-on-1 expert consultation', desc:'Review existing bottlenecks with senior AI integration architects.' },
                { title:'Custom AI agent architecture preview', desc:'Live walkthrough of tailored routing models mapped to your tech stack.' },
                { title:'ROI & time-savings forecast', desc:'Exact quantitative breakdown of hours recovered post-deployment.' },
              ].map(item => (
                <div key={item.title} style={{ display:'flex', alignItems:'flex-start', gap:'12px' }}>
                  <div style={{
                    width:'24px', height:'24px', borderRadius:'50%',
                    backgroundColor:`${C.primaryContainer}1A`, color:C.primaryContainer,
                    display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:'2px',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize:'14px' }}>check</span>
                  </div>
                  <div>
                    <h4 style={{ ...T.headlineSm, color:C.onSurface }}>{item.title}</h4>
                    <p style={{ ...T.bodyMd, color:C.onSurfaceVariant }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Security badge */}
            <div style={{
              padding:'24px', borderRadius:'12px',
              backgroundColor:C.surfaceContainerLow, border:`1px solid ${C.outlineVariant}33`,
              display:'flex', alignItems:'center', gap:'16px', marginTop:'8px',
            }}>
              <div style={{
                width:'48px', height:'48px', borderRadius:'8px',
                backgroundColor:C.surfaceContainerHighest, color:C.primary,
                display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize:'24px' }}>security</span>
              </div>
              <div>
                <h5 style={{ ...T.headlineSm, color:C.onSurface }}>Enterprise Grade Security</h5>
                <p style={{ ...T.bodySm, color:C.onSurfaceVariant }}>SOC2 Type II certified infrastructure ensuring absolute data privacy.</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div style={{
            backgroundColor:C.surfaceContainerLowest, borderRadius:'16px',
            border:`1px solid ${C.outlineVariant}4D`, padding:'32px',
            boxShadow:'0 1px 4px rgba(0,0,0,0.06)', position:'relative', overflow:'hidden',
          }}>
            {!submitted ? (
              <>
                {/* Step indicator */}
                <div style={{
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                  marginBottom:'32px', paddingBottom:'24px', borderBottom:`1px solid ${C.outlineVariant}33`,
                }}>
                  <div>
                    <span style={{ ...T.labelSm, color:C.secondary, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em' }}>Step 1 of 2</span>
                    <h3 style={{ ...T.headlineMd, color:C.onSurface }}>Select Date & Time</h3>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                    <span style={{
                      width:'32px', height:'32px', borderRadius:'50%',
                      backgroundColor:C.primaryContainer, color:C.onPrimary,
                      display:'flex', alignItems:'center', justifyContent:'center', ...T.labelMd,
                    }}>1</span>
                    <div style={{ width:'32px', height:'2px', backgroundColor:`${C.outlineVariant}66` }}/>
                    <span style={{
                      width:'32px', height:'32px', borderRadius:'50%',
                      backgroundColor:C.surfaceContainer, color:C.onSurfaceVariant,
                      display:'flex', alignItems:'center', justifyContent:'center', ...T.labelMd,
                    }}>2</span>
                  </div>
                </div>

                {/* Calendar */}
                <CalendarWidget
                  selectedDay={selectedDay}
                  onDaySelect={setSelectedDay}
                  currentDate={currentDate}
                  onPrevMonth={handlePrev}
                  onNextMonth={handleNext}
                />

                {/* Time Slots */}
                <div style={{ marginBottom:'32px' }}>
                  <label style={{ display:'block', ...T.headlineSm, color:C.onSurface, marginBottom:'12px' }}>
                    Available Time Slots (1 Hour Duration)
                  </label>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'12px' }}>
                    {TIME_SLOTS.map(t => (
                      <button key={t} type="button" onClick={() => setSelectedTime(t)} style={{
                        padding:'12px', borderRadius:'8px', cursor:'pointer',
                        border:`1px solid ${selectedTime === t ? C.secondaryContainer : `${C.outlineVariant}66`}`,
                        backgroundColor: selectedTime === t ? C.secondaryContainer : 'transparent',
                        color: selectedTime === t ? C.onSecondaryContainer : C.onSurface,
                        ...T.labelMd, fontWeight: selectedTime === t ? 700 : 400,
                      }}>{t}</button>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'24px', paddingTop:'16px', borderTop:`1px solid ${C.outlineVariant}33` }}>
                  <h3 style={{ ...T.headlineMd, color:C.onSurface }}>Your Information</h3>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                    <div>
                      <label style={{ display:'block', ...T.labelMd, color:C.onSurface, marginBottom:'6px' }}>First Name <span style={{ color:C.error }}>*</span></label>
                      <input required type="text" placeholder="Jane" value={form.firstName} onChange={e => setForm({...form, firstName:e.target.value})} style={INPUT_STYLE}/>
                    </div>
                    <div>
                      <label style={{ display:'block', ...T.labelMd, color:C.onSurface, marginBottom:'6px' }}>Last Name <span style={{ color:C.error }}>*</span></label>
                      <input required type="text" placeholder="Doe" value={form.lastName} onChange={e => setForm({...form, lastName:e.target.value})} style={INPUT_STYLE}/>
                    </div>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                    <div>
                      <label style={{ display:'block', ...T.labelMd, color:C.onSurface, marginBottom:'6px' }}>Business Email <span style={{ color:C.error }}>*</span></label>
                      <input required type="email" placeholder="jane.doe@company.com" value={form.email} onChange={e => setForm({...form, email:e.target.value})} style={INPUT_STYLE}/>
                    </div>
                    <div>
                      <label style={{ display:'block', ...T.labelMd, color:C.onSurface, marginBottom:'6px' }}>Phone Number <span style={{ color:C.error }}>*</span></label>
                      <input required type="tel" placeholder="+1 (555) 019-2834" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} style={INPUT_STYLE}/>
                    </div>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                    <div>
                      <label style={{ display:'block', ...T.labelMd, color:C.onSurface, marginBottom:'6px' }}>Company Name / Industry <span style={{ ...T.bodyMd, color:C.onSurfaceVariant }}>(Optional)</span></label>
                      <input type="text" placeholder="Acme Logistics" value={form.company} onChange={e => setForm({...form, company:e.target.value})} style={INPUT_STYLE}/>
                    </div>
                    <div>
                      <label style={{ display:'block', ...T.labelMd, color:C.onSurface, marginBottom:'6px' }}>Primary Communication Channel <span style={{ color:C.error }}>*</span></label>
                      <select required value={form.channel} onChange={e => setForm({...form, channel:e.target.value})} style={{ ...INPUT_STYLE, appearance:'none' }}>
                        <option value="" disabled>Select channel</option>
                        <option value="Gmail">Gmail</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" style={{
                    width:'100%', padding:'16px 24px', borderRadius:'8px',
                    backgroundColor:C.secondaryContainer, color:C.onSecondaryContainer,
                    ...T.labelMd, fontWeight:700, cursor:'pointer', border:'none',
                    display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
                    boxShadow:'0 1px 3px rgba(0,0,0,0.1)', marginTop:'8px',
                  }}>
                    Confirm Appointment
                    <span className="material-symbols-outlined" style={{ fontSize:'18px' }}>arrow_forward</span>
                  </button>
                </form>
              </>
            ) : (
              /* ── SUCCESS ── */
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', padding:'48px 0' }}>
                <div style={{
                  width:'80px', height:'80px', borderRadius:'50%',
                  backgroundColor:C.primaryContainer, color:C.onPrimary,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  marginBottom:'24px', boxShadow:'0 4px 16px rgba(0,0,0,0.1)',
                  animation:'bounce 1s ease-in-out 3',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize:'40px' }}>check</span>
                </div>
                <h2 style={{ ...T.headlineLg, color:C.onSurface, marginBottom:'8px' }}>✓ Appointment Confirmed</h2>
                <p style={{ ...T.bodyLg, color:C.onSurfaceVariant, maxWidth:'400px', marginBottom:'32px' }}>
                  We have sent a calendar invite and secure WhatsApp onboarding link to your email.
                </p>
                <div style={{
                  width:'100%', backgroundColor:C.surfaceContainerLow,
                  borderRadius:'12px', padding:'24px', border:`1px solid ${C.outlineVariant}33`,
                  textAlign:'left', marginBottom:'32px',
                }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingBottom:'12px', borderBottom:`1px solid ${C.outlineVariant}33`, marginBottom:'16px' }}>
                    <h4 style={{ ...T.headlineSm, color:C.onSurface }}>Appointment Summary</h4>
                    <span style={{ ...T.labelSm, color:C.primary, fontWeight:600, padding:'4px 10px', borderRadius:'9999px', backgroundColor:`${C.primaryContainer}1A` }}>Confirmed</span>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', ...T.bodyMd }}>
                    {[
                      { label:'Date & Time', value:summary.datetime },
                      { label:'Primary Channel', value:summary.channel },
                      { label:'Attendee', value:summary.name },
                      { label:'Contact Email', value:summary.email },
                    ].map(s => (
                      <div key={s.label}>
                        <span style={{ ...T.labelSm, color:C.onSurfaceVariant, display:'block', marginBottom:'4px' }}>{s.label}</span>
                        <span style={{ fontWeight:600, color:C.onSurface }}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button type="button" onClick={() => { setSubmitted(false); setForm({ firstName:'',lastName:'',email:'',phone:'',company:'',channel:'' }); }} style={{
                  padding:'12px 32px', borderRadius:'8px',
                  border:`1px solid ${C.outlineVariant}66`, backgroundColor:'transparent',
                  color:C.onSurface, ...T.labelMd, cursor:'pointer',
                }}>Book Another Session</button>
              </div>
            )}
          </div>
        </div>
      </main>
      <style>{`@media(max-width:1024px){.demo-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
