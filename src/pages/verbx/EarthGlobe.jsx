import React, { useEffect, useRef } from "react";
import { geoOrthographic, geoPath, geoCentroid } from "d3-geo";
import { feature } from "topojson-client";
import topo from "world-atlas/countries-110m.json";

const world = feature(topo, topo.objects.countries);

// Countries that stay black with a white outline (outside VerbX's named reach).
// Everything else lights up orange - the ~130+ where VerbX works.
const BLACK = new Set([
  "Antarctica", "Greenland", "Fr. S. Antarctic Lands", "Falkland Is.", "W. Sahara",
  "Kosovo", "N. Cyprus", "Somaliland", "New Caledonia", "Puerto Rico", "Fiji",
  "Vanuatu", "Solomon Is.", "Papua New Guinea", "Iceland", "Bhutan", "Timor-Leste",
  "Belize", "Bahamas", "Jamaica", "Trinidad and Tobago", "Haiti", "Guyana",
  "Eritrea", "S. Sudan", "Serbia", "Slovenia", "Macedonia", "Montenegro",
  "Albania", "Kyrgyzstan", "Taiwan",
]);

// VerbX countries sorted west -> east so they light up in a sweep.
const verbxFeatures = world.features
  .filter((f) => !BLACK.has(f.properties.name))
  .map((f) => ({ f, lon: geoCentroid(f)[0] || 0 }))
  .sort((a, b) => a.lon - b.lon)
  .map((x) => x.f);
const order = new Map();
verbxFeatures.forEach((f, i) => order.set(f, i));

const EarthGlobe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = canvas.clientWidth || 380;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const projection = geoOrthographic().fitExtent(
      [[6, 6], [size - 6, size - 6]],
      { type: "Sphere" }
    );
    const path = geoPath(projection, ctx);

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lambda = 0;
    let active = reduced ? verbxFeatures.length : 0;
    let last = 0;
    let raf;

    const render = (t) => {
      if (!reduced) lambda += 0.16;
      projection.rotate([lambda, -14]);
      ctx.clearRect(0, 0, size, size);

      // ocean / sphere
      ctx.beginPath();
      path({ type: "Sphere" });
      ctx.fillStyle = "#000000";
      ctx.fill();

      // land - orange where VerbX works, else black with white outline
      for (const f of world.features) {
        ctx.beginPath();
        path(f);
        const idx = order.get(f);
        const lit = idx !== undefined && idx < active;
        ctx.fillStyle = lit ? "#E26426" : "#101010";
        ctx.fill();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "rgba(255,255,255,0.55)";
        ctx.stroke();
      }

      // globe rim
      ctx.beginPath();
      path({ type: "Sphere" });
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(19,216,246,0.4)";
      ctx.stroke();

      if (!reduced && active < verbxFeatures.length && t - last > 60) {
        active += 1;
        last = t;
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={ref}
      className="h-[300px] w-[300px] md:h-[420px] md:w-[420px]"
      aria-label="Rotating globe highlighting the countries where VerbX works"
    />
  );
};

export default EarthGlobe;
