/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "back": "#1a1a1d",
        "btxt": "#c3073f",
        "stxt": "#4e4e50"
      },
      fontFamily: {
        "paci": "Pacifico"
      },
      screens: {
        "sm": "430px",
        "md": "768px",
        "lg": "1024px"
      }
    },
  },
  plugins: [],
}