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
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
