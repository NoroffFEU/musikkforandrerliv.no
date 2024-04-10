/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./pages/*.html"
  ],
  theme: {
    screens: {
      'mobile': {'max': '599px'},
      // => @media (max-width: 599px) { ... }
 
      'tablet': {'min': '600px', 'max': '1199px'},
      // => @media (min-width: 600px and max-width: 1199px) { ... }
 
      'desktop': {'min': '1200px', 'max': '1440px'},
      // => @media (min-width: 1200px and max-width: 1440px) { ... }
    },
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
      sans: ["Montserrat", "sans-serif"], /* Sans keyword sets this to default font */
      justAnotherHand: ["Just Another Hand","sans-serif"],
      inter: ["Inter", "sans-serif"],
    },

    extend: {
        backgroundImage: {
          'tompe': "url('/assets/placeholder-images/IMG_4216.webp')",
        },
        backgroundImage: {
          'ourWorkHeroImage': "url('../assets/placeholder-images/heroImg_testing.jpg')",
        },
    plugins: [],
    },
  }
}
