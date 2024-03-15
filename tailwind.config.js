/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      //add your extensions here colors, fonts, etc..
      colors: {
        sunsetRed: '#EE6352',
        primaryGreen: '#5b8e7d',
        skyBlue: '#66C3FF',
        ivoryBeige: '#F8EED1',
        darkGreen: '#363732',
        altRed: '#81362C',
        forestGreen: '#304B42',
        frostBlue: '#EBF7FF',
      }
    },
  },
  plugins: [],
}

