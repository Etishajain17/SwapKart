/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      minHeight: {
        '70': '70px',
      },
      
      colors: {
        'primary': 'rgb(255, 81, 81)',
        'grey' :'rgb(65, 81, 97)',
        'bordercolor' :'rgba(0, 0, 0, 0.07)',
         white: colors.white,
         black : colors.black,
      },
      screens:{
        'middle': '920px',
      },
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
