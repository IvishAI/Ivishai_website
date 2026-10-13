/* Cookie consent, for real this time.
 *
 * WHAT WAS HERE BEFORE.
 *
 * /cookie-preferences showed three toggles - Essential, Analytics,
 * Personalised - with Analytics and Personalised defaulting to OFF, and a
 * "Save Preferences" button. The button had **no onClick handler at all**. It
 * animated on hover and did nothing. The toggles were React state that
 * disappeared the moment you navigated away.
 *
 * Meanwhile public/index.html loaded the Meta Pixel and fired
 * fbq('track','PageView') immediately, and loaded GA4, on every page, for every
 * visitor, regardless. So a visitor could read a page about controlling their
 * data, switch analytics off, press Save, and be tracked exactly as before.
 *
 * That is a consent interface that collects a decision and ignores it. This
 * module makes the decision real: nothing beyond essential runs until someone
 * says yes, and saying no actually stops it.
 *
 * Consequence the owner should know about: analytics now only covers visitors
 * who opt in, so GA and Pixel numbers will be lower than before. That is what
 * the page has been promising all along.
 */

const KEY = "ivish.consent.v1";

export const DEFAULT_CONSENT = {
  essential: true, // cannot be switched off; it is what makes the site work
  analytics: false,
  personalised: false,
};

export function readConsent() {
  if (typeof window === "undefined") return { ...DEFAULT_CONSENT, decided: false };
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_CONSENT, decided: false };
    const saved = JSON.parse(raw);
    return {
      ...DEFAULT_CONSENT,
      analytics: !!saved.analytics,
      personalised: !!saved.personalised,
      decided: true,
      at: saved.at,
    };
  } catch (e) {
    /* private mode, blocked storage, corrupt value - treat as undecided, which
       means nothing optional runs. Failing closed is the only safe direction. */
    return { ...DEFAULT_CONSENT, decided: false };
  }
}

export function writeConsent(next) {
  const value = {
    analytics: !!next.analytics,
    personalised: !!next.personalised,
    at: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(value));
  } catch (e) {
    /* if we cannot remember the choice we must not act as if it were a yes */
  }
  applyConsent({ ...DEFAULT_CONSENT, ...value });
  return value;
}

/* Tell the tag platforms. GA4 understands Consent Mode; the Pixel is simply
   not loaded until it is allowed. */
export function applyConsent(consent) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.personalised ? "granted" : "denied",
      ad_user_data: consent.personalised ? "granted" : "denied",
      ad_personalization: consent.personalised ? "granted" : "denied",
    });
  }

  if (consent.analytics || consent.personalised) loadPixel();
}

let pixelLoaded = false;

/* The Meta Pixel used to be in index.html and ran for everyone. It is loaded
   here instead, only once, and only after someone has agreed to it. */
export function loadPixel() {
  if (pixelLoaded || typeof window === "undefined") return;
  if (window.fbq) {
    pixelLoaded = true;
    return;
  }
  pixelLoaded = true;

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */

  window.fbq("init", "767090679319818");
  window.fbq("track", "PageView");
}

/* Called once at startup. An undecided visitor is treated as a no. */
export function startConsent() {
  applyConsent(readConsent());
}
