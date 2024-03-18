/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"], /* Sans keyword sets this to default font */
      justAnotherHand: ["Just Another Hand","sans-serif"],
    },
    
    extend: {
      colors: {  
        'sunset-red': '#EE6352',
        'primary-green': '#5B8E7D',
        'sky-blue': '#66C3FF',
        'ivory-beige': '#F8EED1',
        'dark-green': '#363732',
        'alt-red': '#81362C',
        'forest-green': '#304B42',
        'frost-blue': '#EBF7FF'
      },
    },
  },
  plugins: [],
}


