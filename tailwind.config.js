/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1300px",
      },
      fontFamily: {
        chivo: ["'Chivo'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
