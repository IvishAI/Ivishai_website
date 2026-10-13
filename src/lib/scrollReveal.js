/* One observer for the whole site.
 *
 * Every element with .iv-reveal fades and rises as it is scrolled to. Doing it
 * here rather than per component means a page gets the behaviour by using the
 * element library, and fifty pages cannot drift apart on it.
 *
 * It is deliberately fail-safe. The CSS leaves .iv-reveal visible by default
 * and only hides it once this file adds .js-reveal to <html>; so if the
 * browser has no IntersectionObserver, if this script never runs, or if the
 * user prefers reduced motion, every element is simply there. Content is never
 * only visible after an animation has fired - that bug left nine sections
 * invisible on /sera, and it is not coming back.
 */

export function startScrollReveal() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (still || typeof IntersectionObserver === "undefined") return;

  // Only now is it safe to hide anything.
  document.documentElement.classList.add("js-reveal");

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("is-in");
        io.unobserve(e.target); // once is enough
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  const seen = new WeakSet();
  const watch = (root) => {
    const nodes = root.querySelectorAll ? root.querySelectorAll(".iv-reveal") : [];
    nodes.forEach((n, i) => {
      if (seen.has(n)) return;
      seen.add(n);
      /* stagger siblings a little, capped so a long list does not end up
         waiting a second and a half for its last row */
      if (!n.style.getPropertyValue("--d")) {
        n.style.setProperty("--d", `${Math.min(i, 6) * 55}ms`);
      }
      io.observe(n);
    });
  };

  watch(document);

  /* Routes are lazy, so most elements do not exist at first paint. */
  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      for (const node of m.addedNodes) {
        if (node.nodeType === 1) watch(node);
      }
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });

  /* A safety net: anything still unrevealed after four seconds is shown. If an
     observer callback is ever missed, the visitor gets the content, not a gap. */
  window.setTimeout(() => {
    document.querySelectorAll(".iv-reveal:not(.is-in)").forEach((n) => {
      const r = n.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.5) n.classList.add("is-in");
    });
  }, 4000);
}
