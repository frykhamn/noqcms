/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat', 'sans-serif'],
        "noto": ['Noto Sans', 'sans-serif'],

      },
      colors: {
        "acc-blue": "#18A0FB",
        "light-txt": "#E5E5E5",
        "bkg-dark": "#1D6677",
        "bkg-light": "#BFE1DE",
      },
    },
  },
  plugins: [],
}

