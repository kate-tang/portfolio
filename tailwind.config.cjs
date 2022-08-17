/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0096FF',
        'yellow': '#FBC02D',
        'light': '#F9F2ED',
        'dark': '#1B2430',
      }
    },
    fontFamily: {
      'mukta': ['Mukta', 'sans-serif']
    }
  },
  darkMode: 'class',
  plugins: [],
}
