/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    './**/*.html',
    './KOSmecone - about/index.html',
    './KOSmecone - detail/detail.html',
    './KOSmecone - detail/*.html',
    './KOSmecone - login/index.html',
    './KOSmecone - login/KOSmecone - loginn/index.html',
    './KOSmecone - login/KOSmecone - regist/index.html',
    './KOSmecone - produk/index',

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