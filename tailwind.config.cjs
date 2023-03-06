/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['aeonik']
      },
      colors: {
        'background': '#FEFEF6',
        'yellow': '#FFF1BB',
        'main-red': '#FE5150',

      }
    },
  },
  plugins: [],
}