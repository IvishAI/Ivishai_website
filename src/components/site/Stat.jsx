import CountUp from "./CountUp";

/**
 * Stat - a big count-up number with a label beneath.
 * Used for the locked innovation metrics.
 *
 * Props:
 *   end     number
 *   label   string
 *   prefix  string  e.g. "~"
 *   suffix  string  e.g. "+"
 */
const Stat = ({ end, label, prefix = "", suffix = "", className = "" }) => (
  <div className={`text-center ${className}`}>
    <div className="font-sora text-4xl md:text-5xl lg:text-6xl text-gradient-aqua">
      <CountUp end={end} prefix={prefix} suffix={suffix} />
    </div>
    <div className="mt-2 text-sm md:text-base text-cloud-muted">{label}</div>
  </div>
);

export default Stat;
