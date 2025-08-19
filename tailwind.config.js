/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
      },
      fontFamily: {
        chivo: ["'Chivo'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
