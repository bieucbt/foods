/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'Baumans': ['Baumans', "system-ui"]
      },
      boxShadow: {
        primary: '-5px -5px 15px rgba(255, 255, 255, 0.15),5px 5px 15px rgba(0, 0, 0, 0.35)'
      }
    },
  },
  plugins: [],
}

