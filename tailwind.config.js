/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    './*.html',
    './**/*.html',
    './index.html',
    './produksi/*.html'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs1: "270px",
      sm1: "400px",
      md1: "620px",
      lg1: "776px",
      xl1: "1240px",
    },
    extend: {
      backgroundImage: {
        'bg-smecone1': "url('asset/smecone1.png')",
      },
    },
  },
  plugins: [],
}