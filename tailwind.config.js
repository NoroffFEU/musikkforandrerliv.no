/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./pages/*.html"],
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
      "alt-hover-red": "#be4e43",
      "forest-green": "#304B42",
      "mint-green": "#b2cac2",
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

    extend: {
      backgroundImage: {
        tompe: "url('/assets/placeholder-images/IMG_4216.webp')",
      },
      backgroundImage: {
        ourWorkHeroImage:
          "url('../assets/placeholder-images/heroImg_testing.jpg')",
      },
      plugins: [],
    },
  },
};
