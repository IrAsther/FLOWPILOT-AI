import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bolt,
  CheckCircle2,
  ChevronDown,
  Send,
  ShieldCheck,
  Sparkles,
  Bot,
  Mail,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";

import "../../styles/how-it-works.css";

const faqItems = [
  {
    question: "How secure is my company data?",
    answer:
      "FlowPilot is designed around strict security and privacy principles. Business data is protected during transmission and storage, and private business records are not used to train public AI models.",
  },
  {
    question: "Can I override automated actions?",
    answer:
      "Yes. Every workflow can include human-in-the-loop approval gates. Important actions can pause until you explicitly approve them through WhatsApp or the FlowPilot dashboard.",
  },
  {
    question: "How long does integration take?",
    answer:
      "Most standard integrations can be connected quickly through secure authentication. The exact implementation time depends on the systems, workflows, and approval rules your business needs.",
  },
];

function StepBadge({ children }) {
  return <div className="fp-step-badge">{children}</div>;
}

function EmailCard() {
  return (
    <div className="fp-product-card fp-email-card">
      <div className="fp-email-header">
        <div className="fp-email-person">
          <div className="fp-avatar">AC</div>

          <div>
            <h4>Acme Corp Procurement</h4>
            <p>To: alex@yourcompany.com</p>
          </div>
        </div>

        <span className="fp-time">10:42 AM</span>
      </div>

      <div className="fp-email-content">
        <h5>Urgent RFP: Q3 Logistics Automation Suite</h5>

        <p>
          Hello team, we are looking to onboard an intelligent workflow
          solution for our regional distribution centers. Please review the
          attached specs and provide an estimate by Friday...
        </p>
      </div>
    </div>
  );
}

function AIAnalysisCard() {
  return (
    <div className="fp-product-card fp-analysis-card">
      <div className="fp-analysis-header">
        <span className="fp-analysis-title">FlowPilot Neural Core</span>

        <span className="fp-priority">High Priority</span>
      </div>

      <div className="fp-analysis-list">
        <div className="fp-analysis-row">
          <span>Intent Recognized:</span>
          <strong>Enterprise RFP (Inbound)</strong>
        </div>

        <div className="fp-analysis-row">
          <span>Sentiment Score:</span>
          <strong className="fp-positive">Positive (0.92)</strong>
        </div>

        <div className="fp-analysis-row">
          <span>Required Action:</span>
          <strong className="fp-orange">
            Draft proposal &amp; alert Alex
          </strong>
        </div>
      </div>
    </div>
  );
}

function WhatsAppCard() {
  return (
    <div className="fp-whatsapp-wrapper">
      <div className="fp-phone">
        <div className="fp-phone-header">
          <span>WhatsApp</span>
          <span>10:43 AM</span>
        </div>

        <div className="fp-message">
          <p className="fp-bot-name">FlowPilot AI Bot</p>

          <p>
            New high-value RFP from Acme Corp detected. Estimated value:
            $45,000. Draft proposal ready for review.
          </p>

          <button type="button" className="fp-approve-button">
            Approve &amp; Send
          </button>
        </div>
      </div>
    </div>
  );
}

function DispatchCard() {
  return (
    <div className="fp-product-card fp-dispatch-card">
      <div className="fp-dispatch-heading">
        <div className="fp-icon-box fp-icon-teal">
          <Send size={18} />
        </div>

        <h4>Automated Dispatch &amp; Sync</h4>
      </div>

      <p>
        Proposal document transmitted securely via email with customized
        terms. QuickBooks ledger automatically updated with provisional
        pipeline entry.
      </p>

      <div className="fp-terminal">
        <div>[SUCCESS] Email dispatched to procurement@acmecorp.com</div>
        <div>[SUCCESS] Ledger ID #QB-8921 synchronized</div>
      </div>
    </div>
  );
}

function ArchitectureCard({
  icon,
  number,
  title,
  description,
  variant = "teal",
}) {
  return (
    <div className="fp-architecture-card">
      <div className={`fp-architecture-icon ${variant}`}>{icon}</div>

      <h3>
        {number}. {title}
      </h3>

      <p>{description}</p>
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`fp-faq-item ${isOpen ? "open" : ""}`}>
      <button
        type="button"
        className="fp-faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>

        <ChevronDown
          size={20}
          className={`fp-faq-chevron ${isOpen ? "rotate" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="fp-faq-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <div className="fp-how-page">
      {/* =========================================================
          HERO
      ========================================================= */}

      <main>
        <section className="fp-hero">
          <div className="fp-container fp-hero-inner">
            <div className="fp-hero-badge">
              <Bolt size={15} fill="currentColor" />
              <span>Transparent Operations Engine</span>
            </div>

            <h1>HOW FLOWPILOT MAKES YOUR BUSINESS RUN.</h1>

            <p>
              A simple, transparent look at how AI and human judgment work
              together to automate your core operations.
            </p>

            <div className="fp-hero-actions">
              <Link to="/contact" className="fp-button fp-button-primary">
                Plan a Demo
                <ArrowRight size={17} />
              </Link>

              <a
                href="#architecture"
                className="fp-button fp-button-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            WORKFLOW
        ========================================================= */}

        <section className="fp-workflow" id="workflow">
          <div className="fp-container">
            <div className="fp-section-heading">
              <h2>The 6-Step Automated Workflow</h2>

              <p>
                Watch how an incoming client request moves seamlessly through
                automated processing and executive sign-off.
              </p>
            </div>

            <div className="fp-workflow-list">
              {/* STEP 01 */}

              <div className="fp-workflow-row">
                <div className="fp-workflow-copy">
                  <StepBadge>STEP 01</StepBadge>

                  <h3>Email arrives in your inbox</h3>

                  <p>
                    A high-value enterprise client sends a comprehensive
                    Request For Proposal (RFP) directly to your corporate
                    inbox. FlowPilot instantly connects to your mail server
                    without altering your existing workflow.
                  </p>
                </div>

                <EmailCard />
              </div>

              {/* STEP 02 */}

              <div className="fp-workflow-row reverse">
                <AIAnalysisCard />

                <div className="fp-workflow-copy">
                  <StepBadge>STEP 02</StepBadge>

                  <h3>AI analyzes request parameters</h3>

                  <p>
                    FlowPilot reads the incoming payload, extracts key project
                    parameters, evaluates historical deal sizing, and
                    calculates optimal routing priority instantly.
                  </p>
                </div>
              </div>

              {/* STEP 03 & 04 */}

              <div className="fp-workflow-row">
                <div className="fp-workflow-copy">
                  <StepBadge>STEP 03 &amp; 04</StepBadge>

                  <h3>Instant notification &amp; human approval</h3>

                  <p>
                    An encrypted mobile alert reaches your WhatsApp or secure
                    app dashboard. With a single tap, you authorize the
                    proposed response strategy without opening complex
                    applications.
                  </p>
                </div>

                <WhatsAppCard />
              </div>

              {/* STEP 05 & 06 */}

              <div className="fp-workflow-row reverse">
                <DispatchCard />

                <div className="fp-workflow-copy">
                  <StepBadge>STEP 05 &amp; 06</StepBadge>

                  <h3>Autonomous execution &amp; ledger update</h3>

                  <p>
                    Upon your approval, FlowPilot generates the exact
                    deliverable files, sends the outgoing email confirmation,
                    and logs financial projections into your accounting suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ARCHITECTURE
        ========================================================= */}

        <section className="fp-architecture" id="architecture">
          <div className="fp-container">
            <div className="fp-section-heading">
              <h2>Real-Time Architecture Preview</h2>

              <p>
                Explore how triggers, custom AI actions, and human-in-the-loop
                validation gates connect together.
              </p>
            </div>

            <div className="fp-architecture-grid">
              <ArchitectureCard
                number="1"
                title="Triggers"
                variant="teal"
                icon={<Bolt size={19} />}
                description="Inbound emails, webhooks, form submissions, or scheduled cron jobs instantly activate the workflow sequence."
              />

              <ArchitectureCard
                number="2"
                title="AI Actions"
                variant="orange"
                icon={<Bot size={19} />}
                description="Large language models process data, draft documents, categorize entries, and query enterprise databases."
              />

              <ArchitectureCard
                number="3"
                title="Approval Gates"
                variant="brown"
                icon={<ShieldCheck size={19} />}
                description="High-stakes actions pause execution safely until authorized via mobile push, WhatsApp, or dashboard prompt."
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}

        <section className="fp-faq-section">
          <div className="fp-faq-container">
            <div className="fp-section-heading">
              <h2>Frequently Asked Questions</h2>

              <p>
                Everything you need to know about security, setup, and control.
              </p>
            </div>

            <div className="fp-faq-list">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={item.question}
                  item={item}
                  isOpen={openFaq === index}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="fp-final-cta">
          <div className="fp-final-cta-inner">
            <h2>READY TO MAKE YOUR BUSINESS FLOW?</h2>

            <p>
              Join high-performing operations teams saving 20+ hours every
              week with FlowPilot.
            </p>

            <Link to="/contact" className="fp-button fp-button-orange">
              Plan a Demo
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

// Named re-export for router: import { HowItWorksPage } from './HowItWorksPage'
export { HowItWorksPage };