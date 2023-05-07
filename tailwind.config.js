/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      //min-width
      mobile: { max: "768px" },
      pc: "769px",
    },

    extend: {
    },
  },
  plugins: [],
};
