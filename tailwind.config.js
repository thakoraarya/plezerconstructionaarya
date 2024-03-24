/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:"#895194",
        secondary:"#7CB7DF",
        tertiary:{
          dark:"#255D1A",
          light:"#04AA6D",
        }
      },
      fontFamily:{
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        inter:['var(--font-inter)',...fontFamily.mono]
      }
    },
  },
  plugins: [],
}
