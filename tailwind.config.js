/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["*.html", "./pages/*.html"],
  theme: {
    colors: {
      "sunset-red": "#EE6352",
      "primary-green": "#5B8E7D",
      "mint-green": "#b2cac2",
      "ivory-beige": "#F8EED1",
      "dark-green": "#363732",
      "alt-red": "#81362C",
      "alt-forest-green": "#304B42",
      "alt-light-red": "#F1DBD3",
      "light-red": "#FCE2DB",
      "hover-red": "#F28077",
      "alt-hover-red": "#be4e43",
      "light-green": "#B2CAC2",
      "dark-charcoal": "#333333",
      "cerebral-grey": "#CCCCCC",
      "custom-gray": "rgba(54, 55, 50, 1)",
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

    extend: {
      backgroundImage: {
        tompe: "url('/assets/placeholder-images/IMG_4216.webp')",
      },
      backgroundImage: {
        ourWorkHeroImage: "url('../assets/placeholder-images/IMG_3779.webp')",
      },
      plugins: [],
    },
  },
};
