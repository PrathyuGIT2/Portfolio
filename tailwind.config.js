/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
  // Fall theme palette
  primary: "#D95F1A", // Pumpkin orange
  background: "#FFF2E0", // Warm cream background
  secondary: "#AE4E1D", // Burnt orange accent
  lavender: "#C27A2C", // Coppery accent for gradient use
        blush: "#F2C57C", // Amber accent
        softgray: "#6B4C36", // Warm neutral text/support
        tertiary: "#F9E5D1", // Soft panel background
        // Retain legacy tokens mapped to fall tones
        "black-100": "#D95F1A",
        "black-200": "#F2C57C",
        "white-100": "#FFF2E0",
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