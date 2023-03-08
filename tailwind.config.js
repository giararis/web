/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        dark: "#204f60",
        primary: "#79a8a9",
        secondary: "#164e63",
        light: "#f4f7f7",
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}