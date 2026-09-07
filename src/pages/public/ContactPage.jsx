import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Headphones,
  ArrowRight,
} from 'lucide-react';

/* ── STITCH EXACT COLOR PALETTE ── */
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
function ContactHero() {
  return (
    <section className="px-6 md:px-16 pt-20 pb-16 max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border"
          style={{
            backgroundColor: C.surfaceCream,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: C.secondaryContainer }}
          />
          <span
            className="tracking-wide uppercase"
            style={{ ...T.labelSm, color: C.secondary }}
          >
            Meet the Team
          </span>
        </div>
        <h1
          className="tracking-tight uppercase"
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
          className="rounded-xl overflow-hidden shadow-lg border relative aspect-[4/3]"
          style={{
            backgroundColor: C.surfaceContainerLow,
            borderColor: `${C.outlineVariant}33`,
          }}
        >
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqNXdYshcx9G93PofQZHeApS9PzR-FY2p38efWsRsWyo_waUv84eDaxUpZVls2HeiwvdH0ffWIdM1usMSb69LPNp70Q5FEpYWOhnaQ_tN6X9lFDzfmbYYyQwnREWAxjfPwHPKL-6G7yvVq2CL8dOhJ0GZv7Ya0jq_UZ04Oj2tMOJHc48vpNLCq_r9rBhuAAhSIRbScrkUWHuERHLO1gGfgkSiK87NQuI-ctopjrM6EDLC3_yFqGUByAg"
            alt="A pristine, bright modern corporate collaborative workspace featuring diverse automation engineers and architects discussing workflows around a sleek oak table with high-end laptops, architectural sketches of operational flows, soft natural window light, professional light mode luxury SaaS aesthetic, deep teal and orange minimalist accents."
          />
        </div>
      </div>
    </section>
  );
}

/* ── 2. MISSION STATEMENT (Stitch 1:1) ── */
function MissionStatement() {
  return (
    <section
      className="py-20 px-6 md:px-16 border-y"
      style={{
        backgroundColor: C.surfaceCream,
        borderColor: `${C.outlineVariant}33`,
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

/* ── 3. FOUNDER SPOTLIGHT (Stitch 1:1) ── */
function FounderSpotlight() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div
        className="rounded-xl p-8 md:p-12 shadow-sm border flex flex-col lg:flex-row items-center gap-12"
        style={{
          backgroundColor: C.surfaceContainerLowest,
          borderColor: `${C.outlineVariant}4d`,
        }}
      >
        <div className="w-full lg:w-1/3 aspect-square rounded-lg overflow-hidden shadow-md shrink-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRq8BI9ReI2MkScrCWb4YXMsLXgoJWTSsPmkzkQ1WZaTi05UpbplGb7PA__Uvk82Es7Ef9DTuqWr2XpkeBcwoVqEsubVCxLqLpL_cA1bds-umx6offgLVCXRaheE9J-6gTmVOXe9HRYr1qgHTSE0wnDh_623cqzO6KzEDKaRVcXldUgwIDiMdHWOXWu8Qlu4LhGSgv4NkD1StxYYRrcVo-C3szTbKLxGM9MWR1Oa47eaoE7ny18SII-w"
            alt="Professional portrait of Alex Martin, Founder and CEO of FlowPilot AI, smiling confidently in a modern minimalist architectural office with warm lighting, wearing a smart casual navy blazer over a clean white shirt, exuding executive warmth and tech leadership."
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

/* ── 4. THE TEAM SECTION (Stitch 1:1) ── */
function TeamSection() {
  const team = [
    {
      name: 'Maya Dupont',
      role: 'Automation Architect',
      desc: 'Designing resilient, scalable multi-system integrations that bridge siloed corporate applications seamlessly.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCDnwvGrJp2kG5acgqRiHZc_x4QIrCj8WvOnxAQbavs-aa4Bq68XxGceUzMTevvjLFYH-FtgFoqkvCq5lUUmQZwwX4e8DdLxtCxKgHBpOFpZZpYeUSK520Ps4RetPXT0XHPPYoXYouhPOP_i-4z0Drci8yHhRWhAOgi4ojB_PrZJiHU_VfQfzkpdz4j-W3MjSmcyrJ4f-B40nTCuH1-GR2lJFsSbgh5jstx7JH4odQqHX6hjZ0N3eF5g',
      alt: 'Professional portrait of Maya Dupont, Automation Architect, in a brightly lit minimalist workspace, focused and professional, wearing contemporary attire with subtle earthy tones, clean aesthetic.',
    },
    {
      name: 'Jonas K.',
      role: 'Product & Experience',
      desc: 'Obsessed with crafting clean, high-end interfaces that make complex AI operations feel effortless and intuitive.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1zDxzv5Jfo4oownnZ_bU4LkdLKIPvZp1s8iHLcu1ebuZxrc9dLTy54R8YCZo7tqeeYMDaV5AdzScshr5ZsKRwElE7j3a_BCl8z_e-Avuw4a2_ngxBUtUg4HxjpUxJ9NNUph0p8T-kXvLJklqH3SGgo17QqdLIq-lDqrFoL8uhJVGRC35v0fRdONHccpk_sXu630gX_DUhlBdfmIATUCevyxJO-XmCYCbfyHaKFBcBk-HZ2kJG7Z939A',
      alt: 'Professional portrait of Jonas K., Product and Experience Lead, working in a modern design studio with natural lighting, approachable and sharp expression.',
    },
    {
      name: 'Leila N.',
      role: 'AI Systems',
      desc: 'Pioneering deterministic workflow models that guarantee safety, speed, and absolute accuracy in automated decisions.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIFZ8Qtkxqy8VNCKN0yO7yw43_VI0ArGneSaS0mtLro1GdqlFKK0Oucl8NgS0ELN2mFvD9tAvnz9kv7Ymci_BB7EMxV75WfFSMhn90_BYUX8CKoprjsFSQPHWDi0IoQlv31VFMe8VvgVspcnv3WM7Lb5v1uMFWtkb93gNGIzQy9L6cGCYTkttouyMye2Q-kdpNZcS_tq0ohrMjeEH45EA2ij4Hcm2eLGaOpeyMjo1srQ_vRs2k1yfFZQ',
      alt: 'Professional portrait of Leila N., AI Systems Engineer, in a high-tech clean office environment, confident posture and engaging gaze.',
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
            className="rounded-xl overflow-hidden shadow-sm border flex flex-col group hover:shadow-md transition-shadow"
            style={{
              backgroundColor: C.surfaceContainerLowest,
              borderColor: `${C.outlineVariant}4d`,
            }}
          >
            <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.surfaceContainerLow }}>
              <img
                src={member.img}
                alt={member.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 style={{ ...T.headlineSm, color: C.deepTealText }}>{member.name}</h3>
                <p
                  className="font-medium"
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

/* ── 5. CONTACT & INQUIRY WORKSPACE (Stitch 1:1) ── */
function ContactWorkspace() {
  return (
    <section
      className="py-24 px-6 md:px-16 border-t"
      style={{
        backgroundColor: C.surfaceCream,
        borderColor: `${C.outlineVariant}33`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Office & Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 style={{ ...T.headlineLg, color: C.deepTealText }}>
              Let's talk operations.
            </h2>
            <p style={{ ...T.bodyLg, color: C.onSurfaceVariant }}>
              Whether you're looking to automate core processes or explore enterprise-grade partnership, our team is ready to connect.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${C.primary}1a`, color: C.primary }}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Global Headquarters</h4>
                <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                  500 Howard Street, Suite 400<br />San Francisco, CA 94105
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${C.primary}1a`, color: C.primary }}
              >
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Secure Inquiries</h4>
                <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                  contact@flowpilot.ai<br />enterprise@flowpilot.ai
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${C.primary}1a`, color: C.primary }}
              >
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h4 style={{ ...T.headlineSm, color: C.deepTealText }}>Support Hours</h4>
                <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
                  Monday – Friday, 8:00 AM – 6:00 PM PST<br />
                  24/7 Priority Emergency Support for Enterprise Clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div
          className="lg:col-span-7 rounded-xl p-8 md:p-10 shadow-sm border"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="block"
                  style={{ ...T.labelMd, color: C.onSurface }}
                >
                  Your Name
                </label>
                <input
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: C.surfaceCream,
                    borderColor: `${C.outlineVariant}80`,
                    ...T.bodyMd,
                    color: C.onSurface,
                  }}
                  placeholder="Alex Johnson"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="block"
                  style={{ ...T.labelMd, color: C.onSurface }}
                >
                  Work Email
                </label>
                <input
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: C.surfaceCream,
                    borderColor: `${C.outlineVariant}80`,
                    ...T.bodyMd,
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
                  className="block"
                  style={{ ...T.labelMd, color: C.onSurface }}
                >
                  Company Size
                </label>
                <select
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: C.surfaceCream,
                    borderColor: `${C.outlineVariant}80`,
                    ...T.bodyMd,
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
                  className="block"
                  style={{ ...T.labelMd, color: C.onSurface }}
                >
                  Inquiry Type
                </label>
                <select
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: C.surfaceCream,
                    borderColor: `${C.outlineVariant}80`,
                    ...T.bodyMd,
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
                className="block"
                style={{ ...T.labelMd, color: C.onSurface }}
              >
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: C.surfaceCream,
                  borderColor: `${C.outlineVariant}80`,
                  ...T.bodyMd,
                  color: C.onSurface,
                }}
                placeholder="Tell us about your operational workflows and automation goals..."
              />
            </div>

            <button
              type="submit"
              className="w-full font-medium py-3.5 px-6 rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
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
        </div>
      </div>
    </section>
  );
}

/* ── 6. FAQ CONTACT BLOCK (Stitch 1:1) ── */
function ContactQuickAnswers() {
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
        <div
          className="rounded-xl p-6 border shadow-sm"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <h3 className="mb-2" style={{ ...T.headlineSm, color: C.deepTealText }}>
            How quickly can our team get onboarded with FlowPilot?
          </h3>
          <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
            Most core workflows are fully mapped and integrated within 5 to 10 business days, guided directly by our dedicated automation architects.
          </p>
        </div>

        <div
          className="rounded-xl p-6 border shadow-sm"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <h3 className="mb-2" style={{ ...T.headlineSm, color: C.deepTealText }}>
            Are enterprise security audits and custom SLAs available?
          </h3>
          <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
            Yes. We provide complete SOC 2 Type II compliance documentation, dedicated VPC options, and bespoke SLAs tailored to enterprise security requirements.
          </p>
        </div>

        <div
          className="rounded-xl p-6 border shadow-sm"
          style={{
            backgroundColor: C.surfaceContainerLowest,
            borderColor: `${C.outlineVariant}4d`,
          }}
        >
          <h3 className="mb-2" style={{ ...T.headlineSm, color: C.deepTealText }}>
            Can we schedule a live technical demonstration with an engineer?
          </h3>
          <p style={{ ...T.bodyMd, color: C.onSurfaceVariant }}>
            Absolutely. Submit an inquiry through our contact form selecting 'Enterprise Demo' and our team will coordinate a tailored session within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── 7. FINAL CTA (Stitch 1:1) ── */
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
          className="tracking-tight uppercase"
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium shadow-md hover:opacity-95 transition-opacity"
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
