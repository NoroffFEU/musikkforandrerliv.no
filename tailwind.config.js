/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      //add your extensions here colors, fonts, etc..
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "justAnotherHand": ["Just Another Hand","sans-serif"]
      },
    },
  },
  plugins: [],
}

