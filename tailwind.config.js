/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B7B5FF",
        danger: "#f87171",
        accent: "#22c55e",
        nature: "#4ade80",
      },
      fontFamily: {
        koulen: "Koulen",
      },
    },
  },
  plugins: [],
};
