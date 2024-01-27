/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B7B5FF",
        danger: "rgb(252 165 165)",
        accent: "#22c55e",
        nature: "#4ade80",
        stars: " rgb(9 9 11)",
      },
      dropShadow: {
        glow: "0 0 12px rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        koulen: "Koulen",
        martian: "Martian Mono",
      },
    },
  },
  plugins: [],
};
