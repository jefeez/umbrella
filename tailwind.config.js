/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: 'JetBrains Mono',
      },
      width: {
        18: '4.5rem',
      },
      height: {
        18: '4.5rem',
      },
      colors: {
        dark: {
          1000: '#141414',
          900: '#1a1a1a',
          800: '#1f1f1f',
          700: '#242424',
          600: '#292929',
          500: '#2e2e2e',
          400: '#333333',
          300: '#383838',
          200: '#3d3d3d',
          100: '#424242',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }), require('@tailwindcss/forms')],
};
