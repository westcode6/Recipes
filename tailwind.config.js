/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363"
      },
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
