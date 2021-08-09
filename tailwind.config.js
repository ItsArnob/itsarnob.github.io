const colors = require("tailwindcss/colors");
module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  theme: {
    fontFamily: {
      sans: "poppins, sans-serif",
    },
    screens: { 
      'nav1':'380px',
      'nav2':'500px',
      'heading':'520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px', 
      'xl': '1280px', 
      '2xl': '1536px',
    },
    extend: {
      colors: {
        rose: colors.rose
      },
      gridTemplateColumns: {
        'projects': 'repeat(auto-fit, minmax(320px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
