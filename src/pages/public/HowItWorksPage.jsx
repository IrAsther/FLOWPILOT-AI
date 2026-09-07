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
  Lock,
  Clock,
  Check,
} from 'lucide-react';

const C = {
  background: '#fdf9f4',
  surface: '#fdf9f4',
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
  onPrimaryFixed: '#00201e',
  primaryFixedDim: '#8ad4cc',
  secondary: '#994700',
  secondaryContainer: '#fe852c',
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
  headlineXl: { fontFamily: "'Inter', sans-serif", fontSize: '48px', lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: 700 },
  headlineLg: { fontFamily: "'Inter', sans-serif", fontSize: '36px', lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: 600 },
  headlineMd: { fontFamily: "'Inter', sans-serif", fontSize: '24px', lineHeight: '32px', fontWeight: 600 },
  headlineSm: { fontFamily: "'Inter', sans-serif", fontSize: '18px', lineHeight: '26px', fontWeight: 500 },
  labelMd: { fontFamily: "'Inter', sans-serif", fontSize: '12px', lineHeight: '16px', letterSpacing: '0.02em', fontWeight: 500 },
  labelSm: { fontFamily: "'Inter', sans-serif", fontSize: '11px', lineHeight: '14px', letterSpacing: '0.04em', fontWeight: 500 },
  bodyLg: { fontFamily: "'Inter', sans-serif", fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
  bodyMd: { fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
  bodySm: { fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: '18px', fontWeight: 400 },
};

/* ── 1. HERO ── */
function HowItWorksHero() {
  return (
    <section className="px-6 md:px-16 py-20 max-w-[1280px] mx-auto text-center">
      <div
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 text-xs font-semibold"
        style={{
          backgroundColor: C.surfaceContainerHigh,
          color: C.primaryContainer,
          ...T.labelMd,
        }}
      >
        <Zap className="w-4 h-4" style={{ color: C.secondaryContainer }} />
        Transparent Operations Engine
      </div>
      <h1
        className="mb-6 max-w-4xl mx-auto tracking-tight"
        style={{ ...T.headlineXl, color: C.deepTealText }}
      >
        HOW FLOWPILOT MAKES YOUR BUSINESS RUN.
      </h1>
      <p
        className="max-w-2xl mx-auto mb-10 leading-relaxed"
        style={{ ...T.bodyLg, color: C.onSurfaceVariant }}
      >
        A simple, transparent look at how AI and human judgment work together to automate your core operations.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to="/book-a-demo"
          className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium shadow-md hover:opacity-95 transition-all text-center inline-block"
          style={{
            backgroundColor: C.primaryContainer,
            color: C.onPrimary,
            ...T.bodyMd,
          }}
        >
          Plan a Demo
        </Link>
        <a
          href="#architecture"
          className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium hover:bg-neutral-100 transition-all text-center inline-block"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            border: `1px solid ${C.outlineVariant}80`,
            color: C.onSurface,
            ...T.bodyMd,
          }}
        >
          Explore Solutions
        </a>
      </div>
    </section>
  );
}

/* ── 2. STEP-BY-STEP VISUAL WORKFLOW DEMONSTRATION ── */
function WorkflowSteps() {
  const [approved, setApproved] = useState(false);

  return (
    <section className="px-6 md:px-16 py-16 max-w-[1280px] mx-auto" id="workflow">
      <div className="text-center mb-16">
        <h2
          className="mb-4"
          style={{ ...T.headlineLg, color: C.deepTealText }}
        >
          The 6-Step Automated Workflow
        </h2>
        <p
          className="max-w-xl mx-auto"
          style={{ ...T.bodyLg, color: C.onSurfaceVariant }}
        >
          Watch how an incoming client request moves seamlessly through automated processing and executive sign-off.
        </p>
      </div>

      <div className="space-y-24">
        {/* Step 01 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded"
              style={{
                backgroundColor: `${C.secondaryFixed}60`,
                color: C.secondary,
                ...T.labelMd,
              }}
            >
              STEP 01
            </div>
            <h3
              style={{ ...T.headlineMd, color: C.deepTealText }}
            >
              Email arrives in your inbox
            </h3>
            <p
              className="leading-relaxed"
              style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
            >
              A high-value enterprise client sends a comprehensive Request For Proposal (RFP) directly to your corporate inbox. FlowPilot instantly connects to your mail server without altering your existing workflow.
            </p>
          </div>

          <div
            className="p-6 rounded-xl relative overflow-hidden"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              border: `1px solid ${C.outlineVariant}50`,
              boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)',
            }}
          >
            <div
              className="flex items-center justify-between pb-4 mb-4"
              style={{ borderBottom: `1px solid ${C.outlineVariant}30` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: C.primaryContainer, color: C.onPrimary }}
                >
                  AC
                </div>
                <div>
                  <h4 style={{ ...T.bodyMd, fontWeight: 600, color: C.onSurface }}>
                    Acme Corp Procurement
                  </h4>
                  <p style={{ ...T.bodySm, color: C.outline }}>To: alex@yourcompany.com</p>
                </div>
              </div>
              <span style={{ ...T.bodySm, color: C.outline }}>10:42 AM</span>
            </div>
            <div className="space-y-3">
              <h5
                style={{ ...T.bodyMd, fontWeight: 600, color: C.deepTealText }}
              >
                Urgent RFP: Q3 Logistics Automation Suite
              </h5>
              <p style={{ ...T.bodySm, color: C.onSurfaceVariant, lineHeight: '1.6' }}>
                Hello team, we are looking to onboard an intelligent workflow solution for our regional distribution centers. Please review the attached specs and provide an estimate by Friday...
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs"
                  style={{ backgroundColor: C.surfaceContainerLow, color: C.onSurfaceVariant }}
                >
                  <Mail className="w-3.5 h-3.5" /> rfp_specs_v2.pdf (2.4 MB)
                </span>
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold"
                  style={{ backgroundColor: '#DEF7EC', color: '#03543F' }}
                >
                  Priority Inbound
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 lg:order-1 p-6 rounded-xl relative"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              border: `1px solid ${C.outlineVariant}50`,
              boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)',
            }}
          >
            <div
              className="flex items-center justify-between mb-4 pb-3"
              style={{ borderBottom: `1px solid ${C.outlineVariant}30` }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span style={{ ...T.bodyMd, fontWeight: 700, color: C.primary }}>
                  FlowPilot Neural Core
                </span>
              </div>
              <span
                className="px-2.5 py-0.5 rounded font-semibold"
                style={{
                  backgroundColor: C.primaryFixed,
                  color: C.onPrimaryFixed,
                  ...T.labelSm,
                }}
              >
                High Priority
              </span>
            </div>
            <div className="space-y-3">
              <div
                className="flex justify-between items-center p-3 rounded"
                style={{ backgroundColor: C.surfaceContainerLow }}
              >
                <span style={{ ...T.bodySm, color: C.outline }}>Intent Recognized:</span>
                <span style={{ ...T.bodySm, fontWeight: 600, color: C.onSurface }}>
                  Enterprise RFP (Inbound)
                </span>
              </div>
              <div
                className="flex justify-between items-center p-3 rounded"
                style={{ backgroundColor: C.surfaceContainerLow }}
              >
                <span style={{ ...T.bodySm, color: C.outline }}>Sentiment Score:</span>
                <span style={{ ...T.bodySm, fontWeight: 600, color: '#047857' }}>
                  Positive (0.92)
                </span>
              </div>
              <div
                className="flex justify-between items-center p-3 rounded"
                style={{ backgroundColor: C.surfaceContainerLow }}
              >
                <span style={{ ...T.bodySm, color: C.outline }}>Required Action:</span>
                <span style={{ ...T.bodySm, fontWeight: 600, color: C.secondary }}>
                  Draft proposal & alert Alex
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div
              className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded"
              style={{
                backgroundColor: `${C.secondaryFixed}60`,
                color: C.secondary,
                ...T.labelMd,
              }}
            >
              STEP 02
            </div>
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
              AI analyzes request parameters
            </h3>
            <p
              className="leading-relaxed"
              style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
            >
              FlowPilot reads the incoming payload, extracts key project parameters, evaluates historical deal sizing, and calculates optimal routing priority instantly.
            </p>
          </div>
        </div>

        {/* Step 03 & 04 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded"
              style={{
                backgroundColor: `${C.secondaryFixed}60`,
                color: C.secondary,
                ...T.labelMd,
              }}
            >
              STEP 03 & 04
            </div>
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
              Instant notification & human approval
            </h3>
            <p
              className="leading-relaxed"
              style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
            >
              An encrypted mobile alert reaches your WhatsApp or secure app dashboard. With a single tap, you authorize the proposed response strategy without opening complex applications.
            </p>
          </div>

          <div
            className="p-6 rounded-xl flex flex-col sm:flex-row gap-4 items-center justify-center"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              border: `1px solid ${C.outlineVariant}50`,
              boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)',
            }}
          >
            {/* Mobile Mockup */}
            <div className="w-full sm:w-80 bg-neutral-900 text-white p-4 rounded-3xl shadow-xl border-4 border-neutral-800">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3 text-xs text-neutral-400">
                <span className="font-semibold text-emerald-400">WhatsApp</span>
                <span>10:43 AM</span>
              </div>
              <div className="bg-neutral-800 p-3.5 rounded-2xl text-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <p className="font-semibold" style={{ color: C.secondaryFixedDim }}>
                    FlowPilot AI Bot
                  </p>
                  <span className="text-[10px] text-neutral-400">10:43 AM</span>
                </div>
                <p className="text-neutral-200 leading-relaxed">
                  New high-value RFP from Acme Corp detected. Estimated value: $45,000. Draft proposal ready for review.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setApproved(!approved)}
                    className="w-full text-white px-3 py-2 rounded-xl text-center font-medium transition-all text-xs flex items-center justify-center gap-1.5"
                    style={{
                      backgroundColor: approved ? '#047857' : C.primaryContainer,
                    }}
                  >
                    {approved ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Approved & Dispatched
                      </>
                    ) : (
                      'Approve & Send'
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="text-[10px] text-neutral-500">Human-In-The-Loop Verification Gate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 05 & 06 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 lg:order-1 p-6 rounded-xl"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              border: `1px solid ${C.outlineVariant}50`,
              boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)',
            }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3" style={{ color: C.primary }}>
                <Send className="w-5 h-5" />
                <h4 style={{ ...T.bodyMd, fontWeight: 600 }}>Automated Dispatch & Sync</h4>
              </div>
              <p style={{ ...T.bodySm, color: C.onSurfaceVariant, lineHeight: '1.6' }}>
                Proposal document transmitted securely via email with customized terms. QuickBooks ledger automatically updated with provisional pipeline entry.
              </p>
              <div
                className="p-3.5 rounded text-xs font-mono space-y-1.5"
                style={{ backgroundColor: C.surfaceContainerLow, color: C.outline }}
              >
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <span>[SUCCESS]</span> Email dispatched to procurement@acmecorp.com
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <span>[SUCCESS]</span> Ledger ID #QB-8921 synchronized
                </div>
                <div className="text-neutral-500 text-[11px] pt-1">
                  Latency: 340ms | Status: Deterministic verified
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div
              className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded"
              style={{
                backgroundColor: `${C.secondaryFixed}60`,
                color: C.secondary,
                ...T.labelMd,
              }}
            >
              STEP 05 & 06
            </div>
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
              Autonomous execution & ledger update
            </h3>
            <p
              className="leading-relaxed"
              style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
            >
              Upon your approval, FlowPilot generates the exact deliverable files, sends the outgoing email confirmation, and logs financial projections into your accounting suite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 3. INTERACTIVE ARCHITECTURE PREVIEW ── */
function ArchitecturePreview() {
  return (
    <section className="py-20 px-6 md:px-16" style={{ backgroundColor: C.surfaceContainerLow }} id="architecture">
      <div className="max-w-[1280px] mx-auto text-center mb-12">
        <h2
          className="mb-4"
          style={{ ...T.headlineLg, color: C.deepTealText }}
        >
          Real-Time Architecture Preview
        </h2>
        <p
          className="max-w-xl mx-auto"
          style={{ ...T.bodyLg, color: C.onSurfaceVariant }}
        >
          Explore how triggers, custom AI actions, and human-in-the-loop validation gates connect together.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Triggers */}
        <div
          className="p-8 rounded-xl relative hover:shadow-md transition-shadow"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            border: `1px solid ${C.outlineVariant}50`,
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
            style={{ backgroundColor: C.primaryContainer, color: C.onPrimary }}
          >
            <Zap className="w-5 h-5" />
          </div>
          <h3
            className="mb-2"
            style={{ ...T.headlineSm, color: C.deepTealText }}
          >
            1. Triggers
          </h3>
          <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: '1.6' }}>
            Inbound emails, webhooks, form submissions, or scheduled cron jobs instantly activate the workflow sequence.
          </p>
        </div>

        {/* 2. AI Actions */}
        <div
          className="p-8 rounded-xl relative hover:shadow-md transition-shadow"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            border: `1px solid ${C.outlineVariant}50`,
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
            style={{ backgroundColor: C.secondaryContainer, color: C.onPrimary }}
          >
            <Bot className="w-5 h-5" />
          </div>
          <h3
            className="mb-2"
            style={{ ...T.headlineSm, color: C.deepTealText }}
          >
            2. AI Actions
          </h3>
          <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: '1.6' }}>
            Large language models process data, draft documents, categorize entries, and query enterprise databases.
          </p>
        </div>

        {/* 3. Approval Gates */}
        <div
          className="p-8 rounded-xl relative hover:shadow-md transition-shadow"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            border: `1px solid ${C.outlineVariant}50`,
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
            style={{ backgroundColor: C.tertiaryContainer, color: C.onTertiary }}
          >
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3
            className="mb-2"
            style={{ ...T.headlineSm, color: C.deepTealText }}
          >
            3. Approval Gates
          </h3>
          <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, lineHeight: '1.6' }}>
            High-stakes actions pause execution safely until authorized via mobile push, WhatsApp, or dashboard prompt.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── 4. FAQ ACCORDION ── */
function HowItWorksFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      question: 'How secure is my company data?',
      answer:
        'FlowPilot operates under strict enterprise compliance standards. All data is encrypted in transit and at rest using AES-256 standards. We never use your private business records to train public AI models.',
    },
    {
      question: 'Can I override automated actions?',
      answer:
        'Yes. Every workflow can be configured with human-in-the-loop approval gates. Nothing important goes out without your explicit sign-off.',
    },
    {
      question: 'How long does integration take?',
      answer:
        'Most core integrations with email, WhatsApp, and standard CRMs are completed in under 30 minutes via secure OAuth connections.',
    },
  ];

  return (
    <section className="px-6 md:px-16 py-20 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="mb-4"
          style={{ ...T.headlineLg, color: C.deepTealText }}
        >
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
              className="p-6 rounded-xl transition-all cursor-pointer"
              style={{
                backgroundColor: C.surfaceContainerLowest,
                border: `1px solid ${C.outlineVariant}50`,
                boxShadow: '0 2px 8px -2px rgba(0,0,0,0.03)',
              }}
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3
                  style={{
                    ...T.headlineSm,
                    color: C.deepTealText,
                  }}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  style={{ color: C.outline }}
                />
              </div>
              {isOpen && (
                <p
                  className="mt-4 leading-relaxed"
                  style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
                >
                  {faq.answer}
                </p>
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
      className="py-20 px-6 text-center"
      style={{ backgroundColor: C.primaryContainer, color: C.onPrimary }}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2
          className="tracking-tight"
          style={{ ...T.headlineLg, color: '#ffffff' }}
        >
          READY TO MAKE YOUR BUSINESS FLOW?
        </h2>
        <p
          className="max-w-xl mx-auto"
          style={{ ...T.bodyLg, color: C.primaryFixedDim }}
        >
          Join high-performing operations teams saving 20+ hours every week with FlowPilot.
        </p>
        <div className="pt-4">
          <Link
            to="/book-a-demo"
            className="px-8 py-4 rounded-xl font-medium shadow-md hover:opacity-95 transition-all inline-block"
            style={{
              backgroundColor: C.secondaryContainer,
              color: '#ffffff',
              ...T.bodyMd,
            }}
          >
            Plan a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── MAIN PAGE COMPONENT ── */
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
