/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    colors: {
      "sunset-red": "#EE6352",
      "primary-green": "#5B8E7D",
      "sky-blue": "#66C3FF",
      "ivory-beige": "#F8EED1",
      "dark-green": "#363732",
      "alt-red": "#81362C",
      "light-red": "#FCE2DB",
      "hover-red": "#F28077",
      "forest-green": "#304B42",
      "frost-blue": "#EBF7FF",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      sans: [
        "Montserrat",
        "sans-serif",
      ] /* Sans keyword sets this to default font */,
      justAnotherHand: ["Just Another Hand", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
