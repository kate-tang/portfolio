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
      }
    },
    fontFamily: {
      'mukta': ['Mukta', 'sans-serif']
    }
  },
  darkMode: 'class',
  plugins: [],
}
