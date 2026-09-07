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
} from 'lucide-react';

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
function ContactHero() {
  return (
    <section className="px-6 md:px-16 pt-20 pb-16 max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border"
          style={{
            backgroundColor: C.surfaceCream,
            borderColor: `${C.outlineVariant}50`,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: C.secondaryContainer }}
          />
          <span
            className="tracking-wide uppercase font-semibold"
            style={{ ...T.labelSm, color: C.secondary }}
          >
            Meet the Team
          </span>
        </div>
        <h1
          className="tracking-tight"
          style={{ ...T.headlineXl, color: C.deepTealText }}
        >
          BUILT BY OPERATORS. FOR OPERATORS.
        </h1>
        <p
          className="max-w-2xl leading-relaxed"
          style={{ ...T.bodyLg, color: C.onSurfaceVariant }}
        >
          We're a dedicated team of automation architects, engineers, and designers helping modern businesses run without friction.
        </p>
      </div>

      <div className="w-full md:w-1/2">
        <div
          className="rounded-2xl overflow-hidden shadow-lg border relative aspect-[4/3]"
          style={{
            backgroundColor: C.surfaceContainerLow,
            borderColor: `${C.outlineVariant}40`,
          }}
        >
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqNXdYshcx9G93PofQZHeApS9PzR-FY2p38efWsRsWyo_waUv84eDaxUpZVls2HeiwvdH0ffWIdM1usMSb69LPNp70Q5FEpYWOhnaQ_tN6X9lFDzfmbYYyQwnREWAxjfPwHPKL-6G7yvVq2CL8dOhJ0GZv7Ya0jq_UZ04Oj2tMOJHc48vpNLCq_r9rBhuAAhSIRbScrkUWHuERHLO1gGfgkSiK87NQuI-ctopjrM6EDLC3_yFqGUByAg"
            alt="Pristine, bright modern corporate collaborative workspace with automation architects discussing workflows"
          />
        </div>
      </div>
    </section>
  );
}

/* ── 2. MISSION STATEMENT ── */
function MissionStatement() {
  return (
    <section
      className="py-20 px-6 md:px-16 border-y"
      style={{
        backgroundColor: C.surfaceCream,
        borderColor: `${C.outlineVariant}40`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 style={{ ...T.headlineLg, color: C.deepTealText }}>
          Human-Centric AI Operations
        </h2>
        <p
          className="leading-relaxed"
          style={{ ...T.bodyLg, color: C.onSurfaceVariant }}
        >
          Technology should amplify human capability, not complicate it. We founded FlowPilot because we experienced firsthand the friction of disconnected operational tools. Our mission is to build intelligent systems that respect your team's expertise, eliminate tedious busywork, and establish total clarity across every department.
        </p>
      </div>
    </section>
  );
}

/* ── 3. FOUNDER SPOTLIGHT ── */
function FounderSpotlight() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div
        className="rounded-2xl p-8 md:p-12 shadow-sm border flex flex-col lg:flex-row items-center gap-12"
        style={{
          backgroundColor: C.surfaceContainerLowest,
          borderColor: `${C.outlineVariant}50`,
        }}
      >
        <div className="w-full lg:w-1/3 aspect-square rounded-xl overflow-hidden shadow-md shrink-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRq8BI9ReI2MkScrCWb4YXMsLXgoJWTSsPmkzkQ1WZaTi05UpbplGb7PA__Uvk82Es7Ef9DTuqWr2XpkeBcwoVqEsubVCxLqLpL_cA1bds-umx6offgLVCXRaheE9J-6gTmVOXe9HRYr1qgHTSE0wnDh_623cqzO6KzEDKaRVcXldUgwIDiMdHWOXWu8Qlu4LhGSgv4NkD1StxYYRrcVo-C3szTbKLxGM9MWR1Oa47eaoE7ny18SII-w"
            alt="Alex Martin, Founder and CEO of FlowPilot AI"
          />
        </div>
        <div className="w-full lg:w-2/3 space-y-6">
          <div className="space-y-1">
            <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>Alex Martin</h3>
            <p
              className="font-medium"
              style={{ ...T.bodyMd, color: C.secondary }}
            >
              Founder &amp; CEO
            </p>
          </div>
          <blockquote
            className="italic pl-4 py-1"
            style={{
              ...T.bodyLg,
              color: C.onSurface,
              borderLeft: `4px solid ${C.secondaryContainer}`,
            }}
          >
            "We didn't set out to build another noisy software dashboard. We built FlowPilot to act as a silent, reliable operational backbone—allowing teams to focus entirely on creative problem solving and strategic growth."
          </blockquote>
          <p
            className="leading-relaxed"
            style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
          >
            Prior to founding FlowPilot, Alex spent over a decade leading global operations and enterprise transformation initiatives at high-growth technology companies.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── 4. THE TEAM SECTION ── */
function TeamSection() {
  const team = [
    {
      name: 'Maya Dupont',
      role: 'Automation Architect',
      desc: 'Designing resilient, scalable multi-system integrations that bridge siloed corporate applications seamlessly.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCDnwvGrJp2kG5acgqRiHZc_x4QIrCj8WvOnxAQbavs-aa4Bq68XxGceUzMTevvjLFYH-FtgFoqkvCq5lUUmQZwwX4e8DdLxtCxKgHBpOFpZZpYeUSK520Ps4RetPXT0XHPPYoXYouhPOP_i-4z0Drci8yHhRWhAOgi4ojB_PrZJiHU_VfQfzkpdz4j-W3MjSmcyrJ4f-B40nTCuH1-GR2lJFsSbgh5jstx7JH4odQqHX6hjZ0N3eF5g',
    },
    {
      name: 'Jonas K.',
      role: 'Product & Experience',
      desc: 'Obsessed with crafting clean, high-end interfaces that make complex AI operations feel effortless and intuitive.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1zDxzv5Jfo4oownnZ_bU4LkdLKIPvZp1s8iHLcu1ebuZxrc9dLTy54R8YCZo7tqeeYMDaV5AdzScshr5ZsKRwElE7j3a_BCl8z_e-Avuw4a2_ngxBUtUg4HxjpUxJ9NNUph0p8T-kXvLJklqH3SGgo17QqdLIq-lDqrFoL8uhJVGRC35v0fRdONHccpk_sXu630gX_DUhlBdfmIATUCevyxJO-XmCYCbfyHaKFBcBk-HZ2kJG7Z939A',
    },
    {
      name: 'Leila N.',
      role: 'AI Systems',
      desc: 'Pioneering deterministic workflow models that guarantee safety, speed, and absolute accuracy in automated decisions.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIFZ8Qtkxqy8VNCKN0yO7yw43_VI0ArGneSaS0mtLro1GdqlFKK0Oucl8NgS0ELN2mFvD9tAvnz9kv7Ymci_BB7EMxV75WfFSMhn90_BYUX8CKoprjsFSQPHWDi0IoQlv31VFMe8VvgVspcnv3WM7Lb5v1uMFWtkb93gNGIzQy9L6cGCYTkttouyMye2Q-kdpNZcS_tq0ohrMjeEH45EA2ij4Hcm2eLGaOpeyMjo1srQ_vRs2k1yfFZQ',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 style={{ ...T.headlineLg, color: C.deepTealText }}>
          Leadership &amp; Engineering
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
          The minds architecting the future of enterprise process automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-sm border flex flex-col group hover:shadow-md transition-shadow"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}50`,
            }}
          >
            <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.surfaceContainerLow }}>
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 style={{ ...T.headlineSm, color: C.deepTealText }}>{member.name}</h3>
                <p
                  className="font-medium mt-0.5"
                  style={{ ...T.bodySm, color: C.secondary }}
                >
                  {member.role}
                </p>
                <p
                  className="mt-3 leading-relaxed"
                  style={{ ...T.bodySm, color: C.onSurfaceVariant }}
                >
                  {member.desc}
                </p>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="py-24 px-6 md:px-16 border-t"
      style={{
        backgroundColor: C.surfaceCream,
        borderColor: `${C.outlineVariant}40`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Office & Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 style={{ ...T.headlineLg, color: C.deepTealText }}>
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
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${C.primary}18`, color: C.primary }}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Global Headquarters</h4>
                <p className="mt-1" style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                  500 Howard Street, Suite 400<br />San Francisco, CA 94105
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${C.primary}18`, color: C.primary }}
              >
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Secure Inquiries</h4>
                <p className="mt-1" style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                  contact@flowpilot.ai<br />enterprise@flowpilot.ai
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${C.primary}18`, color: C.primary }}
              >
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Support Hours</h4>
                <p className="mt-1" style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                  Monday – Friday, 8:00 AM – 6:00 PM PST<br />24/7 Priority Emergency Support for Enterprise Clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div
          className="lg:col-span-7 rounded-2xl p-8 md:p-10 shadow-sm border"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}50`,
          }}
        >
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: '#DEF7EC', color: '#03543F' }}
              >
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 style={{ ...T.headlineMd, color: C.deepTealText }}>
                Inquiry Received
              </h3>
              <p style={{ ...T.bodyMd, color: C.onSurfaceVariant, maxWidth: '400px', margin: '0 auto' }}>
                Thank you for reaching out. An automation architect will review your message and respond within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-lg text-sm font-medium border"
                style={{ borderColor: `${C.outlineVariant}80`, color: C.onSurface }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="block font-medium"
                    style={{ ...T.labelMd, color: C.onSurface }}
                  >
                    Your Name
                  </label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 border"
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
                    className="block font-medium"
                    style={{ ...T.labelMd, color: C.onSurface }}
                  >
                    Work Email
                  </label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 border"
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
                    className="block font-medium"
                    style={{ ...T.labelMd, color: C.onSurface }}
                  >
                    Company Size
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 border"
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
                    className="block font-medium"
                    style={{ ...T.labelMd, color: C.onSurface }}
                  >
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 border"
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
                  className="block font-medium"
                  style={{ ...T.labelMd, color: C.onSurface }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 border"
                  style={{
                    backgroundColor: C.surfaceCream,
                    borderColor: `${C.outlineVariant}60`,
                    color: C.onSurface,
                  }}
                  placeholder="Tell us about your operational workflows and automation goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full font-medium py-3.5 px-6 rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                style={{
                  backgroundColor: C.secondaryContainer,
                  color: C.onSecondary,
                  ...T.bodyMd,
                }}
              >
                <span>Send Message</span>
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
      a: 'Most core workflows are fully mapped and integrated within 5 to 10 business days, guided directly by our dedicated automation architects.',
    },
    {
      q: 'Are enterprise security audits and custom SLAs available?',
      a: 'Yes. We provide complete SOC 2 Type II compliance documentation, dedicated VPC options, and bespoke SLAs tailored to enterprise security requirements.',
    },
    {
      q: 'Can we schedule a live technical demonstration with an engineer?',
      a: 'Absolutely. Submit an inquiry through our contact form selecting \'Enterprise Demo\' and our team will coordinate a tailored session within 24 hours.',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h2 style={{ ...T.headlineLg, color: C.deepTealText }}>
          Quick Answers
        </h2>
        <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
          Common questions regarding onboarding, security, and sales.
        </p>
      </div>

      <div className="space-y-4">
        {answers.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-6 border shadow-sm"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}50`,
            }}
          >
            <h3 className="mb-2" style={{ ...T.headlineSm, color: C.deepTealText }}>
              {item.q}
            </h3>
            <p
              className="leading-relaxed"
              style={{ ...T.bodyMd, color: C.onSurfaceVariant }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── 7. FINAL CTA ── */
function ContactCta() {
  return (
    <section
      className="py-24 px-6 md:px-16 text-center"
      style={{
        backgroundColor: C.primary,
        color: C.onPrimary,
      }}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <h2
          className="tracking-tight"
          style={{ ...T.headlineXl, color: '#ffffff' }}
        >
          READY TO PUT YOUR BUSINESS IN FLOW?
        </h2>
        <p
          className="max-w-xl mx-auto"
          style={{ ...T.bodyLg, color: C.primaryFixedDim }}
        >
          Join high-performing operations teams scaling effortlessly with intelligent automation.
        </p>
        <div className="pt-2">
          <Link
            to="/book-a-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium shadow-md hover:opacity-95 transition-opacity"
            style={{
              backgroundColor: C.secondaryContainer,
              color: C.onSecondary,
              ...T.bodyMd,
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

/* ── MAIN PAGE COMPONENT ── */
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
