/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFE5D9",
        secondary: "#D8E2DC",
        "text-primary": "#FD7462",
        melon: "#FEC5BB",
        "pale-pink": "#FCD5CE",
        "misty-rose": "#FAE1DD",
        peach: "#FEC89A",
        plaitinum: "#E8E8E4",
      },
    },
  },
  plugins: [],
};
