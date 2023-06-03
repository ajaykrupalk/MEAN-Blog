/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens : {
      'md': '592px',
      'lg': '800px',
      'xl': '1120px',
      '2xl': '1440px'
    },
    extend: {
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}