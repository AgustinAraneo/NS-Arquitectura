/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat'],
        'Montserrat Extra Bold': ['Montserrat Extra Bold'],
        'Montserrat Black': ['Montserrat Black']
      },
      backgroundImage: {
        'home': "url('/images/home.jpg')",
      }
    },
  },
  plugins: [],
}
