/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    './**/*.html',
    './index.html',
    './kantin.html',
    './about.html',
    './KOSmecone-detail/*.html',
    './KOSmecone-detail/*.html',
    './KOSmecone-user/user.html',
    // 'KOSmecone-user/masuk.html',
    // 'KOSmecone-user/daftar.html',
    './KOSmecone-user/*.html',

  ],
  theme: {
    screens: {
      xs1: "270px",
      sm1: "400px",
      md1: "620px",
      lg1: "776px",
      xl1: "1240px",
    },
    extend: {},
  },
  plugins: [],
}