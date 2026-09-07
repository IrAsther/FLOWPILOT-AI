import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Mail,
  Send,
  ShieldCheck,
  Bot,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Check,
  FileText,
  Clock,
  Sparkles,
  Layers,
  Cpu,
  Smartphone,
  ExternalLink,
  Search,
  Paperclip,
  CheckCheck,
  Activity,
  Server,
  Lock,
  MessageSquare,
  DollarSign,
  Calendar,
  Share2,
  Database,
  ArrowUpRight,
} from 'lucide-react';

/* ── DESIGN TOKENS (Strict FlowPilot Brand System) ── */
const C = {
  background: '#fdf9f4',
  surface: '#fdf9f4',
  surfaceCream: '#F4F5F7',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f7f3ee',
  surfaceContainer: '#f1ede8',
  surfaceContainerHigh: '#ebe8e3',
  deepTealText: '#0A2540',
  primary: '#004642',
  primaryContainer: '#01605a',
  onPrimary: '#ffffff',
  primaryFixed: '#a5f0e8',
  onPrimaryFixed: '#00201e',
  primaryFixedDim: '#8ad4cc',
  secondary: '#994700',
  secondaryContainer: '#fe852c',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#632c00',
  secondaryFixed: '#ffdbc8',
  secondaryFixedDim: '#ffb68a',
  tertiary: '#55371a',
  tertiaryContainer: '#704e2f',
  onTertiary: '#ffffff',
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

/* ── 1. COMMANDING HERO WITH DOMINANT PRODUCT MOCKUP ── */
function HowItWorksHero() {
  return (
    <section className="relative px-6 md:px-16 pt-20 pb-16 max-w-7xl mx-auto text-center">
      {/* Subtle Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-30 blur-3xl rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(254,133,44,0.18) 0%, rgba(1,96,90,0.15) 50%, transparent 80%)',
        }}
      />

      <div className="relative z-10 space-y-6">
        {/* Status Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border shadow-sm"
          style={{
            backgroundColor: '#ffffff',
            borderColor: `${C.outlineVariant}60`,
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
          </span>
          <span
            className="tracking-wider uppercase"
            style={{ ...T.labelSm, color: C.primaryContainer }}
          >
            Transparent Operations Engine
          </span>
        </div>

        {/* Hero Title */}
        <h1
          className="max-w-4xl mx-auto uppercase"
          style={{ ...T.displayXl, color: C.deepTealText }}
        >
          HOW FLOWPILOT MAKES <br />
          <span style={{ color: C.primaryContainer }}>YOUR BUSINESS RUN.</span>
        </h1>

        {/* Concise Subheading */}
        <p
          className="max-w-2xl mx-auto leading-relaxed"
          style={{ ...T.bodyLg, color: C.onSurfaceVariant }}
        >
          A simple, transparent look at how AI and human judgment work together to automate your core operations.
        </p>

        {/* Hero CTA Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          <Link
            to="/book-a-demo"
            className="w-full sm:w-auto px-9 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5"
            style={{
              backgroundColor: C.primaryContainer,
              color: '#ffffff',
              ...T.bodyMd,
              fontWeight: 700,
            }}
          >
            <span>Plan an Enterprise Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#workflow"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border hover:bg-neutral-100/70 transition-all duration-200 flex items-center justify-center gap-2"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}70`,
              color: C.onSurface,
              ...T.bodyMd,
              fontWeight: 600,
            }}
          >
            <Zap className="w-4 h-4 text-orange-500" />
            <span>See the 6-Step Flow</span>
          </a>
        </div>

        {/* HERO PRODUCT MOCKUP: Live Operations Command Center Preview */}
        <div className="pt-12 max-w-5xl mx-auto">
          <div
            className="rounded-3xl border shadow-2xl overflow-hidden text-left"
            style={{
              backgroundColor: '#ffffff',
              borderColor: `${C.outlineVariant}50`,
              boxShadow: '0 25px 60px -15px rgba(10,37,64,0.12)',
            }}
          >
            {/* Desktop Window Chrome */}
            <div
              className="flex items-center justify-between px-6 py-3.5 border-b"
              style={{
                backgroundColor: '#f8fafc',
                borderColor: `${C.outlineVariant}30`,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-mono text-neutral-500 font-medium">
                  app.flowpilot.ai/live-orchestration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync Active
                </span>
                <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                  Latency: 142ms
                </span>
              </div>
            </div>

            {/* Live Pipeline Flow Visual Deck */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-white to-[#fcfbf9]">
              {/* Telemetry Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-800">Operational Flow #8921:</span>
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold">
                    Acme Corp Enterprise RFP
                  </span>
                </div>
                <div className="flex items-center gap-4 text-neutral-500 font-medium">
                  <span>Trigger: <strong>Inbound Gmail</strong></span>
                  <span>Approval: <strong>WhatsApp Verified</strong></span>
                  <span>Dispatch: <strong>QuickBooks + Email</strong></span>
                </div>
              </div>

              {/* 3 Step Connected Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {/* Node 1 */}
                <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-800">
                      <Mail className="w-4 h-4 text-teal-700" />
                      <span>1. Ingestion</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">10:42 AM</span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-800">RFP Email Received</h4>
                  <p className="text-xs text-neutral-500">From: procurement@acmecorp.com</p>
                  <div className="text-[11px] p-2 rounded bg-neutral-50 border border-neutral-100 text-neutral-600 font-medium">
                    14 Regional Hubs · $45k Budget
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-5 rounded-2xl bg-white border-2 border-orange-400/60 shadow-md space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-orange-700">
                      <Bot className="w-4 h-4 text-orange-600" />
                      <span>2. AI Core Processing</span>
                    </div>
                    <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded">142ms</span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-800">Specs Extracted &amp; Drafted</h4>
                  <p className="text-xs text-neutral-500">Confidence: 98% · Zero Hallucination</p>
                  <div className="text-[11px] p-2 rounded bg-orange-50/50 border border-orange-100 text-orange-800 font-semibold">
                    Proposal_Acme_v1.pdf Generated
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                      <Smartphone className="w-4 h-4 text-emerald-700" />
                      <span>3. Human Sign-Off</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">10:43 AM</span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-800">One-Tap WhatsApp Approval</h4>
                  <p className="text-xs text-neutral-500">Authorized by Alex Martin</p>
                  <div className="text-[11px] p-2 rounded bg-emerald-50 border border-emerald-100 text-emerald-800 font-semibold flex items-center justify-between">
                    <span>Approved &amp; Synced</span>
                    <CheckCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 2. VISUAL WORKFLOW: PRODUCT-DOMINANT 6-STEP SUITE ── */
function WorkflowSteps() {
  const [step3Approved, setStep3Approved] = useState(false);

  return (
    <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto" id="workflow">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
          style={{ backgroundColor: `${C.secondaryFixed}80`, color: C.secondary }}
        >
          Visual Walkthrough
        </div>
        <h2 style={{ ...T.displayLg, color: C.deepTealText }}>
          The 6-Step Automated Workflow
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
          Watch how an incoming client request moves seamlessly through automated processing and executive sign-off.
        </p>
      </div>

      <div className="space-y-32">
        {/* ════════════ STEP 01 ════════════ */}
        <div className="space-y-8">
          {/* Header Row: Concise Text */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-neutral-200/80">
            <div>
              <div
                className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded-md text-xs tracking-wider uppercase mb-2"
                style={{ backgroundColor: `${C.secondaryFixed}80`, color: C.secondary }}
              >
                STEP 01
              </div>
              <h3 style={{ ...T.displayLg, fontSize: '32px', color: C.deepTealText }}>
                Email arrives in your inbox
              </h3>
            </div>
            <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
              A high-value enterprise client sends a comprehensive Request For Proposal (RFP) directly to your corporate inbox. FlowPilot connects instantly without altering your workflow.
            </p>
          </div>

          {/* LARGE HEROIC GMAIL / INBOX MOCKUP */}
          <div
            className="rounded-3xl border shadow-2xl overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              borderColor: `${C.outlineVariant}50`,
              boxShadow: '0 20px 50px -10px rgba(10,37,64,0.1)',
            }}
          >
            {/* Superhuman / Gmail Chrome */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b bg-neutral-50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-mono font-medium text-neutral-400">
                  Inbox (1) · alex@yourcompany.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  FlowPilot Inbound Listener: Active
                </span>
              </div>
            </div>

            {/* Email Workspace Grid: Sidebar + Message */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">
              {/* Folder Sidebar */}
              <div className="lg:col-span-3 border-r border-neutral-100 p-4 bg-neutral-50/50 space-y-2 hidden lg:block text-xs">
                <div className="font-semibold text-neutral-400 uppercase tracking-wider px-3 py-1">Folders</div>
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-teal-50 text-teal-900 font-bold">
                  <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> Inbound RFPs</span>
                  <span className="bg-teal-200 text-teal-900 text-[10px] px-1.5 py-0.5 rounded-full">1 New</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-xl">
                  <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Scheduled</span>
                  <span>14</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 text-neutral-600 font-medium hover:bg-neutral-100 rounded-xl">
                  <span className="flex items-center gap-2"><Send className="w-3.5 h-3.5" /> Dispatched</span>
                  <span>142</span>
                </div>
              </div>

              {/* Email Content Body */}
              <div className="lg:col-span-9 p-6 md:p-8 space-y-6">
                {/* Sender Strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base shadow-sm"
                      style={{ backgroundColor: C.primaryContainer, color: '#ffffff' }}
                    >
                      AC
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base text-neutral-900">
                          Acme Corp Procurement
                        </h4>
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-neutral-100 text-neutral-600">
                          procurement@acmecorp.com
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500">To: alex@yourcompany.com</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-neutral-400 block">10:42 AM (2 mins ago)</span>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                      ⚡ Priority Inbound
                    </span>
                  </div>
                </div>

                {/* Message Body with Highlighted Data Chips */}
                <div className="space-y-4 text-neutral-800 text-sm leading-relaxed">
                  <h5 className="text-lg font-bold text-neutral-900">
                    Urgent RFP: Q3 Logistics Automation Suite
                  </h5>
                  <p>
                    Hello team, we are looking to onboard an intelligent workflow solution for our regional distribution network. Please review the attached specifications and confirm availability for an implementation rollout by Friday.
                  </p>

                  {/* Highlight Chips that FlowPilot Detects */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    <div className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold flex items-center gap-1.5">
                      <span>Detected Scope:</span>
                      <strong className="text-teal-900">14 Regional Hubs</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-800 text-xs font-semibold flex items-center gap-1.5">
                      <span>Budget Tier:</span>
                      <strong className="text-orange-900">$45,000 – $60,000 ARR</strong>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-1.5">
                      <span>Required SLA:</span>
                      <strong className="text-emerald-900">&lt; 5 min triage</strong>
                    </div>
                  </div>

                  {/* Attachment Pill */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-3 p-3.5 rounded-xl border bg-white shadow-sm text-xs">
                      <Paperclip className="w-4 h-4 text-orange-500" />
                      <div>
                        <span className="font-bold text-neutral-800 block">Acme_Logistics_Specs_2025.pdf</span>
                        <span className="text-neutral-400">3.4 MB · Cryptographic scan verified</span>
                      </div>
                      <span className="ml-4 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                        Auto-Parsed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════ STEP 02 ════════════ */}
        <div className="space-y-8">
          {/* Header Row: Concise Text */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-neutral-200/80">
            <div>
              <div
                className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded-md text-xs tracking-wider uppercase mb-2"
                style={{ backgroundColor: `${C.secondaryFixed}80`, color: C.secondary }}
              >
                STEP 02
              </div>
              <h3 style={{ ...T.displayLg, fontSize: '32px', color: C.deepTealText }}>
                AI analyzes request parameters
              </h3>
            </div>
            <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
              FlowPilot reads the incoming payload, extracts key project parameters, evaluates historical deal sizing, and calculates optimal routing priority instantly.
            </p>
          </div>

          {/* LARGE VISUAL NEURAL CORE EXTRACTION DECK */}
          <div
            className="rounded-3xl border shadow-2xl overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              borderColor: `${C.outlineVariant}50`,
              boxShadow: '0 20px 50px -10px rgba(10,37,64,0.1)',
            }}
          >
            {/* Core Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{
                backgroundColor: C.primaryContainer,
                color: '#ffffff',
              }}
            >
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5 text-orange-400" />
                <span className="font-bold text-base text-white">FlowPilot Neural Core Analysis</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  Latency: 142ms
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-200 hidden sm:inline">
                Zero Hallucination Guardrail Active
              </span>
            </div>

            {/* Neural Extraction Visual Canvas */}
            <div className="p-6 md:p-10 space-y-8 bg-gradient-to-b from-neutral-50/50 to-white">
              {/* Visual Node Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Node A */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase">Intent Recognized</span>
                  <div className="text-sm font-bold text-neutral-900">Enterprise RFP (Inbound)</div>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-full bg-neutral-100 rounded-full h-1.5">
                      <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '98%' }} />
                    </div>
                    <span className="text-xs font-bold text-emerald-600">98%</span>
                  </div>
                </div>

                {/* Node B */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase">Sentiment Score</span>
                  <div className="text-sm font-bold text-emerald-700">Positive (0.92)</div>
                  <span className="text-xs text-neutral-500 block">High expansion likelihood</span>
                </div>

                {/* Node C */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase">Deal Valuation</span>
                  <div className="text-sm font-bold text-orange-600">$45,000 ARR</div>
                  <span className="text-xs text-neutral-500 block">Tier-1 Enterprise</span>
                </div>

                {/* Node D */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase">Required Action</span>
                  <div className="text-sm font-bold text-teal-800">Draft &amp; Escalate</div>
                  <span className="text-xs text-neutral-500 block">Target Lead: Alex Martin</span>
                </div>
              </div>

              {/* Generated Proposal File Preview Card */}
              <div className="p-6 rounded-2xl bg-teal-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-800 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-300 uppercase tracking-wider block">
                      Auto-Assembled Deliverable
                    </span>
                    <h4 className="text-base font-bold text-white">
                      Proposal_AcmeCorp_Logistics_Suite_v1.pdf
                    </h4>
                    <p className="text-xs text-teal-200 mt-0.5">
                      Includes 14 distribution center pricing, SOC 2 compliance addendum, and tailored SLA guarantees.
                    </p>
                  </div>
                </div>
                <span className="px-4 py-2 rounded-xl bg-teal-800/80 text-emerald-300 text-xs font-bold border border-teal-700 shrink-0">
                  Ready for Executive Review
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════ STEP 03 & 04 ════════════ */}
        <div className="space-y-8">
          {/* Header Row: Concise Text */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-neutral-200/80">
            <div>
              <div
                className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded-md text-xs tracking-wider uppercase mb-2"
                style={{ backgroundColor: `${C.secondaryFixed}80`, color: C.secondary }}
              >
                STEP 03 &amp; 04
              </div>
              <h3 style={{ ...T.displayLg, fontSize: '32px', color: C.deepTealText }}>
                Instant notification &amp; human approval
              </h3>
            </div>
            <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
              An encrypted mobile alert reaches your WhatsApp or secure app dashboard. With a single tap, you authorize the proposed response strategy without opening complex applications.
            </p>
          </div>

          {/* LARGE REALISTIC SMARTPHONE MOCKUP */}
          <div className="flex justify-center pt-4">
            <div
              className="w-full max-w-md rounded-[44px] p-3.5 shadow-2xl border-4"
              style={{
                backgroundColor: '#171717',
                borderColor: '#262626',
                boxShadow: '0 30px 70px -15px rgba(0,0,0,0.35)',
              }}
            >
              {/* Dynamic Island */}
              <div className="flex justify-center mb-3">
                <div className="w-28 h-5 bg-black rounded-full flex items-center justify-end px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-neutral-800" />
                </div>
              </div>

              {/* WhatsApp Interface */}
              <div className="bg-[#0b141a] rounded-[34px] overflow-hidden text-white p-5 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md"
                      style={{ backgroundColor: C.primaryContainer }}
                    >
                      FP
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white">FlowPilot Bot</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-[11px] text-emerald-400">Verified Automation Channel</span>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">10:43 AM</span>
                </div>

                {/* Encrypted Banner */}
                <div className="text-center">
                  <span className="text-[10px] bg-neutral-900/90 text-neutral-400 px-3 py-1.5 rounded-full border border-neutral-800">
                    🔒 Messages are end-to-end 256-bit encrypted
                  </span>
                </div>

                {/* Bot Interactive Message Bubble */}
                <div className="bg-[#1f2c34] rounded-2xl p-5 space-y-4 border border-neutral-700/50 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">
                      ⚡ Action Required: Inbound RFP
                    </span>
                    <span className="text-[10px] text-neutral-400">10:43 AM</span>
                  </div>

                  <p className="text-neutral-200 text-sm leading-relaxed">
                    New high-value RFP from <strong>Acme Corp</strong> detected. Estimated value: <strong>$45,000 ARR</strong>. Draft proposal ready for your executive sign-off.
                  </p>

                  {/* Attachment card in WhatsApp */}
                  <div className="p-3 rounded-xl bg-[#111b21] flex items-center gap-3 border border-neutral-800">
                    <FileText className="w-5 h-5 text-orange-400 shrink-0" />
                    <div className="text-xs flex-1 truncate">
                      <span className="font-bold text-neutral-200 block truncate">Proposal_AcmeCorp_v1.pdf</span>
                      <span className="text-neutral-400 text-[10px]">14 Hubs · Custom Terms</span>
                    </div>
                  </div>

                  {/* Action Button with Real Click State */}
                  <div className="pt-2">
                    <button
                      onClick={() => setStep3Approved(!step3Approved)}
                      className="w-full py-3.5 px-4 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      style={{
                        backgroundColor: step3Approved ? '#047857' : C.primaryContainer,
                        color: '#ffffff',
                      }}
                    >
                      {step3Approved ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Approved &amp; Dispatched!</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 text-orange-400" />
                          <span>Approve &amp; Send Instantly</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Footer Micro-label */}
                <div className="text-center pt-2">
                  <span className="text-[11px] text-neutral-500 font-mono">
                    One-tap executive authorization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════ STEP 05 & 06 ════════════ */}
        <div className="space-y-8">
          {/* Header Row: Concise Text */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-neutral-200/80">
            <div>
              <div
                className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded-md text-xs tracking-wider uppercase mb-2"
                style={{ backgroundColor: `${C.secondaryFixed}80`, color: C.secondary }}
              >
                STEP 05 &amp; 06
              </div>
              <h3 style={{ ...T.displayLg, fontSize: '32px', color: C.deepTealText }}>
                Autonomous execution &amp; ledger update
              </h3>
            </div>
            <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
              Upon your approval, FlowPilot generates the exact deliverable files, sends the outgoing email confirmation, and logs financial projections into your accounting suite.
            </p>
          </div>

          {/* LARGE MULTI-APP SYNCHRONIZATION MATRIX */}
          <div
            className="rounded-3xl border shadow-2xl overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              borderColor: `${C.outlineVariant}50`,
              boxShadow: '0 20px 50px -10px rgba(10,37,64,0.1)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-neutral-50">
              <div className="flex items-center gap-3" style={{ color: C.primaryContainer }}>
                <Send className="w-5 h-5 text-orange-500" />
                <span className="font-bold text-base text-neutral-900">
                  Automated Multi-System Dispatch &amp; Sync
                </span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                100% Synchronized
              </span>
            </div>

            {/* 4 Tool Cards Grid */}
            <div className="p-6 md:p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Gmail Outbound */}
                <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 font-bold text-sm text-neutral-800">
                      <Mail className="w-4 h-4 text-teal-700" />
                      <span>Corporate Email Dispatched</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      250 OK
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Proposal transmitted to <strong>procurement@acmecorp.com</strong> with customized terms and dynamic tracking token.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-400 pt-1">
                    Receipt ID: #EM-79102-ACME
                  </div>
                </div>

                {/* 2. QuickBooks Ledger */}
                <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 font-bold text-sm text-neutral-800">
                      <DollarSign className="w-4 h-4 text-emerald-600" />
                      <span>QuickBooks Ledger Synced</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Ledger ID #QB-8921
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Provisional revenue pipeline entry logged automatically for <strong>$45,000 ARR</strong> against Acme Corp account.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-400 pt-1">
                    Status: Verified In Accounting
                  </div>
                </div>

                {/* 3. CRM Deal Stage */}
                <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 font-bold text-sm text-neutral-800">
                      <Layers className="w-4 h-4 text-orange-600" />
                      <span>HubSpot CRM Updated</span>
                    </div>
                    <span className="text-[11px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded">
                      Deal Stage: Proposal
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Opportunity card moved to <em>"Proposal Delivered"</em> with attached PDF and automated follow-up timer set for Thursday.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-400 pt-1">
                    Contact: Alex Martin (Owner)
                  </div>
                </div>

                {/* 4. Slack Operations Alert */}
                <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 font-bold text-sm text-neutral-800">
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                      <span>Slack Channel Notified</span>
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      #operations
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Broadcasted automated audit event: <em>"Acme Corp RFP approved &amp; delivered in 2m 14s total cycle."</em>
                  </p>
                  <div className="text-[11px] font-mono text-neutral-400 pt-1">
                    Hash: #7fa890e2
                  </div>
                </div>
              </div>

              {/* Terminal Log */}
              <div
                className="rounded-2xl p-4 font-mono text-xs text-emerald-400 space-y-1.5"
                style={{ backgroundColor: '#0B132B' }}
              >
                <div className="text-neutral-500 pb-1 text-[11px]">
                  FLOWPILOT KERNEL DISPATCH AUDIT LOG
                </div>
                <div>[10:43:45 UTC] [SUCCESS] Outbound PDF transmitted to procurement@acmecorp.com</div>
                <div>[10:43:46 UTC] [SUCCESS] Ledger entry #QB-8921 synchronized ($45,000.00)</div>
                <div>[10:43:47 UTC] [SUCCESS] Total execution cycle: 2.18s · Human friction: 0s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 3. REAL-TIME ARCHITECTURE PREVIEW ── */
function ArchitecturePreview() {
  return (
    <section className="py-24 px-6 md:px-16" style={{ backgroundColor: C.surfaceCream }} id="architecture">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
            style={{ backgroundColor: `${C.primaryContainer}15`, color: C.primaryContainer }}
          >
            System Architecture
          </div>
          <h2 style={{ ...T.displayLg, color: C.deepTealText }}>
            Real-Time Architecture Preview
          </h2>
          <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
            Explore how triggers, custom AI actions, and human-in-the-loop validation gates connect together.
          </p>
        </div>

        {/* 3 Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-8 rounded-3xl border shadow-sm space-y-6"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}50`,
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: C.primaryContainer, color: '#ffffff' }}
            >
              <Zap className="w-6 h-6" />
            </div>
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
              1. Triggers
            </h3>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: '1.6' }}>
              Inbound emails, webhooks, form submissions, or scheduled cron jobs instantly activate the workflow sequence.
            </p>
          </div>

          <div
            className="p-8 rounded-3xl border shadow-sm space-y-6"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}50`,
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: C.secondaryContainer, color: '#ffffff' }}
            >
              <Bot className="w-6 h-6" />
            </div>
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
              2. AI Actions
            </h3>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: '1.6' }}>
              Large language models process data, draft documents, categorize entries, and query enterprise databases.
            </p>
          </div>

          <div
            className="p-8 rounded-3xl border shadow-sm space-y-6"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}50`,
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: C.tertiaryContainer, color: '#ffffff' }}
            >
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
              3. Approval Gates
            </h3>
            <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: '1.6' }}>
              High-stakes actions pause execution safely until authorized via mobile push, WhatsApp, or dashboard prompt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 4. FAQ ACCORDION ── */
function HowItWorksFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How secure is my company data?',
      a: 'FlowPilot operates under strict enterprise compliance standards. All data is encrypted in transit and at rest using AES-256 standards. We never use your private business records to train public AI models.',
    },
    {
      q: 'Can I override automated actions?',
      a: 'Yes. Every workflow can be configured with human-in-the-loop approval gates. Nothing important goes out without your explicit sign-off.',
    },
    {
      q: 'How long does integration take?',
      a: 'Most core integrations with email, WhatsApp, and standard CRMs are completed in under 30 minutes via secure OAuth connections.',
    },
  ];

  return (
    <section className="px-6 md:px-16 py-24 max-w-4xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 style={{ ...T.displayLg, color: C.deepTealText }}>
          Frequently Asked Questions
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
          Everything you need to know about security, setup, and control.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className="rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden shadow-sm"
              style={{
                backgroundColor: C.surfaceContainerLowest,
                borderColor: isOpen ? C.primaryContainer : `${C.outlineVariant}50`,
              }}
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <div className="flex justify-between items-center p-6 md:p-8">
                <h3
                  style={{
                    ...T.headlineSm,
                    color: isOpen ? C.primaryContainer : C.deepTealText,
                    fontWeight: 700,
                  }}
                >
                  {faq.q}
                </h3>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200"
                  style={{
                    backgroundColor: isOpen ? `${C.primaryContainer}15` : C.surfaceCream,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <ChevronDown
                    className="w-5 h-5"
                    style={{ color: isOpen ? C.primaryContainer : C.outline }}
                  />
                </div>
              </div>
              {isOpen && (
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-neutral-100">
                  <p
                    className="pt-4 leading-relaxed"
                    style={{ ...T.bodyMd, color: C.onSurfaceVariant, fontSize: '16px', lineHeight: '26px' }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── 5. FINAL CTA BANNER ── */
function HowItWorksCta() {
  return (
    <section
      className="py-24 px-6 md:px-16 text-center relative overflow-hidden"
      style={{ backgroundColor: C.primaryContainer, color: C.onPrimary }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-20 blur-3xl rounded-full"
        style={{
          background: 'radial-gradient(circle, #FE852C 0%, #004642 70%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <h2
          className="tracking-tight uppercase"
          style={{ ...T.displayLg, color: '#ffffff' }}
        >
          READY TO MAKE YOUR BUSINESS FLOW?
        </h2>
        <p
          className="max-w-xl mx-auto leading-relaxed"
          style={{ ...T.bodyLg, color: C.primaryFixedDim }}
        >
          Join high-performing operations teams saving 20+ hours every week with FlowPilot.
        </p>
        <div className="pt-4">
          <Link
            to="/book-a-demo"
            className="px-10 py-4 rounded-xl font-bold shadow-xl hover:opacity-95 transition-all inline-flex items-center gap-2.5"
            style={{
              backgroundColor: C.secondaryContainer,
              color: '#ffffff',
              ...T.bodyMd,
              fontWeight: 700,
            }}
          >
            <span>Plan a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── MAIN PAGE EXPORT ── */
export function HowItWorksPage() {
  return (
    <div style={{ backgroundColor: C.background, minHeight: '100%' }}>
      <HowItWorksHero />
      <WorkflowSteps />
      <ArchitecturePreview />
      <HowItWorksFaq />
      <HowItWorksCta />
    </div>
  );
}
