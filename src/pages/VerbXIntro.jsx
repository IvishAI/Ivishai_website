// src/screens/VerbXIntro.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import * as flubber from "flubber";
import { Howl } from "howler";
import { leftPath, rightPath, combinedPath } from "../utils/path";

export default function VerbXIntro({ redirectTo = "/products", showOncePerSession = true }) {
  const svgRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const mergedRef = useRef(null);
  const trailLeftRef = useRef(null);
  const trailRightRef = useRef(null);
  const pulseRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const tlRef = useRef(null);
  const soundsRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // Skip animation and redirect quickly
      if (showOncePerSession) sessionStorage.setItem("verbx_intro_shown_v1", "1");
      setTimeout(() => (window.location.href = redirectTo), 300);
      return;
    }

    // If already shown this session, skip
    if (showOncePerSession && sessionStorage.getItem("verbx_intro_shown_v1")) {
      window.location.href = redirectTo;
      return;
    }

    // mark shown
    try {
      if (showOncePerSession) sessionStorage.setItem("verbx_intro_shown_v1", "1");
    } catch (e) {}

    // Load sounds (files placed in public/sounds)
    const soundSlide = new Howl({ src: ["/sounds/air-woosh.wav"], volume: 0.7 });
    const soundMerge = new Howl({ src: ["/sounds/sparkle-whoosh.wav"], volume: 0.85 });
    const soundPop = new Howl({ src: ["/sounds/pop.wav"], volume: 1.0 });
    soundsRef.current = { soundSlide, soundMerge, soundPop };

    // short refs
    const left = leftRef.current;
    const right = rightRef.current;
    const merged = mergedRef.current;
    const trailL = trailLeftRef.current;
    const trailR = trailRightRef.current;
    const pulse = pulseRef.current;
    const txt = textRef.current;
    const logo = logoRef.current;

    // helper: safe getTotalLength for paths that might be shapes
    const safeLength = (el) => {
      try {
        return el.getTotalLength();
      } catch (e) {
        return 400; // fallback
      }
    };

    // Prepare stroke-dash for draw animation
    const prepDraw = (el) => {
      const len = safeLength(el);
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
    };

    // set initial visual styles
    if (trailL) {
      trailL.style.opacity = "0";
      trailL.style.filter = "blur(6px)";
    }
    if (trailR) {
      trailR.style.opacity = "0";
      trailR.style.filter = "blur(6px)";
    }

    // prepare main strokes
    prepDraw(left);
    prepDraw(right);

    // create timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        // ensure final pause briefly then navigate
        setTimeout(() => (window.location.href = redirectTo), 600);
      },
    });
    tlRef.current = tl;

    // ===== TIMELINE =====
    // 0. Play slide whoosh and draw left/right over 1.8s (0 - 1.8)
    tl.add(() => soundSlide.play(), 0);
    tl.to(left, { strokeDashoffset: 0, duration: 1.6 }, 0);
    tl.to(right, { strokeDashoffset: 0, duration: 1.6 }, 0);
    // show trails slightly as waves draw
    tl.to(trailL, { opacity: 0.55, duration: 0.9 }, 0.15);
    tl.to(trailR, { opacity: 0.55, duration: 0.9 }, 0.15);

    // 0.3 - 1.2: move waves toward center (subtle)
    tl.to(left, { x: 42, duration: 0.9 }, 0.3);
    tl.to(right, { x: -42, duration: 0.9 }, 0.3);

    // 1.8 - 4.8: morph into combined path (duration ~3s for smooth effect)
    tl.add(() => {
      soundMerge.play();
      // create interpolators with flubber (handles resampling)
      const interpL = flubber.interpolate(left.getAttribute("d") || leftPath, combinedPath, { maxSegmentLength: 4 });
      const interpR = flubber.interpolate(right.getAttribute("d") || rightPath, combinedPath, { maxSegmentLength: 4 });

      // animate using gsap's onUpdate loop
      gsap.to({ t: 0 }, {
        t: 1,
        duration: 3.0,
        ease: "power2.inOut",
        onUpdate() {
          const t = this.targets()[0].t;
          try {
            left.setAttribute("d", interpL(t));
            right.setAttribute("d", interpR(t));
            // fade trails out as morph progresses
            const opacity = 0.55 * (1 - t);
            if (trailL) trailL.style.opacity = String(opacity);
            if (trailR) trailR.style.opacity = String(opacity);
          } catch (e) {}
        }
      });

      // pulse ripple when morph reach ~0.7
      gsap.to(pulse, { scale: 1.9, opacity: 0.85, duration: 0.36, ease: "power3.out", delay: 2.0 });
      gsap.to(pulse, { scale: 3.2, opacity: 0, duration: 0.9, ease: "power2.out", delay: 2.36 });
    }, 1.8);

    // 4.9: show crisp merged stroke (draw it)
    tl.add(() => {
      try {
        merged.setAttribute("d", combinedPath);
        const len = safeLength(merged);
        merged.style.strokeDasharray = len;
        merged.style.strokeDashoffset = len;
        gsap.to(merged, { strokeDashoffset: 0, duration: 0.9, ease: "power3.out" });
      } catch (e) {}
    }, 4.9);

    // 5.2: pop sound and show logo/text
    tl.add(() => soundsRef.current.soundPop.play(), 5.2);
    tl.to([txt, logo], { opacity: 1, y: -6, duration: 0.7, ease: "back.out(1.2)" }, 5.2);

    // keep screen visible for ~6s total then redirect (handled in onComplete)
    // ====================

    // cleanup on unmount
    return () => {
      try {
        tl.kill();
      } catch (e) {}
      try {
        soundSlide.unload();
        soundMerge.unload();
        soundPop.unload();
      } catch (e) {}
    };
  }, [redirectTo, showOncePerSession]);

  return (
    <div style={{ width: "100%", height: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <svg ref={svgRef} viewBox="0 0 760 420" style={{ width: "85%", maxWidth: 1000, height: "auto" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* blurred trails */}
        <path ref={trailLeftRef} d={leftPath} fill="none" stroke="#FFA364" strokeWidth="18" strokeLinecap="round" opacity="0.0" />
        <path ref={trailRightRef} d={rightPath} fill="none" stroke="#BFC5F5" strokeWidth="18" strokeLinecap="round" opacity="0.0" />

        {/* main strokes */}
        <path ref={leftRef} d={leftPath} fill="none" stroke="#FFA364" strokeWidth="10" strokeLinecap="round" style={{ filter: "url(#glow)" }} />
        <path ref={rightRef} d={rightPath} fill="none" stroke="#BFC5F5" strokeWidth="10" strokeLinecap="round" style={{ filter: "url(#glow)" }} />

        {/* final merged crisp stroke (initially empty) */}
        <path ref={mergedRef} d="" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" style={{ filter: "url(#glow)", opacity: 1 }} />

        {/* pulse ripple circle (center area) */}
        <circle ref={pulseRef} cx="380" cy="210" r="28" stroke="#FFD59A" strokeWidth="3" fill="none" style={{ opacity: 0, transformOrigin: "380px 210px" }} />
      </svg>

      {/* Logo & text overlay (center) */}
      <div style={{ position: "absolute", left: 0, right: 0, top: "58%", display: "flex", justifyContent: "center", pointerEvents: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div ref={logoRef} style={{ width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0 }}>
            {/* optional mini logo circle with tiny wave */}
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="28" fill="#0b0b0c" opacity="0.6" />
              <path d={combinedPath} transform="translate(-8,-24) scale(0.18)" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <h1 ref={textRef} style={{ margin: 0, color: "white", fontSize: 40, fontFamily: "Sora, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial", opacity: 0 }}>
            VerbX
          </h1>
        </div>
      </div>
    </div>
  );
}
