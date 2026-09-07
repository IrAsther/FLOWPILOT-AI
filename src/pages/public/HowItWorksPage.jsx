import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Send,
  Bot,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

/* ── STITCH EXACT COLOR PALETTE ── */
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

/* ── STITCH EXACT TYPOGRAPHY ── */
const T = {
  headlineXl: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: '-0.02em',
    fontWeight: 600,
  },
  headlineLg: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '36px',
    lineHeight: '44px',
    letterSpacing: '-0.01em',
    fontWeight: 600,
  },
  headlineMd: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 500,
  },
  headlineSm: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 500,
  },
  labelMd: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.02em',
    fontWeight: 500,
  },
  labelSm: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '11px',
    lineHeight: '14px',
    letterSpacing: '0.04em',
    fontWeight: 500,
  },
  bodyLg: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
  },
  bodyMd: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
  },
  bodySm: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 400,
  },
};

/* ── 1. HERO SECTION (Stitch 1:1) ── */
function HowItWorksHero() {
  return (
    <section className="px-6 md:px-16 py-20 max-w-[1280px] mx-auto text-center">
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
        style={{
          backgroundColor: C.surfaceContainerHigh,
          color: C.primary,
          ...T.labelMd,
        }}
      >
        <Zap className="w-3.5 h-3.5 fill-current" />
        Transparent Operations Engine
      </div>
      <h1
        className="mb-6 max-w-4xl mx-auto tracking-tight uppercase"
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
        <a
          href="#workflow"
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-center font-medium shadow-md hover:opacity-95 transition-all"
          style={{
            backgroundColor: C.primaryContainer,
            color: C.onPrimary,
            ...T.bodyMd,
          }}
        >
          Plan a Demo
        </a>
        <a
          href="#architecture"
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-center font-medium hover:bg-neutral-100 transition-all border"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}80`,
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

/* ── 2. STEP-BY-STEP VISUAL WORKFLOW DEMONSTRATION (Stitch 1:1) ── */
function WorkflowSteps() {
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
                backgroundColor: `${C.secondaryFixed}4d`,
                color: C.secondary,
                ...T.labelMd,
              }}
            >
              STEP 01
            </div>
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
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
            className="p-6 rounded-xl border shadow-sm relative overflow-hidden"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}4d`,
            }}
          >
            <div
              className="flex items-center justify-between border-b pb-4 mb-4"
              style={{ borderColor: `${C.outlineVariant}30` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: C.primaryContainer, color: C.onPrimary }}
                >
                  AC
                </div>
                <div>
                  <h4 style={{ ...T.bodyMd, fontWeight: 500, color: C.onSurface }}>
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
            </div>
          </div>
        </div>

        {/* Step 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 lg:order-1 p-6 rounded-xl border shadow-sm relative"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}4d`,
            }}
          >
            <div
              className="flex items-center justify-between mb-4 border-b pb-3"
              style={{ borderColor: `${C.outlineVariant}30` }}
            >
              <span style={{ ...T.bodyMd, fontWeight: 700, color: C.primary }}>
                FlowPilot Neural Core
              </span>
              <span
                className="px-2.5 py-0.5 rounded"
                style={{
                  backgroundColor: C.primaryFixed,
                  color: C.onPrimaryFixed,
                  ...T.labelSm,
                }}
              >
                High Priority
              </span>
            </div>
            <div className="space-y-3" style={{ ...T.bodyMd }}>
              <div
                className="flex justify-between p-2 rounded"
                style={{ backgroundColor: C.surfaceContainerLow }}
              >
                <span style={{ color: C.outline }}>Intent Recognized:</span>
                <span style={{ fontWeight: 500, color: C.onSurface }}>Enterprise RFP (Inbound)</span>
              </div>
              <div
                className="flex justify-between p-2 rounded"
                style={{ backgroundColor: C.surfaceContainerLow }}
              >
                <span style={{ color: C.outline }}>Sentiment Score:</span>
                <span className="font-medium text-green-700">Positive (0.92)</span>
              </div>
              <div
                className="flex justify-between p-2 rounded"
                style={{ backgroundColor: C.surfaceContainerLow }}
              >
                <span style={{ color: C.outline }}>Required Action:</span>
                <span style={{ fontWeight: 500, color: C.secondary }}>Draft proposal &amp; alert Alex</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div
              className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded"
              style={{
                backgroundColor: `${C.secondaryFixed}4d`,
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
                backgroundColor: `${C.secondaryFixed}4d`,
                color: C.secondary,
                ...T.labelMd,
              }}
            >
              STEP 03 &amp; 04
            </div>
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
              Instant notification &amp; human approval
            </h3>
            <p
              className="leading-relaxed"
              style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
            >
              An encrypted mobile alert reaches your WhatsApp or secure app dashboard. With a single tap, you authorize the proposed response strategy without opening complex applications.
            </p>
          </div>

          <div
            className="p-6 rounded-xl border shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-center"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}4d`,
            }}
          >
            {/* Mobile Mockup */}
            <div className="w-full sm:w-72 bg-neutral-900 text-white p-4 rounded-2xl shadow-lg border-4 border-neutral-800">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-700 mb-3 text-xs text-neutral-400">
                <span>WhatsApp</span>
                <span>10:43 AM</span>
              </div>
              <div className="bg-neutral-800 p-3 rounded-lg text-xs space-y-2">
                <p className="font-semibold" style={{ color: C.secondaryFixedDim }}>
                  FlowPilot AI Bot
                </p>
                <p>
                  New high-value RFP from Acme Corp detected. Estimated value: $45,000. Draft proposal ready for review.
                </p>
                <div className="pt-2 flex gap-2">
                  <span
                    className="text-white px-3 py-1 rounded text-center flex-1 font-medium cursor-pointer"
                    style={{ backgroundColor: C.primary }}
                  >
                    Approve &amp; Send
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 05 & 06 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 lg:order-1 p-6 rounded-xl border shadow-sm"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}4d`,
            }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3" style={{ color: C.primary }}>
                <Send className="w-5 h-5" />
                <h4 style={{ ...T.bodyMd, fontWeight: 600 }}>Automated Dispatch &amp; Sync</h4>
              </div>
              <p style={{ ...T.bodySm, color: C.onSurfaceVariant, lineHeight: '1.6' }}>
                Proposal document transmitted securely via email with customized terms. QuickBooks ledger automatically updated with provisional pipeline entry.
              </p>
              <div
                className="p-3 rounded text-xs font-mono"
                style={{
                  backgroundColor: C.surfaceContainerLow,
                  color: C.outline,
                }}
              >
                [SUCCESS] Email dispatched to procurement@acmecorp.com<br />
                [SUCCESS] Ledger ID #QB-8921 synchronized
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div
              className="inline-flex items-center gap-2 font-bold px-3 py-1 rounded"
              style={{
                backgroundColor: `${C.secondaryFixed}4d`,
                color: C.secondary,
                ...T.labelMd,
              }}
            >
              STEP 05 &amp; 06
            </div>
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
              Autonomous execution &amp; ledger update
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

/* ── 3. INTERACTIVE ARCHITECTURE PREVIEW (Stitch 1:1) ── */
function ArchitecturePreview() {
  return (
    <section
      className="py-20 px-6 md:px-16"
      style={{ backgroundColor: C.surfaceContainerLow }}
      id="architecture"
    >
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
        <div
          className="p-8 rounded-xl border shadow-sm relative"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
            style={{ backgroundColor: C.primaryContainer, color: C.onPrimary }}
          >
            <Zap className="w-5 h-5 fill-current" />
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

        <div
          className="p-8 rounded-xl border shadow-sm relative"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-6"
            style={{ backgroundColor: C.secondaryContainer, color: C.onSecondaryContainer }}
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

        <div
          className="p-8 rounded-xl border shadow-sm relative"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
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

/* ── 4. FAQ ACCORDION (Stitch 1:1) ── */
function HowItWorksFaq() {
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
        <details
          className="p-6 rounded-xl border shadow-sm group"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <summary
            className="cursor-pointer flex justify-between items-center list-none"
            style={{ ...T.headlineSm, color: C.deepTealText }}
          >
            <span>How secure is my company data?</span>
            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: C.outline }} />
          </summary>
          <p
            className="mt-4 leading-relaxed"
            style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
          >
            FlowPilot operates under strict enterprise compliance standards. All data is encrypted in transit and at rest using AES-256 standards. We never use your private business records to train public AI models.
          </p>
        </details>

        <details
          className="p-6 rounded-xl border shadow-sm group"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <summary
            className="cursor-pointer flex justify-between items-center list-none"
            style={{ ...T.headlineSm, color: C.deepTealText }}
          >
            <span>Can I override automated actions?</span>
            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: C.outline }} />
          </summary>
          <p
            className="mt-4 leading-relaxed"
            style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
          >
            Yes. Every workflow can be configured with human-in-the-loop approval gates. Nothing important goes out without your explicit sign-off.
          </p>
        </details>

        <details
          className="p-6 rounded-xl border shadow-sm group"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <summary
            className="cursor-pointer flex justify-between items-center list-none"
            style={{ ...T.headlineSm, color: C.deepTealText }}
          >
            <span>How long does integration take?</span>
            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: C.outline }} />
          </summary>
          <p
            className="mt-4 leading-relaxed"
            style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
          >
            Most core integrations with email, WhatsApp, and standard CRMs are completed in under 30 minutes via secure OAuth connections.
          </p>
        </details>
      </div>
    </section>
  );
}

/* ── 5. FINAL CTA BANNER (Stitch 1:1) ── */
function HowItWorksCta() {
  return (
    <section
      className="py-20 px-6 text-center"
      style={{
        backgroundColor: C.primaryContainer,
        color: C.onPrimary,
      }}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2
          className="uppercase tracking-tight"
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
              color: C.onSecondaryContainer,
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
