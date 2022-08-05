const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./index.html'],
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
      boxShadow: {
          link: "0 -2px 0 0 #059669 inset",
      },
      minHeight: {
          home: "500px"
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
