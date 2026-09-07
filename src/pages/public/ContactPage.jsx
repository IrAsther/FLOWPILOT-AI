import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Send,
  Building,
  Check,
  Clock,
  ShieldCheck,
  Activity,
  Sparkles,
  Users,
  Copy,
} from 'lucide-react';

/* ── DESIGN TOKENS (Strict FlowPilot Brand System) ── */
const C = {
  surface: '#f9f9fb',
  surfaceCream: '#F4F5F7',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f3f3f5',
  surfaceContainer: '#edeef0',
  surfaceContainerHigh: '#e8e8ea',
  deepTealText: '#0A2540',
  primary: '#004642',
  primaryContainer: '#01605a',
  onPrimary: '#ffffff',
  primaryFixed: '#a5f0e8',
  primaryFixedDim: '#8ad4cc',
  secondary: '#994700',
  secondaryContainer: '#fe852c',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#632c00',
  secondaryFixed: '#ffdbc8',
  onSurface: '#1a1c1d',
  onSurfaceVariant: '#3f4947',
  outline: '#6f7977',
  outlineVariant: '#bec9c6',
  error: '#ba1a1a',
};

const T = {
  displayXl: {
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontSize: 'clamp(2.5rem, 5vw + 1rem, 4.25rem)',
    lineHeight: 1.08,
    letterSpacing: '-0.03em',
    fontWeight: 800,
  },
  displayLg: {
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3.25rem)',
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
    fontWeight: 800,
  },
  headlineLg: {
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontSize: 'clamp(1.75rem, 2.5vw + 0.5rem, 2.25rem)',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    fontWeight: 700,
  },
  headlineMd: {
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-0.015em',
    fontWeight: 700,
  },
  headlineSm: {
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 600,
  },
  labelMd: {
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontSize: '13px',
    lineHeight: '18px',
    letterSpacing: '0.02em',
    fontWeight: 600,
  },
  labelSm: {
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontSize: '11px',
    lineHeight: '14px',
    letterSpacing: '0.05em',
    fontWeight: 700,
  },
  bodyLg: {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 400,
  },
  bodyMd: {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: 400,
  },
  bodySm: {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 400,
  },
};

/* ── 1. COMMANDING HERO SECTION ── */
function ContactHero() {
  return (
    <section className="relative px-6 md:px-16 pt-20 pb-20 max-w-7xl mx-auto">
      {/* Background Subtle Gradient */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none opacity-30 blur-3xl rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(1,96,90,0.15) 0%, rgba(254,133,44,0.1) 70%, transparent 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column: Typography */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm"
            style={{
              backgroundColor: '#ffffff',
              borderColor: `${C.outlineVariant}60`,
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span
              className="tracking-wider uppercase"
              style={{ ...T.labelSm, color: C.secondary }}
            >
              Meet the FlowPilot Team
            </span>
          </div>

          <h1
            className="tracking-tight uppercase"
            style={{ ...T.displayXl, color: C.deepTealText }}
          >
            BUILT BY OPERATORS. <br />
            <span style={{ color: C.primaryContainer }}>FOR OPERATORS.</span>
          </h1>

          <p
            className="max-w-2xl leading-relaxed mx-auto lg:mx-0"
            style={{ ...T.bodyLg, color: C.onSurfaceVariant }}
          >
            We are a seasoned collective of automation architects, distributed systems engineers, and workflow designers dedicated to removing operational friction from high-growth enterprises.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs font-semibold text-neutral-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>San Francisco HQ</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>&lt; 5 Min Escalation SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>SOC 2 Type II Certified</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Workspace Visual */}
        <div className="w-full lg:w-1/2">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl border p-2 relative aspect-[4/3]"
            style={{
              backgroundColor: '#ffffff',
              borderColor: `${C.outlineVariant}50`,
              boxShadow: '0 25px 60px -15px rgba(10,37,64,0.12)',
            }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqNXdYshcx9G93PofQZHeApS9PzR-FY2p38efWsRsWyo_waUv84eDaxUpZVls2HeiwvdH0ffWIdM1usMSb69LPNp70Q5FEpYWOhnaQ_tN6X9lFDzfmbYYyQwnREWAxjfPwHPKL-6G7yvVq2CL8dOhJ0GZv7Ya0jq_UZ04Oj2tMOJHc48vpNLCq_r9rBhuAAhSIRbScrkUWHuERHLO1gGfgkSiK87NQuI-ctopjrM6EDLC3_yFqGUByAg"
                alt="FlowPilot operations team collaborating in modern minimalist architecture"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(10,37,64,0.3) 0%, transparent 60%)',
                }}
              />
              {/* Floating Status Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-neutral-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-neutral-800">
                    Live Operations Team · Active Deployment Window
                  </span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                  99.99% Uptime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 2. MISSION STATEMENT ── */
function MissionStatement() {
  return (
    <section
      className="py-24 px-6 md:px-16 border-y"
      style={{
        backgroundColor: C.surfaceCream,
        borderColor: `${C.outlineVariant}40`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
          style={{ backgroundColor: `${C.primaryContainer}15`, color: C.primaryContainer }}
        >
          Our Guiding Philosophy
        </div>

        <h2 style={{ ...T.displayLg, color: C.deepTealText }}>
          Human-Centric AI Operations
        </h2>

        <p
          className="leading-relaxed"
          style={{ ...T.bodyLg, color: C.onSurfaceVariant, fontSize: '19px', lineHeight: '32px' }}
        >
          Technology should amplify human capability, not complicate it. We founded FlowPilot because we experienced firsthand the friction of disconnected operational tools. Our mission is to build intelligent systems that respect your team's expertise, eliminate tedious busywork, and establish total clarity across every department.
        </p>

        {/* 3 Core Operating Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">Principle 01</span>
            <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Zero Hallucinations</h4>
            <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>
              Deterministic state machines guarantee every automated step follows exact corporate rules.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">Principle 02</span>
            <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Executive Control</h4>
            <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>
              High-stakes client communications require explicit one-tap executive authorization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">Principle 03</span>
            <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Full Transparency</h4>
            <p style={{ ...T.bodySm, color: C.onSurfaceVariant }}>
              Every action leaves an immutable, timestamped audit log across your systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 3. FOUNDER SPOTLIGHT ── */
function FounderSpotlight() {
  return (
    <section className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
      <div
        className="rounded-3xl p-8 md:p-14 shadow-xl border flex flex-col lg:flex-row items-center gap-14 relative overflow-hidden"
        style={{
          backgroundColor: C.surfaceContainerLowest,
          borderColor: `${C.outlineVariant}50`,
          boxShadow: '0 20px 60px -15px rgba(10,37,64,0.08)',
        }}
      >
        {/* Decorative Quote Mark */}
        <span
          className="absolute -top-10 right-10 text-[180px] font-serif font-black text-neutral-100 pointer-events-none select-none"
        >
          “
        </span>

        {/* Founder Portrait */}
        <div className="w-full lg:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-lg border shrink-0 relative group">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRq8BI9ReI2MkScrCWb4YXMsLXgoJWTSsPmkzkQ1WZaTi05UpbplGb7PA__Uvk82Es7Ef9DTuqWr2XpkeBcwoVqEsubVCxLqLpL_cA1bds-umx6offgLVCXRaheE9J-6gTmVOXe9HRYr1qgHTSE0wnDh_623cqzO6KzEDKaRVcXldUgwIDiMdHWOXWu8Qlu4LhGSgv4NkD1StxYYRrcVo-C3szTbKLxGM9MWR1Oa47eaoE7ny18SII-w"
            alt="Alex Martin, Founder and CEO of FlowPilot AI"
          />
          <div
            className="absolute bottom-3 left-3 right-3 bg-neutral-900/80 backdrop-blur-md rounded-xl py-2 px-3 text-white text-xs flex justify-between items-center"
          >
            <span className="font-semibold">San Francisco, CA</span>
            <span className="text-orange-400 font-bold">10+ Yrs Enterprise Ops</span>
          </div>
        </div>

        {/* Founder Quote & Background */}
        <div className="w-full lg:w-2/3 space-y-6 relative z-10">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">Executive Leadership</span>
            <h3 style={{ ...T.displayLg, color: C.deepTealText, fontSize: '36px' }}>Alex Martin</h3>
            <p
              className="font-bold text-base"
              style={{ color: C.secondary }}
            >
              Founder &amp; Chief Executive Officer
            </p>
          </div>

          <blockquote
            className="italic pl-6 py-2 leading-relaxed"
            style={{
              ...T.bodyLg,
              color: C.onSurface,
              borderLeft: `5px solid ${C.secondaryContainer}`,
              fontSize: '20px',
              lineHeight: '32px',
            }}
          >
            "We didn't set out to build another noisy software dashboard. We built FlowPilot to act as a silent, reliable operational backbone—allowing teams to focus entirely on creative problem solving and strategic growth."
          </blockquote>

          <p
            className="leading-relaxed"
            style={{ ...T.bodyMd, color: C.onSurfaceVariant, fontSize: '16px', lineHeight: '26px' }}
          >
            Prior to founding FlowPilot, Alex spent over a decade leading global operations and enterprise transformation initiatives at high-growth technology companies, architecting mission-critical infrastructure scaling to hundreds of millions in transactional volume.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── 4. THE TEAM SECTION (LEADERSHIP & ENGINEERING) ── */
function TeamSection() {
  const team = [
    {
      name: 'Maya Dupont',
      role: 'Automation Architect',
      specialty: 'Distributed Systems & Multi-System ETL',
      desc: 'Designing resilient, scalable multi-system integrations that bridge siloed corporate applications seamlessly with sub-second execution.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCDnwvGrJp2kG5acgqRiHZc_x4QIrCj8WvOnxAQbavs-aa4Bq68XxGceUzMTevvjLFYH-FtgFoqkvCq5lUUmQZwwX4e8DdLxtCxKgHBpOFpZZpYeUSK520Ps4RetPXT0XHPPYoXYouhPOP_i-4z0Drci8yHhRWhAOgi4ojB_PrZJiHU_VfQfzkpdz4j-W3MjSmcyrJ4f-B40nTCuH1-GR2lJFsSbgh5jstx7JH4odQqHX6hjZ0N3eF5g',
    },
    {
      name: 'Jonas K.',
      role: 'Product & Experience',
      specialty: 'Human-AI Collaboration Ergonomics',
      desc: 'Obsessed with crafting clean, high-end interfaces that make complex autonomous AI operations feel effortless, intuitive, and reassuring.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1zDxzv5Jfo4oownnZ_bU4LkdLKIPvZp1s8iHLcu1ebuZxrc9dLTy54R8YCZo7tqeeYMDaV5AdzScshr5ZsKRwElE7j3a_BCl8z_e-Avuw4a2_ngxBUtUg4HxjpUxJ9NNUph0p8T-kXvLJklqH3SGgo17QqdLIq-lDqrFoL8uhJVGRC35v0fRdONHccpk_sXu630gX_DUhlBdfmIATUCevyxJO-XmCYCbfyHaKFBcBk-HZ2kJG7Z939A',
    },
    {
      name: 'Leila N.',
      role: 'AI Systems',
      specialty: 'Deterministic Language Guardrails',
      desc: 'Pioneering deterministic workflow models that guarantee safety, speed, and absolute accuracy in automated enterprise decisioning.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIFZ8Qtkxqy8VNCKN0yO7yw43_VI0ArGneSaS0mtLro1GdqlFKK0Oucl8NgS0ELN2mFvD9tAvnz9kv7Ymci_BB7EMxV75WfFSMhn90_BYUX8CKoprjsFSQPHWDi0IoQlv31VFMe8VvgVspcnv3WM7Lb5v1uMFWtkb93gNGIzQy9L6cGCYTkttouyMye2Q-kdpNZcS_tq0ohrMjeEH45EA2ij4Hcm2eLGaOpeyMjo1srQ_vRs2k1yfFZQ',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
          style={{ backgroundColor: `${C.primaryContainer}15`, color: C.primaryContainer }}
        >
          Engineering Excellence
        </div>
        <h2 style={{ ...T.displayLg, color: C.deepTealText }}>
          Leadership &amp; Engineering
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
          The minds architecting the future of deterministic enterprise process automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div
            key={i}
            className="rounded-3xl overflow-hidden shadow-sm border flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}50`,
            }}
          >
            <div className="aspect-[4/3] overflow-hidden relative bg-neutral-100">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-neutral-700 shadow-sm">
                {member.role}
              </div>
            </div>

            <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>{member.name}</h3>
                <p
                  className="font-semibold text-xs tracking-wide uppercase mt-1"
                  style={{ color: C.secondary }}
                >
                  {member.specialty}
                </p>
                <p
                  className="mt-4 leading-relaxed text-sm"
                  style={{ color: C.onSurfaceVariant, lineHeight: '22px' }}
                >
                  {member.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-500">
                <span>Direct Escalation Lead</span>
                <span className="text-emerald-600 font-bold">● Active</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── 5. CONTACT & INQUIRY WORKSPACE ── */
function ContactWorkspace() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '10 - 50 employees',
    inquiryType: 'Enterprise Demo',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard?.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="py-28 px-6 md:px-16 border-t"
      style={{
        backgroundColor: C.surfaceCream,
        borderColor: `${C.outlineVariant}40`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Office & Info */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
              style={{ backgroundColor: `${C.secondaryContainer}20`, color: C.secondary }}
            >
              Direct Communication
            </div>
            <h2 style={{ ...T.displayLg, color: C.deepTealText }}>
              Let's talk operations.
            </h2>
            <p
              className="leading-relaxed"
              style={{ ...T.bodyLg, color: C.onSurfaceVariant }}
            >
              Whether you're looking to automate core processes or explore enterprise-grade partnership, our team is ready to connect.
            </p>
          </div>

          <div className="space-y-6">
            {/* Global HQ */}
            <div
              className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex items-start gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                style={{ backgroundColor: `${C.primaryContainer}15`, color: C.primaryContainer }}
              >
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Global Headquarters</h4>
                  <span className="text-[11px] font-mono font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                    PST (UTC-8)
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                  500 Howard Street, Suite 400<br />San Francisco, CA 94105
                </p>
              </div>
            </div>

            {/* Secure Inquiries */}
            <div
              className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex items-start gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                style={{ backgroundColor: `${C.primaryContainer}15`, color: C.primaryContainer }}
              >
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Secure Inquiries</h4>
                  {copiedEmail && (
                    <span className="text-[11px] font-bold text-emerald-600">Copied!</span>
                  )}
                </div>
                <div className="mt-1 space-y-1 text-sm">
                  <button
                    type="button"
                    onClick={() => handleCopyEmail('contact@flowpilot.ai')}
                    className="flex items-center gap-1.5 text-neutral-700 hover:text-teal-700 transition-colors font-mono"
                  >
                    <span>contact@flowpilot.ai</span>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail('enterprise@flowpilot.ai')}
                    className="flex items-center gap-1.5 text-neutral-700 hover:text-teal-700 transition-colors font-mono"
                  >
                    <span>enterprise@flowpilot.ai</span>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div
              className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex items-start gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                style={{ backgroundColor: `${C.primaryContainer}15`, color: C.primaryContainer }}
              >
                <Headphones className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Support Hours</h4>
                <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                  Monday – Friday, 8:00 AM – 6:00 PM PST<br />
                  <strong className="text-emerald-700">24/7 Priority Emergency Support</strong> for Enterprise SLA Clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div
          className="lg:col-span-7 rounded-3xl p-8 md:p-12 shadow-xl border relative"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}50`,
            boxShadow: '0 20px 50px -10px rgba(10,37,64,0.08)',
          }}
        >
          {submitted ? (
            <div className="text-center py-16 space-y-5">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: '#DEF7EC', color: '#03543F' }}
              >
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 style={{ ...T.displayLg, fontSize: '32px', color: C.deepTealText }}>
                Inquiry Received
              </h3>
              <p
                className="leading-relaxed"
                style={{ ...T.bodyLg, color: C.onSurfaceVariant, maxWidth: '440px', margin: '0 auto' }}
              >
                Thank you for reaching out. An automation architect has been notified and will review your requirements within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-xl text-sm font-bold border hover:bg-neutral-50 transition-all cursor-pointer"
                  style={{ borderColor: `${C.outlineVariant}80`, color: C.onSurface }}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="border-b pb-4 mb-2">
                <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
                  Submit Operational Inquiry
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Connect with our systems architects directly. Zero sales spam.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="block font-bold text-xs uppercase tracking-wider text-neutral-700"
                  >
                    Your Name *
                  </label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 border"
                    style={{
                      backgroundColor: C.surfaceCream,
                      borderColor: `${C.outlineVariant}60`,
                      color: C.onSurface,
                    }}
                    placeholder="Alex Johnson"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="block font-bold text-xs uppercase tracking-wider text-neutral-700"
                  >
                    Work Email *
                  </label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 border"
                    style={{
                      backgroundColor: C.surfaceCream,
                      borderColor: `${C.outlineVariant}60`,
                      color: C.onSurface,
                    }}
                    placeholder="alex@company.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="block font-bold text-xs uppercase tracking-wider text-neutral-700"
                  >
                    Company Size
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 border cursor-pointer font-medium"
                    style={{
                      backgroundColor: C.surfaceCream,
                      borderColor: `${C.outlineVariant}60`,
                      color: C.onSurface,
                    }}
                  >
                    <option>10 - 50 employees</option>
                    <option>51 - 200 employees</option>
                    <option>201 - 1,000 employees</option>
                    <option>1,000+ employees</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    className="block font-bold text-xs uppercase tracking-wider text-neutral-700"
                  >
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 border cursor-pointer font-medium"
                    style={{
                      backgroundColor: C.surfaceCream,
                      borderColor: `${C.outlineVariant}60`,
                      color: C.onSurface,
                    }}
                  >
                    <option>Enterprise Demo</option>
                    <option>Sales &amp; Pricing</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="block font-bold text-xs uppercase tracking-wider text-neutral-700"
                >
                  Message &amp; Workflow Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 border"
                  style={{
                    backgroundColor: C.surfaceCream,
                    borderColor: `${C.outlineVariant}60`,
                    color: C.onSurface,
                  }}
                  placeholder="Tell us about your current operational bottlenecks, connected tools (Gmail, WhatsApp, CRM), and automation goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 font-bold cursor-pointer"
                style={{
                  backgroundColor: C.secondaryContainer,
                  color: '#ffffff',
                  ...T.bodyMd,
                  fontWeight: 700,
                }}
              >
                <span>Send Operational Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── 6. QUICK ANSWERS (FAQ CONTACT BLOCK) ── */
function ContactQuickAnswers() {
  const answers = [
    {
      q: 'How quickly can our team get onboarded with FlowPilot?',
      a: 'Most core workflows are fully mapped and integrated within 5 to 10 business days, guided directly by our dedicated automation architects. Zero heavy lifting is required on your engineering side.',
    },
    {
      q: 'Are enterprise security audits and custom SLAs available?',
      a: 'Yes. We provide complete SOC 2 Type II compliance documentation, dedicated VPC isolation options, and bespoke SLAs tailored to strict enterprise security and data residency requirements.',
    },
    {
      q: 'Can we schedule a live technical demonstration with an engineer?',
      a: 'Absolutely. Submit an inquiry selecting "Enterprise Demo" and our systems engineering team will coordinate a tailored architectural deep-dive within 24 hours.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
          style={{ backgroundColor: `${C.primaryContainer}15`, color: C.primaryContainer }}
        >
          Common Inquiries
        </div>
        <h2 style={{ ...T.displayLg, color: C.deepTealText }}>
          Quick Answers
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
          Everything you need to know regarding onboarding, security, and partnership.
        </p>
      </div>

      <div className="space-y-6">
        {answers.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-8 border shadow-sm transition-all duration-200 hover:shadow-md"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}50`,
            }}
          >
            <h3 className="mb-3" style={{ ...T.headlineSm, color: C.deepTealText, fontWeight: 700 }}>
              {item.q}
            </h3>
            <p
              className="leading-relaxed"
              style={{ ...T.bodyMd, color: C.onSurfaceVariant, fontSize: '16px', lineHeight: '26px' }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── 7. COMMANDING FINAL CTA ── */
function ContactCta() {
  return (
    <section
      className="py-24 px-6 md:px-16 text-center relative overflow-hidden"
      style={{
        backgroundColor: C.primary,
        color: C.onPrimary,
      }}
    >
      {/* Subtle Radial Lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-25 blur-3xl rounded-full"
        style={{
          background: 'radial-gradient(circle, #FE852C 0%, #004642 70%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <h2
          className="tracking-tight uppercase"
          style={{ ...T.displayLg, color: '#ffffff' }}
        >
          READY TO PUT YOUR BUSINESS IN FLOW?
        </h2>
        <p
          className="max-w-xl mx-auto leading-relaxed"
          style={{ ...T.bodyLg, color: C.primaryFixedDim }}
        >
          Join high-performing operations teams scaling effortlessly with intelligent, human-supervised automation.
        </p>
        <div className="pt-2">
          <Link
            to="/book-a-demo"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-xl font-bold shadow-xl hover:opacity-95 transition-all"
            style={{
              backgroundColor: C.secondaryContainer,
              color: '#ffffff',
              ...T.bodyMd,
              fontWeight: 700,
            }}
          >
            <span>Schedule a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── MAIN PAGE EXPORT ── */
export function ContactPage() {
  return (
    <div style={{ backgroundColor: C.surface, minHeight: '100%' }}>
      <ContactHero />
      <MissionStatement />
      <FounderSpotlight />
      <TeamSection />
      <ContactWorkspace />
      <ContactQuickAnswers />
      <ContactCta />
    </div>
  );
}
