module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: '#FFFFFF',  // Light mode background
        primaryText: '#333333',        // Dark gray text
        softBlue: '#A7CEE8',           // Soft blue accent
        deepPurple: '#5B3E96',         // Deep purple accent

        // ---- Design tokens for the pages brought over from the rebuild ----
        // Neutral black surfaces to match the existing site (not the blue base).
        ink: {
          DEFAULT: "#000000", // page base - true black, same as the rest of the site
          800: "#08080A",
          700: "#0E0E11", // raised surface
          600: "#151517", // card surface
          500: "#1F1F23",
        },
        ember: {
          DEFAULT: "#E26426", // brand orange (from logo)
          soft: "#F0854A",
          deep: "#AD4613",
        },
        aqua: {
          DEFAULT: "#13D8F6", // brand cyan (from logo)
          soft: "#63FFF5",
          deep: "#0F616D",
        },
        cloud: {
          DEFAULT: "#EDF1F7", // primary text
          muted: "#9AA6B8",   // secondary text
          faint: "#5F6B7E",   // tertiary / captions
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        display: ['Sora', 'DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(19, 216, 246, 0.25)",
        ember: "0 0 40px -12px rgba(226, 100, 38, 0.3)",
        lift: "0 20px 50px -20px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "ember-aqua": "linear-gradient(90deg, #E26426 0%, #13D8F6 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "grid-drift": "grid-drift 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require('daisyui')],
}
