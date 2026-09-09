/**
 * FlowPilot AI — Cinematic Smooth Scroll Utility
 * Provides controlled, camera-like, steady smooth scrolling between top and footer.
 *
 * Speeds:
 * - Single Click ('slow'):
 *   - Short distance (< 1,000px): ~1.5 - 2.4 seconds
 *   - Medium distance (1,000px - 3,500px): ~2.4 - 3.8 seconds
 *   - Long distance (3,500px+): ~3.8 - 5.0 seconds
 *   - Very gentle, steady continuous camera dolly motion, soft landing.
 *
 * - Double Click ('fast'):
 *   - Short distance (< 1,000px): ~0.7 - 0.9 seconds
 *   - Medium distance (1,000px - 3,500px): ~0.9 - 1.25 seconds
 *   - Long distance (3,500px+): ~1.25 - 1.5 seconds max
 *   - Rapid yet smooth, no jump, no bounce, no overshoot.
 *
 * Curve: Gentle easeInOutSine (purely monotonic, soft start and soft landing).
 * Interruption: Cancels immediately on wheel, touch/pointer outside nav buttons, or navigation keys.
 * Accessibility: Respects prefers-reduced-motion with immediate instant jump.
 */

// Gentle sine ease-in-out curve: keeps speed controlled and steady without mid-journey spikes
function easeInOutSine(t) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

let activeAnimationId = null;
let activeCleanup = null;

export function cancelCinematicScroll() {
  if (activeAnimationId) {
    cancelAnimationFrame(activeAnimationId);
    activeAnimationId = null;
  }
  if (activeCleanup) {
    activeCleanup();
    activeCleanup = null;
  }
}

/**
 * Perform a cinematic smooth scroll to a target vertical position
 * @param {number} targetY - Destination scrollY in pixels
 * @param {Object|string} [options={}] - Options object or speed string ('slow' | 'fast')
 * @param {'slow'|'fast'} [options.speed='slow'] - Scrolling speed profile
 * @param {number} [options.duration] - Optional override duration in ms
 */
export function cinematicScrollTo(targetY, options = {}) {
  // Cancel any currently running animation
  cancelCinematicScroll();

  const speed = typeof options === 'string' ? options : (options?.speed || 'slow');
  const customDuration = typeof options === 'object' && options?.duration ? options.duration : null;

  // Accessibility: Respect reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const maxScroll = Math.max(
    document.documentElement.scrollHeight - window.innerHeight,
    0
  );
  const clampedTargetY = Math.max(0, Math.min(targetY, maxScroll));

  if (prefersReducedMotion) {
    window.scrollTo({ top: clampedTargetY, left: 0, behavior: 'auto' });
    const dashContainer = document.querySelector('.dash-main-scroll');
    if (dashContainer) {
      dashContainer.scrollTo({ top: clampedTargetY, left: 0, behavior: 'auto' });
    }
    return;
  }

  const startY = window.scrollY || document.documentElement.scrollTop || 0;
  const distance = clampedTargetY - startY;
  const absDistance = Math.abs(distance);

  // If already at destination, exit
  if (absDistance < 2) {
    window.scrollTo(0, clampedTargetY);
    return;
  }

  // Also check if Dashboard inner scroll container is the primary scroller
  const dashContainer = document.querySelector('.dash-main-scroll');
  const dashStartY = dashContainer ? dashContainer.scrollTop : 0;
  const dashDistance = clampedTargetY - dashStartY;

  // Calculate adaptive duration based on speed mode and distance
  let duration;
  if (speed === 'fast') {
    // Fast mode for double-click: 0.7s - 1.5s
    if (absDistance < 1000) {
      duration = 700 + (absDistance / 1000) * 200; // 0.7s - 0.9s
    } else if (absDistance < 3500) {
      duration = 900 + ((absDistance - 1000) / 2500) * 350; // 0.9s - 1.25s
    } else {
      duration = Math.min(1500, 1250 + ((absDistance - 3500) / 4500) * 250); // 1.25s - 1.5s max
    }
  } else {
    // Slow mode for single-click (default):
    // Short distance (< 1,000px): ~1.5s - 2.4s
    // Medium distance (1,000px - 3,500px): ~2.4s - 3.8s
    // Long distance (3,500px+): ~3.8s - 5.0s
    if (absDistance < 1000) {
      duration = 1500 + (absDistance / 1000) * 900;
    } else if (absDistance < 3500) {
      duration = 2400 + ((absDistance - 1000) / 2500) * 1400;
    } else {
      duration = Math.min(5000, 3800 + ((absDistance - 3500) / 4500) * 1200);
    }
  }

  if (customDuration && typeof customDuration === 'number') {
    duration = customDuration;
  }

  const startTime = performance.now();

  // User manual interruption cleanup
  const interruptEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
  const handleInterrupt = (e) => {
    // Don't cancel if user clicked/tapped on the floating nav buttons (allows fast double-click)
    if (
      e.target &&
      (e.target.closest?.('.fp-back-to-top') ||
        e.target.closest?.('.fp-go-to-footer') ||
        e.target.closest?.('.fp-floating-nav-stack'))
    ) {
      return;
    }

    // If keyboard event, only cancel for navigation keys
    if (e.type === 'keydown') {
      const navKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      if (!navKeys.includes(e.key)) return;
    }
    cancelCinematicScroll();
  };

  const attachInterruptListeners = () => {
    interruptEvents.forEach((evt) => {
      window.addEventListener(evt, handleInterrupt, { passive: true });
    });
  };

  const removeInterruptListeners = () => {
    interruptEvents.forEach((evt) => {
      window.removeEventListener(evt, handleInterrupt);
    });
  };

  activeCleanup = removeInterruptListeners;
  attachInterruptListeners();

  // Animation frame loop
  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutSine(progress);

    // Update window scroll
    const currentY = startY + distance * easedProgress;
    window.scrollTo(0, currentY);

    // Update dashboard scroll if present
    if (dashContainer && Math.abs(dashDistance) > 2) {
      dashContainer.scrollTop = dashStartY + dashDistance * easedProgress;
    }

    if (progress < 1) {
      activeAnimationId = requestAnimationFrame(step);
    } else {
      // Exactly land on target
      window.scrollTo(0, clampedTargetY);
      if (dashContainer) {
        dashContainer.scrollTop = clampedTargetY;
      }
      cancelCinematicScroll();
    }
  }

  activeAnimationId = requestAnimationFrame(step);
}

/**
 * Smoothly scroll to the very top of the page (scrollY = 0)
 * @param {Object|string} [options={}] - Options object or speed string ('slow' | 'fast')
 */
export function cinematicScrollToTop(options = {}) {
  cinematicScrollTo(0, options);
}

/**
 * Smoothly scroll to the beginning/top of the page's footer element
 * @param {Object|string} [options={}] - Options object or speed string ('slow' | 'fast')
 */
export function cinematicScrollToFooter(options = {}) {
  const footer =
    document.getElementById('site-footer') || document.querySelector('footer');

  if (!footer) return;

  const footerRect = footer.getBoundingClientRect();
  const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  const targetY = Math.round(footerRect.top + currentScrollY);

  cinematicScrollTo(targetY, options);
}

/**
 * Helper to create a smart click handler detecting single click (slow) vs double click (fast).
 * @param {Function} scrollAction - Function receiving options { speed: 'slow' | 'fast' }
 * @param {number} [detectionWindowMs=280] - Double click detection window in ms (200-300ms)
 * @returns {Function} Event handler for onClick
 */
export function createSmartScrollHandler(scrollAction, detectionWindowMs = 280) {
  let lastClickTime = 0;

  return function handleSmartClick(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const now = performance.now();
    const delta = now - lastClickTime;

    if (delta > 0 && delta < detectionWindowMs) {
      // Double click detected within window -> fast scroll
      lastClickTime = 0;
      scrollAction({ speed: 'fast' });
    } else {
      // First click -> slow scroll
      lastClickTime = now;
      scrollAction({ speed: 'slow' });
    }
  };
}
