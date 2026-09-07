import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  GitBranch,
  ArrowRight,
  CheckCircle2,
  Play,
  Sliders,
  Database,
  MessageSquare,
  Mail,
  Calendar as CalendarIcon,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Send,
  Zap,
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

export const CustomWorkflowsPage = () => {
  const [selectedNode, setSelectedNode] = useState(2);
  const [confidence, setConfidence] = useState(85);
  const [actionStatus, setActionStatus] = useState('Active Protocol');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'How do Custom Workflows differ from traditional trigger-action tools?',
      a: 'Traditional automation breaks when human phrasing varies or unexpected inputs occur. FlowPilot integrates context comprehension, dynamic decision routing, and human-in-the-loop validation checkpoints into each pipeline.',
    },
    {
      q: 'Can we integrate proprietary internal databases or custom APIs?',
      a: 'Yes. FlowPilot supports standard REST webhooks, GraphQL endpoints, SQL connectors, and isolated micro-lambdas (Python/TypeScript) directly within any processing node.',
    },
    {
      q: 'How are authorization checkpoints enforced in live workflows?',
      a: 'Approval gates can be placed at any step before state-altering actions (e.g. sending emails, scheduling appointments, or modifying CRM records). Team members receive one-tap approval notifications via WhatsApp or Slack.',
    },
    {
      q: 'What does the parallel validation phase entail?',
      a: 'Prior to full activation, custom workflows run in parallel alongside your team for 5 business days, auditing output accuracy against your gold-standard benchmark.',
    },
  ];

  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* 1. HERO SECTION */}
      <section style={{ padding: '72px 32px 64px 32px', maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: C.surfaceContainer,
            border: `1px solid ${C.outlineVariant}`,
            fontSize: '12px',
            fontWeight: 700,
            color: C.primary,
            marginBottom: '20px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <GitBranch size={13} />
          <span>AUTONOMOUS OPERATIONS ENGINE</span>
          <span style={{ color: C.borderLight }}>/</span>
          <span style={{ color: C.onSurfaceVariant }}>CUSTOM ARCHITECTURES</span>
        </div>

        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(34px, 5vw, 54px)',
            fontWeight: 800,
            color: C.onSurface,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            maxWidth: '920px',
            margin: '0 auto 20px auto',
          }}
        >
          YOUR BUSINESS IS <span style={{ color: C.secondaryContainer, textDecoration: 'underline', textDecorationColor: C.brandPeach }}>UNIQUE</span>.<br />
          YOUR AUTOMATION SHOULD BE TOO.
        </h1>

        <p
          style={{
            fontSize: '17px',
            color: C.onSurfaceVariant,
            maxWidth: '680px',
            margin: '0 auto 36px auto',
            lineHeight: 1.6,
          }}
        >
          Custom orchestration for high-output operations. Connect your communication channels, custom business logic, and human approval checkpoints into reliable automated pipelines.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '56px' }}>
          <a
            href="#builder-demo"
            style={{
              backgroundColor: C.primaryContainer,
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '10px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(1, 96, 90, 0.2)',
            }}
          >
            <Play size={14} fill="#ffffff" /> Explore Interactive Studio
          </a>
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              color: C.primaryContainer,
              padding: '14px 28px',
              borderRadius: '10px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
              border: `1px solid ${C.outlineVariant}`,
            }}
          >
            Book Architecture Session
          </Link>
        </div>

        {/* WORKFLOW CANVAS MOCKUP */}
        <div
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderRadius: '20px',
            border: `1px solid ${C.outlineVariant}`,
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.05)',
            padding: '24px',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '14px',
              borderBottom: `1px solid ${C.borderLight}`,
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: C.onSurface }}>
                Client_Escalation_Orchestration_v3.fp
              </span>
              <span style={{ fontSize: '11px', backgroundColor: C.primaryContainer, color: '#ffffff', padding: '2px 8px', borderRadius: '6px', fontWeight: 600 }}>
                Active Production Flow
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '12px', color: C.onSurfaceVariant }}>Execution Latency: 420ms avg</span>
              <button
                style={{
                  backgroundColor: C.secondaryContainer,
                  color: '#ffffff',
                  border: 'none',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Deploy Workflow
              </button>
            </div>
          </div>

          {/* Connected 5-node cluster */}
          <div style={{ backgroundColor: C.surfaceContainerLow, borderRadius: '14px', padding: '20px', border: `1px solid ${C.borderLight}`, overflowX: 'auto' }}>
            <div style={{ minWidth: '880px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
              {/* Node 1 */}
              <div
                onClick={() => setSelectedNode(1)}
                style={{
                  backgroundColor: C.surfaceContainerLowest,
                  borderRadius: '12px',
                  padding: '14px',
                  width: '180px',
                  border: `2px solid ${selectedNode === 1 ? C.primaryContainer : C.borderLight}`,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: C.onSurfaceVariant, backgroundColor: C.surfaceContainer, padding: '2px 6px', borderRadius: '4px' }}>
                    TRIGGER
                  </span>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={13} /> Gmail Inbound
                </div>
                <p style={{ fontSize: '11px', color: C.onSurfaceVariant, margin: 0 }}>Matches VIP inquiry filter</p>
              </div>

              <span style={{ color: C.onSurfaceVariant, opacity: 0.6 }}>→</span>

              {/* Node 2 */}
              <div
                onClick={() => setSelectedNode(2)}
                style={{
                  backgroundColor: C.surfaceContainerLowest,
                  borderRadius: '12px',
                  padding: '14px',
                  width: '190px',
                  border: `2px solid ${selectedNode === 2 ? C.primaryContainer : C.borderLight}`,
                  boxShadow: '0 4px 12px rgba(1, 96, 90, 0.12)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: C.primary, backgroundColor: '#e7f8f6', padding: '2px 6px', borderRadius: '4px' }}>
                    AI CLASSIFY
                  </span>
                  <CheckCircle2 size={13} color={C.primaryContainer} />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sliders size={13} /> Intent &amp; Urgency
                </div>
                <p style={{ fontSize: '11px', color: C.onSurfaceVariant, margin: 0 }}>FlowPilot Triage v4.2</p>
                <div style={{ marginTop: '6px', fontSize: '10px', fontFamily: 'monospace', backgroundColor: C.surfaceContainer, padding: '2px 6px', borderRadius: '4px', color: C.primary }}>
                  score: 0.98 (urgent)
                </div>
              </div>

              <span style={{ color: C.onSurfaceVariant, opacity: 0.6 }}>→</span>

              {/* Node 3 */}
              <div
                onClick={() => setSelectedNode(3)}
                style={{
                  backgroundColor: C.surfaceContainerLowest,
                  borderRadius: '12px',
                  padding: '14px',
                  width: '180px',
                  border: `2px solid ${selectedNode === 3 ? C.primaryContainer : C.borderLight}`,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: C.onSurfaceVariant, backgroundColor: C.surfaceContainer, padding: '2px 6px', borderRadius: '4px' }}>
                    BRANCH
                  </span>
                  <GitBranch size={13} />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface, marginBottom: '2px' }}>
                  Contract Value Router
                </div>
                <p style={{ fontSize: '11px', color: C.onSurfaceVariant, margin: 0 }}>If MRR &gt; $5,000 → Partner Path</p>
              </div>

              <span style={{ color: C.onSurfaceVariant, opacity: 0.6 }}>→</span>

              {/* Node 4 */}
              <div
                onClick={() => setSelectedNode(4)}
                style={{
                  backgroundColor: C.surfaceContainerLowest,
                  borderRadius: '12px',
                  padding: '14px',
                  width: '180px',
                  border: `2px solid ${selectedNode === 4 ? C.primaryContainer : C.borderLight}`,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#047857', backgroundColor: '#d1fae5', padding: '2px 6px', borderRadius: '4px' }}>
                    ALERT
                  </span>
                  <MessageSquare size={13} color="#047857" />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface, marginBottom: '2px' }}>
                  WhatsApp Ping
                </div>
                <p style={{ fontSize: '11px', color: C.onSurfaceVariant, margin: 0 }}>Brief sent to Lead Partner</p>
              </div>

              <span style={{ color: C.onSurfaceVariant, opacity: 0.6 }}>→</span>

              {/* Node 5 */}
              <div
                onClick={() => setSelectedNode(5)}
                style={{
                  backgroundColor: C.surfaceContainerLowest,
                  borderRadius: '12px',
                  padding: '14px',
                  width: '190px',
                  border: `2px solid ${C.secondaryContainer}`,
                  boxShadow: '0 4px 12px rgba(254, 133, 44, 0.15)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: C.secondary, backgroundColor: C.brandPeach, padding: '2px 6px', borderRadius: '4px' }}>
                    APPROVAL
                  </span>
                  <FileCheck size={13} color={C.secondaryContainer} />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface, marginBottom: '2px' }}>
                  Human Sign-off
                </div>
                <p style={{ fontSize: '11px', color: C.onSurfaceVariant, margin: '0 0 8px 0' }}>Review AI draft before release</p>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button style={{ backgroundColor: C.primaryContainer, color: '#ffffff', border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700 }}>Approve</button>
                  <button style={{ backgroundColor: C.surfaceContainer, color: C.onSurface, border: 'none', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 600 }}>Modify</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', fontSize: '11px', color: C.onSurfaceVariant }}>
            <div>✓ 5 Connected Nodes Operational • SOC 2 Compliant Sandbox</div>
            <div style={{ fontFamily: 'monospace' }}>Pipeline ID: #FP-ORCHESTRATE-9942</div>
          </div>
        </div>
      </section>

      {/* 2. UNIFIED TOPOLOGY ARCHITECTURE */}
      <section style={{ padding: '72px 32px', backgroundColor: C.surfaceContainerLow, borderTop: `1px solid ${C.borderLight}`, borderBottom: `1px solid ${C.borderLight}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', display: 'block', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Unified Operational Architecture
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 800, color: C.onSurface, marginBottom: '14px' }}>
              ANY PROCESS. ONE INTELLIGENT WORKFLOW.
            </h2>
            <p style={{ fontSize: '16px', color: C.onSurfaceVariant }}>
              Connect fragmented SaaS tooling into a unified operational spine. FlowPilot manages synchronization, data extraction, and verification across all active channels.
            </p>
          </div>

          <div style={{ backgroundColor: C.surfaceContainerLowest, borderRadius: '20px', padding: '32px', border: `1px solid ${C.borderLight}`, maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', alignItems: 'center' }}>
              {/* Inbound column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: C.surfaceContainer, border: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} color={C.primary} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>Gmail / Outlook</div>
                    <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Inbound lead &amp; ticket triage</div>
                  </div>
                </div>
                <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: C.surfaceContainer, border: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MessageSquare size={16} color="#166534" />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>WhatsApp &amp; SMS</div>
                    <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Real-time executive briefings</div>
                  </div>
                </div>
                <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: C.surfaceContainer, border: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CalendarIcon size={16} color={C.secondaryContainer} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>Calendar Feeds</div>
                    <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Automated scheduling &amp; conflict checks</div>
                  </div>
                </div>
              </div>

              {/* Center Core Engine */}
              <div style={{ padding: '28px 20px', borderRadius: '16px', backgroundColor: C.primaryContainer, color: '#ffffff', textAlign: 'center', border: '2px solid #8ad4cc' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px auto' }}>
                  <Layers size={22} color="#ffffff" />
                </div>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.onPrimaryContainer }}>
                  CORE ORCHESTRATOR
                </span>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 800, margin: '4px 0 6px 0' }}>
                  FlowPilot Execution Node
                </h3>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', margin: '0 0 14px 0', lineHeight: 1.5 }}>
                  Context extraction, conditional routing, and policy validation.
                </p>
                <span style={{ fontSize: '10px', backgroundColor: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: '9999px', fontFamily: 'monospace' }}>
                  99.99% Execution Uptime
                </span>
              </div>

              {/* Outbound column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: C.surfaceContainer, border: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Database size={16} color={C.primary} />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>CRM &amp; ERP Systems</div>
                    <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Real-time deal pipeline progression</div>
                  </div>
                </div>
                <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: C.surfaceContainer, border: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FileCheck size={16} color="#059669" />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>Databases &amp; Airtable</div>
                    <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Zero-latency record indexing</div>
                  </div>
                </div>
                <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: C.surfaceContainer, border: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Send size={16} color="#7c3aed" />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>Team Collaboration</div>
                    <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Approval triggers &amp; notifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STUDIO SIMULATOR (Library, Canvas, Inspector) */}
      <section id="builder-demo" style={{ padding: '72px 32px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '36px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: C.secondaryContainer, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Operational Studio
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '30px', fontWeight: 800, color: C.onSurface, margin: '0 0 10px 0' }}>
            Precision Studio: Library, Canvas &amp; Inspector
          </h2>
          <p style={{ fontSize: '15px', color: C.onSurfaceVariant, margin: 0 }}>
            Configure and deploy production-grade pipelines with structured parameters and strict fallback limits.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', borderRadius: '18px', border: `1px solid ${C.outlineVariant}`, overflow: 'hidden', boxShadow: '0 12px 28px rgba(0,0,0,0.04)' }}>
          {/* Library */}
          <div style={{ backgroundColor: C.surfaceContainerLow, padding: '20px', borderRight: `1px solid ${C.borderLight}` }}>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', fontWeight: 700, marginBottom: '14px' }}>
              Node Library
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { title: 'Event Trigger', desc: 'Webhook, Email, Schedule', icon: <Play size={13} color={C.secondaryContainer} /> },
                { title: 'Classifier & Reasoner', desc: 'Context & intent chain', icon: <Sliders size={13} color={C.primary} /> },
                { title: 'Approval Gate', desc: 'WhatsApp / Email authorization', icon: <ShieldCheck size={13} color="#b45309" /> },
                { title: 'Action Dispatcher', desc: 'Email send, CRM update, PDF', icon: <Send size={13} color="#2563eb" /> },
              ].map((n, i) => (
                <div key={i} style={{ backgroundColor: '#ffffff', padding: '10px 12px', borderRadius: '8px', border: `1px solid ${C.borderLight}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>{n.icon}</span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: C.onSurface }}>{n.title}</div>
                    <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>{n.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', padding: '12px', backgroundColor: C.surfaceContainer, borderRadius: '8px', fontSize: '11px' }}>
              <strong>Custom Code Hooks:</strong>
              <p style={{ margin: '2px 0 0 0', color: C.onSurfaceVariant }}>
                Embed custom JavaScript or Python scripts into any processing block.
              </p>
            </div>
          </div>

          {/* Canvas */}
          <div style={{ backgroundColor: '#ffffff', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', paddingBottom: '10px', borderBottom: `1px solid ${C.borderLight}`, marginBottom: '16px' }}>
              <span style={{ fontWeight: 700 }}>Active Protocol: Client Onboarding Flow</span>
              <span style={{ color: C.primary, fontWeight: 600 }}>Production Mode</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '340px', margin: '0 auto', width: '100%' }}>
              <div style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}` }}>
                <div style={{ fontSize: '12px', fontWeight: 700 }}>1. Signed Agreement Webhook</div>
                <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Fires upon contract completion</div>
              </div>
              <div style={{ textAlign: 'center', color: C.primary, fontSize: '11px' }}>↓</div>
              <div style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: '#ffffff', border: `2px solid ${C.primaryContainer}`, boxShadow: '0 4px 10px rgba(1,96,90,0.1)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: C.primary }}>2. FlowPilot Provisioner</div>
                <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>Initializes workspace folders &amp; billing record</div>
              </div>
              <div style={{ textAlign: 'center', color: C.secondaryContainer, fontSize: '11px' }}>↓</div>
              <div style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: C.surfaceContainerLow, border: `1px solid ${C.borderLight}` }}>
                <div style={{ fontSize: '12px', fontWeight: 700 }}>3. Executive Authorization Gate</div>
                <div style={{ fontSize: '10px', color: C.onSurfaceVariant }}>One-tap WhatsApp sign-off prior to welcome dispatch</div>
              </div>
            </div>
            <div style={{ fontSize: '10px', color: C.onSurfaceVariant, marginTop: '16px', textAlign: 'center' }}>
              Hold space to pan canvas • Select node to edit execution thresholds
            </div>
          </div>

          {/* Inspector */}
          <div style={{ backgroundColor: C.surfaceContainerLowest, padding: '20px', borderLeft: `1px solid ${C.borderLight}` }}>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', fontWeight: 700, marginBottom: '14px' }}>
              Node Inspector
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '11px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Inference Engine</label>
                <select style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: `1px solid ${C.borderLight}`, fontSize: '11px' }}>
                  <option>FlowPilot Operations Turbo v4.2</option>
                  <option>Claude 3.5 Sonnet (Enterprise Dedicated)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                  Confidence Threshold: {confidence}%
                </label>
                <input
                  type="range"
                  min="60"
                  max="99"
                  value={confidence}
                  onChange={(e) => setConfidence(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Fallback Action</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px', color: C.onSurfaceVariant }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <input type="radio" name="fallback" defaultChecked /> Route to Executive Approval
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <input type="radio" name="fallback" /> Hold &amp; Flag to Operations Queue
                  </label>
                </div>
              </div>

              <button
                onClick={() => setActionStatus('Parameters Saved ✓')}
                style={{
                  backgroundColor: C.primaryContainer,
                  color: '#ffffff',
                  border: 'none',
                  padding: '9px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: '6px',
                }}
              >
                Apply Node Parameters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section style={{ padding: '72px 32px', backgroundColor: C.surface }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '30px', fontWeight: 800, color: C.onSurface, margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                style={{
                  backgroundColor: C.surfaceContainerLowest,
                  padding: '20px 24px',
                  borderRadius: '14px',
                  border: `1px solid ${C.borderLight}`,
                  cursor: 'pointer',
                  boxShadow: openFaq === idx ? '0 4px 14px rgba(0,0,0,0.03)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 700, color: C.onSurface, margin: 0 }}>
                    {faq.q}
                  </h4>
                  {openFaq === idx ? <ChevronUp size={18} color={C.primary} /> : <ChevronDown size={18} color={C.primary} />}
                </div>
                {openFaq === idx && (
                  <p style={{ fontSize: '13px', color: C.onSurfaceVariant, lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section style={{ padding: '88px 32px', backgroundColor: C.primaryContainer, color: C.onPrimary, textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(30px, 4.4vw, 44px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            CUSTOMIZE YOUR OPERATIONS ENGINE.
          </h2>
          <p style={{ fontSize: '17px', color: C.onPrimaryContainer, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 36px auto' }}>
            Schedule a dedicated architecture session to build workflows tailored to your stack.
          </p>
          <Link
            to="/book-a-demo"
            style={{
              backgroundColor: C.secondaryContainer,
              color: '#ffffff',
              padding: '16px 36px',
              borderRadius: '10px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            }}
          >
            Planifier un rendez-vous
          </Link>
        </div>
      </section>
    </div>
  );
};
