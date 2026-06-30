/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        char: "#1a1a1a",
        char2: "#141414",
        line: "#2a2a2a",
        brand: "#E31E24",
        brandhi: "#ff3b41",
        muted: "#9a9a9a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1280px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(227,30,36,0.5), 0 12px 40px -12px rgba(227,30,36,0.45)",
        card: "0 18px 50px -20px rgba(0,0,0,0.8)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
