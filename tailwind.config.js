/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFE5D9",
        secondary: "#66AD9C",
        "text-primary": "#FD7462",
        melon: "#FEC5BB",
        yellow: "#F6BD60",
        "dark-pink": "#F28482",
        "pale-pink": "#FCD5CE",
        "misty-rose": "#FAE1DD",
        peach: "#FEC89A",
        plaitinum: "#E8E8E4",
        "dark-blue": "#006D77",
        "light-blue": "#83C5BE",
        "medium-green": "#60D394",
        "lime-green": "#AAF683",
        "dark-green": "#6B9080",
      },
    },
    fontFamily: {
      abril: ["var(--abril-font)"],
      montserrat: ["var(--montserrat-font)"],
      lobster: ["var(--lobster-font)"],
      shadows: ["var(--shadows-font)"],
    },
  },
  plugins: [],
};
