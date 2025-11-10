/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
  // Theme palette refresh (Nov 2025)
  primary: "#FFC1CC", // Light Pink (primary brand color)
  background: "#FFFFFF", // Global page background
  secondary: "#FFC1CC", // Use Light Pink for headings and brand accents
  lavender: "#C3AED6", // Lavender secondary accent
        blush: "#FFD1DC", // Soft blush accent
        softgray: "#A9A9A9", // Neutral text/support
        tertiary: "#FFE4E1", // Legacy soft panel background (kept for subtle sections)
        // Retain legacy tokens (could deprecate later) mapped to closest new tones
        "black-100": "#FFC1CC",
        "black-200": "#FFD1DC",
        "white-100": "#FFFFFF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        
      },
    },
  },
  plugins: [],
};