import React, { useState, useEffect } from 'react';

/**
 * FlowPilot AI — Premium "AI Operations Orbital" Launch Screen
 *
 * Exact 4.0-second timeline:
 * 0.0s – 0.5s  : Splash fullscreen, logo + orbital ring fade in softly.
 * 0.5s – 3.2s  : Orbital ring rotates continuously and calmly. Orange accent
 *                travels along the path. Logo stays centered, stable, readable.
 * 3.2s – 3.6s  : Orbit slows (animation fill forwards at end). Logo becomes
 *                visually dominant.
 * 3.6s – 4.0s  : Full stage scales ~0.98. Splash fades out.
 * 4.0s          : Unmount, scroll restored.
 */
export function SplashScreen() {
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Begin gentle exit fade at 3.58s → completes at 4.0s
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3580);

    // Full unmount at exactly 4000ms
    const completeTimer = setTimeout(() => {
      setShouldRender(false);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    }, 4000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fp-splash-screen ${isExiting ? 'is-exiting' : ''}`}
      role="status"
      aria-label="FlowPilot AI is loading"
      aria-live="polite"
    >
      <style>{`
        /* ============================================================
           SPLASH SCREEN — OUTER SHELL
           ============================================================ */
        .fp-splash-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          background-color: #004642;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: all;
          user-select: none;
          -webkit-user-select: none;
          overflow: hidden;
          opacity: 1;
          visibility: visible;
          transition: opacity 0.42s cubic-bezier(0.16, 1, 0.3, 1),
                      visibility 0.42s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fp-splash-screen.is-exiting {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        /* Very subtle radial depth – stays entirely within brand palette */
        .fp-splash-screen::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 70% 70% at 50% 50%,
            rgba(1, 96, 90, 0.30) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* ============================================================
           MASTER COMPOSITION STAGE
           ============================================================ */
        .fp-splash-stage {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
          /* Subtle 0.98 scale-down triggered near exit (3.6s – 4.0s) */
          animation: fpStageExit 4s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
          will-change: transform;
        }

        @keyframes fpStageExit {
          0%, 88%  { transform: scale(1); }
          100%     { transform: scale(0.98); }
        }

        /* ============================================================
           ORBITAL SYSTEM — PERSPECTIVE CONTAINER
           Sits absolutely around the logo, does not move the logo.
           ============================================================ */
        .fp-splash-orbital-wrap {
          position: relative;
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Perspective applied here so child 3D transforms have depth */
          perspective: 900px;
          -webkit-perspective: 900px;
          perspective-origin: 50% 50%;
        }

        /* The logo box sits in the very centre, above the orbit */
        .fp-splash-logo-box {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Soft entrance */
          animation: fpLogoReveal 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity, transform;
        }

        @keyframes fpLogoReveal {
          0%    { opacity: 0; transform: scale(0.88); }
          14%   { opacity: 1; transform: scale(1);    } /* ~0.56s */
          100%  { opacity: 1; transform: scale(1);    }
        }

        /* Brand icon box */
        .fp-splash-icon-box {
          width: 76px;
          height: 76px;
          border-radius: 18px;
          background: linear-gradient(145deg, #01605A 0%, #004642 100%);
          border: 1px solid rgba(255, 134, 45, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 12px 32px rgba(0, 28, 26, 0.65),
            0 0 0 1px rgba(255, 255, 255, 0.04) inset;
        }

        /* ============================================================
           ORBITAL RING — 3D TILTED SVG PLANE
           The SVG sits in 3D space, tilted on X to look like an orbit.
           ============================================================ */
        .fp-splash-orbit-plane {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Tilt the entire plane ~60° on X to create the elliptical 3D look */
          transform: rotateX(62deg);
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          pointer-events: none;
        }

        /* The SVG ring itself rotates continuously inside the tilted plane */
        .fp-splash-orbit-svg {
          position: absolute;
          width: 160px;
          height: 160px;
          animation: fpOrbitSpin 5.6s linear infinite;
          will-change: transform;
          /* Entrance fade */
          animation: fpOrbitRevealSpin 4s linear forwards;
        }

        /*
          Combined keyframe: fade in during first 0.5s, then spin continuously.
          We approximate "spin from 0.5s to 4.0s" = 3.5s of 5.6s-period spinning
          inside a single 4s keyframe using linear.
        */
        @keyframes fpOrbitRevealSpin {
          0%    { opacity: 0;   transform: rotate(0deg);       }
          12.5% { opacity: 0.9; transform: rotate(22.5deg);   } /* 0.5s */
          100%  { opacity: 0.9; transform: rotate(247.5deg);  } /* 4.0s → full spin + decel handled by stage */
        }

        /* ============================================================
           WORDMARK — reveals at 3.1s
           ============================================================ */
        .fp-splash-wordmark {
          font-family: var(--font-display, 'Inter', sans-serif);
          font-weight: 800;
          color: #FFFFFF;
          font-size: 1.75rem;
          letter-spacing: -0.02em;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          animation: fpWordmarkReveal 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity, transform;
        }

        @keyframes fpWordmarkReveal {
          0%, 77%  { opacity: 0; transform: translateY(10px); letter-spacing: 0.05em; }
          92%      { opacity: 1; transform: translateY(0);    letter-spacing: -0.02em; }
          100%     { opacity: 1; transform: translateY(0);    letter-spacing: -0.02em; }
        }

        .fp-splash-wordmark-ai {
          color: #FF862D;
          margin-left: 7px;
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */
        @media (max-width: 480px) {
          .fp-splash-orbital-wrap {
            width: 132px;
            height: 132px;
            perspective: 700px;
            -webkit-perspective: 700px;
          }
          .fp-splash-icon-box {
            width: 62px;
            height: 62px;
            border-radius: 14px;
          }
          .fp-splash-orbit-svg {
            width: 132px;
            height: 132px;
          }
          .fp-splash-wordmark {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 360px) {
          .fp-splash-orbital-wrap {
            width: 116px;
            height: 116px;
            perspective: 600px;
            -webkit-perspective: 600px;
          }
          .fp-splash-icon-box {
            width: 54px;
            height: 54px;
            border-radius: 12px;
          }
          .fp-splash-orbit-svg {
            width: 116px;
            height: 116px;
          }
          .fp-splash-wordmark {
            font-size: 1.2rem;
          }
          .fp-splash-stage {
            gap: 20px;
          }
        }

        /* ============================================================
           ACCESSIBILITY — prefers-reduced-motion
           ============================================================ */
        @media (prefers-reduced-motion: reduce) {
          .fp-splash-screen {
            transition: opacity 0.2s ease !important;
          }
          .fp-splash-stage {
            animation: none !important;
            transform: none !important;
          }
          .fp-splash-logo-box {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .fp-splash-orbit-svg {
            animation: none !important;
            opacity: 0.5 !important;
          }
          .fp-splash-wordmark {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            letter-spacing: -0.02em !important;
          }
        }
      `}</style>

      {/* ——— MASTER STAGE ——— */}
      <div className="fp-splash-stage">

        {/* ——— ORBITAL SYSTEM ——— */}
        <div className="fp-splash-orbital-wrap">

          {/* The 3D-tilted orbit plane with the SVG ring inside */}
          <div className="fp-splash-orbit-plane">
            <svg
              className="fp-splash-orbit-svg"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/*
                BACKGROUND HALF of ring (behind the logo in 3D space).
                Lower opacity → creates depth illusion of going "behind".
              */}
              <circle
                cx="80"
                cy="80"
                r="68"
                stroke="rgba(1, 96, 90, 0.28)"
                strokeWidth="1.5"
                fill="none"
              />

              {/*
                MAIN TEAL RING ARC — foreground half (top portion of circle).
                Slightly higher opacity → appears "in front".
                stroke-dasharray creates the partial arc effect.
                Full circumference = 2π×68 ≈ 427.26
                We show ~60% of the ring as the "lit" foreground arc.
              */}
              <circle
                cx="80"
                cy="80"
                r="68"
                stroke="rgba(1, 96, 90, 0.72)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="256 171"
                strokeDashoffset="0"
                strokeLinecap="round"
              />

              {/*
                ORANGE ACCENT — a short arc segment representing the
                intelligent signal travelling along the orbital path.
                ~8% of circumference = ~34px arc length.
                Positioned 90° ahead of the main arc start.
              */}
              <circle
                cx="80"
                cy="80"
                r="68"
                stroke="#FF862D"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="34 393"
                strokeDashoffset="-192"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/*
                LEADING GLOW DOT — a single dot at the leading edge of
                the orange accent, creating the sense of a moving signal.
              */}
              <circle
                cx="80"
                cy="12"   /* top of circle path = 0° position */
                r="3.5"
                fill="#FF862D"
                opacity="0.85"
              />

              {/*
                SUBTLE WHITE HIGHLIGHT — small bright arc at the very
                front of the orbit (closest point to viewer in 3D tilt).
              */}
              <circle
                cx="80"
                cy="80"
                r="68"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="22 405"
                strokeDashoffset="-103"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* ——— LOGO BOX (always centred, above the orbit plane) ——— */}
          <div className="fp-splash-logo-box">
            <div className="fp-splash-icon-box">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF862D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '38px', height: '38px' }}
                aria-hidden="true"
              >
                <polygon
                  points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                  fill="#FF862D"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ——— WORDMARK — reveals at ~3.1s ——— */}
        <span className="fp-splash-wordmark">
          FlowPilot <span className="fp-splash-wordmark-ai">AI</span>
        </span>

      </div>
    </div>
  );
}

export default SplashScreen;
