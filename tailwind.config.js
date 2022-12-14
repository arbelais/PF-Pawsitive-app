/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': '1536px'
    },
    extend: {
      colors: {
        pwgreen: {
          50: "#ecf8f1",
          100: "#c7ead6",
          200: "#a2dcbb",
          300: "#7dcf9f",
          400: "#58c184",
          500: "#3ea76a",
          600: "#308253",
          700: "#235d3b",
          800: "#153823",
          900: "#07130c",
        },
        pwpurple: {
          50: "#f8ecf3",
          100: "#eac7dc",
          200: "#dca2c4",
          300: "#cf7dac",
          400: "#c15895",
          500: "#a73e7b",
          600: "#823060",
          700: "#5d2344",
          800: "#381529",
          900: "#13070e",
        },
      },
      backgroundImage: {
        hero: "url('/img/hero/hero-bg.png')",
        pets: "url('/img/pets/pets-bg.png')",
        services: "url('/img/services/bg.png')",
        adoption: "url('/img/adoption/bg.png')",
        newsletterYellow: "url('/img/newsletter/bg-green-lighter.svg')",
        newsletterOrange: "url('/img/newsletter/bg-green.png')",
        footer: "url('/img/footer/bg.svg')",
      },
    },
  },
  plugins: [],
};
