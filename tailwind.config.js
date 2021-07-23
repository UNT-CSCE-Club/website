const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // UNT
        primary: {
          soft: '#B9DCD2',
          light: '#00A950',
          DEFAULT: '#00853E',
          dark: '#006747',
        },
        secondary: {
          soft: '#FFB1BB',
          DEFAULT: '#EF4B81',
        },
        'accent-yellow': '#C4D600',
        'accent-blue': '#00A9E0',
        'accent-purple': '#AD1AAC',
        'accent-gray': '#53565A',
        // Discord
        blurple: '#7289DA',
      },
    },
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
