import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { cinematicScrollToFooter } from '../../utils/cinematicScroll';

/**
 * Global GoToFooter component for FlowPilot AI.
 * Shows an accessible, premium, minimal floating button when scrolled down,
 * Single click: very slow, continuous cinematic scroll to the footer.
 * Double click: fast, smooth scroll to the footer.
 * Automatically hides when already near the footer or on pages without a footer.
 */
export function GoToFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const location = useLocation();
  const lastClickRef = useRef(0);

  const checkVisibility = useCallback(() => {
    // Locate the footer target
    const footer = document.getElementById('site-footer') || document.querySelector('footer');
    if (!footer) {
      setIsVisible(false);
      return;
    }

    const windowScroll = window.scrollY || document.documentElement.scrollTop || 0;
    // Don't show near top (< 400px)
    if (windowScroll < 400) {
      setIsVisible(false);
      return;
    }

    // Check distance to top of footer relative to viewport
    const footerRect = footer.getBoundingClientRect();
    const distToFooter = footerRect.top - window.innerHeight;

    // If remaining scroll to footer is less than 320px, user is already at/near the footer
    if (distToFooter <= 320) {
      setIsVisible(false);
      return;
    }

    // Otherwise sufficiently far from footer on a scrolled page
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Reset state on route change
    setIsVisible(false);
    setShouldRender(false);

    // Initial check after new page renders
    const initialTimer = setTimeout(checkVisibility, 100);

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    document.addEventListener('scroll', checkVisibility, { passive: true, capture: true });

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      document.removeEventListener('scroll', checkVisibility, { capture: true });
    };
  }, [location.pathname, checkVisibility]);

  // Handle smooth enter/exit unmounting
  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const exitTimer = setTimeout(() => setShouldRender(false), 260);
      return () => clearTimeout(exitTimer);
    }
  }, [isVisible]);

  // Smart click handler: single click (slow) vs double click within 280ms (fast)
  const handleClick = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const now = performance.now();
    const delta = now - lastClickRef.current;

    if (delta > 0 && delta < 280) {
      // Double click: cancel slow and start fast scroll
      lastClickRef.current = 0;
      cinematicScrollToFooter({ speed: 'fast' });
    } else {
      // Single click: initiate slow cinematic scroll
      lastClickRef.current = now;
      cinematicScrollToFooter({ speed: 'slow' });
    }
  };

  if (!shouldRender) return null;

  return (
    <>
      <style>{`
        .fp-go-to-footer {
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
          box-shadow: 0 4px 14px rgba(0, 70, 66, 0.25);
          transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.2s ease,
                      border-color 0.2s ease,
                      box-shadow 0.2s ease;
          outline: none;
          pointer-events: auto;
          touch-action: manipulation;
          user-select: none;
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .fp-go-to-footer.is-visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .fp-go-to-footer.is-hidden {
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
        }

        .fp-go-to-footer:hover {
          background-color: #01605A;
          border-color: #FE852C;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 70, 66, 0.35);
        }

        .fp-go-to-footer:active {
          transform: translateY(0);
        }

        .fp-go-to-footer:focus-visible {
          box-shadow: 0 0 0 3px rgba(254, 133, 44, 0.55);
        }

        @media (max-width: 768px) {
          .fp-go-to-footer {
            width: 44px;
            height: 44px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fp-go-to-footer {
            transition: opacity 0.1s ease !important;
            transform: none !important;
          }
        }
      `}</style>
      <button
        type="button"
        onClick={handleClick}
        onDoubleClick={(e) => e.preventDefault()}
        className={`fp-go-to-footer ${isVisible ? 'is-visible' : 'is-hidden'}`}
        aria-label="Go to footer"
        title="Go to footer (double-click for fast scroll)"
      >
        <ArrowDown size={20} strokeWidth={2.2} />
      </button>
    </>
  );
}

export default GoToFooter;
