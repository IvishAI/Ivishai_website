/**
 * AmbientBackground - the restrained "infrastructure" backdrop:
 * a slowly drifting grid plus two soft brand-colour glows.
 * Purely decorative; sits behind hero content (pointer-events-none, -z).
 *
 * Props:
 *   variant  "ember" | "aqua" | "dual" - glow tint, default "dual"
 */
const AmbientBackground = ({ variant = "dual" }) => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* drifting grid */}
      <div className="absolute inset-0 bg-grid animate-grid-drift opacity-[0.5]" />
      {/* fade grid at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 30%, #000000 78%)",
        }}
      />
      {/* soft glows */}
      {(variant === "aqua" || variant === "dual") && (
        <div
          className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full blur-[120px] opacity-25 animate-pulse-soft"
          style={{ background: "radial-gradient(circle, #13D8F6, transparent 70%)" }}
        />
      )}
      {(variant === "ember" || variant === "dual") && (
        <div
          className="absolute top-10 right-0 h-[380px] w-[380px] rounded-full blur-[120px] opacity-20 animate-pulse-soft"
          style={{ background: "radial-gradient(circle, #E26426, transparent 70%)" }}
        />
      )}
    </div>
  );
};

export default AmbientBackground;
