import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

/**
 * Global BackToTop component for FlowPilot AI.
 * Shows an accessible, premium, minimal floating button when scrolled 400-600px down.
 * Smoothly scrolls back to the top of the page.
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const checkScroll = useCallback(() => {
    // Check standard window scroll
    const windowScroll = window.scrollY || document.documentElement.scrollTop || 0;
    // Check scrollable dashboard main container if present
    const dashContainer = document.querySelector('.dash-main-scroll');
    const dashScroll = dashContainer ? dashContainer.scrollTop : 0;

    const currentScroll = Math.max(windowScroll, dashScroll);
    setIsVisible(currentScroll > 450);
  }, []);

  useEffect(() => {
    // Reset state on route change
    setIsVisible(false);

    // Initial check in case navigated with preserved scroll
    checkScroll();

    window.addEventListener('scroll', checkScroll, { passive: true });
    // Capture scroll events from any nested scroll containers (e.g. Dashboard)
    document.addEventListener('scroll', checkScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener('scroll', checkScroll);
      document.removeEventListener('scroll', checkScroll, { capture: true });
    };
  }, [location.pathname, checkScroll]);

  const scrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = prefersReducedMotion ? 'auto' : 'smooth';

    // Scroll main window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior,
    });

    // Also scroll dashboard container if active
    const dashContainer = document.querySelector('.dash-main-scroll');
    if (dashContainer) {
      dashContainer.scrollTo({
        top: 0,
        left: 0,
        behavior,
      });
    }
  };

  return (
    <>
      <style>{`
        .fp-back-to-top {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 46px;
          height: 46px;
          border-radius: 8px;
          background-color: #004642;
          color: #FFFFFF;
          border: 1px solid rgba(254, 133, 44, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 900;
          box-shadow: 0 4px 14px rgba(0, 70, 66, 0.25);
          transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.2s ease,
                      border-color 0.2s ease,
                      box-shadow 0.2s ease;
          outline: none;
        }

        .fp-back-to-top.is-visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .fp-back-to-top.is-hidden {
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
        }

        .fp-back-to-top:hover {
          background-color: #01605A;
          border-color: #FE852C;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 70, 66, 0.35);
        }

        .fp-back-to-top:active {
          transform: translateY(0);
        }

        .fp-back-to-top:focus-visible {
          box-shadow: 0 0 0 3px rgba(254, 133, 44, 0.55);
        }

        @media (max-width: 768px) {
          .fp-back-to-top {
            right: 16px;
            bottom: 16px;
            width: 44px;
            height: 44px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fp-back-to-top {
            transition: opacity 0.1s ease !important;
            transform: none !important;
          }
        }
      `}</style>
      <button
        type="button"
        onClick={scrollToTop}
        className={`fp-back-to-top ${isVisible ? 'is-visible' : 'is-hidden'}`}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={20} strokeWidth={2.2} />
      </button>
    </>
  );
}

export default BackToTop;
