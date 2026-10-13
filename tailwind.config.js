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

        /* ---- Light ground ----
         *
         * The site is moving from black to white. These are measured against a
         * #FFFFFF ground, not picked by eye, because going light changes what
         * the brand colours are allowed to do:
         *
         *   ember  #E26426 on white = 3.45  -> large display and fills only
         *   aqua   #13D8F6 on white = 1.72  -> NEVER text or a hairline on white.
         *                                      It is a fill, with ink on top.
         *
         * So each brand colour has a "deep" that is safe at body size, and the
         * bright one is kept for marks you look at rather than read.
         */

        /* page grounds */
        paper: {
          DEFAULT: "#FFFFFF", // the one ground
          raised: "#FAFAF8",  // a panel lifted off it
          sunk: "#F4F4F1",    // a well / code block
        },
        /* rules - non-text, so low ratios are correct here */
        rule: {
          DEFAULT: "#E2E2DF",
          strong: "#D8D8D4",
        },
        /* text on paper */
        ink: {
          DEFAULT: "#121214", // primary       18.71
          muted: "#55555E",   // secondary      7.38
          faint: "#6E6E78",   // captions       5.04  (the old #85858F failed at 3.65)
          /* the dark surfaces, kept so the few inverted blocks still have tokens */
          900: "#000000",
          800: "#08080A",
          700: "#0E0E11",
          600: "#151517",
          500: "#1F1F23",
        },
        ember: {
          DEFAULT: "#E26426", // brand orange - fills, large display, marks
          soft: "#F0854A",
          deep: "#AD4613",    // 5.73 on white - safe for body text and small marks
        },
        aqua: {
          DEFAULT: "#13D8F6", // brand cyan - FILL ONLY on a light ground (1.72)
          soft: "#63FFF5",
          deep: "#0F616D",    // 7.12 on white - this is the one you write with
        },
        /* kept: the dark-ground text ramp, still used by inverted sections */
        cloud: {
          DEFAULT: "#EDF1F7",
          muted: "#9AA6B8",
          faint: "#5F6B7E",
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
