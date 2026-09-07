import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Mail,
  Sparkles,
  Workflow,
} from "lucide-react";

const C = {
  surface: "#FDF9F4",
  white: "#FFFFFF",
  low: "#F7F3EE",
  container: "#F1EDE8",

  ink: "#1C1C19",
  muted: "#3F4947",
  outline: "#6F7977",
  border: "rgba(190, 201, 198, 0.55)",

  teal: "#004642",
  primary: "#01605A",
  orange: "#FF862D",
  peach: "#FFD0A8",
};

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & AI Operations Lead",
    focus: "AI strategy · Workflow architecture · Operations",
    initials: "AM",
    featured: true,
  },
  {
    name: "Maya Laurent",
    role: "Automation Engineer",
    focus: "Integrations · Workflow systems · Reliability",
    initials: "ML",
  },
  {
    name: "Daniel Okoro",
    role: "AI Systems Engineer",
    focus: "Agents · Context systems · Process intelligence",
    initials: "DO",
  },
  {
    name: "Sofia Bennett",
    role: "Product & Experience",
    focus: "Product design · UX · Human-AI interaction",
    initials: "SB",
  },
];

export function TeamPage() {
  return (
    <main
      style={{
        background: C.surface,
        color: C.ink,
        overflow: "hidden",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "clamp(78px, 10vw, 135px) 24px 90px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: "52%",
            width: 520,
            height: 520,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.peach} 0%, rgba(255,208,168,0) 68%)`,
            opacity: 0.48,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              background: C.white,
              border: `1px solid ${C.border}`,
              borderRadius: 999,
              color: C.primary,
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 26,
            }}
          >
            <Sparkles size={14} />
            The FlowPilot team
          </div>

          <h1
            style={{
              margin: 0,
              maxWidth: 1020,
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "clamp(50px, 8.5vw, 100px)",
              lineHeight: 0.96,
              letterSpacing: "-0.06em",
              fontWeight: 800,
            }}
          >
            THE PEOPLE
            <br />
            BEHIND THE
            <span style={{ color: C.primary }}> AUTOMATION.</span>
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              marginTop: 36,
              maxWidth: 900,
            }}
            className="flowpilot-team-intro"
          >
            <p
              style={{
                margin: 0,
                color: C.muted,
                fontFamily: "Inter, sans-serif",
                fontSize: 17,
                lineHeight: 1.7,
              }}
            >
              FlowPilot brings together AI, automation, product thinking and
              operations expertise to turn repetitive business work into
              reliable systems.
            </p>

            <p
              style={{
                margin: 0,
                color: C.muted,
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.75,
              }}
            >
              We believe the best automation doesn&apos;t remove people from
              the process. It removes the unnecessary work around them.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER FEATURE */}
      <section style={{ padding: "20px 24px 110px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
            background: C.teal,
            color: C.white,
            borderRadius: 30,
            overflow: "hidden",
          }}
          className="flowpilot-founder"
        >
          {/* VISUAL */}
          <div
            style={{
              minHeight: 520,
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              padding: 34,
              background: `linear-gradient(145deg, ${C.primary} 0%, ${C.teal} 65%)`,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 36,
                right: 36,
                width: 180,
                height: 180,
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "50%",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 81,
                right: 81,
                width: 90,
                height: 90,
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: "50%",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 45,
                left: 45,
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.peach,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: C.orange,
                }}
              />
              Human-led automation
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 440,
                margin: "0 auto",
                borderRadius: 22,
                padding: 30,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 76,
                  borderRadius: 20,
                  background: C.orange,
                  color: C.white,
                  display: "grid",
                  placeItems: "center",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: 24,
                  fontWeight: 800,
                  marginBottom: 22,
                }}
              >
                AM
              </div>

              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  color: C.peach,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 800,
                  marginBottom: 7,
                }}
              >
                Founder
              </div>

              <div
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: 28,
                  fontWeight: 750,
                  letterSpacing: "-0.03em",
                }}
              >
                Alex Morgan
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div
            style={{
              padding: "clamp(30px, 5vw, 58px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                margin: "0 0 12px",
                color: C.peach,
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Why FlowPilot exists
            </p>

            <h2
              style={{
                margin: 0,
                maxWidth: 500,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "clamp(34px, 5vw, 54px)",
                lineHeight: 1.03,
                letterSpacing: "-0.045em",
              }}
            >
              AI should run the repetitive work.
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.75,
                maxWidth: 500,
                margin: "24px 0",
              }}
            >
              FlowPilot was built around a simple idea: small businesses
              shouldn&apos;t need a huge operations department to benefit from
              intelligent automation.
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.75,
                maxWidth: 500,
                margin: 0,
              }}
            >
              We design systems where AI handles repetitive coordination while
              people retain visibility, context and the final say.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "95px 24px 115px", background: C.low }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 30,
              alignItems: "flex-end",
              marginBottom: 48,
            }}
            className="flowpilot-team-heading"
          >
            <div>
              <p
                style={{
                  margin: "0 0 10px",
                  color: C.orange,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Small team. Serious systems.
              </p>

              <h2
                style={{
                  margin: 0,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "clamp(36px, 5vw, 62px)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                BUILT ACROSS
                <br />
                MULTIPLE DISCIPLINES.
              </h2>
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: 350,
                color: C.muted,
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              Great automation sits at the intersection of technology,
              operations and human experience.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 18,
            }}
            className="flowpilot-team-grid"
          >
            {team.map((member) => (
              <article
                key={member.name}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 24,
                  padding: 28,
                  minHeight: 245,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition:
                    "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                }}
                className="flowpilot-person-card"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 18,
                      background: member.featured ? C.orange : C.container,
                      color: member.featured ? C.white : C.teal,
                      display: "grid",
                      placeItems: "center",
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 800,
                      fontSize: 18,
                    }}
                  >
                    {member.initials}
                  </div>

                  <ArrowUpRight size={19} color={C.outline} />
                </div>

                <div style={{ marginTop: 35 }}>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: 23,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {member.name}
                  </h3>

                  <p
                    style={{
                      margin: "6px 0 10px",
                      color: C.primary,
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {member.role}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      color: C.muted,
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      lineHeight: 1.6,
                    }}
                  >
                    {member.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{ padding: "110px 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 680, marginBottom: 52 }}>
            <p
              style={{
                margin: "0 0 10px",
                color: C.orange,
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              How we work
            </p>

            <h2
              style={{
                margin: 0,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "clamp(38px, 6vw, 66px)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
              }}
            >
              HUMAN JUDGMENT.
              <br />
              MACHINE SPEED.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
            className="flowpilot-values-grid"
          >
            {[
              {
                icon: <Workflow size={22} />,
                title: "Start with the process",
                text: "We understand the real workflow before deciding what should be automated.",
              },
              {
                icon: <BrainCircuit size={22} />,
                title: "Design for intelligence",
                text: "AI is used where context, prioritization and decisions create real value.",
              },
              {
                icon: <CheckCircle2 size={22} />,
                title: "Keep people in control",
                text: "Important actions remain visible, reviewable and accountable.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ borderTop: `1px solid ${C.border}`, paddingTop: 25 }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 13,
                    background: C.low,
                    color: C.primary,
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 22,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    margin: "0 0 10px",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: 21,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: C.muted,
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ padding: "0 24px 100px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            border: `1px solid ${C.border}`,
            borderRadius: 28,
            background: C.white,
            padding: "clamp(28px, 5vw, 48px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
          }}
          className="flowpilot-team-contact"
        >
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div
              style={{
                width: 52,
                height: 52,
                flexShrink: 0,
                borderRadius: 15,
                background: C.peach,
                color: C.teal,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Mail size={22} />
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: 22,
                  letterSpacing: "-0.025em",
                }}
              >
                Want to work with us?
              </h3>

              <p
                style={{
                  margin: "5px 0 0",
                  color: C.muted,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                }}
              >
                Tell us what you&apos;re trying to automate.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              flexShrink: 0,
              padding: "13px 18px",
              background: C.teal,
              color: C.white,
              textDecoration: "none",
              borderRadius: 12,
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            Contact FlowPilot
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          padding: "105px 24px",
          background: C.teal,
          color: C.white,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p
            style={{
              margin: "0 0 14px",
              color: C.peach,
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
            }}
          >
            Meet your AI operations team
          </p>

          <h2
            style={{
              margin: 0,
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "clamp(40px, 7vw, 76px)",
              lineHeight: 0.98,
              letterSpacing: "-0.055em",
            }}
          >
            YOUR BUSINESS.
            <br />
            YOUR WORKFLOW.
            <br />
            <span style={{ color: C.peach }}>AUTOMATED.</span>
          </h2>

          <Link
            to="/book-a-demo"
            style={{
              marginTop: 32,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "15px 22px",
              background: C.orange,
              color: C.white,
              textDecoration: "none",
              borderRadius: 13,
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            Book a Demo
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <style>{`
        .flowpilot-person-card:hover {
          transform: translateY(-4px);
          border-color: rgba(1, 96, 90, 0.25) !important;
          box-shadow: 0 18px 45px rgba(0, 70, 66, 0.08);
        }

        @media (max-width: 900px) {
          .flowpilot-founder {
            grid-template-columns: 1fr !important;
          }
          .flowpilot-team-grid,
          .flowpilot-values-grid {
            grid-template-columns: 1fr !important;
          }
          .flowpilot-team-intro {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .flowpilot-team-heading {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }

        @media (max-width: 640px) {
          .flowpilot-team-contact {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .flowpilot-team-contact a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}

export default TeamPage;
