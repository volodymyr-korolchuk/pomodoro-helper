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
        stars: " rgb(3 7 18)",
      },
      fontFamily: {
        koulen: "Koulen",
        martian: "Martian Mono",
      },
    },
  },
  plugins: [],
};
